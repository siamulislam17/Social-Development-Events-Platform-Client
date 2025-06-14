import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import AuthContext from '../Auth/AuthContext';
import { Link } from 'react-router';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(AuthContext);
  console.log('Dark mode state:', darkMode);



  return (
    <nav
      className={`navbar px-6 py-3 flex justify-between items-center sticky top-0 z-50 transition-all duration-300 shadow-md ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-base-100 text-gray-800'
      }`}
    >
      {/* Logo + Brand */}
      <div className="flex items-center gap-2">
        <FiUsers className="text-3xl text-accent" />
        <a
          className={`text-2xl font-extrabold transition duration-300 ${
            darkMode ? 'text-white hover:text-yellow-400' : 'text-primary hover:text-secondary'
          }`}
        >
          Social<span className={darkMode ? 'text-yellow-400' : 'text-accent'}>Events</span>
        </a>
      </div>

      {/* Toggle and Button */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <label className="swap swap-rotate cursor-pointer">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />

          {/* Sun */}
          <FaSun className="swap-on h-7 w-7 text-yellow-400 transition duration-300" />

          {/* Moon */}
          <FaMoon className="swap-off h-7 w-7 text-gray-700 transition duration-300" />
        </label>

        {/* Login Button */}
        <Link to="/login" >
        <button
          className={`btn transition duration-300 ${
            darkMode
              ? 'bg-yellow-500 hover:bg-yellow-400 text-gray-900'
              : 'btn-primary hover:scale-105 hover:shadow-md'
          }`}
        >
          Login
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
