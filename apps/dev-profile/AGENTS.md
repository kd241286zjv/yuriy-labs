# AGENTS.md

## Purpose

This document defines engineering conventions specific to the `dev-profile` application.

It extends the repository-wide principles defined in the root `AGENTS.md`.

---

## Application Overview

Developer Profile is the core SaaS application of the repository.

Its purpose is to allow software engineers to create, manage and publish professional developer profiles while providing a high-quality print-ready resume experience.

The application should prioritize:

- clarity;
- maintainability;
- scalability;
- excellent user experience.

---

## Current Technology

Current stack:

- React
- TypeScript
- Vite
- Tailwind CSS

The application will gradually adopt:

- TanStack Query
- React Hook Form
- Zod

Technology should be introduced only when it solves an actual problem.

---

## Architecture

Keep presentation, business logic and static data separated whenever practical.

Prefer small focused modules over large multi-purpose files.

Every module should have a single clear responsibility.

Avoid introducing abstractions before they become necessary.

---

## Components

Components should primarily describe UI.

Business logic should be extracted whenever it improves readability.

Static content should never live inside React components.

Avoid large components with multiple responsibilities.

Prefer composition over deeply nested component hierarchies.

Do not use `React.FC`.

Use named exports.

---

## State Management

Keep state as local as possible.

Avoid shared state until multiple components genuinely require it.

Derived state is preferred over duplicated state.

Global state should remain minimal.

Server state will eventually be managed using TanStack Query.

---

## Styling

Tailwind CSS is the primary styling solution.

Use the shared `cn()` helper for conditional class names.

Avoid inline styles.

Extract reusable UI patterns into shared components only after multiple real use cases appear.

---

## Forms

Forms will use React Hook Form together with Zod.

Validation logic should remain outside UI components.

Avoid embedding validation rules directly inside JSX.

---

## File Organization

Separate responsibilities.

Prefer:

- UI
- data
- types
- hooks
- utilities

instead of large files combining multiple concerns.

Keep mock data and configuration outside component files.

---

## Imports

Prefer absolute imports using configured aliases.

Avoid deep relative imports whenever possible.

---

## Naming

Use descriptive names.

Prefer:

- `ProfileHeader.tsx`
- `profile-data.ts`
- `types.ts`
- `constants.ts`

Avoid ambiguous names.

Name files according to their responsibility.

---

## Performance

Write readable code first.

Only optimize after measuring.

Avoid unnecessary memoization.

Do not introduce `useMemo`, `useCallback` or `memo` without a demonstrated performance benefit.

---

## Print Layout

Printable output is a first-class feature.

Screen layout and print layout should evolve independently whenever necessary.

Always verify print-related changes using browser print preview.

Avoid compromising screen experience solely for print rendering.

---

## AI-Assisted Development

AI-generated code should:

- preserve existing architecture;
- follow project conventions;
- avoid unrelated refactoring;
- remain production-ready;
- explain non-trivial design decisions.

Prefer incremental improvements over large rewrites.

---

## Future Evolution

This document should evolve together with the application.

When introducing new architectural decisions or technologies, document the adopted conventions here so future contributors and AI assistants can follow the same approach.
