import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => { setCount(count + 1) }
  const decrement = () => { setCount(count - 1) }

  const reset = () => { setCount(0) }
  const x2 = () => { setCount(previous => previous * 2) }
  const sprit3 = () => {
    if (count % 3 === 0) {
      setCount(count / 3)
    }
  }

  return (
    <React.Fragment>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <button onClick={reset}>reset</button>
      <button onClick={x2}>x2</button>
      <button onClick={sprit3}>3の倍数の時だけ３で割る</button>
    </React.Fragment>
  )
}

export default App
