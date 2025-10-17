// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function ProjectContent({ project }: { project: any }) {
//   return (
//     <main className="bg-[#f9f6f3] min-h-screen text-gray-800">
//       {/* Hero Section */}
//       <div className="relative w-full h-[60vh]">
//         <Image
//           src={project.hero}
//           alt={project.title}
//           fill
//           className="object-cover brightness-75"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-5xl md:text-6xl font-cinzel font-bold text-white text-center"
//           >
//             {project.title}
//           </motion.h1>
//         </div>
//       </div>

//       {/* Content */}
//       <section className="max-w-4xl mx-auto py-20 px-6 md:px-10">
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="text-lg text-gray-700 mb-8 leading-relaxed"
//         >
//           {project.overview}
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//         >
//           <h2 className="text-2xl font-semibold text-[#B98E75] mb-4">
//             Project Goals
//           </h2>
//           <ul className="list-disc list-inside text-gray-700 mb-8">
//             {project.goals.map((goal: string, i: number) => (
//               <li key={i}>{goal}</li>
//             ))}
//           </ul>

//           <h2 className="text-2xl font-semibold text-[#B98E75] mb-4">
//             Outcome
//           </h2>
//           <p className="text-gray-700 leading-relaxed">{project.outcome}</p>
//         </motion.div>
//       </section>
//     </main>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function ProjectContent({ project }: { project: any }) {
//   return (
//     <main className="bg-[#f9f6f3] min-h-screen text-gray-800">
//       {/* Hero Section */}
//       <div className="relative w-full h-[60vh] overflow-hidden">
//         <motion.div
//           initial={{ scale: 1.1, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={project.hero}
//             alt={project.title}
//             fill
//             className="object-cover brightness-75"
//           />
//         </motion.div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-5xl md:text-6xl font-cinzel font-bold text-white text-center drop-shadow-lg"
//           >
//             {project.title}
//           </motion.h1>
//         </div>
//       </div>

//       {/* Overview */}
//       <section className="max-w-4xl mx-auto py-20 px-6 md:px-10">
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-lg text-gray-700 mb-12 leading-relaxed"
//         >
//           {project.overview}
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-2xl font-semibold text-[#B98E75] mb-4">
//             Project Goals
//           </h2>
//           <ul className="list-disc list-inside text-gray-700 mb-10">
//             {project.goals.map((goal: string, i: number) => (
//               <li key={i} className="mb-2">
//                 {goal}
//               </li>
//             ))}
//           </ul>

//           <h2 className="text-2xl font-semibold text-[#B98E75] mb-4">
//             Outcome
//           </h2>
//           <p className="text-gray-700 leading-relaxed mb-12">
//             {project.outcome}
//           </p>
//         </motion.div>
//       </section>

//       {/* Before / After Section */}
//       {project.before && project.after && (
//         <section className="bg-[#f0ebe8] py-20">
//           <div className="max-w-6xl mx-auto px-6 md:px-10">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="text-3xl font-cinzel text-[#B98E75] mb-10 text-center"
//             >
//               Before & After Transformation
//             </motion.h2>

//             <div className="grid md:grid-cols-2 gap-10">
//               <motion.div
//                 initial={{ opacity: 0, x: -40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="relative h-80 rounded-2xl overflow-hidden shadow-lg"
//               >
//                 <Image
//                   src={project.before}
//                   alt="Before"
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute bottom-0 bg-black/50 text-white text-center py-2 w-full font-medium">
//                   Before
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="relative h-80 rounded-2xl overflow-hidden shadow-lg"
//               >
//                 <Image
//                   src={project.after}
//                   alt="After"
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute bottom-0 bg-black/50 text-white text-center py-2 w-full font-medium">
//                   After
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Gallery Section */}
//       {project.gallery && (
//         <section className="py-24 px-6 md:px-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="text-3xl font-cinzel text-[#B98E75] mb-10 text-center"
//           >
//             Project Gallery
//           </motion.h2>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {project.gallery.map((img: string, i: number) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 className="relative h-72 rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform"
//               >
//                 <Image
//                   src={img}
//                   alt={`Gallery ${i + 1}`}
//                   fill
//                   className="object-cover"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       )}
//     </main>
//   );
// }


"use client";

import React from "react";

interface ProjectProps {
  project: {
    title: string;
    date: string;
    content?: string;
    image: string;
  };
}

export default function ProjectContent({ project }: ProjectProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-500 mb-8">{project.date}</p>

      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl mb-8 w-full h-96 object-cover"
      />

      {project.content ? (
        <div className="text-lg leading-relaxed font-serif text-gray-700">
          {project.content
            .trim()
            .split("\n")
            .map((para, i) => (
              <p key={i} className="mb-6">
                {para.trim()}
              </p>
            ))}
        </div>
      ) : (
        <p className="text-gray-500">Content coming soon...</p>
      )}
    </article>
  );
}
