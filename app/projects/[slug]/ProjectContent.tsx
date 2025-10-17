// "use client";

// import React from "react";

// interface ProjectProps {
//   project: {
//     title: string;
//     date: string;
//     content?: string;
//     image: string;
//   };
// }

// export default function ProjectContent({ project }: ProjectProps) {
//   return (
//     <article className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
//       <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
//       <p className="text-gray-500 mb-8">{project.date}</p>

//       <img
//         src={project.image}
//         alt={project.title}
//         className="rounded-xl mb-8 w-full h-96 object-cover"
//       />

//       {project.content ? (
//         <div className="text-lg leading-relaxed font-serif text-gray-700">
//           {project.content
//             .trim()
//             .split("\n")
//             .map((para, i) => (
//               <p key={i} className="mb-6">
//                 {para.trim()}
//               </p>
//             ))}
//         </div>
//       ) : (
//         <p className="text-gray-500">Content coming soon...</p>
//       )}
//     </article>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Project {
  slug: string;
  title: string;
  date: string;
  category: string;
  cost: string;
  description: string;
  image: string;
  content?: string;
  location?: string;
  duration?: string;
  highlights?: string[];
}

export default function ProjectContent({ project }: { project: Project }) {
  return (
    <section className="min-h-screen bg-[#f9f6f3] py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
      >
        <Link
          href="/projects"
          className="text-[#B98E75] font-medium hover:underline mb-8 inline-block text-lg"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-4xl md:text-5xl font-cinzel text-gray-800 leading-tight">
          {project.title}
        </h1>
        <p className="text-gray-500 italic mt-3 text-base">
          {project.location ?? "Location undisclosed"} —{" "}
          {project.duration ?? "Duration TBD"}
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-full h-[450px] mt-10 mb-12 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="max-w-3xl mx-auto text-gray-700 font-serif text-lg leading-relaxed tracking-wide"
        >
          <p className="mb-6">{project.description}</p>

          {project.highlights && (
            <ul className="list-disc pl-6 mb-6">
              {project.highlights.map((point, i) => (
                <li key={i} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>
          )}

          <div className="bg-white border-l-4 border-[#B98E75] p-6 rounded-md shadow-sm">
            <p className="text-gray-700">
              <strong>Estimated Cost:</strong> {project.cost}
            </p>
            <p className="text-gray-700">
              <strong>Duration:</strong> {project.duration ?? "Not specified"}
            </p>
            <p className="text-gray-700">
              <strong>Location:</strong> {project.location ?? "Undisclosed"}
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-cinzel text-gray-800 mb-4">
            Interested in a similar project?
          </h3>
          <p className="text-gray-600 mb-8">
            Whether you want to own or build something like this, our team would
            love to collaborate with you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#B98E75] text-white px-10 py-4 rounded-full text-lg font-medium shadow-md hover:bg-[#a27b66] transition-all duration-300 hover:scale-105"
          >
            Let’s Discuss →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}