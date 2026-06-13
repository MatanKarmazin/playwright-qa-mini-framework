import { APIRequestContext, expect } from '@playwright/test';

export class UsersApiClient {
  constructor(private request: APIRequestContext) {}

  async getUsers() {
    const response = await this.request.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    expect(response.status()).toBe(200);

    return response.json();
  }
}