import React, { useContext } from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import AuthContext from "../Auth/AuthContext";

const Footer = () => {
  const { darkMode, user } = useContext(AuthContext);

  // Public routes visible to all users
  const publicRoutes = [
    { name: "About", path: "/about" },
    { name: "Connect with Us", path: "/connect" },
    { name: "Blogs", path: "/blogs" },
  ];

  // Additional routes only visible if logged in
  const privateRoutes = [
    { name: "Create Event", path: "/create-event" },
    { name: "Manage Events", path: "/manage-events" },
    { name: "Joined Events", path: "/joined-events" },
  ];

  // Combine routes depending on user state
  const routes = user ? [...publicRoutes, ...privateRoutes] : publicRoutes;

  return (
    <footer
      className={`footer sm:footer-horizontal p-10 ${
        darkMode
            ? "bg-gray-900 text-gray-100"
            : "bg-gray-100 text-gray-900"
        }`}

    >
      <aside className="flex flex-col items-center sm:items-start gap-2">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className={`fill-current ${
            darkMode ? "text-yellow-400" : "text-primary"
          }`}
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
        </svg>
        <p className="text-center sm:text-left max-w-xs">
          SIAM Industries Ltd.
          <br />
          Providing reliable tech since 2024
        </p>
      </aside>

      <nav className="flex flex-col gap-6">
        <h6 className="footer-title">Navigate</h6>
        {routes.map(({ name, path }) => (
          <Link key={path} to={path} className="hover:underline">
            {name}
          </Link>
        ))}
      </nav>

      <nav className="flex flex-col gap-6">
        <h6 className="footer-title">Social</h6>
        <div className="flex gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/siam-ul-islam-siam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/siam.ul.islam.428705"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-800"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/siamulislam17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-800 dark:hover:text-gray-400"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
