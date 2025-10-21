"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArchitectureProject } from "../app/architecture/ArchitectureData";

type Props = { project: ArchitectureProject; index: number };

export default function ArchitectureCard({ project, index }: Props) {
  return (
    <motion.div
      key={project.slug}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative w-full h-64">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-cinzel text-gray-800 mb-2">
          {project.title}
        </h2>
        <p className="text-[#B98E75] font-medium mb-3">{project.location}</p>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="border-t border-gray-200 pt-4 mb-4">
          <p className="text-sm text-gray-800">
            <strong>Contractor:</strong> {project.contractor}
          </p>
          <p className="text-sm text-gray-800 mt-2">
            <strong>Foundation:</strong> {project.foundation}
          </p>
          <p className="text-sm text-gray-600 mt-2 italic">{project.reason}</p>
        </div>

        <Link
          href={`/architecture/${project.slug}`}
          className="inline-block bg-[#B98E75] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#a27b66] transition-all duration-300"
        >
          View Project →
        </Link>
      </div>
    </motion.div>
  );
}
