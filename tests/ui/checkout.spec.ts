import { test } from '../../fixtures/test-fixtures';

import { checkoutData } from '../../data/checkoutData';
import { products } from '../../data/products';

test('checkout form requires first name', async ({
  page,
  inventoryPage,
  checkoutPage,
  cartPage,
}) => {
  await page.goto('/inventory.html');

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

test('successful checkout flow', async ({
  page,
  inventoryPage,
  checkoutPage,
  cartPage,
}) => {
  await page.goto('/inventory.html');

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