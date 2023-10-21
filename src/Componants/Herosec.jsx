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
      <div className>
        <div className="relative flex justify-center items-center bg-no-repeat bg-cover bg-[url('https://i.ibb.co/8MC6MDV/download.png')] h-[100vh] bg-opacity-10">
          <div className="w-full h-full bg-black opacity-30 absolute"></div>
          <div className="text-center z-20 opacity-90">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-purple-200 text-center lg:leading-[60px]">Rev Up Your Dreams with Our Unbeatable <br /> Car Selection
                    </h1>
                    <p className="text-base md:text-xl font-semibold text-white text-center lg:leading-7 mt-3 w-4/5 mx-auto lg:w-full lg:mt-10 mb-8">Find Your Dream Ride at Mz Cars Shop. Discover a wide range of cars to suit <br /> your style and needs. Your perfect car is just a click away!</p>

                    <NavLink className="text-purple-200 text-sm lg:text-lg hover:text-white hover:bg-purple-950 cursor-pointer bg-purple-900 py-3 px-6" to="/contact-us">About Us</NavLink>

              </div>
        </div>
        
      </div>
    </div>
  );
};

export default Herosec;
