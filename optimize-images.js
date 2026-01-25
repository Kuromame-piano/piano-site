import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const VALID_SUFFIXES = ['_saiyou.png'];
// Adding other potentially large images found in the file list
const OTHER_LARGE_IMAGES = [
    'harumi-kachidoki.png',
    'kiyosumi-shirakawa.png',
    'monzen-nakacho.png',
    'morishita-sumiyoshi.png',
    'nihonbashi.png',
    'toyosu.png',
    'harumi_katidoki.png',
    'kiyosumisirakawa.png',
    'monnzennnakatyou.png',
    'nihonnbasi.png'
];

const TARGET_DIR = './public/images/areas';
const QUALITY = 80;
const MAX_WIDTH = 1200;

async function optimzeImages() {
    try {
        const files = await fs.readdir(TARGET_DIR);

        for (const file of files) {
            if (!file.endsWith('.png')) continue;

            const isTarget = VALID_SUFFIXES.some(suffix => file.endsWith(suffix)) || OTHER_LARGE_IMAGES.includes(file);

            if (isTarget) {
                const inputPath = path.join(TARGET_DIR, file);
                const outputFilename = file.replace(/\.png$/, '.webp');
                const outputPath = path.join(TARGET_DIR, outputFilename);

                console.log(`Optimizing: ${file} -> ${outputFilename}`);

                await sharp(inputPath)
                    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
                    .webp({ quality: QUALITY })
                    .toFile(outputPath);

                console.log(`Done: ${outputFilename}`);
            }
        }
        console.log('All images optimized.');
    } catch (error) {
        console.error('Error optimizing images:', error);
    }
}

optimzeImages();
