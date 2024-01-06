/* eslint-disable react/prop-types */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "./FoodSlider.css";

export default function FoodSlider({ data }) {
  const CustomPrevArrow = ({ onClick }) => {
    return (
      <button
        className="absolute -top-14 right-10 z-10 p-2 hover:bg-white rounded-full"
        onClick={onClick}
      >
        <FaAngleLeft className="text-secondary text-2xl" />
      </button>
    );
  };

  const CustomNextArrow = ({ onClick }) => {
    return (
      <button
        className="absolute -top-14 right-0 z-10 p-2 hover:bg-white rounded-full"
        onClick={onClick}
      >
        <FaAngleRight className="text-secondary text-2xl" />
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="w-full">
        <Slider {...settings}>
          {data.map((food) => (
            <div
              key={food.Id}
              className="space-y-2 cursor-pointer hover:text-secondary duration-500"
            >
              <img
                className="h-[16rem] md:h-[18rem] lg:h-[20rem] rounded-xl w-full object-cover"
                src={food.ImageUrl}
                alt=""
              />
              <h1 className="font-semibold text-center text-xl">{food.Name}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
