import {  Link, useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../Componants/Navbar";

const ProductEditPage = () => {

    const product = useLoaderData();
    const {brandName, type, imageLink, productName, description, price, ratings} = product


    const navigate = useNavigate()



  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const imageLink = form.imageLink.value;
    const productName = form.productName.value;
    const description = form.description.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const updatedProductData = {
      brandName,
      type,
      imageLink,
      productName,
      description,
      price,
      ratings,
    };

    // posting the product to database
    fetch(`https://brandshop-assignment-server-49xw7lijw.vercel.app/products/${product._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProductData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/")
      });
  };

  return (
   <>
   <Navbar></Navbar>

<div className="w-[70%] mx-auto text-center mt-16 pb-14">
  <h2 className="font-bold text-5xl mb-4">Update Products</h2>
  <form onSubmit={handleUpdateProduct} className="space-y-3">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Brand Name</span>
      </label>
      <input
        name="brandName"
        type="text"
        placeholder="Brand Name"
        defaultValue={brandName}
        className="input input-bordered"
        required
      />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Type</span>
      </label>
      <input
        name="type"
        type="text"
        placeholder="SUB, Sedan, HR, EV, Hybrid etc..."
        defaultValue={type}
        className="input input-bordered"
        required
      />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Image Link</span>
      </label>
      <input
        name="imageLink"
        type="text"
        placeholder="Image Link"
        defaultValue={imageLink}
        className="input input-bordered"
        required
      />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Product Name</span>
      </label>
      <input
        name="productName"
        type="text"
        placeholder="Product Name"
        defaultValue={productName}
        className="input input-bordered"
        required
      />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Description</span>
      </label>
      <input
        name="description"
        type="text"
        placeholder="Description"
        defaultValue={description}
        className="input input-bordered"
        required
      />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Price</span>
      </label>
      <input
        name="price"
        type="text"
        placeholder="$$"
        defaultValue={price}
        className="input input-bordered"
        required
      />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Ratings(0-5)</span>
      </label>
      <input
        name="ratings"
        type="text"
        placeholder="Ratings"
        defaultValue={ratings}
        className="input input-bordered"
        required
      />
    </div>
    <button className="btn mt-8 bg-blue-600 text-white hover:text-black w-full" type="submit">
      Update Product
    </button>
      <Link className="btn mt-8 bg-black text-white hover:text-black hover:bg-white w-full" to={`/brands/${brandName}`}>Go Back</Link>
  </form>
</div>
   </>
  );
};

export default ProductEditPage;
