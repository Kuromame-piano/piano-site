import fs from "fs";
import path from "path";

const filePath = "src/data/areas.ts";
const source = fs.readFileSync(filePath, "utf8");

function findAreaBlocks(text) {
    const start = text.indexOf("export const areas: Area[] = [");
    if (start === -1) throw new Error("Areas array not found");
    const equalPos = text.indexOf("=", start);
    if (equalPos === -1) throw new Error("Areas array assignment not found");
    const bracketStart = text.indexOf("[", equalPos);
    if (bracketStart === -1) throw new Error("Areas array start bracket not found");

    const blocks = [];
    let depth = 0;
    let inString = false;
    let stringChar = null;
    let escaped = false;
    let objStart = -1;

    for (let i = bracketStart + 1; i < text.length; i += 1) {
        const ch = text[i];

        if (inString) {
            if (escaped) {
                escaped = false;
                continue;
            }
            if (ch === "\\") {
                escaped = true;
                continue;
            }
            if (ch === stringChar) {
                inString = false;
                stringChar = null;
            }
            continue;
        }

        if (ch === "\"" || ch === "'" || ch === "`") {
            inString = true;
            stringChar = ch;
            continue;
        }

        if (ch === "{") {
            if (depth === 0) objStart = i;
            depth += 1;
            continue;
        }

        if (ch === "}") {
            depth -= 1;
            if (depth === 0 && objStart !== -1) {
                let end = i + 1;
                while (end < text.length && /\s/.test(text[end])) end += 1;
                if (text[end] === ",") end += 1;
                blocks.push(text.slice(objStart, end));
                objStart = -1;
            }
            continue;
        }

        if (depth === 0 && ch === "]") break;
    }

    return blocks;
}

function extractString(block, field) {
    const regex = new RegExp(`(?:["']?${field}["']?)\\s*:\\s*(?:"((?:\\\\.|[^"])*)"|'((?:\\\\.|[^'])*)'|\`([\\s\\S]*?)\`)`);
    const match = block.match(regex);
    if (!match) return "";
    return match[1] || match[2] || match[3] || "";
}

function extractConsultations(block) {
    const consultationsMatch = block.match(/consultations:\s*\[([\s\S]*?)\]\s*,\s*(?:seo:|cta:)/);
    if (!consultationsMatch) {
        const altMatch = block.match(/consultations:\s*\[([\s\S]*?)\]/);
        if (!altMatch) return [];
        return parseConsultationArray(altMatch[1]);
    }
    return parseConsultationArray(consultationsMatch[1]);
}

function parseConsultationArray(arrayText) {
    const consultations = [];
    let depth = 0;
    let inString = false;
    let stringChar = null;
    let escaped = false;
    let objStart = -1;

    for (let i = 0; i < arrayText.length; i += 1) {
        const ch = arrayText[i];

        if (inString) {
            if (escaped) {
                escaped = false;
                continue;
            }
            if (ch === "\\") {
                escaped = true;
                continue;
            }
            if (ch === stringChar) {
                inString = false;
                stringChar = null;
            }
            continue;
        }

        if (ch === "\"" || ch === "'" || ch === "`") {
            inString = true;
            stringChar = ch;
            continue;
        }

        if (ch === "{") {
            if (depth === 0) objStart = i;
            depth += 1;
            continue;
        }

        if (ch === "}") {
            depth -= 1;
            if (depth === 0 && objStart !== -1) {
                const itemBlock = arrayText.slice(objStart, i + 1);
                const title = extractString(itemBlock, "title");
                const description = extractString(itemBlock, "description");
                consultations.push({ title, description });
                objStart = -1;
            }
            continue;
        }
    }
    return consultations;
}

const specMap = {
    "suitengu-mae": [
        "A. 導入・継続の心構え・ライフスタイルとの両立",
        "B. 受講場所・環境・移動（自宅出張とレンタルスタジオ）",
        "B. 受講場所・環境・移動（自宅出張とレンタルスタジオ）",
        "D. 選曲・受講頻度・受講対象（初心者・再開者などのアプローチ）",
        "C. 練習方法・時間管理（短時間練習、完璧を求めない姿勢）"
    ],
    "hanzomon": [
        "A. 導入・継続の心構え・ライフスタイルとの両立",
        "B. 受講場所・環境・移動（自宅出張とレンタルスタジオ）",
        "B. 受講場所・環境・移動（自宅出張とレンタルスタジオ）",
        "D. 選曲・受講頻度・受講対象（初心者・再開者などのアプローチ）",
        "D. 選曲・受講頻度・受講対象（初心者・再開者などのアプローチ）"
    ],
    "ryogoku": [
        "A. 導入・継続の心構え・ライフスタイルとの両立",
        "B. 受講場所・環境・移動（自宅出張とレンタルスタジオ）",
        "D. 選曲・受講頻度・受講対象（初心者・再開者などのアプローチ）",
        "C. 練習方法・時間管理（短時間練習、完璧を求めない姿勢）",
        "D. 選曲・受講頻度・受講対象（初心者・再開者などのアプローチ）"
    ]
};

