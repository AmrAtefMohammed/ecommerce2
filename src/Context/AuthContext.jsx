import { createContext, useEffect, useState } from "react"


export const AuthContextProvider = createContext();
export default function AuthContext({ children }) {
    
    const [token, setToken] = useState(null);

    //console.log(token);


    useEffect(() => {
        const tkn = localStorage.getItem("userToken");
        if (tkn) {
            setToken(tkn);
        }
    }, [])
    

    return (
        <AuthContextProvider.Provider value={{token, setToken}}>
            {children}
        </AuthContextProvider.Provider>
    )
}
