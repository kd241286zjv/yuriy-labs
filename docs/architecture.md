# Architecture

# Architecture

## Vision

The repository is designed as a scalable monorepo supporting multiple applications and shared packages.

Each application should remain independently deployable while sharing reusable libraries through packages.

The architecture is expected to evolve gradually together with the product rather than being over-engineered upfront.

## Monorepo

The repository follows a pnpm workspace architecture.

Top-level directories have clearly defined responsibilities:

- `apps` contains deployable applications.
- `packages` contains reusable libraries.
- `docs` contains engineering documentation.

Shared code should move into `packages` only after multiple real use cases appear.

## Applications

Applications should remain independent.

Framework-specific decisions belong to each application.

Applications communicate through shared packages rather than direct dependencies whenever practical.

## Shared Packages

Shared packages should remain focused.

Each package should provide a single well-defined responsibility.

Avoid creating generic utility packages without demonstrated reuse.

## Design Principles

The architecture follows several core principles.

### Separation of Concerns

Presentation, business logic and static data should remain separated whenever practical.

### Incremental Evolution

Architecture grows together with the product.

### Simplicity

Avoid introducing abstractions before they become necessary.

### Reusability

Extract reusable modules only after real duplication appears.

### Explicitness

Prefer explicit code over implicit behavior.

## Data Flow

Data should flow in a predictable and explicit manner.

General principles:

- Static data should remain outside UI components.
- Components should receive data through props whenever practical.
- Business logic should be isolated from presentation.
- Validation should remain independent from UI.
- Server communication should remain isolated from presentation components.

Each layer should have a single responsibility.

UI should describe how data is presented rather than how it is obtained or transformed.

## Future Architecture

The repository is expected to grow with additional applications including:

- API
- Marketing website
- Personal website

Future backend services will integrate through shared packages while preserving clear application boundaries.
