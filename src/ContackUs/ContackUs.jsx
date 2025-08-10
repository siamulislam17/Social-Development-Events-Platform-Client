import React, { useContext } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import AuthContext from "../Auth/AuthContext";

const ConnectWithUs = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <section
      className={`py-10 px-6 h-screen flex flex-col justify-center items-center ${
       darkMode ? "bg-gray-900 text-white" : "bg-blue-100 text-gray-900"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">📞 Connect with Us</h2>
        <div className="space-y-4 text-lg">
          <p className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />
            Dhanmondi, Dhaka
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-green-500" />
            +880171234567
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-red-500" />
            <a
              href="mailto:siamthca@gmail.com"
              className="hover:underline"
            >
              siamthca@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaLinkedin className="text-blue-700" />
            <a
              href="https://www.linkedin.com/in/siam-ul-islam-siam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/siam-ul-islam-siam
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
