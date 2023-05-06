import React from 'react'
import {useState} from 'react'

export default function 
() {
let [gettinWidth, setWidth] = useState();
let [gettinHeight, setHeight] = useState();
// let width = 0;
// let height = 0;
let createdBox = {width:`${gettinHeight}px`, height:`${gettinWidth}px`, border: '1px solid red' }

// let handleBox = () => {
//     createdBox = {width:`${gettinHeight}px`, height:`${gettinWidth}px`, border: '1px solid red' }
// }

const handleWidth = (e) => {
setWidth (e.target.value);}
const handleHeight= (e) => {
setHeight (e.target.value)
console.log (gettinHeight)
}

  return (
   <>
    <input type='text' name ='input1' placeholder='width' defaultValue={0} value={gettinWidth} onChange={handleWidth} />  
    <input type='text' name ='input2' placeholder='height' defaultValue={0} value={gettinHeight} onChange={handleHeight} />  
    <button > make me </button>
    <div style={createdBox} />
    </>  )
}
