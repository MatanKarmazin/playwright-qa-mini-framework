import { test as setup } from '@playwright/test';
import { users } from '../data/users';
import { LoginPage } from '../pages/LoginPage';

const authFile = 'playwright/.auth/user.json';

setup('authenticate user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(users.validUser.username, users.validUser.password);
  await page.context().storageState({ path: authFile });
});
