import { test as base } from '@playwright/test';

import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CartPage } from '../pages/CartPage';

type Pages = {
  inventoryPage: InventoryPage;
  checkoutPage: CheckoutPage;
  cartPage: CartPage;
};

export const test = base.extend<Pages>({
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { expect } from '@playwright/test';