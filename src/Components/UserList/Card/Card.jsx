import React, { Component } from 'react'

export default class Card extends Component {

    render() {
 const {name, surname} = this.props;   
     return (
      <li> 
        {name} {surname} </li>
    )
  }
  
}
