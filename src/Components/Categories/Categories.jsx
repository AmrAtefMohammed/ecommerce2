import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import useAllCategories from '../../CustomHook/useAllCategories'

export default function Categories() {

    const {data, isError, isFetching, isLoading, isSuccess} = useAllCategories()


    return (
        <>
            
            {isSuccess ? <>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                    {data.data.data.map((category) => {
                        return <>
                            <div key={category._id} className='category p-4'>
                                <img src={category.image} alt={category.name} className='w-full cursor-pointer h-56 rounded-2xl' />
                                <h2 className='text-center font-semibold font-mono text-xl my-5'>{category.name}</h2>
                            </div>
                        </>
                    })}  
                </div>
            
            </> : isLoading ? <LoadingScreen /> : ""}
            

            

        </>
    )
}
