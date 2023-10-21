import { useLoaderData } from 'react-router-dom';
import Navbar from '../Componants/Navbar';
import MyCartCardCollection from '../Componants/MyCartCardCollection';
import Footer from '../Componants/Footer';

const MyCart = () => {
    const myCartData = useLoaderData()



    return (
        <div>
            <Navbar/>
            <MyCartCardCollection myCartData={myCartData}/>
            <Footer/>
            
        </div>
    );
};

export default MyCart;