import { useLoaderData } from "react-router-dom";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";

const ProductDetailPage = () => {
  const product = useLoaderData();
  const {
    brandName,
    type,
    imageLink,
    productName,
    description,
    price,
    ratings,
  } = product;
  return (
    <>
    <Navbar/>
    <div className="flex gap-4 py-24">
      <div className="flex-1 p-6">
        <img src={imageLink} alt="" />
        <div className="flex gap-6 mt-4">
        <p className="text-base md:text-xl font-medium">Price: <span className="text-base font-normal">${price}</span></p>
        <p className="text-base md:text-xl font-medium">Ratings: <span className="text-base font-normal">{ratings} stars</span></p>
        </div>
      </div>

      <div className="flex-1 p-6">
        <p className="text-base md:text-xl font-medium">
          Name: <span className="text-lg font-normal">{productName}</span>{" "}
        </p>
        <p className="text-base md:text-xl font-medium">
          Type: <span className="text-lg font-normal">{type}</span>{" "}
        </p>
        <p className="text-base md:text-xl font-medium">
          Brand: <span className="text-lg font-normal">{brandName}</span>{" "}
        </p>
        <div className="mt-3">
          <p className="text-base md:text-xl font-medium">Description:</p>
          <p>{description}</p>
        </div>
        <button className="w-full mt-4 bg-green-500 hover:bg-black py-3 text-white">
          Add to Cart
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductDetailPage;
