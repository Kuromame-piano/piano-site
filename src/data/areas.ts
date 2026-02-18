export type PersonaCard = {
    label: string;
    summary: string;
    painPoints: string[];
    fitPoints: string[];
};

export type NeedSolution = {
    label?: string;
    need: string;
    solution: string;
};

export type AreaSeo = {
    primaryKeyword: string;
    secondaryKeywords: string[];
    metaDescription: string;
};

export type AreaCta = {
    reassurance: string[];
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
    personas: {
        primary: PersonaCard;
        secondary: PersonaCard;
    };
    localityHighlights: string[];
    needSolutions: NeedSolution[];
    seo: AreaSeo;
    cta: AreaCta;
    relatedAreas: string[];     // 関連エリアのslug配列
    googleMapUrl?: string;
    landmarks?: string[];
    areaGuide?: string;
    lessonFlow?: {
        title: string;
        description: string;
    }[];
    metaSnippet?: string;       // メタディスクリプション内のエリア固有一文
}

// グループ情報（Footer・エリア一覧ページ用）
export interface AreaGroup {
    id: string;
    label: string;
    areaSlugs: string[];
    district: string;           // "江東区" | "中央区" | "墨田区"
}

export const areaGroups: AreaGroup[] = [
    {
        id: "toyosu-group",
        label: "豊洲・有明・東雲",
        areaSlugs: ["toyosu", "ariake", "shinonome"],
        district: "江東区",
    },
    {
        id: "harumi-group",
        label: "月島・勝どき・晴海",
        areaSlugs: ["tsukishima", "kachidoki", "harumi"],
        district: "中央区",
    },
    {
        id: "kiyosumi-group",
        label: "清澄白河・平野・三好",
        areaSlugs: ["kiyosumi-shirakawa", "hirano", "miyoshi"],
        district: "江東区",
    },
    {
        id: "monzen-group",
        label: "門前仲町・木場・越中島",
        areaSlugs: ["monzen-nakacho", "kiba", "ecchujima"],
        district: "江東区",
    },
    {
        id: "nihonbashi-group",
        label: "人形町・水天宮前・浜町",
        areaSlugs: ["ningyocho", "suitengu-mae", "hamacho"],
        district: "中央区",
    },
    {
        id: "morishita-group",
        label: "森下・住吉・菊川",
        areaSlugs: ["morishita", "sumiyoshi", "kikukawa"],
        district: "江東区",
    },
];

// 共通レッスンフロー
const defaultLessonFlow = [
    { title: "お問い合わせ", description: "お問い合わせフォームよりお気軽にご連絡ください。" },
    { title: "メールでご返信", description: "講師よりメールにてご連絡いたします。" },
    { title: "ご相談・準備", description: "お電話やメールで、ご不安の解消や練習環境など必要なことを確認いたします。" },
    { title: "体験レッスン", description: "ご自宅またはスタジオにて無料体験レッスンを実施いたします。" },
    { title: "ご入会手続き", description: "レッスン内容・日程にご納得いただけましたらお手続きへ進みます。" },
    { title: "定期レッスン開始", description: "ご自宅またはスタジオでの定期レッスンがスタートします。" },
];

