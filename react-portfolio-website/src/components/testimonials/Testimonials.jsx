import React from 'react'
import './testimonials.css'


// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
  name: 'Tina Snow',
  review: `Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro
  blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores
  deserunt explicabo nostrum ducimus quasi?`
  },
  {
  name: 'Shatta Wale',
  review: `Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro
  blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores
  deserunt explicabo nostrum ducimus quasi?`
  },
  {
  name: 'Kwame Despite',
  review: `Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro
  blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores
  deserunt explicabo nostrum ducimus quasi?`
  },
  {
  name: 'Nana Ama McBrown',
  review: `Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro
  blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores
  deserunt explicabo nostrum ducimus quasi?`
  },
]
const Testimonials = () => {
  return (
  <section id='testimonials'>
  <h5>Review from clients</h5>
  <h2>Testimonials</h2>
  <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
    {
      data.map(({avatar, name, review}, index) => {
        return(
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
          <img src={avatar}/>
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
          </SwiperSlide>
        )
      })
    }
  </Swiper>
  </section>
  )
}

export default Testimonials
