import React from 'react'
import oldnewway from '../assets/oldnewway.png'

function Traditional() {
    return (
        <div className='w-full flex flex-col-reverse md:flex-row-reverse justify-center items-center lg:mt-10'>

            <div className='w-[50vw] h-[50vh] flex flex-col items-center md:items-start justify-center md:pl-16'>

                <div className='flex flex-col items-center justify-center md:mt-10'>
                    <h1 className='text-gray-800 text-xl lg:text-3xl font-semibold text-center w-[90vw] md:w-[50vw] lg:w-[40vw]'>Traditional Ways of Studying, <span className='text-secondary'>Quite Frustrating</span></h1>
                    <p className='flex flex-col justify-center md:text-xs lg:text-lg mt-4 w-[90vw] md:w-[50vw] lg:w-[40vw] text-gray-500 pl-6 md:pl-0'>Challenges of Traditional Studying
                        <ol className=''>
                            <li>1. Monotony: Repetitive and unengaging study methods can lead to boredom.</li>
                            <li>2. Passive Learning: Methods like rote memorization often lead to shallow understanding.</li>
                            <li>3. Limited Interaction: Studying alone can limit discussion and different perspectives.
                            Time Management: It can be difficult to balance study time with other responsibilities.</li>
                            <li>4. Lack of Resources: Sometimes traditional methods do not provide enough variety in materials and perspectives.</li>
                        </ol>
                        </p>
                </div>

            </div>

            <div className='w-[70vw] md:w-[30vw] lg:w-[40vw] flex justify-center items-center md:items-start'>
                <img src={oldnewway} alt="" className='object-contain w-[70vw] md:w-[60vw] h-[70vh]' />
            </div>
        </div>
    )
}

export default Traditional