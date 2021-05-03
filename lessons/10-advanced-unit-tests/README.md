# Advanced Unit Tests

### Agenda

In the previous testing lecture we were learning how to set up unit testing using `jest` and `typescript`.
Based on this knowledge we'll learn:

- how to set up testing react components
- what is the difference between `enzyme` and `react testing library`,
- how to test `react hooks`,
- snapshot testing.

### Getting Started

#### Prerequisites

Installed packages:

```diff
{
  "devDependencies": {
    "@types/jest": "^26.0.22",
+   "@types/react": "^17.0.4",
+   "@types/react-dom": "^17.0.3",
    "jest": "^26.6.3",
    "ts-jest": "^26.5.4",
    "typescript": "^4.2.4"
  },
  "dependencies": {
+   "react": "^17.0.2",
+   "react-dom": "^17.0.2"
  }
}
```

Set the browser-like environment in `jest.config.js`:

```diff
module.exports = {
  preset: 'ts-jest',
- testEnvironment: 'node',
+ testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
}
```

Enable support jsx syntax in `tsconfig.json`:

```diff
{
  "compilerOptions": {
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "moduleResolution": "node",
+   "jsx": "react"
  }
}
```

Run the following command to install all packages:
```
$ yarn
```

Run tests to make sure tests setup works as expected:
```
$ yarn test:simple-check
```

#### Installing

```
$ yarn add --dev @testing-library/react @testing-library/react-hooks @testing-library/jest-dom
```

Create a file `jest.setup.ts` with the following content:
```typescript
import "@testing-library/jest-dom"
```

Refer to this file in `jest.config.js`
```diff
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
+ setupFilesAfterEnv: ["./jest.setup.ts"],
}
```

#### Running tests

```
$ yarn test
```

### Unit tests Overview

Go through `src/01-basic.ts`

Go through `src/02-basic-rtl.ts`

Go through `src/03-timer.ts`

Go through `src/04-hooks.ts`

Go through `src/05-hooks-usage.ts`

Go through `src/06-snapshot.ts`
