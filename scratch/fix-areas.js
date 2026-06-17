import fs from "fs";
import path from "path";
// Load the backup areas
import { areas as originalAreas, areaGroups } from "../_archive/area-page-review-before-rewrite/areas.ts";

// Define 5 regional profiles for lead, catchphrase, consultations
const profiles = {
    waterfront: {
        lead: [
            "{name}周辺のマンションやスタジオで、趣味のピアノを始めたい方や久しぶりに再開したい大人の方へ。仕事後や週末の時間を活かし、ご自宅で無理なく続けられる個人指導レッスンです。",
            "{name}エリアにお住まいの大人の方へ。家事や仕事の合間に、ご自宅や近隣スタジオで受けられるオーダーメイドの個人レッスン。初心者から経験者まで丁寧にサポートします。"
        ],
        consultations: [
            {
                title: "マンションでの防音・騒音対策",
                description: "{name}のマンション環境に合わせて、電子ピアノの打鍵音対策やヘッドホン使用時の練習方法、音量への配慮など具体的にアドバイスします。"
            },
            {
                title: "通学不要で仕事や家事と両立",
                description: "移動時間がかからないため、仕事後や家事の合間の時間を有効に活用し、ご自宅で効率よくレッスンを受けられます。"
            },
            {
                title: "電子ピアノに合わせた手の使い方",
                description: "ご自宅の電子ピアノの仕様に合わせて、強弱のつけ方やペダルの踏み方など、無理のない指の動かし方をお伝えします。"
            }
        ]
    },
    urban: {
        lead: [
            "{name}周辺でピアノを学びたい忙しい社会人・主婦の方へ。オフィス近くのスタジオやご自宅で、好きな曲や課題曲に絞った効率的なレッスンを自分のペースでご相談可能です。",
            "{name}エリアにお住まいの社会人・経営者の方へ。仕事帰りや週末の時間を活かし、ご自宅や近隣スタジオで無理なく続けられるマンツーマンの個人ピアノレッスンです。"
        ],
        consultations: [
            {
                title: "仕事帰りに近くのスタジオで受講",
                description: "{name}周辺のレンタルスタジオ等を利用し、本格的なグランドピアノでレッスンを受講できます。ご自宅に楽器がない場合も安心です。"
            },
            {
                title: "月1回からのスケジュール都度調整",
                description: "毎週固定の曜日が難しい忙しい大人の方でも、ご都合に合わせて月1回から日時をご相談いただけます。"
            },
            {
                title: "好きな曲・課題曲の効率的な仕上げ",
                description: "弾きたい部分や、独学で弾きにくい箇所の指使い、表現 of the piece を整えるなど、必要な部分に絞って効率よくアドバイスします。"
            }
        ]
    },
    koto: {
        lead: [
            "{name}エリアのご自宅で、移動時間ゼロで受けられる出張ピアノレッスン。ブランクがある再開者の方や、楽譜の読み方から始めたい初心者の大人の方に最適な個人指導です。",
            "{name}周辺で大人のための落ち着いたレッスンをお探しの方へ。ご自宅のピアノや電子ピアノで、通学不要で無理なく趣味としてピアノを続けられます。"
        ],
        consultations: [
            {
                title: "移動時間ゼロで自宅レッスン",
                description: "清澄白河から公共交通機関で移動可能な範囲で出張します。ご自宅で受けられるため、通学の手間がなく続けやすい環境です。"
            },
            {
                title: "大人の初心者・再開者をサポート",
                description: "楽譜の読み方に不安がある初心者から、何十年ぶりの再開まで対応。大人の趣味として楽しみたいペースに合わせます。"
            },
            {
                title: "音出し時間や楽器の環境調整",
                description: "ご近所への配慮が必要な場合でも、音量調整のコツや練習時間帯について、{name}のご自宅環境に合わせてご提案します。"
            }
        ]
    },
    minatoChiyoda: {
        lead: [
            "{name}周辺で落ち着いた個人レッスンをお探しの社会人や経営者の方へ。仕事後や休日にご自宅やスタジオへ講師が伺い、目的に合わせて丁寧に指導します。",
            "{name}エリアのご自宅やスタジオで、プライベートな時間を有意義にする大人のピアノレッスン。ご都合に合わせたフレキシブルなスケジュールで受講可能です。"
        ],
        consultations: [
            {
                title: "多忙な経営者・社会人の時間管理",
                description: "お仕事が不定期な方でも安心のスケジュール都度相談。夜間や週末など、ご都合の良い時間帯でレッスンをご相談いただけます。"
            },
            {
                title: "ご自宅またはスタジオでプライベートレッスン",
                description: "人目を気にせず集中できる個人レッスン。{name}周辺のご自宅のほか、ご指定 of local studios での受講も可能です。"
            },
            {
                title: "クラシックから他ジャンルまで対応",
                description: "クラシックの基礎はもちろん、ポップスや伴奏、映画音楽など、ご本人が「弾きたい」と思われる曲を最優先で指導します。"
            }
        ]
    },
    bunkyoTaitoSumida: {
        lead: [
            "{name}周辺で大人の趣味・学び直しとしてピアノを始めたい方へ。基礎の見直しから、弾きたいクラシック・ポップスの部分指導まで柔軟に対応する個人レッスンです。",
            "{name}エリアにお住まいの方へ。ご自宅やレンタルスタジオを活用し、お好きな曲や昔習っていた曲の完成度を高めるオーダーメイドのレッスンをご提供します。"
        ],
        consultations: [
            {
                title: "大人の趣味としての学び直し",
                description: "子供の頃に習っていた基礎を整理し、改めて音楽を学び直したい方のペースに合わせて進めます。"
            },
            {
                title: "月1回の確認レッスンから対応",
                description: "普段はご自身で練習し、定期的な確認や苦手なパッセージのアドバイスを受けるための月1〜2回レッスンが人気です。"
            },
            {
                title: "ご自宅や近くのスタジオを活用",
                description: "{name}近くのスタジオや、ご自宅のいつもの環境で、講師がマンツーマンで丁寧に指導します。"
            }
        ]
    }
};

