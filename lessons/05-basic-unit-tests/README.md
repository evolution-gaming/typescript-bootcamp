# Basic Unit Tests

In this lecture we will learn: 

- how to adapt the `jest config` to work with `typescript`,
- how to write unit tests using `jest` and `typescript`,
- what is snapshot testing,
- what is TDD.

### Getting Started

#### Prerequisites

```
$ yarn
$ yarn add --dev jest typescript
```

#### Installing

```
$ yarn add --dev ts-jest @types/jest
```

#### Creating config

```
$ yarn ts-jest config:init
```

#### Running tests

```
$ yarn test
```

#### Using typescript configuration file

Create `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "moduleResolution": "node"
  }
}
```

And `tsconfig.test.json` file:

```json
{
  "extends": "./tsconfig.json"
}
```

Add path to `tsconfig` file:

```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
};
```

### Unit tests Overview

Go through `src/01-pure-code.ts`

Go through `src/02-mocking.ts`

Go through `src/03-mocking-modules.ts`

Go through `src/04-snapshot.ts`

## Useful links

- [Jest API Docs](https://jestjs.io/docs/api)
- [Mock Functions](https://jestjs.io/docs/mock-functions)
- [A guide to unit testing in JavaScript](https://github.com/mawrkus/js-unit-testing-guide)
