import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className=''>
                <div className='py-14 w-11/12 mx-auto'>
                    <p className='font-semibold text-2xl text-slate-800'>Get the Fresh Cart App</p>
                    <p className='font-medium text-lg text-gray-500 my-2'>We will send you a link, open it on your phone to download the app</p>

                    <div className='my-5 flex lg:items-center flex-col lg:flex-row space-x-6'>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-2 w-9/12 lg:w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" "/>
                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>

                        <button type="button" className="block w-1/2 lg:w-2/12 text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-4 py-3 duration-200">Share App Link</button>

                    </div>

                    <div className='mt-8 flex flex-col lg:flex-row lg:justify-between lg:items-center flex-wrap lg:flex-nowrap'>
                        <div className='flex items-center space-x-5 mb-9 lg:mb-0'>
                            <p className='text-black font-normal text-lg'>Payment Partners</p>
                            <div className='flex space-x-3'>
                                <i className="cursor-pointer fa-2xl fa-brands fa-amazon-pay text-yellow-500"></i>
                                <i className="cursor-pointer fa-2xl fa-brands fa-cc-visa text-blue-700"></i>
                                <i className="cursor-pointer fa-2xl fa-brands fa-cc-mastercard text-orange-700"></i>
                                <i className="cursor-pointer fa-2xl fa-brands fa-cc-paypal text-red-600"></i>
                            </div>
                        </div>
                        <div className='flex lg:items-center space-x-2 flex-col lg:flex-row'>
                            <p className='text-black font-normal text-lg mb-4 lg:mb-0'>Get deliveries with Fresh Cart</p>

                            <div className='flex items-center space-x-3'>
                                <button type="button" class="flex items-center justify-center w-40 text-white bg-black h-14 rounded-xl">
                                    <div class="mr-3">
                                        <svg viewBox="0 0 384 512" width="30">
                                            <path fill="currentColor"
                                                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="text-xs">
                                            Download on the
                                        </div>
                                        <div class="-mt-1 font-sans text-xl font-semibold">
                                            App Store
                                        </div>
                                    </div>
                                </button>

                                <button type="button" class="flex items-center justify-center w-40 text-white bg-black rounded-lg h-14">
                                    <div class="mr-3">
                                        <svg viewBox="30 336.7 120.9 129.2" width="30">
                                            <path fill="#FFD400"
                                                d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z">
                                            </path>
                                            <path fill="#FF3333"
                                                d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z">
                                            </path>
                                            <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z">
                                            </path>
                                            <path fill="#3BCCFF"
                                                d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="text-xs">
                                            GET IT ON
                                        </div>
                                        <div class="-mt-1 font-sans text-xl font-semibold">
                                            Google Play
                                        </div>
                                    </div>
                                </button>

                                
                            </div>
                        
                        </div>
                    </div>
                
                </div>
            </footer>

        </>
    )
}
