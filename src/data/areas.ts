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
                need: `<span class="block text-xl mb-2 font-bold">タワマン子育て世帯の「送迎」の悩み</span>
                       <span class="block text-sm mb-4 opacity-80">忙しい夕方の時間を、もっと有効に使いたい</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>教室への移動で、帰宅後の貴重な時間が削られる</li>
                           <li>雨の日や猛暑・極寒の中での送り迎えが大きな負担</li>
                           <li>送迎の間、保護者の家事や仕事が中断してしまう</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>送迎時間は「0分」：講師が自宅に伺うので、玄関を開ければレッスン開始です。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>天候に左右されない：外に出る必要がないため、天気を気にせず生活リズムを維持できます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>夕方の時間を有効活用：お子様のレッスン中、保護者様は家事や在宅ワークに集中できます。</span></li>
                           </ul>`
            },
            {
                need: `<span class="block text-xl mb-2 font-bold">受験勉強とピアノを両立させたい</span>
                       <span class="block text-sm mb-4 opacity-80">限られた時間の中で、質の高い学びを</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>塾や宿題が忙しく、平日にまとまった時間が取れない</li>
                           <li>移動によるタイムロスが、勉強のペースを乱してしまう</li>
                           <li>短い時間でも着実に上達できる、効率的な練習法を知りたい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>30〜40分の集中メニュー：短時間で成果を出す、受験生専用のカリキュラムを作成します。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>スムーズな切り替え：自宅レッスンなら、勉強からピアノへ即座にモードを切り替えられます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>柔軟なスケジュール管理：試験期間や講習の予定に合わせ、振替などの相談も承ります。</span></li>
                           </ul>`
            },
            {
                need: `<span class="block text-xl mb-2 font-bold">マンション・電子ピアノでの上達</span>
                       <span class="block text-sm mb-4 opacity-80">住環境に合わせた「正しい練習」への不安を解消</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>電子ピアノ中心の環境で、変な癖がつかないか心配</li>
                           <li>マンションでの音漏れや、集合住宅ならではのルールが不安</li>
                           <li>自分の持っている機材で、どこまで上達できるか分からない</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>電子ピアノ特化の指導：タッチや表現を電子ピアノ環境に合わせて最適化する専門指導を行います。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>機材・環境のアドバイス：上達に必要な機材の提案や、騒音に配慮した練習法を具体的に伝授します。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>個別カウンセリング：ご自宅の練習環境を拝見し、最適な練習スタイルを一緒に作り上げます。</span></li>
                           </ul>`
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
        uniqueContent: `有明ガーデン周辺は新規入居の子育て世帯が多く、習い事の立ち上げ相談が集中しやすいため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>初めての習い事を移動負担なく始めたい子育て世帯を中心に、兄弟で効率よくレッスン時間をまとめたいご家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "ISSUE 01",
                need: `<span class="block text-xl mb-2 font-bold">有明での「仕事・家事・送迎」の両立</span>
                       <span class="block text-sm mb-4 opacity-80">多忙な有明ライフスタイルを支える<br>仕事も家事も妥協したくない保護者様へ</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>湾岸エリアの移動や送迎で、仕事後の貴重な時間が奪われる</li>
                           <li>雨の日や海風の強い日の通室が、親子ともに大きな負担</li>
                           <li>習い事の待ち時間で、夕飯の支度や家事がストップしてしまう</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>移動コストをゼロに：講師がご自宅へ伺うため、送迎の必要は一切ありません。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>生活リズムの安定：天候に左右されず、帰宅後すぐにレッスンを始められる設計をご提案します。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>「保護者の自由時間」を創出：お子様がレッスンを受けている間、家事や在宅ワークに集中できます。</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 02",
                need: `<span class="block text-xl mb-2 font-bold">兄弟受講・多忙なスケジュールの最適化</span>
                       <span class="block text-sm mb-4 opacity-80">塾・兄弟予定・部活とのスマートな両立<br>「枠」に縛られない、効率的な学びの形</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>兄弟で別々の教室に通うと、送迎や待機時間が倍増する</li>
                           <li>中学受験の塾や部活が忙しく、固定のレッスン枠が作りにくい</li>
                           <li>下のお子様の預け先調整など、家族全体の予定調整が複雑</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟連続レッスン：移動を一本化し、同じ場所で安全に受講できる環境を整えます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>柔軟なスケジュール設計：隔週運用や時間配分の調整など、学校行事や塾に合わせた計画を作ります。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>有明に合わせた時間枠：ご家庭の予定を優先し、夕方の忙しい時間帯も効率的に活用できます。</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 03",
                need: `<span class="block text-xl mb-2 font-bold">マンション環境での「確かな上達」</span>
                       <span class="block text-sm mb-4 opacity-80">新築マンション×電子ピアノの練習不安<br>住環境を活かした、質の高い練習メソッド</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>電子ピアノ中心の環境で、演奏技術や表現力が身につくか不安</li>
                           <li>集合住宅での騒音トラブルや、防音対策にどこまで配慮すべきか</li>
                           <li>本物のピアノとのタッチの差が、上達の妨げにならないか心配</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>電子ピアノ専用指導：タッチや読譜をマンション環境に最適化させた、段階的な指導を行います。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>機材導入のプロ視点：最新の電子ピアノ選びや、必要な周辺機材を具体的にアドバイスします。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>環境に合わせた練習法：音量に配慮しつつ、しっかりと上達を実感できる「有明マンション仕様」の練習法を伝授します。</span></li>
                           </ul>`
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
        uniqueContent: `東雲キャナルコート周辺は集合住宅が多く、電子ピアノ運用の相談が多いため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>帰宅後の限られた時間でレッスンを継続したいご家庭を中心に、塾・学校・習い事を同時に回すため移動を最小化したいご家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "ISSUE 01",
                need: `<span class="block text-xl font-bold mb-3">帰宅後の時間を豊かな学びに</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>学校後の移動で帰宅後の時間が圧迫される</li>
                           <li>送迎で保護者の家事・仕事が中断する</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅訪問で移動ゼロ、玄関を開けば即レッスン開始</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>天候不問でいつもの生活リズムを維持できる</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 02",
                need: `<span class="block text-xl font-bold mb-3">可処分時間を最大化する練習設計</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>塾や宿題で平日の自由時間が限られる</li>
                           <li>短時間でしっかり上達を実感したい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>30〜40分の高効率メニューで短時間集中学習</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>塾予定に合わせた連続受講や柔軟な振替対応</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 03",
                need: `<span class="block text-xl font-bold mb-3">マンション・電子ピアノでの演奏不安</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>電子ピアノ中心で演奏技術に偏りが出ないか</li>
                           <li>音漏れ・最適な機材選びの対策が分からない</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>電子ピアノ専用の段階的タッチ・表現指導</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>ご自宅環境に合わせた機材提案と騒音配慮の練習法</span></li>
                           </ul>`
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
        uniqueContent: `月島駅・佃エリアは高層住宅が集中し、エレベーター移動のみで完結する習い事需要が高いため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>兄弟それぞれの習い事を移動負担なく回したいご家庭を中心に、家事や仕事の合間にピアノを再開したい大人の方にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "ISSUE 01",
                need: `<span class="block text-xl font-bold mb-3">兄弟・家族の移動と待機をゼロに</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>兄弟別々の教室で午後の予定がすべて埋まる</li>
                           <li>下の子の預け先が見つからず習い事を躊躇</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟連続受講で移動一本化、安全な自宅環境で効率学習</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>送迎時間を夕食準備や休息に充てられるゆとり創出</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 02",
                need: `<span class="block text-xl font-bold mb-3">高層住宅・電子ピアノでの確かな成長</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>タワマン電子ピアノで変な癖がつかないか心配</li>
                           <li>階下への音漏れ・近隣配慮をどうすべきか</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>電子ピアノ特性に合わせた鍵盤タッチ・音色表現指導</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>ご自宅環境確認後の機材選び・騒音抑制練習法提案</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 03",
                need: `<span class="block text-xl font-bold mb-3">忙しい日常にピアノを再開する喜び</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>仕事帰りに教室へ通う体力・時間が確保できない</li>
                           <li>不規則勤務で毎週固定枠を維持しにくい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅訪問で移動負担なく仕事後すぐレッスン開始</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>月2回〜の柔軟頻度設計、目標曲ベースで達成感再構築</span></li>
                           </ul>`
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
        uniqueContent: `勝どき駅周辺は高層住宅が連続し、通室よりも訪問型の時間効率が評価されやすいため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>移動コストを減らし平日夜に習い事を定着させたいご家庭を中心に、保育園・学童後の時間帯に固定枠を持ちたいご家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "ISSUE 01",
                need: `<span class="block text-xl font-bold mb-3">共働き世帯の夕方時間を効率化</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>高層住宅の移動で通室の時間効率が悪い</li>
                           <li>保育園・学童後の限られた時間を有効活用したい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>講師訪問で移動ゼロ、帰宅後すぐレッスン開始可能</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>平日夜の固定枠で家族の生活リズムを安定化</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 02",
                need: `<span class="block text-xl font-bold mb-3">マンション環境でしっかり上達</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>電子ピアノ中心で基礎技術が身につくか不安</li>
                           <li>集合住宅での騒音トラブルを避けたい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>タワマン環境に最適化した段階的タッチ・読譜指導</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>機材導入のプロ視点と音量配慮の練習法アドバイス</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 03",
                need: `<span class="block text-xl font-bold mb-3">多忙スケジュールの柔軟な調整</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>塾・兄弟予定が重なり固定枠が作りにくい</li>
                           <li>家族全体の予定調整が複雑になりがち</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟連続・隔週運用など柔軟なスケジュール設計</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>学校行事・塾に合わせた時間配分の調整対応</span></li>
                           </ul>`
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
        uniqueContent: `晴海フラッグ周辺は新築マンションが多く、初回相談で電子ピアノ環境確認が重要ため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>新生活に合わせて無理なく習い事を立ち上げたいご家庭を中心に、楽器経験ゼロから安全に始めたい未就学〜低学年家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "ISSUE 01",
                need: `<span class="block text-xl font-bold mb-3">新生活での習慣定着をスムーズに</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>引越し直後で通える教室の場所が分からない</li>
                           <li>新しい環境で生活リズムが安定しない</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅訪問で場所探し不要、引越し後すぐに開始可能</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>生活リズム確立に合わせて柔軟に時間帯を調整</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 02",
                need: `<span class="block text-xl font-bold mb-3">兄弟・大人の併用受講を効率化</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>兄弟と大人で別々の教室だと時間が足りない</li>
                           <li>家族全員の目標に合わせた指導を受けたい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>同じ場所で連続受講、世代別の目標に合わせた指導</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>移動時間を一本化し家族の予定調整を簡素化</span></li>
                           </ul>`
            },
            {
                label: "ISSUE 03",
                need: `<span class="block text-xl font-bold mb-3">タワマン環境での練習不安を解消</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>電子ピアノで本格的に上達できるか不安</li>
                           <li>新築マンションの音漏れルールが心配</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>電子ピアノ環境に特化したタッチ・表現の段階指導</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>ご自宅環境確認後の機材選びと騒音配慮の練習法</span></li>
                           </ul>`
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
        uniqueContent: `清澄白河駅周辺は文化施設と住宅が近接し、子どもと大人の併用受講ニーズがあるため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>基礎に加えて音楽表現を丁寧に育てたい親子を中心に、仕事や家事の合間に再開し長く続けたい大人の方にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "01",
                need: `<span class="block text-xl font-bold mb-3">お子様の感性と基礎を育む指導</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>基礎練習ばかりで表現意欲が続きにくい</li>
                           <li>基礎技術と弾きたい曲のバランスが難しい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>基礎課題と好きな曲を並行、達成感と技術定着を両立</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>タッチ・読譜・表現を一体化した音楽の楽しさ重視指導</span></li>
                           </ul>`
            },
            {
                label: "02",
                need: `<span class="block text-xl font-bold mb-3">大人の再開を支える柔軟サポート</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>仕事後に教室へ移動する体力がない</li>
                           <li>不規則勤務で毎週固定曜日が組みにくい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅訪問で移動疲れゼロ、リラックス空間で即開始</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>月2回〜の柔軟プラン、目標曲から始める達成感設計</span></li>
                           </ul>`
            },
            {
                label: "03",
                need: `<span class="block text-xl font-bold mb-3">生活リズムに馴染む練習習慣</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>忙しい生活でまとまった練習時間が取れない</li>
                           <li>5〜15分の隙間時間で何を練習すべきか不明</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>5〜15分単位のマイクロ練習メニューで継続習慣化</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>世代別目標を尊重し進捗メモで家庭内音楽習慣を整理</span></li>
                           </ul>`
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
        uniqueContent: `清澄白河駅徒歩圏の住宅街で、通室より自宅完結型の習い事が生活導線に合いやすいため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>落ち着いた自宅環境で集中して学ばせたいご家庭を中心に、通室せずマイペースに再開したい大人の方にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "01",
                need: `<span class="block text-xl font-bold mb-3">自宅集中環境を活かした上達</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>通室の移動時間で集中力が途切れやすい</li>
                           <li>慣れた環境でリラックスして学びたい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅レッスンで移動疲れゼロ、集中力を最大化</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>リラックス空間で音楽と向き合う質の高い時間</span></li>
                           </ul>`
            },
            {
                label: "02",
                need: `<span class="block text-xl font-bold mb-3">好きな曲と基礎の両立</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>基礎ばかりでモチベーションが続かない</li>
                           <li>好きな曲を弾きながら技術も伸ばしたい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>基礎課題と希望曲を同時進行、楽しさと技術を両立</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>毎回の練習ポイントを明確化し自宅練習を効率化</span></li>
                           </ul>`
            },
            {
                label: "03",
                need: `<span class="block text-xl font-bold mb-3">柔軟な頻度設計で無理なく継続</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>仕事・家事で毎週固定が難しい</li>
                           <li>繁忙期と閑散期で頻度を変えたい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>月2回・隔週・本番前集中など目的別頻度調整</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>学期・仕事繁忙期に合わせた柔軟な運用設計</span></li>
                           </ul>`
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
        uniqueContent: `清澄白河駅近接の住宅地で、子どもと大人の併用ニーズが継続的にあるため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>生活の質を上げる趣味としてピアノを続けたい方を中心に、本人の意欲に合わせて段階的に上達したいお子様にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "01",
                need: `<span class="block text-xl font-bold mb-3">表現力を重視した丁寧な指導</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>画一的な教材だと個性が伸びにくい</li>
                           <li>音楽表現を大切にした指導を受けたい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>一人ひとりの感性を引き出すオーダーメイド指導</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>基礎と好きな曲を並行し表現意欲を持続させる</span></li>
                           </ul>`
            },
            {
                label: "02",
                need: `<span class="block text-xl font-bold mb-3">住宅街環境を活かした練習習慣</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>落ち着いた住環境で効率的に練習したい</li>
                           <li>短時間でも質の高い練習方法を知りたい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅環境に最適化した5〜15分単位の練習メニュー</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>毎回の要点共有で次回までの課題を明確化</span></li>
                           </ul>`
            },
            {
                label: "03",
                need: `<span class="block text-xl font-bold mb-3">世代別の目標に合わせた管理</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>子どもと大人で目標が異なり方針が曖昧</li>
                           <li>家族内でどう練習を見守るべきか迷う</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>世代別の個別目標を尊重し進捗を可視化</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>家庭内音楽コミュニケーションを進捗メモで整理</span></li>
                           </ul>`
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
            subcopy: "三好エリアは大人の再開相談とお子様の体験申込の両方に対応しています。"
        },
        relatedAreas: ["kiyosumi-shirakawa", "hirano", "monzen-nakacho"],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483!2d139.8030!3d35.6770!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp",
        landmarks: ["東京都現代美術館（近隣）", "清澄庭園（近隣）"],
        areaGuide: `三好でレッスンを続ける鍵は、<strong>短時間練習でも達成感を積み上げる運用を行うこと</strong>です。<br><br>静かな住環境を活かし、短時間でも集中できるレッスン設計がしやすいという生活条件を前提に、学校・塾・仕事・家事と衝突しにくい曜日と時間帯を体験時に設計します。<br><br>開始後は毎回の練習ポイントを短く共有し、次回までに何を行うかを明確にするため、忙しい週でも上達実感を得やすくなります。`,
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
        uniqueContent: `門前仲町駅周辺は就業層が多く、平日夜に自宅で完結する需要が強いため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>短期成果より継続を重視して基礎を積みたいご家庭を中心に、通室なしで仕事後に趣味を継続したい方にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
        instructorIntroduction: "門前仲町エリアの皆様に、長く愛される音楽のパートナーでありたいと願っています。「憧れの曲を弾けるようになりたい」「基礎からしっかり学びたい」。そんな皆様の想いに、東京音楽大学卒業の確かな技術でお応えします。ご自宅のピアノで学ぶ出張レッスンは、通学の負担がないため、無理なく長く続けられるのが魅力です。",
        personas: {
            primary: {
                label: "長期継続志向家庭",
                summary: "短期的な成果より、長く続く「音楽の力」を基礎から無理なく育みたいご家庭。",
                painPoints: [
                    "進級や中学受験などの変化で、継続が難しくなる不安がある",
                    "先生が変わるたびに指導方針がぶれないか心配",
                    "基礎を固めたいが、本人の意欲が続くか確信が持てない"
                ],
                fitPoints: [
                    "一貫した担任制で、成長段階に合わせた長期的な伴走が可能",
                    "ライフステージに合わせて、練習計画を柔軟に再設計できる",
                    "「基礎×希望曲」の両立で、楽しさと技術定着を両立できる"
                ]
            },
            secondary: {
                label: "多忙な社会人",
                summary: "仕事帰りに移動の負担なく、リラックスしてピアノを再開したい大人の方。",
                painPoints: [
                    "仕事の後に教室へ移動する体力が残っていない",
                    "不規則な勤務や急な予定で、固定の時間を守るのが難しい",
                    "長いブランクがあり、上達できるか心理的な壁を感じている"
                ],
                fitPoints: [
                    "移動負担ゼロの自宅訪問で、即座にレッスンを開始できる",
                    "月2回などの柔軟な回数設計・予約管理に対応できる",
                    "目標曲ベースで「再開の楽しみ」を優先したプランを組める"
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
                label: "01",
                need: `<span class="block text-xl font-bold mb-3">長期継続しやすい習慣づくり</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>通室の負担で長く続けられるか不安</li>
                           <li>生活リズムに無理なく組み込みたい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅訪問で送迎不要、天候や体調に左右されにくい</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>家庭の生活リズムに合わせた無理のない時間設計</span></li>
                           </ul>`
            },
            {
                label: "02",
                need: `<span class="block text-xl font-bold mb-3">好きな曲と基礎の両立</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>基礎ばかりで楽しさが感じられない</li>
                           <li>憧れの曲を弾きながら技術も伸ばしたい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>基礎課題と好きな曲を並行し達成感を積み重ねる</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>楽しさと技術定着を両立する一体型指導</span></li>
                           </ul>`
            },
            {
                label: "03",
                need: `<span class="block text-xl font-bold mb-3">多世代対応の柔軟レッスン</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>子どもと大人・シニアで目標が全く異なる</li>
                           <li>家族みんなで習いたいが別々の教室は大変</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>同じ場所で世代別カリキュラム、連続受講で効率化</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>0歳〜シニアまで目的に合わせたオーダーメイド指導</span></li>
                           </ul>`
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
        uniqueContent: `木場公園周辺はファミリー居住が多く、平日夕方の送迎圧縮ニーズが高いため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>移動負担を減らしつつ基礎を丁寧に学ばせたいご家庭を中心に、好きな曲を入口にモチベーションを維持したいお子様にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "01",
                need: `<span class="block text-xl font-bold mb-3">帰宅後の時間を有効活用</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>学校・保育園後の移動で時間が圧迫される</li>
                           <li>送迎で保護者の家事・仕事が中断する</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>講師訪問で移動ゼロ、帰宅後すぐレッスン開始</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>お子様のレッスン中に家事・在宅ワークに集中可能</span></li>
                           </ul>`
            },
            {
                label: "02",
                need: `<span class="block text-xl font-bold mb-3">基礎と楽しさを両立した指導</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>基礎練習ばかりで飽きてしまう</li>
                           <li>好きな曲を弾きながら上達したい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>基礎課題と希望曲を同時進行、モチベーション維持</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>タッチ・読譜・表現を一体化した楽しい音楽体験</span></li>
                           </ul>`
            },
            {
                label: "03",
                need: `<span class="block text-xl font-bold mb-3">家族併用受講で効率化</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>親子や兄弟で別々の教室は時間が足りない</li>
                           <li>家族みんなの目標に合わせた指導を受けたい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>同じ場所で連続受講、世代別の目標に合わせた指導</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>移動時間を一本化し家族の予定調整を簡素化</span></li>
                           </ul>`
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
        uniqueContent: `越中島駅周辺は学生・社会人・シニアが混在し、時間帯別ニーズの差が大きいため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>学校後の移動を最小化して継続したいご家庭を中心に、外出負担を抑えて音楽を再開したい方にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "01",
                need: `<span class="block text-xl font-bold mb-3">通学・送迎の負担をなくし上達を楽しむ</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>学校後の移動で帰宅後の時間が圧迫される</li>
                           <li>雨や暑さ・寒さの日の通室が親子の負担</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>講師訪問で送迎不要、天候に左右されない安定継続</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>帰宅後すぐレッスン、基礎×希望曲で意欲を引き出す</span></li>
                           </ul>`
            },
            {
                label: "02",
                need: `<span class="block text-xl font-bold mb-3">シニア世代の再開を丁寧サポート</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>長いブランクがあり今から始めて大丈夫か不安</li>
                           <li>教室への移動や外出が負担になりつつある</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅訪問で外出不要、リラックス空間で無理なく再開</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>目標曲ベースで達成感を再構築、マイペース継続設計</span></li>
                           </ul>`
            },
            {
                label: "03",
                need: `<span class="block text-xl font-bold mb-3">家族みんなで音楽を共有する仕組み</span>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>子どもと大人で目標が異なり方針がバラつく</li>
                           <li>先生がいない時の具体的な練習方法が分からない</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>世代別の個別目標を尊重し進捗メモで情報共有</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>生活リズムに合わせた柔軟な運用で家族全員が継続</span></li>
                           </ul>`
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
        uniqueContent: `人形町駅周辺は就業層と居住層が混在し、夜間・休日レッスン需要が高いため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>仕事後に移動せず質の高い趣味時間を確保したい方を中心に、限られた平日時間で子どもの習い事を継続したいご家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "01",
                need: `<span class="block text-xl mb-2 font-bold">ビジネスパーソンの「移動ゼロ」で叶える上達</span>
                       <span class="block text-sm mb-4 opacity-80">仕事帰りの体力を、趣味の充実に充てる<br>移動の負担をなくし、効率よくピアノを再開したい方へ</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>仕事の後に教室へ移動する体力が残っておらず、通い続けることが難しい</li>
                           <li>不規則勤務や急な予定が入りやすく、毎週固定の曜日・時間を確保しにくい</li>
                           <li>長いブランクがあり、今の自分でも上達できるかという心理的ハードルを感じている</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>移動時間「0分」の自宅レッスン：講師がご自宅へ伺うため、仕事後でも移動の負担なく即座に開始できます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>月2回からの柔軟な頻度設計：仕事の繁忙期や予定に合わせて頻度を調整。不規則な生活の中でも無理なく継続可能です。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>「弾きたい一曲」から始める：目標曲ベースでカリキュラムを組み、再開直後から確かな達成感を作り直せます。</span></li>
                           </ul>`
            },
            {
                label: "02",
                need: `<span class="block text-xl mb-2 font-bold">都心型子育て世帯の「時間の質」を最大化</span>
                       <span class="block text-sm mb-4 opacity-80">限られた平日時間で、賢く習い事を続ける<br>送迎の負担をゼロにし、夕方の生活リズムを整えたいご家庭へ</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>保育園や学校後の移動で、帰宅後の貴重な時間がさらに圧迫されてしまう</li>
                           <li>雨の日や暑さ・寒さが厳しい日の移動そのものが、親子ともに大きな負担</li>
                           <li>送迎の間、保護者様の家事や仕事が中断し、夜のスケジュールが崩れがち</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>自宅訪問で「送迎の悩み」を解消：玄関を開ければレッスン開始。帰宅後の短時間でも受講しやすくなります。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>天候に左右されない継続性：一歩も外に出る必要がないため、天候を気にせず安定した生活リズムを守れます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟受講・夕方枠の最適化：兄弟連続での受講調整もしやすく、保護者様はその時間を家事や仕事に有効活用できます。</span></li>
                           </ul>`
            },
            {
                label: "03",
                need: `<span class="block text-xl mb-2 font-bold">甘酒横丁周辺の生活に馴染む「上達の習慣」</span>
                       <span class="block text-sm mb-4 opacity-80">忙しい日常の中で、何に集中すべきかを明確にする<br>甘酒横丁周辺で暮らしながら、長期的に無理なく続けたい方へ</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>限られた練習時間の中で、何を優先して練習すべきかの判断が難しい</li>
                           <li>お子様と大人で目標が異なり、家族内でどう練習を見守るべきか方針がばらつく</li>
                           <li>門前仲町や人形町特有の忙しい生活リズムに、どうピアノを定着させるか迷っている</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>3点集中のゴール共有：毎回の目標を3点以内に絞って共有。短時間でも迷わず成果が出る練習順を明確にします。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>ライフスタイルに寄り添う設計：月2回の頻度調整や、本番前の重点回を組み合わせ、生活リズムに合わせた継続を設計します。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>世代別の進捗メモ：子どもと大人それぞれの目標を分けつつ、共有しやすい進捗メモで家庭内の音楽習慣を整えます。</span></li>
                           </ul>`
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
        uniqueContent: `水天宮前駅周辺はオフィス就業者が多く、平日夜の移動削減ニーズが強いため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>移動を減らして限られた時間で趣味を継続したい方を中心に、親の移動負担を抑えて子どもの習い事を続けたいご家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "01",
                need: `<span class="block text-xl mb-2 font-bold">多忙な社会人のための「移動ゼロ」習慣</span>
                       <span class="block text-sm mb-4 opacity-80">仕事帰りの時間を、賢く趣味の充実に充てる<br>「通う体力」がなくても、憧れのピアノを生活の一部に</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>仕事の後に教室へ移動する体力を確保するのが難しく、継続が大きなハードルになっている</li>
                           <li>不規則な勤務や急な予定が入りやすく、毎週決まった固定枠を守れるか不安がある</li>
                           <li>久しぶりの再開で、今の自分でも上達できるかという心理的な壁を感じている</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>移動負担なしの「自宅訪問」：講師が伺うため、移動の手間は一切なし。帰宅後の短時間でも即座にレッスンを開始できます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>柔軟な頻度設計：月2回などのゆとりあるプランに対応。仕事の状況に合わせて、無理なく続けられるスケジュールを提案します。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>目標曲で達成感を再構築：基礎はもちろん、「この1曲を弾きたい」という想いを優先し、再開の喜びを形にします。</span></li>
                           </ul>`
            },
            {
                label: "02",
                need: `<span class="block text-xl mb-2 font-bold">子育て世帯の「送迎ストレス」を解消</span>
                       <span class="block text-sm mb-4 opacity-80">限られた平日時間で、子どもの学びを止めたくない<br>送迎の負担をなくし、夕方の生活リズムを整えたいご家庭へ</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>保育園や学校後の移動で、帰宅後の貴重な時間が圧迫され、夜のスケジュールが崩れがち</li>
                           <li>雨の日や、暑さ・寒さが厳しい日の移動そのものが、親子ともに大きなストレスになる</li>
                           <li>送迎の間、保護者様は家事や仕事の手を止めなければならず、時間のやりくりに苦労している</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>玄関を開ければレッスン開始：講師がご自宅へ訪問するため、送迎は不要。天候に左右されず、安定して継続できます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟受講・夕方枠の最適化：兄弟連続での受講も調整しやすく、移動が一本化されることで安全管理もしやすくなります。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>保護者の自由時間を創出：お子様のレッスン中、保護者様は隣の部屋で家事や在宅ワークに集中でき、夕方のゆとりが生まれます。</span></li>
                           </ul>`
            },
            {
                label: "03",
                need: `<span class="block text-xl mb-2 font-bold">箱崎・蛎殻町の日常に馴染む「上達の仕組み」</span>
                       <span class="block text-sm mb-4 opacity-80">限られた練習時間で、何に集中すべきかを明確にする<br>日本橋エリアで暮らしながら、長期的に無理なく続けたい方へ</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>日々の生活が忙しく、限られた練習時間の中で何を優先すべきか判断しづらい</li>
                           <li>日本橋箱崎町・蛎殻町周辺の生活リズムを崩さずに、ピアノを定着させる方法を知りたい</li>
                           <li>発表会や本番前など、必要な時にだけ集中して学びたいというニーズがある</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>「3点集中」の目標共有：毎回の目標を3点以内に絞って共有。短時間でも成果が出る練習順を明確にし、迷いをなくします。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>ライフスタイルに寄り添う継続設計：月2回からの頻度調整や本番前の重点レッスンを組み合わせ、生活環境に合わせた計画を立てます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>地域密着の柔軟な運用：このエリアの生活動線を熟知した講師が、仕事や学業と両立しやすい最適な進行を提案します。</span></li>
                           </ul>`
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
        uniqueContent: `浜町公園周辺は居住と就業が近接し、移動時間の最適化が学習継続率に直結するため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>生活リズムを崩さず上質なレッスン時間を持ちたい方を中心に、子どもと大人が同じ講師で長く続けたいご家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "01",
                need: `<span class="block text-xl mb-2 font-bold">ビジネスパーソンの「生活品質」を高める上達習慣</span>
                       <span class="block text-sm mb-4 opacity-80">仕事帰りの時間を、移動なしで贅沢な趣味時間へ<br>「通う体力」がなくても、リラックスした空間でピアノを再開したい方へ</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>仕事の後に教室へ移動する体力を確保するのが難しく、再開を躊躇している</li>
                           <li>不規則な勤務や急な予定が入りやすく、毎週決まった固定枠を維持するのが難しい</li>
                           <li>長いブランクがあり、今の自分でも本当に上達できるかという不安がある</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>移動負担ゼロの「自宅訪問」：講師が伺うため移動の手間は一切なし。帰宅後の短時間でも即座にレッスンを開始できます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>月2回からの柔軟なプラン：ライフスタイルに合わせて頻度を調整。忙しい時期でもご自身のペースで無理なく続けられます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>「目標曲」ベースの達成感：基礎はもちろん、「この1曲を弾けるようになりたい」という想いを優先し、再開の喜びを形にします。</span></li>
                           </ul>`
            },
            {
                label: "02",
                need: `<span class="block text-xl mb-2 font-bold">親子で「一生モノ」の基礎を育む長期伴走</span>
                       <span class="block text-sm mb-4 opacity-80">学年が変わっても、同一講師と一歩ずつ歩む<br>短期的な成果よりも、継続して「音楽の力」を積み上げたいご家庭へ</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>進級や中学受験など、学年変化による生活リズムの変化で継続を迷っている</li>
                           <li>先生が変わることで指導方針がぶれ、お子様が混乱してしまわないか心配</li>
                           <li>お子様だけでなく、保護者様も同じ講師から学び、家族で音楽を共有したい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>同一講師による継続伴走：同じ講師が長く担当することで、お子様の癖や成長を深く把握。癖を直しながら着実な基礎を築きます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>成長に合わせた目標再設計：成長段階や学校行事に合わせて無理なく続く練習計画を立て、一生モノの技術を育てます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>家族で通える柔軟な運用：親子で同じ講師に学ぶことで、ご家庭内での指導方針を一本化し、音楽コミュニケーションを深めます。</span></li>
                           </ul>`
            },
            {
                label: "03",
                need: `<span class="block text-xl mb-2 font-bold">浜町公園周辺の日常に馴染む「練習の仕組み」</span>
                       <span class="block text-sm mb-4 opacity-80">限られた時間で、何を優先すべきかを明確にする<br>浜町エリアで暮らしながら、長期的に無理なく上達したい方へ</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>浜町公園周辺の多忙な生活の中で、まとまった練習時間を確保する習慣が作れない</li>
                           <li>限られた練習時間の中で、上達のために何を優先すべきか判断しづらい</li>
                           <li>発表会や本番前など、必要な時に生活動線に合わせてレッスンを強化したい</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>「3点集中」の目標共有：毎回の目標を3点以内に絞って共有。短時間でも迷わず成果が出る練習順を明確にします。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>ライフスタイルに寄り添う設計：月2回の頻度調整や本番前の重点レッスンを組み合わせ、生活動線に合わせて継続を設計します。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>「5分からの」効率メニュー：短い隙間時間でも取り組めるメニューを提示。忙しい日でも上達を実感できる習慣を作ります。</span></li>
                           </ul>`
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
        uniqueContent: `森下駅周辺は子育て世帯と単身就業層が混在し、夕方以降の需要が高いため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>お迎え後の短時間で効率よく習い事を進めたいご家庭を中心に、仕事と家庭の合間に無理なく再開したい大人の方にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "01",
                need: `<span class="block text-xl mb-2 font-bold">送迎・家事・仕事の「時間的負担」を解消</span>
                       <span class="block text-sm mb-4 opacity-80">お迎え後の限られた時間を、効率よく豊かな学びへ</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>森下での送迎と家事・仕事が重なり、習い事を続けることが大きな負担になっている。</li>
                           <li>保育園や学校後の移動で帰宅後の時間が圧迫され、夜のスケジュールが崩れやすい。</li>
                           <li>雨の日や暑さ・寒さが厳しい日の通室が、親子ともにストレスを感じる要因になる。</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>送迎不要の「自宅訪問」：講師が伺うため、移動の手間はゼロ。帰宅後すぐにレッスンを開始できる時間帯をご家庭ごとに設計します。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>生活リズムの維持：天候に左右されず、いつもの自宅でリラックスして受講できるため、安定した習慣が身につきます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>保護者の時間を創出：送迎に費やしていた時間を家事や仕事に充てられ、兄弟連続受講などの調整も柔軟に対応します。</span></li>
                           </ul>`
            },
            {
                label: "02",
                need: `<span class="block text-xl mb-2 font-bold">マンション・電子ピアノ環境での「確かな上達」</span>
                       <span class="block text-sm mb-4 opacity-80">住環境を理由に、ピアノを習うことを諦めない</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>子育て世帯のマンションで、電子ピアノ中心の練習だと本格的に上達できるか不安がある。</li>
                           <li>鍵盤のタッチや表現力など、本物のピアノとの差をどう埋めるべきか迷っている。</li>
                           <li>集合住宅での音漏れ配慮や、最適な機材選びについてプロの意見が欲しい。</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>環境特化の段階指導：鍵盤タッチ・読譜・表現を、電子ピアノの特性に合わせて最適化する専門的な指導を行います。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>最適な機材提案：ご自宅の環境を拝見し、上達を妨げない機材の選び方や練習方法を具体的にアドバイスします。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>マンション仕様の練習法：住環境を熟知した講師が、近隣に配慮しつつ最大限の効果を出すための練習スタイルを提案します。</span></li>
                           </ul>`
            },
            {
                label: "03",
                need: `<span class="block text-xl mb-2 font-bold">塾・仕事・多様な予定との「柔軟な両立」</span>
                       <span class="block text-sm mb-4 opacity-80">忙しい日常に、無理なく音楽を定着させる</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>塾、部活、兄弟の予定が重なり、毎週決まった固定枠を維持するのが難しい。</li>
                           <li>仕事後に教室へ移動する体力を確保しにくく、ブランクからの再開に心理的ハードルを感じている。</li>
                           <li>不規則な勤務や学校行事により、欠席や振替が増えてしまうのが心配。</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>柔軟な頻度・運用設計：連続受講や隔週運用を組み合わせ、学校行事や仕事の繁忙期でも続けやすい計画をオーダーメイドで作ります。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>大人向けのマイペース受講：月2回からの頻度設計や、目標曲ベースの指導により、心理的負担なく達成感を再構築できます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>移動負担ゼロで再開：自宅訪問だからこそ、仕事後や勉強の合間に、心理的な壁を低くしてピアノに向き合えます。</span></li>
                           </ul>`
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
        uniqueContent: `住吉駅・猿江エリアは住宅が多く、家庭内で完結する習い事需要が安定しているため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>移動時間を減らして家庭時間を確保したいご家庭を中心に、外出負担を抑えながらピアノを再開したい方にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "01",
                need: `<span class="block text-xl mb-2 font-bold">送迎・移動の負担を解消し「ゆとり」を創る</span>
                       <span class="block text-sm mb-4 opacity-80">忙しい夕方の時間を、もっとスマートに活用したい</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>住吉での送迎と家事・仕事が重なり、習い事の継続が大きな負担になっている。</li>
                           <li>保育園や学校後の移動で帰宅後の時間が圧迫され、夜のスケジュールが崩れがち。</li>
                           <li>雨の日や暑さ・寒さが厳しい日の通室が、親子ともにストレスの原因になる。</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>完全自宅完結型レッスン：講師がご自宅へ伺うため、送迎は一切不要。玄関を開ければすぐに質の高い学びが始まります。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>生活リズムの守りやすさ：天候に左右されず、いつもの自宅でリラックスして受講。無理なく安定した継続をサポートします。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>家事・仕事との高い親和性：お子様のレッスン中、保護者様は家事や在宅ワークを中断せずに進められ、夕方の時間に余裕が生まれます。</span></li>
                           </ul>`
            },
            {
                label: "02",
                need: `<span class="block text-xl mb-2 font-bold">住宅エリア・電子ピアノでの「確かな上達」</span>
                       <span class="block text-sm mb-4 opacity-80">マンションや住宅街での「練習環境」への不安を解消</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>住宅エリアで電子ピアノ中心の練習だと、本格的に上達できるか不安がある。</li>
                           <li>鍵盤タッチ・読譜・表現力など、本物のピアノとの差をどう埋めるべきか迷っている。</li>
                           <li>近隣への音漏れ配慮や、今の自宅環境に最適な機材・練習法が知りたい。</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>電子ピアノ環境の段階指導：鍵盤タッチや表現を、電子ピアノの特性に合わせて最適化する専門的な指導を行います。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>機材・環境のアドバイス：上達に必要な機材の提案や、騒音に配慮した効果的な練習方法を具体的に伝授します。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>環境に合わせた個別設計：ご自宅の環境を拝見し、住環境を活かしながら最大限の効果を出す練習スタイルを共に構築します。</span></li>
                           </ul>`
            },
            {
                label: "03",
                need: `<span class="block text-xl mb-2 font-bold">塾・仕事・年齢に合わせた「柔軟な継続」</span>
                       <span class="block text-sm mb-4 opacity-80">ライフステージごとの「続けにくさ」に寄り添う</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>塾、部活、兄弟の予定が重なり、毎週の固定枠を維持するのが難しい。</li>
                           <li>外出の負担を抑えて再開したいが、指の動きや体力、昔の癖が直るか不安がある。</li>
                           <li>不規則なスケジュールの中で、どうすればピアノを習慣化できるか分からない。</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>柔軟な運用プラン：連続受講や隔週運用を組み合わせ、学校行事や塾が忙しい月でも続けやすい計画を作成します。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>シニア・再開層への配慮：無理のないテンポ設定や段階的なフォーム改善により、身体への負担を抑えて達成感を再構築します。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>「5分からの」効率メニュー：短い隙間時間で取り組めるメニューを提示。忙しい日でも上達を実感できる仕組みを整えます。</span></li>
                           </ul>`
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
        uniqueContent: `菊川駅周辺は就業層が多く、平日夜・短時間レッスン需要が目立つため、通室型では送迎や移動の負担が継続の壁になりやすい傾向があります。<br><br><strong>出張ピアノレッスンなら講師がご自宅に伺うため、移動時間を使わずにレッスンを開始できます。</strong><br>短時間で成果を出しながら継続したい学業・就業層を中心に、通室せず平日夕方に子どものレッスンを回したいご家庭にも対応し、電子ピアノ環境でも基礎・読譜・表現を段階的に伸ばします。`,
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
                label: "01",
                need: `<span class="block text-xl mb-2 font-bold">社会人・学生の「移動ゼロ」で叶える高効率レッスン</span>
                       <span class="block text-sm mb-4 opacity-80">仕事や部活の後、体力を削らずに趣味を楽しむ<br>「通う時間」を「上達の時間」へ変えたい方へ</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>残業や部活などで帰宅時間が読みづらく、決まった時間に教室へ通うのが難しい。</li>
                           <li>仕事・学業の後に移動する体力が残っておらず、ピアノを再開するハードルが高い。</li>
                           <li>練習時間が限られているため、何から手をつければいいか優先順位が決めにくい。</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>移動負担なしの「自宅訪問」：講師が伺うため、移動の手間はゼロ。帰宅後の短時間でも、リラックスした環境で即座に開始できます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>短時間・高密度メニュー：個別の進度に合わせて「今やるべきこと」を凝縮。短時間で成果を出す専用カリキュラムを設計します。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>復習しやすい「課題メモ」：レッスンの要点を毎回共有。迷いなく練習に取り組めるため、次回のレッスンまで着実に上達します。</span></li>
                           </ul>`
            },
            {
                label: "02",
                need: `<span class="block text-xl mb-2 font-bold">共働き世帯の「夕方のゆとり」を創出する</span>
                       <span class="block text-sm mb-4 opacity-80">限られた平日夕方の時間を、賢く有効活用する<br>送迎のストレスをなくし、子どもの学びを安定させたいご家庭へ</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>保育園や学校後の移動で帰宅後の時間が圧迫され、夜のスケジュールが崩れがち。</li>
                           <li>雨の日や暑さ・寒さが厳しい日の外出が、親子ともに大きな負担になっている。</li>
                           <li>送迎の間、保護者様は家事や仕事の手を止めなければならず、時間のやりくりに苦労している。</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>玄関を開ければレッスン開始：自宅訪問型なので送迎の必要は一切なし。天候に左右されず、いつもの生活リズムを守りながら継続できます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>保護者の自由時間を確保：お子様の受講中、保護者様は隣の部屋で夕飯の支度や在宅ワークに集中でき、夕方のゆとりが生まれます。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>兄弟受講・枠の最適化：兄弟連続での受講調整もしやすく、移動が一本化されることで安全面での不安も解消されます。</span></li>
                           </ul>`
            },
            {
                label: "03",
                need: `<span class="block text-xl mb-2 font-bold">菊川の日常に馴染む「長期継続」の仕組み</span>
                       <span class="block text-sm mb-4 opacity-80">菊川一〜三丁目で、無理なくピアノを習慣にする<br>地域の生活リズムに合わせ、本番や目標に向けて着実に進みたい方へ</span>
                       <p class="font-bold text-sm mb-2 text-[#544A40]">ISSUE / Pain Points</p>
                       <ul class="text-sm space-y-2 list-disc pl-4 opacity-80">
                           <li>発表会や本番前など、必要な時にだけ集中してポイントを絞った指導を受けたい。</li>
                           <li>日々の生活が忙しく、練習時間が短くなると「何が正解か」判断しづらくなる。</li>
                           <li>菊川エリアでの生活を楽しみながら、一生モノの趣味として長期的に続けたい。</li>
                       </ul>`,
                solution: `<ul class="space-y-3">
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>「3点集中」の目標設定：毎回の目標を3点以内に絞って共有。短時間でも成果が出る練習順を明確にし、練習の迷いをなくします。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>柔軟な頻度・重点レッスン：月2回からの頻度調整や、本番前の重点回を組み合わせるなど、生活リズムに合わせた継続設計を行います。</span></li>
                               <li class="flex items-start gap-2"><span class="text-[#A88B58] font-bold">✓</span><span>本番前の柔軟対応：試験や発表会、弾きたい曲の完成時期に合わせ、重点的な添削やスケジュール調整にも柔軟に対応します。</span></li>
                           </ul>`
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


