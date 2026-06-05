# grily-utils

Shared utility functions. Works in JS and TS projects.

## Install

**From GitHub (no registry needed):**
```bash
npm install github:grilymannen/grily-utils
```

**Pin to a version tag:**
```bash
npm install github:grilymannen/grily-utils#v1.0.0
```

**From GitHub Packages:**
```bash
# Add to .npmrc in your project first:
# @grilymannen:registry=https://npm.pkg.github.com
npm install @grilymannen/grily-utils
```

## Update a project

```bash
npm install github:grilymannen/grily-utils
# or if using a registry:
npm update grily-utils
```

## Usage

```ts
import { capitalize, unique, retry } from "grily-utils";
```

## Development

```bash
npm install       # install typescript
npm run build     # compile src/ → dist/
npm run build:watch  # watch mode
```

## Release

1. Bump `"version"` in `package.json`
2. `git add . && git commit -m "chore: bump to v1.x.x"`
3. `git tag v1.x.x && git push && git push --tags`

GitHub Actions will build and publish automatically.
