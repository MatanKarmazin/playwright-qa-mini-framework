import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  
  async fillCheckoutInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
  }

  async continueCheckout() {
    await this.page.locator('[data-test="continue"]').click();
  }

  async finishCheckout() {
    await this.page.locator('[data-test="finish"]').click();
  }

  async expectCheckoutComplete() {
    await expect(this.page.locator('.complete-header'))
      .toContainText('Thank you for your order');
  }

  async expectErrorMessage(message: string) {
    await expect(this.page.locator('[data-test="error"]'))
      .toContainText(message);
  }
}