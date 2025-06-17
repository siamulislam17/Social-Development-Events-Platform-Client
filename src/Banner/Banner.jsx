import React, { useContext, useEffect, useState } from 'react';
import ImgOne from '../assets/pexels-marta-ortigosa-1877261-3480494.jpg';
import ImgTwo from '../assets/pexels-freestockpro-3036405.jpg';
import ImgThree from '../assets/pexels-najim-kurfi-483155737-17916511.jpg';
import AuthContext from '../Auth/AuthContext';

const images = [ImgOne, ImgTwo, ImgThree];

const Banner = () => {
  const { darkMode } = useContext(AuthContext);
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Image slider
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade out
      setFade(false);
      
      // After fade out completes, change image and fade back in
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500); // This should match your CSS transition time
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative h-64 md:h-96 text-center flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      {/* Image with CSS transition */}
      <div
        className={`absolute inset-0 bg-cover bg-center w-full h-full transition-opacity ease-in-out duration-500 ${
          fade ? 'opacity-100' : 'opacity-90'
        }`}
        style={{ backgroundImage: `url(${images[current]})` }}
      />

      {/* Text overlay */}
      <div className="relative mx-3 z-10 bg-white/20 backdrop-blur-sm p-4 md:mx-15 rounded w-full text-white">
        <h1 className="text-xl md:text-4xl font-bold mb-2">
          Join Our Social Development Events
        </h1>
        <marquee behavior="scroll" direction="left" scrollamount="5">
          <p className="text-[14px] md:text-lg">
            Join our platform to discover, participate in, and organize meaningful social development events right in your local community. Whether you're passionate about environmental conservation, education, health, or social justice, our easy-to-use tools allow you to create impactful events, connect with like-minded individuals, and track your involvement. Together, we can foster stronger communities through collaboration, awareness, and active participation in social service initiatives that make a real difference.
          </p>
        </marquee>
      </div>
    </div>
  );
};

export default Banner;