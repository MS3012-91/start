import React, { Component } from 'react'

export class ScreenSize extends Component {
    constructor (props) {
        super (props);
        this.state= {
            x:window.innerWidth,
            y:window.innerHeight,
        }
    }

resize = () => {
      // if (this.window.innerWidth !== this.state.x || this.window.innerHeight!== this.state.y) {
        this.setState ({
          x: window.innerWidth,
          y: window.innerHeight,
      })
    }

// componentDidMount() {
//       window.addEventListener ('resize', this.resize);
//       };
// componentWillUnmount() {
//       window.removeEventListener ('resize', this.resize);
//     }
// componentDidUpdate () {
//   if (this.window.innerWidth !== this.state.x || this.window.innerHeight!== this.state.y) {
//     this.resize()}
// }

// componentDidUpdate(prevProps, prevState) {this.resize()} 

  render() {
    return (
      <div>ScreenSize:
        <p>inner width: {this.state.x}</p>
        <p>inner height: {this.state.y}</p>
        </div>
    )
  }
}

export default ScreenSize