import fs from 'fs';

const source = fs.readFileSync('src/data/areas.ts', 'utf8');

// エリアの定義ブロックを個別に切り出す
// エリア配列の開始: export const areas: Area[] = [
const arrayStart = source.indexOf('export const areas: Area[] = [');
const arrayEnd = source.lastIndexOf('];');
const areasContent = source.slice(arrayStart, arrayEnd);

// 各オブジェクト（{} で囲まれたブロック）を抽出する
// ネストを考慮しつつ簡易的に切り出すか、あるいは regex で slug と {} を取る
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

const childKeywords = ['未就学', 'お子', '家族', '送迎', 'お迎え', '共働き', '保育園', '兄弟', 'きょうだい', '学校', '塾', '学童', '受験'];

console.log(`Parsed ${blocks.length} area blocks.`);

blocks.forEach(block => {
    const slugMatch = block.match(/slug:\s*"([^"]+)"/);
    const nameMatch = block.match(/name:\s*"([^"]+)"/);
    if (!slugMatch || !nameMatch) return;
    const slug = slugMatch[1];
    const name = nameMatch[1];

    const featuresMatch = block.match(/features:\s*\[([\s\S]*?)\]/);
    const featuresText = featuresMatch ? featuresMatch[1].trim() : '';

    const matchedKeywords = [];
    childKeywords.forEach(kw => {
        if (featuresText.includes(kw)) {
            matchedKeywords.push(kw);
        }
    });

    if (matchedKeywords.length > 0) {
        console.log(`\n=== Area: ${name} (${slug}) - Matched: ${matchedKeywords.join(', ')} ===`);
        console.log(featuresText);
    }
});
