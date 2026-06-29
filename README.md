# React App Vite Demo 1

A React + TypeScript + Vite demo app that combines:

- a kanban-style task board (To Do / Doing / Done),
- HTML5 drag-and-drop task reordering/moving between columns,
- localStorage persistence,
- and a few reusable UI examples (`ListGroup`, `Alert`, `Button`).

## Tech Stack

- React 19
- TypeScript
- Vite
- Bootstrap 5
- `react-bootstrap-icons`

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the app at the URL printed by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - run TypeScript build (`tsc -b`) and Vite production build
- `npm run lint` - run ESLint
- `npm run preview` - preview production build locally

## Main Features

### Task Board

- Create tasks with:
  - task name
  - status (`todo`, `doing`, `done`)
  - tags (HTML, CSS, JavaScript, React)
- View tasks grouped by status columns.
- Delete tasks from any column.

### Drag & Drop

- Drag starts on a task card and tracks the active task index.
- Drop zones are rendered:
  - at the top of each column,
  - and between cards.
- On drop:
  - the active task is removed from its old position,
  - status is updated to target column,
  - the task is inserted at the target index.

### Persistence

- Tasks are loaded from `localStorage` key `tasks` on app startup.
- Task updates are saved back to `localStorage` via `useEffect`.

## Project Structure (Current Entry Paths)

The app currently imports from these folders:

- `src/components/cards/` - task board components
  - `TaskForm.tsx`
  - `TaskStatusGroup.tsx`
  - `TaskColumn.tsx`
  - `TaskCard.tsx`
  - `DropArea.tsx`
  - `Tag.tsx`
  - `TaskData.tsx`
- `src/components/list/` - reusable list/alert/button examples
  - `ListGroup.tsx`
  - `Alert.tsx`
  - `Button.tsx`
- `src/App.tsx` - page composition and drag/drop state orchestration
- `src/main.tsx` - app bootstrap and Bootstrap CSS import

## Data Model

```ts
type TaskData = {
  taskName: string;
  status: string; // "todo" | "doing" | "done"
  tags: string[];
};
```

## Notes

- This is a learning/demo project, so some files include debug `console.log` calls.
- If TypeScript build reports unrelated errors, fix those incrementally before release hardening.