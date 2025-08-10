import React, { useContext, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import AuthContext from '../Auth/AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { darkMode, setDarkMode, user, signout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    signout()
      .then(() => {
        Swal.fire({
          title: 'Logout Successful',
          text: 'You have been logged out successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      })
      .catch((error) => {
        Swal.fire({
          title: 'Logout Failed',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  return (
    <div
      className={`navbar px-4 md:px-6 py-3 sticky top-0 z-50 shadow-md transition-all duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-base-100 text-gray-900'
      }`}
    >
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2">
          <FiUsers className="text-3xl text-accent" />
          <span className="text-2xl font-extrabold">
            Social
            <span className={darkMode ? 'text-yellow-400' : 'text-accent'}>Events</span>
          </span>
        </Link>
      </div>

      {/* Middle: Public Nav Links */}
        <div className="hidden md:flex gap-6">
          <Link to="/about" className="hover:text-accent transition">About</Link>
          <Link to="/connect" className="hover:text-accent transition">Connect with Us</Link>
          <Link to="/blogs" className="hover:text-accent transition">Blogs</Link>

          {/* Show special features if logged in */}
          {user && (
            <>
              <Link to="/create-event" className="hover:text-accent transition">Create Event</Link>
              <Link to="/manage-events" className="hover:text-accent transition">Manage Events</Link>
              <Link to="/joined-events" className="hover:text-accent transition">Joined Events</Link>
            </>
          )}
        </div>


      {/* Right Side */}
      <div className="flex items-center md:mx-8 gap-3">
        {/* Dark Mode Toggle */}
        <label className="swap swap-rotate cursor-pointer md:ml-10">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
          <FaSun className="swap-on h-6 w-6 text-yellow-400" />
          <FaMoon className="swap-off h-6 w-6 text-gray-600" />
        </label>

        {/* Auth Buttons */}
        {!user ? (
          <Link to="/login">
            <button
              className={`px-4 md:py-2 py-1.5 rounded-4xl md:ml-3 transition duration-300 text-white border-none shadow-md
                ${
                  darkMode
                    ? 'bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-500 hover:to-pink-600'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                }
              `}
            >
              Login
            </button>
          </Link>
        ) : (
          <div className="relative group w-full">
            {/* Profile Image */}
            <img
              src={user.photoURL}
              alt="profile"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-accent"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              title={user.displayName || 'User'}
            />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <ul
                className={`absolute right-0 mt-3 w-52 rounded-lg shadow-xl z-50
                  ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}
                  border transition duration-200 ease-out
                  scale-100 opacity-100
                `}
              >
                <li>
                  <Link
                    to="/create-event"
                    className="block px-5 py-3 hover:bg-yellow-400 hover:text-black transition"
                  >
                    Create Event
                  </Link>
                </li>
                <li>
                  <Link
                    to="/manage-events"
                    className="block px-5 py-3 hover:bg-yellow-400 hover:text-black transition"
                  >
                    Manage Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/joined-events"
                    className="block px-5 py-3 hover:bg-yellow-400 hover:text-black transition"
                  >
                    Joined Events
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-5 py-3 hover:bg-red-600 hover:text-white transition rounded-b-lg"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
