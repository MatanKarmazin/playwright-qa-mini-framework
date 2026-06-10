import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('checkout form requires first name', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="continue"]').click();

  await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
});