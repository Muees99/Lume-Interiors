// // "use client";

// // import { motion } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";

// // const projects = {
// //   past: [
// //     {
// //       title: "Urban Luxury Apartment",
// //       description:
// //         "A timeless blend of sophistication and simplicity — redefining modern city living through balanced textures and light.",
// //       image:
// //         "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
// //       year: "2023",
// //     },
// //     {
// //       title: "Coastal Villa Retreat",
// //       description:
// //         "Natural stone, organic forms, and ocean views create a serene escape inspired by biophilic design principles.",
// //       image:
// //         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
// //       year: "2022",
// //     },
// //   ],
// //   ongoing: [
// //     {
// //       title: "Metropolitan Workspace Redesign",
// //       description:
// //         "Transforming traditional work environments into adaptive, wellness-focused spaces that foster collaboration and creativity.",
// //       image:
// //         "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
// //       progress: "75% Complete",
// //     },
// //     {
// //       title: "Eco-Smart Residential Complex",
// //       description:
// //         "Integrating sustainable materials, renewable energy systems, and modern comfort in an urban setting.",
// //       image:
// //         "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
// //       progress: "60% Complete",
// //     },
// //   ],
// //   new: [
// //     {
// //       title: "Modular Living Pods",
// //       description:
// //         "Exploring futuristic compact housing that combines flexibility, sustainability, and cutting-edge smart design.",
// //       image:
// //         "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
// //       discovery: "Prototype Stage",
// //     },
// //     {
// //       title: "Wellness-Oriented Interiors",
// //       description:
// //         "A research initiative redefining how interior environments can enhance mental clarity and emotional balance.",
// //       image:
// //         "https://images.unsplash.com/photo-1617103902916-4e92a2ad396b?auto=format&fit=crop&w=1200&q=80",
// //       discovery: "In Development",
// //     },
// //   ],
// // };

// // export default function ProjectsPage() {
// //   return (
// //     <main className="bg-[#f9f6f3] min-h-screen text-gray-800">
// //       {/* Hero Section */}
// //       <section className="py-20 text-center px-6 md:px-20">
// //         <motion.h1
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="text-4xl md:text-6xl font-cinzel font-bold text-[#B98E75]"
// //         >
// //           Our Projects
// //         </motion.h1>
// //         <motion.p
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 0.4, duration: 0.8 }}
// //           className="mt-6 max-w-2xl mx-auto text-lg text-gray-600"
// //         >
// //           Explore our journey of innovation and design excellence — from
// //           accomplished milestones to visionary works in progress and the ideas
// //           shaping tomorrow.
// //         </motion.p>
// //       </section>

