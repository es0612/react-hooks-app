import React, { useState } from 'react';

const App = props => {
  const [price, setPrice] = useState(props.price)
  const [name, setName] = useState(props.name)

  const reset = () =>{
    setPrice(props.price)
    setName(props.name)
  }

  return (
    <React.Fragment>
      <div>現在の{name}は{price}円です。</div>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>reset</button>
      <input value={name} onChange={e => setName(e.target.value)}/>
    </React.Fragment>
  )
}

App.defaultProps = {
  name:"sample",
  price:1000
}

export default App
