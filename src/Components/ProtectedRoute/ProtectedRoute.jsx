import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
    
    if (localStorage.getItem("userToken") == null) {
        
        return (
            <>
                <Navigate to={'/login'}/>
            </>
        )
    }

    console.log(children);

    /* if (localStorage.getItem("userToken") && children.type.name == "ProductDetails")
    {
        return (
            <>
                <Navigate to={'/products'}/>
            </>
        )
    } */

    console.log(children);
    
    


    return (
        <>
            {children}
        </>
    )
}
