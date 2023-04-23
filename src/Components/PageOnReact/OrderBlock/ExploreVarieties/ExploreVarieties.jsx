import React, { Component } from 'react'
import phone2 from '../../EatsResturant/phone2.png'


export default class AppWork extends Component {
  constructor(props) {
    super(props)
  }
    

  render() { 
    const styleApp = this.props;
    const block = this.props;
    return (
        <div className='styleApp'>
      <div className='block'>
        <h4> Explore varieties</h4>
        <h3> Shop for your favorites meal as e dey hot.</h3>
        <h5> Shop for your favorite meals or drinks and enjoy while doing it.</h5>
      </div>
      <img src={phone2} alt ='phone image'></img>
      </div>
    )
  }
}