import re

file_path = r"C:\Users\S6sak\yuzuki-site\src\data\areas.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# エリアデータの置換スクリプト
# 各エリアの基本情報を抽出しつつ、大人向けの文脈で新しくオブジェクトを組み立てる

# パース用：エリアの基本的な変数とグループ情報を維持し、
# areas の定義部分を完全に大人向けに書き直す

# 既存の landmark と googleMapUrl, slug, name, groupId, siblingSlugs, relatedAreas などを
# areas.ts から抽出する

areas_raw = re.findall(r'\{\s+slug:\s+"([^"]+)",\s+name:\s+"([^"]+)",\s+groupId:\s+"([^"]+)",\s+siblingSlugs:\s+\[([^\]]*)\]([\s\S]*?)\},\s*(?=\n\s*\{|\n\s*\])', content)

# 抽出できたエリアごとに大人向けデータを生成する
new_areas = []

for slug, name, groupId, sibling_slugs_raw, rest in areas_raw:
    sibling_slugs = [s.strip().replace('"', '') for s in sibling_slugs_raw.split(",") if s.strip()]
    
    # 既存の landmarks, googleMapUrl, relatedAreas を抽出
    landmarks_match = re.search(r'landmarks:\s+\[([^\]]*)\]', rest)
    landmarks_raw = landmarks_match.group(1) if landmarks_match else ""
    landmarks = [l.strip().replace('"', '') for l in landmarks_raw.split(",") if l.strip()]
    
    map_match = re.search(r'googleMapUrl:\s+"([^"]+)"', rest)
    googleMapUrl = map_match.group(1) if map_match else ""
    
    related_match = re.search(r'relatedAreas:\s+\[([^\]]*)\]', rest)
    related_raw = related_match.group(1) if related_match else ""
    relatedAreas = [r.strip().replace('"', '') for r in related_raw.split(",") if r.strip()]
    
    # 大人向けの文言定義
    catchphrase = "マンションやスタジオで始める<br class='md:hidden' />大人の個人ピアノレッスン"
    if name == "豊洲":
        catchphrase = "タワーマンションやスタジオで始める<br class='md:hidden' />大人のピアノレッスン"
    elif name == "清澄白河":
        catchphrase = "清澄白河を拠点に始める<br class='md:hidden' />大人の出張ピアノレッスン"
        
    lead = f"{name}で、仕事や家事の合間にピアノを続けたい大人の方へ。髙橋遊月ピアノ教室では、ご自宅または近隣スタジオで、初心者・再開者・好きな曲に取り組みたい方のための個人レッスンを行っています。"
    
    mainImageAlt = f"{name}エリアの自宅・マンションで受けられる大人のピアノレッスン"
    
    keywords = [f"{name} ピアノ教室", f"{name} ピアノ 大人", f"{name} 出張レッスン", f"{name} ピアノレッスン", "大人 ピアノ", "初心者", "再開", "好きな曲"]
    
    faqs = [
        {
            "question": f"大人の初心者ですが、楽譜が読めなくても大丈夫ですか？",
            "answer": f"はい、全く問題ありません。音の読み方や指の動かし方など、基礎の基礎から丁寧に指導いたします。{name}エリアでも大人になって初めてピアノに触れる方が多く受講されています。"
        },
        {
            "question": f"昔少し習っていた程度でブランクが長いのですが、再開できますか？",
            "answer": f"もちろんです。以前弾いていた曲や現在の状態を確認しながら、指の感覚をゆっくり取り戻せるようにサポートいたします。ご自身のペースで楽しく再開していただけます。"
        },
        {
            "question": f"忙しくて毎週通えないのですが、月1回だけでも受講できますか？",
            "answer": "はい、可能です。毎週固定の曜日が難しい方でも、月1回〜スケジュールを都度相談しながら無理のないペースで受講していただけます。"
        },
        {
            "question": f"自宅に先生を呼ぶのが不安な場合、スタジオでも可能ですか？",
            "answer": f"はい、可能です。ご自宅での受講が難しい場合は、{name}駅や近隣エリアのレンタルスタジオ等を利用してレッスンを行うことができます。"
        },
        {
            "question": "好きな曲や映画音楽、特定の課題曲だけを見てもらえますか？",
            "answer": "はい、対応しております。クラシックに限らず、ポップスや映画音楽、または学校や他のスクールで出された課題曲など、弾きたい曲を重点的にアドバイスいたします。"
        },
        {
            "question": "電子ピアノやマンションでの防音面が心配です。",
            "answer": f"88鍵盤の電子ピアノであればレッスン可能です。マンションにお住まいの方でも、音量調整やヘッドホン利用、適切なタッチなどのアドバイスを行い、配慮して進めます。"
        }
    ]
    
    uniqueContent = f"<strong>{name}周辺で、仕事や家事の合間にピアノを続けたい大人の方をサポートします。</strong>移動時間をかけずに、ご自宅のピアノ（電子ピアノ可）や近隣スタジオでマンツーマンの個人指導を受けられます。お好きな曲のサポートや、表現・ペダリングの指導まで丁寧に対応。月1回からスケジュールをご相談いただけます。"
    
    instructorIntroduction = f"東京音楽大学卒業。クラシックを基礎に、大人の初心者の方の基礎づくりから、久しぶりにピアノを再開したい方、好きな曲を仕上げたい方まで、一人ひとりの目的や生活リズムに合わせてレッスンを行っています。クラシックだけでなく、ポップスや映画音楽、伴奏曲などのご相談も歓迎です。{name}のご自宅やスタジオでリラックスして学んでいただけます。"
    
    consultationIntro = f"{name}で大人のための出張ピアノレッスンをご検討中の方から、よくいただくご相談です。"
    
    consultations = [
        {
            "title": "通学不要で時間を有効活用",
            "description": f"{name}周辺で忙しく活動される大人の方へ、通学不要の出張レッスンをご提案します。移動時間をかけずに、お仕事や家事の合間で効率よく上達できます。"
        },
        {
            "title": "大人の初心者・再開者をサポート",
            "description": "楽譜の読み方に不安がある初心者の方から、何十年ものブランクがある再開者の方まで歓迎。弾きたい曲や目標に合わせて、基礎から具体的に指導します。"
        },
        {
            "title": "自宅レッスンとスタジオ対応",
            "description": f"ご自宅の楽器環境（電子ピアノ可）で受講できるほか、ご自宅に講師を呼ぶのが難しい場合は近隣のレンタルスタジオを利用したレッスンも可能です。"
        }
    ]
    
    metaDescription = f"{name}で大人向けのピアノ教室をお探しなら出張専門の髙橋遊月ピアノ教室。初心者・再開者・好きな曲を仕上げたい方へ、ご自宅や近隣スタジオで受けられるマンツーマンの個人レッスン。体験レッスン受付中。"
    
    # 文字列の組み立て
    sibling_slugs_str = ", ".join(f'"{s}"' for s in sibling_slugs)
    keywords_str = ", ".join(f'"{k}"' for k in keywords)
    related_areas_str = ", ".join(f'"{r}"' for r in relatedAreas)
    landmarks_str = ", ".join(f'"{l}"' for l in landmarks)
    
    faqs_str = ",\n            ".join([
        f'{{\n                question: "{faq["question"]}",\n                answer: "{faq["answer"]}"\n            }}'
        for faq in faqs
    ])
    
    consultations_str = ",\n            ".join([
        f'{{\n                title: "{c["title"]}",\n                description: "{c["description"]}"\n            }}'
        for c in consultations
    ])
    
    new_area_block = f"""    {{
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
    new_areas.append(new_area_block)

# 新しい areas 定数ブロックを作成
new_areas_code = "export const areas: Area[] = [\n" + ",\n".join(new_areas) + "\n];"

# 元ファイル内の areas 定数を置換する
pattern = r'export const areas: Area\[\] = \[\s*//[\s\S]*?\];'
# もし pattern がマッチしなければ、export const areas: Area[] = [ からファイルの最後まで置換
if not re.search(pattern, content):
    pattern = r'export const areas: Area\[\] = \[\s*[\s\S]*?\];'

new_content = re.sub(pattern, new_areas_code, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Successfully updated areas.ts with adult-targeted persona data!")
