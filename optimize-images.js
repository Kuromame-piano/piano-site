import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'c:/Users/S6sak/piano-site-1/public/images/areas';
const outputDir = 'c:/Users/S6sak/piano-site-1/public/images/areas';

const mapping = {
    'toyosu_saiyou.webp': 'toyosu.webp',
    'kodomo_otoko_tawamann.png': 'ariake.webp',
    'kodomo_jyosei_mannshonn.png': 'shinonome.webp',
    'kodomo_dannsei_kyoudai.png': 'tsukishima.webp',
    'kodomo_jyoseii_tawamann.png': 'kachidoki.webp',
    'harumi_saiyou.webp': 'harumi.webp',
    'kiyosumisirakawa_saiyou.webp': 'kiyosumi-shirakawa.webp',
    'otona_jyosei.png': 'hirano.webp',
    'otona_dannsei.png': 'miyoshi.webp',
    'monnzennnakatyou_saiyou.webp': 'monzen-nakacho.webp',
    'kodomo_dannsei_2.png': 'kiba.webp',
    'kodomo_jyosei_okanemoti.png': 'ecchujima.webp',
    'nihonnbasi_saiyou.webp': 'ningyocho.webp',
    'otona_jyoseii.png': 'suitengu-mae.webp',
    'otona_dannsei_koukyuu.png': 'hamacho.webp',
    'morisita_saiyou.webp': 'morishita.webp',
    'kodomo_jyosei_heyakirei.png': 'sumiyoshi.webp',
    'kodomo_dannsei.png': 'kikukawa.webp',
};

async function processImages() {
    for (const [src, dest] of Object.entries(mapping)) {
        const inputPath = path.join(inputDir, src);
        const outputPath = path.join(outputDir, dest);

        if (fs.existsSync(inputPath)) {
            try {
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);
                console.log(`Processed: ${src} -> ${dest}`);
            } catch (err) {
                console.error(`Error processing ${src}:`, err);
            }
        } else {
            console.warn(`Source file not found: ${src}`);
        }
    }
}

processImages();
