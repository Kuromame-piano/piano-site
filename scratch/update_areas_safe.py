import re

file_path = r"C:\Users\S6sak\yuzuki-site\src\data\areas.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 各エリアの定義ブロックを正規表現で個別に取得する
# slug: "xxx" から次のエリアの開始、または配列の終わりまでを1つのブロックとする
# 各ブロックの境界を特定するために re.finditer を使う

# 配列の開始位置
start_match = re.search(r'export const areas: Area\[\] = \[\s*', content)
if not start_match:
    print("Error: areas array not found")
    exit(1)

array_start_idx = start_match.end()

# 配列内のエリアブロックをパース
# 各エリアブロックは { で始まり } で終わる
# ネストされた波括弧を考慮して簡易パーサーを書く

blocks = []
current_pos = array_start_idx

while True:
    # { を探す
    brace_start = content.find('{', current_pos)
    if brace_start == -1:
        break
        
    # 配列の閉じ括弧 ] が先に見つかった場合は終了
    bracket_close = content.find(']', current_pos)
    if bracket_close != -1 and bracket_close < brace_start:
        break
        
    # 波括弧のネスト数をカウントしてオブジェクトの終わりを見つける
    nest_level = 0
    brace_end = -1
    for i in range(brace_start, len(content)):
        if content[i] == '{':
            nest_level += 1
        elif content[i] == '}':
            nest_level -= 1
            if nest_level == 0:
                brace_end = i
                break
                
    if brace_end == -1:
        break
        
    blocks.append((brace_start, brace_end + 1))
    current_pos = brace_end + 1

# ブロックを後ろから順に置換していく（インデックスのズレを防ぐため）
new_content = content
for start, end in reversed(blocks):
    block_text = content[start:end]
    
    # slug と name を抽出
    slug_match = re.search(r'slug:\s*"([^"]+)"', block_text)
    name_match = re.search(r'name:\s*"([^"]+)"', block_text)
    
    if not slug_match or not name_match:
        continue
        
    slug = slug_match.group(1)
    name = name_match.group(1)
    
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
            "description": f"{name}周辺で忙しく活動される大人の方へ、通学不要の出張レッスンをご提案します。移動時間をかけずに、お仕事や家事の合間で効率よく上達できます。"
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
    
    # 置換ヘルパー関数
    def rep_str(text, key, val, backtick=False):
        quote = "`" if backtick else '"'
        pat = rf'{key}:\s*("[^"]*"|\'[^\']*\'|`[^`]*`)'
        subst = f'{key}: {quote}{val}{quote}'
        return re.sub(pat, subst, text)
        
    def rep_block(text, key, val_str):
        # オブジェクト or 配列を丸ごと置換する
        pat = rf'({key}:\s*\[[\s\S]*?\]|{key}:\s*\{{[\s\S]*?\}})'
        subst = f'{key}: {val_str}'
        return re.sub(pat, subst, text)

    # 各フィールドの置換
    updated_block = block_text
    updated_block = rep_str(updated_block, 'catchphrase', catchphrase)
    updated_block = rep_str(updated_block, 'lead', lead)
    updated_block = rep_str(updated_block, 'mainImageAlt', mainImageAlt)
    updated_block = rep_str(updated_block, 'instructorIntroduction', instructorIntroduction)
    updated_block = rep_str(updated_block, 'consultationIntro', consultationIntro)
    updated_block = rep_str(updated_block, 'uniqueContent', uniqueContent, backtick=True)
    
    # 配列やオブジェクトの置換
    keywords_str = "[" + ", ".join(f'"{k}"' for k in keywords) + "]"
    updated_block = rep_block(updated_block, 'keywords', keywords_str)
    
    faqs_str = "[\n            " + ",\n            ".join([
        f'{{\n                question: "{faq["question"]}",\n                answer: "{faq["answer"]}"\n            }}'
        for faq in faqs
    ]) + "\n        ]"
    updated_block = rep_block(updated_block, 'faqs', faqs_str)
    
    consultations_str = "[\n            " + ",\n            ".join([
        f'{{\n                title: "{c["title"]}",\n                description: "{c["description"]}"\n            }}'
        for c in consultations
    ]) + "\n        ]"
    updated_block = rep_block(updated_block, 'consultations', consultations_str)
    
    seo_str = f"""{{
            primaryKeyword: "{name} ピアノ教室",
            secondaryKeywords: [
                "{name} 大人 ピアノ",
                "{name} ピアノレッスン",
                "{name} 出張レッスン",
                "{name} ピアノ 初心者"
            ],
            metaDescription: "{metaDescription}"
        }}"""
    updated_block = rep_block(updated_block, 'seo', seo_str)
    
    cta_str = """{
            subcopy: "体験レッスンや空き状況のご相談は公式LINEからお気軽にお問い合わせください。"
        }"""
    updated_block = rep_block(updated_block, 'cta', cta_str)

    # final swap
    new_content = new_content[:start] + updated_block + new_content[end:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Successfully updated areas.ts safely without breaking other properties!")
