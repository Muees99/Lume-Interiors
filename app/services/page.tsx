"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

type Service = {
  title: string;
  slug: string;
  category: string;
  description: string;
  costEstimate: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Interior Design Consultation",
    slug: "interior-design-consultation",
    category: "Design & Architecture",
    description:
      "We provide personalized design consultations to help clients envision and execute their dream interiors.",
    costEstimate: "$1,200 - $3,500",
    image:
      "https://images.unsplash.com/photo-1719903466697-ee9437c8572f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935",
  },
  {
    title: "Luxury Home Architecture",
    slug: "luxury-home-architecture",
    category: "Design & Architecture",
    description:
      "Our architectural services blend innovation and timeless design for residential and commercial spaces.",
    costEstimate: "$15,000 - $40,000",
    image:
      "https://images.unsplash.com/photo-1721244653721-bc681b2dfd27?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=748",
  },
 
  {
    title: "Commercial Renovation",
    slug: "commercial-renovation",
    category: "Construction & Renovation",
    description:
      "We specialize in upgrading commercial buildings with sustainable and efficient renovation solutions.",
    costEstimate: "$20,000 - $60,000",
    image:
      "https://images.unsplash.com/photo-1698889670683-a40e1be44e46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
  },
  {
    title: "Consultation and Quantity Surveying",
    slug: "project-management",
    category: "Consultation & Project Management",
    description:
      "Our project managers oversee every detail, ensuring timely delivery and budget adherence.",
    costEstimate: "$5,000 - $15,000",
    image: "https://images.unsplash.com/photo-1622117523535-ecb446c0c1ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },

  {
    title: "Project Management",
    slug: "project-management",
    category: "Consultation & Project Management",
    description:
      "Our project managers oversee every detail, ensuring timely delivery and budget adherence.",
    costEstimate: "$5,000 - $15,000",
    image: "https://images.unsplash.com/photo-1722501106404-6ce75d0ead53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    title: "Facility Maintenance",
    slug: "facility-maintenance",
    category: "Maintenance & Facility Support",
    description:
      "Long-term maintenance plans that ensure your facilities remain in top shape.",
    costEstimate: "$1,000 - $5,000 per month",
    image: "https://images.unsplash.com/photo-1719050817004-c76eb7c75c99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1058",
  },
  {
    title: "Facility Support",
    slug: "facility-maintenance",
    category: "Maintenance & Facility Support",
    description:
      "Long-term maintenance plans that ensure your facilities remain in top shape.",
    costEstimate: "$1,000 - $5,000 per month",
   image: "https://images.unsplash.com/photo-1614805137281-8adea8f3967e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=682",
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("Design & Architecture");
  const categories = [
    "Design & Architecture",
    "Construction & Renovation",
    "Consultation & Project Management",
    "Maintenance & Facility Support",
  ];

  const filteredServices = services.filter(
    (service) => service.category === activeCategory
  );

  return (
    <section className="min-h-screen bg-[#f9f6f3] py-16 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl text-gray-600 font-bold text-center mb-10"
      >
        Our <span className="text-[#b58b57]">Services</span>
      </motion.h1>

      {/* Category Dashboard */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border text-sm font-semibold transition ${
              activeCategory === cat
                ? "bg-[#b58b57] text-white"
                : "bg-white text-[#333] hover:bg-[#f0e7da]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Service Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredServices.map((service) => (
          <motion.div
            key={service.slug}
            layout
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <Image
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
                width={800}
                height={400}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-500 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-3">{service.description}</p>
              <p className="text-[#b58b57] font-semibold mb-4">
                Est. Cost: {service.costEstimate}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-[#b58b57] rounded-full hover:bg-[#a57b47] transition"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl text-gray-600 font-bold mb-4">
          Interested in building or buying a similar project?
        </h2>
        <Link
          href="/contact"
          className="px-6 py-3 bg-[#b58b57] text-white rounded-full hover:bg-[#a57b47] transition font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
