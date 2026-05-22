"use client";

import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import FloatingBackground from "./components/FloatingBackground";

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-[#0B0B0B] text-white">

      <FloatingBackground />

      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        <Hero />

        <FeatureGrid />

      </section>
    </main>
  );
}