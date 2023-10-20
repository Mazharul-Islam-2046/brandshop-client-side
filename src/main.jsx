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
import ContactUs from './Pages/ContactUs.jsx';
import BrandPage from './Pages/BrandPage.jsx';
import ProductEditPage from './Pages/ProductEditPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/brands')
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
        path: "/contactus",
        element: <ContactUs/>
      },
      {
        path: "/brands/:brandName",
        element: <BrandPage/>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: "/products/update/:id",
        element: <ProductEditPage/>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
