import React, { Component } from 'react'
import phone1 from '../../EatsResturant/phone1.png'
import style from '../AppWork/AppWork.css'


export default class AppWork extends Component {
  constructor(props) {
    super(props)
    }
  render() {
    const styleApp = this.props;
    const block = this.props;
      return (
        <div className= 'styleApp'>
          <img src={phone1} alt ='phone image'></img>
      <div className='block'>
        <h4> Create an account</h4>
        <h3> Create/login to an existing account to get started</h3>
        <h5> An account is created with your email and a desired password</h5>
      </div>
          </div>
    )
  }
}
