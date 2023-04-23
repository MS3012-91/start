import React, { Component } from 'react'
import styles from './Logo.module.css'
import logo from '../EatsResturant/logo.png'


export default class Logo extends Component {
  render() {
    return (
      <div>
        <img className={styles.logoSizing} src= {logo} alt = 'Logo' />
      </div>
    )
  }
}
