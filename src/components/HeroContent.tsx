"use client";

import { motion } from "framer-motion";

const text = "Find Your Perfect Living Space";

const HeroHighlight = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#099989]/10 to-transparent">
      {/* Title with animated letters */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold"
        style={{ color: "#71cba4ff" }} // Dark Teal for title
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.07,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <p className="mt-3 text-lg text-white/80">
  Discover PGs, flats, and compatible roommates effortlessly — all in one place!
</p>
    </div>
  );
};

export default HeroHighlight;
