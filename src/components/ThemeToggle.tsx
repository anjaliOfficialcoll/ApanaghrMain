'use client';

import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="
        p-2 rounded-full 
        bg-transparent 
        hover:bg-opacity-20 
        transition-colors
        dark:hover:bg-gray-700
      "
      whileTap={{ scale: 0.95 }}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {isDark ? (
          <FiSun className="w-5 h-5 text-white" />
        ) : (
          <FiMoon className="w-5 h-5 text-gray-800" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
