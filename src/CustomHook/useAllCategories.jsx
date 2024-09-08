import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function () {
    
    function apiAllCategories() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
    }

    const result = useQuery({
        queryKey: "allCategories",
        queryFn: apiAllCategories,
        retry: true,
    })

    //console.log(result.data);
    


    return result;
}
