import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  async expectInventoryPageLoaded() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.page.locator('.inventory_list')).toBeVisible();
  }

  async addProductToCart(buttonLocator: string) {
    await this.page.locator(buttonLocator).click();
  }

  async openCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}