import React, { Component } from 'react'

export class ProductCard extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isClicked: false,
            isSelected: 'Select me'
    }
    }
   clickChange =()=> {
      const {isClicked} = this.state;
      this.setState({isClicked:!isClicked});
    } 
    selectChange = () => {
      // const {isSelected} = this.state;
      if ({isSelected:'Select me'}) {
        this.setState({isSelected:'Selected'})
      }
      else {this.setState({isSelected:'Select me'})}
      console.log (this.state.isSelected)
    }
  
  render() {
    
    
    return (
      <div className='card' onClick={this.clickChange}>
        <img src="https://www.bhg.com/thmb/oDnjlrHprd67aYvinrMfQgVUPtQ=/5332x0/filters:no_upscale():strip_icc()/BHG-spider-plant-c0e0fdd5ec6e4c1588998ce3167f6579.jpg" alt="plant" width='100px'/>
        <h3>{this.props.name}</h3>
        <h4>Price: {this.props.price}</h4>
        <button onClick={this.selectChange}>{this.state.isSelected}</button>
      </div>
    )
  }
}

export default ProductCard

