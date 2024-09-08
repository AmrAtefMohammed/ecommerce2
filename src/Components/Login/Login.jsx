import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { ColorRing } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { AuthContextProvider } from '../../Context/AuthContext';
import { CartContext } from '../../Context/CartContext';


export default function Login() {

    localStorage.removeItem("userToken");


    const { setToken, token } = useContext(AuthContextProvider);
    const { getUserCart } = useContext(CartContext);

    const [errorMessage, setErrorMessage] = useState(null);
    const [loginClicked, setLoginClicked] = useState(false);

    const navigate = useNavigate();
    
    

    async function loginFunction(values) {
        setLoginClicked(true);
        //console.log(values);
        
        axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values).
            then(({ data }) => {
                console.log(data.token);
                
                localStorage.setItem("userToken", data.token);
                
                //console.log(data.message);
                setErrorMessage(null);
                setLoginClicked(false);

                getUserCart();
                
                //console.log(data);
                
                setToken(data.token);
                navigate("/products")
            })
            .catch((error) => {
                console.log(error.response.data.message);
                setLoginClicked(false);
                setErrorMessage(error.response.data.message);

            });
        
    }

    const loginFormik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: loginFunction,
        validationSchema: yup.object().shape({
            email: yup.string().required("You must Enter your email").email("Invalid Email"),
            password: yup.string().required("You must Enter your password"),
        })
    })


    return (
        <>
            <h1 className='text-5xl mb-6 text-center bg-blue-400 font-bold font-serif text-white py-3 w-1/2 mx-auto rounded-2xl'>Login</h1>

            <form className="max-w-sm mx-auto" onSubmit={loginFormik.handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input name='email' value={loginFormik.values.email} onChange={loginFormik.handleChange} onBlur={loginFormik.handleBlur} type="text" id="email" className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your Email..."/>
                
                    {loginFormik.errors.email && loginFormik.touched.email ? <div className="p-4 mt-3 text-sm text-red-800 rounded-lg bg-red-200" role="alert">
                        <span className="font-medium">{loginFormik.errors.email}</span>
                    </div> : ""}
                
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input name='password' value={loginFormik.values.password} onChange={loginFormik.handleChange} onBlur={loginFormik.handleBlur} type="password" id="password" className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Enter your Password...'/>
                
                    {loginFormik.errors.password && loginFormik.touched.password ? <div className="p-4 mt-3 text-sm text-red-800 rounded-lg bg-red-200" role="alert">
                        <span className="font-medium">{loginFormik.errors.password}</span>
                    </div> : ""}
                
                </div>
                
                
                {loginClicked ? <button type='button' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <ColorRing
                        visible={true}
                        height="25"
                        width="25"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
                        />
                </button> : <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                }
                
                {errorMessage ? <div class="flex items-center p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-200" role="alert">
                            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                            <span class="sr-only">Info</span>
                            <div>
                                <span class="font-medium">{errorMessage}</span>
                            </div>
                </div> : ""}
                



            </form>
        </>
    )
}
