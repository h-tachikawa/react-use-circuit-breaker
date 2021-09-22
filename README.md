# react-use-circuit-breaker

> React hook that works like circuit breaker.

[![NPM](https://badge.fury.io/js/react-use-circuit-breaker.svg)](https://badge.fury.io/js/react-use-circuit-breaker)
[![Tests](https://github.com/h-tachikawa/react-use-circuit-breaker/actions/workflows/tests.yaml/badge.svg)](https://github.com/h-tachikawa/react-use-circuit-breaker/actions/workflows/tests.yaml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Install

```bash
npm install --save react-use-circuit-breaker
```

## Usage

```tsx
import { useCircuitBreaker } from 'react-use-circuit-breaker'

/**
 * Execute callback function that passed by third argument
 * when send function called 2 times in 5 seconds.
 */
const [send] = useCircuitBreaker(2, 5000, () => {
  throw new Error("The breaker trips!");
});

send();
send();
send(); // => Uncaught Error: The breaker trips!!
```

## License

MIT © [h-tachikawa](https://github.com/h-tachikawa)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
