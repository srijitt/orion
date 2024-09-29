import React from 'react'
import dashboard from '../assets/dashboard.png'

function Hero() {
    return (
        <div className='w-full flex flex-col-reverse md:flex-row justify-center items-center'>

            <div className='w-full flex flex-col items-center md:items-start justify-center md:pl-16'>

                <div className='flex flex-col items-center justify-center md:mt-10'>
                    <h1 className='text-gray-800 text-3xl lg:text-5xl font-bold w-[90vw] md:w-[50vw] lg:w-[40vw]'>The only learning platform that helps you score better marks and support self-growth.</h1>
                    <p className='text-gray-800 md:text-lg mt-4 w-[90vw] md:w-[50vw] lg:w-[40vw]'>Study with a self-aware adaptive system, understand, remember, and master subjects without worry, and know your academic strengths and weaknesses to truly succeed.</p>
                </div>

                <div className='flex items-center justify-center mt-6 gap-8'>
                    <button className='text-white bg-primary px-6 py-2 font-semibold rounded-lg md:text-xs lg:text-base'>Start Now - It's FREE</button>

                    <button className='text-secondary opacity-50 border-2 border-secondary px-6 py-2 font-semibold rounded-lg md:text-xs lg:text-base'>Book a Demo</button>
                </div>

            </div>

            <div className='w-full flex justify-center items-center md:items-start'>
                <img src={dashboard} alt="" className='object-contain w-[80vw] md:w-[70vw]' />
            </div>
        </div>
    )
}

export default Hero