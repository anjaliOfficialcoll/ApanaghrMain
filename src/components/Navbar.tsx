'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
<<<<<<< HEAD
=======
import AuthModal from './AuthModal';
>>>>>>> 78e7e34 (Initial commit)

interface NavItem {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const { isDarkMode, toggleTheme } = useTheme();

<<<<<<< HEAD
  const navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' }
=======
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'For PG Owners', href: '#for-pg-owners' },
    { name: 'Contact Us', href: '#contact-us' },
    { name: 'Partner Us', href: '#partner-us' },
    { name: 'Blog', href: '#blog' }
>>>>>>> 78e7e34 (Initial commit)
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
<<<<<<< HEAD
            ? 'bg-[var(--nav-bg)] nav-blur shadow-md backdrop-blur-md' 
=======
            ? 'bg-white/90 shadow-md backdrop-blur-md' 
>>>>>>> 78e7e34 (Initial commit)
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-20">
<<<<<<< HEAD
=======
            
>>>>>>> 78e7e34 (Initial commit)
            {/* Logo with Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              {/* Logo */}
              <div className="relative w-14 h-14">
                <Image
                  src="/logo.png"
                  alt="ApanaGhr Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* Title */}
<<<<<<< HEAD
              <div className="flex items-center">
                <h1 className="nav-title text-3xl tracking-wider font-black">
                  Apana
                  <span className="font-black">Ghr</span>
                </h1>
              </div>
=======
              <h1 className="text-3xl tracking-wider font-black text-[#14452F]">
                Apana<span className="text-[#099989]">Ghr</span>
              </h1>
>>>>>>> 78e7e34 (Initial commit)
            </motion.div>

            {/* Desktop Navigation and Theme Toggle */}
            <div className="hidden md:flex items-center space-x-8">
<<<<<<< HEAD
              {/* Navigation Items */}
=======
>>>>>>> 78e7e34 (Initial commit)
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
<<<<<<< HEAD
                  className={`nav-link text-muted hover:text-brand transition-colors duration-300 text-lg font-medium ${
                    activeSection === item.href.substring(1) ? 'nav-link-active text-brand' : ''
=======
                  className={`transition-colors duration-300 text-lg font-medium ${
                    activeSection === item.href.substring(1) 
                      ? 'text-[#099989] font-bold underline underline-offset-4' 
                      : 'text-[#14452F] hover:text-[#099989]'
>>>>>>> 78e7e34 (Initial commit)
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
<<<<<<< HEAD
                className="p-2 rounded-full hover:bg-[var(--hover-bg)] transition-colors duration-300 ml-4"
=======
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 ml-4"
>>>>>>> 78e7e34 (Initial commit)
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDarkMode ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {isDarkMode ? (
<<<<<<< HEAD
                    <FaSun className="w-5 h-5 text-[var(--brand-color)]" />
                  ) : (
                    <FaMoon className="w-5 h-5 text-muted" />
                  )}
                </motion.div>
              </motion.button>
=======
                    <FaSun className="w-5 h-5 text-[#099989]" />
                  ) : (
                    <FaMoon className="w-5 h-5 text-[#14452F]" />
                  )}
                </motion.div>
              </motion.button>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-3 ml-2">
                <button
                  onClick={() => { setAuthMode('login'); setIsModalOpen(true); }}
                  className="text-sm font-medium text-[#14452F] hover:text-[#099989] transition-colors duration-200"
                >
                  Login
                </button>

                <motion.button
                  onClick={() => { setAuthMode('signup'); setIsModalOpen(true); }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 rounded-full font-semibold text-white shadow-md 
             bg-[#099989] hover:bg-[#077779] transition-colors"
                >
                  Sign up
                </motion.button>
              </div>
>>>>>>> 78e7e34 (Initial commit)
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
<<<<<<< HEAD
                className="p-2 rounded-lg hover:bg-[var(--hover-bg)] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDarkMode ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {isDarkMode ? (
                    <FaSun className="w-5 h-5 text-[var(--brand-color)]" />
                  ) : (
                    <FaMoon className="w-5 h-5 text-muted" />
                  )}
                </motion.div>
=======
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDarkMode ? (
                  <FaSun className="w-5 h-5 text-[#099989]" />
                ) : (
                  <FaMoon className="w-5 h-5 text-[#14452F]" />
                )}
>>>>>>> 78e7e34 (Initial commit)
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
<<<<<<< HEAD
                className="text-muted hover:text-brand p-2 rounded-lg hover:bg-[var(--hover-bg)] transition-all duration-300"
=======
                className="text-[#14452F] hover:text-[#099989] p-2 rounded-lg transition-all duration-300"
>>>>>>> 78e7e34 (Initial commit)
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
            className="fixed top-20 left-0 right-0 z-40 bg-[var(--nav-bg)] nav-blur backdrop-blur-md border-t border-[var(--border-color)] md:hidden"
=======
            className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 md:hidden"
>>>>>>> 78e7e34 (Initial commit)
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
<<<<<<< HEAD
                  className={`nav-link-mobile block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1) 
                      ? 'text-brand bg-[var(--hover-bg)]' 
                      : 'text-muted hover:text-brand'
=======
                  className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1) 
                      ? 'text-[#099989] font-bold bg-gray-100' 
                      : 'text-[#14452F] hover:text-[#099989]'
>>>>>>> 78e7e34 (Initial commit)
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
<<<<<<< HEAD
=======

              {/* Mobile auth actions */}
              <div className="pt-3 flex items-center justify-center gap-3">
                <button
                  onClick={() => { setAuthMode('login'); setIsModalOpen(true); setIsMobileMenuOpen(false); }}
                  className="px-4 py-2 rounded-md text-sm font-medium text-[#14452F] hover:text-[#099989]"
                >
                  Login
                </button>
                <button
                  onClick={() => { setAuthMode('signup'); setIsModalOpen(true); setIsMobileMenuOpen(false); }}
                  className="px-4 py-2 rounded-md text-sm font-semibold bg-[#099989] hover:bg-[#077779] text-white"
                >
                  Sign up
                </button>
              </div>
>>>>>>> 78e7e34 (Initial commit)
            </div>
          </motion.div>
        )}
      </AnimatePresence>
<<<<<<< HEAD
=======

      {/* Auth Modal */}
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} mode={authMode} />
>>>>>>> 78e7e34 (Initial commit)
    </>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 78e7e34 (Initial commit)