// //       {/* Past Projects */}
// //       <section className="py-16 px-6 md:px-20">
// //         <h2 className="text-3xl font-cinzel text-[#B98E75] mb-10">
// //           Past Projects
// //         </h2>
// //         <div className="grid md:grid-cols-2 gap-12">
// //           {projects.past.map((project, i) => (
// //             <motion.div
// //               key={i}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.8, delay: i * 0.2 }}
// //               className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
// //             >
// //               <div className="relative h-64 w-full">
// //                 <Image
// //                   src={project.image}
// //                   alt={project.title}
// //                   fill
// //                   className="object-cover"
// //                 />
// //               </div>
// //               <div className="p-6">
// //                 <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
// //                 <p className="text-gray-600 mb-4">{project.description}</p>
// //                 <span className="text-sm font-medium text-[#B98E75]">
// //                   Completed in {project.year}
// //                 </span>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Ongoing Projects */}
// //       <section className="bg-[#f0ebe8] py-16 px-6 md:px-20">
// //         <h2 className="text-3xl font-cinzel text-[#B98E75] mb-10">
// //           Ongoing Projects
// //         </h2>
// //         <div className="grid md:grid-cols-2 gap-12">
// //           {projects.ongoing.map((project, i) => (
// //             <motion.div
// //               key={i}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.8, delay: i * 0.2 }}
// //               className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
// //             >
// //               <div className="relative h-64 w-full">
// //                 <Image
// //                   src={project.image}
// //                   alt={project.title}
// //                   fill
// //                   className="object-cover"
// //                 />
// //               </div>
// //               <div className="p-6">
// //                 <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
// //                 <p className="text-gray-600 mb-4">{project.description}</p>
// //                 <span className="inline-block bg-[#B98E75]/10 text-[#B98E75] text-sm px-3 py-1 rounded-full">
// //                   {project.progress}
// //                 </span>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* New Discoveries */}
// //       <section className="py-16 px-6 md:px-20">
// //         <h2 className="text-3xl font-cinzel text-[#B98E75] mb-10">
// //           New Discoveries
// //         </h2>
// //         <div className="grid md:grid-cols-2 gap-12">
// //           {projects.new.map((project, i) => (
// //             <motion.div
// //               key={i}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.8, delay: i * 0.2 }}
// //               className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
// //             >
// //               <div className="relative h-64 w-full">
// //                 <Image
// //                   src={project.image}
// //                   alt={project.title}
// //                   fill
// //                   className="object-cover"
// //                 />
// //               </div>
// //               <div className="p-6">
// //                 <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
// //                 <p className="text-gray-600 mb-4">{project.description}</p>
// //                 <span className="inline-block bg-[#B98E75]/10 text-[#B98E75] text-sm px-3 py-1 rounded-full">
// //                   {project.discovery}
// //                 </span>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="bg-[#B98E75] py-20 text-center text-white">
// //         <h3 className="text-3xl md:text-4xl font-cinzel font-semibold mb-6">
// //           Let’s Build Something Remarkable Together
// //         </h3>
// //         <p className="max-w-xl mx-auto mb-8 text-lg">
// //           Whether you’re envisioning a new space or refining an existing one,
// //           our design expertise turns imagination into reality.
// //         </p>
// //         <Link
// //           href="/contact"
// //           className="bg-white text-[#B98E75] px-8 py-4 rounded-full font-medium hover:bg-[#f3e7e1] transition-all duration-300 hover:scale-105"
// //         >
// //           Start a Project →
// //         </Link>
// //       </section>
// //     </main>
// //   );
// // }


// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// const projects = {
//   past: [
//     {
//       slug: "urban-luxury-apartment",
//       title: "Urban Luxury Apartment",
//       description:
//         "A timeless blend of sophistication and simplicity — redefining modern city living through balanced textures and light.",
//       image:
//         "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
//       year: "2023",
//     },
//     {
//       slug: "coastal-villa-retreat",
//       title: "Coastal Villa Retreat",
//       description:
//         "Natural stone, organic forms, and ocean views create a serene escape inspired by biophilic design principles.",
//       image:
//         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
//       year: "2022",
//     },
//   ],
//   ongoing: [
//     {
//       slug: "metropolitan-workspace-redesign",
//       title: "Metropolitan Workspace Redesign",
//       description:
//         "Transforming traditional work environments into adaptive, wellness-focused spaces that foster collaboration and creativity.",
//       image:
//         "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
//       progress: "75% Complete",
//     },
//     {
//       slug: "eco-smart-residential-complex",
//       title: "Eco-Smart Residential Complex",
//       description:
//         "Integrating sustainable materials, renewable energy systems, and modern comfort in an urban setting.",
//       image:
//         "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
//       progress: "60% Complete",
//     },
//   ],
//   new: [
//     {
//       slug: "modular-living-pods",
//       title: "Modular Living Pods",
//       description:
//         "Exploring futuristic compact housing that combines flexibility, sustainability, and cutting-edge smart design.",
//       image:
//         "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
//       discovery: "Prototype Stage",
//     },
//     {
//       slug: "wellness-oriented-interiors",
//       title: "Wellness-Oriented Interiors",
//       description:
//         "A research initiative redefining how interior environments can enhance mental clarity and emotional balance.",
//       image:
//         "https://images.unsplash.com/photo-1617103902916-4e92a2ad396b?auto=format&fit=crop&w=1200&q=80",
//       discovery: "In Development",
//     },
//   ],
// };

