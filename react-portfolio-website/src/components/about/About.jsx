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
          <div className='about__me-image'>
            <img src={ME} alt='Tomislav Dinev' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Training</h5>
              <small>18-month Level 4 Data Analyst apprenticeship</small>
            </article>

            <article className='about__card'>
              <ImUsers className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years in data and systems roles</small>
            </article>

            <article className='about__card'>
              <MdFolderCopy className='about__icon'/>
              <h5>Projects</h5>
              <small>5 completed projects</small>
            </article>
          </div>

          <p>
            I'm a London-based data analyst. I trained through a Level 4 Data Analyst
            apprenticeship at Omni, then worked at Phlo Systems on EDI integrations and
            testing, making sure data moved correctly between systems.
          </p>
          <p>
            I like questions that end in a decision. My latest project analyses 99,441
            orders from a Brazilian marketplace in Python, SQL and Power BI, and shows that
            late deliveries are almost 7× more likely to get a bad review.
          </p>
          <p>
            Before data, I came through La Fosse Academy's tech programme, which is why
            I can also build things like this site.
          </p>

          <a href='#portfolio' className='btn btn-primary'>See My Work</a>
        </div>
      </div>
    </section>
  )
}

export default About
