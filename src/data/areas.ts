export interface Area {
    slug: string;
    name: string;
    catchphrase: string;
    lead: string;
    mainImage: string;
    subAreas: string[];
    keywords: string[];
    access: string;
    features: {
        title: string;
        description: string;
    }[];
}

export const areas: Area[] = [
    {
        slug: "toyosu",
        name: "豊洲エリア",
        catchphrase: "タワーマンションでの出張レッスンに特化",
        lead: "豊洲・有明・東雲エリアのタワーマンションにお住まいの方へ。セキュリティや駐車場の事情にも精通しており、スムーズな訪問レッスンが可能です。",
        mainImage: "/images/areas/toyosu.jpg",
        subAreas: ["豊洲", "有明", "東雲"],
        keywords: ["タワーマンション", "出張ピアノ教室", "豊洲", "有明", "東雲", "子供の習い事"],
        access: "豊洲駅・有明駅を中心に、エリア内のタワーマンションへ伺います。",
        features: [
            {
                title: "タワーマンション対応",
                description: "入館手続きやゲストルームの使用など、タワーマンション特有のルールを熟知しています。"
            },
            {
                title: "ハイグレードな指導",
                description: "グランドピアノをお持ちのご家庭や、コンクールを目指す本格的なレッスンにも対応しています。"
            }
        ]
    },
    {
        slug: "harumi-kachidoki",
        name: "晴海・勝どき・月島",
        catchphrase: "送り迎え不要、ご自宅で質の高いレッスンを",
        lead: "新しい街並みが広がる晴海・勝どきエリア。駅から距離がある場所でも、出張レッスンなら送迎の負担なく、お子様は安心してレッスンを受けられます。",
        mainImage: "/images/areas/harumi.jpg",
        subAreas: ["晴海", "勝どき", "月島"],
        keywords: ["晴海フラッグ", "ドゥ・トゥール", "勝どきザ・タワー", "KTT", "PTK"],
        access: "大江戸線勝どき駅を中心に、バス・BRTで晴海全域へスムーズに伺えます。",
        features: [
            {
                title: "晴海フラッグ対応",
                description: "駅から少し距離のある晴海フラッグエリアも、出張レッスンなら天候を気にせず続けられます。"
            },
            {
                title: "忙しい保護者様へ",
                description: "共働きで送迎の時間が取れないご家庭にこそ、出張レッスンは最適です。"
            }
        ]
    },
    {
        slug: "kiyosumi-shirakawa",
        name: "清澄白河エリア",
        catchphrase: "アートとカフェの街に似合う、感性を育むピアノ",
        lead: "清澄白河・白河・三好・平野エリア。洗練された街の雰囲気の中で、豊かな感性と表現力を育てるピアノレッスンを提供します。",
        mainImage: "/images/areas/kiyosumi.jpg",
        subAreas: ["清澄白河", "白河", "三好", "平野"],
        keywords: ["清澄白河", "おしゃれ", "ピアノ教室", "木場公園", "現代美術館"],
        access: "半蔵門線・大江戸線 清澄白河駅周辺の住宅街へ伺います。",
        features: [
            {
                title: "感性を磨く",
                description: "テクニックだけでなく、音楽の美しさや表現することの喜びを大切にしたレッスンです。"
            },
            {
                title: "丁寧なコミュニケーション",
                description: "お子様の個性を尊重し、一人ひとりのペースに合わせた温かい指導を心がけています。"
            }
        ]
    },
    {
        slug: "monzen-nakacho",
        name: "門前仲町・木場",
        catchphrase: "下町の温かさと信頼、地域に根差したピアノ教室",
        lead: "門前仲町・木場・牡丹・古石場・越中島・冬木エリア。古くからの住宅地と新しいマンションが共存するこの街で、信頼関係を大切にしたレッスンを行います。",
        mainImage: "/images/areas/monzen-nakacho.jpg",
        subAreas: ["門前仲町", "木場", "牡丹", "古石場", "越中島", "冬木"],
        keywords: ["門前仲町", "木場", "東西線", "深川", "ピアノレッスン"],
        access: "東西線・大江戸線 門前仲町駅、東西線 木場駅周辺へ幅広く対応します。",
        features: [
            {
                title: "地域密着の安心感",
                description: "この地域での指導経験が豊富で、近隣の学校行事や地域性も理解しています。"
            },
            {
                title: "基礎から着実に",
                description: "ピアノを長く楽しんでもらえるよう、基礎力をしっかり身につける指導を行います。"
            }
        ]
    },
    {
        slug: "nihonbashi",
        name: "日本橋・人形町",
        catchphrase: "都心の教育熱心なご家庭に、本物の音楽教育を",
        lead: "人形町・水天宮前・浜町・箱崎町エリア。歴史と伝統ある日本橋で、質の高い教育を求めるご家庭のご要望にお応えします。",
        mainImage: "/images/areas/nihonbashi.jpg",
        subAreas: ["人形町", "水天宮前", "浜町", "箱崎町"],
        keywords: ["日本橋", "人形町", "水天宮前", "私立小学校", "受験"],
        access: "日比谷線・浅草線 人形町駅、半蔵門線 水天宮前駅周辺へ伺います。",
        features: [
            {
                title: "質の高い指導",
                description: "音大卒のプロ講師による、本格的かつアカデミックな視点を取り入れたレッスンです。"
            },
            {
                title: "受験・情操教育",
                description: "私立校への進学を考えているご家庭や、情操教育としてピアノを習わせたいご要望に応えます。"
            }
        ]
    },
    {
        slug: "morishita-sumiyoshi",
        name: "森下・住吉・菊川",
        catchphrase: "共働きファミリーの味方、夕方の時間を有効活用",
        lead: "森下・住吉・菊川・千歳・緑・立川エリア。保育園やマンションが多く、共働き世帯が多いこのエリアで、送迎負担のない出張レッスンが喜ばれています。",
        mainImage: "/images/areas/morishita.jpg",
        subAreas: ["森下", "住吉", "菊川", "千歳", "緑", "立川"],
        keywords: ["森下", "住吉", "菊川", "共働き", "保育園", "習い事"],
        access: "都営新宿線・大江戸線 森下駅、半蔵門線 住吉駅周辺のファミリー層が多いエリアです。",
        features: [
            {
                title: "送迎負担ゼロ",
                description: "夕方の忙しい時間帯、お子様へのピアノレッスンをご自宅にお届けします。"
            },
            {
                title: "ライフスタイルに合わせて",
                description: "ご家庭の生活リズムを尊重し、無理なく続けられるレッスン環境を提供します。"
            }
        ]
    }
];
