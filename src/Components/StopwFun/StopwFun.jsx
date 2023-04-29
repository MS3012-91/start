import React, { useState } from 'react'

export default function StopwFun() {
    const [count, setCount] = useState (0,0,0,0,0,0,0);
    const id = null;
    const go = () => {setCount(count.getSeconds())};
    const start = () => {(!id)?(id=setInterval(go, 1000)):null}
    const stop = () => {clearInterval(id)}
    const reset = () => {setCount (new Date(0,0,0,0,0,0,0))}
  return (
    <div>
        <p>{count.toLocaleTimeString('en-GB')}</p>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}


//   go = () => {
//     const {count} = this.state;
//     // напрямую состояние изменять нельзя! (состояние иммутабельно)
//     const countNew = new Date(count.valueOf());
//     countNew.setSeconds(count.getSeconds() + 1);
//     this.setState({count: countNew});
//   }

//   start = () => {
//     if(!this.id) this.id = setInterval(this.go, 1000);
//   }

//   stop = () => {
//     clearInterval(this.id);
//     this.id = null;
//   }

//   reset = () => {
//     this.setState({count: new Date(0,0,0,0,0,0,0)});
//   }

//   render() {
//     const {count} = this.state;
//     return (
//       <>
//         <p>{count.toLocaleTimeString('en-GB')}</p>
//         <button onClick={this.start}>start</button>
//         <button onClick={this.stop}>stop</button>
//         <button onClick={this.reset}>reset</button>
//       </>
//     )
//   }
// }