// export default function ProjectsPage() {
//   return (
//     <main className="bg-[#f9f6f3] min-h-screen text-gray-800">
//       {/* Hero Section */}
//       <section className="py-20 text-center px-6 md:px-20">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-cinzel font-bold text-[#B98E75]"
//         >
//           Our Projects
//         </motion.h1>
//         <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
//           Explore our journey of innovation and design excellence — from
//           accomplished milestones to visionary works in progress and the ideas
//           shaping tomorrow.
//         </p>
//       </section>

//       {/* Section Renderer */}
//       {Object.entries(projects).map(([category, list]) => (
//         <section
//           key={category}
//           className={`py-16 px-6 md:px-20 ${
//             category === "ongoing" ? "bg-[#f0ebe8]" : ""
//           }`}
//         >
//           <h2 className="text-3xl font-cinzel text-[#B98E75] mb-10 capitalize">
//             {category === "new" ? "New Discoveries" : `${category} Projects`}
//           </h2>
//           <div className="grid md:grid-cols-2 gap-12">
//             {list.map((project, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: i * 0.2 }}
//                 className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
//               >
//                 <div className="relative h-64 w-full">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-2xl font-semibold mb-3">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{project.description}</p>
//                   <Link
//                     href={`/projects/${project.slug}`}
//                     className="text-[#B98E75] font-medium hover:underline"
//                   >
//                     Learn more →
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       ))}
//     </main>
//   );
// }


// import Link from "next/link";
// import Image from "next/image";
// import { projects } from "./projectData";

// export default function ProjectsPage() {
//   return (
//     <section className="max-w-6xl mx-auto px-4 py-16">
//       <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-[#B98E75] text-center mb-6">
//         Our Projects
//       </h1>
//       <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 text-center mb-12">
//         Discover our portfolio of completed, ongoing, and upcoming projects —
//         showcasing creativity, growth, and innovation in the interior design
//         industry.
//       </p>

//       <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project) => (
//           <Link
//             key={project.slug}
//             href={`/projects/${project.slug}`}
//             className="group rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300"
//           >
//             <div className="relative h-56 w-full">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//             <div className="p-5">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//                 {project.title}
//               </h2>
//               <p className="text-sm text-gray-500 mb-2">{project.category}</p>
//               <p className="text-gray-600 text-sm">{project.description}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }


import Link from "next/link";
import Image from "next/image";
import { projects } from "./projectData";

export default function ProjectsPage() {
  const grouped = {
    past: projects.filter((p) => p.category === "Past Project"),
    ongoing: projects.filter((p) => p.category === "Ongoing Project"),
    recent: projects.filter((p) => p.category === "Recent Project"),
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-[#B98E75] text-center mb-6">
        Our Projects
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 text-center mb-16">
        Explore our completed, ongoing, and newly launched projects — showcasing
        creativity, growth, and industry innovation.
      </p>

      {Object.entries(grouped).map(([key, group]) => (
        <div key={key} className="mb-20">
          <h2 className="text-3xl font-semibold text-gray-400 mb-10 capitalize">
            {key} Projects
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {group.map((project) => (
              <div
                key={project.slug}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all"
              >
                <div className="relative h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{project.date}</p>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <p className="font-semibold text-gray-700 mb-4">
                    Estimated Cost: <span className="text-green-600">{project.cost}</span>
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-block text-sm px-5 py-2  bg-gradient-to-r from-[#7a7265] to-[#a59a86] text-black font-semibold  rounded-full transition"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* 🟩 CTA Section */}
      <div className="bg-gray-100 py-12 text-center rounded-2xl mt-20">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Interested in Building or Buying a Similar Project?
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Let’s bring your vision to life. Reach out to us today to start your next
          architectural or interior journey.
        </p>
        <Link
          href="/contact"
          className="bg-gradient-to-r from-[#7a7265] to-[#a59a86] text-black font-semibold  px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
