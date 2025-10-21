"use client";
import { motion } from "framer-motion";

export default function ArchitectureHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="text-center mb-20"
    >
      <h1 className="text-5xl md:text-6xl font-cinzel text-gray-800 mb-6">
        Architectural Vision & Craftsmanship
      </h1>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
        Our architectural projects embody innovation, precision, and purpose —
        each structure is a reflection of thoughtful engineering and timeless
        beauty. Explore the foundations, contractors, and design rationale
        behind our architectural excellence.
      </p>
    </motion.div>
  );
}
