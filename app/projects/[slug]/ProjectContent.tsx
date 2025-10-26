// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// interface Project {
//   slug: string;
//   title: string;
//   date: string;
//   category: string;
//   cost: string;
//   description: string;
//   image: string;
//   content?: string;
//   location?: string;
//   duration?: string;
//   highlights?: string[];
// }

// export default function ProjectContent({ project }: { project: Project }) {
//   return (
//     <section className="min-h-screen bg-[#f9f6f3] py-16 px-6 md:px-20">
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//         className="max-w-5xl mx-auto"
//       >
//         <Link
//           href="/projects"
//           className="text-[#B98E75] font-medium hover:underline mb-8 inline-block text-lg"
//         >
//           ← Back to Projects
//         </Link>

//         <h1 className="text-4xl md:text-5xl font-cinzel text-gray-800 leading-tight">
//           {project.title}
//         </h1>
//         <p className="text-gray-500 italic mt-3 text-base">
//           {project.location ?? "Location undisclosed"} —{" "}
//           {project.duration ?? "Duration TBD"}
//         </p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="relative w-full h-[450px] mt-10 mb-12 rounded-2xl overflow-hidden shadow-xl"
//         >
//           <Image
//             src={project.image}
//             alt={project.title}
//             fill
//             className="object-cover"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.7 }}
//           className="max-w-3xl mx-auto text-gray-700 font-serif text-lg leading-relaxed tracking-wide"
//         >
//           <p className="mb-6">{project.description}</p>

//           {project.highlights && (
//             <ul className="list-disc pl-6 mb-6">
//               {project.highlights.map((point, i) => (
//                 <li key={i} className="mb-2">
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           )}

//           <div className="bg-white border-l-4 border-[#B98E75] p-6 rounded-md shadow-sm">
//             <p className="text-gray-700">
//               <strong>Estimated Cost:</strong> {project.cost}
//             </p>
//             <p className="text-gray-700">
//               <strong>Duration:</strong> {project.duration ?? "Not specified"}
//             </p>
//             <p className="text-gray-700">
//               <strong>Location:</strong> {project.location ?? "Undisclosed"}
//             </p>
//           </div>
//         </motion.div>

//         {/* CTA */}
//         <div className="mt-16 text-center">
//           <h3 className="text-2xl font-cinzel text-gray-800 mb-4">
//             Interested in a similar project?
//           </h3>
//           <p className="text-gray-600 mb-8">
//             Whether you want to own or build something like this, our team would
//             love to collaborate with you.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-block bg-[#B98E75] text-white px-10 py-4 rounded-full text-lg font-medium shadow-md hover:bg-[#a27b66] transition-all duration-300 hover:scale-105"
//           >
//             Let’s Discuss →
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

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
  // Find next/previous projects
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[currentIndex + 1] || null;
  const prevProject = projects[currentIndex - 1] || null;

  return (
    <section className="min-h-screen bg-[#f9f6f3] pb-20">
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
    </section>
  );
}
