import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

type CheckoutInformation = {
  firstName: string;
  lastName: string;
  postalCode: string;
};

export class CheckoutPage extends BasePage {
  async fillCheckoutInformation(information: CheckoutInformation) {
    await this.page.getByTestId('firstName').fill(information.firstName);
    await this.page.getByTestId('lastName').fill(information.lastName);
    await this.page.getByTestId('postalCode').fill(information.postalCode);
  }

  async continueCheckout() {
    await this.page.getByTestId('continue').click();
  }

  async finishCheckout() {
    await this.page.getByTestId('finish').click();
  }

  async expectCheckoutComplete() {
    await expect(this.page.locator('.complete-header')).toContainText(
      'Thank you for your order',
    );
  }

  async expectErrorMessage(message: string) {
    await expect(this.page.getByTestId('error')).toContainText(message);
  }
}
