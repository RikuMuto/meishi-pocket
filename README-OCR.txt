名刺ポケット OCR v1.1　iPhone向け更新版

【重要】このZIPにはOCRエンジン・認識辞書そのものは同梱されていません。
ネットワーク制限のため取得できなかったため、GitHub Actionsで自動取得し、あなたの公開リポジトリ内に置く仕組みを追加しました。

更新方法
1. 名刺ポケットから既存の名刺のJSONバックアップを保存。
2. GitHubの meishi-pocket リポジトリで、index.html / sw.js / manifest.webmanifest を上書きアップロード。
   icon.png は変更なし。README-OCR.txt は任意。
3. .github/workflows/prepare-ocr.yml をGitHubリポジトリへ追加します。
   iPhoneからは「Add file → Create new file」でファイル名を
   .github/workflows/prepare-ocr.yml と指定し、ZIP中の内容を貼り付けてCommit changes。
4. Actionsの「Prepare offline OCR assets」が成功し、ocr/フォルダに
   認識エンジン・日本語/英語モデルが追加されたことを確認。
5. GitHub Pagesの新しい公開が完了したら名刺ポケットをオンラインで一度開き、
   OCRボタンを1回実行して各ファイルを端末内に読み込む。
6. 機内モード＋Wi-Fiオフで再度OCRを試して確認。

【仕様】写真はiPhone内でOCR処理。外部OCR APIに送信しません。
自動項目判定はヒューリスティックのため、すべての項目を必ず確認してください。
既存の保存DB（MeishiPocketLocal、cards、schema v1）はそのままです。
注意：読み取りにはメモリと時間がかかり、古いiPhoneでは失敗する場合があります。
注意：サイトのデータを消すと名刺データ・キャッシュが消える場合があります。
