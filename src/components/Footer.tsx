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
    ],
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
    <footer className="bg-[#003D3D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="ApanaGhr Logo"
                    fill
                    sizes="40px"
                    className="object-contain"
                    style={{ 
                      transform: 'scale(1.1)',
                      filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.2))'
                    }}
                    priority
                  />
                </div>
                <div className="flex items-center">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    Apana
                    <span className="text-white">Ghr</span>
                  </h2>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Finding your perfect living space made simple and secure.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-2.5 bg-[#002828] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-white/30 transition-all duration-300 text-sm border border-transparent"
                    disabled={isSubmitting}
                  />
                  <motion.button
                    type="submit"
                    className={`w-full flex items-center justify-center px-4 py-2.5 bg-white text-gray-900 hover:text-black rounded-lg transition-all duration-300 text-sm font-medium ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-50'
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
                      className="text-green-400 text-sm flex items-center justify-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Thanks! We'll keep you updated.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section with Social Icons and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pb-8">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <motion.a
                href="mailto:contact@apanaghr.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email us"
              >
                <FaEnvelope className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Connect with us on LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
            </div>
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} ApanaGhr. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;