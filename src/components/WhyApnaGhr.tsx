'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaSearchLocation, FaHandshake, FaRegClock } from 'react-icons/fa';
import type { ReactElement } from 'react';

interface Reason {
  icon: ReactElement;
  title: string;
  description: string;
  color: string;
}

const WhyApnaGhr: React.FC = () => {
  const reasons: Reason[] = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Verified Properties",
      description: "All properties are thoroughly verified for your safety and comfort",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
      icon: <FaSearchLocation className="w-8 h-8" />,
      title: "Smart Location",
      description: "Find accommodations near your workplace or institution",
      color: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Trusted Partners",
      description: "Work with verified property owners and reliable partners",
      color: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
    },
    {
      icon: <FaRegClock className="w-8 h-8" />,
      title: "Quick Process",
      description: "Streamlined booking process to save your valuable time",
      color: "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#f8ffff] dark:bg-gradient-to-b dark:from-[#121212] dark:to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose ApnaGhr?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We make finding your perfect accommodation simple and secure
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${reason.color} rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <span className="p-3 bg-white dark:bg-gray-800/50 rounded-full">
                  {reason.icon}
                </span>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyApnaGhr;