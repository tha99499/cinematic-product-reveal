"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { useEffect } from "react";

const springConfig = {
  damping: 25,
  stiffness: 300,
  mass: 0.5,
};

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-yellow-400 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full bg-yellow-400/20 blur-3xl pointer-events-none z-[9998]"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      />
    </>
  );
}