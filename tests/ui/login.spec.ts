import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { users } from '../../data/users';

test('successful login redirects user to inventory page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();

  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await inventoryPage.expectInventoryPageLoaded();
});

test('invalid login shows validation error', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    users.invalidUser.username,
    users.invalidUser.password
  );

  await loginPage.expectErrorMessage(
    'Username and password do not match'
  );
});