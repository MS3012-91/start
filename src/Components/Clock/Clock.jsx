import React, { Component } from 'react'
import { format, addDays, addSeconds } from 'date-fns'

export default class  extends Component {
constructor(props) {
  super(props)

  this.state = {
     count : new Date(0,0,0,0,0,10),
     test: new Date ()
  }
  this.id=null
}

start = () => {
    const {count} =this.state;
    const count1 = new Date (count.valueOf())
    if (count.getSeconds()>0) 
    {count1.setSeconds (count.getSeconds() -1)
    this.setState ({count: count1})  }
    else {
          clearInterval (this.id)
    this.id=null
    }
}

step = () => {
    this.id= setInterval(this.start, 1000)
}


reset = () => {
   
    this.setState ({count: new Date(0,0,0,0,0,0,0)})
}


plus3s = () => { 
    const {count} = this.state
    const countNew = addSeconds (count,3)
    this.setState ({count:countNew})
}
  render() {
    const {count} = this.state
    return (
      <div>
        <p>{count.toLocaleTimeString ('en-GB')} </p>
        <button onClick={this.step}> Start </button>
        <button onClick={this.reset}> Reset </button>
        <button onClick={this.plus3s}> Add seconds </button>
        <p> {format(this.state.test, 'do MMM yyyy')}</p>
      </div>
    )
  }
}
