"use client";
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { useParams } from "next/navigation";
import { architectureProjects } from "../ArchitectureData";
import ArchitectureGallery from "../../../components/ArchitectureGallery";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function ArchitectureDetailContent() {
  const { slug } = useParams();
  const project = architectureProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-center py-20 text-gray-600">
        <p>Project not found.</p>
        <Link
          href="/architecture"
          className="mt-6 inline-block bg-[#B98E75] text-white px-6 py-2 rounded-full hover:bg-[#a27b66] transition"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#f9f6f3] py-16 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="px-6 md:px-12 py-20 max-w-6xl mx-auto"
      >
        {/* <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl mb-10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl font-cinzel text-white hover:text-[#B98E75] mb-4">
        {project.title}
      </h1> */}

        <div className="relative w-full h-[70vh] mt-6">
          {/* relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl mb-10 */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-white text-5xl md:text-6xl font-cinzel text-center"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
        <p className="text-[#B98E75] mb-4 font-medium">{project.location}</p>
        <p className="text-gray-500 leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-gray-600">
              <strong>Contractor:</strong> {project.contractor}
            </p>
            <p className=" text-gray-600 mt-3">
              <strong>Foundation:</strong> {project.foundation}
            </p>
          </div>
          <p className="italic text-gray-400">{project.reason}</p>
        </div>

        <ArchitectureGallery title={project.title} gallery={project.gallery} />

        <div className="mt-20 text-center">
          <Link
            href="/architecture"
            className="text-[#B98E75] font-medium hover:underline mb-8 inline-block text-lg transition-all duration-300"
          >
            ← Back to All Architectural Projects
          </Link>
          {/* className="text-[#B98E75] font-medium hover:underline mb-8 inline-block text-lg"    ← Back to Architecture */}
        </div>
      </motion.div>
    </section>
  );
}

export default function ArchitectureDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-[80vh] text-gray-500">
          <div className="w-16 h-16 border-4 border-[#B98E75] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg font-medium">
            Fetching architectural details...
          </p>
        </div>
      }
    >
      <ArchitectureDetailContent />
    </Suspense>
  );
}
