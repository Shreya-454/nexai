import React from 'react'
import Button from './Button'
import w4 from '../assets/images/w4.webp'
const Ready = () => {
  return (
    <div className='relative lg:pb-[89px] lg:pt-[124px] md:py-10 py-5 '>
      <div className="max-w-[1140px] mx-auto  max-xl:px-3">
        <div className='flex flex-row flex-wrap -mx-3 '>
          <div className=' lg:w-1/2 w-full px-3'>
            <h2 data-aos="fade-right" className='font-recharge md:text-[40px] sm:text-4xl text-3xl font-bold md:leading-[52px] text-white max-w-[517px] max-lg:text-center max-lg:mx-auto'>Ready to get started
            <span className='text-[#02CDCF]'> Talk to us Today</span> </h2>
          </div>
          <div className=' lg:w-1/2 px-3 w-full items-center flex lg:justify-end justify-center lg:mt-0 md:mt-10 mt-5'>
            <Button text="Get Started"/>
          </div>
        </div>
      </div>
      <div className="w-[228px] h-[228px] bg-[#02CDCF] blur-[200px] absolute left-[-10%] top-[-5%] hidden md:block"></div>
      <img src={w4} alt="w" className='absolute right-0 top-[-10%]' />
      <div className="w-[228px] h-[228px] bg-[#02CDCF] blur-[170px] absolute right-[-10%] top-[55%] hidden lg:block"></div>
    </div>
  )
}

export default Ready
