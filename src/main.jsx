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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home></Home>
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
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
