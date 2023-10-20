// import { NavLink } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
const Herosec = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full bg-white bg-opacity-50 z-20">
      <Navbar></Navbar>
      </div>
      <div className="absolute z-0 w-full overflow-hidden flex items-center justify-center bg-black">
                  <div className=" absolute opacity-60 h-[100vh]">
                    <img className="object-cover" src="https://i.ibb.co/8MC6MDV/download.png" alt="" />
                  </div>
                  <div className="text-center z-20 opacity-90 h-[100vh] relative flex flex-col pt-48 items-center">
                    <h1 className="text-5xl font-bold text-purple-200 text-center leading-[60px]">
                    Rev Up Your Dreams with Our Unbeatable <br /> Car Selection
                    </h1>
                    <p className="text-xl font-semibold text-white text-center leading-7 mt-4 mb-10">
                    Find Your Dream Ride at CarShopMz. Discover a wide range of cars to suit <br /> your style and needs. Your perfect car is just a click away!
                    </p>

                    <NavLink
                      className="text-purple-200 text-lg hover:text-white hover:bg-purple-950 cursor-pointer bg-purple-900 py-3 px-6"
                      to="/contact-us"
                    >
                      Contact Us
                    </NavLink>
                  </div>
                </div>
    </div>
  );
};

export default Herosec;
