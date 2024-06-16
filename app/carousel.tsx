// components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  '/client-logo-1.png',
  '/client-logo-2.png',
  '/client-logo-3.png',
  '/client-logo-4.png',
  '/client-logo-5.png'
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <Image src={src} alt={`Slide ${index}`} width={300} height={200} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
