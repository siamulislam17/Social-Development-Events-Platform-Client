import React, { useContext } from 'react';
import AuthContext from '../Auth/AuthContext';

const Newsletter = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <section
      className={` mx-auto p-8  shadow-md ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <h2 className="text-3xl font-bold mb-4 text-center">
        Subscribe to Our Newsletter
      </h2>
      <p className="mb-6 text-center text-sm md:text-base">
        Get updates about social development events and community activities.
      </p>

      <form className={`flex flex-col  sm:flex-row gap-4 max-w-2xl mx-auto p-3 py-7 md:p-20 shadow-2xl rounded-2xl  justify-center ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <input
          type="email"
          placeholder="Enter your email"
          className={`flex-grow px-4 py-3 rounded border focus:outline-none placeholder-gray-400 ${
            darkMode
              ? 'bg-gray-700 border-gray-600 text-white'
              : 'bg-gray-100 border-gray-300 text-gray-900'
          }`}
          
        />
        <button
          type="submit"
          className="px-6 py-3 rounded bg-accent text-white font-semibold cursor-not-allowed opacity-70"
          
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
