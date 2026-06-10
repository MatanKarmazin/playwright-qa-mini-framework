# Playwright QA Mini Framework

A lightweight end-to-end automation framework built with Playwright and TypeScript.

This project demonstrates modern QA Automation practices including:

* Page Object Model (POM)
* UI testing
* API testing
* Test data separation
* HTML reporting
* Screenshots and video recording on failures
* Reusable test architecture



## Tech Stack

* TypeScript
* Playwright
* Node.js
* HTML Reports



## Features

### UI Testing

* Login validation
* Invalid login scenarios
* Add product to cart
* Checkout validation
* Successful checkout flow

### API Testing

* REST API validation
* Response assertions
* JSON response verification

### Framework Features

* Page Object Model architecture
* Centralized test data
* Environment configuration support
* Screenshots on failure
* Video recording on failure
* Trace collection on retry
* HTML reporting



## Installation

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```



## Running Tests

Run all tests:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run test:headed
```

Run Playwright UI mode:

```bash
npm run test:ui
```

Open HTML report:

```bash
npm run report
```



## Reports

The framework automatically generates:

* HTML reports
* Screenshots on failures
* Video recordings on failures
* Trace files on retries



## Future Improvements

* GitHub Actions CI integration
* Parallel execution optimization
* Multi-browser testing
* Fixtures
* API schema validation
* Allure reporting
* Environment-based configurations
* Test tagging and filtering