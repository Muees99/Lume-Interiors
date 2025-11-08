"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Logoo from "../../public/assets/Logoo.png";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const projectImages = [
    "https://images.unsplash.com/photo-1666623565355-0fa68fa6270b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932",
    "https://i.ibb.co/fnc0TG1/unsplash-Qd-AAasr-Zhdk.png",
    "https://images.unsplash.com/photo-1698362695891-8628b6ff6802?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    "https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1677208597365-5229d2cb8208?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    "https://images.unsplash.com/photo-1721244653757-b76cc4679dfb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1050",
  ];

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % projectImages.length : 0
    );
  }, [projectImages.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + projectImages.length) % projectImages.length
        : projectImages.length - 1
    );
  }, [projectImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div className="flex flex-col max-w-sm w-full">
            <h3 className="text-2xl font-semibold mb-4 text-[#B98E75]">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Subscribe to get updates on our latest interior designs and
              trends.
            </p>
            <form className="flex max-w-[350px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 px-4 py-2 flex-grow focus:outline-none text-sm text-white placeholder-gray-400 rounded-l-md"
              />
              <button
                type="submit"
                className="bg-[#B98E75] px-6 py-2 text-sm font-semibold rounded-r-md hover:bg-opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#B98E75]">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Architecture", href: "/architecture" },
                { label: "Interior Design", href: "/interior-design" },
                { label: "Home Decor", href: "/home-decor" },
                { label: "Urban Design", href: "/urban-design" },
                { label: "Design System", href: "/design-system" },
              ].map((service, index) => (
                <li key={index} className="flex items-center group">
                  <MdArrowForward className="mr-2 text-[#B98E75] group-hover:translate-x-1 transition-transform duration-300" />
                  <Link
                    href={service.href}
                    className="capitalize text-white/90 hover:text-[#B98E75] transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#B98E75] uppercase">
              Our Projects
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {projectImages.map((src, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className="cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="overflow-hidden rounded-md"
                  >
                    <Image
                      src={src}
                      alt={`Project ${i + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-20 object-cover rounded-md hover:opacity-80 transition"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Lumé Interiors */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src={Logoo}
                alt="Lumé Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h3 className="text-2xl font-semibold ml-2">Lumé Interiors</h3>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Crafting timeless spaces that reflect elegance and harmony. Let’s
              transform your home with Lumé.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, href: "https://facebook.com/" },
                { icon: <FaTwitter />, href: "https://twitter.com/" },
                { icon: <FaInstagram />, href: "https://instagram.com/" },
                { icon: <FaLinkedin />, href: "https://linkedin.com/" },
              ].map(({ icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[#B98E75] hover:bg-opacity-80 transition"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {currentYear} Lumé Interiors. All Rights Reserved.
        </div>
      </div>

      {/* Cinematic Modal with Navigation */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/80 z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedIndex(null)}
            />
            {/* Image Container */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-[1000]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
              }}
            >
              <div className="relative">
                <Image
                  src={projectImages[selectedIndex]}
                  alt="Selected project"
                  width={900}
                  height={600}
                  className="rounded-lg object-contain max-h-[85vh] max-w-[95vw] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                />
                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedIndex(null)}
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white text-black px-3 py-1 rounded-full font-semibold shadow-md"
                >
                  ✕
                </motion.button>

                {/* Left Arrow */}
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
                >
                  ←
                </motion.button>

                {/* Right Arrow */}
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
                >
                  →
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
