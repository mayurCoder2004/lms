import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <div className='pb-14 px-8 md:px-0 max-w-7xl mx-auto'>
      <h2 className='text-3xl font-medium text-gray-800 text-center'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3 text-center'>
        Hear from our learners as they share their journeys of transformation, success, and how our
        <br className='hidden md:block' />
        platform has made a difference in their lives.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className='text-sm text-left border border-gray-300 pb-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300'
          >
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-100 rounded-t-xl'>
              <img
                className='h-12 w-12 rounded-full object-cover'
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h1 className='text-lg font-semibold text-gray-800'>{testimonial.name}</h1>
                <p className='text-gray-600'>{testimonial.role}</p>
              </div>
            </div>

            <div className='p-5'>
              <div className='flex gap-1 mb-4'>
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    className='h-5'
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt={i < Math.floor(testimonial.rating) ? 'Filled Star' : 'Empty Star'}
                  />
                ))}
              </div>
              <p className='text-gray-500'>{testimonial.feedback}</p>
            </div>
            <a href="#" className='text-blue-500 underline px-5'>Read more</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection
