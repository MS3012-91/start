import React, { Component } from 'react'
import styles from './OneEachGood.module.css'

export class OneEachGood extends Component {
constructor (props) {
    super (props)
    this.state = {
      cartOpen :false,
}
}

setCartOpen = (id) => {
        const cartOpen= this.state;
        this.setState ({cartOpen : !id.cartOpen});
        console.log (cartOpen)
  }
  render() {
  const selectedStyle = this.state.cartOpen?styles.active:null;
 
    return ( 
        <li>
        <div key = {this.props.good.id} className={selectedStyle}  onClick = {this.setCartOpen}>
        <img src={'./photos/' + this.props.good.src} alt= 'img'></img>
        <h3>{this.props.good.title}</h3>
        <p> {this.props.good.price}</p>
        </div>  
        </li>    
    )
  }
}

export default OneEachGood