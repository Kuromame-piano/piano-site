import re
import json

def main():
    file_path = "c:/Users/S6sak/yuzuki-site/src/data/areas.ts"
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    new_faqs = """    faqs: [
        {
            question: "大人の初心者で楽譜も読めませんが、基礎からレッスンを受けられますか？",
            answer: "もちろんです。当教室は大人になってから初めてピアノに触れる方も多く受講されています。楽譜の読み方や指の動かし方など、基礎からご自身のペースに合わせて丁寧に指導いたします。"
        },
        {
            question: "子どもの頃に習っていたきりでブランクが長いのですが、再開できますか？",
            answer: "はい、大歓迎です。昔の感覚を取り戻しながら、お好きな曲や弾いてみたい曲を中心に、無理のないペースでレッスンを進めていくことができます。"
        },
        {
            question: "自宅にピアノがありません。電子ピアノでも大丈夫ですか？また、近隣スタジオでの受講も可能ですか？",
            answer: "はい、電子ピアノ（88鍵盤・タッチ強弱機能付きを推奨）でも十分にレッスン可能です。ご自宅での受講が難しい場合は、お近くの音楽スタジオをレンタルしてレッスンを行うこともできます（別途スタジオ代がかかります）。"
        },
        {
            question: "仕事や家庭の予定が不規則なのですが、都合に合わせて続けられますか？",
            answer: "はい、固定の曜日・時間での受講だけでなく、月ごとにレッスン日時を相談して決めることも可能です。お仕事帰りや休日の空き時間など、ライフスタイルに合わせて柔軟に対応いたします。"
        },
        {
            question: "子ども向けの教室というより、大人が落ち着いて受講できる環境を探しています。",
            answer: "当教室は大人の方のレッスンを主軸としております。教養や趣味としてじっくりピアノと向き合いたい方に寄り添い、丁寧で落ち着いた雰囲気でのレッスンを提供しています。"
        },
        {
            question: "講師との相性が不安です。体験レッスンの前にLINEで相談することはできますか？",
            answer: "はい、もちろん大丈夫です。「自分の目標に合ったレッスンができそうか」「指定の場所まで出張可能か」など、どんな些細なことでも公式LINEから1対1でお気軽にご相談いただけます。しつこい勧誘もございませんのでご安心ください。"
        }
    ],"""

    # We need to replace the faqs array in every area object.
    # The current faqs array looks like:
    #     faqs: [
    #         {
    #             question: "...",
    #             answer: "..."
    #         }, ...
    #     ],
    # We can use regex to find and replace it.
    
    pattern = re.compile(r'    faqs: \[\s*\{\s*question:.*?\}\s*\],\n', re.DOTALL)
    
    # We should make sure we don't accidentally match beyond the faqs array.
    # Actually, a better regex is one that matches 'faqs: [' up to '],' that is indented.
    
    # Let's do a non-greedy match for the faqs block.
    # It starts with '    faqs: [' and ends with '    ],'
    pattern2 = re.compile(r'    faqs: \[\n(?:        \{\n            question: ".*?",\n            answer: ".*?"\n        \},?\n)*    \],', re.DOTALL)
    
    new_content = pattern2.sub(new_faqs.strip(), content)
    
    # Wait, the above regex might be fragile if the formatting varies.
    # Let's just use string parsing or a more robust regex.
    # We know the structure is exactly:
    #     faqs: [
    #         {
    #             question: "...",
    #             answer: "..."
    #         },
    #         ...
    #     ],
    # We can find `faqs: [` and then find the matching closing `],`
    
    out_content = ""
    i = 0
    while i < len(content):
        # find '    faqs: ['
        idx = content.find("    faqs: [\n", i)
        if idx == -1:
            out_content += content[i:]
            break
            
        out_content += content[i:idx]
        
        # find the end of the faqs array which is '    ],\n' or similar.
        # to be safe, find the next '    uniqueContent:' which comes right after faqs.
        idx_next = content.find("    uniqueContent:", idx)
        if idx_next == -1:
            # Fallback if something goes wrong
            idx_end = content.find("    ],", idx)
            idx_next = idx_end + 7
            
        # Add the new faqs
        out_content += new_faqs + "\n"
        
        i = idx_next

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(out_content)

if __name__ == "__main__":
    main()
