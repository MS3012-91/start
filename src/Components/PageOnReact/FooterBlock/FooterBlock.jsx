import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import './FooterBlock.module.css'

export default class FooterBlock extends Component {
  render() {
    return (
      <>
        <Logo /> 
        <p> Copywright 2020 Bella Onojie.com </p>
      </>
    )
  }
}
