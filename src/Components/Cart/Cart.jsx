import React, { useContext } from 'react'
import { AuthContextProvider } from '../../Context/AuthContext'
import { CartContext } from './../../Context/CartContext';
import { ColorRing } from 'react-loader-spinner';
import { useState } from 'react';
import toast from 'react-hot-toast';


export default function Cart() {

    const { token } = useContext(AuthContextProvider);

    const { products: boughtProducts, numOfCartItems, totalPrice, updateProductCart, deleteProductCart, emptyTheCart } = useContext(CartContext);

    //console.log(token);
    

    function handleUpdateProductCount(productID, newCount) {
        //console.log(productID);
        
        updateProductCart(productID, newCount);
    }

    const [delClicked, setDelClicked] = useState(false); 

    async function handleDeleteProduct(productId) {
        await deleteProductCart(productId);
    }

    async function emptyCart() {
        const { message, flag } = await emptyTheCart();
        if (flag) {
            toast.success(message, {
                duration: 2000,
                position: 'top-right',
            })
        }
        else {
            toast.error(message, {
                duration: 2000,
                position: 'top-right',
            })
        }
    }

    return (
        <>
            <h2 className='font-bold text-2xl mb-5 font-sans'>Shop Cart</h2>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-lg font-semibold mb-5 text-green-600'>Number of cart Items: <span className='text-black'>{ numOfCartItems }</span></p>
                    <p className='text-lg font-semibold mb-5 text-green-600'>Total Cart Price : <span className='text-white bg-black p-2 rounded-xl font-semi-bold text-sm'>{totalPrice} EGP</span></p>
                </div>       
                <div>
                    <button onClick={()=>{emptyCart()}} className='text-lg font-semibold text-red-500 cursor-pointer hover:text-red-700 duration-300'><i class="fa-solid fa-trash-can fa-xl"></i> Remove All Products </button>
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-16 py-3">
                        <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Qty
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {boughtProducts.map((product) => {
                            return <>
                                <tr key={product._id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="p-4">
                                    <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">
                                    {product.product.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                        {product.count > 1 ? <button onClick={()=>{handleUpdateProductCount(product.product._id, --(product.count))}} className="minusOperator inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                                        <span className="sr-only">Quantity button</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                        </svg>
                                        </button>: <button onClick={()=>{handleUpdateProductCount(product.product._id, --(product.count))}} disabled className="minusOperator opacity-0 inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                                        <span className="sr-only">Quantity button</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                        </svg>
                                        </button>}
                                        <div>
                                        <input type="text" id="first_product" className="bg-gray-50 w-14 border border-gray-500 text-center text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1" value={product.count}/>
                                        </div>
                                        <button onClick={()=>{handleUpdateProductCount(product.product._id, ++(product.count))}} className="plusOperator inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200" type="button">
                                        <span className="sr-only">Quantity button</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                        </svg>
                                        </button>
                                    </div>
                                    </td>
                                    <td className="py-4 font-semibold text-gray-900">
                                    {product.price} EGP
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => { handleDeleteProduct(product.product._id) }} className="font-medium text-green-600 fa-2xl"><i class="fa-solid fa-trash-can"></i></button>
                                        
                                    </td>
                                </tr>
                            </>
                        })}
                    </tbody>
                </table>
            </div>
        </>)
    }

    
    