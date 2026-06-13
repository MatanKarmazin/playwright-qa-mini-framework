import { test, expect } from '@playwright/test';
import { UsersApiClient } from '../../api/clients/UsersApiClient';

test('@api GET users returns valid response', async ({ request }) => {
  const usersApiClient = new UsersApiClient(request);

  const users = await usersApiClient.getUsers();

  expect(Array.isArray(users)).toBeTruthy();
  expect(users.length).toBeGreaterThan(0);

  expect(users[0]).toHaveProperty('email');
  expect(users[0]).toHaveProperty('name');
});