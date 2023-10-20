import PropTypes from 'prop-types';
import BrandCard from './BrandCard';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const BrandCardsCollection = ({brandData}) => {
    const {theme} = useContext(AuthContext)


    return (
        <div className={`pt-20 pb-20 ${theme ? "bg-slate-300" : "bg-gray-600"}`}>
            <h2 className='text-5xl font-semibold mb-12 text-center'>Our Brands</h2>
            <div className='grid grid-cols-3 mx-auto gap-6 w-4/5'>
            {
                brandData.map((brand, idx) => 
                    <BrandCard key={idx} brand={brand}></BrandCard>
                )
            }
            </div>
        </div>
    );
};

export default BrandCardsCollection;

BrandCardsCollection.propTypes = {
    brandData: PropTypes.array
}