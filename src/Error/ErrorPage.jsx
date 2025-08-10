import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "../../public/Lonely 404.json";
import { BiHome } from "react-icons/bi";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-red-400 p-6 text-center">
      <div className="max-w-lg   rounded-3xl p-8">
        <Lottie
          animationData={errorAnimation}
          loop={true}
          style={{ width: 200, height: 200, margin: "0 auto" }}
        />
        <h1 className="text-5xl font-extrabold text-purple-700 my-6">Oops! Lost in Space?</h1>
        <p className="text-lg text-gray-700 mb-6">
          The page you’re looking for has floated off into the cosmos!  
          But don’t worry, our astronauts are searching for it.
        </p>
        <a
          href="/"
          className="[] inline-block px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
        >
           Take Me Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
