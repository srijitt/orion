import React from 'react'
import bg from '../assets/circles.png'

function Pricing() {
    const myStyle = {
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundHeight: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <section className="mt-14 text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-2 text-primary">Clear, <span className='text-secondary'>Affordable</span> Pricing</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Start my 14-day free trial today – no credit card required.</p>
                    <div className="flex mx-auto  rounded overflow-hidden mt-6">
                        <button className="py-2 px-4 bg-primary text-white focus:outline-none">Start My free trial Now</button>

                    </div>
                </div>
                <div className="flex flex-wrap justify-center -m-4">
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg  text-center bg-secondary bg-opacity-20 flex flex-col relative overflow-hidden">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-secondary">Basic Plan</h2>
                            <h1 className="text-5xl pb-4   leading-none text-secondary">$10/mth</h1>
                            <h2 className="text-xs tracking-widest title-font border-b pb-3 border-primary font-medium text-secondary">Billed Annually</h2>
                            <p className="pt-6 flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Access to all basic features
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Basic reporting and analytics
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Up to 10 individual users
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>20GB individual data each user
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Basic chat and email support
                            </p>
                            <button className="flex items-center mt-auto text-white bg-primary border-0 py-2 px-4 w-full focus:outline-none hover:bg-secondary rounded">Buy Now
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg  text-center bg-primary  flex flex-col relative overflow-hidden">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-white">Pro Plan</h2>
                            <h1 className="text-5xl pb-4   leading-none text-white">$28/mth</h1>
                            <h2 className="text-xs tracking-widest title-font border-b pb-3 border-white font-medium text-white">Billed Annually</h2>
                            <p className="pt-6 flex items-center text-white mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Access to all basic features
                            </p>
                            <p className="flex items-center text-white mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Basic reporting and analytics
                            </p>
                            <p className="flex items-center text-white mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Up to 10 individual users
                            </p>
                            <p className="flex items-center text-white mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>20GB individual data each user
                            </p>
                            <p className="flex items-center text-white mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Basic chat and email support
                            </p>
                            <button className="flex items-center mt-auto  bg-white border-0 py-2 px-4 w-full focus:outline-none hover:bg-secondary text-primary rounded">Buy Now
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Pricing