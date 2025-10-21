"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function UrbanDesignPage() {
  return (
    <section className="min-h-screen bg-[#f4efe9] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background Circles */}
      <motion.div
        initial={{ scale: 0, opacity: 0.2 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.2 }}
        className="absolute w-96 h-96 bg-[#B98E75]/30 rounded-full top-10 left-10 blur-3xl"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0.2 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-80 h-80 bg-[#e1c5b3]/40 rounded-full bottom-10 right-10 blur-3xl"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-cinzel text-gray-800 mb-4">
          Urban Design
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Our urban design platform is currently in progress — we’re building
          smart, sustainable spaces that blend aesthetics and functionality.
        </p>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="relative w-full max-w-md h-64 mx-auto mb-8"
        >
          <Image
            src="/images/urban-placeholder.jpg"
            alt="Urban design under construction"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        <Link
          href="/home-decor"
          className="inline-block bg-[#B98E75] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#a27b66] transition"
        >
          ← Back to Home Decor
        </Link>
      </motion.div>
    </section>
  );
}
