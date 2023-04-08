import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsJournalBookmark} from 'react-icons/bs'
// import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineContacts} from 'react-icons/ai'
import { useState} from 'react'
const Nav = () => {
  const [activeNav, setActivenav,]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActivenav('#')} className={activeNav==='#' ? 'active':''}>{<AiOutlineHome/>}</a>
      <a href='#about' onClick={()=> setActivenav('#about')} className={activeNav==='#about' ? 'active':''}>{<AiOutlineUser/>}</a>
      <a href='#skill' onClick={()=> setActivenav('#experience')} className={activeNav==='#experience' ? 'active':''}>{<BsJournalBookmark/>}</a>
      {/* <a href='#services' onClick={()=> setActivenav('#services')} className={activeNav==='#service' ? 'active':''}>{<RiServiceLine/>}</a> */}
      <a href='#contact' onClick={()=> setActivenav('#contact')} className={activeNav==='#contact' ? 'active':''}>{<AiOutlineContacts/>}</a>
    </nav>
  )
}

export default Nav
