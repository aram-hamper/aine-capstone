# Project File Inventory

This document provides a comprehensive listing of all tracked files in the Todoist clone project, with brief descriptions of their purpose and content.

## File Listing

### Configuration Files

- `.eslintrc.json` - ESLint configuration with Airbnb style guide, Prettier integration, and React/JSX rules
- `.prettierrc.json` - Prettier code formatter configuration with 80-char line width and trailing commas
- `.gitignore` - Git ignore patterns for dependencies, build artifacts, environment files, and logs
- `package.json` - Project metadata, dependencies (React, Firebase, Moment), dev tools, and test configuration
- `yarn.lock` - Yarn package manager lock file for reproducible dependency versions

### Documentation & Licensing

- `README.md` - Project overview, tutorial reference, setup instructions, and testing guide
- `LICENSE.txt` - MIT License with copyright notice for Karl Hadwen

### Assets

- `todoist-preview.png` - Screenshot preview image of the Todoist clone application

### Public Directory

- `public/index.html` - HTML entry point with root div, meta tags, and Normalize.css CDN link
- `public/favicon.ico` - Browser favicon for the application
- `public/images/logo.png` - Todoist logo image used in the application header

### Source - Root Level

- `src/index.js` - React application entry point that renders App component to DOM
- `src/App.js` - Main application component with dark mode state and context providers
- `src/App.scss` - Global application styles including dark mode theme

### Source - Constants

- `src/constants/index.js` - Collated task definitions (Inbox, Today, Next 7 Days)

### Source - Helpers

- `src/helpers/index.js` - Utility functions for project/task lookup, collated task checking, and ID generation

### Source - Hooks

- `src/hooks/index.js` - Custom React hooks for tasks and projects with Firebase Firestore integration

### Source - Context

- `src/context/index.js` - Barrel export for context providers and hooks
- `src/context/projects-context.js` - React Context for managing projects state across the application
- `src/context/selected-project-context.js` - React Context for tracking the currently selected project

