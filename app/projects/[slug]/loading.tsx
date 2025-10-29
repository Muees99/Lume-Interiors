"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <section className="min-h-screen bg-[#f9f6f3] flex flex-col justify-center items-center text-center">
      {/* Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        className="w-14 h-14 border-4 border-[#e8c9b8] border-t-[#B98E75] rounded-full mb-6 shadow-md"
      />

      {/* Text */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="font-cinzel text-2xl text-[#B98E75]"
      >
        Loading Project Details...
      </motion.h2>

      <p className="text-gray-500 mt-2 text-sm">
        Please wait while we prepare your visual experience ✨
      </p>
    </section>
  );
}
