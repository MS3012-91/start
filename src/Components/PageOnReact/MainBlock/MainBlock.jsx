
import React, { Component } from 'react'
import style from './MainBlock.module.css'

const MainBlock = () =>  {
    return (
        <div className={style.mainBlock}>
          <div className ={style.container}>
        <p>Restaurant app</p>
        <h1>
        Why stay hungry when you can order form Eats 
        </h1>
        <p className={style.order}>Order in exchange for hunger</p>
        <div className= {style.btnBlock}>
        <button className= {`${style.bigBtn}` }> Delivery  </button>
        <button className= {`${style.bigBtn}`} > Menu </button>
        </div>
        </div>
        </div>       

    )
  }
  export default MainBlock;