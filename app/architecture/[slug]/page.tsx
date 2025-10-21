// "use client";
// export const dynamic = "force-dynamic";


// import { getArchitectureBySlug } from "../ArchitectureData";
// import { notFound, useParams } from "next/navigation";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// export default function ArchitectureDetailPage() {
//   const params = useParams();
//   const slug = params?.slug as string;
//   const project = getArchitectureBySlug(slug);

//   if (!project) return notFound();

//   return (
//     <section className="min-h-screen bg-[#f9f6f3] py-16 pb-20">
//       {/* min-h-screen bg-[#f9f6f3] py-16 px-6 md:px-20 */}
//       {/* Back to Architecture */}
//       <div className="max-w-6xl mx-auto pt-10 px-6 md:px-16">
//         <Link
//           href="/architecture"
//           className="text-[#B98E75] font-medium hover:underline mb-8 inline-block text-lg"
//         >
//           ← Back to Architecture
//         </Link>
//       </div>
//       {/* Hero Image */}
//       <div className="relative w-full h-[70vh] mt-6">
//         <Image
//           src={project.image}
//           alt={project.title}
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//             className="text-white text-5xl md:text-6xl font-cinzel text-center"
//           >
//             {project.title}
//           </motion.h1>
//         </div>
//       </div>
//       {/* Content */}
//       <div className="max-w-5xl mx-auto mt-16 px-6 md:px-12">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="bg-white p-10 rounded-2xl shadow-xl"
//         >
//           <h2 className="text-3xl font-cinzel text-gray-800 mb-4">
//             Project Overview
//           </h2>
//           <p className="text-gray-600 mb-8 leading-relaxed text-lg">
//             {project.description}
//           </p>

//           <div className="grid md:grid-cols-2 gap-8 mb-8">
//             <div>
//               <p className="text-gray-800">
//                 <strong>Location:</strong> {project.location}
//               </p>
//               <p className="text-gray-800">
//                 <strong>Contractor:</strong> {project.contractor}
//               </p>
//             </div>
//             <div>
//               <p className="text-gray-800">
//                 <strong>Foundation:</strong> {project.foundation}
//               </p>
//               <p className="text-gray-600 italic">{project.reason}</p>
//             </div>
//           </div>

//           <div className="border-t border-gray-200 my-6" />

//           <h3 className="text-2xl font-cinzel text-gray-800 mb-4">
//             Architectural Story
//           </h3>
//           <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
//             {project.story}
//           </p>
//           {/* Architectural Gallery */}
//           {project.gallery && project.gallery.length > 0 && (
//             <div className="mt-12">
//               <h3 className="text-2xl font-cinzel text-gray-800 mb-6 text-center">
//                 Architectural Gallery
//               </h3>
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//               >
//                 {project.gallery.map((img, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ scale: 1.05 }}
//                     className="relative group rounded-xl overflow-hidden shadow-lg"
//                   >
//                     <Image
//                       src={img}
//                       alt={`${project.title} render ${index + 1}`}
//                       width={600}
//                       height={400}
//                       className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
//                       <span className="text-white font-medium text-lg">
//                         View Render {index + 1}
//                       </span>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </div>
//           )}

//           {/* Placeholder for future floor plan or render */}
//           <div className="mt-10 bg-[#f4ede8] rounded-xl p-6 text-center">
//             <p className="text-[#B98E75] text-lg font-semibold">
//               Floor Plan & Structural Render (Coming Soon)
//             </p>
//           </div>
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-center mt-16 bg-[#B98E75] text-white py-12 px-6 rounded-3xl shadow-lg"
//         >
//           <h2 className="text-3xl md:text-4xl font-cinzel mb-4">
//             Interested in Building a Similar Project?
//           </h2>
//           <p className="text-lg mb-6 max-w-2xl mx-auto">
//             Let&apos;s collaborate to bring architectural innovation and
//             functional beauty to your space.
//           </p>
//           <Link
//             href="/contact"
//             className="bg-white text-[#B98E75] px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300"
//           >
//             Contact Our Architects →
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



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
