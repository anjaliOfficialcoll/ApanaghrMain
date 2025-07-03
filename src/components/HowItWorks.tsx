'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserCircle, FaRobot, FaHandshake, FaHome } from 'react-icons/fa';
import type { ReactElement } from 'react';

interface Step {
  title: string;
  description: string;
  icon: ReactElement;
  color: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      title: "Create Profile",
      description: "Set up your preferences and requirements for the perfect living space.",
      icon: <FaUserCircle className="w-10 h-10" />,
      color: "text-blue-500 dark:text-blue-400"
    },
    {
      title: "AI Matching",
      description: "Our AI system finds compatible roommates and PGs based on your profile.",
      icon: <FaRobot className="w-10 h-10" />,
      color: "text-green-500 dark:text-green-400"
    },
    {
      title: "Connect & Visit",
      description: "Connect with matches and schedule visits to your potential new home.",
      icon: <FaHandshake className="w-10 h-10" />,
      color: "text-purple-500 dark:text-purple-400"
    },
    {
      title: "Move In",
      description: "Complete the booking process and move into your new home.",
      icon: <FaHome className="w-10 h-10" />,
      color: "text-indigo-500 dark:text-indigo-400"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#f8ffff] to-white dark:from-[#1a1a1a] dark:to-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find your perfect living space in just a few simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-4 lg:p-6 shadow-md hover:shadow-lg dark:shadow-lg dark:shadow-black/20 transition-shadow duration-300 h-full border border-transparent dark:border-[#2A2A2A]">
                <div className="flex flex-col items-center text-center space-y-3">
                  <span className={`text-2xl sm:text-3xl ${step.color} mb-2`}>
                    {step.icon}
                  </span>
                  <span className="inline-block px-3 py-1 bg-[#003D3D]/10 dark:bg-[#26A69A]/20 rounded-full text-xs font-medium text-[#003D3D] dark:text-[#26A69A]">
                    Step {index + 1}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && index % 2 !== 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 text-[#003D3D]/30 dark:text-[#26A69A]/30">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-full h-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;