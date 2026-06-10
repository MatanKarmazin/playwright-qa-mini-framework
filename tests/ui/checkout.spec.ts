import { test } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { CartPage } from '../../pages/CartPage';

import { users } from '../../data/users';
import { checkoutData } from '../../data/checkoutData';
import { products } from '../../data/products';

test('checkout form requires first name', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();

  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await inventoryPage.addProductToCart(
    products.backpack.addToCartButton
  );

  await inventoryPage.openCart();

  await cartPage.expectProductInCart(
    products.backpack.name
  );

  await cartPage.clickCheckout();

  await checkoutPage.continueCheckout();

  await checkoutPage.expectErrorMessage(
    'First Name is required'
  );
});

test('successful checkout flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();

  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await inventoryPage.addProductToCart(
    products.backpack.addToCartButton
  );

  await inventoryPage.openCart();

  await cartPage.expectProductInCart(
    products.backpack.name
  );

  await cartPage.clickCheckout();

  await checkoutPage.fillCheckoutInformation(
    checkoutData.validCustomer.firstName,
    checkoutData.validCustomer.lastName,
    checkoutData.validCustomer.postalCode
  );

  await checkoutPage.continueCheckout();

  await checkoutPage.finishCheckout();

  await checkoutPage.expectCheckoutComplete();
});