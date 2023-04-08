import React from 'react'
import './header.css'
import CTA from './Cta'
import ME from '../../assest/try.jpg'
import Headersocial from './Headersocial'
const Header = () => {
  return (
    
    <header>
      <div className="container header__container">
         <h5>Hello I'm</h5>
         <h1>Atiya Hassan</h1>
         <h5 className="text-light"> Full Stack Developer</h5>
         <CTA/>
         <Headersocial/>
         <div className="me">
          <img src={ME} alt=""/>
         </div>
         <a href="#contact"  className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
