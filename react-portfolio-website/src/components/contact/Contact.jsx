import React from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {BsLinkedin} from 'react-icons/bs'

const options = [
  {icon: <TfiEmail className='contact__option-icon'/>, title: 'Email',
   text: 'dinevtomislav@gmail.com', link: 'mailto:dinevtomislav@gmail.com', cta: 'Send an email'},
  {icon: <BsLinkedin className='contact__option-icon'/>, title: 'LinkedIn',
   text: 'Tomislav Dinev', link: 'https://www.linkedin.com/in/tomislav-dinev/', cta: 'Message me'},
]

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        {options.map(({icon, title, text, link, cta}) => (
          <article key={title} className='contact__option'>
            {icon}
            <h4>{title}</h4>
            <h5>{text}</h5>
            <a href={link} target='_blank' rel='noreferrer'>{cta}</a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Contact
