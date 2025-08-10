# Architecture

zPassword is a monorepo managed with pnpm workspaces.

- **apps/web** – Next.js web client.
- **apps/desktop** – Tauri desktop application.
- **apps/extension** – Browser extension (Manifest V3).
- **packages/crypto-core** – Rust cryptographic primitives compiled to WebAssembly.
- **packages/shared** – TypeScript utilities and shared types.

Each package exposes `build`, `test`, `lint`, and `typecheck` scripts which are orchestrated from the root `package.json`.
