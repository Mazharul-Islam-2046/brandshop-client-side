import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import _addProduct from './Pages/_addProduct.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoutes from './Providers/PrivateRoutes.jsx';
import Home from './Pages/Home.jsx';
import BrandPage from './Pages/BrandPage.jsx';
import ProductEditPage from './Pages/ProductEditPage.jsx';
import ProductDetailPage from './Pages/ProductDetailPage.jsx';
import MyCart from './Pages/MyCart.jsx';
import Error from './Pages/Error.jsx';
import AboutUs from './Pages/AboutUs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://brandshop-assignment-server-49xw7lijw.vercel.app/brands')
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/addProducts",
        element: <PrivateRoutes><_addProduct/></PrivateRoutes>
      },
      {
        path: "/aboutus",
        element: <AboutUs/>
      },
      {
        path: "/brands/:brandName",
        element: <BrandPage/>,
        loader: () => fetch('https://brandshop-assignment-server-49xw7lijw.vercel.app/products')
      },
      {
        path: "/products/update/:id",
        element: <PrivateRoutes><ProductEditPage/></PrivateRoutes>,
        loader: ({params}) => fetch(`https://brandshop-assignment-server-49xw7lijw.vercel.app/products/${params.id}`)
      },
      {
        path: "/products/:id",
        element: <PrivateRoutes><ProductDetailPage/></PrivateRoutes>,
        loader: ({params}) => fetch(`https://brandshop-assignment-server-49xw7lijw.vercel.app/products/${params.id}`)
      },
      {
        path: "/mycart",
        element: <PrivateRoutes><MyCart/></PrivateRoutes>,
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
