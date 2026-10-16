# Context Budget Check - File Summary

**Date:** Context budget check #132  
**Files Read:** 7 (in order)  
**Tests Run:** None - tests were not executed

## Files Read

1. **README.md** – Project documentation for a Todoist clone
2. **package.json** – Project dependencies and configuration
3. **src/components/AddTask.js** – Task creation component
4. **src/components/layout/Sidebar.js** – Navigation sidebar component
5. **src/__tests__/AddProject.spec.js** – AddProject component tests
6. **src/__tests__/Sidebar.spec.js** – Sidebar component tests
7. **src/__tests__/AddTask.spec.js** – AddTask component tests

## App Purpose

A Todoist clone built with React, Custom Hooks, Context API, Firebase Firestore, and React Testing Library. Features include task management, project organization, dark mode toggle (pizza icon), and date-based task collation.

## AddTask Component (src/components/AddTask.js)

**Purpose:** Enables users to create new tasks with optional date and project assignment.

**Key Features:**
- Manages internal state for: task content, taskDate, project selection, and UI overlays (showMain, showProjectOverlay, showTaskDate)
- Uses `useSelectedProjectValue()` context hook to access the currently selected project
- `addTask()` function validates that both task content and projectId exist before adding to Firebase Firestore 'tasks' collection
- Auto-generates collated dates for special projects:
  - 'TODAY': current day
  - 'NEXT_7': 7 days ahead
- Renders task input field, date/project selection buttons, and quick-add options
- Supports both click and keyboard (Enter key) interactions for accessibility

## Sidebar Component (src/components/layout/Sidebar.js)

**Purpose:** Provides main navigation for the application with collated task views and project management.

**Key Features:**
- Uses context hooks: `useSelectedProjectValue()` and `useProjectsValue()`
- Displays three collated task categories:
  - Inbox: all tasks
  - Today: tasks due today
  - Next 7 days: tasks due within 7 days
- Manages local state for active project selection and projects visibility toggle
- Renders projects list (via `<Projects />` component) and "Add Project" button
- Handles project selection and deletion logic
- Supports both click and keyboard (Enter key) interactions for accessibility
- Chevron icon rotates to indicate projects section collapse/expand state

## Test Files Coverage

**AddProject.spec.js (src/__tests__/AddProject.spec.js):**
- Tests rendering of AddProject component
- Tests adding a project via form input and submit button
- Tests canceling project creation via click and keyboard (Enter key)
- Tests toggling project overlay visibility
- Mocks context hooks and Firebase Firestore

**Sidebar.spec.js (src/__tests__/Sidebar.spec.js):**
- Tests rendering of Sidebar component
- Tests switching between collated task views (Inbox, Today, Next 7 days) via click and keyboard
- Tests active state management for selected project
- Tests showing/hiding projects section via click and keyboard
- Mocks context hooks for project and selected project values

**AddTask.spec.js (src/__tests__/AddTask.spec.js):**
- Tests rendering of AddTask component and quick-add overlay
- Tests showing/hiding main task form via click and keyboard
- Tests project overlay visibility toggle
- Tests task date overlay visibility toggle
- Tests canceling task creation via click and keyboard
- Tests adding tasks to special projects (TODAY, NEXT_7)
- Tests adding tasks with specific dates (Today, Tomorrow, Next 7 days)
- Tests quick-add task cancellation
- Mocks context hooks and Firebase Firestore

**Note:** Tests were not run during this analysis. This summary is based on code inspection only.
