# What is this?

This is a quick demonstation of the options for a monorepo micro-frontend (MFE) solution.

# What is being evaluated here?

- Piral with Lerna
- NX
- ???

Further documentation is available in the individual readmes in each example.

# What is a monorepo?

A monorepo is a single git repository that holds the source code for multiple applications and libraries, along with the tooling for them.

# Why a monorepo?

- Shared code and visibility - Keeps your code DRY across your entire organization. Reuse validation code, UI components, and types across the codebase.

- Single set of dependencies - Use a single version of all third-party dependencies, reducing inconsistencies between applications. Less actively developed applications are still kept up-to-date with the latest version of a framework, library, or build tool.

# Monorepo != Monolith

Monorepo tooling prevents running running unnecessary tests/builds when they're not impacted by the changes. It also enforces code boundries to ensure code is only usable where it is meant to be used.
