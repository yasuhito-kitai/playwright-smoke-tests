# Playwright Smoke Tests (TodoMVC)

公開サンプルアプリ（TodoMVC）に対して、PlaywrightでE2Eスモークテストを作成しました。  
GitHub Actionsにより、GitHubへpushすると自動でテストが実行されます（CI）。

## 対象
- URL: https://demo.playwright.dev/todomvc/#/

## 目的
- 変更後に「致命的に壊れていないか」を最短で確認するため
- 最小セットのスモークテスト（3本）を自動化し、push時に自動実行される状態にするため

## テスト内容（スモーク）
- Todoを追加できること（`tests/smoke/test_1_add.spec.ts`）
- Todoを完了状態にできること（`tests/smoke/test_2_complete.spec.ts`）
- Todoを削除できること（`tests/smoke/test_3_delete.spec.ts`）

## 実行方法（ローカル）
依存関係のインストール:
```bash
npm ci
npx playwright install