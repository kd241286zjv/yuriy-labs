# AGENTS.md

## Purpose

This document defines repository-wide engineering principles and development conventions.

It applies to the entire monorepo.

Applications and packages may provide their own `AGENTS.md` files with more specific guidance. In such cases, local instructions extend this document rather than replace it.

---

## Project Overview

Developer Profile Builder is an AI-first SaaS platform for software engineers.

The platform enables developers to create, manage and publish professional profiles, maintain multiple resume versions and generate print-ready resumes.

The repository is developed as a production-quality monorepo with a strong focus on maintainability, scalability and long-term evolution.

---

## Project Vision

The long-term goal is to build a complete developer platform rather than a simple resume generator.

The platform is expected to support:

- user authentication;
- editable profile sections;
- multiple resume templates;
- print-ready PDF generation;
- public profile pages;
- cloud synchronization;
- AI-assisted editing;
- integrations with third-party developer platforms.

---

## Repository Structure

This repository follows a pnpm monorepo architecture.

### apps

Contains deployable applications.

Each application owns its framework-specific implementation while following repository-wide engineering principles.

### packages

Contains reusable libraries shared across multiple applications.

Packages should remain framework-agnostic whenever practical.

### docs

Contains project documentation.

Documentation is considered part of the codebase and should evolve together with the implementation.

---

## Engineering Principles

Every contribution should prioritize:

- readability over cleverness;
- maintainability over short-term convenience;
- simplicity over premature abstraction;
- explicit code over implicit behavior;
- consistency over personal preference.

Prefer solving today's problem well instead of anticipating every possible future requirement.

---

## Decision Making

When multiple implementation options exist, prefer the solution that:

1. Improves readability.
2. Preserves consistency.
3. Minimizes maintenance costs.
4. Keeps future refactoring simple.

Avoid introducing new abstractions or dependencies unless they provide clear long-term value.

---

## Repository Evolution

The repository is expected to grow over time.

New applications, packages and infrastructure should integrate into the existing architecture instead of introducing isolated conventions.

Consistency across the repository is more valuable than optimizing individual applications independently.

---

## Documentation

Documentation is part of the implementation.

Whenever architecture, conventions or public APIs change, the corresponding documentation should be updated within the same change.

Documentation should never lag behind the code.

---

## AI-Assisted Development

AI tools are treated as engineering assistants rather than autonomous developers.

AI-generated code should:

- follow repository conventions;
- preserve existing architecture;
- avoid unrelated refactoring;
- remain production-ready;
- include explanations for non-trivial design decisions.

Generated code should always be reviewed before being committed.

---

## Local Instructions

Applications and packages may provide their own `AGENTS.md` files.

Those documents define framework-specific conventions while inheriting the repository-wide principles described here.

When multiple instruction files exist, always follow the closest applicable document while respecting repository-wide conventions.
