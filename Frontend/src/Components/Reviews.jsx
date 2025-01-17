import React from 'react'
import ReviewCard from './ReviewCard'
import { review } from '../../utils'
const Reviews = () => {
  return (
    <div className='bg-bgColor font-primary py-20'>
        <h1 className='text-center mb-10 text-2xl font-semibold'>Discover the timeless charm of RoomI<span className='text-red-600'>Q</span></h1>
        <div className='flex  justify-around'> 
          {
            review.map((item,index)=>(
              <div key={index}>
                <ReviewCard  author={item.author} quote={item.quote} />
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Reviews
