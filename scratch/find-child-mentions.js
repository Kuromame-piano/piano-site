import fs from 'fs';

const source = fs.readFileSync('src/data/areas.ts', 'utf8');

const arrayStart = source.indexOf('export const areas: Area[] = [');
const arrayEnd = source.lastIndexOf('];');
const areasContent = source.slice(arrayStart, arrayEnd);

const blocks = [];
let depth = 0;
let start = -1;
for (let i = 0; i < areasContent.length; i++) {
    const char = areasContent[i];
    if (char === '{') {
        if (depth === 0) start = i;
        depth++;
    } else if (char === '}') {
        depth--;
        if (depth === 0 && start !== -1) {
            blocks.push(areasContent.slice(start, i + 1));
        }
    }
}

const childKeywords = ['未就学', 'お子様', 'お子さま', '子供', '子ども', '送迎', 'お迎え', '共働き', '保育園', '兄弟', 'きょうだい', '学校', '塾', '学童', '受験'];

console.log(`Checking ${blocks.length} areas for child mentions in content fields...`);

blocks.forEach(block => {
    const slugMatch = block.match(/slug:\s*"([^"]+)"/);
    const nameMatch = block.match(/name:\s*"([^"]+)"/);
    if (!slugMatch || !nameMatch) return;
    const slug = slugMatch[1];
    const name = nameMatch[1];

    // features を除いたテキストをチェックする
    const textWithoutFeatures = block.replace(/features:\s*\[[\s\S]*?\],/g, '');

    const found = [];
    childKeywords.forEach(kw => {
        if (textWithoutFeatures.includes(kw)) {
            found.push(kw);
        }
    });

    if (found.length > 0) {
        console.log(`\n--- ${name} (${slug}) - Found: ${found.join(', ')} ---`);
        // 該当箇所を含む部分を出力
        const lines = textWithoutFeatures.split('\n');
        lines.forEach(line => {
            if (childKeywords.some(kw => line.includes(kw))) {
                console.log(`  > ${line.trim()}`);
            }
        });
    }
});
