'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserFriends, FaMapMarkerAlt, FaRegClock, FaRupeeSign, FaHome } from 'react-icons/fa';
import Image from 'next/image';
import AuthModal from './AuthModal';
import type { ReactElement } from 'react';

interface FloatingCard {
  icon: ReactElement;
  text: string;
  color: string;
  position: string;
  delay: number;
}

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const openModal = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsModalOpen(true);
  };

  const floatingCards: FloatingCard[] = [
    {
      icon: <FaShieldAlt className="w-5 h-5" />,
      text: "Verified PGs",
      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
      position: "top-10 right-0 lg:-right-10",
      delay: 0.2
    },
    {
      icon: <FaUserFriends className="w-5 h-5" />,
      text: "AI Matching",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      position: "bottom-0 left-10 lg:-bottom-10 lg:left-20",
      delay: 0.4
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      text: "Prime Locations",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      position: "top-20 left-0 lg:top-40 lg:-left-10",
      delay: 0.6
    },
    {
      icon: <FaRegClock className="w-5 h-5" />,
      text: "Quick Booking",
      color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
      position: "bottom-10 right-0 lg:bottom-20 lg:-right-8",
      delay: 0.8
    },
    {
      icon: <FaRupeeSign className="w-5 h-5" />,
      text: "Best Prices",
      color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
      position: "top-1/2 right-0 lg:-right-12",
      delay: 1.0
    },
    {
      icon: <FaHome className="w-5 h-5" />,
      text: "Quality Homes",
      color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
      position: "bottom-0 right-1/4 lg:-bottom-8",
      delay: 1.2
    }
  ];

  return (
    <section className="relative min-h-[calc(100vh-4rem)] py-16 flex items-center overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 gradient-bg-1">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-[50%] h-[50%] bg-[var(--brand-color)]/5 rounded-full filter blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] bg-[var(--brand-color)]/5 rounded-full filter blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[var(--brand-color)]/3 rounded-full filter blur-[80px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                Launching Soon
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6"
            >
              Find Your Perfect
              <span className="text-[var(--brand-color)]"> Living Space</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-[var(--muted-text)] mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Join the waitlist for the smartest way to find rooms, PGs, and compatible roommates
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal('signup')}
                className="px-8 py-3 bg-[var(--brand-color)] text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300"
              >
                Sign Up
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal('login')}
                className="px-8 py-3 bg-transparent text-[var(--brand-color)] border-2 border-[var(--brand-color)] rounded-full font-semibold hover:bg-[var(--brand-color)]/10 transition-all duration-300"
              >
                Login
              </motion.button>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/Untitled design (56).png"
                    alt="Modern living space"
                    fill
                    priority
                    className="rounded-2xl object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Floating Feature Cards */}
                {floatingCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${card.position} z-10`}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: card.delay, 
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                  >
                    <motion.div
                      className={`${card.color} px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm flex items-center gap-2 border border-white/20 dark:border-white/10`}
                      animate={{ 
                        y: [-5, 5, -5],
                        x: [-3, 3, -3],
                        rotate: [-1, 1, -1]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4 + index,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 0,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span className="p-1 bg-white dark:bg-gray-800 rounded-full">
                        {card.icon}
                      </span>
                      <span className="font-medium whitespace-nowrap text-sm">
                        {card.text}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -z-10 w-40 h-40 rounded-full bg-gradient-to-r from-[var(--brand-color)]/20 to-transparent blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    top: '10%',
                    right: '-15%'
                  }}
                />
                <motion.div
                  className="absolute -z-10 w-32 h-32 rounded-full bg-[var(--brand-color)]/5 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    top: '20%',
                    right: '-10%'
                  }}
                />
                <motion.div
                  className="absolute -z-10 w-40 h-40 rounded-full bg-[var(--brand-color)]/5 blur-2xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    bottom: '10%',
                    left: '-15%'
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <AuthModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={authMode}
      />
    </section>
  );
};

export default Hero;