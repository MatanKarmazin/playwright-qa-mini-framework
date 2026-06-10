import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  async expectProductInCart(productName: string) {
    await expect(this.page.locator('.inventory_item_name'))
      .toContainText(productName);
  }

  async clickCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }
}