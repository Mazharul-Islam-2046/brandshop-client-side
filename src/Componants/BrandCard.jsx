import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const [hover, setHover] = useState(false)
    const {theme} = useContext(AuthContext)
    
    const handleMouseEnter = () => {
        setHover(true)
    }
    const handleMouseLeave = () => {
        setHover(false)
    }

  const { brandName, brandImg } = brand;
  return (
      <Link to={`/brands/${brandName}`}>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="card h-52 md:h-full bg-gray-600 shadow-xl image-full">
        <figure>
          <img
            src={brandImg}
            alt="Shoes"
            className="opacity-50 z-0 w-full md:w-auto"
          />
        </figure>
        <div className={`card-body z-20 w-full h-full justify-center items-center ${theme ? "bg-slate-300 bg-opacity-0 md:bg-opacity-40" : "bg-gray-600 bg-opacity-0 md:bg-opacity-40"} ${hover ? "flex" : "md:hidden"}`}>
          <h2 className="font-medium text-2xl lg:text-5xl text-white">{brandName}</h2>
        </div>
      </div>
      </Link>
  );
};

export default BrandCard;

BrandCard.propTypes = {
  brand: PropTypes.object,
};
