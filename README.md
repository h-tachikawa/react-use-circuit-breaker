# react-use-circuit-breaker

> React hook that works like circuit breaker.

[![NPM](https://img.shields.io/npm/v/react-use-circuit-breaker.svg)](https://www.npmjs.com/package/react-use-circuit-breaker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-circuit-breaker
```

## Usage

```tsx
import { useCircuitBreaker } from 'react-use-circuit-breaker'

/**
 * Execute callback function that passed by third argument
 * when send function called 3 times in 5 seconds.
 */
const [send] = useCircuitBreaker(3, 5000, () => {
  throw new Error("The breaker trips!");
});

send();
send();
send(); // => Uncaught Error: The breaker trips!
```

## License

MIT © [h-tachikawa](https://github.com/h-tachikawa)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
