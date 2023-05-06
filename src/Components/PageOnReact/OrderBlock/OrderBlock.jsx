import React, { Component } from 'react'
import AppWork from './AppWork/AppWork'
import ExploreVarieties from './ExploreVarieties/ExploreVarieties'
import style from '../OrderBlock/OrderBlock.css'

export default class OrderBlock extends Component {
 state = {};
 
  render() {
    return (
      <div className='orderBlock'>
        <h2>
        How the app works
        </h2>
      <AppWork className = 'app' block = 'explore'></AppWork> 
      <ExploreVarieties className = 'app'></ExploreVarieties>
        </div>
    )
  }
}
