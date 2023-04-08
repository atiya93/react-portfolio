import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from  'react-icons/bs'
import {SiGmail} from 'react-icons/si'
const Headersocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank">{<BsLinkedin/>}</a> 
        <a href='https://github.com' target="_blank">{<BsGithub/>}</a> 
        <a href='https://facebook.com' target="_blank"></a> 
        <a href='https://gmail.com' target="_blank">{<SiGmail/>}</a> 
        
      
    </div>
  )
}

export default Headersocial
