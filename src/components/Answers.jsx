import React from 'react'
import QCard from './QCard'

function Answers() {
    return (
        <div className='bg-white md:mt-8 lg:mt-20 w-full flex flex-col justify-center items-center'>
            <div className='w-full flex flex-col justify-center items-center'>
                <h1 className='text-2xl w-2/3 text-center lg:text-5xl font-bold text-primary'>Answers to your Questions</h1>
            </div>

            <div className='mt-8 lg:mt-14 text-primary w-[90vw] flex flex-col items-center'>
                <QCard />
                <QCard />
                <QCard />
                <QCard />
            </div>
        </div>
    )
}

export default Answers