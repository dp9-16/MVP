import React, { useState } from 'react';
import Card from './Card.jsx';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ recipes }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '5px'
  };
  return (
    <div className='outer'>
      <div className='inner'>
      <Slider {...settings}>
      {recipes.map((food, index) => {
        return <Card key={index} food={food} ind={index}/>;
      })}
    </Slider>
      </div>
    </div>
  );
};

export default Carousel;

//USE THIS FOR RECIPE PAGE