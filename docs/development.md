# Development

## Requirements

Recommended tools:

- Node.js (LTS)
- pnpm
- Git
- Docker (planned)

---

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

---

## Monorepo

Applications live inside:

```text
apps/
```

Reusable libraries live inside:

```text
packages/
```

Documentation lives inside:

```text
docs/
```

---

## Development Workflow

Typical workflow:

1. Create a feature branch.
2. Discuss architecture if necessary.
3. Update documentation when conventions change.
4. Implement incrementally.
5. Review generated code.
6. Commit logical changes.
7. Open a Pull Request.

---

## AI-Assisted Development

This repository actively uses AI-assisted development.

Repository-wide conventions are defined in:

- `/AGENTS.md`

Applications may provide additional local instructions through their own `AGENTS.md`.

AI-generated code should always be reviewed before being committed.
