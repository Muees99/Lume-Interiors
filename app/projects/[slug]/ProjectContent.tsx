"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./projectData";

type Project = {
  slug: string;
  title: string;
  image: string;
  description: string;
  cost: string;
  location: string;
  category: string;
  details?: string;
};

export default function ProjectContent({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[currentIndex + 1] || null;
  const prevProject = projects[currentIndex - 1] || null;

  return (
    <motion.section
      key={project.slug} // 👈 helps animate when project changes
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // 👈 optional, for fade-out transitions
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen bg-[#f9f6f3] pb-20"
    >
      {/* Hero Section */}
      <div className="relative w-full h-[70vh]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-cinzel mb-3"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-[#e8c9b8]"
          >
            {project.location} • {project.category}
          </motion.p>
        </div>
      </div>

      {/* Project Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-4xl mx-auto mt-16 px-6 md:px-10 text-gray-700 leading-relaxed"
      >
        <h2 className="text-2xl md:text-3xl font-cinzel text-[#B98E75] mb-6">
          Project Overview
        </h2>
        <p className="mb-8">{project.description}</p>

        {project.details && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Design Details
            </h3>
            <p className="mb-8">{project.details}</p>
          </>
        )}

        <div className="grid md:grid-cols-2 gap-8 bg-white shadow-md rounded-2xl p-8 mt-10">
          <div>
            <h4 className="text-[#B98E75] font-semibold text-lg mb-1">
              Project Cost
            </h4>
            <p className="text-gray-800">{project.cost}</p>
          </div>
          <div>
            <h4 className="text-[#B98E75] font-semibold text-lg mb-1">
              Location
            </h4>
            <p className="text-gray-800">{project.location}</p>
          </div>
        </div>
      </motion.div>

      {/* Navigation Footer */}
      <div className="flex justify-between items-center max-w-5xl mx-auto px-6 mt-20">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="text-[#B98E75] hover:underline flex items-center gap-2"
          >
            ← {prevProject.title}
          </Link>
        ) : (
          <span />
        )}
        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="text-[#B98E75] hover:underline flex items-center gap-2"
          >
            {nextProject.title} →
          </Link>
        )}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#B98E75] mt-20 py-14 px-8 rounded-3xl text-center text-white shadow-2xl max-w-5xl mx-auto"
      >
        <h3 className="text-3xl font-cinzel mb-4">Inspired by this project?</h3>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Let&apos;s bring your own space to life. Connect with our team and
          start designing your dream.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-[#B98E75] font-semibold px-8 py-3 rounded-full hover:bg-[#f9f6f3] transition-all"
        >
          Let&apos;s Discuss →
        </Link>
      </motion.div>
    </motion.section>
  );
}