function getGuideCategory(slug, idx) {
    if (specMap[slug]) {
        return specMap[slug][idx] || "その他";
    }
    if (idx === 0) return "A. 導入・継続の心構え・ライフスタイルとの両立";
    if (idx === 1) return "B. 受講場所・環境・移動（自宅出張とレンタルスタジオ）";
    if (idx === 2) return "C. 練習方法・時間管理（短時間練習、完璧を求めない姿勢）";
    return "D. 選曲・受講頻度・受講対象（初心者・再開者などのアプローチ）";
}

function categorizeDetailed(sentence, areaName, idx, slug) {
    const mainCat = getGuideCategory(slug, idx);
    
    if (mainCat.startsWith("A")) {
        if (/通う|遠く|負担|生活圏|完結|通いやすさ|教室/.test(sentence)) {
            return "A-1. 通いやすさ・場所選定の重要性";
        }
        if (/リズム|予定|ペース|スケジュール|仕事|家事|両立|外出|プライベート/.test(sentence)) {
            return "A-2. 生活リズム・日常の予定との調和";
        }
        if (/目的|バランス|内容|見直し|確認|テーマ|中級|教養|曲選び|頻度/.test(sentence)) {
            return "A-3. 受講目的・学習バランスの明確化";
        }
        return "A-2. 生活リズム・日常の予定との調和"; // Fallback for A
    }
    
    if (mainCat.startsWith("B")) {
        if (/併用|組み合わせ|どちら|使い分け|両方|使い分/.test(sentence)) {
            return "B-3. 自宅とスタジオの併用・使い分け";
        }
        if (/電子ピアノ|アップライト|防音|音量|配慮|騒音|楽器環境|今ある楽器|弱音|ヘッドホン/.test(sentence)) {
            return "B-4. 電子ピアノ・集合住宅での受講環境";
        }
        if (/自宅|出張|訪問|普段の楽器|レッスン後の練習|普段の練習/.test(sentence)) {
            return "B-1. 出張自宅レッスンの利点";
        }
        if (/スタジオ|響き|響く/.test(sentence)) {
            return "B-2. レンタルスタジオの利点";
        }
        return "B-1. 出張自宅レッスンの利点"; // Fallback for B
    }
    
    if (mainCat.startsWith("C")) {
        if (/完璧|しなくてよい|中断|できない週|気にする|気にしすぎず|負担|諦め|心理的/.test(sentence)) {
            return "C-3. 完璧を求めない心構え・心理的ハードルの低下";
        }
        if (/5〜15|短時間|まとまった時間|時間練習|限られる|細切れ/.test(sentence)) {
            return "C-1. 短時間練習・細切れ時間の活用";
        }
        if (/基礎をすべて|最初からやり直す|基礎教材|やり直すより|初心者や再開者|再開者の場合|再開者や初心者/.test(sentence)) {
            return "C-4. 初心者・再開者向けの練習アプローチ";
        }
        if (/小節|片手|苦手|譜読み|指づかい|ペダル|弾き方|フレーズ|絞って|止まりやすい|つまずく|部分/.test(sentence)) {
            return "C-2. 部分練習・課題の絞り込み";
        }
        return "C-2. 部分練習・課題の絞り込み"; // Fallback for C
    }
    
    if (mainCat.startsWith("D")) {
        if (/好きな曲|曲選び|目標曲|弾きたい曲|曲を軸|選曲/.test(sentence)) {
            return "D-1. 選曲の工夫（好きな曲・目標曲を軸にする）";
        }
        if (/月2回|隔週|毎週|頻度|受講回数|受講ペース/.test(sentence)) {
            return "D-2. 受講頻度の工夫（月2回・隔週・無理のない頻度）";
        }
        if (/課題を小さく|課題を明確|次回のレッスンで課題|目標を|ステップ|課題を絞/.test(sentence)) {
            return "D-3. 次回までの小さな目標設定（スモールステップ）";
        }
        if (/初心者|再開者|中級者|レベル|年齢/.test(sentence)) {
            return "D-4. 受講対象・レベルに応じた指導内容";
        }
        return "D-1. 選曲の工夫（好きな曲・目標曲を軸にする）"; // Fallback for D
    }
    
    return "その他";
}

