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

  useEffect(() => {
    if (imageLoaded) {
      const header = document.querySelector('header');
      header.classList.add('header-loaded');
      
      setTimeout(() => {
        document.querySelector('.background-shape').style.width = '100%';
      }, 500); 

      setTimeout(() => {
        document.querySelector('.me-image').style.opacity = '1';
        document.querySelector('.me-image').style.transform = 'scale(1)';
      }, 1500);
    }
  }, [imageLoaded]);

  return (
    <header>
      <div className='container header__container'>
      <h5>
        <span className='bubbly'>H</span>
        <span className='bubbly'>e</span>
        <span className='bubbly'>l</span>
        <span className='bubbly'>l</span>
        <span className='bubbly'>o</span>
        <span className='bubbly'>&nbsp;I'</span>
        <span className='bubbly'>m</span>
      </h5>
      <h1>
        <span className='bubbly'>T</span>
        <span className='bubbly'>o</span>
        <span className='bubbly'>m</span>
        <span className='bubbly'>i</span>
        <span className='bubbly'>s</span>
        <span className='bubbly'>l</span>
        <span className='bubbly'>a</span>
        <span className='bubbly'>v</span>
        <span className='bubbly'>&nbsp;D</span>
        <span className='bubbly'>i</span>
        <span className='bubbly'>n</span>
        <span className='bubbly'>e</span>
        <span className='bubbly'>v</span>
      </h1>
      <h5>
        <span className='bubbly'>F</span>
        <span className='bubbly'>u</span>
        <span className='bubbly'>l</span>
        <span className='bubbly'>l</span>
        <span className='bubbly'>s</span>
        <span className='bubbly'>t</span>
        <span className='bubbly'>a</span>
        <span className='bubbly'>c</span>
        <span className='bubbly'>k</span>
        <span className='bubbly'>&nbsp;D</span>
        <span className='bubbly'>e</span>
        <span className='bubbly'>v</span>
        <span className='bubbly'>l</span>
        <span className='bubbly'>o</span>
        <span className='bubbly'>p</span>
        <span className='bubbly'>e</span>
        <span className='bubbly'>r</span>
      </h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <div className='background-shape'></div>
          <img src={ME} alt='' className='me-image' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
