import { APIRequestContext, expect } from '@playwright/test';

export class UsersApiClient {
  constructor(private request: APIRequestContext) {}

  async getUsers() {
    const apiBaseUrl = process.env.API_BASE_URL;

    if (!apiBaseUrl) {
      throw new Error('API_BASE_URL is not defined');
    }

    const response = await this.request.get(
      `${apiBaseUrl}/users`
    );

    expect(response.status()).toBe(200);

    return response.json();
  }
}