try {
    const blocks = findAreaBlocks(source);
    
    const consultationCategories = {};
    const detailedGuideCategories = {
        "A-1. 通いやすさ・場所選定の重要性": [],
        "A-2. 生活リズム・日常の予定との調和": [],
        "A-3. 受講目的・学習バランスの明確化": [],
        "B-1. 出張自宅レッスンの利点": [],
        "B-2. レンタルスタジオの利点": [],
        "B-3. 自宅とスタジオの併用・使い分け": [],
        "B-4. 電子ピアノ・集合住宅での受講環境": [],
        "C-1. 短時間練習・細切れ時間の活用": [],
        "C-2. 部分練習・課題の絞り込み": [],
        "C-3. 完璧を求めない心構え・心理的ハードルの低下": [],
        "C-4. 初心者・再開者向けの練習アプローチ": [],
        "D-1. 選曲の工夫（好きな曲・目標曲を軸にする）": [],
        "D-2. 受講頻度の工夫（月2回・隔週・無理のない頻度）": [],
        "D-3. 次回までの小さな目標設定（スモールステップ）": [],
        "D-4. 受講対象・レベルに応じた指導内容": []
    };

    for (const block of blocks) {
        const name = extractString(block, "name");
        const slug = extractString(block, "slug");
        if (!name || !slug) continue;

        // Group consultations
        const consultations = extractConsultations(block);
        for (const cons of consultations) {
            const parts = cons.title.split(/[｜|]/);
            const category = parts[0] ? parts[0].trim() : "その他";
            const restTitle = parts.slice(1).join("｜").trim() || cons.title;

            if (!consultationCategories[category]) {
                consultationCategories[category] = [];
            }
            consultationCategories[category].push({
                areaName: name,
                slug,
                title: restTitle,
                fullTitle: cons.title,
                description: cons.description
            });
        }

        // Group area guide sentences (Detailed)
        const areaGuide = extractString(block, "areaGuide");
        if (areaGuide) {
            const sentences = areaGuide.split("。").map(s => s.trim()).filter(Boolean);
            sentences.forEach((s, idx) => {
                const subCat = categorizeDetailed(s, name, idx, slug);
                if (!detailedGuideCategories[subCat]) {
                    detailedGuideCategories[subCat] = [];
                }
                detailedGuideCategories[subCat].push({
                    areaName: name,
                    slug,
                    text: s + "。"
                });
            });
        }
    }

    // Build Markdown content
    let md = `# エリア別コンテンツ整理（査読・修正用）\n\n`;
    md += `このファイルは、全エリアページの以下のセクションを一文または一項目ごとに分解し、比較・確認しやすいように整理したものです。\n`;
    md += `- **「〇〇でよくあるご相談」**（相談カテゴリーごとに整理）\n`;
    md += `- **「〇〇エリアでレッスンを続けるためのポイント（エリアガイド）」**（一文ごとに分解し、さらに細分化したテーマ別に整理）\n\n`;
    md += `「この表現が気に食わないから直したい」「こんなこと書きたくない」といった修正点を検討する際にご活用ください。\n\n`;
    md += `--- \n\n`;

    md += `## 1. よくあるご相談 (カテゴリー別)\n\n`;
    md += `各エリアの相談項目を、タイトル接頭辞のカテゴリー（「時間」「住環境」「初心者」など）ごとに分類・整理しています。\n\n`;

    const sortedConsultationCats = Object.keys(consultationCategories).sort();
    for (const cat of sortedConsultationCats) {
        md += `### ■ カテゴリー：${cat}\n\n`;
        const items = consultationCategories[cat];
        for (const item of items) {
            md += `- **${item.areaName}** (\`slug: ${item.slug}\`)\n`;
            md += `  - **タイトル**: ${item.fullTitle}\n`;
            md += `  - **回答文章**:  \n`;
            md += `    > ${item.description}\n\n`;
        }
        md += `---\n\n`;
    }

    md += `## 2. エリアでレッスンを続けるためのポイント (細分化カテゴリー・一文別)\n\n`;
    md += `各エリアのエリアガイド（レッスンを続けるためのポイント）を一文ごとに分解し、内容についてさらに細分化したカテゴリー（A-1〜D-4）ごとに整理しています。\n\n`;

    // Function to render parent category header
    const printParentCatHeader = (catKey) => {
        if (catKey.startsWith("A")) return "### ■ A. 導入・心構え・ライフスタイルとの両立\n\n";
        if (catKey.startsWith("B")) return "### ■ B. 受講場所・環境・移動\n\n";
        if (catKey.startsWith("C")) return "### ■ C. 練習方法・時間管理\n\n";
        if (catKey.startsWith("D")) return "### ■ D. 選曲・受講頻度・レッスン形態\n\n";
        return "";
    };

    let currentParent = "";
    const sortedDetailedCats = Object.keys(detailedGuideCategories).sort();
    
    for (const cat of sortedDetailedCats) {
        const parentPrefix = cat.charAt(0);
        if (parentPrefix !== currentParent) {
            currentParent = parentPrefix;
            md += printParentCatHeader(cat);
        }
        
        md += `#### ${cat} (${detailedGuideCategories[cat].length}件)\n\n`;
        const items = detailedGuideCategories[cat];
        for (const item of items) {
            md += `- **${item.areaName}** (\`slug: ${item.slug}\`)\n`;
            md += `  > ${item.text}\n\n`;
        }
        md += `---\n\n`;
    }

    const outputPath = "review_area_content.md";
    fs.writeFileSync(outputPath, md, "utf8");
    console.log(`Successfully generated markdown file at: ${outputPath}`);

} catch (e) {
    console.error("Error generating markdown:", e);
}
