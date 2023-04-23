import React, { useState } from 'react'

export default function CounterFoo () {

const step = props
const [count, setCount] = useState (0);


  return (
<div><h1>Counter</h1>
<button onClick={increase}>+{step}</button>
<button onClick={decrease}>-{step}</button>
<button onClick={makeZero}>0</button>
<p>Total = {value}</p>
</div>
  )
}
increase = () => {
   setCount (count+1);  }
decrease = () => {
    setCount (count-1);  }

