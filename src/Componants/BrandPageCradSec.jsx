import PropTypes from "prop-types";
import BrandPageCard from "./BrandPageCard";

const BrandPageCradSec = ({ brandProducts }) => {
  const length = brandProducts.length;

  return (
    <div>
      <>
        {length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-6 w-4/5 py-8 md:py-16 lg:py-24">
            {brandProducts.map((product, idx) => (
              <BrandPageCard key={idx} product={product}></BrandPageCard>
            ))}
          </div>
        ) : (
          <div className="h-[80vh] flex justify-center items-center">
            <h1 className="text-2xl lg:text-4xl font-extrabold">Out of Stock</h1>
          </div>
        )}
      </>
    </div>
  );
};

export default BrandPageCradSec;

BrandPageCradSec.propTypes = {
  brandProducts: PropTypes.array,
};
