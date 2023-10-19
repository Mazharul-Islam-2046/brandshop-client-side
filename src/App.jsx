import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Componants/Navbar";
import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";


function App() {
  const {theme} = useContext(AuthContext);
  return (
    <div className={`${theme ? "light" : "dark"}`}>
      <Navbar />
      <h3>
        Hello: <Link to="/login">Login</Link>{" "}
        <Link to="/register">Register</Link>{" "}
        <Link to="/addproducts">Add Product</Link>
        {
          theme? "Light" : "Dark"
        }
      </h3>
      <Outlet />
    </div>
  );
}

export default App;
