# Piral with Lerna

## Quick overview

### What is Piral?

Piral is a framework for building micro frontend solutions.

### Terms:

- Piral - the application shell which houses common layout, shared components, etc
- Pilet - an application within the shell

### What is Lerna?

Lerna is a build tool for managing and publishing packages from a monorepo

## Pros and cons

### Pro

- Simple CLI to add new apps (pilets)
- Piral exposes useful API to pilets for sharing data, handling notifications, setting up nav, etc

### Con

- Uses Vite v2 while our solutions are using v3
- Low adoption
- Lerna showing its age
- Requires a feed service to make apps available to shell

## Useful links

- Piral Docs: https://docs.piral.io/guidelines/tutorials/01-introduction
- Piral w/ Lerna: https://docs.piral.io/guidelines/tutorials/23.1-monorepo-lerna
- Lerna: https://lerna.js.org/docs/introduction
