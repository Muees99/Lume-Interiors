"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = { title: string; gallery: string[] };

export default function ArchitectureGallery({ title, gallery }: Props) {
  if (!gallery?.length) return null;

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-cinzel text-[#B98E75] mb-6 text-center">
        Architectural Gallery
      </h3>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {gallery.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={img}
              alt={`${title} render ${index + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <span className="text-white font-medium text-lg">
                View Render {index + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
