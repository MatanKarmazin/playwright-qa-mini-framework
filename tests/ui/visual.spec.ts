import { test, expect } from '@playwright/test';

test('@visual login page visual regression test', async ({
  page,
}) => {
  await page.goto('https://www.saucedemo.com');

  await expect(page).toHaveScreenshot('login-page.png');
});