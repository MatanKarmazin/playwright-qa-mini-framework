# Playwright QA Mini Framework

A maintainable end-to-end automation framework built with Playwright and
TypeScript. The project demonstrates reusable test architecture, clear
separation of responsibilities, and CI-ready quality controls.

## Highlights

- Page Object Model with selectors and UI actions encapsulated by page objects
- Typed fixtures that provide reusable page objects to tests
- Authentication state reuse across UI tests
- Dedicated UI, API, network mocking, accessibility, and visual tests
- Runtime API schema validation with Zod
- Centralized test data and environment-based configuration
- Chromium, Firefox, and WebKit coverage
- HTML reports, failure screenshots, retained videos, and retry traces
- CI pipeline with type checking, linting, formatting checks, tests, and
  report artifacts

## Project Structure

```text
api/
  clients/       Reusable API clients
  schemas/       Runtime response schemas
data/            Centralized test data
fixtures/        Typed Playwright fixtures
pages/           Page Objects
tests/
  api/           API tests
  ui/            UI, accessibility, network, and visual tests
```

## Setup

```bash
npm install
npx playwright install
cp .env.example .env
```

## Running Tests

```bash
npm test
npm run test:ci
npm run test:smoke
npm run test:api
npm run test:network
npm run test:accessibility
npm run test:visual
npm run test:headed
npm run test:ui
```

`test:ci` runs the full automated suite except visual snapshots, which are
environment-specific.

Targeted scripts run on Chromium or the dedicated API project for fast local
feedback. The full CI suite still validates UI behavior across Chromium,
Firefox, and WebKit.

## Quality Checks

```bash
npm run quality
npm run typecheck
npm run lint
npm run format:check
```

## Reports and Debugging

```bash
npm run report
```

Playwright generates an HTML report and captures screenshots and videos on
failure. On the first CI retry, it also records a trace. CI uploads the HTML
report as an artifact even when tests fail.

## Accessibility Baseline

The demo application contains documented accessibility violations. The
accessibility test treats them as an explicit baseline and fails when a new,
unexpected violation appears. The full scan is attached to the Playwright
report for review.

## CI Configuration

The GitHub Actions workflow expects these repository variables:

```text
BASE_URL=https://www.saucedemo.com
API_BASE_URL=https://jsonplaceholder.typicode.com
```

Each push and pull request runs quality checks followed by the CI test suite.
