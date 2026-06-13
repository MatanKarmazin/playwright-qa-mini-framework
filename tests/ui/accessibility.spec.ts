import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('@accessibility login page accessibility scan', async ({
  page,
}) => {
  await page.goto('/');

  const accessibilityScanResults = await new AxeBuilder({
    page,
  }).analyze();

  console.log(
    `Accessibility violations found: ${accessibilityScanResults.violations.length}`
  );

  expect(accessibilityScanResults.violations.length)
    .toBeLessThanOrEqual(5);

  const violationIds = accessibilityScanResults.violations.map(
    violation => violation.id
  );

  expect(violationIds).toContain('region');
});