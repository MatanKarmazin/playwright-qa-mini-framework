import { test, expect } from '@playwright/test';

test('GET users returns valid response', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(Array.isArray(body)).toBeTruthy();
  expect(body.length).toBeGreaterThan(0);

  expect(body[0]).toHaveProperty('email');
  expect(body[0]).toHaveProperty('name');
});