export const areas: Area[] = [
    // ========================================
    // 豊洲グループ
    // ========================================
    {
        slug: "toyosu",
        name: "豊洲",
        groupId: "toyosu-group",
        siblingSlugs: ["ariake", "shinonome"],
        catchphrase: "いつものリビングが<br class='md:hidden' />ピアノ教室に",
        lead: "経験豊富な講師が、ご自宅までお伺いします。お子様は安心できるいつもの場所で、のびのびとピアノを学べます。",
        mainImage: "/images/areas/toyosu.webp",
        mainImageAlt: "豊洲エリアでの子供のピアノレッスン風景",
        keywords: ["豊洲 ピアノ教室", "豊洲 ピアノ 子供", "豊洲 出張レッスン", "豊洲 ピアノレッスン", "出張ピアノ教室", "子供", "初心者", "ピアノレッスン"],
        features: [],
        faqs: [
            {
                question: "豊洲駅周辺のタワーマンションでも訪問レッスンは可能ですか？",
                answer: "はい、豊洲駅周辺を含む豊洲エリア全域に対応しています。共用部ルールに配慮して進行します。"
            },
            {
                question: "豊洲で電子ピアノから始めても上達できますか？",
                answer: "可能です。タッチ・姿勢・読譜の基礎を段階的に整え、必要に応じて機種選びもサポートします。"
            },
            {
                question: "ららぽーと豊洲周辺に住んでいます。平日夕方の枠はありますか？",
                answer: "平日夕方〜夜のご相談が可能です。保育園・学童・塾の時間に合わせて調整します。"
            },
            {
                question: "豊洲で塾や部活と両立する場合、頻度はどう決めますか？",
                answer: "学期中と長期休みで頻度を分けるなど、生活リズムに合わせた運用をご提案します。"
            },
            {
                question: "豊洲の体験で練習環境や楽器の相談もできますか？",
                answer: "はい。設置場所、音量、練習時間、機材の優先順位まで具体的にご案内します。"
            },
            {
                question: "豊洲で兄弟・姉妹の連続レッスンは可能ですか？",
                answer: "可能です。連続受講で移動や待機の負担を減らし、家族の予定に合わせて進行できます。"
            }
        ],
        uniqueContent: `豊洲駅〜ららぽーと豊洲周辺は、タワーマンションにお住まいの子育て世帯が多くいらっしゃいます。<br>「教室までの送迎が大変」「移動時間がもったいない」と感じている方も多いのではないでしょうか。<br><br><strong>出張ピアノレッスンなら、講師がご自宅へ伺うので、移動時間ゼロでレッスンを始められます。</strong><br>他の習い事や塾、学校の宿題で忙しいお子様でも、すきま時間を有効に使って無理なく続けられます。<br>マンションでの電子ピアノ練習でも、基礎からしっかりと、表現力豊かな演奏が身につくよう丁寧に指導いたします。`,
        instructorIntroduction: "お子様の教育に熱心なご家庭が多い豊洲エリア。移動時間ゼロの出張レッスンで、習い事の送迎にかかる負担をなくし、ご家庭での団らんや学習の時間もしっかり確保できます。基礎技術の習得はもちろん、一人ひとりの感性を尊重する指導を大切にしています。いつものリラックスできる環境だからこそ、お子様の集中力も自然と高まります。",
        personas: {
            primary: {
                label: "タワマン子育て世帯",
                summary: "送迎の負担をなくして、勉強や他の習い事と両立させたいご家庭。",
                painPoints: [
                    "保育園や学校からの帰宅後、あわただしい中での移動が大変",
                    "雨の日や、暑い日・寒い日の送り迎えが負担",
                    "送迎の時間は、家事や仕事の手を止めなければならない"
                ],
                fitPoints: [
                    "講師が自宅に来るので、送迎の必要がありません",
                    "天気を気にせず、いつもの生活リズムでレッスンできます",
                    "兄弟で続けてレッスンしたり、夕方の時間を有効活用できます"
                ]
            },
            secondary: {
                label: "中学受験と両立したい",
                summary: "塾や宿題の合間に、効率よく質の高いレッスンを受けたいご家庭。",
                painPoints: [
                    "塾や宿題が忙しく、平日にまとまった時間が取れない",
                    "移動時間が増えると、勉強のペースが乱れてしまう",
                    "短い時間でも、しっかり上達できる練習方法が知りたい"
                ],
                fitPoints: [
                    "30〜40分で集中して学べる、専用メニューを作ります",
                    "自宅だから、勉強とレッスンの切り替えがスムーズです",
                    "週ごとの予定に合わせて、柔軟にスケジュール調整できます"
                ]
            }
        },
        localityHighlights: [
            "江東区公開統計（2026年2月）で豊洲の人口は40,274人、0〜14歳比率は17.9％。",
            "豊洲駅〜ららぽーと豊洲周辺はタワーマンション居住世帯が多く、送迎時間圧縮ニーズが高い。",
            "有楽町線・ゆりかもめ利用者が多く、平日夕方に移動を増やさない習い事設計が有効。"
        ],
        needSolutions: [
            {
                need: `<span class="block text-xl mb-2 font-bold">タワマン子育て世帯</span>
                       <span class="block text-sm mb-4 opacity-80">送迎を減らして、勉強や他の習い事と両立したい</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>保育園・学校後の移動で帰宅後の時間が圧迫される</li>
                           <li>雨の日や、暑い日・寒い日の送り迎えが負担</li>
                           <li>送迎中は保護者の家事や仕事が止まりやすい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>講師が自宅に来るので、送迎の必要がありません</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>天気を気にせず、いつもの生活リズムでレッスンできます</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟で続けてレッスンしたり、夕方の時間を有効活用できます</span></li>
                           </ul>`
            },
            {
                need: `<span class="block text-xl mb-2 font-bold">中学受験と両立したい</span>
                       <span class="block text-sm mb-4 opacity-80">塾や宿題の合間に、効率よく質の高いレッスンを受けたい</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>塾や宿題が忙しく、平日にまとまった時間が取れない</li>
                           <li>移動時間が増えると、勉強のペースが乱れてしまう</li>
                           <li>短い時間でも、しっかり上達できる練習方法が知りたい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>30〜40分で集中して学べる、専用メニューを作ります</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅だから、勉強とレッスンの切り替えがスムーズです</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>週ごとの予定に合わせて、柔軟にスケジュール調整できます</span></li>
                           </ul>`
            },
            {
                need: `<span class="block text-xl mb-2 font-bold">電子ピアノでの練習環境</span>
                       <span class="block text-sm mb-4 opacity-80">マンションで電子ピアノ中心だと上達できるか不安</span>`,
                solution: `鍵盤タッチ・読譜・表現を電子ピアノ環境に合わせて段階指導し、必要機材も具体的に提案します。<br>※ご自宅の環境に合わせた練習方法をご案内します。`
            }
        ],
        seo: {
            primaryKeyword: "豊洲 ピアノ教室",
            secondaryKeywords: [
                "豊洲 出張ピアノ",
                "豊洲駅 ピアノレッスン",
                "豊洲 子供 ピアノ",
                "豊洲 大人 ピアノ",
                "豊洲 電子ピアノ レッスン"
            ],
            metaDescription: "豊洲のピアノ教室なら出張専門の髙橋遊月ピアノ教室。豊洲駅周辺へ講師が訪問し、送迎不要で中学受験や共働き家庭でも継続しやすいマンツーマン指導。電子ピアノ対応・無料体験レッスン受付中。"
        },
        cta: {
            reassurance: [
                "豊洲での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "豊洲エリアの体験枠は平日夕方と土曜を中心に調整しています。"
        },
        relatedAreas: ["ariake", "shinonome", "tsukishima", "kiyosumi-shirakawa"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.7950!3d35.6530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["豊洲シエルタワー", "アーバンドック ららぽーと豊洲", "豊洲駅"],
        areaGuide: `豊洲でレッスンを続ける鍵は、<strong>送迎ゼロで学習時間を削らない運用運用を行うこと</strong>です。<br><br>有楽町線・ゆりかもめ利用者が多く、平日夕方に移動を増やさない習い事設計が有効という生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "マンションでの電子ピアノレッスンにも対応。送迎不要でご自宅がレッスン室に。",
    },
    {
        slug: "ariake",
        name: "有明",
        groupId: "toyosu-group",
        siblingSlugs: ["toyosu", "shinonome"],
        catchphrase: "ご自宅が、<br class='md:hidden' />お子様専用のピアノ教室に",
        lead: "有明エリアにお住まいの方へ、講師がご自宅まで伺う出張ピアノレッスンをお届けしています。",
        mainImage: "/images/areas/ariake.webp",
        mainImageAlt: "有明エリアでの子供のピアノレッスン風景",
        keywords: ["有明 ピアノ教室", "有明 ピアノ 子供", "有明 習い事", "有明 出張レッスン", "出張ピアノ教室", "子供", "初心者", "ピアノレッスン"],
        features: [
            {
                title: "送迎の負担ゼロで、ゆとりのある時間を",
                description: "習い事の送迎にかかる時間はゼロ。その分、ご家族での団らんや家事など、時間を有効にお使いいただけます。",
            },
            {
                title: "0歳から始められるレッスン",
                description: "小さなお子様には、リズム遊びや歌を取り入れた楽しい導入レッスンをご用意しております。音楽に触れる第一歩をお手伝いいたします。",
            },
        ],
        faqs: [
            {
                question: "有明駅周辺の新築マンションでも訪問レッスンは可能ですか？",
                answer: "はい、有明駅周辺を含む有明エリア全域に対応しています。共用部ルールに配慮して進行します。"
            },
            {
                question: "有明で電子ピアノから始めても上達できますか？",
                answer: "可能です。タッチ・姿勢・読譜の基礎を段階的に整え、必要に応じて機種選びもサポートします。"
            },
            {
                question: "有明ガーデン周辺に住んでいます。平日夕方の枠はありますか？",
                answer: "平日夕方〜夜のご相談が可能です。保育園・学童・塾の時間に合わせて調整します。"
            },
            {
                question: "有明で塾や部活と両立する場合、頻度はどう決めますか？",
                answer: "学期中と長期休みで頻度を分けるなど、生活リズムに合わせた運用をご提案します。"
            },
            {
                question: "有明の体験で練習環境や楽器の相談もできますか？",
                answer: "はい。設置場所、音量、練習時間、機材の優先順位まで具体的にご案内します。"
            },
            {
                question: "有明で兄弟・姉妹の連続レッスンは可能ですか？",
                answer: "可能です。連続受講で移動や待機の負担を減らし、家族の予定に合わせて進行できます。"
            }
        ],
        uniqueContent: `有明でピアノ教室を検討する方には、江東区公開統計（2026年2月）で有明の人口は13,942人、0〜14歳比率は21.1％という地域データがあります。<br><br>有明ガーデン周辺は新規入居の子育て世帯が多く、習い事の立ち上げ相談が集中しやすいため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>初めての習い事を移動負担なく始めたい子育て世帯を中心に、兄弟で効率よくレッスン時間をまとめたいご家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "有明エリアにお住まいの方へ、移動時間ゼロの出張ピアノレッスンをお届けしています。電子ピアノでのレッスンにも対応しており、マンションにお住まいの方でも安心して始められます。お子様一人ひとりの個性やペースに合わせた丁寧な指導を心がけています。",
        personas: {
            primary: {
                label: "未就学児ファミリー",
                summary: "初めての習い事を移動負担なく始めたい子育て世帯。",
                painPoints: [
                    "保育園・学校後の移動で帰宅後の時間が圧迫される",
                    "雨天や暑寒で通室そのものが負担になる",
                    "送迎中は保護者の家事や仕事が止まりやすい"
                ],
                fitPoints: [
                    "講師がご自宅へ訪問するため送迎が不要",
                    "天候に左右されにくく生活リズムを守りやすい",
                    "兄弟連続受講や夕方枠の調整がしやすい"
                ]
            },
            secondary: {
                label: "兄弟同時受講家庭",
                summary: "兄弟で効率よくレッスン時間をまとめたいご家庭。",
                painPoints: [
                    "兄弟で別教室に通うと待機時間が長くなる",
                    "下のお子様の預け先調整が難しい",
                    "家族全体の予定調整が複雑になりやすい"
                ],
                fitPoints: [
                    "兄弟連続レッスンで移動を一本化できる",
                    "同じ場所で受講でき安全管理がしやすい",
                    "家庭予定に合わせた順番と時間配分が可能"
                ]
            }
        },
        localityHighlights: [
            "江東区公開統計（2026年2月）で有明の人口は13,942人、0〜14歳比率は21.1％。",
            "有明ガーデン周辺は新規入居の子育て世帯が多く、習い事の立ち上げ相談が集中しやすい。",
            "広域移動が発生しやすい街区構造のため、通室不要のレッスンが時間効率を高める。"
        ],
        needSolutions: [
            {
                label: "CASE 01",
                need: `<span class="block text-xl mb-2 font-bold">未就学児ファミリー</span>
                       <span class="block text-sm mb-4 opacity-80">初めての習い事を移動負担なく始めたい子育て世帯。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>保育園・学校後の移動で帰宅後の時間が圧迫される</li>
                           <li>雨天や暑寒で通室そのものが負担になる</li>
                           <li>送迎中は保護者の家事や仕事が止まりやすい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>講師がご自宅へ訪問するため送迎が不要</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>天候に左右されにくく生活リズムを守りやすい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟連続受講や夕方枠の調整がしやすい</span></li>
                           </ul>`
            },
            {
                label: "CASE 02",
                need: `<span class="block text-xl mb-2 font-bold">兄弟同時受講家庭</span>
                       <span class="block text-sm mb-4 opacity-80">兄弟で効率よくレッスン時間をまとめたいご家庭。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>兄弟で別教室に通うと待機時間が長くなる</li>
                           <li>下のお子様の預け先調整が難しい</li>
                           <li>家族全体の予定調整が複雑になりやすい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟連続レッスンで移動を一本化できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>同じ場所で受講でき安全管理がしやすい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>家庭予定に合わせた順番と時間配分が可能</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 01",
                need: "有明で送迎と家事・仕事が重なり、習い事の継続負担が大きい。",
                solution: "ご自宅訪問で送迎をなくし、帰宅後すぐに始められる時間帯をご家庭ごとに設計します。"
            },
            {
                label: "ISSUE 02",
                need: "新築マンションで電子ピアノ中心だと上達できるか不安。",
                solution: "鍵盤タッチ・読譜・表現を電子ピアノ環境に合わせて段階指導し、必要機材も具体的に提案します。"
            },
            {
                label: "ISSUE 03",
                need: "塾・部活・兄弟予定と重なり、固定枠を作りにくい。",
                solution: "連続受講や隔週運用を組み合わせ、学校行事の多い月でも続けやすい計画を作ります。"
            }
        ],
        seo: {
            primaryKeyword: "有明 ピアノ教室",
            secondaryKeywords: [
                "有明 出張ピアノ",
                "有明駅 ピアノレッスン",
                "有明 子供 ピアノ",
                "有明 大人 ピアノ",
                "有明 電子ピアノ レッスン"
            ],
            metaDescription: "有明のピアノ教室なら出張専門の髙橋遊月ピアノ教室。有明駅周辺へ講師が訪問し、未就学児や兄弟受講にも対応し、移動なしで始められる出張レッスン。電子ピアノ対応・無料体験レッスン受付中。"
        },
        cta: {
            reassurance: [
                "有明での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "有明エリアは平日16時以降と土日午前の体験希望が特に多い地域です。"
        },
        relatedAreas: ["toyosu", "shinonome", "tsukishima"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.7880!3d35.6380!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["ブリリア有明シティタワー", "有明ガーデン", "有明駅"],
        areaGuide: `有明でレッスンを続ける鍵は、<strong>新生活の導線に無理なく組み込む時間設計運用を行うこと</strong>です。<br><br>広域移動が発生しやすい街区構造のため、通室不要のレッスンが時間効率を高めるという生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "マンションでの電子ピアノレッスンに対応。送迎不要の出張専門ピアノ教室。",
    },
    {
        slug: "shinonome",
        name: "東雲",
        groupId: "toyosu-group",
        siblingSlugs: ["toyosu", "ariake"],
        catchphrase: "移動時間ゼロ。<br class='md:hidden' />ご自宅でピアノレッスン",
        lead: "東雲エリアにお住まいの方へ、講師がご自宅まで伺う出張ピアノレッスンをお届けしています。",
        mainImage: "/images/areas/shinonome.webp",
        mainImageAlt: "東雲エリアでの子供のピアノレッスン風景",
        keywords: ["東雲 ピアノ教室", "東雲 ピアノ 子供", "東雲 ピアノレッスン", "東雲 出張レッスン", "出張ピアノ教室", "子供", "初心者", "ピアノレッスン"],
        features: [
            {
                title: "送迎の負担ゼロで、ゆとりのある時間を",
                description: "習い事の送迎にかかる時間はゼロ。その分、ご家族での団らんや家事など、時間を有効にお使いいただけます。",
            },
            {
                title: "電子ピアノにも対応",
                description: "マンションにお住まいの方でも安心。電子ピアノでのレッスンにも対応し、正しいタッチや表現力を身につけられるよう指導いたします。",
            },
        ],
        faqs: [
            {
                question: "東雲駅周辺のマンションでも訪問レッスンは可能ですか？",
                answer: "はい、東雲駅周辺を含む東雲エリア全域に対応しています。共用部ルールに配慮して進行します。"
            },
            {
                question: "東雲で電子ピアノから始めても上達できますか？",
                answer: "可能です。タッチ・姿勢・読譜の基礎を段階的に整え、必要に応じて機種選びもサポートします。"
            },
            {
                question: "東雲キャナルコート周辺に住んでいます。平日夕方の枠はありますか？",
                answer: "平日夕方〜夜のご相談が可能です。保育園・学童・塾の時間に合わせて調整します。"
            },
            {
                question: "東雲で塾や部活と両立する場合、頻度はどう決めますか？",
                answer: "学期中と長期休みで頻度を分けるなど、生活リズムに合わせた運用をご提案します。"
            },
            {
                question: "東雲の体験で練習環境や楽器の相談もできますか？",
                answer: "はい。設置場所、音量、練習時間、機材の優先順位まで具体的にご案内します。"
            },
            {
                question: "東雲で兄弟・姉妹の連続レッスンは可能ですか？",
                answer: "可能です。連続受講で移動や待機の負担を減らし、家族の予定に合わせて進行できます。"
            }
        ],
        uniqueContent: `東雲でピアノ教室を検討する方には、江東区公開統計（2026年2月）で東雲の人口は25,508人、0〜14歳比率は17.0％という地域データがあります。<br><br>東雲キャナルコート周辺は集合住宅比率が高く、電子ピアノ運用の相談が多いため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>帰宅後の限られた時間でレッスンを継続したいご家庭を中心に、塾・学校・習い事を同時に回すため移動を最小化したいご家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "東雲エリアにお住まいの方へ、ご自宅で完結する出張ピアノレッスンをお届けしています。電子ピアノでのレッスンにも対応しておりますので、マンションにお住まいの方でも安心です。一人ひとりのお子様の成長に寄り添った、丁寧なレッスンを心がけています。",
        personas: {
            primary: {
                label: "共働きマンション世帯",
                summary: "帰宅後の限られた時間でレッスンを継続したいご家庭。",
                painPoints: [
                    "保育園・学校後の移動で帰宅後の時間が圧迫される",
                    "雨天や暑寒で通室そのものが負担になる",
                    "送迎中は保護者の家事や仕事が止まりやすい"
                ],
                fitPoints: [
                    "講師がご自宅へ訪問するため送迎が不要",
                    "天候に左右されにくく生活リズムを守りやすい",
                    "兄弟連続受講や夕方枠の調整がしやすい"
                ]
            },
            secondary: {
                label: "塾併用家庭",
                summary: "塾・学校・習い事を同時に回すため移動を最小化したいご家庭。",
                painPoints: [
                    "塾や宿題で平日の可処分時間が短い",
                    "移動を増やすと学習リズムが崩れやすい",
                    "短時間でも成果が見える練習設計が必要"
                ],
                fitPoints: [
                    "30〜40分の集中メニューを個別に設計",
                    "自宅完結で学習前後の切替がしやすい",
                    "週ごとの予定変動に合わせて調整できる"
                ]
            }
        },
        localityHighlights: [
            "江東区公開統計（2026年2月）で東雲の人口は25,508人、0〜14歳比率は17.0％。",
            "東雲キャナルコート周辺は集合住宅比率が高く、電子ピアノ運用の相談が多い。",
            "りんかい線・有楽町線接続を使う共働き世帯が多く、帰宅後すぐ始められる形式が支持される。"
        ],
        needSolutions: [
            {
                label: "CASE 01",
                need: `<span class="block text-xl mb-2 font-bold">共働きマンション世帯</span>
                       <span class="block text-sm mb-4 opacity-80">帰宅後の限られた時間でレッスンを継続したいご家庭。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>保育園・学校後の移動で帰宅後の時間が圧迫される</li>
                           <li>雨天や暑寒で通室そのものが負担になる</li>
                           <li>送迎中は保護者の家事や仕事が止まりやすい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>講師がご自宅へ訪問するため送迎が不要</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>天候に左右されにくく生活リズムを守りやすい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟連続受講や夕方枠の調整がしやすい</span></li>
                           </ul>`
            },
            {
                label: "CASE 02",
                need: `<span class="block text-xl mb-2 font-bold">塾併用家庭</span>
                       <span class="block text-sm mb-4 opacity-80">塾・学校・習い事を同時に回すため移動を最小化したいご家庭。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>塾や宿題で平日の可処分時間が短い</li>
                           <li>移動を増やすと学習リズムが崩れやすい</li>
                           <li>短時間でも成果が見える練習設計が必要</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>30〜40分の集中メニューを個別に設計</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅完結で学習前後の切替がしやすい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>週ごとの予定変動に合わせて調整できる</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 01",
                need: "東雲で送迎と家事・仕事が重なり、習い事の継続負担が大きい。",
                solution: "ご自宅訪問で送迎をなくし、帰宅後すぐに始められる時間帯をご家庭ごとに設計します。"
            },
            {
                label: "ISSUE 02",
                need: "マンションで電子ピアノ中心だと上達できるか不安。",
                solution: "鍵盤タッチ・読譜・表現を電子ピアノ環境に合わせて段階指導し、必要機材も具体的に提案します。"
            },
            {
                label: "ISSUE 03",
                need: "塾・部活・兄弟予定と重なり、固定枠を作りにくい。",
                solution: "連続受講や隔週運用を組み合わせ、学校行事の多い月でも続けやすい計画を作ります。"
            }
        ],
        seo: {
            primaryKeyword: "東雲 ピアノ教室",
            secondaryKeywords: [
                "東雲 出張ピアノ",
                "東雲駅 ピアノレッスン",
                "東雲 子供 ピアノ",
                "東雲 大人 ピアノ",
                "東雲 電子ピアノ レッスン"
            ],
            metaDescription: "東雲のピアノ教室なら出張専門の髙橋遊月ピアノ教室。東雲駅周辺へ講師が訪問し、共働き世帯が帰宅後すぐ始めやすい送迎不要の出張ピアノレッスン。電子ピアノ対応・無料体験レッスン受付中。ご家庭ごとの生活導線に合わせて曜日を調整できます。"
        },
        cta: {
            reassurance: [
                "東雲での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "東雲エリアでは平日18時前後の枠を優先案内しています。"
        },
        relatedAreas: ["toyosu", "ariake", "tsukishima"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.8050!3d35.6430!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["プラウドタワー東雲キャナルコート", "東雲駅", "東雲キャナルコートCODAN"],
        areaGuide: `東雲でレッスンを続ける鍵は、<strong>帰宅後30分以内に開始できる運用運用を行うこと</strong>です。<br><br>りんかい線・有楽町線接続を使う共働き世帯が多く、帰宅後すぐ始められる形式が支持されるという生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "キャナルコート周辺も対応。電子ピアノOKの出張専門ピアノ教室。",
    },

    // ========================================
    // 月島・勝どき・晴海グループ
    // ========================================
    {
        slug: "tsukishima",
        name: "月島",
        groupId: "harumi-group",
        siblingSlugs: ["kachidoki", "harumi"],
        catchphrase: "「通わない」選択。<br class='md:hidden' />ゆとりと上達を",
        lead: "送迎の負担がないから、忙しい毎日でも心にゆとりを持って、質の高いレッスンを続けられます。",
        mainImage: "/images/areas/tsukishima.webp",
        mainImageAlt: "月島エリアの子供のピアノレッスン風景",
        keywords: ["月島 ピアノ教室", "月島 ピアノ 子供", "月島 出張レッスン", "月島 ピアノレッスン", "出張ピアノ教室", "子供", "初心者", "ピアノレッスン"],
        features: [
            {
                title: "ライフスタイルに合わせたレッスン",
                description: "土日祝日や平日の夕方など、ご家庭のライフスタイルに合わせてレッスン日時をご相談いただけます。柔軟なスケジュールをご提案いたします。",
            },
            {
                title: "兄弟姉妹で連続レッスンも可能",
                description: "お兄ちゃん・お姉ちゃんのレッスンの後に下のお子様のレッスンを行うなど、連続して受講いただけます。送迎の手間がないため、効率的です。",
            },
        ],
        faqs: [
            {
                question: "月島駅周辺の高層住宅でも訪問レッスンは可能ですか？",
                answer: "はい、月島駅周辺を含む月島エリア全域に対応しています。共用部ルールに配慮して進行します。"
            },
            {
                question: "月島で電子ピアノから始めても上達できますか？",
                answer: "可能です。タッチ・姿勢・読譜の基礎を段階的に整え、必要に応じて機種選びもサポートします。"
            },
            {
                question: "佃エリアに住んでいます。平日夕方の枠はありますか？",
                answer: "平日夕方〜夜のご相談が可能です。保育園・学童・塾の時間に合わせて調整します。"
            },
            {
                question: "月島で塾や部活と両立する場合、頻度はどう決めますか？",
                answer: "学期中と長期休みで頻度を分けるなど、生活リズムに合わせた運用をご提案します。"
            },
            {
                question: "月島の体験で練習環境や楽器の相談もできますか？",
                answer: "はい。設置場所、音量、練習時間、機材の優先順位まで具体的にご案内します。"
            },
            {
                question: "月島で兄弟・姉妹の連続レッスンは可能ですか？",
                answer: "可能です。連続受講で移動や待機の負担を減らし、家族の予定に合わせて進行できます。"
            }
        ],
        uniqueContent: `月島でピアノ教室を検討する方には、中央区の町丁別集計（2023年1月）で月島の人口は16,834人という地域データがあります。<br><br>月島駅・佃エリアは高層住宅が集中し、エレベーター移動のみで完結する習い事需要が高いため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>兄弟それぞれの習い事を移動負担なく回したいご家庭を中心に、家事や仕事の合間にピアノを再開したい大人の方にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "共働きでお忙しいご家庭が多い月島エリア。ご自宅で完結する出張レッスンなら、送迎の負担なく質の高いピアノレッスンを続けていただけます。東京音楽大学で培った専門知識を活かし、お子様一人ひとりの「弾きたい」気持ちに寄り添うオーダーメイドのレッスンを行います。",
        personas: {
            primary: {
                label: "共働き兄弟世帯",
                summary: "兄弟それぞれの習い事を移動負担なく回したいご家庭。",
                painPoints: [
                    "兄弟で別教室に通うと待機時間が長くなる",
                    "下のお子様の預け先調整が難しい",
                    "家族全体の予定調整が複雑になりやすい"
                ],
                fitPoints: [
                    "兄弟連続レッスンで移動を一本化できる",
                    "同じ場所で受講でき安全管理がしやすい",
                    "家庭予定に合わせた順番と時間配分が可能"
                ]
            },
            secondary: {
                label: "大人再開層",
                summary: "家事や仕事の合間にピアノを再開したい大人の方。",
                painPoints: [
                    "仕事後に教室へ移動する体力を確保しにくい",
                    "不規則勤務で固定曜日が組みにくい",
                    "ブランク再開の心理的ハードルが高い"
                ],
                fitPoints: [
                    "自宅訪問で移動負担なく開始できる",
                    "月2回など柔軟な頻度設計に対応できる",
                    "目標曲ベースで達成感を作り直せる"
                ]
            }
        },
        localityHighlights: [
            "中央区の町丁別集計（2023年1月）で月島の人口は16,834人。",
            "月島駅・佃エリアは高層住宅が集中し、エレベーター移動のみで完結する習い事需要が高い。",
            "共働き家庭の比率が高く、兄弟連続受講で時間を一本化する相談が増えている。"
        ],
        needSolutions: [
            {
                label: "CASE 01",
                need: `<span class="block text-xl mb-2 font-bold">共働き兄弟世帯</span>
                       <span class="block text-sm mb-4 opacity-80">兄弟それぞれの習い事を移動負担なく回したいご家庭。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>兄弟で別教室に通うと待機時間が長くなる</li>
                           <li>下のお子様の預け先調整が難しい</li>
                           <li>家族全体の予定調整が複雑になりやすい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟連続レッスンで移動を一本化できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>同じ場所で受講でき安全管理がしやすい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>家庭予定に合わせた順番と時間配分が可能</span></li>
                           </ul>`
            },
            {
                label: "CASE 02",
                need: `<span class="block text-xl mb-2 font-bold">大人再開層</span>
                       <span class="block text-sm mb-4 opacity-80">家事や仕事の合間にピアノを再開したい大人の方。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>仕事後に教室へ移動する体力を確保しにくい</li>
                           <li>不規則勤務で固定曜日が組みにくい</li>
                           <li>ブランク再開の心理的ハードルが高い</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅訪問で移動負担なく開始できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>月2回など柔軟な頻度設計に対応できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>目標曲ベースで達成感を作り直せる</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 01",
                need: "月島で送迎と家事・仕事が重なり、習い事の継続負担が大きい。",
                solution: "ご自宅訪問で送迎をなくし、帰宅後すぐに始められる時間帯をご家庭ごとに設計します。"
            },
            {
                label: "ISSUE 02",
                need: "高層住宅で電子ピアノ中心だと上達できるか不安。",
                solution: "鍵盤タッチ・読譜・表現を電子ピアノ環境に合わせて段階指導し、必要機材も具体的に提案します。"
            },
            {
                label: "ISSUE 03",
                need: "塾・部活・兄弟予定と重なり、固定枠を作りにくい。",
                solution: "連続受講や隔週運用を組み合わせ、学校行事の多い月でも続けやすい計画を作ります。"
            }
        ],
        seo: {
            primaryKeyword: "月島 ピアノ教室",
            secondaryKeywords: [
                "月島 出張ピアノ",
                "月島駅 ピアノレッスン",
                "月島 子供 ピアノ",
                "月島 大人 ピアノ",
                "月島 電子ピアノ レッスン"
            ],
            metaDescription: "月島のピアノ教室なら出張専門の髙橋遊月ピアノ教室。月島駅周辺へ講師が訪問し、兄弟連続受講や大人再開にも柔軟対応できる出張専門ピアノ教室。電子ピアノ対応・無料体験レッスン受付中。ご家庭ごとの生活導線に合わせて曜日を調整できます。"
        },
        cta: {
            reassurance: [
                "月島での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "月島エリアは兄弟連続レッスンの体験相談を優先して受け付けています。"
        },
        relatedAreas: ["kachidoki", "harumi", "toyosu", "ningyocho"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.7810!3d35.6630!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["月島駅", "佃公園", "THE TOKYO TOWERS"],
        areaGuide: `月島でレッスンを続ける鍵は、<strong>家族全体の予定を崩さない連続受講設計運用を行うこと</strong>です。<br><br>共働き家庭の比率が高く、兄弟連続受講で時間を一本化する相談が増えているという生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "送迎不要・兄弟連続レッスンも可能。ご自宅で完結する出張ピアノ教室。",
    },
    {
        slug: "kachidoki",
        name: "勝どき",
        groupId: "harumi-group",
        siblingSlugs: ["tsukishima", "harumi"],
        catchphrase: "忙しい毎日に、<br class='md:hidden' />ピアノのある暮らしを",
        lead: "勝どきエリアにお住まいの方へ、送迎不要の出張ピアノレッスンをお届けしています。",
        mainImage: "/images/areas/kachidoki.webp",
        mainImageAlt: "勝どきエリアの子供のピアノレッスン風景",
        keywords: ["勝どき ピアノ教室", "勝どき ピアノ 子供", "勝どき 習い事", "勝どき 出張レッスン", "出張ピアノ教室", "子供", "初心者", "ピアノレッスン"],
        features: [
            {
                title: "夕方〜夜のレッスンも対応",
                description: "お仕事帰りの時間帯に合わせて、17時〜19時頃のレッスンも承っております。共働きのご家庭にも安心してご利用いただけます。",
            },
            {
                title: "ライフスタイルに合わせたレッスン",
                description: "土日祝日や平日の夕方など、ご家庭のライフスタイルに合わせてレッスン日時をご相談いただけます。",
            },
        ],
        faqs: [
            {
                question: "勝どき駅周辺のタワーマンションでも訪問レッスンは可能ですか？",
                answer: "はい、勝どき駅周辺を含む勝どきエリア全域に対応しています。共用部ルールに配慮して進行します。"
            },
            {
                question: "勝どきで電子ピアノから始めても上達できますか？",
                answer: "可能です。タッチ・姿勢・読譜の基礎を段階的に整え、必要に応じて機種選びもサポートします。"
            },
            {
                question: "勝どき駅前再開発エリアに住んでいます。平日夕方の枠はありますか？",
                answer: "平日夕方〜夜のご相談が可能です。保育園・学童・塾の時間に合わせて調整します。"
            },
            {
                question: "勝どきで塾や部活と両立する場合、頻度はどう決めますか？",
                answer: "学期中と長期休みで頻度を分けるなど、生活リズムに合わせた運用をご提案します。"
            },
            {
                question: "勝どきの体験で練習環境や楽器の相談もできますか？",
                answer: "はい。設置場所、音量、練習時間、機材の優先順位まで具体的にご案内します。"
            },
            {
                question: "勝どきで兄弟・姉妹の連続レッスンは可能ですか？",
                answer: "可能です。連続受講で移動や待機の負担を減らし、家族の予定に合わせて進行できます。"
            }
        ],
        uniqueContent: `勝どきでピアノ教室を検討する方には、中央区の町丁別集計（2023年1月）で勝どきの人口は27,108人という地域データがあります。<br><br>勝どき駅周辺は高層住宅が連続し、通室よりも訪問型の時間効率が評価されやすいため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>移動コストを減らし平日夜に習い事を定着させたいご家庭を中心に、保育園・学童後の時間帯に固定枠を持ちたいご家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "お仕事と子育てを両立されているご家庭が多い勝どきエリア。ご自宅で完結する出張レッスンなら、夕方以降の時間帯にも対応でき、無理なくピアノレッスンを続けていただけます。クラシックからポップスまで、生徒様の「弾きたい」気持ちに寄り添うレッスンを行います。",
        personas: {
            primary: {
                label: "高密度タワマン共働き",
                summary: "移動コストを減らし平日夜に習い事を定着させたいご家庭。",
                painPoints: [
                    "保育園・学校後の移動で帰宅後の時間が圧迫される",
                    "雨天や暑寒で通室そのものが負担になる",
                    "送迎中は保護者の家事や仕事が止まりやすい"
                ],
                fitPoints: [
                    "講師がご自宅へ訪問するため送迎が不要",
                    "天候に左右されにくく生活リズムを守りやすい",
                    "兄弟連続受講や夕方枠の調整がしやすい"
                ]
            },
            secondary: {
                label: "夕方以降希望家庭",
                summary: "保育園・学童後の時間帯に固定枠を持ちたいご家庭。",
                painPoints: [
                    "塾や宿題で平日の可処分時間が短い",
                    "移動を増やすと学習リズムが崩れやすい",
                    "短時間でも成果が見える練習設計が必要"
                ],
                fitPoints: [
                    "30〜40分の集中メニューを個別に設計",
                    "自宅完結で学習前後の切替がしやすい",
                    "週ごとの予定変動に合わせて調整できる"
                ]
            }
        },
        localityHighlights: [
            "中央区の町丁別集計（2023年1月）で勝どきの人口は27,108人。",
            "勝どき駅周辺は高層住宅が連続し、通室よりも訪問型の時間効率が評価されやすい。",
            "平日夕方〜夜の生活密度が高く、移動を伴わない習い事の相性が良い。"
        ],
        needSolutions: [
            {
                label: "CASE 01",
                need: `<span class="block text-xl mb-2 font-bold">高密度タワマン共働き</span>
                       <span class="block text-sm mb-4 opacity-80">移動コストを減らし平日夜に習い事を定着させたいご家庭。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>保育園・学校後の移動で帰宅後の時間が圧迫される</li>
                           <li>雨天や暑寒で通室そのものが負担になる</li>
                           <li>送迎中は保護者の家事や仕事が止まりやすい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>講師がご自宅へ訪問するため送迎が不要</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>天候に左右されにくく生活リズムを守りやすい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟連続受講や夕方枠の調整がしやすい</span></li>
                           </ul>`
            },
            {
                label: "CASE 02",
                need: `<span class="block text-xl mb-2 font-bold">夕方以降希望家庭</span>
                       <span class="block text-sm mb-4 opacity-80">保育園・学童後の時間帯に固定枠を持ちたいご家庭。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>塾や宿題で平日の可処分時間が短い</li>
                           <li>移動を増やすと学習リズムが崩れやすい</li>
                           <li>短時間でも成果が見える練習設計が必要</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>30〜40分の集中メニューを個別に設計</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅完結で学習前後の切替がしやすい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>週ごとの予定変動に合わせて調整できる</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 01",
                need: "勝どきで送迎と家事・仕事が重なり、習い事の継続負担が大きい。",
                solution: "ご自宅訪問で送迎をなくし、帰宅後すぐに始められる時間帯をご家庭ごとに設計します。"
            },
            {
                label: "ISSUE 02",
                need: "タワーマンションで電子ピアノ中心だと上達できるか不安。",
                solution: "鍵盤タッチ・読譜・表現を電子ピアノ環境に合わせて段階指導し、必要機材も具体的に提案します。"
            },
            {
                label: "ISSUE 03",
                need: "塾・部活・兄弟予定と重なり、固定枠を作りにくい。",
                solution: "連続受講や隔週運用を組み合わせ、学校行事の多い月でも続けやすい計画を作ります。"
            }
        ],
        seo: {
            primaryKeyword: "勝どき ピアノ教室",
            secondaryKeywords: [
                "勝どき 出張ピアノ",
                "勝どき駅 ピアノレッスン",
                "勝どき 子供 ピアノ",
                "勝どき 大人 ピアノ",
                "勝どき 電子ピアノ レッスン"
            ],
            metaDescription: "勝どきのピアノ教室なら出張専門の髙橋遊月ピアノ教室。勝どき駅周辺へ講師が訪問し、高密度タワマン世帯でも平日夜に継続しやすい訪問型マンツーマン指導。電子ピアノ対応・無料体験レッスン受付中。"
        },
        cta: {
            reassurance: [
                "勝どきでの訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "勝どきエリアの夜枠は埋まりやすいため、希望曜日は早めのご相談がおすすめです。"
        },
        relatedAreas: ["tsukishima", "harumi", "toyosu"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.7760!3d35.6570!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["勝どきザ・タワー", "勝どき駅", "DEUX TOURS（ドゥ・トゥール）"],
        areaGuide: `勝どきでレッスンを続ける鍵は、<strong>保育園後から夕食前までの隙間時間活用運用を行うこと</strong>です。<br><br>平日夕方〜夜の生活密度が高く、移動を伴わない習い事の相性が良いという生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "夕方以降のレッスンも対応。共働き世帯に選ばれる出張ピアノ教室。",
    },
    {
        slug: "harumi",
        name: "晴海",
        groupId: "harumi-group",
        siblingSlugs: ["tsukishima", "kachidoki"],
        catchphrase: "ご自宅で、<br class='md:hidden' />リラックスしてピアノを",
        lead: "晴海エリアにお住まいの方へ、送迎不要の出張ピアノレッスンをお届けしています。",
        mainImage: "/images/areas/harumi.webp",
        mainImageAlt: "晴海エリアの子供のピアノレッスン風景",
        keywords: ["晴海 ピアノ教室", "晴海 ピアノ 子供", "晴海 ピアノレッスン", "晴海 出張レッスン", "出張ピアノ教室", "子供", "初心者", "ピアノレッスン"],
        features: [
            {
                title: "送迎の負担ゼロ",
                description: "講師がご自宅まで伺うため、送迎の時間も手間もかかりません。雨の日や寒い日でも安心してレッスンを受けられます。",
            },
            {
                title: "ライフスタイルに合わせた柔軟なスケジュール",
                description: "土日祝日や平日の夕方など、ご家庭のライフスタイルに合わせてレッスン日時をご相談いただけます。",
            },
        ],
        faqs: [
            {
                question: "勝どき駅周辺の新築マンションでも訪問レッスンは可能ですか？",
                answer: "はい、勝どき駅周辺を含む晴海エリア全域に対応しています。共用部ルールに配慮して進行します。"
            },
            {
                question: "晴海で電子ピアノから始めても上達できますか？",
                answer: "可能です。タッチ・姿勢・読譜の基礎を段階的に整え、必要に応じて機種選びもサポートします。"
            },
            {
                question: "晴海フラッグ周辺に住んでいます。平日夕方の枠はありますか？",
                answer: "平日夕方〜夜のご相談が可能です。保育園・学童・塾の時間に合わせて調整します。"
            },
            {
                question: "晴海で塾や部活と両立する場合、頻度はどう決めますか？",
                answer: "学期中と長期休みで頻度を分けるなど、生活リズムに合わせた運用をご提案します。"
            },
            {
                question: "晴海の体験で練習環境や楽器の相談もできますか？",
                answer: "はい。設置場所、音量、練習時間、機材の優先順位まで具体的にご案内します。"
            },
            {
                question: "晴海で兄弟・姉妹の連続レッスンは可能ですか？",
                answer: "可能です。連続受講で移動や待機の負担を減らし、家族の予定に合わせて進行できます。"
            }
        ],
        uniqueContent: `晴海でピアノ教室を検討する方には、中央区の町丁別集計（2023年1月）で晴海の人口は18,660人という地域データがあります。<br><br>晴海フラッグ周辺は新築マンション比率が高く、初回相談で電子ピアノ環境確認が重要ため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>新生活に合わせて無理なく習い事を立ち上げたいご家庭を中心に、楽器経験ゼロから安全に始めたい未就学〜低学年家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "新しい街として発展を続ける晴海エリア。新居でピアノを始めたい方や、お子様の習い事として検討されている方に、ご自宅で完結する出張レッスンをお届けしています。東京音楽大学で培った技術と経験を活かし、一人ひとりに合わせた丁寧な指導を行います。",
        personas: {
            primary: {
                label: "新規転入ファミリー",
                summary: "新生活に合わせて無理なく習い事を立ち上げたいご家庭。",
                painPoints: [
                    "保育園・学校後の移動で帰宅後の時間が圧迫される",
                    "雨天や暑寒で通室そのものが負担になる",
                    "送迎中は保護者の家事や仕事が止まりやすい"
                ],
                fitPoints: [
                    "講師がご自宅へ訪問するため送迎が不要",
                    "天候に左右されにくく生活リズムを守りやすい",
                    "兄弟連続受講や夕方枠の調整がしやすい"
                ]
            },
            secondary: {
                label: "初習い事検討層",
                summary: "楽器経験ゼロから安全に始めたい未就学〜低学年家庭。",
                painPoints: [
                    "兄弟で別教室に通うと待機時間が長くなる",
                    "下のお子様の預け先調整が難しい",
                    "家族全体の予定調整が複雑になりやすい"
                ],
                fitPoints: [
                    "兄弟連続レッスンで移動を一本化できる",
                    "同じ場所で受講でき安全管理がしやすい",
                    "家庭予定に合わせた順番と時間配分が可能"
                ]
            }
        },
        localityHighlights: [
            "中央区の町丁別集計（2023年1月）で晴海の人口は18,660人。",
            "晴海フラッグ周辺は新築マンション比率が高く、初回相談で電子ピアノ環境確認が重要。",
            "通学・通勤導線が長くなりやすく、送迎不要のレッスンが家事負荷を軽減する。"
        ],
        needSolutions: [
            {
                label: "CASE 01",
                need: `<span class="block text-xl mb-2 font-bold">新規転入ファミリー</span>
                       <span class="block text-sm mb-4 opacity-80">新生活に合わせて無理なく習い事を立ち上げたいご家庭。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>保育園・学校後の移動で帰宅後の時間が圧迫される</li>
                           <li>雨天や暑寒で通室そのものが負担になる</li>
                           <li>送迎中は保護者の家事や仕事が止まりやすい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>講師がご自宅へ訪問するため送迎が不要</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>天候に左右されにくく生活リズムを守りやすい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟連続受講や夕方枠の調整がしやすい</span></li>
                           </ul>`
            },
            {
                label: "CASE 02",
                need: `<span class="block text-xl mb-2 font-bold">初習い事検討層</span>
                       <span class="block text-sm mb-4 opacity-80">楽器経験ゼロから安全に始めたい未就学〜低学年家庭。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>兄弟で別教室に通うと待機時間が長くなる</li>
                           <li>下のお子様の預け先調整が難しい</li>
                           <li>家族全体の予定調整が複雑になりやすい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟連続レッスンで移動を一本化できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>同じ場所で受講でき安全管理がしやすい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>家庭予定に合わせた順番と時間配分が可能</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 01",
                need: "晴海で送迎と家事・仕事が重なり、習い事の継続負担が大きい。",
                solution: "ご自宅訪問で送迎をなくし、帰宅後すぐに始められる時間帯をご家庭ごとに設計します。"
            },
            {
                label: "ISSUE 02",
                need: "新築マンションで電子ピアノ中心だと上達できるか不安。",
                solution: "鍵盤タッチ・読譜・表現を電子ピアノ環境に合わせて段階指導し、必要機材も具体的に提案します。"
            },
            {
                label: "ISSUE 03",
                need: "塾・部活・兄弟予定と重なり、固定枠を作りにくい。",
                solution: "連続受講や隔週運用を組み合わせ、学校行事の多い月でも続けやすい計画を作ります。"
            }
        ],
        seo: {
            primaryKeyword: "晴海 ピアノ教室",
            secondaryKeywords: [
                "晴海 出張ピアノ",
                "勝どき駅 ピアノレッスン",
                "晴海 子供 ピアノ",
                "晴海 大人 ピアノ",
                "晴海 電子ピアノ レッスン"
            ],
            metaDescription: "晴海のピアノ教室なら出張専門の髙橋遊月ピアノ教室。勝どき駅周辺へ講師が訪問し、新規転入ファミリーが習い事を始めやすい送迎不要の出張ピアノ教室。電子ピアノ対応・無料体験レッスン受付中。"
        },
        cta: {
            reassurance: [
                "晴海での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "晴海エリアは新生活スタート月の体験申込が集中します。"
        },
        relatedAreas: ["tsukishima", "kachidoki", "toyosu"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.7830!3d35.6540!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["晴海フラッグ", "晴海トリトンスクエア", "晴海客船ターミナル跡地"],
        areaGuide: `晴海でレッスンを続ける鍵は、<strong>転入直後でも無理のない立ち上げ運用を行うこと</strong>です。<br><br>通学・通勤導線が長くなりやすく、送迎不要のレッスンが家事負荷を軽減するという生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "晴海フラッグ対応。電子ピアノOK・送迎不要の出張ピアノ教室。",
    },

    // ========================================
    // 清澄白河・平野・三好グループ
    // ========================================
    {
        slug: "kiyosumi-shirakawa",
        name: "清澄白河",
        groupId: "kiyosumi-group",
        siblingSlugs: ["hirano", "miyoshi"],
        catchphrase: "無理なく、心地よく、<br class='md:hidden' />音楽を暮らしの一部に。",
        lead: "移動の負担がない出張レッスンなら、忙しい毎日の中でも、自然と音楽が生活に溶け込みます。",
        mainImage: "/images/areas/kiyosumi-shirakawa.webp",
        mainImageAlt: "清澄白河での女性のピアノレッスン風景",
        keywords: ["清澄白河 ピアノ教室", "清澄白河 ピアノ 大人", "清澄白河 ピアノ 子供", "清澄白河 出張レッスン", "出張ピアノ教室", "大人", "子供", "初心者", "ピアノレッスン"],
        features: [
            {
                title: "個性を輝かせるオーダーメイドレッスン",
                description: "一人ひとりの「好き」や得意なことを伸ばす指導スタイルです。それぞれの個性に合わせたアプローチで、自信と意欲を引き出してまいります。",
            },
            {
                title: "0歳から大人まで対応",
                description: "小さなお子様にはリズム遊びや歌から、大人の方には憧れの一曲から。どなたでも無理なくピアノを始めていただけます。",
            },
        ],
        faqs: [
            {
                question: "清澄白河駅周辺の住宅街でも訪問レッスンは可能ですか？",
                answer: "はい、清澄白河駅周辺を含む清澄白河エリアへ訪問可能です。建物環境に合わせて指導します。"
            },
            {
                question: "清澄白河で基礎と好きな曲を同時に進められますか？",
                answer: "可能です。基礎課題と希望曲を同時進行し、モチベーションと技術を両立させます。"
            },
            {
                question: "清澄庭園・白河エリアで暮らしながら無理なく続けるコツはありますか？",
                answer: "5〜15分の短時間練習を設計し、忙しい週でも継続できる仕組みを作ります。"
            },
            {
                question: "清澄白河で大人と子どもの併用受講はできますか？",
                answer: "はい。目標別に内容を分けつつ、同日に連続で受講することも可能です。"
            },
            {
                question: "清澄白河の体験レッスンでは何を確認できますか？",
                answer: "現在の演奏状態、練習環境、目標曲、頻度を整理し、開始後の計画を具体化します。"
            },
            {
                question: "清澄白河でレッスン後の練習内容は共有してもらえますか？",
                answer: "毎回の要点を短く共有します。次回までの課題が明確になるため継続しやすくなります。"
            }
        ],
        uniqueContent: `清澄白河でピアノ教室を検討する方には、江東区公開統計（2026年2月）で清澄・白河合算人口は15,417人、65歳以上比率は19.4％という地域データがあります。<br><br>清澄白河駅周辺は文化施設と住宅が近接し、子どもと大人の併用受講ニーズがあるため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>基礎に加えて音楽表現を丁寧に育てたい親子を中心に、仕事や家事の合間に再開し長く続けたい大人の方にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "清澄白河エリアの皆様に、画一的な指導ではなく一人ひとりの感性を大切にするレッスンをお届けしています。型にはめるのではなく、生徒様が持つ「表現したい」という種を対話を通じて大きく育てます。出張レッスンなら、リラックスした空間で音楽とじっくり向き合えます。",
        personas: {
            primary: {
                label: "表現重視の親子",
                summary: "基礎に加えて音楽表現を丁寧に育てたい親子。",
                painPoints: [
                    "画一的な教材だと表現意欲が続きにくい",
                    "基礎と好きな曲のバランスが取りづらい",
                    "家庭練習の方針が曖昧になりやすい"
                ],
                fitPoints: [
                    "基礎と好きな曲を並行する構成で継続しやすい",
                    "タッチ・読譜・表現を一体で指導できる",
                    "毎回の家庭練習ポイントを明確に共有する"
                ]
            },
            secondary: {
                label: "大人趣味再開層",
                summary: "仕事や家事の合間に再開し長く続けたい大人の方。",
                painPoints: [
                    "仕事後に教室へ移動する体力を確保しにくい",
                    "不規則勤務で固定曜日が組みにくい",
                    "ブランク再開の心理的ハードルが高い"
                ],
                fitPoints: [
                    "自宅訪問で移動負担なく開始できる",
                    "月2回など柔軟な頻度設計に対応できる",
                    "目標曲ベースで達成感を作り直せる"
                ]
            }
        },
        localityHighlights: [
            "江東区公開統計（2026年2月）で清澄・白河合算人口は15,417人、65歳以上比率は19.4％。",
            "清澄白河駅周辺は文化施設と住宅が近接し、子どもと大人の併用受講ニーズがある。",
            "落ち着いた住宅街で自宅練習がしやすく、表現指導との相性が高い。"
        ],
        needSolutions: [
            {
                label: "CASE 01",
                need: `<span class="block text-xl mb-2 font-bold">表現重視の親子</span>
                       <span class="block text-sm mb-4 opacity-80">基礎に加えて音楽表現を丁寧に育てたい親子。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>画一的な教材だと表現意欲が続きにくい</li>
                           <li>基礎と好きな曲のバランスが取りづらい</li>
                           <li>家庭練習の方針が曖昧になりやすい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>基礎と好きな曲を並行する構成で継続しやすい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>タッチ・読譜・表現を一体で指導できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>毎回の家庭練習ポイントを明確に共有する</span></li>
                           </ul>`
            },
            {
                label: "CASE 02",
                need: `<span class="block text-xl mb-2 font-bold">大人趣味再開層</span>
                       <span class="block text-sm mb-4 opacity-80">仕事や家事の合間に再開し長く続けたい大人の方。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>仕事後に教室へ移動する体力を確保しにくい</li>
                           <li>不規則勤務で固定曜日が組みにくい</li>
                           <li>ブランク再開の心理的ハードルが高い</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅訪問で移動負担なく開始できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>月2回など柔軟な頻度設計に対応できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>目標曲ベースで達成感を作り直せる</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 01",
                need: "清澄白河で基礎習得と好きな曲の両立をどう進めるか迷う。",
                solution: "基礎課題と希望曲を同じ週に配置し、達成感と技術定着を同時に進めるカリキュラムを組みます。"
            },
            {
                label: "ISSUE 02",
                need: "清澄庭園・白河エリアの生活リズムに合わせた練習習慣が作れない。",
                solution: "5〜15分単位の練習メニューを提示し、忙しい日でも継続できる運用にします。"
            },
            {
                label: "ISSUE 03",
                need: "子どもと大人で目標が異なり、家庭内で練習方針がばらつく。",
                solution: "世代ごとの目標を分けつつ、共有しやすい進捗メモで家庭内コミュニケーションを整えます。"
            }
        ],
        seo: {
            primaryKeyword: "清澄白河 ピアノ教室",
            secondaryKeywords: [
                "清澄白河 出張ピアノ",
                "清澄白河駅 ピアノレッスン",
                "清澄白河 子供 ピアノ",
                "清澄白河 大人 ピアノ",
                "清澄白河 電子ピアノ レッスン"
            ],
            metaDescription: "清澄白河のピアノ教室なら出張専門の髙橋遊月ピアノ教室。清澄白河駅周辺へ講師が訪問し、表現重視の親子から大人再開まで対応するオーダーメイド訪問レッスン。電子ピアノ対応・無料体験レッスン受付中。"
        },
        cta: {
            reassurance: [
                "清澄白河での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "清澄白河エリアは子ども・大人併用受講のご相談にも対応しています。"
        },
        relatedAreas: ["hirano", "miyoshi", "monzen-nakacho", "morishita"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.8020!3d35.6780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["清澄庭園", "東京都現代美術館", "深川江戸資料館", "清澄白河駅"],
        areaGuide: `清澄白河でレッスンを続ける鍵は、<strong>基礎と表現の両立を日常練習に落とし込む運用運用を行うこと</strong>です。<br><br>落ち着いた住宅街で自宅練習がしやすく、表現指導との相性が高いという生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "0歳から大人まで対応。個性を伸ばすオーダーメイドの出張ピアノレッスン。",
    },
    {
        slug: "hirano",
        name: "平野",
        groupId: "kiyosumi-group",
        siblingSlugs: ["kiyosumi-shirakawa", "miyoshi"],
        catchphrase: "ご自宅で、<br class='md:hidden' />あなたのペースでピアノを",
        lead: "平野エリアにお住まいの方へ、講師がご自宅まで伺う出張ピアノレッスンをお届けしています。",
        mainImage: "/images/areas/hirano.webp",
        mainImageAlt: "平野エリアでのピアノレッスン風景",
        keywords: ["平野 ピアノ教室", "平野 ピアノレッスン", "平野 出張レッスン", "江東区平野 ピアノ", "出張ピアノ教室", "子供", "大人", "初心者", "ピアノレッスン"],
        features: [
            {
                title: "個性を輝かせるオーダーメイドレッスン",
                description: "一人ひとりの「好き」や得意なことを伸ばす指導スタイルです。それぞれの個性に合わせたアプローチで、自信と意欲を引き出してまいります。",
            },
            {
                title: "0歳から大人まで対応",
                description: "小さなお子様にはリズム遊びや歌から、大人の方には憧れの一曲から。どなたでも無理なくピアノを始めていただけます。",
            },
        ],
        faqs: [
            {
                question: "清澄白河駅周辺の住宅街でも訪問レッスンは可能ですか？",
                answer: "はい、清澄白河駅周辺を含む平野エリアへ訪問可能です。建物環境に合わせて指導します。"
            },
            {
                question: "平野で基礎と好きな曲を同時に進められますか？",
                answer: "可能です。基礎課題と希望曲を同時進行し、モチベーションと技術を両立させます。"
            },
            {
                question: "平野二丁目周辺で暮らしながら無理なく続けるコツはありますか？",
                answer: "5〜15分の短時間練習を設計し、忙しい週でも継続できる仕組みを作ります。"
            },
            {
                question: "平野で大人と子どもの併用受講はできますか？",
                answer: "はい。目標別に内容を分けつつ、同日に連続で受講することも可能です。"
            },
            {
                question: "平野の体験レッスンでは何を確認できますか？",
                answer: "現在の演奏状態、練習環境、目標曲、頻度を整理し、開始後の計画を具体化します。"
            },
            {
                question: "平野でレッスン後の練習内容は共有してもらえますか？",
                answer: "毎回の要点を短く共有します。次回までの課題が明確になるため継続しやすくなります。"
            }
        ],
        uniqueContent: `平野でピアノ教室を検討する方には、江東区公開統計（2026年2月）で平野の人口は7,584人、0〜14歳比率は14.1％という地域データがあります。<br><br>清澄白河駅徒歩圏の住宅街で、通室より自宅完結型の習い事が生活導線に合いやすいため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>落ち着いた自宅環境で集中して学ばせたいご家庭を中心に、通室せずマイペースに再開したい大人の方にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "平野エリアにお住まいの方へ、ご自宅で完結する出張ピアノレッスンをお届けしています。お子様から大人の方まで、一人ひとりのペースや目標に合わせた丁寧な指導を心がけています。画一的な指導ではなく、生徒様の感性を大切にするレッスンです。",
        personas: {
            primary: {
                label: "住宅街の子育て世帯",
                summary: "落ち着いた自宅環境で集中して学ばせたいご家庭。",
                painPoints: [
                    "保育園・学校後の移動で帰宅後の時間が圧迫される",
                    "雨天や暑寒で通室そのものが負担になる",
                    "送迎中は保護者の家事や仕事が止まりやすい"
                ],
                fitPoints: [
                    "講師がご自宅へ訪問するため送迎が不要",
                    "天候に左右されにくく生活リズムを守りやすい",
                    "兄弟連続受講や夕方枠の調整がしやすい"
                ]
            },
            secondary: {
                label: "ブランク再開層",
                summary: "通室せずマイペースに再開したい大人の方。",
                painPoints: [
                    "仕事後に教室へ移動する体力を確保しにくい",
                    "不規則勤務で固定曜日が組みにくい",
                    "ブランク再開の心理的ハードルが高い"
                ],
                fitPoints: [
                    "自宅訪問で移動負担なく開始できる",
                    "月2回など柔軟な頻度設計に対応できる",
                    "目標曲ベースで達成感を作り直せる"
                ]
            }
        },
        localityHighlights: [
            "江東区公開統計（2026年2月）で平野の人口は7,584人、0〜14歳比率は14.1％。",
            "清澄白河駅徒歩圏の住宅街で、通室より自宅完結型の習い事が生活導線に合いやすい。",
            "戸建・低層住宅も多く、練習時間の設計相談がしやすい。"
        ],
        needSolutions: [
            {
                label: "CASE 01",
                need: `<span class="block text-xl mb-2 font-bold">住宅街の子育て世帯</span>
                       <span class="block text-sm mb-4 opacity-80">落ち着いた自宅環境で集中して学ばせたいご家庭。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>保育園・学校後の移動で帰宅後の時間が圧迫される</li>
                           <li>雨天や暑寒で通室そのものが負担になる</li>
                           <li>送迎中は保護者の家事や仕事が止まりやすい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>講師がご自宅へ訪問するため送迎が不要</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>天候に左右されにくく生活リズムを守りやすい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟連続受講や夕方枠の調整がしやすい</span></li>
                           </ul>`
            },
            {
                label: "CASE 02",
                need: `<span class="block text-xl mb-2 font-bold">ブランク再開層</span>
                       <span class="block text-sm mb-4 opacity-80">通室せずマイペースに再開したい大人の方。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>仕事後に教室へ移動する体力を確保しにくい</li>
                           <li>不規則勤務で固定曜日が組みにくい</li>
                           <li>ブランク再開の心理的ハードルが高い</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅訪問で移動負担なく開始できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>月2回など柔軟な頻度設計に対応できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>目標曲ベースで達成感を作り直せる</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 01",
                need: "平野で基礎習得と好きな曲の両立をどう進めるか迷う。",
                solution: "基礎課題と希望曲を同じ週に配置し、達成感と技術定着を同時に進めるカリキュラムを組みます。"
            },
            {
                label: "ISSUE 02",
                need: "平野二丁目周辺の生活リズムに合わせた練習習慣が作れない。",
                solution: "5〜15分単位の練習メニューを提示し、忙しい日でも継続できる運用にします。"
            },
            {
                label: "ISSUE 03",
                need: "子どもと大人で目標が異なり、家庭内で練習方針がばらつく。",
                solution: "世代ごとの目標を分けつつ、共有しやすい進捗メモで家庭内コミュニケーションを整えます。"
            }
        ],
        seo: {
            primaryKeyword: "平野 ピアノ教室",
            secondaryKeywords: [
                "平野 出張ピアノ",
                "清澄白河駅 ピアノレッスン",
                "平野 子供 ピアノ",
                "平野 大人 ピアノ",
                "平野 電子ピアノ レッスン"
            ],
            metaDescription: "平野のピアノ教室なら出張専門の髙橋遊月ピアノ教室。清澄白河駅周辺へ講師が訪問し、住宅街の生活リズムに合わせて継続しやすい出張マンツーマンレッスン。電子ピアノ対応・無料体験レッスン受付中。"
        },
        cta: {
            reassurance: [
                "平野での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "平野エリアの体験では練習時間の作り方まで具体的にご提案します。"
        },
        relatedAreas: ["kiyosumi-shirakawa", "miyoshi", "monzen-nakacho"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.8010!3d35.6760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["東京都現代美術館", "木場公園（近隣）"],
        areaGuide: `平野でレッスンを続ける鍵は、<strong>静かな自宅環境を活かした集中設計運用を行うこと</strong>です。<br><br>戸建・低層住宅も多く、練習時間の設計相談がしやすいという生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "清澄白河駅近く。お子様から大人まで対応の出張ピアノ教室。",
    },
    {
        slug: "miyoshi",
        name: "三好",
        groupId: "kiyosumi-group",
        siblingSlugs: ["kiyosumi-shirakawa", "hirano"],
        catchphrase: "気軽に始める、<br class='md:hidden' />ご自宅でのピアノレッスン",
        lead: "三好エリアにお住まいの方へ、講師がご自宅まで伺う出張ピアノレッスンをお届けしています。",
        mainImage: "/images/areas/miyoshi.webp",
        mainImageAlt: "三好エリアでのピアノレッスン風景",
        keywords: ["三好 ピアノ教室", "三好 ピアノレッスン", "三好 習い事", "江東区三好 ピアノ", "出張ピアノ教室", "子供", "大人", "初心者", "ピアノレッスン"],
        features: [
            {
                title: "0歳から大人まで対応",
                description: "小さなお子様にはリズム遊びや歌から、大人の方には憧れの一曲から。どなたでも無理なくピアノを始めていただけます。",
            },
            {
                title: "個性を大切にする指導",
                description: "一人ひとりの「弾きたい」という気持ちを大切に、決まった型にはめない柔軟な指導を行います。",
            },
        ],
        faqs: [
            {
                question: "清澄白河駅周辺の集合住宅でも訪問レッスンは可能ですか？",
                answer: "はい、清澄白河駅周辺を含む三好エリアへ訪問可能です。建物環境に合わせて指導します。"
            },
            {
                question: "三好で基礎と好きな曲を同時に進められますか？",
                answer: "可能です。基礎課題と希望曲を同時進行し、モチベーションと技術を両立させます。"
            },
            {
                question: "三好エリアで暮らしながら無理なく続けるコツはありますか？",
                answer: "5〜15分の短時間練習を設計し、忙しい週でも継続できる仕組みを作ります。"
            },
            {
                question: "三好で大人と子どもの併用受講はできますか？",
                answer: "はい。目標別に内容を分けつつ、同日に連続で受講することも可能です。"
            },
            {
                question: "三好の体験レッスンでは何を確認できますか？",
                answer: "現在の演奏状態、練習環境、目標曲、頻度を整理し、開始後の計画を具体化します。"
            },
            {
                question: "三好でレッスン後の練習内容は共有してもらえますか？",
                answer: "毎回の要点を短く共有します。次回までの課題が明確になるため継続しやすくなります。"
            }
        ],
        uniqueContent: `三好でピアノ教室を検討する方には、江東区公開統計（2026年2月）で三好の人口は5,420人、65歳以上比率は21.0％という地域データがあります。<br><br>清澄白河駅近接の住宅地で、子どもと大人の併用ニーズが継続的にあるため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>生活の質を上げる趣味としてピアノを続けたい方を中心に、本人の意欲に合わせて段階的に上達したいお子様にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "三好エリアにお住まいの方へ、ご自宅で完結する出張ピアノレッスンをお届けしています。お子様から大人の方まで、それぞれの目標やペースに合わせた柔軟な指導を行っています。「弾きたい」という気持ちを大切に、音楽を長く楽しんでいただけるレッスンです。",
        personas: {
            primary: {
                label: "大人趣味層",
                summary: "生活の質を上げる趣味としてピアノを続けたい方。",
                painPoints: [
                    "仕事後に教室へ移動する体力を確保しにくい",
                    "不規則勤務で固定曜日が組みにくい",
                    "ブランク再開の心理的ハードルが高い"
                ],
                fitPoints: [
                    "自宅訪問で移動負担なく開始できる",
                    "月2回など柔軟な頻度設計に対応できる",
                    "目標曲ベースで達成感を作り直せる"
                ]
            },
            secondary: {
                label: "マイペース学習の子ども",
                summary: "本人の意欲に合わせて段階的に上達したいお子様。",
                painPoints: [
                    "画一的な教材だと表現意欲が続きにくい",
                    "基礎と好きな曲のバランスが取りづらい",
                    "家庭練習の方針が曖昧になりやすい"
                ],
                fitPoints: [
                    "基礎と好きな曲を並行する構成で継続しやすい",
                    "タッチ・読譜・表現を一体で指導できる",
                    "毎回の家庭練習ポイントを明確に共有する"
                ]
            }
        },
        localityHighlights: [
            "江東区公開統計（2026年2月）で三好の人口は5,420人、65歳以上比率は21.0％。",
            "清澄白河駅近接の住宅地で、子どもと大人の併用ニーズが継続的にある。",
            "静かな住環境を活かし、短時間でも集中できるレッスン設計がしやすい。"
        ],
        needSolutions: [
            {
                label: "CASE 01",
                need: `<span class="block text-xl mb-2 font-bold">大人趣味層</span>
                       <span class="block text-sm mb-4 opacity-80">生活の質を上げる趣味としてピアノを続けたい方。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>仕事後に教室へ移動する体力を確保しにくい</li>
                           <li>不規則勤務で固定曜日が組みにくい</li>
                           <li>ブランク再開の心理的ハードルが高い</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅訪問で移動負担なく開始できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>月2回など柔軟な頻度設計に対応できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>目標曲ベースで達成感を作り直せる</span></li>
                           </ul>`
            },
            {
                label: "CASE 02",
                need: `<span class="block text-xl mb-2 font-bold">マイペース学習の子ども</span>
                       <span class="block text-sm mb-4 opacity-80">本人の意欲に合わせて段階的に上達したいお子様。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>画一的な教材だと表現意欲が続きにくい</li>
                           <li>基礎と好きな曲のバランスが取りづらい</li>
                           <li>家庭練習の方針が曖昧になりやすい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>基礎と好きな曲を並行する構成で継続しやすい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>タッチ・読譜・表現を一体で指導できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>毎回の家庭練習ポイントを明確に共有する</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 01",
                need: "三好で基礎習得と好きな曲の両立をどう進めるか迷う。",
                solution: "基礎課題と希望曲を同じ週に配置し、達成感と技術定着を同時に進めるカリキュラムを組みます。"
            },
            {
                label: "ISSUE 02",
                need: "三好エリアの生活リズムに合わせた練習習慣が作れない。",
                solution: "5〜15分単位の練習メニューを提示し、忙しい日でも継続できる運用にします。"
            },
            {
                label: "ISSUE 03",
                need: "子どもと大人で目標が異なり、家庭内で練習方針がばらつく。",
                solution: "世代ごとの目標を分けつつ、共有しやすい進捗メモで家庭内コミュニケーションを整えます。"
            }
        ],
        seo: {
            primaryKeyword: "三好 ピアノ教室",
            secondaryKeywords: [
                "三好 出張ピアノ",
                "清澄白河駅 ピアノレッスン",
                "三好 子供 ピアノ",
                "三好 大人 ピアノ",
                "三好 電子ピアノ レッスン"
            ],
            metaDescription: "三好のピアノ教室なら出張専門の髙橋遊月ピアノ教室。清澄白河駅周辺へ講師が訪問し、大人趣味と子どもの個性伸長を両立できる出張ピアノレッスン。電子ピアノ対応・無料体験レッスン受付中。ご家庭ごとの生活導線に合わせて曜日を調整できます。"
        },
        cta: {
            reassurance: [
                "三好での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "三好エリアは大人の再開相談とお子様の体験申込の両方に対応しています。"
        },
        relatedAreas: ["kiyosumi-shirakawa", "hirano", "monzen-nakacho"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.8030!3d35.6770!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["東京都現代美術館（近隣）", "清澄庭園（近隣）"],
        areaGuide: `三好でレッスンを続ける鍵は、<strong>短時間練習でも達成感を積み上げる運用運用を行うこと</strong>です。<br><br>静かな住環境を活かし、短時間でも集中できるレッスン設計がしやすいという生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "清澄白河駅近く。通学不要で気軽に始められる出張ピアノ教室。",
    },

    // ========================================
    // 門前仲町・木場・越中島グループ
    // ========================================
    {
        slug: "monzen-nakacho",
        name: "門前仲町",
        groupId: "monzen-group",
        siblingSlugs: ["kiba", "ecchujima"],
        catchphrase: "「続けられる」を、<br class='md:hidden' />一番近くで。",
        lead: "生徒様のご希望を大切にしながら、ピアノを長く楽しんでいただけるレッスンをお届けします。",
        mainImage: "/images/areas/monzen-nakacho.webp",
        mainImageAlt: "門前仲町の温かい家庭での子供のピアノレッスン",
        keywords: ["門前仲町 ピアノ教室", "門前仲町 ピアノ 子供", "門前仲町 ピアノレッスン", "門前仲町 出張レッスン", "出張ピアノ教室", "深川 ピアノ教室", "子供", "大人", "初心者", "ピアノレッスン"],
        features: [
            {
                title: "ご家庭のペースを尊重",
                description: "学校行事や習い事との両立を考慮し、無理のないスケジュールでレッスンを進めてまいります。長く続けていただくことを大切にしております。",
            },
            {
                title: "弾きたい曲から始められます",
                description: "基礎練習も大切にしながら、生徒様が弾きたい曲にもチャレンジしていただけます。楽しみながら着実に上達できる指導を心がけております。",
            },
        ],
        faqs: [
            {
                question: "門前仲町駅周辺の駅近マンションでも訪問レッスンは可能ですか？",
                answer: "はい、門前仲町駅周辺を含む門前仲町エリアへ訪問可能です。建物環境に合わせて指導します。"
            },
            {
                question: "門前仲町で基礎と好きな曲を同時に進められますか？",
                answer: "可能です。基礎課題と希望曲を同時進行し、モチベーションと技術を両立させます。"
            },
            {
                question: "深川不動堂周辺で暮らしながら無理なく続けるコツはありますか？",
                answer: "5〜15分の短時間練習を設計し、忙しい週でも継続できる仕組みを作ります。"
            },
            {
                question: "門前仲町で大人と子どもの併用受講はできますか？",
                answer: "はい。目標別に内容を分けつつ、同日に連続で受講することも可能です。"
            },
            {
                question: "門前仲町の体験レッスンでは何を確認できますか？",
                answer: "現在の演奏状態、練習環境、目標曲、頻度を整理し、開始後の計画を具体化します。"
            },
            {
                question: "門前仲町でレッスン後の練習内容は共有してもらえますか？",
                answer: "毎回の要点を短く共有します。次回までの課題が明確になるため継続しやすくなります。"
            }
        ],
        uniqueContent: `門前仲町でピアノ教室を検討する方には、江東区公開統計（2026年2月）で門前仲町の人口は2,479人、15〜64歳比率は79.0％という地域データがあります。<br><br>門前仲町駅周辺は就業層比率が高く、平日夜に自宅で完結する需要が強いため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>短期成果より継続を重視して基礎を積みたいご家庭を中心に、通室なしで仕事後に趣味を継続したい方にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "門前仲町エリアの皆様に、長く愛される音楽のパートナーでありたいと願っています。「憧れの曲を弾けるようになりたい」「基礎からしっかり学びたい」。そんな皆様の想いに、東京音楽大学卒業の確かな技術でお応えします。ご自宅のピアノで学ぶ出張レッスンは、通学の負担がないため、無理なく長く続けられるのが魅力です。",
        personas: {
            primary: {
                label: "長期継続志向家庭",
                summary: "短期成果より継続を重視して基礎を積みたいご家庭。",
                painPoints: [
                    "短期成果より継続を重視したい",
                    "学年変化で習い事の優先順位が変わる",
                    "先生変更で指導方針がぶれやすい"
                ],
                fitPoints: [
                    "成長段階に合わせて目標を再設計できる",
                    "年間で無理なく続く練習計画を立てやすい",
                    "同一講師が継続伴走し癖を把握できる"
                ]
            },
            secondary: {
                label: "忙しい社会人",
                summary: "通室なしで仕事後に趣味を継続したい方。",
                painPoints: [
                    "仕事後に教室へ移動する体力を確保しにくい",
                    "不規則勤務で固定曜日が組みにくい",
                    "ブランク再開の心理的ハードルが高い"
                ],
                fitPoints: [
                    "自宅訪問で移動負担なく開始できる",
                    "月2回など柔軟な頻度設計に対応できる",
                    "目標曲ベースで達成感を作り直せる"
                ]
            }
        },
        localityHighlights: [
            "江東区公開統計（2026年2月）で門前仲町の人口は2,479人、15〜64歳比率は79.0％。",
            "門前仲町駅周辺は就業層比率が高く、平日夜に自宅で完結する需要が強い。",
            "歴史ある街区で長く住む世帯も多く、継続型の学習計画が受け入れられやすい。"
        ],
        needSolutions: [
            {
                label: "CASE 01",
                need: `<span class="block text-xl mb-2 font-bold">長期継続志向家庭</span>
                       <span class="block text-sm mb-4 opacity-80">短期成果より継続を重視して基礎を積みたいご家庭。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>短期成果より継続を重視したい</li>
                           <li>学年変化で習い事の優先順位が変わる</li>
                           <li>先生変更で指導方針がぶれやすい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>成長段階に合わせて目標を再設計できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>年間で無理なく続く練習計画を立てやすい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>同一講師が継続伴走し癖を把握できる</span></li>
                           </ul>`
            },
            {
                label: "CASE 02",
                need: `<span class="block text-xl mb-2 font-bold">忙しい社会人</span>
                       <span class="block text-sm mb-4 opacity-80">通室なしで仕事後に趣味を継続したい方。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>仕事後に教室へ移動する体力を確保しにくい</li>
                           <li>不規則勤務で固定曜日が組みにくい</li>
                           <li>ブランク再開の心理的ハードルが高い</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅訪問で移動負担なく開始できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>月2回など柔軟な頻度設計に対応できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>目標曲ベースで達成感を作り直せる</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 01",
                need: "門前仲町で基礎習得と好きな曲の両立をどう進めるか迷う。",
                solution: "基礎課題と希望曲を同じ週に配置し、達成感と技術定着を同時に進めるカリキュラムを組みます。"
            },
            {
                label: "ISSUE 02",
                need: "深川不動堂周辺の生活リズムに合わせた練習習慣が作れない。",
                solution: "5〜15分単位の練習メニューを提示し、忙しい日でも継続できる運用にします。"
            },
            {
                label: "ISSUE 03",
                need: "子どもと大人で目標が異なり、家庭内で練習方針がばらつく。",
                solution: "世代ごとの目標を分けつつ、共有しやすい進捗メモで家庭内コミュニケーションを整えます。"
            }
        ],
        seo: {
            primaryKeyword: "門前仲町 ピアノ教室",
            secondaryKeywords: [
                "門前仲町 出張ピアノ",
                "門前仲町駅 ピアノレッスン",
                "門前仲町 子供 ピアノ",
                "門前仲町 大人 ピアノ",
                "門前仲町 電子ピアノ レッスン"
            ],
            metaDescription: "門前仲町のピアノ教室なら出張専門の髙橋遊月ピアノ教室。門前仲町駅周辺へ講師が訪問し、長期継続と仕事後の再開を両立しやすい出張専門ピアノ教室。電子ピアノ対応・無料体験レッスン受付中。"
        },
        cta: {
            reassurance: [
                "門前仲町での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "門前仲町エリアは長期継続前提の体験相談に力を入れています。"
        },
        relatedAreas: ["kiba", "ecchujima", "kiyosumi-shirakawa", "ningyocho"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.7980!3d35.6720!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["富岡八幡宮", "深川ギャザリア", "門前仲町駅"],
        areaGuide: `門前仲町でレッスンを続ける鍵は、<strong>長期目標を見据えた段階設計運用を行うこと</strong>です。<br><br>歴史ある街区で長く住む世帯も多く、継続型の学習計画が受け入れられやすいという生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "弾きたい曲でレッスンOK。長く続けられる出張専門ピアノ教室。",
    },
    {
        slug: "kiba",
        name: "木場",
        groupId: "monzen-group",
        siblingSlugs: ["monzen-nakacho", "ecchujima"],
        catchphrase: "ご自宅で、<br class='md:hidden' />無理なく続けるピアノ",
        lead: "木場エリアにお住まいの方へ、講師がご自宅まで伺う出張ピアノレッスンをお届けしています。",
        mainImage: "/images/areas/kiba.webp",
        mainImageAlt: "木場エリアでの子供のピアノレッスン風景",
        keywords: ["木場 ピアノ教室", "木場 ピアノ 子供", "木場 ピアノレッスン", "木場 出張レッスン", "出張ピアノ教室", "子供", "大人", "初心者", "ピアノレッスン"],
        features: [
            {
                title: "弾きたい曲から始められます",
                description: "基礎練習も大切にしながら、生徒様が弾きたい曲にもチャレンジしていただけます。楽しみながら着実に上達できます。",
            },
            {
                title: "ご家庭のペースを尊重",
                description: "学校行事や習い事との両立を考慮し、無理のないスケジュールでレッスンを進めてまいります。",
            },
        ],
        faqs: [
            {
                question: "木場駅周辺の集合住宅でも訪問レッスンは可能ですか？",
                answer: "はい、木場駅周辺を含む木場エリアへ訪問可能です。建物環境に合わせて指導します。"
            },
            {
                question: "木場で基礎と好きな曲を同時に進められますか？",
                answer: "可能です。基礎課題と希望曲を同時進行し、モチベーションと技術を両立させます。"
            },
            {
                question: "木場公園周辺で暮らしながら無理なく続けるコツはありますか？",
                answer: "5〜15分の短時間練習を設計し、忙しい週でも継続できる仕組みを作ります。"
            },
            {
                question: "木場で大人と子どもの併用受講はできますか？",
                answer: "はい。目標別に内容を分けつつ、同日に連続で受講することも可能です。"
            },
            {
                question: "木場の体験レッスンでは何を確認できますか？",
                answer: "現在の演奏状態、練習環境、目標曲、頻度を整理し、開始後の計画を具体化します。"
            },
            {
                question: "木場でレッスン後の練習内容は共有してもらえますか？",
                answer: "毎回の要点を短く共有します。次回までの課題が明確になるため継続しやすくなります。"
            }
        ],
        uniqueContent: `木場でピアノ教室を検討する方には、江東区公開統計（2026年2月）で木場の人口は11,390人、0〜14歳比率は12.0％という地域データがあります。<br><br>木場公園周辺はファミリー居住が多く、平日夕方の送迎圧縮ニーズが高いため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>移動負担を減らしつつ基礎を丁寧に学ばせたいご家庭を中心に、好きな曲を入口にモチベーションを維持したいお子様にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "木場エリアにお住まいの方へ、通学不要の出張ピアノレッスンをお届けしています。「憧れの曲を弾けるようになりたい」「基礎からしっかり学びたい」。そんな皆様の想いに、東京音楽大学卒業の確かな技術でお応えします。無理なく長く続けられるのが出張レッスンの魅力です。",
        personas: {
            primary: {
                label: "子育て世帯",
                summary: "移動負担を減らしつつ基礎を丁寧に学ばせたいご家庭。",
                painPoints: [
                    "保育園・学校後の移動で帰宅後の時間が圧迫される",
                    "雨天や暑寒で通室そのものが負担になる",
                    "送迎中は保護者の家事や仕事が止まりやすい"
                ],
                fitPoints: [
                    "講師がご自宅へ訪問するため送迎が不要",
                    "天候に左右されにくく生活リズムを守りやすい",
                    "兄弟連続受講や夕方枠の調整がしやすい"
                ]
            },
            secondary: {
                label: "曲志向の子ども",
                summary: "好きな曲を入口にモチベーションを維持したいお子様。",
                painPoints: [
                    "画一的な教材だと表現意欲が続きにくい",
                    "基礎と好きな曲のバランスが取りづらい",
                    "家庭練習の方針が曖昧になりやすい"
                ],
                fitPoints: [
                    "基礎と好きな曲を並行する構成で継続しやすい",
                    "タッチ・読譜・表現を一体で指導できる",
                    "毎回の家庭練習ポイントを明確に共有する"
                ]
            }
        },
        localityHighlights: [
            "江東区公開統計（2026年2月）で木場の人口は11,390人、0〜14歳比率は12.0％。",
            "木場公園周辺はファミリー居住が多く、平日夕方の送迎圧縮ニーズが高い。",
            "東西線沿線で移動はしやすい一方、帰宅後の可処分時間を守る設計が重要。"
        ],
        needSolutions: [
            {
                label: "CASE 01",
                need: `<span class="block text-xl mb-2 font-bold">子育て世帯</span>
                       <span class="block text-sm mb-4 opacity-80">移動負担を減らしつつ基礎を丁寧に学ばせたいご家庭。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>保育園・学校後の移動で帰宅後の時間が圧迫される</li>
                           <li>雨天や暑寒で通室そのものが負担になる</li>
                           <li>送迎中は保護者の家事や仕事が止まりやすい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>講師がご自宅へ訪問するため送迎が不要</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>天候に左右されにくく生活リズムを守りやすい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟連続受講や夕方枠の調整がしやすい</span></li>
                           </ul>`
            },
            {
                label: "CASE 02",
                need: `<span class="block text-xl mb-2 font-bold">曲志向の子ども</span>
                       <span class="block text-sm mb-4 opacity-80">好きな曲を入口にモチベーションを維持したいお子様。</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>画一的な教材だと表現意欲が続きにくい</li>
                           <li>基礎と好きな曲のバランスが取りづらい</li>
                           <li>家庭練習の方針が曖昧になりやすい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>基礎と好きな曲を並行する構成で継続しやすい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>タッチ・読譜・表現を一体で指導できる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>毎回の家庭練習ポイントを明確に共有する</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 01",
                need: "木場で基礎習得と好きな曲の両立をどう進めるか迷う。",
                solution: "基礎課題と希望曲を同じ週に配置し、達成感と技術定着を同時に進めるカリキュラムを組みます。"
            },
            {
                label: "ISSUE 02",
                need: "木場公園周辺の生活リズムに合わせた練習習慣が作れない。",
                solution: "5〜15分単位の練習メニューを提示し、忙しい日でも継続できる運用にします。"
            },
            {
                label: "ISSUE 03",
                need: "子どもと大人で目標が異なり、家庭内で練習方針がばらつく。",
                solution: "世代ごとの目標を分けつつ、共有しやすい進捗メモで家庭内コミュニケーションを整えます。"
            }
        ],
        seo: {
            primaryKeyword: "木場 ピアノ教室",
            secondaryKeywords: [
                "木場 出張ピアノ",
                "木場駅 ピアノレッスン",
                "木場 子供 ピアノ",
                "木場 大人 ピアノ",
                "木場 電子ピアノ レッスン"
            ],
            metaDescription: "木場のピアノ教室なら出張専門の髙橋遊月ピアノ教室。木場駅周辺へ講師が訪問し、基礎重視と好きな曲の両立を自宅で進められる出張ピアノレッスン。電子ピアノ対応・無料体験レッスン受付中。ご家庭ごとの生活導線に合わせて曜日を調整できます。"
        },
        cta: {
            reassurance: [
                "木場での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "木場エリアの体験では教材と練習曲の選び方までご説明します。"
        },
        relatedAreas: ["monzen-nakacho", "ecchujima", "kiyosumi-shirakawa"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.8050!3d35.6710!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["木場公園", "深川ギャザリア（近隣）", "木場駅"],
        areaGuide: `木場でレッスンを続ける鍵は、<strong>モチベーションを落とさない曲選定と基礎配分運用を行うこと</strong>です。<br><br>東西線沿線で移動はしやすい一方、帰宅後の可処分時間を守る設計が重要という生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "木場公園近く。弾きたい曲でレッスンできる出張ピアノ教室。",
    },
    {
        slug: "ecchujima",
        name: "越中島",
        groupId: "monzen-group",
        siblingSlugs: ["monzen-nakacho", "kiba"],
        catchphrase: "通学不要。<br class='md:hidden' />ご自宅でピアノレッスン",
        lead: "越中島エリアにお住まいの方へ、講師がご自宅まで伺う出張ピアノレッスンをお届けしています。",
        mainImage: "/images/areas/ecchujima.webp",
        mainImageAlt: "越中島エリアでの子供のピアノレッスン風景",
        keywords: ["越中島 ピアノ教室", "越中島 ピアノレッスン", "越中島 習い事", "越中島 出張レッスン", "出張ピアノ教室", "子供", "大人", "初心者", "ピアノレッスン"],
        features: [
            {
                title: "ご家庭のペースを尊重",
                description: "学校行事や習い事との両立を考慮し、無理のないスケジュールでレッスンを進めてまいります。",
            },
            {
                title: "弾きたい曲から始められます",
                description: "基礎練習も大切にしながら、生徒様が弾きたい曲にもチャレンジしていただけます。",
            },
        ],
        faqs: [
            {
                question: "越中島駅周辺の住宅マンションでも訪問レッスンは可能ですか？",
                answer: "はい、越中島駅周辺を含む越中島エリアへ訪問可能です。建物環境に合わせて指導します。"
            },
            {
                question: "越中島で基礎と好きな曲を同時に進められますか？",
                answer: "可能です。基礎課題と希望曲を同時進行し、モチベーションと技術を両立させます。"
            },
            {
                question: "越中島駅周辺で暮らしながら無理なく続けるコツはありますか？",
                answer: "5〜15分の短時間練習を設計し、忙しい週でも継続できる仕組みを作ります。"
            },
            {
                question: "越中島で大人と子どもの併用受講はできますか？",
                answer: "はい。目標別に内容を分けつつ、同日に連続で受講することも可能です。"
            },
            {
                question: "越中島の体験レッスンでは何を確認できますか？",
                answer: "現在の演奏状態、練習環境、目標曲、頻度を整理し、開始後の計画を具体化します。"
            },
            {
                question: "越中島でレッスン後の練習内容は共有してもらえますか？",
                answer: "毎回の要点を短く共有します。次回までの課題が明確になるため継続しやすくなります。"
            }
        ],
        uniqueContent: `越中島でピアノ教室を検討する方には、江東区公開統計（2026年2月）で越中島の人口は6,634人、65歳以上比率は22.7％という地域データがあります。<br><br>越中島駅周辺は学生・社会人・シニアが混在し、時間帯別ニーズの差が大きいため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>学校後の移動を最小化して継続したいご家庭を中心に、外出負担を抑えて音楽を再開したい方にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "越中島エリアにお住まいの方へ、ご自宅で完結する出張ピアノレッスンをお届けしています。通学の負担がないため、無理なく長く続けられるのが出張レッスンの魅力です。東京音楽大学卒業の確かな技術で、一人ひとりの目標に合わせた丁寧なレッスンを行います。",
        personas: {
            primary: {
                label: "通学負担軽減重視家庭",
                summary: "学校後の移動を最小化して継続したいご家庭。",
                painPoints: [
                    "保育園・学校後の移動で帰宅後の時間が圧迫される",
                    "雨天や暑寒で通室そのものが負担になる",
                    "送迎中は保護者の家事や仕事が止まりやすい"
                ],
                fitPoints: [
                    "講師がご自宅へ訪問するため送迎が不要",
                    "天候に左右されにくく生活リズムを守りやすい",
                    "兄弟連続受講や夕方枠の調整がしやすい"
                ]
            },
            secondary: {
                label: "シニア再開層",
                summary: "外出負担を抑えて音楽を再開したい方。",
                painPoints: [
                    "指の動きや体力への不安がある",
                    "若い頃の癖を直せるか不安がある",
                    "外出頻度を増やしにくい"
                ],
                fitPoints: [
                    "無理のないテンポ設定で負担を抑えられる",
                    "フォーム改善を段階的に実施できる",
                    "自宅受講で移動の不安を減らせる"
                ]
            }
        },
        localityHighlights: [
            "江東区公開統計（2026年2月）で越中島の人口は6,634人、65歳以上比率は22.7％。",
            "越中島駅周辺は学生・社会人・シニアが混在し、時間帯別ニーズの差が大きい。",
            "駅近でも生活導線が分散しやすく、訪問型で移動を固定化しない設計が有効。"
        ],
        needSolutions: [
            {
                need: "越中島で基礎習得と好きな曲の両立をどう進めるか迷う。",
                solution: "基礎課題と希望曲を同じ週に配置し、達成感と技術定着を同時に進めるカリキュラムを組みます。"
            },
            {
                need: "越中島駅周辺の生活リズムに合わせた練習習慣が作れない。",
                solution: "5〜15分単位の練習メニューを提示し、忙しい日でも継続できる運用にします。"
            },
            {
                need: "子どもと大人で目標が異なり、家庭内で練習方針がばらつく。",
                solution: "世代ごとの目標を分けつつ、共有しやすい進捗メモで家庭内コミュニケーションを整えます。"
            }
        ],
        seo: {
            primaryKeyword: "越中島 ピアノ教室",
            secondaryKeywords: [
                "越中島 出張ピアノ",
                "越中島駅 ピアノレッスン",
                "越中島 子供 ピアノ",
                "越中島 大人 ピアノ",
                "越中島 電子ピアノ レッスン"
            ],
            metaDescription: "越中島のピアノ教室なら出張専門の髙橋遊月ピアノ教室。越中島駅周辺へ講師が訪問し、通学負担軽減とシニア再開を同時に支える訪問型ピアノ指導。電子ピアノ対応・無料体験レッスン受付中。ご家庭ごとの生活導線に合わせて曜日を調整できます。"
        },
        cta: {
            reassurance: [
                "越中島での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "越中島エリアは世代別の目標設定相談を体験時に実施しています。"
        },
        relatedAreas: ["monzen-nakacho", "kiba", "tsukishima"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.7920!3d35.6680!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["越中島公園", "越中島駅"],
        areaGuide: `越中島でレッスンを続ける鍵は、<strong>世代差に合わせた時間帯と練習量の最適化運用を行うこと</strong>です。<br><br>駅近でも生活導線が分散しやすく、訪問型で移動を固定化しない設計が有効という生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "越中島駅周辺対応。通学不要・弾きたい曲で学べる出張ピアノ教室。",
    },

    // ========================================
    // 人形町・水天宮前・浜町グループ
    // ========================================
    {
        slug: "ningyocho",
        name: "人形町",
        groupId: "nihonbashi-group",
        siblingSlugs: ["suitengu-mae", "hamacho"],
        catchphrase: "忙しい日々に、<br class='md:hidden' />ピアノという癒しの時間を",
        lead: "お仕事帰りや休日のひととき、ご自宅でリラックスしながらピアノを楽しみませんか。",
        mainImage: "/images/areas/ningyocho.webp",
        mainImageAlt: "人形町での大人のピアノレッスン風景",
        keywords: ["人形町 ピアノ教室", "人形町 ピアノ 大人", "人形町 ピアノレッスン", "人形町 出張レッスン", "出張ピアノ教室", "大人", "子供", "初心者", "趣味", "ピアノレッスン"],
        features: [
            {
                title: "初心者の方も安心",
                description: "楽譜が読めなくても大丈夫です。大人になってからピアノを始める方にも、分かりやすく丁寧にお伝えいたします。",
            },
            {
                title: "弾きたい曲でレッスン",
                description: "クラシックに限らず、映画音楽やポップスなど、お好きな曲でレッスンできます。憧れの一曲に挑戦してみませんか。",
            },
        ],
        faqs: [
            {
                question: "人形町駅周辺の都心マンションでも訪問レッスンは可能ですか？",
                answer: "はい、人形町駅周辺を含む人形町エリアで訪問対応しています。建物規約に合わせた音量・時間帯で進行します。"
            },
            {
                question: "人形町で仕事終わりに受けられる時間帯はありますか？",
                answer: "平日夕方〜夜の枠もご相談可能です。帰宅時間に合わせて無理のない固定枠をご提案します。"
            },
            {
                question: "甘酒横丁周辺でも月2回ペースで受講できますか？",
                answer: "可能です。月2回・隔週・本番前集中など、目的に応じて頻度を調整できます。"
            },
            {
                question: "人形町で大人初心者が譜読みから始めても大丈夫ですか？",
                answer: "もちろん大丈夫です。譜読み・指づかい・リズムを分解し、段階的に習得できるよう進めます。"
            },
            {
                question: "人形町の体験レッスンで目標曲の相談はできますか？",
                answer: "はい。弾きたい曲や到達時期を伺い、練習ステップと想定期間を具体的にご案内します。"
            },
            {
                question: "人形町で親子や家族の同日レッスンは可能ですか？",
                answer: "可能です。連続受講で時間効率を高める運用にも対応しています。"
            }
        ],
        uniqueContent: `人形町でピアノ教室を検討する方には、中央区の町丁別集計（2023年1月）で日本橋人形町の人口は5,366人という地域データがあります。<br><br>人形町駅周辺は就業層と居住層が混在し、夜間・休日レッスン需要が高いため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>仕事後に移動せず質の高い趣味時間を確保したい方を中心に、限られた平日時間で子どもの習い事を継続したいご家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "お忙しい日々の隙間時間に、心安らぐピアノのひとときを取り入れませんか？大人の方の趣味の再開から、お子様の初めてのレッスンまで。ご自宅に講師が伺う出張レッスンなら、移動時間を気にせず、プライベートな空間で質の高い指導を受けられます。東京音楽大学出身の講師が、それぞれのペースに合わせて丁寧にサポートいたします。",
        personas: {
            primary: {
                label: "ビジネスパーソン",
                summary: "仕事後に移動せず質の高い趣味時間を確保したい方。",
                painPoints: [
                    "仕事後に教室へ移動する体力を確保しにくい",
                    "不規則勤務で固定曜日が組みにくい",
                    "ブランク再開の心理的ハードルが高い"
                ],
                fitPoints: [
                    "自宅訪問で移動負担なく開始できる",
                    "月2回など柔軟な頻度設計に対応できる",
                    "目標曲ベースで達成感を作り直せる"
                ]
            },
            secondary: {
                label: "都市型子育て世帯",
                summary: "限られた平日時間で子どもの習い事を継続したいご家庭。",
                painPoints: [
                    "保育園・学校後の移動で帰宅後の時間が圧迫される",
                    "雨天や暑寒で通室そのものが負担になる",
                    "送迎中は保護者の家事や仕事が止まりやすい"
                ],
                fitPoints: [
                    "講師がご自宅へ訪問するため送迎が不要",
                    "天候に左右されにくく生活リズムを守りやすい",
                    "兄弟連続受講や夕方枠の調整がしやすい"
                ]
            }
        },
        localityHighlights: [
            "中央区の町丁別集計（2023年1月）で日本橋人形町の人口は5,366人。",
            "人形町駅周辺は就業層と居住層が混在し、夜間・休日レッスン需要が高い。",
            "都心居住では移動時間そのものが機会損失になりやすく、訪問型の効果が出やすい。"
        ],
        needSolutions: [
            {
                need: "人形町で仕事や学業の後に教室へ移動する時間を取りにくい。",
                solution: "講師がご自宅へ伺うため移動ゼロで開始でき、帰宅後の短時間でも受講しやすくなります。"
            },
            {
                need: "限られた練習時間で何を優先すべきか判断しづらい。",
                solution: "毎回の目標を3点以内に絞って共有し、短時間でも成果が出る練習順を明確にします。"
            },
            {
                need: "甘酒横丁周辺で生活しながら長期的に無理なく続けたい。",
                solution: "月2回からの頻度調整や本番前の重点回を組み合わせ、生活リズムに合わせて継続設計します。"
            }
        ],
        seo: {
            primaryKeyword: "人形町 ピアノ教室",
            secondaryKeywords: [
                "人形町 出張ピアノ",
                "人形町駅 ピアノレッスン",
                "人形町 子供 ピアノ",
                "人形町 大人 ピアノ",
                "人形町 電子ピアノ レッスン"
            ],
            metaDescription: "人形町のピアノ教室なら出張専門の髙橋遊月ピアノ教室。人形町駅周辺へ講師が訪問し、ビジネスパーソンが仕事後でも続けやすい訪問型マンツーマンレッスン。電子ピアノ対応・無料体験レッスン受付中。"
        },
        cta: {
            reassurance: [
                "人形町での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "人形町エリアは月2回から始める大人向け体験相談に対応しています。"
        },
        relatedAreas: ["suitengu-mae", "hamacho", "tsukishima", "monzen-nakacho"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.7850!3d35.6850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["水天宮（近隣）", "リガーレ日本橋人形町", "人形町駅"],
        areaGuide: `人形町でレッスンを続ける鍵は、<strong>仕事終わりの短時間でも成果を出す進行運用を行うこと</strong>です。<br><br>都心居住では移動時間そのものが機会損失になりやすく、訪問型の効果が出やすいという生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "大人の趣味にも最適。月2回から始められる出張ピアノ教室。",
    },
    {
        slug: "suitengu-mae",
        name: "水天宮前",
        groupId: "nihonbashi-group",
        siblingSlugs: ["ningyocho", "hamacho"],
        catchphrase: "プライベート空間で、<br class='md:hidden' />上質なピアノレッスンを",
        lead: "水天宮前エリアにお住まいの方へ、ご自宅でリラックスしながらピアノを楽しめる出張レッスンをお届けします。",
        mainImage: "/images/areas/suitengu-mae.webp",
        mainImageAlt: "水天宮前エリアでのピアノレッスン風景",
        keywords: ["水天宮前 ピアノ教室", "水天宮前 ピアノレッスン", "水天宮前 出張レッスン", "水天宮前 ピアノ 大人", "出張ピアノ教室", "大人", "子供", "初心者", "ピアノレッスン"],
        features: [
            {
                title: "初心者の方も安心",
                description: "楽譜が読めなくても大丈夫です。大人になってからピアノを始める方にも、分かりやすく丁寧にお伝えいたします。",
            },
            {
                title: "弾きたい曲でレッスン",
                description: "クラシックに限らず、映画音楽やポップスなど、お好きな曲でレッスンできます。",
            },
        ],
        faqs: [
            {
                question: "水天宮前駅周辺の集合住宅でも訪問レッスンは可能ですか？",
                answer: "はい、水天宮前駅周辺を含む水天宮前エリアで訪問対応しています。建物規約に合わせた音量・時間帯で進行します。"
            },
            {
                question: "水天宮前で仕事終わりに受けられる時間帯はありますか？",
                answer: "平日夕方〜夜の枠もご相談可能です。帰宅時間に合わせて無理のない固定枠をご提案します。"
            },
            {
                question: "日本橋箱崎町・蛎殻町周辺でも月2回ペースで受講できますか？",
                answer: "可能です。月2回・隔週・本番前集中など、目的に応じて頻度を調整できます。"
            },
            {
                question: "水天宮前で大人初心者が譜読みから始めても大丈夫ですか？",
                answer: "もちろん大丈夫です。譜読み・指づかい・リズムを分解し、段階的に習得できるよう進めます。"
            },
            {
                question: "水天宮前の体験レッスンで目標曲の相談はできますか？",
                answer: "はい。弾きたい曲や到達時期を伺い、練習ステップと想定期間を具体的にご案内します。"
            },
            {
                question: "水天宮前で親子や家族の同日レッスンは可能ですか？",
                answer: "可能です。連続受講で時間効率を高める運用にも対応しています。"
            }
        ],
        uniqueContent: `水天宮前でピアノ教室を検討する方には、中央区の町丁別集計（2023年1月）で日本橋蛎殻町・箱崎町の合算人口は9,178人という地域データがあります。<br><br>水天宮前駅周辺はオフィス就業者が多く、平日夜の移動削減ニーズが強いため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>移動を減らして限られた時間で趣味を継続したい方を中心に、親の移動負担を抑えて子どもの習い事を続けたいご家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "水天宮前エリアにお住まいの方へ、ご自宅で完結する出張ピアノレッスンをお届けしています。大人の方の趣味の再開から、お子様の初めてのレッスンまで、それぞれのペースに合わせて丁寧にサポートいたします。移動時間を気にせず、プライベートな空間で質の高い指導を受けられます。",
        personas: {
            primary: {
                label: "時間制約の強い社会人",
                summary: "移動を減らして限られた時間で趣味を継続したい方。",
                painPoints: [
                    "仕事後に教室へ移動する体力を確保しにくい",
                    "不規則勤務で固定曜日が組みにくい",
                    "ブランク再開の心理的ハードルが高い"
                ],
                fitPoints: [
                    "自宅訪問で移動負担なく開始できる",
                    "月2回など柔軟な頻度設計に対応できる",
                    "目標曲ベースで達成感を作り直せる"
                ]
            },
            secondary: {
                label: "送迎負担軽減家庭",
                summary: "親の移動負担を抑えて子どもの習い事を続けたいご家庭。",
                painPoints: [
                    "保育園・学校後の移動で帰宅後の時間が圧迫される",
                    "雨天や暑寒で通室そのものが負担になる",
                    "送迎中は保護者の家事や仕事が止まりやすい"
                ],
                fitPoints: [
                    "講師がご自宅へ訪問するため送迎が不要",
                    "天候に左右されにくく生活リズムを守りやすい",
                    "兄弟連続受講や夕方枠の調整がしやすい"
                ]
            }
        },
        localityHighlights: [
            "中央区の町丁別集計（2023年1月）で日本橋蛎殻町・箱崎町の合算人口は9,178人。",
            "水天宮前駅周辺はオフィス就業者が多く、平日夜の移動削減ニーズが強い。",
            "幹線道路沿いの移動混雑を避けられる訪問型レッスンが時間効率を高める。"
        ],
        needSolutions: [
            {
                need: "水天宮前で仕事や学業の後に教室へ移動する時間を取りにくい。",
                solution: "講師がご自宅へ伺うため移動ゼロで開始でき、帰宅後の短時間でも受講しやすくなります。"
            },
            {
                need: "限られた練習時間で何を優先すべきか判断しづらい。",
                solution: "毎回の目標を3点以内に絞って共有し、短時間でも成果が出る練習順を明確にします。"
            },
            {
                need: "日本橋箱崎町・蛎殻町周辺で生活しながら長期的に無理なく続けたい。",
                solution: "月2回からの頻度調整や本番前の重点回を組み合わせ、生活リズムに合わせて継続設計します。"
            }
        ],
        seo: {
            primaryKeyword: "水天宮前 ピアノ教室",
            secondaryKeywords: [
                "水天宮前 出張ピアノ",
                "水天宮前駅 ピアノレッスン",
                "水天宮前 子供 ピアノ",
                "水天宮前 大人 ピアノ",
                "水天宮前 電子ピアノ レッスン"
            ],
            metaDescription: "水天宮前のピアノ教室なら出張専門の髙橋遊月ピアノ教室。水天宮前駅周辺へ講師が訪問し、時間制約が強い社会人でも続けやすい送迎不要の出張ピアノ教室。電子ピアノ対応・無料体験レッスン受付中。"
        },
        cta: {
            reassurance: [
                "水天宮前での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "水天宮前エリアの体験枠は平日夜・休日午後を中心にご案内しています。"
        },
        relatedAreas: ["ningyocho", "hamacho", "tsukishima"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.7860!3d35.6830!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["水天宮", "水天宮前駅", "ロイヤルパークホテル"],
        areaGuide: `水天宮前でレッスンを続ける鍵は、<strong>移動をなくし可処分時間を練習に充てる設計運用を行うこと</strong>です。<br><br>幹線道路沿いの移動混雑を避けられる訪問型レッスンが時間効率を高めるという生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "水天宮前駅周辺対応。大人の趣味にも最適な出張ピアノ教室。",
    },
    {
        slug: "hamacho",
        name: "浜町",
        groupId: "nihonbashi-group",
        siblingSlugs: ["ningyocho", "suitengu-mae"],
        catchphrase: "ご自宅で始める、<br class='md:hidden' />大人のピアノレッスン",
        lead: "浜町エリアにお住まいの方へ、送迎不要の出張ピアノレッスンをお届けしています。",
        mainImage: "/images/areas/hamacho.webp",
        mainImageAlt: "浜町エリアでのピアノレッスン風景",
        keywords: ["浜町 ピアノ教室", "浜町 ピアノレッスン", "浜町 習い事", "浜町 出張レッスン", "日本橋浜町 ピアノ", "出張ピアノ教室", "大人", "子供", "初心者", "ピアノレッスン"],
        features: [
            {
                title: "弾きたい曲でレッスン",
                description: "クラシックに限らず、映画音楽やポップスなど、お好きな曲でレッスンできます。憧れの一曲に挑戦してみませんか。",
            },
            {
                title: "初心者の方も安心",
                description: "楽譜が読めなくても大丈夫です。大人になってからピアノを始める方にも、分かりやすく丁寧にお伝えいたします。",
            },
        ],
        faqs: [
            {
                question: "浜町駅周辺の都市型マンションでも訪問レッスンは可能ですか？",
                answer: "はい、浜町駅周辺を含む浜町エリアで訪問対応しています。建物規約に合わせた音量・時間帯で進行します。"
            },
            {
                question: "浜町で仕事終わりに受けられる時間帯はありますか？",
                answer: "平日夕方〜夜の枠もご相談可能です。帰宅時間に合わせて無理のない固定枠をご提案します。"
            },
            {
                question: "浜町公園周辺でも月2回ペースで受講できますか？",
                answer: "可能です。月2回・隔週・本番前集中など、目的に応じて頻度を調整できます。"
            },
            {
                question: "浜町で大人初心者が譜読みから始めても大丈夫ですか？",
                answer: "もちろん大丈夫です。譜読み・指づかい・リズムを分解し、段階的に習得できるよう進めます。"
            },
            {
                question: "浜町の体験レッスンで目標曲の相談はできますか？",
                answer: "はい。弾きたい曲や到達時期を伺い、練習ステップと想定期間を具体的にご案内します。"
            },
            {
                question: "浜町で親子や家族の同日レッスンは可能ですか？",
                answer: "可能です。連続受講で時間効率を高める運用にも対応しています。"
            }
        ],
        uniqueContent: `浜町でピアノ教室を検討する方には、中央区の町丁別集計（2023年1月）で日本橋浜町の人口は12,187人という地域データがあります。<br><br>浜町公園周辺は居住と就業が近接し、移動時間の最適化が学習継続率に直結するため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>生活リズムを崩さず上質なレッスン時間を持ちたい方を中心に、子どもと大人が同じ講師で長く続けたいご家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "浜町エリアにお住まいの方へ、ご自宅で完結する出張ピアノレッスンをお届けしています。大人の方の趣味としても、お子様の習い事としても、それぞれのペースに合わせた丁寧な指導を行います。東京音楽大学で培った技術を活かし、クラシックからポップスまで幅広く対応いたします。",
        personas: {
            primary: {
                label: "生活品質重視の大人層",
                summary: "生活リズムを崩さず上質なレッスン時間を持ちたい方。",
                painPoints: [
                    "仕事後に教室へ移動する体力を確保しにくい",
                    "不規則勤務で固定曜日が組みにくい",
                    "ブランク再開の心理的ハードルが高い"
                ],
                fitPoints: [
                    "自宅訪問で移動負担なく開始できる",
                    "月2回など柔軟な頻度設計に対応できる",
                    "目標曲ベースで達成感を作り直せる"
                ]
            },
            secondary: {
                label: "親子継続志向層",
                summary: "子どもと大人が同じ講師で長く続けたいご家庭。",
                painPoints: [
                    "短期成果より継続を重視したい",
                    "学年変化で習い事の優先順位が変わる",
                    "先生変更で指導方針がぶれやすい"
                ],
                fitPoints: [
                    "成長段階に合わせて目標を再設計できる",
                    "年間で無理なく続く練習計画を立てやすい",
                    "同一講師が継続伴走し癖を把握できる"
                ]
            }
        },
        localityHighlights: [
            "中央区の町丁別集計（2023年1月）で日本橋浜町の人口は12,187人。",
            "浜町公園周辺は居住と就業が近接し、移動時間の最適化が学習継続率に直結する。",
            "静かな住環境を活かし、夜間でも落ち着いて練習しやすい。"
        ],
        needSolutions: [
            {
                need: "浜町で仕事や学業の後に教室へ移動する時間を取りにくい。",
                solution: "講師がご自宅へ伺うため移動ゼロで開始でき、帰宅後の短時間でも受講しやすくなります。"
            },
            {
                need: "限られた練習時間で何を優先すべきか判断しづらい。",
                solution: "毎回の目標を3点以内に絞って共有し、短時間でも成果が出る練習順を明確にします。"
            },
            {
                need: "浜町公園周辺で生活しながら長期的に無理なく続けたい。",
                solution: "月2回からの頻度調整や本番前の重点回を組み合わせ、生活リズムに合わせて継続設計します。"
            }
        ],
        seo: {
            primaryKeyword: "浜町 ピアノ教室",
            secondaryKeywords: [
                "浜町 出張ピアノ",
                "浜町駅 ピアノレッスン",
                "浜町 子供 ピアノ",
                "浜町 大人 ピアノ",
                "浜町 電子ピアノ レッスン"
            ],
            metaDescription: "浜町のピアノ教室なら出張専門の髙橋遊月ピアノ教室。浜町駅周辺へ講師が訪問し、生活品質を保ちながら続けられる訪問型ピアノレッスン。電子ピアノ対応・無料体験レッスン受付中。ご家庭ごとの生活導線に合わせて曜日を調整できます。"
        },
        cta: {
            reassurance: [
                "浜町での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "浜町エリアでは親子同日受講のご相談も受け付けています。"
        },
        relatedAreas: ["ningyocho", "suitengu-mae", "morishita"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.7870!3d35.6870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["浜町公園", "トルナーレ日本橋浜町", "浜町駅"],
        areaGuide: `浜町でレッスンを続ける鍵は、<strong>生活導線を崩さない上質な継続設計運用を行うこと</strong>です。<br><br>静かな住環境を活かし、夜間でも落ち着いて練習しやすいという生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "日本橋浜町対応。月2回から始められる出張ピアノ教室。",
    },

    // ========================================
    // 森下・住吉・菊川グループ
    // ========================================
    {
        slug: "morishita",
        name: "森下",
        groupId: "morishita-group",
        siblingSlugs: ["sumiyoshi", "kikukawa"],
        catchphrase: "日常に溶け込む、<br class='md:hidden' />心地よいピアノの響き",
        lead: "移動時間ゼロの出張レッスンなら、夕方の貴重な時間を有効に使いながら、お子様の成長を見守れます。",
        mainImage: "/images/areas/morishita.webp",
        mainImageAlt: "森下エリアのアットホームな子供のピアノレッスン",
        keywords: ["森下 ピアノ教室", "森下 ピアノ 子供", "森下 出張レッスン", "森下 ピアノレッスン", "出張ピアノ教室", "子供", "初心者", "習い事", "ピアノレッスン"],
        features: [
            {
                title: "18時以降のレッスンも対応",
                description: "保育園のお迎え後でも間に合う時間帯にレッスンを設定いただけます。夕食前に終わるスケジュールもご相談いただけます。",
            },
            {
                title: "0歳からの音楽体験",
                description: "小さなお子様にはリズム遊びや歌から始めてまいります。早いうちから音楽に触れることで、豊かな感性を育んでいただけます。",
            },
        ],
        faqs: [
            {
                question: "森下駅周辺の子育て世帯マンションでも訪問レッスンは可能ですか？",
                answer: "はい、森下駅周辺を含む森下エリア全域に対応しています。共用部ルールに配慮して進行します。"
            },
            {
                question: "森下で電子ピアノから始めても上達できますか？",
                answer: "可能です。タッチ・姿勢・読譜の基礎を段階的に整え、必要に応じて機種選びもサポートします。"
            },
            {
                question: "森下駅周辺に住んでいます。平日夕方の枠はありますか？",
                answer: "平日夕方〜夜のご相談が可能です。保育園・学童・塾の時間に合わせて調整します。"
            },
            {
                question: "森下で塾や部活と両立する場合、頻度はどう決めますか？",
                answer: "学期中と長期休みで頻度を分けるなど、生活リズムに合わせた運用をご提案します。"
            },
            {
                question: "森下の体験で練習環境や楽器の相談もできますか？",
                answer: "はい。設置場所、音量、練習時間、機材の優先順位まで具体的にご案内します。"
            },
            {
                question: "森下で兄弟・姉妹の連続レッスンは可能ですか？",
                answer: "可能です。連続受講で移動や待機の負担を減らし、家族の予定に合わせて進行できます。"
            }
        ],
        uniqueContent: `森下でピアノ教室を検討する方には、江東区公開統計（2026年2月）で森下の人口は11,156人、65歳以上比率は19.6％という地域データがあります。<br><br>森下駅周辺は子育て世帯と単身就業層が混在し、夕方以降の需要が高いため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>お迎え後の短時間で効率よく習い事を進めたいご家庭を中心に、仕事と家庭の合間に無理なく再開したい大人の方にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "共働きなどでご多忙なご家庭が多い森下エリア。送迎不要の出張レッスンなら、夕食前や保育園・学校の後の時間を有効活用できます。慣れ親しんだご自宅だからこそ、お子様はリラックスして楽しみながら上達できます。一人ひとりの成長に合わせたきめ細やかな指導を行います。",
        personas: {
            primary: {
                label: "夕方枠重視の共働き家庭",
                summary: "お迎え後の短時間で効率よく習い事を進めたいご家庭。",
                painPoints: [
                    "保育園・学校後の移動で帰宅後の時間が圧迫される",
                    "雨天や暑寒で通室そのものが負担になる",
                    "送迎中は保護者の家事や仕事が止まりやすい"
                ],
                fitPoints: [
                    "講師がご自宅へ訪問するため送迎が不要",
                    "天候に左右されにくく生活リズムを守りやすい",
                    "兄弟連続受講や夕方枠の調整がしやすい"
                ]
            },
            secondary: {
                label: "大人趣味層",
                summary: "仕事と家庭の合間に無理なく再開したい大人の方。",
                painPoints: [
                    "仕事後に教室へ移動する体力を確保しにくい",
                    "不規則勤務で固定曜日が組みにくい",
                    "ブランク再開の心理的ハードルが高い"
                ],
                fitPoints: [
                    "自宅訪問で移動負担なく開始できる",
                    "月2回など柔軟な頻度設計に対応できる",
                    "目標曲ベースで達成感を作り直せる"
                ]
            }
        },
        localityHighlights: [
            "江東区公開統計（2026年2月）で森下の人口は11,156人、65歳以上比率は19.6％。",
            "森下駅周辺は子育て世帯と単身就業層が混在し、夕方以降の需要が高い。",
            "都営線沿線で帰宅時間帯が集中しやすく、送迎不要の形式が継続率を押し上げる。"
        ],
        needSolutions: [
            {
                need: "森下で送迎と家事・仕事が重なり、習い事の継続負担が大きい。",
                solution: "ご自宅訪問で送迎をなくし、帰宅後すぐに始められる時間帯をご家庭ごとに設計します。"
            },
            {
                need: "子育て世帯マンションで電子ピアノ中心だと上達できるか不安。",
                solution: "鍵盤タッチ・読譜・表現を電子ピアノ環境に合わせて段階指導し、必要機材も具体的に提案します。"
            },
            {
                need: "塾・部活・兄弟予定と重なり、固定枠を作りにくい。",
                solution: "連続受講や隔週運用を組み合わせ、学校行事の多い月でも続けやすい計画を作ります。"
            }
        ],
        seo: {
            primaryKeyword: "森下 ピアノ教室",
            secondaryKeywords: [
                "森下 出張ピアノ",
                "森下駅 ピアノレッスン",
                "森下 子供 ピアノ",
                "森下 大人 ピアノ",
                "森下 電子ピアノ レッスン"
            ],
            metaDescription: "森下のピアノ教室なら出張専門の髙橋遊月ピアノ教室。森下駅周辺へ講師が訪問し、共働き家庭の夕方枠に合わせやすい出張専門ピアノレッスン。電子ピアノ対応・無料体験レッスン受付中。ご家庭ごとの生活導線に合わせて曜日を調整できます。"
        },
        cta: {
            reassurance: [
                "森下での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "森下エリアは18時以降の体験希望にも柔軟に対応しています。"
        },
        relatedAreas: ["sumiyoshi", "kikukawa", "kiyosumi-shirakawa", "monzen-nakacho"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.7970!3d35.6880!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["森下文化センター", "森下駅"],
        areaGuide: `森下でレッスンを続ける鍵は、<strong>お迎え後の時間を無駄にしない枠設計運用を行うこと</strong>です。<br><br>都営線沿線で帰宅時間帯が集中しやすく、送迎不要の形式が継続率を押し上げるという生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "18時以降も対応。共働き家庭に選ばれる出張ピアノ教室。",
    },
    {
        slug: "sumiyoshi",
        name: "住吉",
        groupId: "morishita-group",
        siblingSlugs: ["morishita", "kikukawa"],
        catchphrase: "お子様の成長を、<br class='md:hidden' />いつもの場所で見守れます",
        lead: "住吉エリアにお住まいの方へ、講師がご自宅まで伺う出張ピアノレッスンをお届けしています。",
        mainImage: "/images/areas/sumiyoshi.webp",
        mainImageAlt: "住吉エリアの子供のピアノレッスン風景",
        keywords: ["住吉 ピアノ教室", "住吉 ピアノ 子供", "住吉 ピアノレッスン", "住吉 出張レッスン", "出張ピアノ教室", "子供", "初心者", "習い事", "ピアノレッスン"],
        features: [
            {
                title: "18時以降のレッスンも対応",
                description: "保育園のお迎え後でも間に合う時間帯にレッスンを設定いただけます。",
            },
            {
                title: "0歳からの音楽体験",
                description: "小さなお子様にはリズム遊びや歌から始めてまいります。音楽に触れる第一歩をお手伝いします。",
            },
        ],
        faqs: [
            {
                question: "住吉駅周辺の住宅エリアでも訪問レッスンは可能ですか？",
                answer: "はい、住吉駅周辺を含む住吉エリア全域に対応しています。共用部ルールに配慮して進行します。"
            },
            {
                question: "住吉で電子ピアノから始めても上達できますか？",
                answer: "可能です。タッチ・姿勢・読譜の基礎を段階的に整え、必要に応じて機種選びもサポートします。"
            },
            {
                question: "猿江・住吉駅周辺に住んでいます。平日夕方の枠はありますか？",
                answer: "平日夕方〜夜のご相談が可能です。保育園・学童・塾の時間に合わせて調整します。"
            },
            {
                question: "住吉で塾や部活と両立する場合、頻度はどう決めますか？",
                answer: "学期中と長期休みで頻度を分けるなど、生活リズムに合わせた運用をご提案します。"
            },
            {
                question: "住吉の体験で練習環境や楽器の相談もできますか？",
                answer: "はい。設置場所、音量、練習時間、機材の優先順位まで具体的にご案内します。"
            },
            {
                question: "住吉で兄弟・姉妹の連続レッスンは可能ですか？",
                answer: "可能です。連続受講で移動や待機の負担を減らし、家族の予定に合わせて進行できます。"
            }
        ],
        uniqueContent: `住吉でピアノ教室を検討する方には、江東区公開統計（2026年2月）で住吉の人口は5,165人、65歳以上比率は21.9％という地域データがあります。<br><br>住吉駅・猿江エリアは住宅比率が高く、家庭内で完結する習い事需要が安定しているため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>移動時間を減らして家庭時間を確保したいご家庭を中心に、外出負担を抑えながらピアノを再開したい方にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "住吉エリアにお住まいの方へ、送迎不要の出張ピアノレッスンをお届けしています。夕方以降の時間帯にも対応し、共働きのご家庭でも無理なくレッスンを続けていただけます。一人ひとりの成長に合わせた丁寧な指導を心がけています。",
        personas: {
            primary: {
                label: "送迎負担を減らしたい家庭",
                summary: "移動時間を減らして家庭時間を確保したいご家庭。",
                painPoints: [
                    "保育園・学校後の移動で帰宅後の時間が圧迫される",
                    "雨天や暑寒で通室そのものが負担になる",
                    "送迎中は保護者の家事や仕事が止まりやすい"
                ],
                fitPoints: [
                    "講師がご自宅へ訪問するため送迎が不要",
                    "天候に左右されにくく生活リズムを守りやすい",
                    "兄弟連続受講や夕方枠の調整がしやすい"
                ]
            },
            secondary: {
                label: "再開・シニア層",
                summary: "外出負担を抑えながらピアノを再開したい方。",
                painPoints: [
                    "指の動きや体力への不安がある",
                    "若い頃の癖を直せるか不安がある",
                    "外出頻度を増やしにくい"
                ],
                fitPoints: [
                    "無理のないテンポ設定で負担を抑えられる",
                    "フォーム改善を段階的に実施できる",
                    "自宅受講で移動の不安を減らせる"
                ]
            }
        },
        localityHighlights: [
            "江東区公開統計（2026年2月）で住吉の人口は5,165人、65歳以上比率は21.9％。",
            "住吉駅・猿江エリアは住宅比率が高く、家庭内で完結する習い事需要が安定している。",
            "半蔵門線・新宿線利用で帰宅時間が読みづらく、訪問型の柔軟さが有効。"
        ],
        needSolutions: [
            {
                need: "住吉で送迎と家事・仕事が重なり、習い事の継続負担が大きい。",
                solution: "ご自宅訪問で送迎をなくし、帰宅後すぐに始められる時間帯をご家庭ごとに設計します。"
            },
            {
                need: "住宅エリアで電子ピアノ中心だと上達できるか不安。",
                solution: "鍵盤タッチ・読譜・表現を電子ピアノ環境に合わせて段階指導し、必要機材も具体的に提案します。"
            },
            {
                need: "塾・部活・兄弟予定と重なり、固定枠を作りにくい。",
                solution: "連続受講や隔週運用を組み合わせ、学校行事の多い月でも続けやすい計画を作ります。"
            }
        ],
        seo: {
            primaryKeyword: "住吉 ピアノ教室",
            secondaryKeywords: [
                "住吉 出張ピアノ",
                "住吉駅 ピアノレッスン",
                "住吉 子供 ピアノ",
                "住吉 大人 ピアノ",
                "住吉 電子ピアノ レッスン"
            ],
            metaDescription: "住吉のピアノ教室なら出張専門の髙橋遊月ピアノ教室。住吉駅周辺へ講師が訪問し、送迎負担を減らし再開層にも対応できる訪問型マンツーマンレッスン。電子ピアノ対応・無料体験レッスン受付中。"
        },
        cta: {
            reassurance: [
                "住吉での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "住吉エリアはご家庭の予定に合わせた曜日提案を体験時に行います。"
        },
        relatedAreas: ["morishita", "kikukawa", "kiyosumi-shirakawa"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.8120!3d35.6860!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["猿江恩賜公園", "住吉駅"],
        areaGuide: `住吉でレッスンを続ける鍵は、<strong>家庭優先でも継続しやすい柔軟運用運用を行うこと</strong>です。<br><br>半蔵門線・新宿線利用で帰宅時間が読みづらく、訪問型の柔軟さが有効という生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "住吉駅・猿江エリア対応。送迎不要の出張ピアノ教室。",
    },
    {
        slug: "kikukawa",
        name: "菊川",
        groupId: "morishita-group",
        siblingSlugs: ["morishita", "sumiyoshi"],
        catchphrase: "送迎不要。<br class='md:hidden' />ご自宅で安心のピアノレッスン",
        lead: "菊川エリアにお住まいの方へ、講師がご自宅まで伺う出張ピアノレッスンをお届けしています。",
        mainImage: "/images/areas/kikukawa.webp",
        mainImageAlt: "菊川エリアの子供のピアノレッスン風景",
        keywords: ["菊川 ピアノ教室", "菊川 ピアノ 子供", "菊川 習い事", "菊川 出張レッスン", "出張ピアノ教室", "子供", "初心者", "ピアノレッスン"],
        features: [
            {
                title: "18時以降のレッスンも対応",
                description: "保育園のお迎え後でも間に合う時間帯にレッスンを設定いただけます。",
            },
            {
                title: "0歳からの音楽体験",
                description: "小さなお子様にはリズム遊びや歌から始めてまいります。豊かな感性を育みます。",
            },
        ],
        faqs: [
            {
                question: "菊川駅周辺の都心居住マンションでも訪問レッスンは可能ですか？",
                answer: "はい、菊川駅周辺を含む菊川エリアで訪問対応しています。建物規約に合わせた音量・時間帯で進行します。"
            },
            {
                question: "菊川で仕事終わりに受けられる時間帯はありますか？",
                answer: "平日夕方〜夜の枠もご相談可能です。帰宅時間に合わせて無理のない固定枠をご提案します。"
            },
            {
                question: "菊川一〜三丁目でも月2回ペースで受講できますか？",
                answer: "可能です。月2回・隔週・本番前集中など、目的に応じて頻度を調整できます。"
            },
            {
                question: "菊川で大人初心者が譜読みから始めても大丈夫ですか？",
                answer: "もちろん大丈夫です。譜読み・指づかい・リズムを分解し、段階的に習得できるよう進めます。"
            },
            {
                question: "菊川の体験レッスンで目標曲の相談はできますか？",
                answer: "はい。弾きたい曲や到達時期を伺い、練習ステップと想定期間を具体的にご案内します。"
            },
            {
                question: "菊川で親子や家族の同日レッスンは可能ですか？",
                answer: "可能です。連続受講で時間効率を高める運用にも対応しています。"
            }
        ],
        uniqueContent: `菊川でピアノ教室を検討する方には、墨田区公開統計（2026年1月）で菊川一〜三丁目の人口は8,514人、15〜64歳比率は75.3％という地域データがあります。<br><br>菊川駅周辺は就業層比率が高く、平日夜・短時間レッスン需要が目立つため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>短時間で成果を出しながら継続したい学業・就業層を中心に、通室せず平日夕方に子どものレッスンを回したいご家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "菊川エリアにお住まいの方へ、送迎不要の出張ピアノレッスンをお届けしています。夕方以降の時間帯にも対応し、共働きのご家庭でも無理なくレッスンを続けていただけます。お子様一人ひとりの成長に寄り添った丁寧な指導を行います。",
        personas: {
            primary: {
                label: "働く大人・中高生",
                summary: "短時間で成果を出しながら継続したい学業・就業層。",
                painPoints: [
                    "部活や仕事で帰宅時間が読みづらい",
                    "練習時間が短く優先順位が決めにくい",
                    "本番前に要点だけ見直したい"
                ],
                fitPoints: [
                    "短時間高密度メニューを個別に設計できる",
                    "復習しやすい課題メモを毎回共有できる",
                    "本番前の重点添削に柔軟対応できる"
                ]
            },
            secondary: {
                label: "共働き家庭",
                summary: "通室せず平日夕方に子どものレッスンを回したいご家庭。",
                painPoints: [
                    "保育園・学校後の移動で帰宅後の時間が圧迫される",
                    "雨天や暑寒で通室そのものが負担になる",
                    "送迎中は保護者の家事や仕事が止まりやすい"
                ],
                fitPoints: [
                    "講師がご自宅へ訪問するため送迎が不要",
                    "天候に左右されにくく生活リズムを守りやすい",
                    "兄弟連続受講や夕方枠の調整がしやすい"
                ]
            }
        },
        localityHighlights: [
            "墨田区公開統計（2026年1月）で菊川一〜三丁目の人口は8,514人、15〜64歳比率は75.3％。",
            "菊川駅周辺は就業層比率が高く、平日夜・短時間レッスン需要が目立つ。",
            "都心近接で移動先が多いため、訪問型で移動を固定しない設計が継続に有利。"
        ],
        needSolutions: [
            {
                need: "菊川で仕事や学業の後に教室へ移動する時間を取りにくい。",
                solution: "講師がご自宅へ伺うため移動ゼロで開始でき、帰宅後の短時間でも受講しやすくなります。"
            },
            {
                need: "限られた練習時間で何を優先すべきか判断しづらい。",
                solution: "毎回の目標を3点以内に絞って共有し、短時間でも成果が出る練習順を明確にします。"
            },
            {
                need: "菊川一〜三丁目で生活しながら長期的に無理なく続けたい。",
                solution: "月2回からの頻度調整や本番前の重点回を組み合わせ、生活リズムに合わせて継続設計します。"
            }
        ],
        seo: {
            primaryKeyword: "菊川 ピアノ教室",
            secondaryKeywords: [
                "菊川 出張ピアノ",
                "菊川駅 ピアノレッスン",
                "菊川 子供 ピアノ",
                "菊川 大人 ピアノ",
                "菊川 電子ピアノ レッスン"
            ],
            metaDescription: "菊川のピアノ教室なら出張専門の髙橋遊月ピアノ教室。菊川駅周辺へ講師が訪問し、働く大人や中高生が短時間で続けやすい出張ピアノレッスン。電子ピアノ対応・無料体験レッスン受付中。ご家庭ごとの生活導線に合わせて曜日を調整できます。"
        },
        cta: {
            reassurance: [
                "菊川での訪問可否を事前に確認できます",
                "電子ピアノ・アコースティックの両方で体験可能です",
                "曜日・時間帯はご家庭の予定に合わせて調整できます"
            ],
            subcopy: "菊川エリアは平日夜の短時間体験にも対応可能です。"
        },
        relatedAreas: ["morishita", "sumiyoshi", "kiyosumi-shirakawa"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.8060!3d35.6890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["ティアラこうとう（近隣）", "菊川駅"],
        areaGuide: `菊川でレッスンを続ける鍵は、<strong>短時間高密度で上達を可視化する設計運用を行うこと</strong>です。<br><br>都心近接で移動先が多いため、訪問型で移動を固定しない設計が継続に有利という生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
        lessonFlow: defaultLessonFlow,
        metaSnippet: "菊川駅周辺対応。18時以降も対応の出張ピアノ教室。",
    },
];
