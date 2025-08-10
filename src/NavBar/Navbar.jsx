import React, { useContext, useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import AuthContext from '../Auth/AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { darkMode, setDarkMode, user, signout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    signout()
      .then(() => {
        Swal.fire({
          title: 'Logout Successful',
          text: 'You have been logged out successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        setDropdownOpen(false);
        setMobileMenuOpen(false);
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

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <div
      className={`navbar px-4 md:px-6 py-3 sticky top-0 z-50 shadow-md transition-all duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-base-100 text-gray-900'
      }`}
    >
      {/* Left: Logo only */}
      <div className="flex-1 flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <FiUsers className="text-3xl text-accent" />
          <span className="text-2xl font-extrabold">
            Social
            <span className={darkMode ? 'text-yellow-400' : 'text-accent'}>Events</span>
          </span>
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/about" className="hover:text-accent transition">About</Link>
        <Link to="/connect" className="hover:text-accent transition">Connect with Us</Link>
        <Link to="/blogs" className="hover:text-accent transition">Blogs</Link>

        {user && (
          <>
            <Link to="/create-event" className="hover:text-accent transition">Create Event</Link>
            <Link to="/manage-events" className="hover:text-accent transition">Manage Events</Link>
            <Link to="/joined-events" className="hover:text-accent transition">Joined Events</Link>
          </>
        )}
      </div>

      {/* Right Side: Dark Mode toggle, Auth, Mobile menu button */}
      <div className="flex items-center gap-3">
        {/* Dark Mode Toggle - always visible */}
        <label className="swap swap-rotate cursor-pointer md:ml-10">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
          <FaSun className="swap-on h-6 w-6 text-yellow-400" />
          <FaMoon className="swap-off h-6 w-6 text-gray-600" />
        </label>

        {!user ? (
          <Link to="/login">
            <button
              className="px-4 md:py-2 py-1.5 rounded-4xl md:ml-3 transition duration-300 text-white border-none shadow-md bg-accent hover:bg-accent/80 hover:shadow-2xl"
            >
              Login
            </button>
          </Link>
        ) : (
          <div className="relative group w-full">
            <img
              src={user.photoURL}
              alt="profile"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-accent"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              title={user.displayName || 'User'}
            />
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
                    onClick={handleLinkClick}
                    className="block px-5 py-3 hover:bg-yellow-400 hover:text-black transition"
                  >
                    Create Event
                  </Link>
                </li>
                <li>
                  <Link
                    to="/manage-events"
                    onClick={handleLinkClick}
                    className="block px-5 py-3 hover:bg-yellow-400 hover:text-black transition"
                  >
                    Manage Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/joined-events"
                    onClick={handleLinkClick}
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

        {/* Mobile menu toggle button (right of login/profile) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu - slide in from right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 shadow-lg z-50 transform transition-transform duration-300 md:hidden
        ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col gap-4 p-6 text-lg">
          <Link to="/about" onClick={handleLinkClick} className="hover:text-accent transition">
            About
          </Link>
          <Link to="/connect" onClick={handleLinkClick} className="hover:text-accent transition">
            Connect with Us
          </Link>
          <Link to="/blogs" onClick={handleLinkClick} className="hover:text-accent transition">
            Blogs
          </Link>

          {user && (
            <>
              <Link to="/create-event" onClick={handleLinkClick} className="hover:text-accent transition">
                Create Event
              </Link>
              <Link to="/manage-events" onClick={handleLinkClick} className="hover:text-accent transition">
                Manage Events
              </Link>
              <Link to="/joined-events" onClick={handleLinkClick} className="hover:text-accent transition">
                Joined Events
              </Link>
            </>
          )}

          {!user ? (
            <Link to="/login" onClick={handleLinkClick}>
              <button className="mt-3 w-full bg-accent hover:bg-accent/80 text-white font-semibold py-2 rounded-2xl transition">
                Login
              </button>
            </Link>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
              className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-2xl transition"
            >
              Logout
            </button>
          )}
        </nav>
      </div>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
