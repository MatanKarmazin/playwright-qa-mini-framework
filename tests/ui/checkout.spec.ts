import { checkoutData } from '../../data/checkoutData';
import { products } from '../../data/products';
import { test } from '../../fixtures/test-fixtures';

test.describe('@smoke @checkout checkout tests', () => {
  test.beforeEach(async ({ inventoryPage }) => {
    await inventoryPage.open();
    await inventoryPage.addProductToCart(products.backpack.name);
    await inventoryPage.openCart();
  });

  test('checkout form requires first name', async ({
    cartPage,
    checkoutPage,
  }) => {
    await cartPage.expectProductInCart(products.backpack.name);
    await cartPage.clickCheckout();
    await checkoutPage.continueCheckout();
    await checkoutPage.expectErrorMessage('First Name is required');
  });

  test('successful checkout flow', async ({ cartPage, checkoutPage }) => {
    await cartPage.expectProductInCart(products.backpack.name);
    await cartPage.clickCheckout();
    await checkoutPage.fillCheckoutInformation(checkoutData.validCustomer);
    await checkoutPage.continueCheckout();
    await checkoutPage.finishCheckout();
    await checkoutPage.expectCheckoutComplete();
  });
});