// Group classification lookup
const getProfileType = (groupId) => {
    if (["toyosu-group", "harumi-group", "tatsumi-shinkiba-group"].includes(groupId)) {
        return "waterfront";
    }
    if (["nihonbashi-group", "nihonbashi-central-group", "tsukiji-group", "ginza-kyobashi-group"].includes(groupId)) {
        return "urban";
    }
    if (["kiyosumi-group", "monzen-group", "morishita-group", "toyocho-minamisuna-group", "ojima-kameido-group"].includes(groupId)) {
        return "koto";
    }
    if (["azabu-roppongi-group", "kojimachi-bancho-group"].includes(groupId)) {
        return "minatoChiyoda";
    }
    if (["bunkyo-group", "ryogoku-kuramae-group"].includes(groupId)) {
        return "bunkyoTaitoSumida";
    }
    return "koto"; // fallback
};

// Main generator logic
const revampedAreas = originalAreas.map((area, index) => {
    const profileType = getProfileType(area.groupId);
    const profile = profiles[profileType];
    const name = area.name;
    const landmark = area.landmarks && area.landmarks.length > 0
        ? area.landmarks[0].replace(/周辺/g, "").replace(/駅/g, "").replace(/エリア/g, "").trim()
        : name;

    // Select templates using index to maximize Jaccard variety
    const leadTpl = profile.lead[index % profile.lead.length];
    const lead = leadTpl.replace(/{name}/g, name).replace(/{landmark}/g, landmark);

    const catchphrases = [
        `\${name}周辺でピアノを趣味として楽しむ｜ご自宅やスタジオで受けられるオーダーメイドレッスン`,
        `\${name}で始める大人の個人ピアノレッスン｜初心者・再開者の目的に合わせた個別指導`,
        `\${name}周辺の自宅や近隣スタジオで弾く｜ブランクのある大人向けピアノレッスン`
    ];
    const catchphraseTpl = catchphrases[index % catchphrases.length];
    const catchphrase = catchphraseTpl.replace(/\${name}/g, name);

    // Keep original uniqueContent and areaGuide for uniqueness/Jaccard
    const uniqueContent = area.uniqueContent;
    const areaGuide = area.areaGuide;

    // Update features to be adult-centric
    const features = [
        {
            title: "大人の初心者・再開者向け指導",
            description: `楽譜が読めない方やブランクがある方も、基礎からご自身のペースで無理なく学べます。テキストや練習計画もご希望に合わせます。`
        },
        {
            title: "通学不要・スタジオ対応",
            description: `ご自宅への出張のほか、\${name}近くのレンタルスタジオでのレッスンもご相談いただけます。移動の手間なく効率よく受講可能です。`
        }
    ].map(f => ({
        title: f.title,
        description: f.description.replace(/\${name}/g, name)
    }));

    // Generate consultations (with name replaced)
    const consultations = profile.consultations.map(c => ({
        title: c.title.replace(/{name}/g, name),
        description: c.description.replace(/{name}/g, name)
    }));

    // FAQs: 6 entries, >= 3 questions must contain local terms (either name or landmark)
    const faqs = [
        {
            question: `\${name}でも出張レッスンは可能ですか？`,
            answer: `はい、清澄白河の拠点を中心に、公共交通機関で伺える\${name}エリア（\${landmark}周辺など）に出張しております。移動経路やご希望の時間帯によって調整が必要な場合があるため、詳しくは公式LINEからお気軽にご相談ください。`
        },
        {
            question: `\${name}でのレッスンは大人の初心者でも受講できますか？`,
            answer: `はい、受講可能です。楽譜の読み方や指使い、姿勢など、基礎の基礎から丁寧に確認していきます。\${name}にお住まいの大人になってから始める方も、ご自身のペースで安心して進めていただけます。`
        },
        {
            question: `昔習っていただけで何十年もブランクがありますが、\${name}周辺で再開できますか？`,
            answer: `はい、もちろん歓迎いたします。以前演奏していた曲や指の感覚を思い出しながら、無理のないペースで始められます。\${name}のご自宅やスタジオで、苦手な箇所や基礎をピンポイントで確認できます。`
        },
        {
            question: `自宅ではなく\${name}近くのスタジオ等でもレッスンは可能ですか？`,
            answer: `はい。ご自宅にピアノがない方や、自宅に講師を招くのが難しい場合は、\${name}の最寄り駅近くのレンタルスタジオ等を利用してレッスンを行うことができます。その場合のスタジオ使用料（実費）は生徒様のご負担となります。`
        },
        {
            question: `電子ピアノやキーボードでも受講できますか？`,
            answer: `はい、大丈夫です。タッチによって強弱がつく88鍵盤の電子ピアノがあれば、ご自宅でも問題なくレッスンが受けられます。防音対策やおすすめの電子ピアノ選びについてもアドバイス可能です。`
        },
        {
            question: `月1回だけ、または特定の好きな曲や課題曲だけ見てもらえますか？`,
            answer: `はい。定期レッスンだけでなく、ご都合に合わせて月1回からご相談可能です。クラシックだけでなく、お好きなポップスや映画音楽、特定の課題曲や苦手なフレーズのみの確認レッスンも歓迎しております。`
        }
    ].map(f => ({
        question: f.question.replace(/\${name}/g, name).replace(/\${landmark}/g, landmark),
        answer: f.answer.replace(/\${name}/g, name).replace(/\${landmark}/g, landmark)
    }));

    // Primary and secondary keywords
    const seo = {
        primaryKeyword: `${name} ピアノ教室`,
        secondaryKeywords: [
            `${name} 大人 ピアノ`,
            `${name} ピアノレッスン`,
            `${name} 出張レッスン`,
            `${name} ピアノ 初心者`
        ],
        // meta description: 90 - 130 characters and unique
        // We compose a description containing name and landmark
        metaDescription: `「${name}で大人向けの出張ピアノレッスンをお探しの方へ。初心者やブランクがある方の再開にも丁寧に対応。${landmark}周辺のご自宅や近隣スタジオでのマンツーマン個人指導を、ご都合に合わせてご相談いただけます。」`
    };

    // Verify length of meta description (character length should be 90 to 130)
    const descLen = seo.metaDescription.length;
    if (descLen < 90 || descLen > 130) {
        console.warn(`WARNING: metaDescription for ${area.slug} is ${descLen} chars: ${seo.metaDescription}`);
    }

    const instructorIntroduction = `東京音楽大学卒業。クラシックを基礎に、大人の初心者の方の基礎づくりから、久しぶりにピアノを再開したい方、好きな曲を仕上げたい方まで、一人ひとりの目的や生活リズムに合わせてレッスンを行っています。ポップスや映画音楽、伴奏曲などのご相談も歓迎です。${name}のご自宅やスタジオでリラックスして学んでいただけます。`;
    const consultationIntro = `${name}で大人のための出張ピアノレッスンをご検討中の方から、よくいただくご相談です。`;
    const metaSnippet = `ご自宅や近隣スタジオでの出張レッスン。大人の初心者・再開者向けピアノ教室。`;

    return {
        ...area,
        catchphrase,
        lead,
        features,
        faqs,
        uniqueContent,
        instructorIntroduction,
        consultationIntro,
        consultations,
        seo,
        cta: {
            subcopy: "体験レッスンや空き状況のご相談は公式LINEからお気軽にお問い合わせください。"
        },
        areaGuide,
        metaSnippet
    };
});

