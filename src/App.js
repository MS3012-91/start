// import './App.css';
// import React, { Component } from 'react';
// import Slider from './Components/Slider/Slider';


// import fruits from './Components/PageOnReact/EatsResturant/fruits.jpg'
// import fruits3 from './Components/PageOnReact/EatsResturant/meal.jpg'
// import fruits1 from './Components/PageOnReact/EatsResturant/fruits1.jpg'
// import fruits4 from './Components/PageOnReact/EatsResturant/fruits4.jpg'


// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//        eat : [
//   {id:1, name:fruits},
//   {id:2, name:fruits3},
//   {id:3, name:fruits1},
//   {id:4, name:fruits4},
// ]
//     }
//   }
//   render() {
//         return (
//          <Slider pages={this.state.eat}>
//          </Slider>
//       )
// }
// }


import style from './App.css';
import React, { Component } from 'react';
import Logo from './Components/PageOnReact/Logo/Logo';
import Navigation from './Components/PageOnReact/Navigation/Navigation'
import MainBlock from './Components/PageOnReact/MainBlock/MainBlock'
import OrderBlock from './Components/PageOnReact/OrderBlock/OrderBlock'
import FooterBlock from './Components/PageOnReact/FooterBlock/FooterBlock'
import OrderNow from './Components/PageOnReact/OrderNow/OrderNow';

export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = { navigationList: [
      {id:1, href: '#', link: 'Home'},
      {id:2, href: '#', link: 'Product'},
      {id:3, href: '#', link: 'Faq'},
      {id:4, href: '#', link: 'Contact'},
    ]
  } }
  render() {
    return (<>

  <header>
  <Logo />
  <nav >
   <ul className='navstyle'>
   <Navigation links={this.state.navigationList} />
  </ul>
  </nav>
  </header>

 <main>
   <div className ={style.mainBlockStyle}>
   <MainBlock />
   </div>
   <OrderBlock />
 <div className='orderNowBlock'>
   <OrderNow />
 </div>
 </main>

 <footer>
  <div className='footerBlock'> <FooterBlock /></div>
 </footer>
 </>
 )
}
}
