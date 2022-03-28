import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

  // core version + navigation, pagination modules:
  import  {Pagination} from 'swiper';
  import {Swiper, SwiperSlide} from 'swiper/react'

  import 'swiper/css';
  import 'swiper/css/pagination';


  const data = [
    {
      avatar: AVTR1,
      name: 'Ernest Achiever',
      rewiev: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus unde quaerat dolorem quo perferendisatque veniam nobis dicta est hic suscipit, voluptatem deserunt temporibus, ad, nisi itaque quia consectetur accusantium?',
    },
    {
      avatar: AVTR2,
      name: 'Kwame Despite',
      rewiev: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus unde quaerat dolorem quo perferendisatque veniam nobis dicta est hic suscipit, voluptatem deserunt temporibus, ad, nisi itaque quia consectetur accusantium?',
    },
    {
      avatar: AVTR3,
      name: 'Ernest Achiever',
      rewiev: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus unde quaerat dolorem quo perferendisatque veniam nobis dicta est hic suscipit, voluptatem deserunt temporibus, ad, nisi itaque quia consectetur accusantium?',
    },
    {
      avatar: AVTR4,
      name: 'Nana Ama McBrown',
      rewiev: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus unde quaerat dolorem quo perferendisatque veniam nobis dicta est hic suscipit, voluptatem deserunt temporibus, ad, nisi itaque quia consectetur accusantium?',
    },
  ]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Rewiew from clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonials__container"
      modules = {[Pagination]}
      spaceBetween = {40}
      slidesPerView = {1}
      pagination = {{clickable: true}}>

        {
          data.map(({avatar, name, rewiev}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src= {avatar} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__rewiev">{rewiev}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>


    </section>
  )
}

export default Testimonials