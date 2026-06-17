import re

file_path = 'src/data/areas.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Definitions of unique consultations for each area group
group_consultations = {
    "toyosu-group": [
        {
            "title": "湾岸マンションの楽器防音・タッチ対策",
            "description": "豊洲や有明等のマンションにお住まいの方へ、電子ピアノの打鍵音やヘッドホン利用時の音量に配慮したタッチコントロールや防音マット選び等をご提案します。"
        },
        {
            "title": "忙しい大人のための隙間スケジュール調整",
            "description": "お仕事や家庭の予定で毎週固定の時間が取れなくても大丈夫です。ご都合に合わせて月1回から、その都度の空き枠でレッスン日時をご相談いただけます。"
        },
        {
            "title": "自宅レッスンと近隣レンタルスタジオの併用",
            "description": "自宅に講師を招くのが難しい場合や楽器がない場合でも、豊洲駅や有明周辺のレンタルスタジオを利用し、本格的なグランドピアノでレッスンを受講できます。"
        }
    ],
    "harumi-group": [
        {
            "title": "晴海フラッグや勝どきでの移動時間ゼロレッスン",
            "description": "勝どきや晴海フラッグなど敷地が広く移動に時間がかかる地域でも、ご自宅レッスンなら往復の移動時間はゼロ。お仕事後や家事の合間に効率よく学べます。"
        },
        {
            "title": "大人になってから始める楽譜の読み方と基礎",
            "description": "40〜60代の初心者やブランクの長い再開者の方へ、周りの目を気にせずに自宅で一から楽譜の読み方や正しい姿勢、指の使い方を丁寧に確認します。"
        },
        {
            "title": "電子ピアノや近隣スタジオの利用相談",
            "description": "ご自宅の電子ピアノ（88鍵盤）でのレッスンはもちろん、勝どき・月島周辺の練習室やレンタルスタジオを利用したスタジオレッスンも調整可能です。"
        }
    ],
    "kiyosumi-group": [
        {
            "title": "清澄白河が拠点だからこその柔軟な調整",
            "description": "当教室は清澄白河周辺を拠点としているため、移動時間が短く、スケジュール調整や急な予定変更に伴う振替のご相談にもスムーズに対応しやすい環境です。"
        },
        {
            "title": "憧れのクラシックやポップスをマイペースに",
            "description": "教本通りに進めるレッスンではなく、弾きたい特定の曲（クラシック名曲や映画音楽、ポップス）の苦手な箇所やペダリングを中心に指導します。"
        },
        {
            "title": "自宅のいつもの楽器でタッチを確認",
            "description": "ご自宅のアップライトピアノや電子ピアノで直接指導を受けられるため、普段の練習環境と乖離がなく、学んだことを日々の練習に直結させられます。"
        }
    ],
    "monzen-group": [
        {
            "title": "門前仲町駅近くのレンタルスタジオ活用",
            "description": "ご自宅に楽器がない方や講師を招くのが不安な方でも安心。門前仲町周辺や木場駅近くのスタジオを利用し、グランドピアノのタッチを体験しながら学べます。"
        },
        {
            "title": "仕事や日常生活と両立できる月1〜2回受講",
            "description": "定期的・固定での受講が難しい方のために、ご都合に合わせてLINEでその都度スケジュールを相談。無理のないペースで趣味のピアノを長く続けられます。"
        },
        {
            "title": "特定の好きな曲や苦手部分のスポット相談",
            "description": "学校行事の伴奏、他のスクールでの課題曲、久しぶりに弾いてみたい曲など、ピンポイントでペダリングや指使いだけのアドバイスを行うことも可能です。"
        }
    ],
    "nihonbashi-group": [
        {
            "title": "日本橋・人形町で働く方の夜間・休日レッスン",
            "description": "お仕事帰りの遅めの時間帯や週末の空き枠を活かし、時間を有効に使いながらレッスンを受けられます。日本橋周辺でのスタジオ受講もご相談可能です。"
        },
        {
            "title": "大人初心者・再開者に向けた個別カリキュラム",
            "description": "「何十年もブランクがある」「指が動くか心配」という大人の方に合わせて進めます。個々の手の大きさや癖に合わせた指番号などを丁寧に整理します。"
        },
        {
            "title": "マンション環境に配慮した丁寧な電子ピアノ指導",
            "description": "日本橋周辺のマンションにお住まいの方へ、近隣に音が響かないヘッドホンや音量設定のアドバイスを行いながら、美しい響きを出すタッチを指導します。"
        }
    ],
    "morishita-group": [
        {
            "title": "森下・住吉周辺の移動時間をカットする自宅レッスン",
            "description": "忙しい主婦や経営者、社会人の方へ。講師がご自宅の電子ピアノやアップライトピアノのある部屋までお伺いするため、天候を気にせずリラックスして学べます。"
        },
        {
            "title": "大人になって再開するピアノの感覚戻し",
            "description": "子どもの頃に習っていてブランクが長い大人の方へ、昔の教本や思い出の曲を使用しながら、無理なく指の感覚を取り戻していけるようにサポートします。"
        },
        {
            "title": "自宅レッスンと周辺レンタルスタジオの選択",
            "description": "森下や菊川駅周辺のスタジオ、住吉近隣の練習室を利用するレッスンも調整可能です。ご自宅の環境やご希望の受講スタイルに合わせて毎回選べます。"
        }
    ],
    "nihonbashi-central-group": [
        {
            "title": "茅場町・八丁堀でのオフィス帰りの隙間レッスン",
            "description": "茅場町や八丁堀周辺でお仕事帰りに受講したい社会人の方へ。ご自宅の出張だけでなく、オフィス近くのスタジオでのレッスンも柔軟に手配・相談いただけます。"
        },
        {
            "title": "マイペースに好きな曲だけを楽しむ趣味のピアノ",
            "description": "基礎教材のノルマなどは一切ありません。あなたが今弾いてみたい映画音楽、J-POP、簡単なクラシック曲を自分の好きなペースで仕上げていくことができます。"
        },
        {
            "title": "レンタルスタジオでの本格グランドピアノ指導",
            "description": "茅場町・八丁堀近隣のピアノスタジオを利用し、普段は触れる機会の少ないグランドピアノ特有のペダル操作や音の響きを丁寧に指導します（別途会場費）。"
        }
    ],
    "tsukiji-group": [
        {
            "title": "築地・新富町周辺の通学不要な個人レッスン",
            "description": "出張専門のため、楽譜や教材を持って教室に通う手間がかかりません。ご自宅のリラックスした環境で、マンツーマンでじっくりと指導を受けられます。"
        },
        {
            "title": "楽譜が読めなくても安心の大人向けアプローチ",
            "description": "音符の読み方や基本的なリズムの取り方から、大人の理解の仕方に合わせて丁寧に解説。何となく感覚で弾くのではなく、納得しながら進められます。"
        },
        {
            "title": "自宅マンションでの電子ピアノ設置と練習相談",
            "description": "築地周辺のマンションにお住まいの方へ、電子ピアノ（88鍵盤）を用いた効果的な練習方法や、防音・ペダリングの感覚の掴み方を指導します。"
        }
    ],
    "ginza-kyobashi-group": [
        {
            "title": "銀座近くのプライベートな本格スタジオレッスン",
            "description": "銀座や京橋周辺のレンタルスタジオを利用した対面レッスン。ハイクオリティなグランドピアノを贅沢に響かせながら、大人の充実した余暇を楽しめます。"
        },
        {
            "title": "経営者や多忙な方のためのLINEスケジュール調整",
            "description": "出張レッスンならではの柔軟性で、予定が変わりやすい方でもLINEで空き状況を相談しながら、月ごとにレッスン頻度や時間を相談できます。"
        },
        {
            "title": "一曲仕上げ・特定の演奏機会に向けた集中指導",
            "description": "「結婚式でこの1曲を弾きたい」「特定のクラシック名曲を完成させたい」といった目標に対し、必要な表現や苦手箇所の弾き方をピンポイントでサポートします。"
        }
    ],
    "azabu-roppongi-group": [
        {
            "title": "港区マンションでの上品な自宅防音レッスン",
            "description": "麻布十番、六本木、白金高輪周辺のマンションにて、電子ピアノやヘッドホンを用いた丁寧な指導。打鍵の音量や音の響きに配慮しつつ表現力を磨きます。"
        },
        {
            "title": "移動時間ゼロで時間を有効活用する出張指導",
            "description": "ご自宅に直接講師が伺うため、忙しい日々を送る港区の社会人や経営者の方でも、移動の手間や時間を一切かけずに効率的にピアノを上達させられます。"
        },
        {
            "title": "東京音大卒の講師による目的別マンツーマン",
            "description": "クラシックの基礎はもちろん、ポップスやジャズ風の映画音楽など、ご本人が今取り組みたいジャンルに合わせたオーダーメイドのレッスンを提供します。"
        }
    ],
    "kojimachi-bancho-group": [
        {
            "title": "麹町・番町のご自宅や周辺レンタルスタジオ対応",
            "description": "麹町や半蔵門のご自宅にお伺いする出張レッスンのほか、近隣のレンタルスタジオを利用したグランドピアノでのレッスンもスムーズにご相談いただけます。"
        },
        {
            "title": "定年後の新しい趣味や社会人の気分転換に",
            "description": "40〜60代から初めてピアノを触る方や、仕事・家事から離れて何かに没頭したい大人の方へ、無理なく続けられる指の体操や練習法をご提案します。"
        },
        {
            "title": "ハノンやツェルニーなど基礎の大人向け再確認",
            "description": "「昔習った基礎をもう一度きれいに弾けるようにしたい」という方へ、ペダルの踏み方や打鍵の脱力方法を論理的に解説し、美しい響きを追求します。"
        }
    ],
    "bunkyo-group": [
        {
            "title": "坂道の移動負担がない快適な自宅出張指導",
            "description": "春日、小石川、本郷といった坂の多い文京区のエリアでも、ご自宅レッスンなら重い楽譜や教材を持って移動する負担は一切ありません。快適に学べます。"
        },
        {
            "title": "ブランクのある大人の方が無理なく再開するコツ",
            "description": "昔弾いていた曲の指使いを見直したり、簡単なアレンジ楽譜を使用したりして、指の柔軟性をゆっくり取り戻しながらご自身のペースで進められます。"
        },
        {
            "title": "電子ピアノの購入や自宅のレッスン部屋環境相談",
            "description": "「どんなピアノを選べばいいか分からない」という段階でも大丈夫です。大人になってから始めるための機材選びや防音対策についてお気軽にご相談ください。"
        }
    ],
    "ryogoku-kuramae-group": [
        {
            "title": "両国・蔵前周辺でのアットホームな自宅レッスン",
            "description": "出張専門の特性を活かし、他の生徒の目を気にすることなく、ご自宅の慣れた環境（電子ピアノ可）で講師とマンツーマンでじっくりレッスンを行えます。"
        },
        {
            "title": "昔憧れたクラシック名曲や映画音楽への挑戦",
            "description": "教本を順番にこなすのではなく、「あの曲を両手で弾いてみたい」という夢をサポート。難易度の高い箇所は簡易的なアレンジなどでサポートします。"
        },
        {
            "title": "蔵前・浅草橋周辺の練習室を利用したスタジオ受講",
            "description": "ご自宅にピアノを置けない場合や、防音対策で大きな音を出せない場合は、周辺のレンタルスペースや音楽スタジオでのレッスンも調整可能です。"
        }
    ],
    "tatsumi-shinkiba-group": [
        {
            "title": "辰巳・新木場周辺のご自宅へ伺う出張指導",
            "description": "ご自宅で完結するレッスンのため、通学の手間や外出の準備が必要ありません。お仕事帰りや週末の時間を有意義に活かしてレッスンを受講できます。"
        },
        {
            "title": "大人の初心者向けマイペースピアノレッスン",
            "description": "楽譜を全く読めない段階から大歓迎です。キーボードや電子ピアノを用いて、指の動かし方や音の読み方から少しずつ自分のペースで上達できます。"
        },
        {
            "title": "マンション住まいでも安心の打鍵音・音量対策",
            "description": "辰巳周辺のマンション環境に配慮し、電子ピアノで受講される場合の音量調節や防音マットの選定、ヘッドホン使用などについて親身にアドバイスします。"
        }
    ],
    "toyocho-minamisuna-group": [
        {
            "title": "東陽町・南砂町での移動時間ゼロの自宅レッスン",
            "description": "出張指導のため、忙しい毎日に通学の負担を増やしません。リラックスできるご自宅のピアノ（電子ピアノ可）で、周りを気にせずマンツーマンで習えます。"
        },
        {
            "title": "LINEでのフレキシブルなスケジュール相談",
            "description": "毎週決まった時間ではなく、今月は月1回、来月は月2回など、ご予定に合わせて柔軟に変更可能。忙しい社会人や主婦の方に選ばれています。"
        },
        {
            "title": "好きな曲や苦手部分に特化した個人サポート",
            "description": "「このフレーズだけ指がもつれる」「ペダルのタイミングが合わない」といったお悩みに対し、弾きやすくなる指使いや練習法を分かりやすく整理します。"
        }
    ],
    "ojima-kameido-group": [
        {
            "title": "大島・亀戸で通学時間を節約できる出張指導",
            "description": "自宅にいながらレッスンを始められるため、重い教材を持ち運ぶ必要がありません。定年後の新しい趣味や、大人の余暇時間を有効に使えます。"
        },
        {
            "title": "ブランク再開を後押しする丁寧な指慣らし",
            "description": "子どもの頃以来、何十年ぶりにピアノに触れるという方へ。無理のない簡単なクラシックやポップスから、指の感覚をゆっくり楽しく取り戻します。"
        },
        {
            "title": "周辺レンタルスタジオでの本格ピアノ受講",
            "description": "亀戸や大島駅近くのスタジオを利用し、グランドピアノ特有の鍵盤の重さや豊かな響きを確認しながら、本格的なテクニックを学ぶこともできます。"
        }
    ]
}

# Now, we parse areas.ts and replace consultations of each area depending on its groupId
# Let's inspect areas.ts's syntax for areas array.
# Export const areas: Area[] = [
#    {
#        Slug: "toyosu",
#        Name: "豊洲",
#        GroupId: "toyosu-group",
#        ...
#        Consultations: [
#            ...
#        ],
#    },
# ...

# We can implement a parser in python that finds each area block, matches `slug`, `groupId`, and replaces the `consultations: [ ... ]` block.
# Let's write a python parser using findAreaBlocks logic we saw in the validation script.

def find_area_blocks_with_pos(text):
    start = text.find("export const areas: Area[] = [")
    if start == -1: raise Exception("Areas array not found")
    equal_pos = text.find("=", start)
    if equal_pos == -1: raise Exception("Areas array assignment not found")
    bracket_start = text.find("[", equal_pos)
    if bracket_start == -1: raise Exception("Areas array start bracket not found")

    blocks = []
    depth = 0
    in_string = False
    escaped = False
    obj_start = -1

    for i in range(bracket_start + 1, len(text)):
        ch = text[i]

        if in_string:
            if escaped:
                escaped = False
                continue
            if ch == '\\':
                escaped = True
                continue
            if ch == '"':
                in_string = False
            continue

        if ch == '"':
            in_string = True
            continue

        if ch == '{':
            if depth == 0: obj_start = i
            depth += 1
            continue

        if ch == '}':
            depth -= 1
            if depth == 0 and obj_start != -1:
                end = i + 1
                while end < len(text) and text[end].isspace():
                    end += 1
                if end < len(text) and text[end] == ',':
                    end += 1
                blocks.append((obj_start, end, text[obj_start:end]))
                obj_start = -1
            continue

        if depth == 0 and ch == ']':
            break

    return blocks

