import { test, expect } from '@playwright/test';

test('Todoを完了状態にできることを確認する', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  // Todoを1件追加
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Walk dog');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  // 追加したTodoを完了状態にする
  await page.getByRole('checkbox', { name: 'Toggle Todo' }).click();

  // 完了状態になったことを確認
  await expect(page.getByTestId('todo-item').filter({ hasText: 'Walk dog' })).toHaveClass(/completed/);
});