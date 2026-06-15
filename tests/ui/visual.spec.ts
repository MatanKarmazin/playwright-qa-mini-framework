import { expect, test } from '@playwright/test';

test.use({ storageState: { cookies: [], origins: [] } });

test('@visual login page visual regression test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('login-page.png');
});
