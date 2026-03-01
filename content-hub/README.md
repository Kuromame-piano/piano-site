# NEWS記事 コンテンツ制作ガイド

髙橋遊月ピアノ教室サイトのNEWS記事を効率的に制作するためのワークフローガイドです。

---

## 記事制作ワークフロー

### Step 1: ネタを選ぶ
`article-ideas.md` から記事のネタを選びます。
- 優先度「高」のものから着手
- `content-calendar.md` で季節に合ったテーマを確認
- 直近で検索需要が高まるトピックを優先

### Step 2: AIで記事を生成（おすすめ！）
`prompts/` フォルダのプロンプトを使えば、AIにコピペするだけで記事が生成できます。

| カテゴリ | プロンプトファイル |
|---------|-----------------|
| ピアノ練習のコツ | `prompts/piano-tips-prompt.md` |
| エリア紹介 | `prompts/area-guide-prompt.md` |
| 生徒の声 | `prompts/student-voice-prompt.md` |
| レッスンレポート | `prompts/lesson-report-prompt.md` |
| その他 | `prompts/universal-prompt.md` |

**使い方**: プロンプト内の `{{変数}}` を埋める → 全文コピー → ChatGPT/Claudeに貼り付け → 完成！

詳しくは `prompts/README.md` を参照してください。

### Step 2b: テンプレートから手動で書く場合
`templates/` フォルダから、記事カテゴリに合ったテンプレートを選びます。

| カテゴリ | テンプレートファイル |
|---------|-------------------|
| ピアノ練習のコツ | `templates/piano-tips.md` |
| エリア紹介 | `templates/area-guide.md` |
| 生徒の声・体験談 | `templates/student-voice.md` |
| レッスンレポート | `templates/lesson-report.md` |

テンプレートを `drafts/` フォルダにコピーし、ファイル名を `YYYY-MM-DD_記事スラッグ.md` に変更します。

```
例: drafts/2025-04-15_hajimete-piano-renshuu.md
```

### Step 3: キーワードを選定
`seo/keyword-list.md` からターゲットキーワードを選びます。
- メインキーワード: 1つ
- サブキーワード: 2〜3つ
- 下書きファイルのfront-matterに記入

### Step 4: SEO最適化して執筆
`seo/writing-guide.md` を参考に記事を執筆します。
- タイトルには `seo/title-formulas.md` のパターンを活用
- キーワードの自然な配置
- 見出し構成はテンプレートのガイドに従う
- CTAを適切な位置に配置

### Step 5: microCMSに入稿
記事が完成したら、microCMSに入稿します。

#### 入稿手順
1. [microCMS管理画面](https://your-service.microcms.io/) にログイン
2. 「NEWS」コンテンツ → 「新規作成」
3. 以下のフィールドを入力:
   - **タイトル**: 記事タイトル（60文字以内推奨）
   - **本文**: Markdownまたはリッチエディタで記事本文を入力
   - **カテゴリ**: 該当するカテゴリを選択
   - **サムネイル**: 記事のアイキャッチ画像をアップロード（推奨: 1200×630px）
   - **メタディスクリプション**: 120文字以内で記事の要約
4. 「プレビュー」で表示を確認
5. 問題なければ「公開」をクリック

### Step 6: アーカイブ
公開済みの記事ファイルを `drafts/` から `published/` に移動します。

```
mv drafts/2025-04-15_hajimete-piano-renshuu.md published/
```

---

## ディレクトリ構成

```
content-hub/
├── README.md                    # このファイル（使い方ガイド）
├── templates/                   # カテゴリ別記事テンプレート
│   ├── piano-tips.md           # ピアノ練習のコツ
│   ├── area-guide.md           # エリア紹介
│   ├── student-voice.md        # 生徒の声・体験談
│   └── lesson-report.md        # レッスンレポート
├── seo/                        # SEO戦略資料
│   ├── keyword-list.md         # 集客キーワードリスト
│   ├── title-formulas.md       # タイトルパターン集
│   └── writing-guide.md        # SEOライティングガイド
├── prompts/                    # AI記事生成プロンプト（コピペ用）
│   ├── README.md               # プロンプトの使い方
│   ├── piano-tips-prompt.md    # ピアノ練習のコツ記事生成
│   ├── area-guide-prompt.md    # エリア紹介記事生成
│   ├── student-voice-prompt.md # 生徒の声記事生成
│   ├── lesson-report-prompt.md # レッスンレポート生成
│   ├── universal-prompt.md     # 汎用記事生成
│   ├── title-generator-prompt.md    # タイトル案一括生成
│   ├── meta-description-prompt.md   # メタディスクリプション生成
│   └── rewrite-prompt.md      # 既存記事SEOリライト
├── content-calendar.md         # コンテンツカレンダー
├── article-ideas.md            # 記事ネタストック（100本）
├── drafts/                     # 下書きフォルダ
│   └── _template.md            # 下書き用ベーステンプレート
└── published/                  # 公開済みアーカイブ
    └── .gitkeep
```

## 記事制作のコツ

- **週1本ペース**を目標に継続する
- 1記事あたり**1,500〜3,000文字**を目安にする
- 必ず**体験レッスン申込み**への導線（CTA）を入れる
- 公開後はGoogle Search Consoleで検索順位をチェック
- 反応が良い記事のパターンを分析して横展開する
