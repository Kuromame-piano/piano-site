import re

# Load areas.ts
file_path = 'src/data/areas.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replacement pairs
replacements = [
    # 1. toyosu
    (
        'metaSnippet: "マンションでの電子ピアノレッスンにも対応。送迎不要でご自宅がレッスン室に。",',
        'metaSnippet: "マンションでの電子ピアノレッスンにも対応。通学不要でご自宅がレッスン室に。",'
    ),
    # 2. ariake
    (
        """        features: [
            {
                title: "送迎の負担ゼロで、ゆとりのある時間を",
                description: "習い事の送迎にかかる時間はゼロ。その分、ご家族での団らんや家事など、時間を有効にお使いいただけます。",
            },
            {
                title: "小さなお子さま向けのレッスン",
                description: "小さなお子さまには、リズム遊びや歌を取り入れた楽しい導入レッスンをご用意しております。音楽に触れる第一歩をお手伝いいたします。",
            },
        ],""",
        '        features: [],'
    ),
    # 3. shinonome meta
    (
        'metaSnippet: "マンションでの電子ピアノレッスンに対応。送迎不要の出張専門ピアノ教室。",',
        'metaSnippet: "マンションでの電子ピアノレッスンに対応。通学不要の出張専門ピアノ教室。",'
    ),
    # 4. shinonome features
    (
        """        features: [
            {
                title: "送迎の負担ゼロで、ゆとりのある時間を",
                description: "習い事の送迎にかかる時間はゼロ。その分、ご家族での団らんや家事など、時間を有効にお使いいただけます。",
            },
            {
                title: "電子ピアノにも対応",
                description: "マンションにお住まいの方でも安心。電子ピアノでのレッスンにも対応し、正しいタッチや表現力を身につけられるよう指導いたします。",
            },
        ],""",
        '        features: [],'
    ),
    # 5. tsukishima features
    (
        """        features: [
            {
                title: "ライフスタイルに合わせたレッスン",
                description: "土日祝日や平日の夕方など、ご家庭のライフスタイルに合わせてレッスン日時をご相談いただけます。柔軟なスケジュールをご提案いたします。",
            },
            {
                title: "兄弟姉妹で連続レッスンも可能",
                description: "お兄ちゃん・お姉ちゃんのレッスンの後に下のお子様のレッスンを行うなど、連続して受講いただけます。送迎の手間がないため、効率的です。",
            },
        ],""",
        '        features: [],'
    ),
    # 6. tsukishima areaGuide
    (
        """        areaGuide: `月島でレッスンを続けるために大切なのは、<strong>きょうだいで習う場合は続けて枠を入れて、お迎えが一度で済むように組むこと</strong>です。<br><br>たとえば「上の子が17時から、下の子が17時45分から」というように続けて設定することができます。お子さんが複数いるご家庭では、習い事の曜日がバラバラだと親御さんの負担が大きくなるので、まとめて一本化することが長く続けるコツです。<br><br>レッスン後は「今週練習するのはここだけ」とポイントを絞ってお伝えするので、子どもたちそれぞれのペースに合わせながら、どちらも無理なく続けられます。`,""",
        """        areaGuide: `月島エリアでレッスンを長く続けるポイントは、<strong>「ご都合に合わせた柔軟なスケジュール設定」</strong>です。月1回からのレッスンも可能ですので、お仕事やプライベートの状況に合わせて無理のないペースで、趣味としてのピアノをお楽しみいただけます。自宅までお伺いするため、お出かけの準備や移動時間もかからず、リラックスして受講できます。`,"""
    ),
    # 7. tsukishima meta
    (
        'metaSnippet: "送迎不要・兄弟連続レッスンも可能。ご自宅で完結する出張ピアノ教室。",',
        'metaSnippet: "通学不要・自宅スタジオ対応。ご自宅で完結する出張ピアノ教室。",'
    ),
    # 8. kachidoki features
    (
        """        features: [
            {
                title: "送迎の負担ゼロ",
                description: "講師がご自宅まで伺うため、送迎の時間も手間もかかりません。雨の日や寒い日でも安心してレッスンを受けられます。"
            },
            {
                title: "下のお子さまが小さくても安心",
                description: "ご自宅でのレッスンのため、下のお子さまが小さくて外出が難しいご家庭でも、安心してレッスンを受けさせることができます。"
            }
        ],""",
        '        features: [],'
    ),
    # 9. kachidoki areaGuide
    (
        """        areaGuide: `勝どきでレッスンを続けるために大切なのは、<strong>保育園や学童のお迎え後から夕食の前に、短く入れられる曜日を探すこと</strong>です。<br><br>平日の夕方はどのご家庭もバタバタしがちですが、自宅まで来るので「着替えて出かける」時間がかかりません。帰ってきてすぐ始められる形が作りやすいのがこのレッスンのよいところです。体験のときに普段の夕方の流れを聞かせていただいて、夕食の支度に影響しない時間帯を一緒に見つけます。<br><br>レッスン後は「今週練習するのはここだけ」とポイントを絞ってお伝えするので、夜のスケジュールが詰まっている日でも、子どもが自分で練習を進められるようになります。`,""",
        """        areaGuide: `勝どきエリアでレッスンを長く続けるポイントは、<strong>「自宅レッスンならではの移動ゼロ時間を活かすこと」</strong>です。平日の仕事帰りや休日の空き時間など、ご自宅にいながらそのままレッスンを始められます。お好きな曲を仕上げたい、表現やペダルを確認したいなど、一人ひとりの好みに合わせてサポートします。`,"""
    ),
    # 10. harumi features
    (
        """        features: [
            {
                title: "送迎の負担ゼロ",
                description: "講師がご自宅まで伺うため、送迎の時間も手間もかかりません。雨の日や寒い日でも安心してレッスンを受けられます。"
            },
            {
                title: "初心者でも安心の導入指導",
                description: "小さなお子様にはリズム遊びや歌から、大人の方には憧れの一曲から。どなたでも無理なくピアノを始めていただけます。"
            }
        ],""",
        '        features: [],'
    ),
    # 11. harumi meta
    (
        'metaSnippet: "晴海フラッグ対応。電子ピアノOK・送迎不要 of 出張ピアノ教室。",',  # Note: there is no 'of' in original, let's fix below
        'metaSnippet: "晴海フラッグ対応。電子ピアノOK・通学不要の出張ピアノ教室。"'
    ),
    # Let's write the exact one for harumi meta
    (
        'metaSnippet: "晴海フラッグ対応。電子ピアノOK・送迎不要の出張ピアノ教室。",',
        'metaSnippet: "晴海フラッグ対応。電子ピアノOK・通学不要の出張ピアノ教室。",'
    ),
    # 12. tsukuda features
    (
        """        features: [
            {
                title: "送迎の負担ゼロでゆとりの時間を",
                description: "ご自宅でのレッスンのため、送迎の時間や手間が一切かかりません。その分、他の用事や宿題などに時間を有効活用できます。"
            },
            {
                title: "一人ひとりに合わせた導入指導",
                description: "小さなお子様にはリズム遊びや歌から、大人の方には憧れの一曲から。どなたでも無理なくピアノを始めていただけます。"
            }
        ],""",
        '        features: [],'
    ),
    # 13. tsukuda meta
    (
        'metaSnippet: "未就学のお子様から大人まで対応。個性を伸ばす丁寧な出張ピアノレッスン。",',
        'metaSnippet: "大人向けの出張専門ピアノレッスン。お好きな曲や基礎をご自宅やスタジオで丁寧にサポート。",'
    ),
    # 14. kiyosumi-shirakawa features
    (
        """        features: [
            {
                title: "送迎の手間がなく効率的",
                description: "講師がご自宅までお伺いするため、送迎にかかる時間と手間がゼロになり、忙しいご家庭でも継続しやすい環境が整います。"
            },
            {
                title: "初心者でも安心の導入レッスン",
                description: "小さなお子様にはリズム遊びや歌から、大人の方には憧れの一曲から。どなたでも無理なくピアノを始めていただけます。"
            }
        ],""",
        '        features: [],'
    ),
    # 15. kiyosumi-shirakawa meta
    (
        'metaSnippet: "清澄白河駅近く。お子様から大人まで対応の出張ピアノ教室。",',
        'metaSnippet: "清澄白河駅近く。大人の初心者・再開者の出張専門ピアノレッスン。",'
    ),
    # 16. hirano features
    (
        """        features: [
            {
                title: "小さなお子様も安心の導入レッスン",
                description: "小さなお子様にはリズム遊びや歌から始めてまいります。早い段階から楽しく音楽に触れることで、豊かな感性を育んでいただけます。"
            }
        ],""",
        '        features: [],'
    ),
    # 17. miyoshi features
    (
        """        features: [
            {
                title: "小さなお子様も安心 of 導入レッスン",
                description: "小さなお子様にはリズム遊びや歌から始めてまいります。音楽に触れる第一歩をお手伝いします。"
            }
        ],""",  # Fix below for exact
        '        features: [],'
    ),
    (
        """        features: [
            {
                title: "小さなお子様も安心の導入レッスン",
                description: "小さなお子様にはリズム遊びや歌から始めてまいります。音楽に触れる第一歩をお手伝いします。"
            }
        ],""",
        '        features: [],'
    ),
    # 18. sumiyoshi meta
    (
        'metaSnippet: "住吉駅・猿江エリア対応。送迎不要の出張ピアノ教室。",',
        'metaSnippet: "住吉駅・猿江エリア対応。通学不要の出張ピアノレッスン。",'
    ),
    # 19. sumiyoshi features
    (
        """        features: [
            {
                title: "小さなお子様も安心の導入レッスン",
                description: "小さなお子様にはリズム遊びや歌から始めてまいります。初めてでも基礎から丁寧にレッスンを進めます。"
            }
        ],""",
        '        features: [],'
    ),
    # 20. monzen-nakacho features
    (
        """        features: [
            {
                title: "ご家庭のペースを尊重",
                description: "学校行事や習い事との両立を考慮し、無理のないスケジュールでレッスンを進めてまいります。長く続けていただくことを大切にしております。",
            },
            {
                title: "弾きたい曲から始められます",
                description: "基礎練習も大切にしながら、生徒様が弾きたい曲にもチャレンジしていただけます。楽しみながら着実に上達できる指導を心がけております。",
            },
        ],""",
        '        features: [],'
    ),
]

# Apply replacements
for target, replacement in replacements:
    if target in content:
        content = content.replace(target, replacement)
        print(f"Successfully replaced target block.")
    else:
        # Try finding with flexible spacing/newlines
        # Compile a simplified version of target to search or warn
        print(f"Warning: Target block not found in exact form.")

# Save back to areas.ts
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Finished rewrite_areas_for_adults.py execution.")
