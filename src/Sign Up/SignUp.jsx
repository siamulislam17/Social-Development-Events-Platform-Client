import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import AuthContext from '../Auth/AuthContext';
import { Link } from 'react-router'; // fixed import
import Swal from 'sweetalert2';

const SignUp = () => {
  const { darkMode,user,signInWithEmailPassword,updateUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError('Password must include uppercase, lowercase, and be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };


    // Handle sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    signInWithEmailPassword(email, password, name, photo)
      .then((user) => {
        updateUser(name, photo)

        Swal.fire({
          title: 'Sign Up Successful',
          text: 'Welcome to our platform!',
          icon: 'success',
          confirmButtonText: 'OK',
        });


      })
      .catch((error) => {
        Swal.fire({
          title: 'Sign Up Failed',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };





  const handleGoogleSignUp = () => {
    console.log('Sign up with Google');
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className={`w-full max-w-md ${darkMode ? 'bg-gray-800' : 'bg-base-100'} shadow-lg rounded-lg p-8`}>
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSignUp} className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="https://your-photo-url.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Create a password"
                className="input input-bordered w-full pr-10"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-xl text-gray-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn bg-accent border-accent mt-3 w-full">
            Sign Up
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleSignUp}
          className="btn btn-outline w-full flex items-center gap-2 justify-center"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-accent font-semibold">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
