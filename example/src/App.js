import React from 'react'

import { useMyHook } from 'react-use-circuit-breaker'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
