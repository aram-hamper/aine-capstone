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

### Source - Components - Layout

- `src/components/layout/Header.js` - Application header with logo, quick-add task button, and dark mode toggle
- `src/components/layout/Sidebar.js` - Navigation sidebar with collated tasks and projects list
- `src/components/layout/Content.js` - Main content wrapper combining Sidebar and Tasks components

### Source - Components - Feature

- `src/components/AddTask.js` - Task creation form with project and date selection overlays
- `src/components/Tasks.js` - Main tasks display component showing tasks for selected project
- `src/components/Checkbox.js` - Task completion checkbox component
- `src/components/AddProject.js` - Project creation form component
- `src/components/Projects.js` - Projects list display component
- `src/components/IndividualProject.js` - Individual project item with edit/delete actions
- `src/components/ProjectOverlay.js` - Overlay for selecting a project when adding tasks
- `src/components/TaskDate.js` - Date picker overlay for task due dates

### Source - Tests

- `src/__tests__/App.spec.js` - Unit tests for the main App component
- `src/__tests__/Header.spec.js` - Unit tests for the Header component
- `src/__tests__/Sidebar.spec.js` - Unit tests for the Sidebar navigation component
- `src/__tests__/Tasks.spec.js` - Unit tests for the Tasks display component
- `src/__tests__/AddTask.spec.js` - Unit tests for the AddTask form component
- `src/__tests__/AddProject.spec.js` - Unit tests for the AddProject form component
- `src/__tests__/Projects.spec.js` - Unit tests for the Projects list component
- `src/__tests__/IndividualProject.spec.js` - Unit tests for individual project items
- `src/__tests__/ProjectOverlay.spec.js` - Unit tests for the project selection overlay
- `src/__tests__/Checkbox.spec.js` - Unit tests for the task completion checkbox

### Source - Firebase Configuration

- `src/firebase.js.example` - Template for Firebase configuration with placeholder credentials

### Environment Files

- `.env` - Environment variables file (not tracked in git; contains sensitive credentials)

