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
// import './App.css';
// import React, { Component } from 'react';


import './App.css';
import React, { Component } from 'react';
import GoodsList from './Components/GoodsList/GoodsList'
export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
       goods: [
  {id: '1', src: '1.jpg', title: 'Настенный светильник Jamiz Bird', price: '20$'},
  {id: '2', src: '2.jpg', title:'Подвесной светильник 4 лампочки', price: '50$'},
  {id: '3', src: '3.webp', title:'Потолочный светильник черный с золотом', price: '30$'},
  {id: '4', src: '4.jpg', title: 'Настольная лампа из страусиных перьев', price: '100$'},
  {id: '5', src: '5.jpg', title: 'Настольная лампа Gold Rabbit', price:'70$'},
  {id: '6', src: '6.jpg', title: 'Подвесной светильник CAPELLO ', price: '200$'},
  {id: '7', src: '7.jpg', title: 'Подвесной светильник VANWERK BALL', price:'120$'},
  {id: '8', src: '8.jpg', title: 'Бамбуковый абажур для торшера TUVALU ', price: '80$'},
],

    }

  }

  render() {
      return (
      <ul>
        <GoodsList goods={this.state.goods} />
      </ul>
    );
  }
}