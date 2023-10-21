import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Componants/Navbar";
import Footer from "../Componants/Footer";
import BrandPageCradSec from "../Componants/brandPageCradSec";
import BrandPageHeader from "../Componants/BrandPageHeader";

const BrandPage = () => {

    const {brandName} = useParams()
    const allBrandProducts = useLoaderData();
    const brandProducts = allBrandProducts.filter((brandProduct) => 
        brandProduct.brandName === brandName
    )

    console.log(brandProducts);


    return (
        <>
        <Navbar/>
        <BrandPageHeader brandProducts = {brandProducts}/>
        <BrandPageCradSec brandProducts = {brandProducts}/>
        <Footer/>
        
        <div>
            
        </div>
        </>
    );
};

export default BrandPage;