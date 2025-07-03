'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaUserFriends, FaCalendarCheck, FaMap, 
         FaUsers, FaHeadset } from 'react-icons/fa';
import type { ReactElement } from 'react';

interface Feature {
  icon: ReactElement;
  title: string;
  description: string;
  color: string;
  launchPhase: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <FaSearch className="w-6 h-6" />,
      title: "Room & PG Finder",
      description: "Smart search for accommodations tailored to students and professionals",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      launchPhase: "Phase 1"
    },
    {
      icon: <FaUserFriends className="w-6 h-6" />,
      title: "AI Roommate Matching",
      description: "Find compatible roommates using our advanced AI matching system",
      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
      launchPhase: "Phase 2"
    },
    {
      icon: <FaCalendarCheck className="w-6 h-6" />,
      title: "Easy Booking System",
      description: "Seamless process to book your preferred accommodation",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      launchPhase: "Phase 1"
    },
    {
      icon: <FaMap className="w-6 h-6" />,
      title: "Interactive Map",
      description: "Explore nearby rooms, PGs, and essential services",
      color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
      launchPhase: "Phase 1"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Community Features",
      description: "Connect with other tenants, share reviews and join events",
      color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
      launchPhase: "Phase 1"
    },
    {
      icon: <FaHeadset className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your queries",
      color: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
      launchPhase: "Phase 1"
    }
  ];

  return (
    <section className="py-16 gradient-bg-2 relative overflow-hidden">
      {/* Add decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-400 dark:bg-green-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-red-400 dark:bg-red-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Upcoming Features
          </h2>
          <p className="text-lg text-[var(--muted-text)] max-w-2xl mx-auto">
            Experience the future of home finding with our innovative features
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className={`group relative ${feature.color} p-2 sm:p-4 lg:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-opacity-90`}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-xl sm:text-2xl lg:text-3xl mb-2 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </span>
                <h3 className="text-xs sm:text-sm lg:text-lg font-semibold mb-1 lg:mb-2 group-hover:text-[var(--brand-color)] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-xs lg:text-sm text-[var(--muted-text)] hidden sm:block">
                  {feature.description}
                </p>
                <span className="mt-1 sm:mt-3 inline-block px-2 py-1 bg-white/50 dark:bg-black/30 rounded-full text-[10px] sm:text-xs font-medium">
                  {feature.launchPhase}
                </span>
              </div>
              <div className="absolute inset-0 bg-white dark:bg-white/5 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;