// Build the areas.ts file content string
const areaGroupsStr = JSON.stringify(areaGroups, null, 4);

// Format areas as beautiful TS objects
const serializeAreas = (areasList) => {
    return areasList.map(area => {
        return `    {
        slug: ${JSON.stringify(area.slug)},
        name: ${JSON.stringify(area.name)},
        groupId: ${JSON.stringify(area.groupId)},
        siblingSlugs: ${JSON.stringify(area.siblingSlugs)},
        catchphrase: ${JSON.stringify(area.catchphrase)},
        lead: ${JSON.stringify(area.lead)},
        mainImage: ${JSON.stringify(area.mainImage)},
        mainImageAlt: ${JSON.stringify(area.mainImageAlt || `${area.name}の大人向けピアノレッスン`)},
        keywords: ${JSON.stringify(area.keywords)},
        features: [
${area.features.map(f => `            {
                title: ${JSON.stringify(f.title)},
                description: ${JSON.stringify(f.description)}
            }`).join(",\n")}
        ],
        faqs: [
${area.faqs.map(f => `            {
                question: ${JSON.stringify(f.question)},
                answer: ${JSON.stringify(f.answer)}
            }`).join(",\n")}
        ],
        uniqueContent: \`${area.uniqueContent.replace(/`/g, "\\`").replace(/\${/g, "\\${")}\`,
        instructorIntroduction: ${JSON.stringify(area.instructorIntroduction)},
        consultationIntro: ${JSON.stringify(area.consultationIntro)},
        consultations: [
${area.consultations.map(c => `            {
                title: ${JSON.stringify(c.title)},
                description: ${JSON.stringify(c.description)}
            }`).join(",\n")}
        ],
        seo: {
            primaryKeyword: ${JSON.stringify(area.seo.primaryKeyword)},
            secondaryKeywords: ${JSON.stringify(area.seo.secondaryKeywords)},
            metaDescription: ${JSON.stringify(area.seo.metaDescription)}
        },
        cta: {
            subcopy: ${JSON.stringify(area.cta.subcopy)}
        },
        relatedAreas: ${JSON.stringify(area.relatedAreas)},
        googleMapUrl: ${JSON.stringify(area.googleMapUrl)},
        landmarks: ${JSON.stringify(area.landmarks)},
        areaGuide: \`${area.areaGuide.replace(/`/g, "\\`").replace(/\${/g, "\\${")}\`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: ${JSON.stringify(area.metaSnippet)}
    }`;
    }).join(",\n");
};

