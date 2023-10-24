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
              <small>4+ Completed Projects</small>
            </article>
          </div>

          <p>
          I started this great journey back in high school with the start of GCSEs as I decided to study Computer Science.
This interest continued in my later years as I went on to study IT in college where I loved learning new things and
improving my skills. As I kept on improving, I enjoyed practicing what I have learned so that it can stick with me
and the best way I did this was by helping my peers to get a breakthrough in their assignments as it was a tough
time with Covid as the main culprit. I have been always interested in technologies and the betterment they
provide for everybody and everything as efficiency is something I very much enjoy. While I do love to improve my
technical skills, I still try to improve myself in other ways by working out on a weekly consistent basis and
spending time with family and friends.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
