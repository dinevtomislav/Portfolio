import React from 'react'
import './services.css'
import {FaCheck} from 'react-icons/fa'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container service__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>User-Centered Design: Crafting designs that prioritize the needs and preferences of the end-users, ensuring a positive user experience.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Wireframing and Prototyping: Creating detailed blueprints and interactive prototypes to visualize and refine the design concepts.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Visual Design: Designing captivating graphics, icons, and layouts to enhance the aesthetic appeal of digital products.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Usability Testing: Conducting user testing to identify and address design issues for a seamless and intuitive user journey.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Responsive Design: Ensuring your designs are optimized for various devices, such as smartphones, tablets, and desktops.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Frontend Development: Creating the visual and interactive aspects of websites using HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Backend Development: Building server-side functionality, databases, and APIs to handle data processing and server communication.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Full-Stack Development: Combining frontend and backend development skills to create end-to-end web solutions.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Backend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Database Management: Designing and maintaining databases, ensuring efficient data storage and retrieval.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Server Configuration: Setting up and managing web servers to handle requests and deliver content.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>API Development: Building application programming interfaces (APIs) for seamless communication between the frontend and backend.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Security and Authentication: Implementing robust security measures, including user authentication and data encryption.</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Performance Optimization: Fine-tuning the backend to improve speed, scalability, and overall system performance.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
