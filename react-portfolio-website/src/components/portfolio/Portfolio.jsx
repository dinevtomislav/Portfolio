import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/connectify.png'
import IMG2 from '../../assets/brain.png'
import IMG3 from '../../assets/library.png'
import IMG4 from '../../assets/trvia.png'
import video from '../../assets/pr1.mp4'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Connectify - a platform for employees and business professionals to colaborate',
    github: 'https://github.com/mithurssan/connectify_frontend',
    demo: 'https://connectifysite.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Braincrastination - a scheduling site that rewards points',
    github: 'https://github.com/JackDMoore/Brainiac-Brigade',
    demo: 'https://brainiac-brigade.onrender.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Florin County Council Library - a library application',
    github: 'https://github.com/JackDMoore/mvp_library_app',
    demo: 'https://florin-county-library-app-s.onrender.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Infinity - A quiz game to help students pick GCSE non-STEM subjects.',
    github: 'https://github.com/dinevtomislav/1st-project-Infinity',
    demo: video
  },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/16541289-Orion-Ul-kit-Charts-templates-infographics-in-Figma'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/15887665-Orion-Ul-kit-Charts-templates-infographics-in-Figma'
  // }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
