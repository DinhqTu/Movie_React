import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useState, useRef } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

function Carousel({ children, count }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const lengthElement = sliderRef.current?.props?.children
    ? sliderRef.current?.props?.children.length
    : '';
  const slideToScroll = sliderRef.current?.props?.slidesToScroll;
  const numberSlide = Math.floor(lengthElement / slideToScroll);
  const numberNext = Math.ceil(currentSlide / slideToScroll);

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div>
        <AiOutlineRight
          className={`absolute -top-9 right-0 text-xl cursor-pointer ${
            numberNext === numberSlide ? 'text-slate-500' : 'text-slate-100'
          }`}
          onClick={onClick}
        />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div>
        <AiOutlineLeft
          className={`absolute -top-9 right-[30px] text-xl cursor-pointer ${
            currentSlide === 0 ? 'text-slate-500' : ''
          }`}
          onClick={onClick}
        />
      </div>
    );
  }

  const settings = {
    dots: true,
    lazyLoad: true,
    initialSlide: 0,
    speed: 500,
    slidesToShow: count,
    slidesToScroll: count,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: false,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: count,
          slidesToScroll: count,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {children}
    </Slider>
  );
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.any,
  onClick: PropTypes.func,
};

export default Carousel;
