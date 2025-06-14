import React, { useContext } from 'react';
import AuthContext from '../Auth/AuthContext';
import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaChartLine, FaHandsHelping } from 'react-icons/fa';

const Features = () => {
  const { darkMode } = useContext(AuthContext);

  const features = [
    {
      icon: <FaUsers className="text-4xl mb-2 text-accent" />,
      title: 'Community Driven',
      description: 'Create and join events that matter to your neighborhood.'
    },
    {
      icon: <FaCalendarAlt className="text-4xl mb-2 text-accent" />,
      title: 'Easy Scheduling',
      description: 'Plan and manage event schedules effortlessly.'
    },
    {
    icon: <FaHandsHelping className="text-4xl mb-2 text-accent" />,
    title: 'Join Various Events',
    description: 'Explore and participate in a wide range of community-driven activities.'
    }
  ];

  return (
    <div className={`py-12 md:py-25 px-4 md:px-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Key Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`p-6 rounded-xl shadow-md ${
              darkMode ? 'bg-gray-800' : 'bg-gray-100'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
