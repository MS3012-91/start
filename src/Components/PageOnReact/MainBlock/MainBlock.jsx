
import React, { Component } from 'react'
import style from './MainBlock.module.css'

export default class MainBlock extends Component {
  render() {
    return (
        <div className={style.mainBlock}>
        <p>Restaurant app</p>
        <h1>
        Why stay hungry when you can order form Eats 
        </h1>
        <p className={style.order}>Order in exchange for hunger</p>
        <div className= {style.btnBlock}>
        <button className= {`${style.bigBtn} ${style.redBtn}`}> Delivery  </button>
        <button className= {`${style.bigBtn} ${style.clearBtn}`}> Menu </button>
        </div>
        </div>       

    )
  }
}