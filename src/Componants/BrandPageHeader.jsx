import BrandPageSlide from "./BrandPageSlide";
import PropTypes from 'prop-types';


const BrandPageHeader = ({brandProducts}) => {
  return (
    <div>
      <div className="carousel w-full">
        {
            brandProducts.map((product, idx) => 
            <BrandPageSlide key={idx} id={idx} product = {product}></BrandPageSlide>)
        }
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default BrandPageHeader;


BrandPageHeader.propTypes = {
    brandProducts: PropTypes.array
}