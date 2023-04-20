import React, { Component } from 'react';
import './Instructions.css'
import emoji from './img/emoji.png'

export default class Instructions extends Component {
  render() {
    return (
      <div className='instructions'>
      <img alt='laughing smile' src={emoji} /> 
      <p>Click on an emoji to view the emoji short name.</p>
   </div>
      )
  }
}
