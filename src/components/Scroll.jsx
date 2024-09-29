import React from 'react'
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';
import i5 from '../assets/i5.png';

function Scroll() {

    const items = [{
        img: i1
    },
    {
        img: i2,
    },
    {
        img: i3,
    },
    {
        img: i4
    },
    {
        img: i5
    }
    ]


    return (
        <div className='bg-white mt-10 w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 px-20'>
            <div className='text-secondary w-full md:w-fit text-center'>Industry veterans <span className='text-primary font-bold'>believe in us</span></div>

            <div className='w-full flex flex-wrap gap-10 md:gap-5 justify-between'>
               <img src={i1} alt="" className='w-[18vw] md:w-[9vw] lg:w-[8vw] xl:w-[6vw] object-contain'/>
               <img src={i2} alt="" className='w-[18vw] md:w-[9vw] lg:w-[8vw] xl:w-[6vw] object-contain'/>
               <img src={i3} alt="" className='w-[18vw] md:w-[9vw] lg:w-[8vw] xl:w-[6vw] object-contain'/>
               <img src={i4} alt="" className='w-[18vw] md:w-[9vw] lg:w-[8vw] xl:w-[6vw] object-contain'/>
               <img src={i5} alt="" className='w-[18vw] md:w-[9vw] lg:w-[8vw] xl:w-[6vw] object-contain'/>
            </div>
        </div>
    )
}

export default Scroll