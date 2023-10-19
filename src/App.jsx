
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
        <h3>Hello: <Link to="/login">Login</Link>  <Link to="/register">Register</Link>  <Link to= "/addproducts">Add Product</Link></h3>
        <Outlet/>
    </>
  )
}

export default App
