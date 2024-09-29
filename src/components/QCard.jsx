import React, { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

function QCard() {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

  return (
    <div className='w-[80vw] p-4'>
        <div className='flex justify-between border-b-2 pb-6'>
            <h1 className='text- primary md:text-xl font-semibold '>Lorem ipsum dolor sit, amet consectetur adipisicing elit?</h1>
            <button onClick={handleClick}>{isVisible ? <CiCircleMinus size={30} /> : <CiCirclePlus size={30}/>}</button>
        </div>
        <div className={isVisible ? `block mt-4 md:text-lg border-b-2 pb-6` : `hidden border-b-2 pb-6`}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint possimus fugit illum laudantium amet placeat, dolor corrupti soluta repellendus iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia quidem ut consequatur ullam maiores necessitatibus ducimus beatae, quibusdam deserunt!</p>
        </div>
    </div>
  )
}

export default QCard