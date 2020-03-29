import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ countries }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {countries.map(country => (
                <div key={country.alpha3Code}>
                    <img src={country.flag} width="600" height="400" />
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
