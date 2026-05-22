"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  Variants
} from "framer-motion";

import { useRef } from "react";

const fadeUp: Variants = {
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

const springConfig = {
  stiffness: 100,
  damping: 25,
};

export default function HeroCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [12, -12]),
    springConfig
  );

  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-12, 12]),
    springConfig
  );

  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  const background = useMotionTemplate`
    radial-gradient(
      circle at ${glowX} ${glowY},
      rgba(250,204,21,0.18),
      transparent 40%
    )
  `;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={fadeUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.02,
        y: -6,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 20,
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className="relative lg:col-span-7 rounded-[32px] overflow-hidden bg-white/5 border border-white/10 min-h-[500px] group will-change-transform shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
    >

      <motion.div
        style={{ background }}
        className="absolute inset-0 z-10"
      />

      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')] z-10" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-20" />

      <motion.div
        initial={{
          scale: 1.1,
          filter: "blur(12px)",
          opacity: 0,
        }}
        animate={{
          scale: 1,
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className="relative w-full h-full"
      >

        <Image
          src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
          alt="Keyboard"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />

      </motion.div>

      <div
        className="absolute bottom-8 left-8 z-30"
        style={{
          transform: "translateZ(50px)",
        }}
      >

        <p className="text-sm uppercase tracking-[0.2em] text-gray-300">
          Precision Engineered
        </p>

        <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight mt-2">
          Aurora X1
        </h3>

        <p className="text-gray-300 mt-3 max-w-sm leading-relaxed">
          Crafted with premium materials and tactile switches for an immersive typing experience.
        </p>

      </div>

    </motion.div>
  );
}