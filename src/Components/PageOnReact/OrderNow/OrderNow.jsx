import React, { Component } from 'react'
import style from '../OrderNow/OrderNow.module.css'

export default class OrderNow extends Component {
  render() {
    return (
      <div className={style.inOrderNow}>
        <h2>Order now.</h2>
        <p>Available on your favorite store. Start your premium experience now</p>
        <div className= {style.btnBlock}>
            <button className= {`${style.bigBtn} ${style.redBtn}`}>Playstore</button>
            <button className= {`${style.bigBtn} ${style.clearBtn}`}>App store</button>
        </div>
      </div>
    )
  }
}
