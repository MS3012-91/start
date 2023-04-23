import './App.css';
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
    this.state = {
      navigationList: [
        {id:1, href: '#', link: 'Home'},
        {id:2, href: '#', link: 'Product'},
        {id:3, href: '#', link: 'Faq'},
        {id:4, href: '#', link: 'Contact'},
      ]
    }
  }
  render() {
      return (
        <>
       <header>
       <Logo />
       <nav >
        <ul className='navstyle'>
        <Navigation links={this.state.navigationList} />
       </ul>
       </nav>
       </header>
      <main>
        <div className ='mainBlockStyle'>
        <MainBlock />
        </div>
        <OrderBlock />
      <div className='orderNowBlock'>
        <OrderNow />
      </div>
      <div className='footerBlock'> 
      <FooterBlock />
       </div>
      </main>
      <footer>
        {/* при перемещении FooterBlock расположение на странице направильное, 
        абсолютное позиционирование не помогло */}
      </footer>
      </>
      )
  }
}