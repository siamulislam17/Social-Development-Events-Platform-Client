import React, { useContext } from "react";
import AuthContext from "../Auth/AuthContext";
import { FaLeaf, FaHandsHelping, FaCity, FaUsers } from "react-icons/fa";

const PartnersSponsors = () => {
  const { darkMode } = useContext(AuthContext);

  // Use icon components instead of logo URLs
  const partners = [
    {
      name: "GreenEarth Foundation",
      icon: <FaLeaf className="mx-auto mb-4 text-green-600" size={60} />,
      website: "https://greenearth.org",
    },
    {
      name: "Helping Hands NGO",
      icon: <FaHandsHelping className="mx-auto mb-4 text-blue-600" size={60} />,
      website: "https://helpinghands.org",
    },
    {
      name: "Clean City Initiative",
      icon: <FaCity className="mx-auto mb-4 text-gray-600" size={60} />,
      website: "https://cleancity.org",
    },
    {
      name: "Dhaka Community Center",
      icon: <FaUsers className="mx-auto mb-4 text-purple-600" size={60} />,
      website: "https://dhakacenter.org",
    },
  ];

  return (
    <div
      className={`min-h-screen pt-12 px-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-blue-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Partners & Sponsors</h1>
        <p className="text-lg mb-10">
          We’re proud to work with organizations and individuals who share our
          vision for a better society.{" "}
          <span className="font-semibold">
            Together, we create impactful community-driven events.
          </span>
        </p>

        {/* Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg shadow-md transform hover:scale-105 transition ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {/* Render the icon */}
              {partner.icon}
              <p className="font-medium">{partner.name}</p>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-6 rounded-lg shadow-md border border-blue-400 border-dashed">
          <h2 className="text-2xl font-bold mb-2">
            Want to become a Partner or Sponsor?
          </h2>
          <p className="mb-4">
            Contact us today and be part of the change you want to see.
          </p>
          <a
            href="/connect"
            className="bg-accent hover:bg-accent/80 hover:shadow-2xl rounded-2xl py-1.5 text-white font-semibold w-full mt-3 btn"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnersSponsors;
