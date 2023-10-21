import { useContext } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import Swal from 'sweetalert2'

const Navbar = () => {
  const { handleTheme, user, logOut, theme, cart, photo } = useContext(AuthContext);


  const length = cart?.length
  




  const handleThemeNav = () => {
    handleTheme();
  };

  const handleLogOut = () => {
    logOut();
    Swal.fire('Successfully Loged Out')
  };

  return (
    <div className="flex justify-center">
      <div className={`navbar md:px-12 ${theme ? "bg-white" : "bg-black"} bg-opacity-50`}>
       <div className="flex w-2/3 justify-around flex-row-reverse md:flex-row md:justify-normal">
         {/* Logo */}
         <div className="lg:w-2/4">
          <Link to="/" className="btn btn-ghost normal-case text-xl">MZ CarShop</Link>
        </div>

        {/* Middle Menu */}
        <div className="md:flex">
          <div className="hidden md:flex space-x-5">
          <NavLink className={({isActive}) => isActive? "btn btn-ghost bg-black text-white" : "btn btn-ghost"} to="/">Home</NavLink>
          <NavLink className={({isActive}) => isActive? "btn btn-ghost bg-black text-white" : "btn btn-ghost"} to="/addProducts">Add Product</NavLink>
          <NavLink className={({isActive}) => isActive? "btn btn-ghost bg-black text-white" : "btn btn-ghost"} to="/aboutus">About Us</NavLink>
          </div>

          {/* Hamburger Menu */}
          <div className={`dropdown dropdown-start md:hidden`}>
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <div className="w-10 flex p-2">
                  <AiOutlineMenuFold></AiOutlineMenuFold>
                </div>
              </label>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${
                  theme ? "bg-white text-gray-800" : "bg-gray-800 text-white"
                }`}
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/addProducts">Add Product</Link>
                </li>
              </ul>
            </div>
        </div>
       </div>

        {/* Navbar end part */}
        <div className="flex gap-1 px-0 w-1/3 justify-end">
          {/* Cart */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{user ? length : 0}</span>
              </div>
            </label>

            <div
              tabIndex={0}
              className={`mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow ${
                theme ? "bg-white text-gray-800" : "bg-gray-800 text-white"
              }`}
            >
              <div className="card-body">
                {user ? <span className="font-bold text-lg">{length} Items</span> : <span className="font-bold text-lg">0 Items</span>}
                <div className="card-actions">
                  <Link to="/mycart" className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Profile */}
          {user ? (
            <div className={`dropdown dropdown-end`}>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 flex p-2">
                  {
                    photo ? <img src={photo} alt="" className="w-full h-full object-cover" /> : <BsFillPeopleFill className="w-full h-full" />
                  }
                </div>
              </label>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${
                  theme ? "bg-white text-gray-800" : "bg-gray-800 text-white"
                }`}
              >
                <li>
                  <a onClick={handleThemeNav}>
                    {theme ? "Dark mood" : "Light Mood"}
                  </a>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <button className="py-2 px-4 rounded-full hover:bg-slate-700 hover:text-white font-medium border-2">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
