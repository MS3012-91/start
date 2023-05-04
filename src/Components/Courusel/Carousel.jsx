import React, { Component, Children, cloneElement, useEffect, useState} from 'react'
import style from './Carousel.module.css'
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";

const PAGE_WIDTH = 800

export default function Carousel ({children}) {
 const [page,setPage] = useState ([])
 const [offset, setOffset] = useState(0)
 

 useEffect (() => {setPage (
  Children.map (children, child => 
    cloneElement(child, {
    style: {
        height: '100%',
        maxWidth: `${PAGE_WIDTH}px`,
        minWidth: `${PAGE_WIDTH}px`}
})))}, [])

  const handleLeft = () => {
    console.log ('left')
    setOffset ((currentOffset)=> {
    const newOffset = currentOffset+PAGE_WIDTH
    console.log (newOffset)
    // return Math.min(newOffset,0)
    }) 
  }

  const handleRight = () => {
    console.log ('right')
    setOffset ((currentOffset)=> {
    const newOffset = currentOffset-PAGE_WIDTH
    const maxOffset = -(PAGE_WIDTH*(page.length-1))
    console.log (newOffset,maxOffset )
    // return Math.max(newOffset,maxOffset);
  }) 
  }
 
  
  return (
  <div className={style.mainContainer}>
    <AiFillCaretLeft className={style.button} onClick={handleLeft}/> 
    <div className={style.window}>
        <div className={style.allPagesContainer} 
        style={{transform:`translateX(${offset}px)`} }>
          {page}
        </div>
        </div>
       <AiFillCaretRight className={style.button} onClick={handleRight}/>
       </div>
  )
}
