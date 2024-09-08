import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'


export default function Register() {

    localStorage.removeItem("userToken");


    const user = {
        name: "",
        email: "",
        password: "",
        rePassword: "",
        phone: "",
    }
    


    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const [buttonClicked, setButtonClicked] = useState(false);


    async function formSubmit(values) {
        
        /* try {
            const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values);
            console.log(data.message);
            
        } catch (error) {
            console.log(error.response.data.message);
            
        } */
        
        setButtonClicked(true);
        axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
            .then((result) => {
                setErrorMessage("");
                setSuccessMessage(result.data.message);
                console.log(result.data.message);
                console.log(result);
                setButtonClicked(false)
                setTimeout(() => {
                    navigate("/login");
                }, 1500)
            })
            .catch((error) => {
                setErrorMessage(error.response.data.message);
                setSuccessMessage("");
                console.log(error.response.data.message);
                setButtonClicked(false)

            })
    }

    const registerFormik = useFormik({
        initialValues: user,

        onSubmit: formSubmit,

        validationSchema: yup.object().shape({
            name: yup.string().required("Please Enter your name!!").min(3, "Name must be at least 3 characters!!").max(15, "Name must be at most 15 characters!!"),
            email: yup.string().required("Please Enter your email!!").email("Invalid Email!!"),
            password: yup.string().required("Please Enter a password!!").min(8, "Password must be at least 8 characters").max(20, "Password must be at most 20 characters!!"),
            rePassword: yup.string().required("Please confirm your password!!").oneOf([yup.ref('password')], "Confirm Password doesn't match password!!"),
            phone: yup.string().required("Please Enter your phone!!").matches(/^(002 | \+02)?01[0125][0-9]{8}$/, "Phone must be Egyptian number!!"),
        })
    })

    return (
        <>
            
            <div>
                <form onSubmit={registerFormik.handleSubmit} className="max-w-md mx-auto relative">

                    <h2 className='font-bold text-3xl mb-3'>Register Now:</h2>

                    <div className="relative z-0 w-full mb-5 group">

                        <input type="text" name="name" onChange={registerFormik.handleChange} onBlur={registerFormik.handleBlur} id="name" value={registerFormik.values.name} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">name</label>
                        {registerFormik.errors.name && registerFormik.touched.name ?
                            <div className="p-4 mb-4 mt-3 text-sm text-red-800 rounded-lg bg-red-200" role="alert">
                                <span className="font-medium">{registerFormik.errors?.name}</span>
                            </div>
                            : undefined}
                        
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="email" onChange={registerFormik.handleChange} onBlur={registerFormik.handleBlur} id="email" value={registerFormik.values.email} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">email</label>
                    
                        {registerFormik.errors.email && registerFormik.touched.email ?
                            <div className="p-4 mb-4 mt-3 text-sm text-red-800 rounded-lg bg-red-200" role="alert">
                                <span className="font-medium">{registerFormik.errors?.email}</span>
                            </div>
                            : undefined}
                    
                    </div>
                    
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="password" onChange={registerFormik.handleChange} onBlur={registerFormik.handleBlur} id="password" value={registerFormik.values.password} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
                    
                        {registerFormik.errors.password && registerFormik.touched.password ?
                            <div className="p-4 mb-4 mt-3 text-sm text-red-800 rounded-lg bg-red-200" role="alert">
                                <span className="font-medium">{registerFormik.errors?.password}</span>
                            </div>
                            : undefined}
                    </div>
                    
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="rePassword" onChange={registerFormik.handleChange} onBlur={registerFormik.handleBlur} id="rePassword" value={registerFormik.values.rePassword} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                    
                        {registerFormik.errors.rePassword && registerFormik.touched?.rePassword ?
                            <div className="p-4 mb-4 mt-3 text-sm text-red-800 rounded-lg bg-red-200" role="alert">
                                <span className="font-medium">{registerFormik.errors?.rePassword}</span>
                            </div>
                            : undefined}
                        
                    </div>
                    
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="tel" name="phone" onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} id="phone" value={registerFormik.values.phone} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
                    
                        {registerFormik.errors.phone && registerFormik.touched.phone ?
                            <div className="p-4 mb-4 mt-3 text-sm text-red-800 rounded-lg bg-red-200" role="alert">
                                <span className="font-medium">{registerFormik.errors?.phone}</span>
                            </div>
                            : undefined}
                    </div>

                
                
                    {errorMessage ? <div class="p-4 mb-4 text-sm text-yellow-300 rounded-lg bg-yellow-700 font-medium text-center" role="alert">
                        <span className=''>{errorMessage}</span>
                    </div> : ""}

                    {successMessage ? <>
                        <div class="p-4 mb-4 text-sm text-green-800 bg-green-400 rounded-lg font-medium text-center" role="alert">
                            <span class="">{successMessage}</span>
                        </div>
                    </> : ""}

                        
                    <div className="cursor-pointer text-center absolute left-full text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600">
                        {buttonClicked ? <RotatingLines
                            visible={true}
                            height="30"
                            width="30"
                            color="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            strokeColor="white"
                        />
                            : <button type="submit" >
                                <span>Register</span>
                            </button>}
                    </div>
                    
                    
                </form>
            </div>


        </>
        )
}
