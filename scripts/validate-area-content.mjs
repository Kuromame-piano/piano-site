import fs from "fs";

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
            if (ch === "\"") {
                inString = false;
            }
            continue;
        }

        if (ch === "\"") {
            inString = true;
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
    const match = block.match(new RegExp(`${field}:\\s*\"((?:\\\\.|[^\"])*)\"`));
    return match ? match[1] : "";
}

function extractStringArray(content) {
    return [...content.matchAll(/\"((?:\\.|[^\"])*)\"/g)].map((m) => m[1]);
}

function ngramSet(text, n = 3) {
    const normalized = text.replace(/\s+/g, "").replace(/[。、,.]/g, "");
    const grams = new Set();
    for (let i = 0; i <= normalized.length - n; i += 1) {
        grams.add(normalized.slice(i, i + n));
    }
    return grams;
}

function jaccardSimilarity(a, b) {
    const aGrams = ngramSet(a, 3);
    const bGrams = ngramSet(b, 3);
    if (aGrams.size === 0 && bGrams.size === 0) return 1;

    let intersection = 0;
    for (const g of aGrams) {
        if (bGrams.has(g)) {
            intersection += 1;
        }
    }
    const union = aGrams.size + bGrams.size - intersection;
    return union === 0 ? 1 : intersection / union;
}

const blocks = findAreaBlocks(source);
const errors = [];
const metas = new Map();
const areaData = [];

for (const block of blocks) {
    const slug = extractString(block, "slug");
    const name = extractString(block, "name");
    if (!slug || !name) continue;

    const faqMatch = block.match(/faqs:\s*\[(?<content>[\s\S]*?)\],\s*\r?\n\s*uniqueContent:/);
    if (!faqMatch?.groups?.content) {
        errors.push(`[${slug}] faqs を抽出できませんでした。`);
        continue;
    }
    const faqContent = faqMatch.groups.content;
    const questions = [...faqContent.matchAll(/question:\s*\"((?:\\.|[^\"])*)\"/g)].map((m) => m[1]);
    if (questions.length < 6) {
        errors.push(`[${slug}] FAQ件数が不足しています: ${questions.length}`);
    }

    const landmarksMatch = block.match(/landmarks:\s*\[(?<content>[^\]]*)\]/);
    const landmarks = landmarksMatch?.groups?.content
        ? extractStringArray(landmarksMatch.groups.content)
        : [];
    const localTerms = [
        name,
        ...landmarks
            .map((x) => x.replace(/周辺/g, "").replace(/駅/g, "").replace(/エリア/g, "").trim())
            .filter((x) => x.length >= 2),
    ];
    const localQuestionCount = questions.filter((q) =>
        localTerms.some((term) => q.includes(term))
    ).length;
    if (localQuestionCount < 3) {
        errors.push(`[${slug}] 地域語句を含むFAQが3件未満です: ${localQuestionCount}`);
    }

    const metaDescription = extractString(block, "metaDescription");
    if (!metaDescription) {
        errors.push(`[${slug}] seo.metaDescription がありません。`);
    } else {
        if (metaDescription.length < 90 || metaDescription.length > 130) {
            errors.push(`[${slug}] metaDescription文字数が範囲外です: ${metaDescription.length}`);
        }
        if (metas.has(metaDescription)) {
            errors.push(`[${slug}] metaDescription が重複しています（${metas.get(metaDescription)}）。`);
        } else {
            metas.set(metaDescription, slug);
        }
    }

    const relatedMatch = block.match(/relatedAreas:\s*\[(?<content>[^\]]*)\]/);
    const relatedAreas = relatedMatch?.groups?.content
        ? extractStringArray(relatedMatch.groups.content)
        : [];
    if (relatedAreas.length < 3 || relatedAreas.length > 4) {
        errors.push(`[${slug}] relatedAreas 件数が不正です: ${relatedAreas.length}`);
    }

    const reassuranceMatch = block.match(/cta:\s*\{[\s\S]*?reassurance:\s*\[(?<content>[\s\S]*?)\]/);
    const reassurance = reassuranceMatch?.groups?.content
        ? extractStringArray(reassuranceMatch.groups.content)
        : [];
    if (reassurance.length !== 3) {
        errors.push(`[${slug}] cta.reassurance は3件固定です。現在: ${reassurance.length}`);
    }

    const needSolutionsMatch = block.match(/needSolutions:\s*\[(?<content>[\s\S]*?)\],\s*\r?\n\s*seo:/);
    const needCount = needSolutionsMatch?.groups?.content
        ? [...needSolutionsMatch.groups.content.matchAll(/need:\s*\"/g)].length
        : 0;
    if (needCount !== 3) {
        errors.push(`[${slug}] needSolutions は3件固定です。現在: ${needCount}`);
    }

    const painBlocks = [...block.matchAll(/painPoints:\s*\[(?<content>[\s\S]*?)\]/g)];
    const fitBlocks = [...block.matchAll(/fitPoints:\s*\[(?<content>[\s\S]*?)\]/g)];
    if (painBlocks.length !== 2 || fitBlocks.length !== 2) {
        errors.push(`[${slug}] personas の painPoints / fitPoints の数が不正です。`);
    } else {
        for (const p of painBlocks) {
            const count = extractStringArray(p.groups.content).length;
            if (count !== 3) {
                errors.push(`[${slug}] painPoints が3件ではありません。`);
            }
        }
        for (const f of fitBlocks) {
            const count = extractStringArray(f.groups.content).length;
            if (count !== 3) {
                errors.push(`[${slug}] fitPoints が3件ではありません。`);
            }
        }
    }

    areaData.push({
        slug,
        relatedAreas,
        compareText: `${extractString(block, "uniqueContent")} ${extractString(block, "areaGuide")}`,
    });
}

const slugSet = new Set(areaData.map((a) => a.slug));
if (slugSet.size !== 18) {
    errors.push(`エリア件数が18件ではありません: ${slugSet.size}`);
}

for (const area of areaData) {
    for (const rel of area.relatedAreas) {
        if (!slugSet.has(rel)) {
            errors.push(`[${area.slug}] relatedAreas に存在しない slug: ${rel}`);
        }
    }
}

for (let i = 0; i < areaData.length; i += 1) {
    for (let j = i + 1; j < areaData.length; j += 1) {
        const sim = jaccardSimilarity(areaData[i].compareText, areaData[j].compareText);
        if (sim > 0.7) {
            errors.push(
                `本文類似度が閾値超過: ${areaData[i].slug} <-> ${areaData[j].slug} (${sim.toFixed(3)})`
            );
        }
    }
}

if (errors.length > 0) {
    console.error("Area content validation failed:");
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
}

console.log(`Area content validation passed: ${areaData.length} areas checked.`);
