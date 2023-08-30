import React from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tfi'

const Contacts = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dinevtomislav@gmail.com</h5>
            <a href='mailto:dinevtomislav@gmail.com' target='_blank'>Send A Message!</a>
          </article> 
        </div>
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts
