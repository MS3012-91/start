import './App.css';
import React, { Component } from 'react';
import Carousel from './Components/Courusel/Carousel';

import fruits from './Components/PageOnReact/EatsResturant/fruits.jpg'
import meal from './Components/PageOnReact/EatsResturant/meal.jpg'
import fruits1 from './Components/PageOnReact/EatsResturant/fruits1.jpg'
import meal1 from './Components/PageOnReact/EatsResturant/heroBcc.png'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       eat : [
  {id:1, name:fruits},
  {id:2, name:meal},
  {id:3, name:fruits1},
  {id:4, name:meal1},
]
    }
  }

  render() {
        return (
       <>
      <Carousel children = {this.state.eat.map (el => 
        <figure className='elements' key={el.id}> 
        <img className='sliderImages' src={el.name} alt='slider1' />
        <figcaption> Slider {el.id} </figcaption>
        </figure>
     ) }>
     </Carousel>
</>
      )
}
}