const fileContent = `export type PersonaCard = {
    label: string;
    summary: string;
    painPoints: string[];
    fitPoints: string[];
};

export type AreaConsultation = {
    title: string;
    description: string;
};

export type AreaSeo = {
    primaryKeyword: string;
    secondaryKeywords: string[];
    metaDescription: string;
};

export type AreaCta = {
    subcopy: string;
};

export interface Area {
    slug: string;
    name: string;           // 単一エリア名（例："豊洲"）
    groupId: string;        // グループ識別子（兄弟エリア特定用）
    siblingSlugs: string[]; // 同グループ内の他エリアslug
    catchphrase: string;
    lead: string;
    mainImage: string;
    mainImageAlt?: string;
    keywords: string[];
    features: {
        title: string;
        description: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
    uniqueContent: string;
    instructorIntroduction: string;
    consultationIntro: string;
    consultations: AreaConsultation[];
    seo: AreaSeo;
    cta: AreaCta;
    relatedAreas: string[];     // 関連エリアのslug配列
    googleMapUrl?: string;
    landmarks?: string[];
    lessonFlow?: {
        title: string;
        description: string;
    }[];
    metaSnippet?: string;       // メタディスクリプション内のエリア固固有文
    areaGuide?: string;         // エリアでレッスンを続けるためのポイント（HTML文字列）
}

// グループ情報（Footer・エリア一覧ページ用）
export interface AreaGroup {
    id: string;
    label: string;
    areaSlugs: string[];
    district: string;           // "江東区" | "中央区" | "墨田区"
}

export const areaGroups: AreaGroup[] = ${areaGroupsStr};

// 共通レッスンフロー
const defaultLessonFlow = [
    { title: "お問い合わせ", description: "公式LINEまたはお問い合わせフォームからお気軽にご連絡ください。" },
    { title: "日程・内容の確認", description: "講師より公式LINEまたはメールにて折り返しご連絡いたします。" },
    { title: "ご相談・準備", description: "お電話やメール、LINEなどで、ご不安の解消や練習環境など必要なことを確認いたします。" },
    { title: "体験レッスン", description: "ご自宅またはスタジオにて無料体験レッスンを実施いたします。" },
    { title: "ご入会手続き", description: "レッスン内容・日程にご納得いただけましたらお手続きへ進みます。" },
    { title: "定期レッスン開始", description: "ご自宅またはスタジオでの定期レッスンがスタートします。" },
];

export const areas: Area[] = [
${serializeAreas(revampedAreas)}
];
`;

fs.writeFileSync("src/data/areas.ts", fileContent, "utf8");
console.log("src/data/areas.ts has been successfully regenerated.");
