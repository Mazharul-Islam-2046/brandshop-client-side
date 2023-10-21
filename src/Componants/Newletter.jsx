import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const Newletter = () => {
    const {theme} = useContext(AuthContext)
    return (
        <div className='py-60 bg-[url("https://i.pinimg.com/736x/c4/14/7e/c4147ed539f72b923d98c3e0fb3c1deb.jpg")] bg-cover bg-opacity-30'>
            <div className={`card w-3/5 py-24 px-20 mx-auto  ${theme ? "bg-slate-200" : "bg-black"}`}>
                <h3 className='text-center text-3xl mb-10'>Subscribe To Our Newsletter</h3>
                <label htmlFor="">Name</label>
                <input className=' py-2 input mb-5 mt-2' type="text" name="name" id="" placeholder='Name' />
                <label htmlFor="">Email</label>
                <input className='py-2 input mb-5 mt-2' type="email" name="email" id="" placeholder='Email' />
                <input className={`btn ${theme ? "bg-gray-800 text-white hover:text-gray-800" : "bg-white text-gray-800 hover:text-white"}`} type="submit" value="Subscribe" />
            </div>
        </div>
    );
};

export default Newletter;