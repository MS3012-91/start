import React, { Component } from 'react'

export default class Display extends Component {
zero = () => {
    this.props.valueHandler(0)
}
  render() 
  { const {value, valueHandler} = this.props;
    return (

      <div>
        <h1> Value {value}</h1>
        <button  onClick={this.zero}>Click </button>
      </div>
    )
  }
}
