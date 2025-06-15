import React, { useContext, useEffect, useState } from 'react';
import ImgOne from '../assets/pexels-marta-ortigosa-1877261-3480494.jpg';
import ImgTwo from '../assets/pexels-freestockpro-3036405.jpg';
import ImgThree from '../assets/pexels-najim-kurfi-483155737-17916511.jpg';
import AuthContext from '../Auth/AuthContext';
import { motion } from 'framer-motion';

const images = [ImgOne, ImgTwo, ImgThree];

const Banner = () => {
  const { darkMode } = useContext(AuthContext);
  const [current, setCurrent] = useState(0);

  // Image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative h-64 md:h-96 text-center flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      {/* All images rendered but only one visible */}
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url(${img})` }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Text overlay */}
     <div className="relative mx-3  z-10 bg-white/20 backdrop-blur-sm p-4 md:mx-15 rounded w-full  text-white">
        <h1 className="text-xl md:text-4xl font-bold mb-2">
            Join Our Social Development Events
        </h1>
        <p className="text-[12px] md:text-lg">
            Create, join, and track local social service events in your community.
        </p>
        </div>
    </div>
  );
};

export default Banner;
