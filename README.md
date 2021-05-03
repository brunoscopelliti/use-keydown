# use-keydown

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/brunoscopelliti/use-keydown/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@bscop/use-keydown.svg?style=flat)](https://www.npmjs.com/package/@bscop/use-keydown)
[![CircleCI Status](https://circleci.com/gh/brunoscopelliti/use-keydown.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/brunoscopelliti/use-keydown)
[![Coverage](https://img.shields.io/codecov/c/github/brunoscopelliti/use-keydown)](https://app.codecov.io/gh/brunoscopelliti/use-keydown/)

A custom React hook to fire an event when user press one, or more specific keys.

## Install

```
npm i @bscop/use-keydown
```

## Usage

Default behavior:

```js
import useKeydown from "@bscop/use-keydown";

useKeydown(
  (event) => {
    console.log(">", event.code);
  }
);
```

Custom behavior:

```js
import useKeydown from "@bscop/use-keydown";

useKeydown(
  (event) => {
    console.log(">", event.code);
  },
  {
    active: true,
    keys: [
      "ArrowUp",
      "ArrowDown"
    ]
  }
);
```

- `active`: when is set to `false` the hook won't register the event listener.

- `keys`: defines the key codes for which the handler will be executed. You can omit it, to listen
for all the possible keys.

## Contribute

Read the [guidelines](./CONTRIBUTING.md).

### Run tests

```
npm test
```

### Coverage

Coverage reports are hosted on [codecov](https://codecov.io/).

```
npm run badge:coverage -- --token=<guid>
```

---

Bruno Scopelliti\
www.brunoscopelliti.com
