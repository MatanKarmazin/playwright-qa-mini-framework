import { users } from '../../data/users';
import { test } from '../../fixtures/test-fixtures';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('login tests', () => {
  test('successful login redirects user to inventory page', async ({
    loginPage,
    inventoryPage,
  }) => {
    await loginPage.open();
    await loginPage.login(users.validUser.username, users.validUser.password);
    await inventoryPage.expectLoaded();
  });

  test('invalid login shows validation error', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password,
    );
    await loginPage.expectErrorMessage('Username and password do not match');
  });
});
