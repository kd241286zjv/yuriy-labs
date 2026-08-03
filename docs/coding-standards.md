# Coding Standards

## Purpose

This document defines coding conventions shared across the repository.

Technology-specific rules may be extended by local `AGENTS.md` files.

---

## General Principles

Code should prioritize:

- readability;
- maintainability;
- consistency;
- explicitness.

Prefer simple solutions over clever implementations.

---

## Naming

Use descriptive names.

Avoid abbreviations unless they are widely understood.

Files should be named according to their responsibility.

---

## Project Structure

Separate:

- UI
- business logic
- data
- types
- utilities

Avoid mixing unrelated responsibilities in the same file.

---

## Reusability

Extract reusable code only after multiple real use cases appear.

Avoid creating generic utilities prematurely.

---

## Imports

Prefer absolute imports using project aliases.

Avoid deep relative imports.

---

## Formatting

Formatting should be automated through project tooling.

Do not manually fight the formatter.

---

## Commits

Use Conventional Commits.

Keep commits focused on a single logical change.

Prefer multiple small commits over one large commit.
