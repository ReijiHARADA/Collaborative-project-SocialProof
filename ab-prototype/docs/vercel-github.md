# GitHub 連携で Vercel に自動デプロイする

## 前提

- コードが GitHub の **`main`**（または運用ブランチ）に push されていること
- リポジトリは **モノレポ**で、このアプリは **`ab-prototype/` サブフォルダ**にある

## 1. Vercel でプロジェクトを作成

1. [Vercel Dashboard](https://vercel.com/dashboard) にログインする  
2. **Add New… → Project**  
3. **Import Git Repository** で `Collaborative-project-SocialProof`（または該当リポジトリ）を選択する  
4. **Configure Project** で次を設定する  

| 項目 | 設定値 |
|------|--------|
| **Root Directory** | `ab-prototype` に変更（「Edit」を押してサブフォルダを指定） |
| Framework Preset | Next.js（自動検出でよい） |
| Build Command | 既定の `next build` のまま |
| Output Directory | 既定のまま（Next.js は通常空欄） |
| Install Command | 既定の `npm install` のまま |

5. **Environment Variables** に必要なら **`LOG_ENDPOINT`**（GAS の URL）を追加する  
6. **Deploy** を実行する  

以後、**指定したブランチ（例: `main`）へ push するたび**に、Vercel が自動でビルド・本番デプロイする（Production Branch の設定に従う）。

## 2. 自動デプロイの動き

- **`main` へ merge / push** → 本番（Production）デプロイが走る想定  
- **プルリクエスト** → 多くの場合プレビュー URL が付く（Vercel の Git 連携の既定）

Production Branch は **Settings → Git → Production Branch** で `main` などに合わせる。

## 3. トラブルシュート

- **ビルドがルートを誤る**: Root Directory が **`ab-prototype`** になっているか確認する  
- **`LOG_ENDPOINT` 未設定**: ログは localStorage フォールバックのみ（アプリは動く）  
