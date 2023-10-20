
import { useLoaderData } from 'react-router-dom';
import BrandCardsCollection from '../Componants/BrandCardsCollection';
import Herosec from '../Componants/Herosec';
import Footer from '../Componants/Footer';


const Home = () => {


    const brandData = useLoaderData()
    
    
    return (
        <div>
            <Herosec></Herosec>
            <BrandCardsCollection brandData={brandData}></BrandCardsCollection>
            <Footer></Footer>
        </div>
    );
};

export default Home;