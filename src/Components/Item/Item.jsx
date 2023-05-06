import React, { useState, useEffect} from 'react'
import style from './Item.module.css'

const redStart = 46;
const redEnd = 140;
const greenStart = 155;
const greenEnd = 243;
const blueStart = 28;
const blueEnd = 143;

export default function Item() {
let [red, setRed] = useState(redStart);
let [green, setGreen] = useState(greenStart);
let [blue, setBlue] = useState(blueStart);


const redUp =() => {setInterval(() => {
    if (red<=redEnd)
    setRed (red++)  
}, 100)
return () => clearInterval (redUp);
}

const redDown = () => {setInterval(() => {
    if (red>=redStart)
    setRed (red--)
}, 100);
return () => clearInterval (redDown);
} 

useEffect (()=> {
        if (red==redStart) {
            redUp()
                }
        else if (red==redEnd) {
            redDown()
    }
   
   }, [red])

const greenUp = () => { setInterval(() => {
    if (green <= greenEnd) 
        setGreen (green++)
    }, 100)
   return () => clearInterval (greenUp) 
}
const greenDown = () => { setInterval(() => {
    if (green>=greenStart) 
        setGreen (green--)
    }, 100)
   return () => clearInterval (greenDown) 
}

useEffect (() => {
        if (green==greenStart) 
        greenUp()
        else if (green==greenEnd) {
            greenDown()
         }
}, [green])

const blueUp = () => { setInterval(() => {
    if (blue <=blueEnd) 
        setBlue (blue++)
    }, 200)
   return () => clearInterval (blueUp) 
}
const blueDown = () => { setInterval(() => {
    if (blue>=blueStart) 
        setBlue (blue--)
    }, 200)
   return () => clearInterval (blueDown) 
}

useEffect (() => {
    if (blue==blueStart) {
        blueUp()
        }
        if (blue==blueEnd) {
        blueDown ()
      }
}, [blue])

 let Bcc = `rgb(${red},${green},${blue})`
 console.log (Bcc)

  return (
    <div className={style.item} style={{color: Bcc}}> 
    <p> Style with dynamic change color</p>
    </div>
  )
}
