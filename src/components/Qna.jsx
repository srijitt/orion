import React from 'react'
import Card from './Card'

function Qna() {


  return (
    <div className='mt-20 w-full flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-2xl w-2/3 text-center lg:text-4xl font-bold text-primary'>Are you really <span className='text-secondary'>Motivated</span> to study?</h1>

            <p className='mt-4 text-sm md:text-base text-gray-800 w-2/3 md:1/3 lg:w-1/4 text-center'>Answer these few Questions to know your Motivation Level & Find How You can work on Improving or Maintaining it  </p>
        </div>

        <div className='flex flex-col items-center justify-center mt-8 rounded-xl mx-4 py-8 md:mx-0 md:w-[70vw] h-[65vh] bg-gradient-to-br from-primary to-slate-400'>
            <Card />
            <p className='text-white text-center text-sm md:text-lg pt-4'>1250 Students Reported  Improvement in their Grades with Orion learning Solutions</p>
        </div>
    </div>
  )
}

export default Qna