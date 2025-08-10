import React, { useContext } from "react";
import Slider from "react-slick";
import ImgOne from "../assets/pexels-marta-ortigosa-1877261-3480494.jpg";
import ImgTwo from "../assets/pexels-freestockpro-3036405.jpg";
import ImgThree from "../assets/pexels-najim-kurfi-483155737-17916511.jpg";
import AuthContext from "../Auth/AuthContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [ImgOne, ImgTwo, ImgThree];

const Banner = () => {
  const { darkMode } = useContext(AuthContext);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <div
      className={`relative text-center overflow-hidden ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white p-4">
              <h1 className="text-xl md:text-4xl font-bold mb-2">
                Join Our Social Development Events
              </h1>
              <marquee behavior="scroll" direction="left" scrollamount="5">
                <p className="text-[14px] md:text-lg">
                  Join our platform to discover, participate in, and organize
                  meaningful social development events right in your local
                  community. Whether you're passionate about environmental
                  conservation, education, health, or social justice, our
                  easy-to-use tools allow you to create impactful events,
                  connect with like-minded individuals, and track your
                  involvement. Together, we can foster stronger communities
                  through collaboration, awareness, and active participation in
                  social service initiatives that make a real difference.
                </p>
              </marquee>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
