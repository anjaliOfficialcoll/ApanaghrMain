'use client';

import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterLinks {
  company: FooterLink[];
  support: FooterLink[];
  legal: FooterLink[];
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const footerLinks: FooterLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Safety Center', href: '#' },
      { name: 'Community Guidelines', href: '#' }
    ],
    legal: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Settings', href: '#' }
    ]
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setEmail('');
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <footer className="bg-[#003D3D] dark:bg-[#121212] text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="ApanaGhr Logo"
                  width={40}
                  height={40}
                  className="dark:brightness-200"
                />
                <span className="text-xl font-semibold">ApanaGhr</span>
              </div>
              <p className="text-gray-300 dark:text-gray-400 max-w-md">
                Finding the perfect living space and compatible roommates made easy. Your trusted partner in housing solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[FaInstagram, FaTwitter, FaLinkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-[#26A69A] transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-[#26A69A] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
<<<<<<< HEAD
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-[#26A69A] transition-colors duration-300"
=======
              <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-2.5 bg-[#002828] dark:bg-[#1E1E1E] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-white/30 dark:focus:ring-[#26A69A]/30 transition-all duration-300 text-sm"
                    disabled={isSubmitting}
                  />
                  <motion.button
                    type="submit"
                    className={`w-full flex items-center justify-center px-4 py-2.5 bg-white dark:bg-[#26A69A] text-gray-900 dark:text-white hover:text-black dark:hover:text-white rounded-lg transition-all duration-300 text-sm font-medium ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-50 dark:hover:bg-[#2A897F]'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Subscribe'}
                  </motion.button>
                </div>
                
                {/* Success Message */}
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-green-400 dark:text-[#4FD1C5] text-sm flex items-center justify-center space-x-2"
>>>>>>> bc6aceadb742f43a192e481a66efffbd101e6bdc
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-[#26A69A] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-600 dark:border-gray-800 pt-8">
          <form onSubmit={handleSubmit} className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-gray-600 dark:border-gray-700 
                         text-white placeholder-gray-400 focus:outline-none focus:border-[#26A69A] 
                         dark:focus:border-[#26A69A] transition-colors duration-300"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 rounded-lg bg-[#26A69A] hover:bg-[#2BC4B5] 
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-colors duration-300"
=======
        {/* Bottom Section with Social Icons and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pb-8">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <motion.a
                href="mailto:contact@apanaghr.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-[#4FD1C5] transition-colors duration-300"
                aria-label="Email us"
>>>>>>> bc6aceadb742f43a192e481a66efffbd101e6bdc
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            <AnimatePresence>
              {showSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-green-400 mt-2"
                >
                  Thanks for subscribing!
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-600 dark:border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} ApanaGhr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
