import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const knownViolationIds = new Set([
  'color-contrast',
  'landmark-one-main',
  'region',
  'page-has-heading-one',
]);

test.use({ storageState: { cookies: [], origins: [] } });

test('@accessibility login page has no unexpected accessibility violations', async ({
  page,
}, testInfo) => {
  await page.goto('/');

  const results = await new AxeBuilder({ page }).analyze();
  const unexpectedViolations = results.violations.filter(
    ({ id }) => !knownViolationIds.has(id),
  );

  await testInfo.attach('accessibility-results', {
    body: JSON.stringify(results.violations, null, 2),
    contentType: 'application/json',
  });

  expect(unexpectedViolations).toEqual([]);
});
