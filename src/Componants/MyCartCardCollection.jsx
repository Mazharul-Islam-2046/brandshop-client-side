
// import { useState } from "react";
import MyCartCards from "./MyCartCards";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const MyCartCardCollection = () => {
    const { setOvserver, ovserver, deleteOvserver, setDeleteOvserver, cart} =  useContext(AuthContext)


      // Handle Delete

  const handleDelete = (_id) => {
    console.log("click");
    fetch(`https://brandshop-assignment-server-49xw7lijw.vercel.app/mycarts/${_id}`, {
      method: "DELETE",
    })
    setOvserver(!ovserver)
    setDeleteOvserver(!deleteOvserver)
  };

  const length = cart.length;
  console.log(length);




    return (
        <div>
            {
                length ? 
                <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto gap-6 w-4/5 py-8 md:py-16 lg:py-24'>
            {
                cart.map((product, idx) => <MyCartCards product={product} handleDelete={handleDelete} key={idx}/>)
            }
        </div> : 
        <div className="h-[80vh] flex justify-center items-center">
            <h1 className=" text-2xl lg:text-4xl font-extrabold">Your Cart is Empty</h1>
        </div>
            }
        </div>
    );
};

export default MyCartCardCollection;
