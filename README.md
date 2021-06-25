# react-use-circuit-breaker

> 

[![NPM](https://img.shields.io/npm/v/react-use-circuit-breaker.svg)](https://www.npmjs.com/package/react-use-circuit-breaker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-circuit-breaker
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'react-use-circuit-breaker'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [h-tachikawa](https://github.com/h-tachikawa)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
