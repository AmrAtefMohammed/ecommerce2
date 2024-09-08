import React, { useContext } from 'react'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContextProvider } from '../../Context/AuthContext'
import { CartContext } from '../../Context/CartContext';

export default function Navbar() {

    const { token, setToken } = useContext(AuthContextProvider);
    const { numOfCartItems } = useContext(CartContext);

    const navigate = useNavigate();

    function exit() {
        localStorage.removeItem("userToken")
        setToken(null);
        navigate("/login");
    }
    

    return (
        <>

            <nav className='flex items-center justify-between p-5 bg-emerald-400 fixed left-0 right-0 z-20'>
                <div className='flex items-center space-x-6'>
                    <Link to='/products'>
                        <img src={logo} alt="freshcart logo" />
                    </Link>

                    {token ? <ul className='flex items-center space-x-4'>
                        <NavLink className="text-gray-600 font-bold" to="products">Products</NavLink>
                        <NavLink className="text-gray-600 font-bold" to="categories">Categories</NavLink>
                        <NavLink className="text-gray-600 font-bold" to="brands">Brands</NavLink>
                        <NavLink className="text-gray-600 font-bold" to="cart">Cart</NavLink>
                    </ul>: ""}
                </div>
                <div className='flex items-center gap-5'>
                    <Link to={'/cart'} className='relative'>
                        <i class="fa-solid fa-cart-shopping fa-xl text-black font-medium cursor-pointer"></i>
                        <p className='text-white font-bold text-lg absolute -top-full left-1/2 -translate-x-1/2'>{ numOfCartItems }</p>
                    </Link>
                    <ul className='flex items-center space-x-4'>
                        <li><i className="cursor-pointer fa-brands fa-facebook fa-l"></i></li>
                        <li><i className="cursor-pointer fa-brands fa-twitter fa-l"></i></li>
                        <li><i className="cursor-pointer fa-brands fa-instagram fa-l"></i></li>
                        <li><i className="cursor-pointer fa-brands fa-tiktok fa-l"></i></li>
                        <li><i className="cursor-pointer fa-brands fa-linkedin fa-l"></i></li>
                        <li><i className="cursor-pointer fa-brands fa-youtube fa-l"></i></li>
                    </ul>
                    
                    
                    
                    <ul className='text-gray-600 font-serif text-xl space-x-2 flex items-center'>
                        {token ? <li>
                            <span className='cursor-pointer' onClick={exit}>Logout</span>
                        </li> : <>
                            <li>
                                <NavLink to="register" className="cursor-pointer">Register</NavLink>
                            </li>

                            <li>
                                <NavLink to="login" className="cursor-pointer">Login</NavLink>
                                </li>
                        </>}

                        
                    </ul>
                </div>
            </nav>



        </>
    )
}
