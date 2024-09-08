import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { RotatingSquare, ColorRing } from 'react-loader-spinner';
import HomeSlider from '../HomeSlider/HomeSlider';
import categorySlider1 from '../../assets/images/blog-img-1.jpeg'
import categorySlider2 from '../../assets/images/blog-img-2.jpeg'
import CategorySlider from '../CategorySlider/CategorySlider';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { CartContext } from './../../Context/CartContext';
import toast from 'react-hot-toast';

export default function Products() {

    //const [allProducts, setAllProducts] = useState(null);

    const {addProductToCart} = useContext(CartContext);

    function apiAllProducts() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/products")
    }

    /* useEffect(() => {
        apiAllProducts();
    }, []) */


    const result = useQuery({
        queryKey: "allProducts",
        queryFn: apiAllProducts,
        //refetchOnMount: "always",
        //refetchInterval: 1000,
        //retry: Infinity,
        //retryDelay: 1000 * 60,
        //cacheTime: 1000,
        //staleTime: 1000,
        //refetchOnWindowFocus: false,
        placeholderData: keepPreviousData,
        retry: 0,
    })

    console.log(result.isFetching);
    
    
    async function handleAddProduct(id) {
        const { message, flag } = await addProductToCart(id);
        //console.log(message);
        if (flag) {
            toast.success(message, {
                duration: 2000,
            });
        } else {
            toast.error(message, {
                duration: 2000,
            })
        }
    };


    return (
        <>
            
            {result.isSuccess == true ? <>
                <div className='flex'>
                    <div className='w-9/12'>
                        <HomeSlider/>
                    </div>
                    <div className='w-3/12'>
                        <div>
                            <img src={categorySlider1} className='w-full h-40 rounded-lg' alt="" />
                        </div>
                        <div>
                            <img src={categorySlider2} className='w-full h-40 rounded-lg' alt="" />
                        </div>
                    </div>
                </div>
                <div className='my-14'>
                    <CategorySlider/>
                </div>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 my-6 gap-4'>
                    {result.data.data.data.map((product) => {
                    
                        return( 
                            <div className='overflow-hidden group relative pb-14 pt-4 px-4 shadow-xl shadow-gray-400  hover:scale-105 duration-300'> 
                                <button onClick={() => { handleAddProduct(product._id) }} className='rounded-lg absolute -bottom-full start-0 end-0 text-center bg-green-600 hover:bg-green-700 duration-200 text-white font-bold py-2 group-hover:bottom-2'>Add to Cart</button>
                                
                                <Link to={`/productDetails/${product._id}`} className=''>
                                    <div key={product._id} className='overflow-hidden cursor-pointer'>
                                    <img src={product.imageCover} className='w-full rounded-lg' alt="" />
                                    <p className='mt-5 text-green-400 font-bold text-2xl md:text-lg mb-3'>{product.category.name}</p>
                                    <p className=' text-black font-bold text-lg md:text-sm mb-4'>{product.title.split(" ", 2).join(" ")}</p>
                                    <div className='flex justify-between items-center text-black text-sm md:text-xs mb-3 font-bold'>
                                        <p className=' '>{product.priceAfterDiscount ? 
                                            <>
                                                <span className='line-through text-red-500'>{ product.price } L.E</span>
                                                <span className='ps-2'>{product.priceAfterDiscount} L.E</span> 
                                            </> :
                                            <span>{product.price} L.E</span>}</p>
                                        <p><i className='fa-solid fa-star text-yellow-400'></i> {product.ratingsQuantity}</p>
                                        </div>
                                        
                                </div>
                                </Link>
                            </div>
                    )}
                )}
                </div>
                </>
                
                : result.isLoading == true ? <LoadingScreen/> : result.isError? console.log(result.error) : ""
                
            }
            


        </>
    )
}
