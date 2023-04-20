import React, { Component } from 'react'
import Display from './Display';

export default class Counter extends Component {
    constructor (props) {
        super (props);
    this.state = {
        value: 0,
    }
    }
    
// step = this.props.step;
increase = () => {
  let sum= Number(this.state.value) + Number(this.props.step);
    this.setState ({
            value : sum
    })
}
decrease = () => {
    this.setState ({
        value: this.state.value-this.props.step
    })
}
makeZero = () => {
    this.setState ({
    value: this.setState.value = 0
})
}

valueHandler = (x) => {
  this.setState ({value:x})
}

  render() {
    const {value} = this.state;
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={this.increase}>+{this.step}</button>
        <button onClick={this.decrease}>-{this.step}</button>
        <button onClick={this.makeZero}>0</button>
        <p>Total = {value}</p>
        <Display value={value} valueHandler = {this.valueHandler} />
      </div>
    )
  }
  
}

