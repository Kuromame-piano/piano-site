import re

file_path = r"C:\Users\S6sak\yuzuki-site\src\data\areas.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. areaGroups の更新
# 既存の harumi-group と nihonbashi-group に佃 (tsukuda) と 日本橋 (nihonbashi) をそれぞれ追加
# さらに、新しい nihonbashi-central-group と tsukiji-group を追加

# まず areaGroups の定義範囲を取得
group_start = content.find("export const areaGroups: AreaGroup[] = [")
group_end = content.find("];", group_start) + 2
groups_text = content[group_start:group_end]

# harumi-group を見つけて areaSlugs に "tsukuda" を追加
groups_text = re.sub(
    r'(id:\s*"harumi-group",\s*label:\s*"月島・勝どき・晴海",\s*areaSlugs:\s*\["tsukishima",\s*"kachidoki",\s*"harumi"\])',
    r'id: "harumi-group",\n        label: "月島・勝どき・晴海・佃",\n        areaSlugs: ["tsukishima", "kachidoki", "harumi", "tsukuda"]',
    groups_text
)

# nihonbashi-group を見つけて areaSlugs に "nihonbashi" を追加
groups_text = re.sub(
    r'(id:\s*"nihonbashi-group",\s*label:\s*"人形町・水天宮前・浜町",\s*areaSlugs:\s*\["ningyocho",\s*"suitengu-mae",\s*"hamacho"\])',
    r'id: "nihonbashi-group",\n        label: "人形町・水天宮前・浜町・日本橋",\n        areaSlugs: ["ningyocho", "suitengu-mae", "hamacho", "nihonbashi"]',
    groups_text
)

# 新しいグループを追加するために、配列の末尾の ]; の直前に新しいオブジェクトを挿入
new_groups_add = """,
    {
        id: "nihonbashi-central-group",
        label: "茅場町・八丁堀",
        areaSlugs: ["kayabacho", "hatchobori"],
        district: "中央区",
    },
    {
        id: "tsukiji-group",
        label: "築地・新富町",
        areaSlugs: ["tsukiji", "shintomicho"],
        district: "中央区",
    }"""

# 最後の要素の波括弧の後ろに挿入する
last_brace = groups_text.rfind("}")
groups_text = groups_text[:last_brace+1] + new_groups_add + groups_text[last_brace+1:]

# ファイルの areaGroups を置換
content = content[:group_start] + groups_text + content[group_end:]

# 2. 新エリアデータの定義作成
new_areas_list = [
    {
        "slug": "tsukuda",
        "name": "佃",
        "groupId": "harumi-group",
        "siblingSlugs": ["tsukishima", "kachidoki", "harumi"],
        "catchphrase": "リバーサイドやタワーマンションで始める<br class='md:hidden' />大人のピアノレッスン",
        "googleMapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6963248698547!2d139.78287511525827!3d35.66846178019741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5m2!1sja!2sjp",
        "landmarks": ["佃公園", "大川端リバーシティ21", "月島駅"],
        "relatedAreas": ["tsukishima", "harumi", "kachidoki"]
    },
    {
        "slug": "nihonbashi",
        "name": "日本橋",
        "groupId": "nihonbashi-group",
        "siblingSlugs": ["ningyocho", "suitengu-mae", "hamacho"],
        "catchphrase": "歴史と洗練が交差する街で始める<br class='md:hidden' />大人のピアノレッスン",
        "googleMapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827986016719!2d139.77134371525902!3d35.68282898019385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5m2!1sja!2sjp",
        "landmarks": ["日本橋三越本店", "コレド室町", "日本橋駅"],
        "relatedAreas": ["ningyocho", "suitengu-mae", "hamacho", "kayabacho"]
    },
    {
        "slug": "kayabacho",
        "name": "茅場町",
        "groupId": "nihonbashi-central-group",
        "siblingSlugs": ["hatchobori"],
        "catchphrase": "オフィス街の近隣スタジオや自宅で始める<br class='md:hidden' />大人のピアノレッスン",
        "googleMapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.1347036611394!2d139.77884611525867!3d35.67980898019463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5m2!1sja!2sjp",
        "landmarks": ["茅場町駅", "兜町平和ビル", "日本橋川"],
        "relatedAreas": ["nihonbashi", "hatchobori", "ningyocho"]
    },
    {
        "slug": "hatchobori",
        "name": "八丁堀",
        "groupId": "nihonbashi-central-group",
        "siblingSlugs": ["kayabacho"],
        "catchphrase": "銀座・東京駅至近の自宅やスタジオで始める<br class='md:hidden' />大人のピアノレッスン",
        "googleMapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3813735165913!2d139.77797741525843!3d35.67499998019574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5m2!1sja!2sjp",
        "landmarks": ["八丁堀駅", "桜川公園", "亀島川"],
        "relatedAreas": ["kayabacho", "tsukiji", "shintomicho"]
    },
    {
        "slug": "tsukiji",
        "name": "築地",
        "groupId": "tsukiji-group",
        "siblingSlugs": ["shintomicho"],
        "catchphrase": "銀座隣接の洗練された街で始める<br class='md:hidden' />大人のピアノレッスン",
        "googleMapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6961168698547!2d139.77087511525827!3d35.66846178019741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5m2!1sja!2sjp",
        "landmarks": ["築地本願寺", "築地川公園", "築地駅"],
        "relatedAreas": ["shintomicho", "hatchobori", "tsukishima"]
    },
    {
        "slug": "shintomicho",
        "name": "新富町",
        "groupId": "tsukiji-group",
        "siblingSlugs": ["tsukiji"],
        "catchphrase": "落ち着いた都心の隠れ家やスタジオで始める<br class='md:hidden' />大人のピアノレッスン",
        "googleMapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5310368698547!2d139.77187511525827!3d35.67146178019741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5m2!1sja!2sjp",
        "landmarks": ["新富町駅", "中央区役所", "京橋公園"],
        "relatedAreas": ["tsukiji", "hatchobori", "ginza"]
    }
]

