import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../Auth/AuthContext";
import treePlantation from "../../public/tree_plantation.jpg";
import cleanWater from "../../public/clean_water.jpg";
import educationCamp from "../../public/free_edu.jpg";

const Blog = () => {
  const { darkMode } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [expandedBlog, setExpandedBlog] = useState(null); // store which blog is expanded

  useEffect(() => {
    setBlogs([
      {
        id: 1,
        title: " Community Tree Plantation Drive",
        author: "Admin",
        date: "Aug 5, 2025",
        excerpt:
          "Join us in making our city greener by planting trees in public parks. Together, we can create a healthier environment.",
        fullContent:
          "Join us in making our city greener by planting trees in public parks. Together, we can create a healthier environment. This event will take place in several city parks and aims to engage citizens of all ages in a meaningful cause. We will provide saplings, tools, and guidance. Let’s make a difference together!",
        image: treePlantation,
      },
      {
        id: 2,
        title: " Clean Water Awareness Program",
        author: "Event Organizer",
        date: "July 28, 2025",
        excerpt:
          "A program to educate communities about safe drinking water and sanitation practices.",
        fullContent:
          "A program to educate communities about safe drinking water and sanitation practices. Experts will discuss water purification methods, the dangers of contaminated water, and how to maintain hygiene in daily life. Workshops and demonstrations will also be held to encourage active participation.",
        image: cleanWater,
      },
      {
        id: 3,
        title: " Free Education Camp for Underprivileged Children",
        author: "Volunteer Group",
        date: "July 20, 2025",
        excerpt:
          "Bringing education to children who lack access to schools. Volunteers welcome!",
        fullContent:
          "Bringing education to children who lack access to schools. Volunteers welcome! Our education camp will cover basic literacy, numeracy, and creative activities for children in underserved areas. The program will also include meals and learning kits for all participants.",
        image: educationCamp,
      },
    ]);
  }, []);

  const toggleExpand = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (
    <div
      className={`min-h-screen py-10 px-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        📰 Latest Blogs
      </h1>

      {/* Changed to single column */}
      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-400 mb-3">
                {blog.author} • {blog.date}
              </p>
              <p className="text-sm mb-4">
                {expandedBlog === blog.id ? blog.fullContent : blog.excerpt}{" "}
                <span
                  onClick={() => toggleExpand(blog.id)}
                  className={`cursor-pointer font-medium ${
                    darkMode
                      ? "text-yellow-400 hover:underline"
                      : "text-blue-500 hover:underline"
                  }`}
                >
                  {expandedBlog === blog.id ? "Show Less" : "Read More"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
