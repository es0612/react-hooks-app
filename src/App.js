import React, { useState, useEffect } from 'react';

const App = props => {
  const [state, setState] = useState(props)
  const {name, price} = state
  const reset = () =>{
    setState(props)
  }

  useEffect(() => {
    console.log("test")
  },[])

  return (
    <React.Fragment>
      <div>現在の{name}は{price}円です。</div>
      <button onClick={() => setState({...state, price:price + 1})}>+1</button>
      <button onClick={() => setState({...state,price:price - 1})}>-1</button>
      <button onClick={reset}>reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </React.Fragment>
  )
}

App.defaultProps = {
  name:"sample",
  price:1000
}

export default App
