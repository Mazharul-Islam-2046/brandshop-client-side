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


  console.log(brand);
  const { brandName, brandImg } = brand;
  return (
      <Link to={`/brands/${brandName}`}>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="card  h-full bg-gray-600 shadow-xl image-full">
        <figure>
          <img
            src={brandImg}
            alt="Shoes"
            className="opacity-50 z-0"
          />
        </figure>
        <div className={`card-body z-20 w-full h-full justify-center items-center ${theme ? "bg-slate-300" : "bg-gray-600"} bg-opacity-40 ${hover ? "flex" : "hidden"} `}>
          <h2 className="font-medium text-5xl text-white">{brandName}</h2>
        </div>
      </div>
      </Link>
  );
};

export default BrandCard;

BrandCard.propTypes = {
  brand: PropTypes.object,
};
