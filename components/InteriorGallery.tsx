"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const ProjectPage = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1720876884400-fe4b13f8af72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1073",
      alt: "Designer Dark House",
      title: "Interior Design",
      subtitle: "Woodland House Latvia",
    },
    {
      src: "https://images.unsplash.com/photo-1723639904352-5ade4702d86d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      alt: "Woodland House Latvia",
      title: "Interior Design",
      subtitle: "Woodland House Latvia",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
      alt: "Home Decor",
      title: "Home Decor",
      subtitle: "Designer Dark House",
    },
    {
      src: "https://images.unsplash.com/photo-1593297779123-cee941f400c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
      alt: "Urban Design",
      title: "Urban Design",
      subtitle: "Designer Dark House",
    },
  ];

  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8">
        Featured Interior Design Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-md bg-white aspect-square"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 80vw, 30vw"
            />

            <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/50 via-transparent to-black/30">
              <div
                className={`text-white text-sm font-semibold ${
                  index % 2 === 0 ? "self-end" : "self-start"
                }`}
              >
                {image.title}
              </div>
              <div
                className={`text-white text-xs font-medium ${
                  index % 2 === 0 ? "self-start" : "self-end"
                }`}
              >
                {image.subtitle}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
