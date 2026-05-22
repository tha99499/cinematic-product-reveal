"use client";

import { motion } from "framer-motion";
import HeroCard from "./HeroCard";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 lg:grid-cols-12 gap-6"
    >

      <motion.div
        variants={fadeUp}
        className="lg:col-span-5 flex flex-col justify-center"
      >

        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
          Premium Mechanical Keyboard
        </p>

        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
          Elevate Your
          <span className="block text-yellow-400">
            Typing Experience
          </span>
        </h1>

        <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-lg">
          Crafted for creators, developers, and enthusiasts who demand precision and elegance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          <button
            aria-label="Shop premium keyboards"
            className="group relative overflow-hidden px-8 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:scale-105 active:scale-95 transition-transform duration-300"
          >

            <span className="relative z-10">
              Shop Now
            </span>

            <div className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 bg-white/40 skew-x-12" />
          </button>

          <button
            aria-label="Explore keyboard collection"
            className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md rounded-full hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-500"
          >
            Explore Collection
          </button>

        </div>

      </motion.div>

      <HeroCard />

    </motion.div>
  );
}