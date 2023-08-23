import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {BiSolidUserDetail} from 'react-icons/bi'
import {FaBook} from 'react-icons/fa'
import {RiCustomerServiceFill} from 'react-icons/ri'
import {BiSolidMessageDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome /></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiSolidUserDetail /></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
      <a href='#services'  onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiCustomerServiceFill /></a>
      <a href='#contact'  onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiSolidMessageDetail /></a>
    </nav> 
  )
}

export default Nav
