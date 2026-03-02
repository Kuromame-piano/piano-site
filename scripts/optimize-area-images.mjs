import sharp from 'sharp';
import { readdir, stat, unlink, rename } from 'fs/promises';
import { join } from 'path';

const IMAGES_DIR = 'public/images/areas';
const MAX_WIDTH = 1920; // フルHD対応
const QUALITY = 82; // 高画質を維持しつつファイルサイズを削減

async function optimizeImages() {
    console.log('🖼️  画像最適化を開始します...\n');

    try {
        const files = await readdir(IMAGES_DIR);
        const webpFiles = files.filter(file => file.endsWith('.webp'));

        if (webpFiles.length === 0) {
            console.log('最適化する画像が見つかりませんでした。');
            return;
        }

        console.log(`📊 ${webpFiles.length}個の画像を処理します\n`);

        for (const file of webpFiles) {
            const inputPath = join(IMAGES_DIR, file);
            const tempPath = join(IMAGES_DIR, `optimized_${file}`);

            try {
                // 元のファイルサイズを取得
                const originalStats = await stat(inputPath);
                const originalSize = originalStats.size / 1024 / 1024; // MB

                // 元の画像情報を取得
                const metadata = await sharp(inputPath).metadata();

                console.log(`処理中: ${file}`);
                console.log(`  元のサイズ: ${originalSize.toFixed(2)} MB`);
                console.log(`  元の解像度: ${metadata.width}x${metadata.height}px`);

                // 画像を最適化して一時ファイルに保存
                await sharp(inputPath)
                    .resize({
                        width: MAX_WIDTH,
                        height: undefined,
                        fit: 'inside',
                        withoutEnlargement: true, // 元の画像より大きくしない
                    })
                    .webp({
                        quality: QUALITY,
                        effort: 6, // 圧縮の努力度 (0-6, 高いほど時間がかかるが圧縮率が良い)
                    })
                    .toFile(tempPath);

                // 最適化後のファイルサイズを取得
                const optimizedStats = await stat(tempPath);
                const optimizedSize = optimizedStats.size / 1024 / 1024; // MB
                const optimizedMetadata = await sharp(tempPath).metadata();
                const reduction = ((originalSize - optimizedSize) / originalSize * 100);

                console.log(`  最適化後: ${optimizedSize.toFixed(2)} MB (${optimizedMetadata.width}x${optimizedMetadata.height}px)`);
                console.log(`  削減率: ${reduction.toFixed(1)}% 🎉\n`);

                // 元のファイルを削除して、最適化版をリネーム
                await unlink(inputPath);
                await rename(tempPath, inputPath);

            } catch (error) {
                console.error(`  ❌ エラー: ${error.message}\n`);
                // エラーが発生した場合、一時ファイルをクリーンアップ
                try {
                    await unlink(tempPath);
                } catch {}
            }
        }

        console.log('✅ すべての画像の最適化が完了しました！');
        console.log('\n💡 ヒント: git status で変更を確認し、git add で変更をステージングしてください。');

    } catch (error) {
        console.error('❌ 画像ディレクトリの読み込みに失敗しました:', error.message);
        process.exit(1);
    }
}

// スクリプト実行
optimizeImages().catch(console.error);
