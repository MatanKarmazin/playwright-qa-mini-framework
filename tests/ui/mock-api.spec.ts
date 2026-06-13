import { test, expect } from '@playwright/test';

test('@api mock inventory api response', async ({ page }) => {
  await page.route('**/api/products', async route => {

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        {
          id: 1,
          name: 'Mocked Product',
          price: 999,
        },
      ]),
    });
  });

  await page.route('**/inventory.html', async route => {
    await route.continue();
  });

  await page.route('**/*.png', async route => {
    await route.abort();
  });

  await page.goto('/inventory.html');

  await expect(page.locator('.inventory_list'))
    .toBeVisible();
});