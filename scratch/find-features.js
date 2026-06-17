import fs from 'fs';

const source = fs.readFileSync('src/data/areas.ts', 'utf8');

// エリア名と features を抽出する
const areaMatches = [...source.matchAll(/slug:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?features:\s*\[([\s\S]*?)\]/g)];

console.log(`Found ${areaMatches.length} areas with features:`);
areaMatches.forEach(m => {
    const slug = m[1];
    const name = m[2];
    const featuresText = m[3].trim();
    if (featuresText) {
        console.log(`\n--- ${name} (${slug}) ---`);
        console.log(featuresText);
    }
});
