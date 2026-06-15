import { expect, test } from '@playwright/test';

test('@network replaces an inventory response with a controlled fixture', async ({
  page,
}) => {
  const mockedProductName = 'Mocked QA Product';

  await page.route('**/inventory.html', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'text/html',
      body: `
        <!doctype html>
        <html lang="en">
          <head><title>Mocked inventory</title></head>
          <body>
            <main class="inventory_list">
              <article class="inventory_item">${mockedProductName}</article>
            </main>
          </body>
        </html>
      `,
    });
  });

  await page.goto('/inventory.html');

  await expect(page.locator('.inventory_list')).toBeVisible();
  await expect(page.getByText(mockedProductName)).toBeVisible();
});
