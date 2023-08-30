import React from 'react'
import './contact.css'

const Contacts = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <h4>Email</h4>
            <h5>dinevtomislav@gmail.com</h5>
            <a href='mailto:dinevtomislav@gmail.com'>Send A Message!</a>
          </article> 
        </div>
        <form action=''></form>
      </div>
    </section>
  )
}

export default Contacts
