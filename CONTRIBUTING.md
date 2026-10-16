# Contributing to Todoist Clone

Thank you for your interest in contributing! This document provides guidelines for working with this project.

## Running Tests

This project uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/react) for testing. Tests are located in `src/__tests__/` and cover components including App, AddTask, Checkbox, Header, Projects, Sidebar, Tasks, and more.

### Prerequisites

Before running tests, install dependencies:

```bash
npm install
```

**Note:** This project uses node-sass 4, which requires a compatible Node version (typically Node 12.x or earlier). If you encounter installation issues, ensure your Node version is compatible.

### Running Tests in Watch Mode

For development, run tests in watch mode to automatically re-run tests as you make changes:

```bash
npm test
```

This will start the test runner in interactive watch mode, allowing you to run specific tests or all tests.

### Running Tests in Single-Run Mode

For CI/CD pipelines or one-time test execution:

```bash
CI=true npm test -- --watchAll=false
```

### Test Coverage

The project is configured with Jest coverage thresholds requiring 90% coverage for branches, functions, lines, and statements. Coverage reports are generated in HTML and text formats. The following files are excluded from coverage collection:

- `src/index.js`
- `src/firebase.prod.js`
- `src/hooks/*.js`
- `src/context/*.js`
