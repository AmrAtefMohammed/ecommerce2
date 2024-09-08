import React from 'react'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {

    

    return (
        <>
            <Navbar />

            <div className='w-10/12 mx-auto p-9'>
                
                <div className='mt-32'>
                    <Outlet/>
                </div>

            </div>
            
            <Footer />
        </>
    )
}
