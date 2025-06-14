import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import AuthContext from '../Auth/AuthContext';
import { Link } from 'react-router';

const Login = () => {
  const { darkMode } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login with email & password');
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className={`w-full max-w-md ${darkMode ? 'bg-gray-800' : 'bg-base-100'} shadow-lg rounded-lg p-8`}>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              className={`input input-bordered w-full ${
                darkMode ? 'bg-gray-100 text-gray-900 border-0' : 'bg-white text-gray-900'
              }`}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="••••••••"
                className={`input input-bordered w-full pr-10 ${
                  darkMode ? 'bg-gray-100 text-gray-900 border-0' : 'bg-white text-gray-900'
                }`}
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-xl text-gray-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn bg-accent border-accent mt-3 w-full">
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center gap-2 justify-center"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        <div>
            <p className='text-center mt-4'>Don't have an account? <Link to="/signup" className='text-accent hover:underline'>Sign Up here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
