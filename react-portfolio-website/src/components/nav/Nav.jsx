import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {BiSolidUserDetail} from 'react-icons/bi'
import {FaBook} from 'react-icons/fa'
import {RiCustomerServiceFill} from 'react-icons/ri'
import {BiSolidMessageDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href='#'><ImHome /></a>
      <a href='#about'><BiSolidUserDetail /></a>
      <a href='#experience'><FaBook /></a>
      <a href='#services'><RiCustomerServiceFill /></a>
      <a href='#contact'><BiSolidMessageDetail /></a>
    </nav>
  )
}

export default Nav
