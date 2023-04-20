import React, { Component } from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

export class Todo extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    )
  }
}

export default Todo