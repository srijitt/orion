import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
    return (
        <div className='hidden w-full md:flex justify-between p-8'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex justify-center items-center w-fit gap-10'>
                <button className='text-primary font-bold'>Learn</button>
                <button className='text-primary font-bold'>Practice</button>
                <button className='text-primary font-bold'>Assessments</button>
            </div>
            <div className='flex justify-center items-center w-fit gap-4'>
                <button className='text-primary border-2 border-primary px-6 py-2 font-semibold rounded-lg'>Login</button>

                <button className='text-white bg-primary px-6 py-2 font-semibold rounded-lg'>Sign-up</button>
            </div>
        </div>
    )
}

export default Navbar