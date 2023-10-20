import BrandPageSlide from "./BrandPageSlide";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const BrandPageHeader = ({ brandProducts }) => {
  return (
    <div>
      <Carousel
        infiniteLoop
        interval={1000}
        showIndicators
        showStatus
        autoPlay
        showThumbs={false}
      >
        {brandProducts.map((product, idx) => (
          <BrandPageSlide key={idx} id={idx} product={product}></BrandPageSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default BrandPageHeader;

BrandPageHeader.propTypes = {
  brandProducts: PropTypes.array,
};
