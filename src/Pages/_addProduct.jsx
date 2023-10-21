import Swal from "sweetalert2";
import Navbar from "../Componants/Navbar";

const _addProduct = () => {



  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const imageLink = form.imageLink.value;
    const productName = form.productName.value;
    const description = form.description.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const addProductData = {
      brandName,
      type,
      imageLink,
      productName,
      description,
      price,
      ratings,
    };

    // posting the product to database
    fetch("https://brandshop-assignment-server-49xw7lijw.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addProductData),
    })
      .then((res) => res.json())
      .then((data) => {
        data && Swal.fire('Product Added Successfully')
      });
  };

  return (
   <>
   <Navbar></Navbar>

<div className="w-[70%] mx-auto text-center mt-16 pb-14">
  <h2 className="font-bold text-3xl lg:text-5xl mb-4">Add Products</h2>
  <form onSubmit={handleAddProduct} className="space-y-1 lg:space-y-3">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Brand Name</span>
      </label>
      <input
        name="brandName"
        type="text"
        placeholder="Brand Name"
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
        type="number"
        min="0"
        max="5"
        placeholder="Ratings"
        className="input input-bordered"
        required
      />
    </div>
    <button className="btn mt-8 bg-blue-600 text-white hover:text-black w-full" type="submit">
      Add Product
    </button>
  </form>
</div>
   </>
  );
};

export default _addProduct;
