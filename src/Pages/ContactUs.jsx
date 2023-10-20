
import Navbar from "../Componants/Navbar";

const ContactUs = () => {
  return (
    <div className="h-[100vh]">
      <div className="">
        <Navbar />
      </div>
      <div className="w-4/5 my-20 border-2 border-gray-300 mx-auto text-center p-10 bg-yellow-50 ">
        <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
        <p className="text-lg mb-2">Get Personal Quote on Services</p>
        <form>
          <input className="bg-gray-400 py-1" />
          <input
            className="py-1 px-3 bg-green-900 text-white"
            type="submit"
            value="Contact"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
