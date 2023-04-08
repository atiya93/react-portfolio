import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Atiya Hassan</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="skill">Skill</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://facebook.com'><AiOutlineFacebook/></a>
        <a href='https://instagram.com'><FiInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer
