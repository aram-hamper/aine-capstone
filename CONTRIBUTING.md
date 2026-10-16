# Contributing to Todoist Clone

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## Running Tests

This project uses [React Testing Library](https://testing-library.com/react) and Jest for testing.

### Prerequisites

First, install dependencies:

```bash
npm install
```

### Running Tests

To run tests in watch mode (useful during development):

```bash
npm test
```

To run tests in a single run (useful for CI/CD pipelines):

```bash
CI=true npm test -- --watchAll=false
```

### Test Structure

Tests are located in the `src/__tests__/` directory with `.spec.js` extensions. Each component has corresponding test files that verify functionality using React Testing Library's utilities like `render`, `fireEvent`, and `cleanup`.

### Coverage Requirements

This project enforces code coverage thresholds:

- **Branches**: 90%
- **Functions**: 90%
- **Lines**: 90%
- **Statements**: 90%

Coverage reports are generated in HTML and text formats when tests run.

### Node Version Compatibility

This is an older project that uses node-sass 4, which requires a compatible Node version. If you encounter issues during installation, ensure you're using a Node version that supports node-sass 4 (typically Node 12.x or earlier).
