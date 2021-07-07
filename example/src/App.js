import React from 'react'

import { useCircuitBreaker } from 'react-use-circuit-breaker'

const App = () => {
  const [send] = useCircuitBreaker(3, 2000, () => {
    throw new Error("The breaker trips!");
  });

  return (
    <div>
      If you push below button 3 times in 2 seconds, then an error will occur(please check devtools for browser)
      <div>
        <button onClick={() => send().then(() => {})}>PUSH</button>
      </div>
    </div>
  )
}
export default App
