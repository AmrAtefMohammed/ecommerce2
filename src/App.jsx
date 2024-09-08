import React from 'react';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import AuthContext from './Context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Cart from './Components/Cart/Cart';
import ProductDetails from './Components/ProdcutDetails/ProductDetails';
import CartContextProvider from './Context/CartContext';
import { Toaster } from 'react-hot-toast';


const routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Login /> },
      {
        path: 'cart', element:
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
      },
      {
        path: 'productDetails/:id', element:
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
      },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      {
        path: 'products', element:
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
      }
      ,
      {
        path: 'categories', element:
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
      }
      ,
      {
        path: 'brands', element:
          <ProtectedRoute>
            <Brands/>
          </ProtectedRoute>
      }
      ,
      { path: '*', element: <NotFound /> },
      
  ] }
])

const reactQueryConfig = new QueryClient({});

export default function App() {
  /* if (! localStorage.getItem("userToken")) {
    return (
      <>
        <h1 className='font-bold text-3xl text-center my-10 text-green-800 bg-green-200 py-3 rounded-2xl w-3/4 mx-auto'>Invalid Path</h1>
      </>
    )
  } */
  
  
  
  return (
    <>
      
      <QueryClientProvider client={reactQueryConfig}>
        <AuthContext>
          <CartContextProvider>
            <RouterProvider router={routers} />
            <Toaster />
          </CartContextProvider>
        </AuthContext>
      </QueryClientProvider>
    </>
  )
}
