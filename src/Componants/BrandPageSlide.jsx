import PropTypes from 'prop-types';

const BrandPageSlide = ({product,id}) => {

    const {
        _id,
        productName,
        imageLink,
        brandName,
        type,
        price,
        ratings


    } = product


    return (
        <div>
            <div id={`item${id + 1}`} className="carousel-item w-full">
          <img
            src={imageLink}
            className="w-full"
          />
        </div>
        </div>
    );
};

export default BrandPageSlide;

BrandPageSlide.propTypes = {
    product: PropTypes.array,
    id : PropTypes.number
}