import { expect, test } from '@playwright/test';
import { UsersApiClient } from '../../api/clients/UsersApiClient';

test('@api GET users returns a response matching the user schema', async ({
  request,
}) => {
  const usersApiClient = new UsersApiClient(request);

  const users = await usersApiClient.getUsers();

  expect(users.length).toBeGreaterThan(0);
  expect(users[0]?.email).toBeTruthy();
});
