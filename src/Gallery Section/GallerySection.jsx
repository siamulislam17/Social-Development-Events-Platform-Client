import React, { useContext } from 'react';
import ImgOne from '../assets/Gallery section/pexels-rdne-6646863.jpg';
import ImgTwo from '../assets/Gallery section/pexels-rdne-6647021.jpg';
import ImgThree from '../assets/Gallery section/pexels-sarwer-e-kainat-welfare-2332660-3996734.jpg';
import ImgFour from '../assets/Gallery section/pexels-shvetsa-5029810.jpg';
import ImgFive from '../assets/Gallery section/pexels-streetwindy-3101214.jpg';
import AuthContext from '../Auth/AuthContext';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const { darkMode } = useContext(AuthContext);

  
  return (
    <section
      className={`py-12 md:py-20 px-4 md:px-8 lg:px-16 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-blue-100 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-3">Event Gallery</h2>
        <p className="text-sm md:text-base">
          Explore highlights from our recent social development events.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[ImgOne, ImgTwo, ImgThree, ImgFour, ImgFive].map((img, index) => (
          <motion.div
            key={index}
            className="relative mx-2 md:mx-0 group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
