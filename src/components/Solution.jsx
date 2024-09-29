import React from 'react'
import bg from '../assets/solution-bg.png'
import col from '../assets/Col.png'

function Solution() {
    const myStyle = {
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className='bg-white mt-20 pt-20 w-full flex flex-col justify-center items-center' style={myStyle}>
            <div className='w-full flex flex-col justify-center items-center'>
                <h1 className='text-2xl w-2/3 text-center lg:text-4xl font-bold text-primary'><span className='text-secondary'>Our Solution</span> to your Study Problems </h1>

                <div className='mt-4 flex justify-center gap-20 px-4 text-gray-700'>
                    <p className='text-sm md:text-lg '>Not well Marks</p>
                    <p className='text-sm md:text-lg text-purple-500'>No Proper Time table</p>
                    <p className='text-sm md:text-lg '>Average Exams performance</p>
                </div>
            </div>

            <div className='w-full flex flex-col-reverse md:flex-row-reverse justify-center items-center lg:mt-10'>

                <div className='w-[50vw] h-[50vh] flex flex-col items-center md:items-start justify-center md:pl-16'>

                    <div className='flex flex-col items-center justify-center md:mt-10'>
                        <h1 className=' text-xl lg:text-3xl font-bold text-primary w-[90vw] md:w-[50vw] lg:w-[40vw]'>Problem in Creating and Following Time Table</h1>
                        <p className='flex flex-col justify-center md:text-xs lg:text-lg mt-6 w-[90vw] md:w-[50vw] lg:w-[40vw] text-secondary font-semibold pl-6 md:pl-0'>Overwhelming Schedule
                            <p className='text-primary'>Problem: Trying to fit too many tasks into a limited time can be overwhelming. Solution: Prioritize tasks and break them into smaller, manageable chunks. Use a planner or app to spread tasks out over a realistic timeline.</p>
                        </p>

                        <p className='flex flex-col justify-center md:text-xs lg:text-lg mt-6 w-[90vw] md:w-[50vw] lg:w-[40vw] text-secondary font-semibold pl-6 md:pl-0'>Lack of Flexibility
                            <p className='text-primary'>Problem: Rigid schedules can lead to stress and frustration when unexpected events occur. Solution: Build in buffer times for breaks and unexpected delays. Allow some flexibility in your schedule to adapt to changes.</p>
                        </p>

                        <p className='flex flex-col justify-center md:text-xs lg:text-lg mt-6 w-[90vw] md:w-[50vw] lg:w-[40vw] text-secondary font-semibold pl-6 md:pl-0'>Procrastination
                            <p className='text-primary'>Problem: Delaying tasks can disrupt your timetable and cause stress. Solution: Use techniques like the Pomodoro Technique (25 minutes of focused work followed by a 5-minute break) to maintain focus and prevent procrastination.</p>
                        </p>

                    </div>

                </div>

                <div className='w-[70vw] md:w-[30vw] flex justify-center items-center md:items-start'>
                    <img src={col} alt="" className='object-contain w-[70vw] md:w-[60vw] h-[70vh]' />
                </div>
            </div>
        </div>
    )
}

export default Solution