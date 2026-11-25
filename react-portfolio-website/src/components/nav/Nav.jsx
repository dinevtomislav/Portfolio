import React, { useState } from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {BiSolidUserDetail, BiSolidMessageDetail} from 'react-icons/bi'
import {FaBook, FaBriefcase} from 'react-icons/fa'

const links = [
  {href: '#', icon: <ImHome />},
  {href: '#about', icon: <BiSolidUserDetail />},
  {href: '#experience', icon: <FaBook />},
  {href: '#portfolio', icon: <FaBriefcase />},
  {href: '#contact', icon: <BiSolidMessageDetail />},
]

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {links.map(({href, icon}) => (
        <a key={href} href={href} onClick={() => setActiveNav(href)}
           className={activeNav === href ? 'active' : ''}>{icon}</a>
      ))}
    </nav>
  )
}

export default Nav
