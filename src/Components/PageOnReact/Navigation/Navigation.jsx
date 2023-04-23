import React, { Component } from 'react'
import style from './Navigation.module.css'


export default class Navigation extends Component {
  constructor(props) {
    super(props)
      this.state = {
       isActive:false
    }
  }
  render() {
    // const navigationList = this.props;
    return (
      <>
      {this.props.links.map (el => <li key={el.id}><a className={style.navLinks} key = {el.id} 
           href = '{el.href}'> {el.link} </a>
           </li> 
         )}

      </>
    
    )
  }
}
