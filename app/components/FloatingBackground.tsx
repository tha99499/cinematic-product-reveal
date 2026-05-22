"use client";

import { motion } from "framer-motion";

export default function FloatingBackground() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"
      />

      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
    </>
  );
}