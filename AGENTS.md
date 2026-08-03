# AGENTS.md

## Project Overview

Developer Profile Builder is an AI-first SaaS application for software engineers.

The platform allows users to create, manage and publish professional developer profiles, maintain multiple resume versions and export print-ready CVs.

The project is developed as a production-quality monorepo with a strong focus on maintainability, scalability and modern engineering practices.

This repository serves both as a real-world product and as a reference implementation of a modern full-stack architecture.

## Project Vision

The long-term goal is to build a complete Developer Profile platform rather than a simple resume generator.

The platform should eventually support:

- authentication and user accounts;
- editable profile sections;
- multiple resume templates;
- print-ready PDF generation;
- public profile pages;
- cloud storage;
- AI-assisted editing;
- integrations with developer platforms.

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

### Planned Frontend

- TanStack Query
- React Hook Form
- Zod

### Backend

- NestJS
- Prisma
- PostgreSQL

### Infrastructure

- Docker
- AWS

## Repository Structure

This repository is a pnpm monorepo.

Applications are located in the `apps` directory.

Shared libraries are located in the `packages` directory.

Project documentation is stored in the `docs` directory.

The repository is expected to grow over time by adding new applications, shared packages and infrastructure components while keeping a clear separation of concerns.
