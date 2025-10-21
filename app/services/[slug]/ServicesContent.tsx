"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceProps {
  service: {
    title: string;
    description: string;
    costEstimate: string;
    image: string;
  };
}

const ServicesContent: React.FC<ServiceProps> = ({ service }) => {
  return (
    <section className="min-h-screen bg-[#f9f6f3] py-16 px-6 md:px-20">
      <Link
        href="/services"
        className="inline-block mb-8 text-[#b58b57] font-semibold hover:underline"
      >
        ← Back to Services
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
      >
        <Image
          src={service.image}
          alt={service.title}
          className="w-full h-96 object-cover rounded-xl mb-8"
            width={800}
            height={400}
        />

        <h1 className="text-3xl text-[#b58b57] md:text-4xl font-bold mb-4">
          {service.title}
        </h1>

        <p className="text-gray-700 leading-relaxed text-lg mb-6 whitespace-pre-line">
          {service.description}
        </p>

        <p className="text-[#b58b57] font-semibold text-lg mb-10">
          Estimated Cost: {service.costEstimate}
        </p>

        <div className="text-center">
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#b58b57] text-white rounded-full hover:bg-[#a57b47] transition font-semibold"
          >
            Contact Us About This Service
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesContent;
