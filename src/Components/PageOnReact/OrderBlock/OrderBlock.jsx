import React, { Component } from 'react'
import AppWork from './AppWork/AppWork'
import ExploreVarieties from './ExploreVarieties/ExploreVarieties'
import style from '../OrderBlock/OrderBlock.css'

export default class OrderBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleApp : style.app,
      block: style.explore
    }
  }
 
  render() {
    return (
      <div className='orderBlock'>
        <h2>
        How the app works
        </h2>
      <AppWork className = {this.state.styleApp} block = {this.state.block}></AppWork> 
      <ExploreVarieties className = {this.state.styleApp}></ExploreVarieties>
        </div>
    )
  }
}
