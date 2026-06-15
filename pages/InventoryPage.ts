import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  async open() {
    await this.goto('/inventory.html');
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.page.locator('.inventory_list')).toBeVisible();
  }

  async addProductToCart(productName: string) {
    const product = this.page.locator('.inventory_item').filter({
      hasText: productName,
    });

    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  async openCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}