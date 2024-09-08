import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    
    const [numOfCartItems, setNumOfCartItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);


    //console.log(totalPrice);
    
    
    const token = localStorage.getItem("userToken");
    
    function getUserCart() {        
        axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
            headers: {
                token
            },
        }).then((response) => {
            setProducts(response.data.data.products);
            setNumOfCartItems(response.data.numOfCartItems);
            setTotalPrice(response.data.data.totalCartPrice);

            //console.log(products);
            //console.log(numOfCartItems);
            //console.log(totalPrice);

        })
            .catch((error) => {
                //console.log(error.response.data.message);
                //console.log(token);
                
            })
    }

    useEffect(() => {
        getUserCart();
    },[])


    async function addProductToCart(productId) {
        let message = "";
        let flag = null;
        await axios.post("https://ecommerce.routemisr.com/api/v1/cart", {
            "productId": productId
        }, {
            headers: {
                "token": token,
            }
        })
            .then((response) => {
                //console.log(token);
                
                getUserCart();

                //console.log(response.data);
                
                message = response.data.message
                flag =  true;
            })
            .catch((err) => {
                //console.log(err);
                
                message = err.response.data.message;
                flag = false;
                
            })
        //console.log(message);
        
        return {
            flag,
            message,
        };
    };

    //console.log(products);
    


    async function updateProductCart(productId, newCount) {
        await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
            "count": newCount
        }, {
            headers: {
                token,
            }
        })
            .then(({ data }) => {
                
                //console.log(data);
                
                setNumOfCartItems(data.numOfCartItems);
                setProducts(data.data.products);
                setTotalPrice(data.data.totalCartPrice);

                console.log(totalPrice);
                
            
            })
            .catch((err) => {
                console.log(err.response.data.message);
            
        })
    }

    async function deleteProductCart(productId) {
        axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
            headers: {
                token,
            }
        })
            .then(({ data }) => {
                setNumOfCartItems(data.numOfCartItems);
                setProducts(data.data.products);
                setTotalPrice(data.data.totalCartPrice);
            
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })
    }

    async function emptyTheCart() {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
            headers: { token, }
        })
            .then(({data}) => {
                setNumOfCartItems(0);
                setProducts([]);
                setTotalPrice(0);
                return {message : data.message, flag: true}
            })
            .catch((err) => {
                //console.log(err.response.data.message);
                return {message : err.response.data.message, flag: false}
            })
    }

    //console.log(totalPrice);
    


    return (
        <CartContext.Provider value={{
            addProductToCart,
            getUserCart,
            products,
            totalPrice,
            numOfCartItems,
            updateProductCart,
            deleteProductCart,
            emptyTheCart,
        }}>
            
            {children}
    
        </CartContext.Provider>
    )
}
