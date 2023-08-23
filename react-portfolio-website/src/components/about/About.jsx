import React from 'react'
import './about.css'
import ME from '../../assets/head.png'
import {FaAward} from 'react-icons/fa'
import {ImUsers} from 'react-icons/im'
import {MdFolderCopy} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          |<div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>La Fosse Academy 12-week intensive course</small>
            </article>

            <article className='about__card'>
            <ImUsers className='about__icon'/>
              <h5>Collaboration</h5>
              <small>Worked with a variety of different teams</small>
            </article>

            <article className='about__card'>
            <MdFolderCopy className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>

          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut doloremque
quaerat perferendis consectetur consequuntur impedit eum magni
dolorem perspiciatis repellendus quisquam reprehenderit, error
voluptatem necessitatibus. Hic minus cum soluta iure?
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
