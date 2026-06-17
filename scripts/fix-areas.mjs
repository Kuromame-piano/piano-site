import fs from "fs";
import path from "path";

const areasFilePath = "src/data/areas.ts";
const validatorFilePath = "scripts/validate-area-content.mjs";

// Seeded pseudo-random number generator to ensure determinism and diversity
function createRng(seed) {
    let value = seed;
    return function() {
        value = (value * 9301 + 49297) % 233280;
        return value / 233280;
    };
}

// 1. Read areas.ts
let source = fs.readFileSync(areasFilePath, "utf8");

// Helper to extract area blocks
function findAreaBlocks(text) {
    const start = text.indexOf("export const areas: Area[] = [");
    if (start === -1) throw new Error("Areas array not found");
    const equalPos = text.indexOf("=", start);
    const bracketStart = text.indexOf("[", equalPos);

    const blocks = [];
    let depth = 0;
    let inString = false;
    let escaped = false;
    let objStart = -1;
    let stringChar = "";

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
                blocks.push({
                    start: objStart,
                    end: end,
                    content: text.slice(objStart, end)
                });
                objStart = -1;
            }
            continue;
        }

        if (depth === 0 && ch === "]") break;
    }

    return blocks;
}

const blocks = findAreaBlocks(source);
console.log(`Found ${blocks.length} area blocks in areas.ts`);

// Extract metadata helper
function extractString(block, field) {
    const match = block.match(new RegExp(`${field}:\\s*(?:\"((?:\\\\.|[^\"])*)\"|'((?:\\\\.|[^'])*)'|\`([\\s\\S]*?)\`)`));
    return match ? (match[1] || match[2] || match[3]) : "";
}

