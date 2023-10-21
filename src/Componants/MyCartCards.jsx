import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";

const MyCartCards = ({ product, handleDelete }) => {
  const { _id, productName, imageLink, brandName, type, price, ratings } =
    product;



  return (
    <div>
      <div className="hfull border-1 border flex flex-col shadow-lg rounded-lg">
        <img className="h-1/2 w-full object-cover" src={imageLink} alt="" />
        <div className=" grow flex flex-col space-y-1 px-5 py-3 md:py-6 md:space-y-3">
          <h2 className="text-base md:text-xl font-medium">
            Name: {productName}
          </h2>
          <p className="text-base md:text-xl font-medium">Brand: {brandName}</p>
          <p className="text-base md:text-xl font-medium">Type: {type}</p>
          <p className="text-base md:text-xl font-medium">Price: ${price}</p>
          <p className="text-base md:text-xl font-medium">
            Ratings: {ratings} Stars
          </p>
        </div>
        <div className="flex w-full justify-between pr-3 py-4 md:py-6 px-6">
          <Link to={`/products/${_id}`}>
            <button className="text-lg hover:font-medium">Details</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="text-xl p-3">
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCartCards;

MyCartCards.propTypes = {
  product: PropTypes.object,
  handleDelete: PropTypes.func
};
