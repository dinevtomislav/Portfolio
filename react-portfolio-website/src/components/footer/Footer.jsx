import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Tomislav Dinev</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/tomislav-dinev/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/dinevtomislav' target='_blank'><FaGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; 2023 Tomislav Dinev. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default footer
