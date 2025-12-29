import { test, expect } from '@playwright/test';

test('Todoを削除できることを確認する', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  // Todoを1件追加
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Take out trash');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  // Todo行にホバーして削除ボタンを表示
  const todoItem = page.getByTestId('todo-item').filter({ hasText: 'Take out trash' });
  await todoItem.hover();

  // 削除
  await todoItem.getByRole('button').click();

  // 画面から消えたことを確認
  await expect(page.getByText('Take out trash')).toHaveCount(0);
});