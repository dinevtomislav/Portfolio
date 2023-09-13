import React, { useEffect, useState } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/headshot.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const loadImage = () => {
      setImageLoaded(true);
    };

    const image = new Image();
    image.src = ME;
    image.onload = loadImage;
  }, []);

  return (
    <header>
      <div className='container header__container'>
        <h5 className='bubbly'> Hello I'm</h5>
        <h1 className='bubbly'>Tomislav Dinev</h1>
        <h5 className='bubbly'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className={`me ${imageLoaded ? 'me-loaded' : ''}`}>
          <img src={ME} alt="" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
