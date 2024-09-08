import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen'

export default function Brands() {

    function apiAllBrands() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
    }

    const {isSuccess, isLoading, data, isError, isFetching} = useQuery({
        queryKey: "allBrands",
        queryFn: apiAllBrands,
        retry: true,
    })
    return (
        <>
            
            {isSuccess ? <>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                    {data.data.data.map((brand) => {
                        return <>
                            <div key={brand._id} className='brand p-4 border-2 border-gray-400 rounded-2xl'>
                                <img src= {brand.image} alt= {brand.name} className='w-full cursor-pointer' />
                            </div>
                        </>
                    })}  
                </div>
            
            </> : isLoading ? <LoadingScreen/> : ""}

        </>
    )
}
