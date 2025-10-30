

// // app/architecture/page.tsx
// import { Suspense } from 'react';
// import ArchitecturePageContent from './[slug]/ProjectContent';

// export default function ArchitecturePage() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <ArchitecturePageContent project={{
//         slug: '',
//         title: '',
//         image: '',
//         description: '',
//         cost: '',
//         location: '',
//         category: '',
//         details: ''
//       }} />
//     </Suspense>
//   );
// }

// // app/projects/page.tsx
// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { projects } from "./projectData";

// export default function ProjectsPage() {
//   const groupedProjects = {
//     past: projects.filter((p) => p.category === "past"),
//     ongoing: projects.filter((p) => p.category === "ongoing"),
//     recent: projects.filter((p) => p.category === "recent"),
//   };

//   return (
//     <section className="min-h-screen bg-[#f9f6f3] py-20 px-6 md:px-20">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-6xl mx-auto"
//       >
//         <h1 className="text-4xl md:text-5xl font-cinzel text-gray-800 text-center mb-4">
//           Our Projects
//         </h1>
//         <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
//           Explore our portfolio — from past architectural successes to ongoing
//           innovations and newly discovered projects shaping the future of
//           design.
//         </p>

//         {Object.entries(groupedProjects).map(([category, items]) => (
//           <div key={category} className="mb-20">
//             <h2 className="text-3xl font-cinzel text-[#B98E75] mb-8 capitalize">
//               {category} Projects
//             </h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//               {items.map((project) => (
//                 <motion.div
//                   key={project.slug}
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ duration: 0.3 }}
//                   className="bg-white rounded-2xl overflow-hidden shadow-lg"
//                 >
//                   <Link href={`/projects/${project.slug}`}>
//                     <div className="relative w-full h-64">
//                       <Image
//                         src={project.image}
//                         alt={project.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   </Link>

//                   <div className="p-6">
//                     <h3 className="text-2xl font-cinzel mb-3 text-gray-800">
//                       {project.title}
//                     </h3>
//                     <p className="text-gray-600 mb-4 line-clamp-3">
//                       {project.description}
//                     </p>

//                     <div className="flex justify-between text-sm text-gray-500 mb-4">
//                       <span>💰 {project.cost}</span>
//                       <span>📍 {project.location}</span>
//                     </div>

//                     <Link
//                       href={`/projects/${project.slug}`}
//                       className="inline-block bg-[#B98E75] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#a27b66] transition-all"
//                     >
//                       Learn More →
//                     </Link>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}

//         {/* CTA Section */}
//         <div className="bg-[#B98E75] mt-20 py-14 px-8 rounded-3xl text-center text-white shadow-2xl">
//           <h3 className="text-3xl font-cinzel mb-4">
//             Love what you see? Let&apos;s build something together.
//           </h3>
//           <p className="max-w-2xl mx-auto mb-8 text-lg">
//             Whether you&apos;re looking to buy a similar property or build your
//             dream project, our team will bring your vision to life.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-block bg-white text-[#B98E75] font-semibold px-8 py-3 rounded-full hover:bg-[#f9f6f3] transition-all"
//           >
//             Contact Us →
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// }





"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "./[slug]/projectData";

export default function ProjectsPage() {
  const groupedProjects = {
    past: projects.filter((p) => p.category === "past"),
    ongoing: projects.filter((p) => p.category === "ongoing"),
    recent: projects.filter((p) => p.category === "recent"),
  };

  return (
    <section className="min-h-screen bg-[#f9f6f3] py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-cinzel text-gray-800 text-center mb-4">
          Our Projects
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore our portfolio — from past architectural successes to ongoing
          innovations and newly discovered projects shaping the future of
          design.
        </p>

        {Object.entries(groupedProjects).map(([category, items]) => (
          <div key={category} className="mb-20">
            <h2 className="text-3xl font-cinzel text-[#B98E75] mb-8 capitalize">
              {category} Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {items.map((project) => (
                <motion.div
                  key={project.slug}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <Link href={`/projects/${project.slug}`}>
                    <div className="relative w-full h-64">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>

                  <div className="p-6">
                    <h3 className="text-2xl font-cinzel mb-3 text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>💰 {project.cost}</span>
                      <span>📍 {project.location}</span>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-block bg-[#B98E75] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#a27b66] transition-all"
                    >
                      Learn More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="bg-[#B98E75] mt-20 py-14 px-8 rounded-3xl text-center text-white shadow-2xl">
          <h3 className="text-3xl font-cinzel mb-4">
            Love what you see? Let&apos;s build something together.
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Whether you&apos;re looking to buy a similar property or build your
            dream project, our team will bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#B98E75] font-semibold px-8 py-3 rounded-full hover:bg-[#f9f6f3] transition-all"
          >
            Contact Us →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