new_blocks = []
for area in new_areas_list:
    slug = area["slug"]
    name = area["name"]
    groupId = area["groupId"]
    catchphrase = area["catchphrase"]
    googleMapUrl = area["googleMapUrl"]
    
    lead = f"{name}で、仕事や家事の合間にピアノを続けたい大人の方へ。髙橋遊月ピアノ教室では、ご自宅または近隣スタジオで、初心者・再開者・好きな曲に取り組みたい方のための個人レッスンを行っています。"
    mainImageAlt = f"{name}エリアの自宅・マンションで受けられる大人のピアノレッスン"
    keywords = [f"{name} ピアノ教室", f"{name} ピアノ 大人", f"{name} 出張レッスン", f"{name} ピアノレッスン", "大人 ピアノ", "初心者", "再開", "好きな曲"]
    
    faqs = [
        {
            "question": "大人の初心者ですが、楽譜が読めなくても大丈夫ですか？",
            "answer": f"はい、全く問題ありません。音の読み方や指の動かし方など、基礎の基礎から丁寧に指導いたします。{name}エリアでも大人になって初めてピアノを触る方が多く受講されています。"
        },
        {
            "question": "昔少し習っていた程度でブランクが長いのですが、再開できますか？",
            "answer": "もちろんです。以前弾いていた曲や現在の状態を確認しながら、指の感覚をゆっくり取り戻せるようにサポートいたします。ご自身のペースで楽しく再開していただけます。"
        },
        {
            "question": "忙しくて毎週通えないのですが、月1回だけでも受講できますか？",
            "answer": "はい、可能です。毎週固定の曜日が難しい方でも、月1回〜スケジュールを都度相談しながら無理のないペースで受講していただけます。"
        },
        {
            "question": "自宅に先生を呼ぶのが不安な場合、スタジオでも可能ですか？",
            "answer": f"はい、可能です。ご自宅での受講が難しい場合は、{name}駅や近隣エリアのレンタルスタジオ等を利用してレッスンを行うことができます。"
        },
        {
            "question": "好きな曲や映画音楽、特定の課題曲だけを見てもらえますか？",
            "answer": "はい、対応しております。クラシックに限らず、ポップスや映画音楽、または学校や他のスクールで出された課題曲など、弾きたい曲を重点的にアドバイスいたします。"
        },
        {
            "question": "電子ピアノやマンションでの防音面が心配です。",
            "answer": "88鍵盤の電子ピアノであればレッスン可能です。マンションにお住まいの方でも、音量調整やヘッドホン利用、適切なタッチなどのアドバイスを行い、配慮して進めます。"
        }
    ]
    
    uniqueContent = f"<strong>{name}周辺で、仕事や家事の合間にピアノを続けたい大人の方をサポートします。</strong>移動時間をかけずに、ご自宅のピアノ（電子ピアノ可）や近隣スタジオでマンツーマンの個人指導を受けられます。お好きな曲のサポートや、表現・ペダリングの指導まで丁寧に対応。月1回からスケジュールをご相談いただけます。"
    instructorIntroduction = f"東京音楽大学卒業。クラシックを基礎に、大人の初心者の方の基礎づくりから、久しぶりにピアノを再開したい方、好きな曲を仕上げたい方まで、一人ひとりの目的や生活リズムに合わせてレッスンを行っています。クラシックだけでなく、ポップスや映画音楽、伴奏曲などのご相談も歓迎です。{name}のご自宅やスタジオでリラックスして学んでいただけます。"
    consultationIntro = f"{name}で大人のための出張ピアノレッスンをご検討中の方から、よくいただくご相談です。"
    
    consultations = [
        {
            "title": "通学不要で時間を有効活用",
            "description": f"{name}周辺で忙しく活動される大人の方へ、通学不要 of 出張レッスンをご提案します。移動時間をかけずに、お仕事や家事の合間で効率よく上達できます。"
        },
        {
            "title": "大人の初心者・再開者をサポート",
            "description": "楽譜の読み方に不安がある初心者の方から、何十年ものブランクがある再開者の方まで歓迎。弾きたい曲や目標に合わせて、基礎から具体的に指導します。"
        },
        {
            "title": "自宅レッスンとスタジオ対応",
            "description": "ご自宅の楽器環境（電子ピアノ可）で受講できるほか、ご自宅に講師を呼ぶのが難しい場合は近隣のレンタルスタジオを利用したレッスンも可能です。"
        }
    ]
    metaDescription = f"{name}で大人向けのピアノ教室をお探しなら出張専門の髙橋遊月ピアノ教室。初心者・再開者・好きな曲を仕上げたい方へ、ご自宅や近隣スタジオで受けられるマンツーマンの個人レッスン。体験レッスン受付中。"
    
    sibling_slugs_str = ", ".join(f'"{s}"' for s in area["siblingSlugs"])
    keywords_str = ", ".join(f'"{k}"' for k in keywords)
    related_areas_str = ", ".join(f'"{r}"' for r in area["relatedAreas"])
    landmarks_str = ", ".join(f'"{l}"' for l in area["landmarks"])
    
    faqs_str = ",\n            ".join([
        f'{{\n                question: "{faq["question"]}",\n                answer: "{faq["answer"]}"\n            }}'
        for faq in faqs
    ])
    
    consultations_str = ",\n            ".join([
        f'{{\n                title: "{c["title"]}",\n                description: "{c["description"]}"\n            }}'
        for c in consultations
    ])
    
    block = f"""    {{
        slug: "{slug}",
        name: "{name}",
        groupId: "{groupId}",
        siblingSlugs: [{sibling_slugs_str}],
        catchphrase: "{catchphrase}",
        lead: "{lead}",
        mainImage: "/images/areas/{slug}.webp",
        mainImageAlt: "{mainImageAlt}",
        keywords: [{keywords_str}],
        features: [],
        faqs: [
            {faqs_str}
        ],
        uniqueContent: `{uniqueContent}`,
        instructorIntroduction: "{instructorIntroduction}",
        consultationIntro: "{consultationIntro}",
        consultations: [
            {consultations_str}
        ],
        seo: {{
            primaryKeyword: "{name} ピアノ教室",
            secondaryKeywords: [
                "{name} 大人 ピアノ",
                "{name} ピアノレッスン",
                "{name} 出張レッスン",
                "{name} ピアノ 初心者"
            ],
            metaDescription: "{metaDescription}"
        }},
        cta: {{
            subcopy: "体験レッスンや空き状況のご相談は公式LINEからお気軽にお問い合わせください。"
        }},
        relatedAreas: [{related_areas_str}],
        googleMapUrl: "{googleMapUrl}",
        landmarks: [{landmarks_str}]
    }}"""
    new_blocks.append(block)

# areas 配列の末尾に追加する
# 末尾の ]; を見つける
areas_end = content.rfind("];")

# 最後のオブジェクトの後ろにカンマを追加して新ブロックを挿入
content = content[:areas_end-1].rstrip() + ",\n" + ",\n".join(new_blocks) + "\n];\n"

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully added new areas to areas.ts!")
