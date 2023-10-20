import PropTypes from "prop-types";

const BrandPageSlide = ({ product }) => {
  const {  productName, imageLink, price } =
    product;

  return (
    <div className="h-[40vw]">
      <img className="" src={imageLink} />
      <div className="legend">
        <h2 className="text-xl">{productName}</h2>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default BrandPageSlide;

BrandPageSlide.propTypes = {
  product: PropTypes.array,
  id: PropTypes.number,
};
