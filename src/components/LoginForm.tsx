'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface LoginFormProps {
  mode: 'login' | 'signup';
  onClose: () => void;
}

const LoginForm = ({ mode, onClose }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ email, password, mode });
    onClose();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 input-bg border border-[var(--input-border)] rounded-md shadow-sm focus:outline-none focus:ring-[var(--brand-color)] focus:border-[var(--brand-color)] text-[var(--foreground)] placeholder-[var(--muted-text)]"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-[var(--foreground)]">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 input-bg border border-[var(--input-border)] rounded-md shadow-sm focus:outline-none focus:ring-[var(--brand-color)] focus:border-[var(--brand-color)] text-[var(--foreground)] placeholder-[var(--muted-text)]"
          placeholder="Enter your password"
          required
        />
      </div>

      <div className="mt-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full px-4 py-2 bg-[var(--brand-color)] text-white rounded-md hover:opacity-90 transition-all duration-300 font-medium"
        >
          {mode === 'login' ? 'Sign In' : 'Create Account'}
        </motion.button>
      </div>
    </motion.form>
  );
};

export default LoginForm;