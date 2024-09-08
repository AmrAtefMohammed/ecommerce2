import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CartContext } from './../../Context/CartContext';
import { ColorRing } from 'react-loader-spinner';
import toast from 'react-hot-toast';

export default function ProductDetails() {
    


    const { addProductToCart } = useContext(CartContext);
    const [addClicked, setAddClicked] = useState(false);

    /* const id = localStorage.getItem("productID");

    if (!id)
    {
        return <Navigate to={'/products'}/>
    } */
    
    const { id } = useParams();


    console.log(id);
    
    function apiProductDetails() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    }

    const { isSuccess, isLoading, isFetching, data } = useQuery({
        queryKey: ["productDetails", id],
        queryFn: apiProductDetails,
    })


    //console.log(isFetching);



    /* useEffect(() => {
        return () => {
            localStorage.removeItem("productID");
        }
    }, []) */


    async function handleAddProduct(id) {
        setAddClicked(true);
        const {flag: flagRespnse, message} = await addProductToCart(id);
        setAddClicked(false);
        if (flagRespnse) {
            console.log("flagResponse", flagRespnse);
            toast.success(message, {
                duration: 2000,
            });
            
        }
        else {
            console.log("flagResponse", flagRespnse);
            toast.error(message, {
                duration: 2000,
                className: "",
                

            });
        }
    }
    
    const productChaining = data?.data.data;
    
    return (
        <>
            {isSuccess ? <div className='flex items-center justify-between relative'>

                <Link className='absolute top-1 right-3' to='/products'>
                    <i class="fa-solid fa-square-xmark cursor-pointer fa-2xl text-red-600 hover:text-red-700 duration-300"></i>
                </Link>
                <div className='w-1/4'>
                    <img src={productChaining.imageCover} alt={productChaining.title} className='w-full rounded-xl' />
                </div>
                
                <div className='w-[70%]'>
                    <h2 className='text-2xl font-bold mb-4'>{productChaining.title}</h2>
                    <p className='text-sm font-bold mb-3 text-slate-700'>{productChaining.description}</p>
                    <span className='text-sm font-semibold mb-3 bg-emerald-700 text-white p-2 rounded-lg inline-block'>{productChaining.category.name}</span>
                    <div className='flex justify-between items-center'>
                        {productChaining.priceAfterDiscount ? <>
                            <p className='mb-4'>
                                <span className='line-through text-red-500 font-bold text-sm mx-2'>{ productChaining.price } L.E</span>
                                <span className='text-sm font-bold'>{productChaining.priceAfterDiscount} L.E</span>
                            </p>
                        </> : <>
                            <p className='mb-4 text-sm font-bold'>{productChaining.price}L.E</p>
                        </>}
                        
                        <p className='font-semibold'><i className='fa-solid fa-star text-yellow-400'></i> {productChaining.ratingsQuantity}</p>
                    </div>

                    {addClicked ? <button type='button' className="flex justify-center items-center w-full py-2 rounded-xl bg-green-500 hover:bg-green-700 duration-300 text-center my-3 text-white font-bold">
                        <ColorRing
                            visible={true}
                            height="25"
                            width="25"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
                            />
                        </button> :
                        <button onClick={() => { handleAddProduct(productChaining._id) }} className='w-full py-2 rounded-xl bg-green-500 hover:bg-green-700 duration-300 text-center my-3 text-white font-bold'>+ Add to Cart</button>}

                </div>

            </div> : <LoadingScreen/>}

    
        </>
    )
}
