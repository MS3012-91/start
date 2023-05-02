import React, { useState } from 'react'
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";
import style from './Slider.module.css'

export default function (props) {
    const pages = props.pages;

const page = pages.map ((el) =>  
<figure className='elements' key={el.id}> 
<img className='sliderImages' src={el.name} alt='slider1' />
<figcaption> Slider {el.id} </figcaption>
</figure>)

const [currentImg, setCurrentImg] = useState(0)

const handleClickLeft = () => {
if (currentImg === 0) {
  setInterval (setCurrentImg (pages.length-1),1000)  
}
  else {setCurrentImg(currentImg - 1)
  }
}

const handleClickRight = () => {
  if (currentImg < pages.length-1) {
    setCurrentImg(currentImg + 1)
  }
  else {setCurrentImg (0)}
}

const updating = () => {
    setTimeout(handleClickRight, 2000)
}

updating ()
  return (
    <div className={style.window}>
        <AiFillCaretLeft className={style.button} onClick={handleClickLeft}/>
        <div className={style.modified}>
                {page [currentImg] }
                </div>
        <AiFillCaretRight className={style.button} onClick={handleClickRight}/>
    </div>
  )
}
