import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const ProductDetailPage = () => {

  const { setOvserver, ovserver} =  useContext(AuthContext)
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


  const NewProduct = {
    product_id: product?._id,
    brandName,
    type,
    imageLink,
    productName,
    description,
    price,
    ratings,
  }

  console.log(NewProduct);

  const navigate = useNavigate()

  const handleAddCart = () => {




    fetch("https://brandshop-assignment-server-49xw7lijw.vercel.app/mycarts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NewProduct)
    })
    .then((res)=>res.json())
    .then((data) => {
        console.log(data);
        Swal.fire('Product Has been added to Cart')
        navigate(`/brands/${brandName}`)

        setOvserver(!ovserver)
    })
    .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.code,
        })
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex gap-4 py-24">
        <div className="flex-1 p-6">
          <img src={imageLink} alt="" />
          <div className="flex gap-6 mt-4">
            <p className="text-base md:text-xl font-medium">
              Price: <span className="text-base font-normal">${price}</span>
            </p>
            <p className="text-base md:text-xl font-medium">
              Ratings:{" "}
              <span className="text-base font-normal">{ratings} stars</span>
            </p>
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
          <button
            onClick={handleAddCart}
            className="w-full mt-4 bg-green-500 hover:bg-black py-3 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
