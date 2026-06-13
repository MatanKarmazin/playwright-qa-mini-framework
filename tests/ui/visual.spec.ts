import { test, expect } from '@playwright/test';

test('@visual login page visual regression test', async ({
  page,
}) => {
  await page.goto('/');

  await expect(page).toHaveScreenshot('login-page.png');
});