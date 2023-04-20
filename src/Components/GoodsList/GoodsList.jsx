import React, { Component, useState } from 'react'
import styles from './GoodsList.module.css'
import OneEachGood from './OneEachGood/OneEachGood'

export default class GoodsList extends Component {
    constructor (props) {
        super (props); 
        } 

  render() {
    return (
<>
{this.props.goods.map(el => 
                (<OneEachGood key = {el.id} good = {el} cartOpen = {false} 
                    onClick = {this.setCartOpen}
                    > 
                    </OneEachGood>
                    )   
       )}
</>
    )
  }
}

