import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>24/7 Customer Support</p>
        <p className='text-gray-400'>Our dedicated team is available around the clock to assist you with any inquiries.</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>User-Friendly Shopping Experience</p>
        <p className='text-gray-400'>Enjoy a seamless and enjoyable online shopping experience tailored just for you.</p>
      </div>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Secure Transactions</p>
        <p className='text-gray-400'>Shop with confidence knowing that your information is protected with us.</p>
      </div>

    </div>
  )
}

export default OurPolicy
