"use client";

import { motion } from "framer-motion";
import { features } from "@/app/data/features";
import FeatureCard from "./FeatureCard";

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
      ease: "easeOut",
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

export default function FeatureGrid() {
  return (
    <>
      <div className="mt-16 mb-6">

        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Engineered Features
        </p>

      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
      >

        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={fadeUp}
          >
            <FeatureCard feature={feature} />
          </motion.div>
        ))}

      </motion.div>
    </>
  );
}