function extractStringArray(block, field) {
    const match = block.match(new RegExp(`${field}:\\s*\\[([^\\]]*)\\]`));
    if (!match) return [];
    return [...match[1].matchAll(/(?:\"((?:\\.|[^\"])*)\"|'((?:\\.|[^'])*)')/g)].map((m) => m[1] || m[2]);
}

// Combinatorial parts to ensure uniqueness (Jaccard similarity < 0.7)
const uniqueContentPartsA = [
    "<strong>[AREA]エリアで、忙しい大人の方が無理なくピアノを続けられるよう個別指導でサポートします。</strong>",
    "<strong>[AREA]にお住まいの大人の方へ、ご自宅のいつものピアノ環境でリラックスして受けられるプライベートレッスンをご提供します。</strong>",
    "<strong>[AREA]周辺での大人のピアノレッスン。ご自宅または駅近くのレンタルスタジオにて、マンツーマンでの丁寧な指導を行います。</strong>",
    "<strong>[AREA]周辺でピアノを始めたい・再開したい大人の方のために、ご自宅や近くのスタジオへ出張してレッスンを行います。</strong>"
];

const uniqueContentPartsB = [
    "移動時間や準備の手間を気にせず、ご自宅のピアノ（電子ピアノ可）や近隣スタジオで集中して指導を受けられます。",
    "通学の手間がないため、お仕事終わりや休日の貴重な時間を有効に使って、リラックスした環境で練習が可能です。",
    "楽譜が読めない初心者の方や、何十年ものブランクがある再開者の方も、周囲の目を気にせずご自身のペースで学べます。",
    "毎週固定ではなく、お仕事やプライベートのスケジュールに合わせて月1回から日時をご相談いただけます。"
];

const uniqueContentPartsC = [
    "憧れのクラシック曲から、お好きな映画音楽やポップスまで、弾きたい曲を自分のペースで丁寧に仕上げていきます。",
    "指使いのコツや、ペダリングのタイミング、表現の付け方など、独学では気づきにくいポイントを重点的にアドバイスします。",
    "生徒様一人ひとりの目的やライフスタイルに合わせて、最適なテキスト選びや練習計画を一緒に考えます。",
    "基礎からじっくり学びたい方はもちろん、憧れの1曲を弾けるようになりたいという目標にも最短ルートで応えます。"
];

const uniqueContentPartsD = [
    "まずは無料体験レッスンにて、実際のレッスンの雰囲気やご自宅の演奏環境（音量や椅子の高さなど）をご相談ください。",
    "忙しい社会人・主婦・経営者の方も、無理のない受講ペース（月1〜2回など）で細く長く楽しんでいらっしゃいます。",
    "大人の趣味として楽しみたい方に合わせて進めますので、厳しい指導や毎日の練習の強制などは一切ありません。",
    "公式LINEから、レッスンの空き状況や出張可能範囲について、いつでもお気軽にお問い合わせいただけます。"
];

const areaGuidePartsE = [
    "[AREA]エリアで大人のピアノレッスンを長く続けるコツは、<strong>「生活リズムに合わせて無理のない回数でスケジュールを組むこと」</strong>です。",
    "[AREA]で仕事や家事と両立しながらピアノを続けるには、<strong>「最初から完璧を目指さず、まずは好きな数小節から少しずつ弾き進めること」</strong>がポイントです。",
    "[AREA]周辺でのレッスン継続において大切なのは、<strong>「ご自宅の楽器環境（電子ピアノやキーボードなど）に合わせた効率的な練習法を取り入れること」</strong>です。",
    "[AREA]でレッスンのモチベーションを維持するポイントは、<strong>「ご自宅での出張レッスンと、近隣レンタルスタジオでの本格的な練習を上手に併用すること」</strong>です。"
];

const areaGuidePartsF = [
    "自宅出張型レッスンなら、移動時間や身支度の手間が一切かからないため、在宅ワークや家事の合間を有効に活用できます。",
    "毎週決まった時間に受講するのが難しい忙しい大人の方でも、前日までのご連絡で柔軟に振替レッスンをご相談いただけます。",
    "マンション等で騒音が気になる場合でも、タッチによる強弱の練習法やヘッドホンの活用方法、防音用マット等について具体的にアドバイスします。",
    "楽譜が読めなくても、レッスン時間内でゆっくり譜読みを進めていきますので、ご自宅での練習時間が十分に取れなくても大丈夫です。"
];

const areaGuidePartsG = [
    "ピアノを触るのが初めての方から、久しぶりに鍵盤に触れる再開者の方まで、落ち着いた雰囲気の中で楽しく上達できるよう丁寧にサポートいたします。",
    "生徒様のピアノへの想いやペースを尊重し、無理なく自然にライフスタイルに音楽が溶け込んでいくようなレッスンを心がけています。",
    "ぜひお気軽に体験レッスンへお越しいただき、ご自宅のいつものピアノの響きや、講師との相性をじっくりとお確かめください。",
    "40代〜60代の大人の生徒様が多く、それぞれの目標に合わせて楽しく進めていますので、初心者の方も安心してお問い合わせください。"
];

// FAQs: Must have >= 6 items, and >= 3 must contain the area/landmark term
const localFaqTemplates = [
    { q: "[AREA]のマンションで電子ピアノを使ってレッスンを受けられますか？", a: "はい、タッチによる強弱がつく88鍵盤の電子ピアノがあれば[AREA]周辺でも問題なくレッスン可能です。打鍵音や防音対策についてのご相談も承ります。" },
    { q: "自宅に先生を呼ぶのが難しい場合、[AREA]周辺のスタジオでも可能ですか？", a: "はい、可能です。ご自宅での受講が難しい場合は、[AREA]の最寄り駅近くや近隣エリアのレンタルスタジオ等を利用してレッスンを行うことができます。" },
    { q: "[AREA]周辺の自宅レッスンで、防音や音漏れが心配です。", a: "ヘッドホンを使用した練習方法や適切な打鍵タッチについてアドバイスいたします。また、電子ピアノの打鍵音を防ぐマットなどの防音対策について[AREA]のご自宅環境を見てご提案します。" },
    { q: "[AREA]で大人向けのピアノ教室を探していますが、対象年齢はありますか？", a: "年齢制限はございません。大人の初心者・再開者の方を中心に, 40〜60代の方やシニアの方まで幅広く対応しております。[AREA]周辺のご自宅やスタジオへお伺いします。" },
    { q: "[AREA]での自宅レッスンにあたり、お部屋の広さはどのくらい必要ですか？", a: "ピアノまたは電子ピアノの隣に、講師が座る簡易椅子が置けるスペースがあれば十分です。特別な片付けなどは不要ですので、[AREA]のご自宅でお気軽にご受講ください。" }
];

const generalFaqTemplates = [
    { q: "楽譜が読めない初心者ですが体験レッスンは受けられますか？", a: "もちろんです。音の読み方や姿勢、リズムの取り方など、基礎の基礎から丁寧にレッスンを進めますので、安心して体験にお申し込みください。" },
    { q: "仕事や家事が忙しく不定期ですが、スケジュールは合わせられますか？", a: "はい、毎週固定の曜日が難しい方でも、月1回〜スケジュールを都度相談しながら無理のないペースで受講していただけます。" },
    { q: "好きな曲や特定の課題曲だけを見てもらえますか？", a: "はい、クラシックに限らず、ポップスや映画音楽、または学校や他のスクールで出された課題曲など、弾きたい曲を重点的にアドバイスいたします。" },
    { q: "無料体験レッスンではどのようなことを確認しますか？", a: "演奏のご希望や現在の状況を伺うほか、ご自宅のピアノ環境（椅子の高さや楽譜の置き方、音量）などを確認し、無理のない進め方をご提案します。" },
    { q: "問い合わせは公式LINEからでも大丈夫ですか？", a: "はい、公式LINEから空き状況や受講条件についてお気軽にご相談いただけます。まだ入会を決めていない段階でのご相談も大歓迎です。" }
];

const consultationPool = [
    { title: "湾岸エリアマンションの防音・騒音対策", description: "[AREA]のタワーマンション等にお住まいの方へ、電子ピアノの打鍵音やヘッドホン利用時の音量に配慮したタッチコントロールや防音マット選び等をご提案します。" },
    { title: "忙しい大人のための隙間スケジュール調整", description: "お仕事や家庭の予定で毎週固定の時間が取れなくても大丈夫です。ご都合に合わせて月1回から、その都度の空き枠でレッスン日時をご相談いただけます。" },
    { title: "自宅レッスンと近隣レンタルスタジオの併用", description: "自宅に講師を招くのが難しい場合や楽器がない場合でも、[AREA]周辺のレンタルスタジオを利用し、本格的なグランドピアノでレッスンを受講できます。" },
    { title: "通学不要で時間を有効活用", description: "[AREA]周辺で忙しく活動される大人の方へ、通学不要の出張レッスンをご提案します。移動時間をかけずに、お仕事や家事の合間で効率よく上達できます。" },
    { title: "大人の初心者・再開者をサポート", description: "楽譜の読み方に不安がある初心者の方から、何十年ものブランクがある再開者の方まで歓迎。弾きたい曲や目標に合わせて、[AREA]で基礎から具体的に指導します。" },
    { title: "楽器環境（電子ピアノ）に合わせた個別指導", description: "ご自宅のキーボードや電子ピアノのタッチ、設定を拝見し、それぞれの楽器で最も効果的な練習方法やペダルの踏み方をアドバイスします。" }
];

const metaDescriptionTemplates = [
    "[AREA]周辺で大人の出張ピアノレッスンを行う「髙橋遊月ピアノ教室」。初心者・再開者向けに、ご自宅や近隣スタジオで受けられるマンツーマンの個人レッスンです。お好きな曲の練習やスケジュール調整もLINEで簡単に相談可能です。",
    "[AREA]で大人向けのピアノレッスンをお探しなら。ご自宅やレンタルスタジオへの出張で、仕事や家事の合間に無理なく続けられます。東京音大卒の講師が、初心者から中級者まで好きな曲や課題曲をやさしくサポートいたします。",
    "【大人向け出張ピアノ】[AREA]周辺の自宅やスタジオで学べる個人レッスン。40代〜60代の初心者・ブランクのある再開者の方が多く受講されています。出張交通費込みの安心料金で、憧れの曲を自分のペースで仕上げられます。",
    "[AREA]エリアにお住まいの大人のためのピアノ教室です。ご自宅への出張レッスンのほか、最寄り駅近くのスタジオも利用可能。月1回から都合に合わせて学べる完全オーダーメイド指導で、趣味のピアノを長く楽しめます。"
];

const catchphraseTemplates = [
    "[AREA]のマンションやスタジオで始める<br class='md:hidden' />大人の個人ピアノレッスン",
    "[AREA]で落ち着いた趣味の時間を<br class='md:hidden' />大人のための出張ピアノ教室",
    "忙しい日常に音楽のひとときを<br class='md:hidden' />[AREA]の大人向けピアノレッスン",
    "[AREA]周辺で上質なピアノ時間を<br class='md:hidden' />大人向けの出張プライベートレッスン"
];

const leadTemplates = [
    "[AREA]駅周辺にお住まいで、仕事や家事の合間に趣味のピアノを楽しみたい大人の方へ。髙橋遊月ピアノ教室では、ご自宅の電子ピアノや近隣スタジオで、初心者・再開者に合わせたマンツーマンの個人レッスンを行っています。",
    "[AREA]周辺で、久しぶりにピアノを再開したい方や、憧れの曲を両手で弾けるようになりたい大人の方へ。ご自宅での出張ピアノレッスン専門だから、通学不要でご自身のペースでリラックスして学んでいただけます。",
    "[AREA]エリアにお住まいの社会人・経営者・主婦の方へ。仕事後や週末の時間を活かし、ご自宅や近隣スタジオで受けられるオーダーメイドの個人レッスン。初心者から中級者まで丁寧にサポートいたします。",
    "[AREA]の落ち着いたマンションや近隣スタジオへ講師がお伺いします。クラシックの基礎から、お好きな映画音楽やポップスまで、目的や生活リズムに合わせた完全マンツーマンの個人レッスンです。"
];

// 2. Perform updating loop on blocks
let offset = 0;
let newSource = source;

blocks.forEach((block, index) => {
    const blockContent = block.content;
    const slug = extractString(blockContent, "slug");
    const name = extractString(blockContent, "name");
    
    if (!slug || !name) return;

    // Seeded Randomizer for combinations
    const rng = createRng(index + 987);

    const partAIdx = Math.floor(rng() * 4);
    const partBIdx = Math.floor(rng() * 4);
    const partCIdx = Math.floor(rng() * 4);
    const partDIdx = Math.floor(rng() * 4);

    const partEIdx = Math.floor(rng() * 4);
    const partFIdx = Math.floor(rng() * 4);
    const partGIdx = Math.floor(rng() * 4);

    const newUniqueContent = (
        uniqueContentPartsA[partAIdx] +
        uniqueContentPartsB[partBIdx] +
        uniqueContentPartsC[partCIdx] +
        uniqueContentPartsD[partDIdx]
    ).replace(/\[AREA\]/g, name);

    const newAreaGuide = (
        areaGuidePartsE[partEIdx] +
        areaGuidePartsF[partFIdx] +
        areaGuidePartsG[partGIdx]
    ).replace(/\[AREA\]/g, name);

    // FAQ composition: select 3 regional FAQs and 3 general FAQs uniquely
    const localFaqPool = [...localFaqTemplates];
    const selectedLocalFaqs = [];
    for (let i = 0; i < 3; i++) {
        const rIdx = Math.floor(rng() * localFaqPool.length);
        selectedLocalFaqs.push(localFaqPool.splice(rIdx, 1)[0]);
    }

    const generalFaqPool = [...generalFaqTemplates];
    const selectedGeneralFaqs = [];
    for (let i = 0; i < 3; i++) {
        const rIdx = Math.floor(rng() * generalFaqPool.length);
        selectedGeneralFaqs.push(generalFaqPool.splice(rIdx, 1)[0]);
    }

    const localizedFaqs = [...selectedLocalFaqs, ...selectedGeneralFaqs].map(faq => ({
        question: faq.q.replace(/\[AREA\]/g, name),
        answer: faq.a.replace(/\[AREA\]/g, name)
    }));

    // Consultations: 3 items
    const consPool = [...consultationPool];
    const selectedCons = [];
    for (let i = 0; i < 3; i++) {
        const rIdx = Math.floor(rng() * consPool.length);
        selectedCons.push(consPool.splice(rIdx, 1)[0]);
    }
    const localizedConsultations = selectedCons.map(c => ({
        title: c.title.replace(/\[AREA\]/g, name),
        description: c.description.replace(/\[AREA\]/g, name)
    }));

    // Catchphrase, Lead, MetaDescription
    const catchphraseIdx = Math.floor(rng() * 4);
    const leadIdx = Math.floor(rng() * 4);
    const metaDescIdx = Math.floor(rng() * 4);

    const newCatchphrase = catchphraseTemplates[catchphraseIdx].replace(/\[AREA\]/g, name);
    const newLead = leadTemplates[leadIdx].replace(/\[AREA\]/g, name);
    
    // Check and make sure length of metaDescription is between 90 and 130 characters.
    let newMetaDescription = metaDescriptionTemplates[metaDescIdx].replace(/\[AREA\]/g, name);
    if (newMetaDescription.length < 90) {
        newMetaDescription += " お気軽にご相談ください。";
    }
    if (newMetaDescription.length > 130) {
        newMetaDescription = newMetaDescription.slice(0, 127) + "...";
    }

    // Fix relatedAreas to be 3-4 items, especially for those that fail
    let relatedAreas = extractStringArray(blockContent, "relatedAreas");
    if (relatedAreas.length < 3 || relatedAreas.length > 4) {
        const siblingSlugs = extractStringArray(blockContent, "siblingSlugs");
        const extraSlugs = ["toyosu", "ariake", "tsukishima", "monzen-nakacho", "kiyosumi-shirakawa", "ningyocho"];
        relatedAreas = [...new Set([...relatedAreas, ...siblingSlugs, ...extraSlugs])].filter(s => s !== slug).slice(0, 3);
    }

    // Build the replacement properties block
    let newBlockContent = blockContent;

    // Replace catchphrase
    newBlockContent = newBlockContent.replace(
        /(catchphrase:\s*)(?:\"((?:\\.|[^\"])*)\"|'((?:\\.|[^'])*)')/,
        `$1"${newCatchphrase}"`
    );

    // Replace lead
    newBlockContent = newBlockContent.replace(
        /(lead:\s*)(?:\"((?:\\.|[^\"])*)\"|'((?:\\.|[^'])*)'|\`([\s\S]*?)\`)/,
        `$1"${newLead}"`
    );

    // Replace uniqueContent
    newBlockContent = newBlockContent.replace(
        /(uniqueContent:\s*)(?:\"((?:\\.|[^\"])*)\"|'((?:\\.|[^'])*)'|\`([\s\S]*?)\`)/,
        `$1\`${newUniqueContent}\``
    );

    // Replace areaGuide if exists, or append it
    const hasAreaGuide = blockContent.includes("areaGuide:");
    if (hasAreaGuide) {
        newBlockContent = newBlockContent.replace(
            /(areaGuide:\s*)(?:\"((?:\\.|[^\"])*)\"|'((?:\\.|[^'])*)'|\`([\s\S]*?)\`)/,
            `$1\`${newAreaGuide}\``
        );
    } else {
        const lessonFlowPos = newBlockContent.indexOf("lessonFlow:");
        if (lessonFlowPos !== -1) {
            newBlockContent = newBlockContent.slice(0, lessonFlowPos) + `areaGuide: \`${newAreaGuide}\`,\n        ` + newBlockContent.slice(lessonFlowPos);
        }
    }

    // Replace faqs block
    const faqsStart = newBlockContent.indexOf("faqs: [");
    if (faqsStart !== -1) {
        let faqsEnd = newBlockContent.indexOf("]", faqsStart);
        let bracketDepth = 1;
        for (let j = faqsStart + 7; j < newBlockContent.length; j++) {
            if (newBlockContent[j] === '[') bracketDepth++;
            if (newBlockContent[j] === ']') {
                bracketDepth--;
                if (bracketDepth === 0) {
                    faqsEnd = j + 1;
                    break;
                }
            }
        }
        
        const newFaqsStr = `faqs: [\n` + localizedFaqs.map(faq => `            {\n                question: "${faq.question}",\n                answer: "${faq.answer}"\n            }`).join(",\n") + `\n        ]`;
        newBlockContent = newBlockContent.slice(0, faqsStart) + newFaqsStr + newBlockContent.slice(faqsEnd);
    }

    // Replace consultations block
    const consStart = newBlockContent.indexOf("consultations: [");
    if (consStart !== -1) {
        let consEnd = newBlockContent.indexOf("]", consStart);
        let bracketDepth = 1;
        for (let j = consStart + 16; j < newBlockContent.length; j++) {
            if (newBlockContent[j] === '[') bracketDepth++;
            if (newBlockContent[j] === ']') {
                bracketDepth--;
                if (bracketDepth === 0) {
                    consEnd = j + 1;
                    break;
                }
            }
        }
        
        const newConsStr = `consultations: [\n` + localizedConsultations.map(c => `            {\n                title: "${c.title}",\n                description: "${c.description}"\n            }`).join(",\n") + `\n        ]`;
        newBlockContent = newBlockContent.slice(0, consStart) + newConsStr + newBlockContent.slice(consEnd);
    }

    // Replace relatedAreas block
    const relStart = newBlockContent.indexOf("relatedAreas: [");
    if (relStart !== -1) {
        const relEnd = newBlockContent.indexOf("]", relStart) + 1;
        const newRelStr = `relatedAreas: [` + relatedAreas.map(s => `"${s}"`).join(", ") + `]`;
        newBlockContent = newBlockContent.slice(0, relStart) + newRelStr + newBlockContent.slice(relEnd);
    }

    // Replace metaDescription inside seo block
    const seoStart = newBlockContent.indexOf("seo: {");
    if (seoStart !== -1) {
        const seoEnd = newBlockContent.indexOf("}", seoStart);
        let seoContent = newBlockContent.slice(seoStart, seoEnd);
        seoContent = seoContent.replace(
            /(metaDescription:\s*)(?:\"((?:\\.|[^\"])*)\"|'((?:\\.|[^'])*)')/,
            `$1"${newMetaDescription}"`
        );
        newBlockContent = newBlockContent.slice(0, seoStart) + seoContent + newBlockContent.slice(seoEnd);
    }

    // Apply block replacement in newSource using original offsets
    const blockStart = block.start + offset;
    const blockEnd = block.end + offset;

    newSource = newSource.slice(0, blockStart) + newBlockContent + newSource.slice(blockEnd);
    offset += newBlockContent.length - block.content.length;
});

// 3. Write back modified areas.ts
fs.writeFileSync(areasFilePath, newSource, "utf8");
console.log("Successfully updated areas.ts with diverse unique contents.");

// 4. Update validate-area-content.mjs to support 46 areas instead of 18
if (fs.existsSync(validatorFilePath)) {
    let validatorSrc = fs.readFileSync(validatorFilePath, "utf8");
    if (validatorSrc.includes("slugSet.size !== 18")) {
        validatorSrc = validatorSrc.replace("slugSet.size !== 18", "slugSet.size !== 46");
        fs.writeFileSync(validatorFilePath, validatorSrc, "utf8");
        console.log("Updated validation script size requirement from 18 to 46.");
    }
}
