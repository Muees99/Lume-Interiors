"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function UnderConstruction({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#f9f6f3] px-6 text-center overflow-hidden">
      {/* 🚧 Top Caution Tape (Left → Right) */}
      <div className="absolute top-16 w-full overflow-hidden transform -rotate-6 shadow-lg">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            duration: 10, // slower, more elegant motion
            ease: "linear",
          }}
          className="flex w-[200%] bg-[repeating-linear-gradient(45deg,#b58b57_0px,#b58b57_25px,#f9f6f3_25px,#f9f6f3_50px)] py-4"
        >
          <p className="text-gray-800 font-extrabold text-lg uppercase tracking-[0.3em] whitespace-nowrap w-full">
            ⚠️ Under Construction ⚠️ Under Construction ⚠️ Under Construction ⚠️
            Under Construction ⚠️
          </p>
          <p className="text-gray-800 font-extrabold text-lg uppercase tracking-[0.3em] whitespace-nowrap w-full">
            ⚠️ Under Construction ⚠️ Under Construction ⚠️ Under Construction ⚠️
            Under Construction ⚠️
          </p>
        </motion.div>
      </div>

      {/* 🚧 Bottom Caution Tape (Right → Left) */}
      <div className="absolute bottom-16 w-full overflow-hidden transform rotate-6 shadow-lg">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
          className="flex w-[200%] bg-[repeating-linear-gradient(45deg,#b58b57_0px,#b58b57_25px,#f9f6f3_25px,#f9f6f3_50px)] py-4"
        >
          <p className="text-gray-800 font-extrabold text-lg uppercase tracking-[0.3em] whitespace-nowrap w-full">
            🚧 Work in Progress 🚧 Work in Progress 🚧 Work in Progress 🚧 Work
            in Progress 🚧
          </p>
          <p className="text-gray-800 font-extrabold text-lg uppercase tracking-[0.3em] whitespace-nowrap w-full">
            🚧 Work in Progress 🚧 Work in Progress 🚧 Work in Progress 🚧 Work
            in Progress 🚧
          </p>
        </motion.div>
      </div>

      {/*Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-700 mb-8 mt-24 z-10"
      >
        {title} <span className="text-[#b58b57]">Page</span>
      </motion.h1>

      {/*Image */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="relative w-full max-w-md h-64 mb-6 z-10 rounded-2xl overflow-hidden shadow-2xl"
      >
        <Image
          src={image}
          alt="Under Construction"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Message */}
      <p className="text-gray-600 max-w-md mb-10 z-10 text-lg leading-relaxed">
        We&apos;re currently working on this section to deliver something
        exceptional. Check back soon for updates and exclusive reveals.
      </p>

      {/* 🔙 CTA */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
        <Link
          href="/"
          className="px-8 py-3 bg-[#b58b57] text-white rounded-full hover:bg-[#a57b47] transition font-semibold z-10 shadow-md"
        >
          Back to Home
        </Link>
      </motion.div>

      {/* ⚙️ Subtle Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />
    </section>
  );
}
