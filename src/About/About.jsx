import React, { useContext } from "react";
import AuthContext from "../Auth/AuthContext";

const AboutSection = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <section
      className={`py-12 px-6  h-screen flex flex-col justify-center items-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-blue-100 text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6"> About Us</h2>
        <p className="text-lg leading-relaxed">
          Welcome to our Social Development Events Platform! We are dedicated to
          organizing and promoting community-driven initiatives such as tree
          plantations, clean water programs, and educational camps.  
          Our mission is to connect passionate volunteers, organizations, and
          community members to create meaningful social change.  
          <br />  
          Together, we believe that small steps can lead to big impacts —
          making our cities greener, our water cleaner, and education accessible
          to all.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
