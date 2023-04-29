import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function CounterFun(props) {
   
    const {step, initialValue} = props;
    const [value, setValue] = useState (initialValue)

     const   inc =() => {setValue (value + step)};
     const   dec = () => {setValue (value-step)};
     const   makeZero = () => {setValue (0)}
  return (
              <div>
            <h1>Counter</h1>
            <p> step: {step}</p>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <button onClick={makeZero}>0</button>
            <p>Total = {value}</p>
          </div>
        )
  }
  CounterFun.propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number
}

CounterFun.defaultProps = {
    step: 1,
    initialValue: 0
}