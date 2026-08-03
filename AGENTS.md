# AGENTS.md

## Project Overview

Developer Profile Builder is an AI-first SaaS platform for software engineers.

The platform allows users to create, manage and publish professional developer profiles, maintain multiple resume versions and export print-ready resumes.

The repository is developed as a production-quality monorepo with a strong focus on maintainability, scalability and modern engineering practices.

---

## Project Vision

The long-term goal is to build a complete developer platform rather than a simple resume generator.

The platform is expected to support:

- user authentication;
- editable profile sections;
- multiple resume templates;
- public profile pages;
- print-ready PDF generation;
- cloud synchronization;
- AI-assisted editing;
- integrations with third-party developer platforms.

---

## Repository Structure

This repository follows a pnpm monorepo architecture.

- `apps` contains deployable applications.
- `packages` contains reusable shared libraries.
- `docs` contains project documentation.

Applications should remain independent while sharing reusable code through packages whenever appropriate.

Framework-specific conventions belong to the corresponding application.

---

## Engineering Principles

Every contribution should prioritize:

- readability over cleverness;
- maintainability over short-term convenience;
- simplicity over premature abstraction;
- explicit code over implicit behavior;
- consistency across the repository.

Avoid introducing abstractions before there is a demonstrated need.

---

## Development Philosophy

This repository evolves incrementally.

New technologies should be introduced only when they solve an actual problem.

Architecture should grow together with the product rather than anticipating every possible future requirement.

---

## AI-Assisted Development

AI tools are treated as engineering assistants rather than autonomous developers.

All AI-generated code must follow repository conventions and be reviewed before being committed.

Generated changes should remain focused, understandable and production-ready.

AI assistants should preserve existing architecture and avoid unrelated refactoring.

## Decision-Making

When multiple implementation options exist, prefer the solution that:

1. Improves readability.
2. Keeps the codebase consistent.
3. Minimizes long-term maintenance costs.
4. Solves today's problem without overengineering.

Avoid introducing new dependencies or abstractions unless they provide clear long-term value.

## Documentation

Documentation is part of the codebase.

Whenever architecture, conventions or public APIs change, the corresponding documentation should be updated as part of the same change.

Avoid leaving documentation behind the implementation.

## Repository Growth

New applications, packages and infrastructure should integrate naturally into the existing repository structure.

Prefer extending existing conventions over introducing new ones.

Repository consistency is more valuable than individual application preferences.

## Local Instructions

This document defines repository-wide conventions.

Every application or package may provide its own `AGENTS.md` file with more specific guidance.

When multiple instruction files exist, always follow the closest applicable document while respecting the repository-wide principles defined here.
