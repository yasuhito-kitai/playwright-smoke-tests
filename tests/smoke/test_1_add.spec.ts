import { test, expect } from '@playwright/test';
test('Todoを追加できることを確認する', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Buy milk');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
    await expect(page.getByText('Buy milk')).toBeVisible();
    });