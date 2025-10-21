"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ArchitectureCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mt-28 bg-[#B98E75] text-white py-16 rounded-3xl shadow-lg max-w-5xl mx-auto px-6"
    >
      <h2 className="text-3xl md:text-4xl font-cinzel mb-6">
        Want to Build or Buy a Similar Project?
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Whether you&apos;re envisioning a private residence, corporate complex,
        or modern estate — our architects, engineers, and partners are ready to
        bring your dream to life with precision and creativity.
      </p>
      <Link
        href="/contact"
        className="bg-white text-[#B98E75] px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300"
      >
        Contact Our Team →
      </Link>
    </motion.div>
  );
}
