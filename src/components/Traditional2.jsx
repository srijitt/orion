import React from 'react'
import oldnewway from '../assets/oldnewway2.png'

function Traditional2() {
    return (
        <div className='w-full flex flex-col-reverse md:flex-row justify-center items-center lg:mt-10'>

            <div className='w-[50vw] h-[50vh] flex flex-col items-center md:items-start justify-center md:pl-16'>

                <div className='flex flex-col items-start justify-center md:mt-10'>
                    <h1 className='text-primary text-xl lg:text-3xl font-bold text-center w-[90vw] md:w-[30vw]'>Disover New <span className='text-secondary'>Online Stress-free</span> learning Solutions with ORION</h1>
                    <p className='mt-4 flex flex-col justify-center md:text-xs lg:text-lg w-[90vw] md:w-[30vw] text-gray-500 pl-6 md:pl-0'>Benefits of Hyggex Learning Solutions
                        <ul className=''>
                            <li>• Reduced Stress: The focus on enjoyable and engaging methods helps reduce the stress commonly associated with traditional studying.</li>
                            <li>• Enhanced Engagement: Interactive and varied content keeps learners interested and motivated.</li>
                            <li>• Better Retention: Active learning strategies improve retention and understanding of material.</li>
                            <li>• Community Support: Virtual study groups and forums provide a sense of community and support.</li>
                            <li>• Community Support: Virtual study groups and forums provide a sense of community and support.</li>
                            <li>• Adaptability: The ability to learn at one's own pace and adapt the learning process to personal preferences.</li>
                        </ul>
                        </p>
                </div>

            </div>

            <div className='w-[70vw] md:w-[30vw] lg:w-[40vw] flex justify-center items-center md:items-start'>
                <img src={oldnewway} alt="" className='object-contain w-[70vw] md:w-[60vw] h-[70vh]' />
            </div>
        </div>
    )
}

export default Traditional2