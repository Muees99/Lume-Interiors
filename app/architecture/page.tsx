// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { architectureProjects } from "./ArchitectureData";

// export default function ArchitecturePage() {
//   return (
//     <section className="min-h-screen bg-[#f9f6f3] py-20 px-6 md:px-16">
//       {/* Back Navigation */}
//       <div className="max-w-6xl mx-auto mb-10">
//         <Link
//           href="/projects"
//           className="text-[#B98E75] hover:underline text-lg font-medium"
//         >
//           ← Back to Projects
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//         className="text-center mb-20"
//       >
//         <h1 className="text-5xl md:text-6xl font-cinzel text-gray-800 mb-6">
//           Architectural Vision & Craftsmanship
//         </h1>
//         <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
//           Our architectural projects embody innovation, precision, and purpose —
//           each structure is a reflection of thoughtful engineering and timeless
//           beauty. Explore the foundations, contractors, and design rationale
//           behind our architectural excellence.
//         </p>
//       </motion.div>

//       {/* Project Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {architectureProjects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1, duration: 0.6 }}
//             className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
//           >
//             <div className="relative w-full h-64">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-6">
//               <h2 className="text-2xl font-cinzel text-gray-800 mb-2">
//                 {project.title}
//               </h2>
//               <p className="text-[#B98E75] font-medium mb-3">
//                 {project.location}
//               </p>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <div className="border-t border-gray-200 pt-4 mb-4">
//                 <p className="text-sm text-gray-800">
//                   <strong>Contractor:</strong> {project.contractor}
//                 </p>
//                 <p className="text-sm text-gray-800 mt-2">
//                   <strong>Foundation:</strong> {project.foundation}
//                 </p>
//                 <p className="text-sm text-gray-600 mt-2 italic">
//                   {project.reason}
//                 </p>
//               </div>
//               <Link
//                 href={`/architecture/${project.slug}`}
//                 className="inline-block bg-[#B98E75] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#a27b66] transition-all duration-300"
//               >
//                 View Project →
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Call to Action */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-center mt-28 bg-[#B98E75] text-white py-16 rounded-3xl shadow-lg max-w-5xl mx-auto px-6"
//       >
//         <h2 className="text-3xl md:text-4xl font-cinzel mb-6">
//           Want to Build or Buy a Similar Project?
//         </h2>
//         <p className="text-lg mb-8 max-w-2xl mx-auto">
//           Whether you&apos;re envisioning a private residence, corporate
//           complex, or modern estate — our architects, engineers, and partners
//           are ready to bring your dream to life with precision and creativity.
//         </p>
//         <Link
//           href="/contact"
//           className="bg-white text-[#B98E75] px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300"
//         >
//           Contact Our Team →
//         </Link>
//       </motion.div>
//     </section>
//   );
// }



// "use client";

// import React, { Suspense } from "react";
// import ArchitectureContent from "./ArchitectureContent";

// export default function ArchitecturePage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex justify-center items-center min-h-[70vh]">
//           <div className="w-10 h-10 border-4 border-[#B98E75] border-t-transparent rounded-full animate-spin" />
//         </div>
//       }
//     >
//       <ArchitectureContent />
//     </Suspense>
//   );
// }



import React, { Suspense } from "react";
import ArchitectureContent from "./ArchitectureContent";

export default function ArchitecturePage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-[80vh] text-gray-500">
          <div className="w-16 h-16 border-4 border-[#B98E75] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg font-medium">
            Loading architectural marvels...
          </p>
        </div>
      }
    >
      <ArchitectureContent />
    </Suspense>
  );
}
