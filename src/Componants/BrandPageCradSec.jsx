import PropTypes from 'prop-types';
import BrandPageCard from './BrandPageCard';

const BrandPageCradSec = ({brandProducts}) => {
    return (
        <div>
            <>
            <div className='grid grid-cols-2 mx-auto gap-6 w-4/5 py-24'>
            {
                brandProducts.map((product, idx) => 
                    <BrandPageCard key={idx} product = {product}></BrandPageCard>
                )
            }
            </div>
            </>
        </div>
    );
};

export default BrandPageCradSec;

BrandPageCradSec.propTypes = {
    brandProducts: PropTypes.array
}