blocks = find_area_blocks_with_pos(content)
new_content = ""
last_idx = 0

replaced_count = 0

for start, end, block in blocks:
    # Find slug
    slug_match = re.search(r'slug:\s*"([^"]+)"', block)
    group_match = re.search(r'groupId:\s*"([^"]+)"', block)
    
    if not slug_match or not group_match:
        # Just copy unchanged
        new_content += content[last_idx:end]
        last_idx = end
        continue
        
    slug = slug_match.group(1)
    group_id = group_match.group(1)
    
    # Generate new consultations array for this group
    consults = group_consultations.get(group_id)
    if not consults:
        # Fallback or group not found in list? Warn and copy unchanged
        print(f"Warning: consultations for group {group_id} not defined.")
        new_content += content[last_idx:end]
        last_idx = end
        continue
        
    # Format new consultations block
    # Ensure correct indents and formatting
    new_consults_str = "        consultations: [\n"
    for c in consults:
        # Replace the placeholder in description with the area name
        # Wait, the descriptions in group_consultations already have name like "豊洲や有明等のマンションにお住まいの方へ"
        # Let's customize it: replace any generic area names with the actual area name!
        # For example, "豊洲や有明等のマンションにお住まいの方へ" in toyosu block should just be "豊洲のマンションにお住まいの方へ" or "有明のマンションにお住まいの方へ".
        # Let's do a simple replacement:
        desc = c["description"]
        # Replace placeholders
        desc = desc.replace("豊洲や有明等", area_name := re.search(r'name:\s*"([^"]+)"', block).group(1))
        desc = desc.replace("豊洲駅や有明周辺", f"{area_name}周辺")
        desc = desc.replace("勝どきや晴海フラッグなど", f"{area_name}など")
        desc = desc.replace("勝どき・月島周辺", f"{area_name}周辺")
        desc = desc.replace("清澄白河周辺", f"{area_name}周辺")
        desc = desc.replace("門前仲町周辺や木場駅近く", f"{area_name}周辺")
        desc = desc.replace("門前仲町", area_name)
        desc = desc.replace("日本橋・人形町", area_name)
        desc = desc.replace("日本橋周辺", f"{area_name}周辺")
        desc = desc.replace("森下・住吉周辺", f"{area_name}周辺")
        desc = desc.replace("森下や菊川駅周辺", f"{area_name}周辺")
        desc = desc.replace("住吉近隣", f"{area_name}周辺")
        desc = desc.replace("八丁堀・茅場町周辺", f"{area_name}周辺")
        desc = desc.replace("茅場町や八丁堀周辺", f"{area_name}周辺")
        desc = desc.replace("茅場町・八丁堀近隣", f"{area_name}周辺")
        desc = desc.replace("築地・新富町周辺", f"{area_name}周辺")
        desc = desc.replace("築地周辺", f"{area_name}周辺")
        desc = desc.replace("銀座や京橋周辺", f"{area_name}周辺")
        desc = desc.replace("銀座駅周辺", f"{area_name}周辺")
        desc = desc.replace("銀座・京橋近隣", f"{area_name}周辺")
        desc = desc.replace("麻布や六本木、白金高輪周辺", f"{area_name}周辺")
        desc = desc.replace("麻布や六本木のマンション", f"{area_name}のマンション")
        desc = desc.replace("麹町や半蔵門", area_name)
        desc = desc.replace("春日、小石川、本郷", area_name)
        desc = desc.replace("蔵前や両国", area_name)
        desc = desc.replace("蔵前・浅草橋周辺", f"{area_name}周辺")
        desc = desc.replace("辰巳・新木場周辺", f"{area_name}周辺")
        desc = desc.replace("辰巳周辺", f"{area_name}周辺")
        desc = desc.replace("東陽町や南砂町", area_name)
        desc = desc.replace("東陽町や南砂町の落ち着いた住宅", f"{area_name}の落ち着いた住宅")
        desc = desc.replace("大島や亀戸", area_name)
        desc = desc.replace("大島や亀戸のご自宅", f"{area_name}のご自宅")
        desc = desc.replace("亀戸や大島駅近く", f"{area_name}周辺")
        
        # General backup replacements just in case
        desc = desc.replace("清澄白河", area_name)
        desc = desc.replace("豊洲", area_name)
        desc = desc.replace("有明", area_name)
        desc = desc.replace("勝どき", area_name)
        desc = desc.replace("晴海", area_name)
        desc = desc.replace("門前仲町", area_name)
        
        title = c["title"]
        title = title.replace("晴海フラッグや勝どきでの", "")
        title = title.replace("清澄白河が拠点だから", "地域拠点だから")
        title = title.replace("門前仲町駅近くの", "近隣の")
        title = title.replace("日本橋・人形町で働く方の", "お仕事帰りの")
        title = title.replace("森下・住吉周辺の", "")
        title = title.replace("茅場町・八丁堀での", "")
        title = title.replace("築地・新富町周辺の", "")
        title = title.replace("銀座近くの", "")
        title = title.replace("港区マンションでの", "マンションでの")
        title = title.replace("麹町・番町のご自宅や", "ご自宅や")
        title = title.replace("両国・蔵前周辺での", "")
        title = title.replace("辰巳・新木場周辺のご自宅へ伺う", "ご自宅へ伺う")
        title = title.replace("東陽町・南砂町での", "")
        title = title.replace("大島・亀戸で", "")
        
        new_consults_str += f"""            {{
                title: "{title}",
                description: "{desc}"
            }},\n"""
    new_consults_str += "        ],\n"
    
    # We replace the consultations block inside this block
    # Match the consultations array in the block: consultations: [ ... ],
    # The regex matches: consultations:\s*\[[\s\S]*?\],?\s*\r?\n
    pattern = r'consultations:\s*\[[\s\S]*?\],\s*\r?\n'
    modified_block, count = re.subn(pattern, new_consults_str, block)
    if count == 0:
        # Let's try matching without trailing newline
        pattern_no_nl = r'consultations:\s*\[[\s\S]*?\]'
        modified_block, count = re.subn(pattern_no_nl, new_consults_str.strip(), block)
        
    if count > 0:
        replaced_count += 1
    else:
        print(f"Warning: Could not replace consultations array in slug {slug}")
        
    # Append the content up to the block start, and then the modified block
    new_content += content[last_idx:start] + modified_block
    last_idx = end

new_content += content[last_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Successfully diversified consultations for {replaced_count} areas.")
