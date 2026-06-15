import { APIRequestContext, expect } from '@playwright/test';
import { User, usersSchema } from '../schemas/user.schema';

export class UsersApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async getUsers(): Promise<User[]> {
    const apiBaseUrl = process.env.API_BASE_URL;

    if (!apiBaseUrl) {
      throw new Error('API_BASE_URL is not defined');
    }

    const response = await this.request.get(`${apiBaseUrl}/users`);
    expect(response.status()).toBe(200);

    return usersSchema.parse(await response.json());
  }
}