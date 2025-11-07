// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import React from "react";

// const ProjectPage = () => {
//   const images = [
//     {
//       src: "https://images.unsplash.com/photo-1720876884400-fe4b13f8af72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1073",
//       alt: "Designer Dark House",
//       title: "Exterior Design",
//       subtitle: "Woodland House",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1723639904352-5ade4702d86d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
//       alt: "Woodland House",
//       title: "Interior Design",
//       subtitle: "Woodland House",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
//       alt: "Home Decor",
//       title: "Home Decor",
//       subtitle: "Open House View",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1593297779123-cee941f400c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
//       alt: "Urban Design",
//       title: "Urban Design",
//       subtitle: "Open House View",
//     },
//   ];

//   return (
//     <div className="container mx-auto p-4 text-center">
//       <h2 className="text-3xl sm:text-4xl font-semibold text-gray-500 mb-8">
//         Featured Interior Design Projects
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {images.map((image, index) => (
//           <motion.div
//             key={index}
//             className="relative group overflow-hidden rounded-2xl shadow-md bg-white aspect-square"
//             whileHover={{ scale: 1.03 }}
//             transition={{ duration: 0.3 }}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               fill
//               style={{ objectFit: "cover" }}
//               className="transition-transform duration-500 hover:scale-105"
//               sizes="(max-width: 768px) 80vw, 30vw"
//             />

//             <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/50 via-transparent to-black/30">
//               <div
//                 className={`text-white text-sm font-semibold ${
//                   index % 2 === 0 ? "self-end" : "self-start"
//                 }`}
//               >
//                 {image.title}
//               </div>
//               <div
//                 className={`text-white text-xs font-medium ${
//                   index % 2 === 0 ? "self-start" : "self-end"
//                 }`}
//               >
//                 {image.subtitle}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectPage;


// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import React from "react";

// const ProjectPage = () => {
//   const images = [
//     {
//       src: "https://images.unsplash.com/photo-1720876884400-fe4b13f8af72?auto=format&fit=crop&q=80&w=1073",
//       alt: "Designer Dark House",
//       title: "Exterior Design",
//       subtitle: "Woodland House",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1723639904352-5ade4702d86d?auto=format&fit=crop&q=80&w=1170",
//       alt: "Woodland House",
//       title: "Interior Design",
//       subtitle: "Woodland House",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
//       alt: "Home Decor",
//       title: "Home Decor",
//       subtitle: "Open House View",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1593297779123-cee941f400c3?auto=format&fit=crop&q=80&w=1171",
//       alt: "Urban Design",
//       title: "Urban Design",
//       subtitle: "Open House View",
//     },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-16">
//       <div className="text-center mb-14">
//         <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#1a1a1a]">
//           Featured Interior Projects
//         </h2>
//         <p className="text-gray-500 mt-3 text-sm uppercase tracking-[0.15em]">
//           A curated collection of elegance and space transformation
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//         {images.map((image, index) => (
//           <motion.div
//             key={index}
//             className="relative group overflow-hidden rounded-3xl bg-neutral-100 aspect-square"
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               fill
//               className="object-cover transition-transform duration-700 group-hover:scale-105"
//               sizes="(max-width: 768px) 80vw, 35vw"
//             />

//             {/* Luxurious overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

//             {/* Text captions */}
//             <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
//               <motion.h3
//                 initial={{ y: 30, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-white text-lg md:text-xl font-light tracking-wide"
//               >
//                 {image.title}
//               </motion.h3>
//               <p className="text-gray-200 text-sm font-light italic mt-1">
//                 {image.subtitle}
//               </p>
//             </div>

//             {/* Gold accent line on hover */}
//             <motion.div className="absolute bottom-0 left-6 h-[2px] bg-[#C7A27C] w-0 group-hover:w-[60%] transition-all duration-700" />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectPage;



// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// const projects = [
//   {
//     title: "Exterior Design",
//     subtitle: "Woodland House",
//     mainImage:
//       "https://images.unsplash.com/photo-1720876884400-fe4b13f8af72?auto=format&fit=crop&q=80&w=1073",
//     gallery: [
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1618213837799-f8124c1c3c53?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600585153796-5c358a8a1a96?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
//     ],
//   },
//   {
//     title: "Interior Design",
//     subtitle: "Urban Lounge",
//     mainImage:
//       "https://images.unsplash.com/photo-1723639904352-5ade4702d86d?auto=format&fit=crop&q=80&w=1170",
//     gallery: [
//       "https://images.unsplash.com/photo-1598300042247-1a46f1e09a9b?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1618213837799-f8124c1c3c53?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600585153796-5c358a8a1a96?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
//     ],
//   },
//   {
//     title: "Home Decor",
//     subtitle: "Open House View",
//     mainImage:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1600585153796-5c358a8a1a96?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1618213837799-f8124c1c3c53?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
//     ],
//   },
// ];

// export default function ProjectPage() {
//   const speakRef = useRef(false);
//   const ambientRef = useRef<HTMLAudioElement | null>(null);

//   // 🗣️ Narration function
//   const speak = (text: string) => {
//     if (!("speechSynthesis" in window) || !speakRef.current) return;
//     speechSynthesis.cancel();
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.rate = 0.95;
//     utterance.pitch = 1.05;
//     utterance.lang = "en-GB";
//     speechSynthesis.speak(utterance);
//   };

//   // 🕊️ Ambient tone when narration starts
//   const playAmbientTone = () => {
//     if (!ambientRef.current) {
//       const audio = new Audio(
//         "https://cdn.pixabay.com/audio/2023/02/28/audio_57d3797fa9.mp3"
//       ); // a soft chime tone (royalty-free)
//       audio.volume = 0.1;
//       ambientRef.current = audio;
//     }
//     ambientRef.current.currentTime = 0;
//     ambientRef.current.play().catch(() => {});
//   };

//   // Listen for voice toggle
//   useEffect(() => {
//     const handler = (e: CustomEvent) => {
//       speakRef.current = e.detail.enabled;
//       if (e.detail.enabled) playAmbientTone();
//     };
//     window.addEventListener("toggleVoice", handler as EventListener);
//     return () =>
//       window.removeEventListener("toggleVoice", handler as EventListener);
//   }, []);

//   return (
//     <section className="bg-[#f9f6f3] min-h-screen py-20 px-6 md:px-16 text-center">
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl md:text-5xl font-cinzel text-gray-800 mb-16"
//       >
//         A Guided Tour through Our Interior Design Projects
//       </motion.h2>

//       <div className="space-y-32 max-w-6xl mx-auto">
//         {projects.map((project, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: i * 0.2 }}
//             viewport={{ once: true }}
//             className="flex flex-col items-center"
//           >
//             {/* Hero Image */}
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="relative w-full rounded-3xl overflow-hidden shadow-xl"
//             >
//               <Image
//                 src={project.mainImage}
//                 alt={project.title}
//                 width={1200}
//                 height={800}
//                 className="object-cover w-full h-[500px] rounded-3xl"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-6 text-left">
//                 <h3 className="text-3xl font-cinzel text-[#E0C097] mb-1">
//                   {project.title}
//                 </h3>
//                 <p className="text-white text-lg">{project.subtitle}</p>
//               </div>
//             </motion.div>

//             {/* Narrate when in view */}
//             <InViewNarrator
//               text={`${project.title} — ${project.subtitle}. Featuring exquisite detailing and curated materials.`}
//               onSpeak={speak}
//             />

//             {/* Gallery Below */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
//               {project.gallery.map((img, idx) => (
//                 <motion.div
//                   key={idx}
//                   whileHover={{ scale: 1.03 }}
//                   transition={{ duration: 0.3 }}
//                   className="relative rounded-xl overflow-hidden shadow-md"
//                 >
//                   <Image
//                     src={img}
//                     alt={`${project.title} view ${idx + 1}`}
//                     width={400}
//                     height={300}
//                     className="object-cover w-full h-[220px]"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function InViewNarrator({
//   text,
//   onSpeak,
// }: {
//   text: string;
//   onSpeak: (t: string) => void;
// }) {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) onSpeak(text);
//       },
//       { threshold: 0.6 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [text, onSpeak]);

//   return <div ref={ref} className="h-1"></div>;
// }




// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { motion, animate, useMotionValue, useTransform } from "framer-motion";

// const projects = [
//   {
//     title: "Exterior Design",
//     subtitle: "Woodland House",
//     mainImage:
//       "https://images.unsplash.com/photo-1720876884400-fe4b13f8af72?auto=format&fit=crop&q=80&w=1073",
//     gallery: [
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1618213837799-f8124c1c3c53?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600585153796-5c358a8a1a96?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
//     ],
//   },
//   {
//     title: "Interior Design",
//     subtitle: "Urban Lounge",
//     mainImage:
//       "https://images.unsplash.com/photo-1723639904352-5ade4702d86d?auto=format&fit=crop&q=80&w=1170",
//     gallery: [
//       "https://images.unsplash.com/photo-1598300042247-1a46f1e09a9b?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1618213837799-f8124c1c3c53?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600585153796-5c358a8a1a96?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
//     ],
//   },
//   {
//     title: "Home Decor",
//     subtitle: "Open House View",
//     mainImage:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1600585153796-5c358a8a1a96?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1618213837799-f8124c1c3c53?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
//     ],
//   },
// ];

// export default function ProjectPage() {
//   const speakRef = useRef(false);
//   const ambientRef = useRef<HTMLAudioElement | null>(null);
//   const [currentProject, setCurrentProject] = useState<number | null>(null);

//   // 🗣️ Narration function
//   const speak = (text: string) => {
//     if (!("speechSynthesis" in window) || !speakRef.current) return;
//     speechSynthesis.cancel();
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.rate = 0.95;
//     utterance.pitch = 1.05;
//     utterance.lang = "en-GB";
//     speechSynthesis.speak(utterance);
//   };

//   // 🎵 Ambient tone
//   const playAmbientTone = () => {
//     if (!ambientRef.current) {
//       const audio = new Audio(
//         "https://cdn.pixabay.com/audio/2023/02/28/audio_57d3797fa9.mp3"
//       );
//       audio.volume = 0.15;
//       ambientRef.current = audio;
//     }
//     ambientRef.current.currentTime = 0;
//     ambientRef.current.play().catch(() => {});
//   };

//   // 🧭 Guided narration sequence
//   const startGuidedTour = async () => {
//     speak(
//       "Welcome to Lumé Interiors. Let’s explore our featured design projects."
//     );
//     await new Promise((r) => setTimeout(r, 4500));

//     for (let i = 0; i < projects.length; i++) {
//       if (!speakRef.current) break;
//       playAmbientTone();
//       setCurrentProject(i);
//       const p = projects[i];
//       speak(
//         `${p.title}. ${p.subtitle}. Featuring fine textures and elegant craftsmanship.`
//       );
//       await new Promise((r) => setTimeout(r, 8000));
//     }

//     if (speakRef.current) {
//       speak(
//         "That concludes your guided tour of Lumé Interiors. Thank you for visiting."
//       );
//       setCurrentProject(null);
//     }
//   };

//   // 🧩 Listen for Navbar voice toggle
//   useEffect(() => {
//     const handler = (e: CustomEvent) => {
//       speakRef.current = e.detail.enabled;
//       if (e.detail.enabled) {
//         playAmbientTone();
//         startGuidedTour();
//       } else {
//         setCurrentProject(null);
//         speechSynthesis.cancel();
//       }
//     };
//     window.addEventListener("toggleVoice", handler as EventListener);
//     return () =>
//       window.removeEventListener("toggleVoice", handler as EventListener);
//   }, []);

//   return (
//     <section className="bg-[#f9f6f3] min-h-screen py-20 px-6 md:px-16 text-center">
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl md:text-5xl font-cinzel text-gray-800 mb-16"
//       >
//         A Guided Tour through Our Interior Design Projects
//       </motion.h2>

//       <div className="space-y-32 max-w-6xl mx-auto">
//         {projects.map((project, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: i * 0.2 }}
//             viewport={{ once: true }}
//             className="flex flex-col items-center"
//           >
//             {/* Main Image */}
//             <motion.div
//               animate={{
//                 scale: currentProject === i ? 1.05 : 1,
//                 opacity: currentProject === i ? 1 : 0.7,
//               }}
//               transition={{ duration: 0.8 }}
//               className="relative w-full rounded-3xl overflow-hidden shadow-xl"
//             >
//               <Image
//                 src={project.mainImage}
//                 alt={project.title}
//                 width={1200}
//                 height={800}
//                 className="object-cover w-full h-[500px] rounded-3xl"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-6 text-left">
//                 <h3 className="text-3xl font-cinzel text-[#E0C097] mb-1">
//                   {project.title}
//                 </h3>
//                 <p className="text-white text-lg">{project.subtitle}</p>
//               </div>
//             </motion.div>

//             {/* Gallery */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
//               {project.gallery.map((img, idx) => (
//                 <motion.div
//                   key={idx}
//                   animate={{
//                     scale: currentProject === i ? [1, 1.03, 1] : 1,
//                     opacity: currentProject === i ? 1 : 0.85,
//                   }}
//                   transition={{ duration: 0.8, delay: idx * 0.15 }}
//                   className="relative rounded-xl overflow-hidden shadow-md"
//                 >
//                   <Image
//                     src={img}
//                     alt={`${project.title} view ${idx + 1}`}
//                     width={400}
//                     height={300}
//                     className="object-cover w-full h-[220px]"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// // --- Genuine project imagery & narrations ---
// const images = [
//   {
//     src: "https://design-milk.com/images/2017/09/Villa-Rypen-CF-Moller-Architects-2-810x540.jpg",
//     alt: "Woodland House Exterior",
//     title: "Exterior Design",
//     subtitle: "Woodland House",
//     narration:
//       "Welcome to the Woodland House exterior — here the architecture embraces nature with expansive glazing and warm timber finishes. The structure frames the forest view, while the crisp geometry gives space and light. You’ll notice the tonal shifts of dusk and dawn through those full-height windows, offering a living canvas of nature beyond luxury.",
//   },
//   {
//     src: "https://s3-blog.homelane.com/design-ideas/wp-content/uploads/2025/07/03044926/modern-wallpaper-design-living-room-classy-golden-accents.png",
//     alt: "Urban Lounge",
//     title: "Interior Design",
//     subtitle: "Urban Lounge",
//     narration:
//       "Step into the Urban Lounge — a sculptural space where texture meets elegance. The ceiling rises, walls breathe, and golden highlights bring subtle glamour. Here, minimalism is not absence—it is precision. Each material chosen reflects light and mood, transforming the everyday into refined comfort.",
//   },
//   {
//     src: "https://hips.hearstapps.com/hmg-prod/images/edc080123reddkaihoi-009-645aba4daf6e1.jpg",
//     alt: "Open House View",
//     title: "Home Decor",
//     subtitle: "Open House View",
//     narration:
//       "This is the Open House View — where the home becomes gallery, décor becomes expression. Neutral tones create a serene backdrop, while custom-designed pieces and curated artworks punctuate the space. The result: a residence that isn’t just lived in—but observed, felt and experienced.",
//   },
//   {
//     src: "https://hips.hearstapps.com/hmg-prod/images/edc100123egan-002-6500742f5feb7.jpg?crop=1xw%3A0.8209281961471103xh%3Bcenter%2Ctop&resize=1200%3A%2A",
//     alt: "Urban Design City Loft",
//     title: "Urban Design",
//     subtitle: "City Loft Serenity",
//     narration:
//       "Discover the City Loft Serenity — a refined urban retreat balancing raw industrial architecture with soft interior warmth. Concrete meets silk, glass meets linen, creating rhythm and restraint. It’s a home that speaks the language of the city but whispers comfort and calm.",
//   },
// ];

// export default function ProjectPage() {
//   const speakRef = useRef(false);

//   // Narration setup
//   const speak = (text: string) => {
//     if (!("speechSynthesis" in window) || !speakRef.current) return;
//     speechSynthesis.cancel(); // Stop any previous narration before speaking new one
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.rate = 1;
//     utterance.pitch = 1.1;
//     utterance.lang = "en-US";
//     speechSynthesis.speak(utterance);
//   };

//   // Listen for Talk Button toggle (from Navbar)
//   useEffect(() => {
//     const handler = (e: CustomEvent) => {
//       speakRef.current = e.detail.enabled;
//       if (!e.detail.enabled) speechSynthesis.cancel();
//     };
//     window.addEventListener("toggleVoice", handler as EventListener);
//     return () =>
//       window.removeEventListener("toggleVoice", handler as EventListener);
//   }, []);

//   return (
//     <section className="bg-[#f9f6f3] min-h-screen py-20 px-6 md:px-16 text-center relative overflow-hidden">
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl md:text-5xl font-cinzel text-gray-800 mb-12"
//       >
//         Featured Interior Design Projects
//       </motion.h2>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
//         {images.map((image, i) => (
//           <InteractiveCard
//             key={i}
//             {...image}
//             index={i}
//             onInView={(text) => speak(text)}
//           />
//         ))}
//       </div>

//       {/* Stop Narration Button */}
//       <motion.button
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1 }}
//         onClick={() => {
//           speechSynthesis.cancel();
//           window.dispatchEvent(
//             new CustomEvent("toggleVoice", { detail: { enabled: false } })
//           );
//         }}
//         className="fixed bottom-6 right-6 bg-[#B98E75] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#a27b66] transition-all duration-300 z-50"
//       >
//         Stop Narration
//       </motion.button>
//     </section>
//   );
// }

// function InteractiveCard({
//   src,
//   alt,
//   title,
//   subtitle,
//   narration,
//   index,
//   onInView,
// }: {
//   src: string;
//   alt: string;
//   title: string;
//   subtitle: string;
//   narration: string;
//   index: number;
//   onInView: (text: string) => void;
// }) {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useTransform(y, [-50, 50], [10, -10]);
//   const rotateY = useTransform(x, [-50, 50], [-10, 10]);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && onInView(narration),
//       { threshold: 0.5 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [onInView, narration]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ rotateX, rotateY }}
//       onMouseMove={(e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const offsetX = e.clientX - rect.left - rect.width / 2;
//         const offsetY = e.clientY - rect.top - rect.height / 2;
//         x.set(offsetX);
//         y.set(offsetY);
//       }}
//       onMouseLeave={() => {
//         animate(x, 0);
//         animate(y, 0);
//       }}
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className="relative bg-white rounded-3xl shadow-lg overflow-hidden aspect-[4/5] transform-gpu hover:shadow-2xl transition-transform duration-500 group"
//     >
//       <Image
//         src={src}
//         alt={alt}
//         fill
//         className="object-cover brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
//         sizes="(max-width: 768px) 80vw, 25vw"
//       />

//       {/* Overlay text */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 flex flex-col justify-between p-6 text-left">
//         <div className="text-[#f5e6dc] text-sm tracking-widest font-cinzel uppercase">
//           {title}
//         </div>
//         <div className="text-white text-lg font-semibold font-cinzel">
//           {subtitle}
//         </div>
//       </div>
//     </motion.div>
//   );
// }



// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// type Project = {
//   title: string;
//   subtitle: string;
//   mainImage: string;
//   gallery: string[];
//   narration: string;
// };

// const projects: Project[] = [
//   {
//     title: "Exterior Design",
//     subtitle: "Woodland House",
//     mainImage:
//       "https://design-milk.com/images/2017/09/Villa-Rypen-CF-Moller-Architects-2-810x540.jpg",
//     gallery: [
//       "https://images.adsttc.com/media/images/5a90/433a/f197/ccee/4700/011a/newsletter/12-ALTUS-woodland-house-PC_418.jpg?1519403819=",
//       "https://cdn.mos.cms.futurecdn.net/fiL52zritYxfeyJtLtQirB.jpg",
//       "https://s3-blog.homelane.com/design-ideas/wp-content/uploads/2025/07/03052549/modern-brick-wall-design-living-room-wooden-textures.png",
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
//     ],
//     narration:
//       "Exterior Design — Woodland House. The architecture embraces the surrounding forest through generous glazing and warm timber cladding. Note how the large panes frame seasonal light and create a living painting for the interior.",
//   },
//   {
//     title: "Interior Design",
//     subtitle: "Urban Lounge",
//     mainImage:
//       "https://s3-blog.homelane.com/design-ideas/wp-content/uploads/2025/07/03044926/modern-wallpaper-design-living-room-classy-golden-accents.png",
//     gallery: [
//       "https://cdn.home-designing.com/wp-content/uploads/2025/04/simple-wall-mounted-tv-600x450.jpg",
//       "https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2022/07/Cover-Inspiration-1-5-1400x933.png",
//       // "https://cdn.home-designing.com/wp-content/uploads/2019/01/Bespoke-wall-shelves.jpg",
//       "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
//       "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",

//     ],
//     narration:
//       "Interior Design — Urban Lounge. High ceilings and layered textures define this lounge. Subtle gold accents and curated furnishings provide warmth while maintaining a clean, architectural silhouette.",
//   },
//   {
//     title: "Home Decor",
//     subtitle: "Open House View",
//     mainImage:
//       "https://hips.hearstapps.com/hmg-prod/images/edc080123reddkaihoi-009-645aba4daf6e1.jpg",
//     gallery: [
//     "https://images.unsplash.com/photo-1758448511255-ac2a24a135d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
//       "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2024-01-25-at-12-12-51-pm-65b29696e9721.png?crop=0.752xw%3A1.00xh%3B0.103xw%2C0&resize=1120%3A%2A",
//       "https://media.houseandgarden.co.uk/photos/67dc464c0f2847aedf2da20b/16%3A9/w_1280%2Cc_limit/Shot05117_RT-production_digital.jpg",
//       "https://images.unsplash.com/photo-1761971975886-57975f99ce99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1179",
//     ],
//     narration:
//       "Home Decor — Open House View. Curated artworks and bespoke pieces punctuate a serene neutral canvas. Observe the interplay of material and scale that produces a lived-in gallery ambience.",
//   },
//   {
//     title: "Urban Design",
//     subtitle: "City Loft Serenity",
//     mainImage:
//       "https://hips.hearstapps.com/hmg-prod/images/edc100123egan-002-6500742f5feb7.jpg?crop=1xw%3A0.8209281961471103xh%3Bcenter%2Ctop&resize=1200%3A%2A",
//     gallery: [
//       "https://images.unsplash.com/photo-1635483496741-75eb49e545f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
//      "https://images.unsplash.com/photo-1708517196691-b1d75c483e4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
//       "https://images.unsplash.com/photo-1587209255846-ab7eae1c3e97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
//       "https://images.unsplash.com/photo-1649429710616-dad56ce9a076?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
//     ],
//     narration:
//       "Urban Design — City Loft Serenity. Industrial bones softened by natural fabrics and controlled lighting create an intimate, refined retreat in the heart of the city.",
//   },
// ];

// export default function ProjectPage() {
//   const speakRef = useRef(false);
//   const ambientRef = useRef<HTMLAudioElement | null>(null);
//   const [currentProjectIndex, setCurrentProjectIndex] = useState<number | null>(
//     null
//   );
//   const [lightbox, setLightbox] = useState<{
//     src: string;
//     alt?: string;
//   } | null>(null);

//   // speak helper (cancel previous utterance first)
//   const speak = (text: string) => {
//     if (!("speechSynthesis" in window) || !speakRef.current) return;
//     try {
//       speechSynthesis.cancel();
//     } catch {}
//     const u = new SpeechSynthesisUtterance(text);
//     u.rate = 0.95;
//     u.pitch = 1.05;
//     u.lang = "en-GB";
//     speechSynthesis.speak(u);
//   };

//   // ambient chime
//   const playAmbient = () => {
//     if (!ambientRef.current) {
//       ambientRef.current = new Audio(
//         "https://cdn.pixabay.com/audio/2023/02/28/audio_57d3797fa9.mp3"
//       );
//       ambientRef.current.volume = 0.12;
//     }
//     ambientRef.current.currentTime = 0;
//     ambientRef.current.play().catch(() => {});
//   };

//   // handler for navbar toggleVoice event
//   useEffect(() => {
//     const onToggle = (e: CustomEvent) => {
//       speakRef.current = e.detail.enabled;
//       if (!speakRef.current) {
//         // stop everything
//         setCurrentProjectIndex(null);
//         try {
//           speechSynthesis.cancel();
//         } catch {}
//         if (ambientRef.current) ambientRef.current.pause();
//       } else {
//         // start ambience and short intro
//         playAmbient();
//         speak("Welcome to Lumé Interiors. Starting the guided tour now.");
//         // start an automated tour sequence
//         startAutoTour();
//       }
//     };
//     window.addEventListener("toggleVoice", onToggle as EventListener);
//     return () =>
//       window.removeEventListener("toggleVoice", onToggle as EventListener);
//   }, []);

//   // automated guided tour
//   const startAutoTour = async () => {
//     // small intro pause
//     await new Promise((r) => setTimeout(r, 1400));
//     for (let i = 0; i < projects.length; i++) {
//       if (!speakRef.current) break;
//       setCurrentProjectIndex(i);
//       playAmbient();
//       speak(projects[i].narration);
//       // highlight gallery images in sequence a little while narration plays
//       await highlightGallerySequence(i);
//       // pause a bit after narration
//       await new Promise((r) => setTimeout(r, 900));
//     }
//     if (speakRef.current) {
//       speak(
//         "That concludes the guided tour. Thank you for visiting Lumé Interiors."
//       );
//       setCurrentProjectIndex(null);
//     }
//   };

//   // highlights the 4 gallery images per project sequentially (visual cue only)
//   const highlightGallerySequence = async (projectIndex: number) => {
//     const steps = 4;
//     for (let s = 0; s < steps; s++) {
//       if (!speakRef.current) break;
//       // visual highlight is handled by CSS classes bound to currentProjectIndex,
//       // we only wait here to let the user see the highlight.
//       await new Promise((r) => setTimeout(r, 1600));
//     }
//   };

//   // Stop narration button handler
//   const stopNarration = () => {
//     try {
//       speechSynthesis.cancel();
//     } catch {}
//     speakRef.current = false;
//     setCurrentProjectIndex(null);
//     if (ambientRef.current) ambientRef.current.pause();
//     // notify other components (so Navbar toggles off)
//     window.dispatchEvent(
//       new CustomEvent("toggleVoice", { detail: { enabled: false } })
//     );
//   };

//   // function handlePrev() {
//   //   throw new Error("Function not implemented.");
//   // }

//   // function handleNext() {
//   //   throw new Error("Function not implemented.");
//   // }

//   // 🧭 Arrow navigation
//   const handlePrev = () => {
//     if (!lightbox) return;
//     const { projectIndex, imgIndex } = lightbox;
//     const gallery = projects[projectIndex].gallery;
//     const prevIndex = (imgIndex - 1 + gallery.length) % gallery.length;
//     setLightbox({
//       src: gallery[prevIndex],
//       alt: `${projects[projectIndex].title} view ${prevIndex + 1}`,
//       projectIndex,
//       imgIndex: prevIndex,
//     });
//   };

//   const handleNext = () => {
//     if (!lightbox) return;
//     const { projectIndex, imgIndex } = lightbox;
//     const gallery = projects[projectIndex].gallery;
//     const nextIndex = (imgIndex + 1) % gallery.length;
//     setLightbox({
//       src: gallery[nextIndex],
//       alt: `${projects[projectIndex].title} view ${nextIndex + 1}`,
//       projectIndex,
//       imgIndex: nextIndex,
//     });
//   };

//   return (
//     <section className="bg-[#f9f6f3] min-h-screen py-20 px-6 md:px-16 text-center relative overflow-visible">
//       <h2 className="text-4xl md:text-5xl font-cinzel text-gray-800 mb-12">
//         {/* A Guided Tour through Our Interior Design Projects */}
//         Featured Interior Design Projects
//       </h2>

//       <div className="space-y-20 max-w-6xl mx-auto">
//         {projects.map((p, i) => (
//           <article key={i} className="flex flex-col items-center">
//             {/* hero */}
//             <motion.div
//               animate={{
//                 scale: currentProjectIndex === i ? 1.025 : 1,
//                 opacity: currentProjectIndex === i ? 1 : 0.95,
//               }}
//               transition={{ duration: 0.6 }}
//               className="relative w-full rounded-3xl overflow-hidden shadow-xl"
//             >
//               <Image
//                 src={p.mainImage}
//                 alt={`${p.title} - ${p.subtitle}`}
//                 width={1400}
//                 height={700}
//                 className="object-cover w-full h-[420px] rounded-3xl"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-6 text-left">
//                 <h3 className="text-3xl font-cinzel text-[#E0C097] mb-1">
//                   {p.title}
//                 </h3>
//                 <p className="text-white text-lg">{p.subtitle}</p>
//               </div>
//             </motion.div>

//             {/* In-view narrator (also speaks when intersecting if voice on) */}
//             <InViewNarrator
//               text={p.narration}
//               onSpeak={(text) => {
//                 if (speakRef.current) {
//                   playAmbient();
//                   setCurrentProjectIndex(i);
//                   speak(text);
//                 }
//               }}
//             />

//             {/* gallery */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 w-full">
//               {p.gallery.map((g, idx) => {
//                 const isActive = currentProjectIndex === i;
//                 return (
//                   <motion.button
//                     key={g}
//                     onClick={() =>
//                       setLightbox({ src: g, alt: `${p.title} view ${idx + 1}` })
//                     }
//                     whileHover={{ scale: 1.03 }}
//                     transition={{ duration: 0.25 }}
//                     className={`relative rounded-xl overflow-hidden border-2 ${
//                       isActive ? "border-[#E0C097]" : "border-transparent"
//                     } focus:outline-none`}
//                   >
//                     <Image
//                       src={g}
//                       alt={`${p.title} view ${idx + 1}`}
//                       width={600}
//                       height={420}
//                       className="object-cover w-full h-[180px]"
//                     />
//                     {/* subtle visual highlight when project is active */}
//                     {isActive && (
//                       <div className="absolute inset-0 ring-2 ring-[#E0C097]/30 pointer-events-none" />
//                     )}
//                   </motion.button>
//                 );
//               })}
//             </div>
//           </article>
//         ))}
//       </div>

//       {/* Lightbox / modal */}
//       {lightbox && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
//           <div className="relative max-w-4xl w-full rounded-xl overflow-hidden bg-white">
//             <Image
//               src={lightbox.src}
//               alt={lightbox.alt || ""}
//               width={1600}
//               height={1000}
//               className="object-cover w-full h-[70vh]"
//             />
//             <button
//               onClick={() => setLightbox(null)}
//               className="absolute top-3 right-3 bg-white/80 hover:bg-white text-black px-3 py-1 rounded-full font-semibold shadow-md"
//             >
//               ✕
//             </button>
//             {/* Left Arrow */}
//             <motion.button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handlePrev();
//               }}
//               whileHover={{ scale: 1.1 }}
//               className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
//             >
//               ←
//             </motion.button>

//             {/* Right Arrow */}
//             <motion.button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleNext();
//               }}
//               whileHover={{ scale: 1.1 }}
//               className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
//             >
//               →
//             </motion.button>
//           </div>
//         </div>
//       )}

//       {/* Stop Narration floating button */}
//       <button
//         onClick={stopNarration}
//         className="fixed bottom-6 right-6 font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-[#a27b66] transition-all z-50  bg-gradient-to-r from-[#E0C097] to-[#bba27d] text-black"
//         aria-label="Stop narration"
//       >
//         Stop Narration
//       </button>
//     </section>
//   );
// }

// /* helper: in-view narrator (speaks when the section intersects) */
// function InViewNarrator({ text, onSpeak }: { text: string; onSpeak: (t: string) => void }) {
//   const ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) onSpeak(text);
//       },
//       { threshold: 0.55 }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [text, onSpeak]);

//   return <div ref={ref} className="h-1" />;
// }




"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  title: string;
  subtitle: string;
  mainImage: string;
  gallery: string[];
  narration: string;
};

const projects: Project[] = [
  {
    title: "Exterior Design",
    subtitle: "Woodland House",
    mainImage:
      "https://design-milk.com/images/2017/09/Villa-Rypen-CF-Moller-Architects-2-810x540.jpg",
    gallery: [
      "https://images.adsttc.com/media/images/5a90/433a/f197/ccee/4700/011a/newsletter/12-ALTUS-woodland-house-PC_418.jpg?1519403819=",
      "https://cdn.mos.cms.futurecdn.net/fiL52zritYxfeyJtLtQirB.jpg",
      "https://s3-blog.homelane.com/design-ideas/wp-content/uploads/2025/07/03052549/modern-brick-wall-design-living-room-wooden-textures.png",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    ],
    narration:
      "Exterior Design — Woodland House. The architecture embraces the surrounding forest through generous glazing and warm timber cladding. Note how the large panes frame seasonal light and create a living painting for the interior.",
  },
  {
    title: "Interior Design",
    subtitle: "Urban Lounge",
    mainImage:
      "https://s3-blog.homelane.com/design-ideas/wp-content/uploads/2025/07/03044926/modern-wallpaper-design-living-room-classy-golden-accents.png",
    gallery: [
      "https://cdn.home-designing.com/wp-content/uploads/2025/04/simple-wall-mounted-tv-600x450.jpg",
      "https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2022/07/Cover-Inspiration-1-5-1400x933.png",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=687",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&q=80&w=687",
    ],
    narration:
      "Interior Design — Urban Lounge. High ceilings and layered textures define this lounge. Subtle gold accents and curated furnishings provide warmth while maintaining a clean, architectural silhouette.",
  },
  {
    title: "Home Decor",
    subtitle: "Open House View",
    mainImage:
      "https://hips.hearstapps.com/hmg-prod/images/edc080123reddkaihoi-009-645aba4daf6e1.jpg",
    gallery: [
    "https://images.unsplash.com/photo-1758448511255-ac2a24a135d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
      "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2024-01-25-at-12-12-51-pm-65b29696e9721.png?crop=0.752xw%3A1.00xh%3B0.103xw%2C0&resize=1120%3A%2A",
      "https://media.houseandgarden.co.uk/photos/67dc464c0f2847aedf2da20b/16%3A9/w_1280%2Cc_limit/Shot05117_RT-production_digital.jpg",
      "https://images.unsplash.com/photo-1761971975886-57975f99ce99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1179",
    ],
    narration:
      "Home Decor — Open House View. Curated artworks and bespoke pieces punctuate a serene neutral canvas. Observe the interplay of material and scale that produces a lived-in gallery ambience.",
  },

  {
    title: "Urban Design",
    subtitle: "City Loft Serenity",
    mainImage:
      "https://hips.hearstapps.com/hmg-prod/images/edc100123egan-002-6500742f5feb7.jpg?crop=1xw%3A0.8209281961471103xh%3Bcenter%2Ctop&resize=1200%3A%2A",
    gallery: [
      "https://images.unsplash.com/photo-1635483496741-75eb49e545f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
      "https://images.unsplash.com/photo-1708517196691-b1d75c483e4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
      "https://images.unsplash.com/photo-1587209255846-ab7eae1c3e97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
      "https://images.unsplash.com/photo-1649429710616-dad56ce9a076?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    ],
    narration:
      "Urban Design — City Loft Serenity. Industrial bones softened by natural fabrics and controlled lighting create an intimate, refined retreat in the heart of the city.",
  },
];

export default function ProjectPage() {
  const speakRef = useRef(false);
  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number | null>(
    null
  );
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt?: string;
    projectIndex: number;
    imgIndex: number;
  } | null>(null);

  const speak = (text: string) => {
    if (!("speechSynthesis" in window) || !speakRef.current) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95;
    u.pitch = 1.05;
    u.lang = "en-GB";
    speechSynthesis.speak(u);
  };

  const playAmbient = () => {
    if (!ambientRef.current) {
      ambientRef.current = new Audio(
        "https://cdn.pixabay.com/audio/2023/02/28/audio_57d3797fa9.mp3"
      );
      ambientRef.current.volume = 0.12;
    }
    ambientRef.current.currentTime = 0;
    ambientRef.current.play().catch(() => {});
  };

  useEffect(() => {
    const onToggle = (e: CustomEvent) => {
      speakRef.current = e.detail.enabled;
      if (!speakRef.current) {
        setCurrentProjectIndex(null);
        speechSynthesis.cancel();
        ambientRef.current?.pause();
      } else {
        playAmbient();
        speak("Welcome to Lumé Interiors. Starting the guided tour now.");
        startAutoTour();
      }
    };
    window.addEventListener("toggleVoice", onToggle as EventListener);
    return () =>
      window.removeEventListener("toggleVoice", onToggle as EventListener);
  }, []);

  const startAutoTour = async () => {
    await new Promise((r) => setTimeout(r, 1400));
    for (let i = 0; i < projects.length; i++) {
      if (!speakRef.current) break;
      setCurrentProjectIndex(i);
      playAmbient();
      speak(projects[i].narration);
      await new Promise((r) => setTimeout(r, 3000));
    }
    if (speakRef.current) {
      speak(
        "That concludes the guided tour. Thank you for visiting Lumé Interiors."
      );
      setCurrentProjectIndex(null);
    }
  };

  const stopNarration = () => {
    speechSynthesis.cancel();
    speakRef.current = false;
    setCurrentProjectIndex(null);
    ambientRef.current?.pause();
    window.dispatchEvent(
      new CustomEvent("toggleVoice", { detail: { enabled: false } })
    );
  };

  // 🧭 Arrow navigation
  const handlePrev = () => {
    if (!lightbox) return;
    const { projectIndex, imgIndex } = lightbox;
    const gallery = projects[projectIndex].gallery;
    const prevIndex = (imgIndex - 1 + gallery.length) % gallery.length;
    setLightbox({
      src: gallery[prevIndex],
      alt: `${projects[projectIndex].title} view ${prevIndex + 1}`,
      projectIndex,
      imgIndex: prevIndex,
    });
  };

  const handleNext = () => {
    if (!lightbox) return;
    const { projectIndex, imgIndex } = lightbox;
    const gallery = projects[projectIndex].gallery;
    const nextIndex = (imgIndex + 1) % gallery.length;
    setLightbox({
      src: gallery[nextIndex],
      alt: `${projects[projectIndex].title} view ${nextIndex + 1}`,
      projectIndex,
      imgIndex: nextIndex,
    });
  };

  return (
    <section className="bg-[#f9f6f3] min-h-screen py-20 px-6 md:px-16 text-center relative overflow-visible">
      <h2 className="text-4xl md:text-5xl font-cinzel text-gray-800 mb-12">
        Featured Interior Design Projects
      </h2>

      <div className="space-y-20 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <article key={i} className="flex flex-col items-center">
            <motion.div
              animate={{
                scale: currentProjectIndex === i ? 1.025 : 1,
                opacity: currentProjectIndex === i ? 1 : 0.95,
              }}
              transition={{ duration: 0.6 }}
              className="relative w-full rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src={p.mainImage}
                alt={`${p.title} - ${p.subtitle}`}
                width={1400}
                height={700}
                className="object-cover w-full h-[420px] rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-6 text-left">
                <h3 className="text-3xl font-cinzel text-[#E0C097] mb-1">
                  {p.title}
                </h3>
                <p className="text-white text-lg">{p.subtitle}</p>
              </div>
            </motion.div>

            <InViewNarrator
              text={p.narration}
              onSpeak={(text) => {
                if (speakRef.current) {
                  playAmbient();
                  setCurrentProjectIndex(i);
                  speak(text);
                }
              }}
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 w-full">
              {p.gallery.map((g, idx) => {
                const isActive = currentProjectIndex === i;
                return (
                  <motion.button
                    key={g}
                    onClick={() =>
                      setLightbox({
                        src: g,
                        alt: `${p.title} view ${idx + 1}`,
                        projectIndex: i,
                        imgIndex: idx,
                      })
                    }
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                    className={`relative rounded-xl overflow-hidden border-2 ${
                      isActive ? "border-[#E0C097]" : "border-transparent"
                    } focus:outline-none`}
                  >
                    <Image
                      src={g}
                      alt={`${p.title} view ${idx + 1}`}
                      width={600}
                      height={420}
                      className="object-cover w-full h-[180px]"
                    />
                    {isActive && (
                      <div className="absolute inset-0 ring-2 ring-[#E0C097]/30 pointer-events-none" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </article>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="relative max-w-4xl w-full rounded-xl overflow-hidden bg-white">
            <Image
              src={lightbox.src}
              alt={lightbox.alt || ""}
              width={1600}
              height={1000}
              className="object-cover w-full h-[70vh]"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 bg-white/80 hover:bg-white text-black px-3 py-1 rounded-full font-semibold shadow-md"
            >
              ✕
            </button>

            {/* Left Arrow */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              whileHover={{ scale: 1.1 }}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
            >
              ←
            </motion.button>

            {/* Right Arrow */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              whileHover={{ scale: 1.1 }}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
            >
              →
            </motion.button>
          </div>
        </div>
      )}

      <button
        onClick={stopNarration}
        className="fixed bottom-6 right-6 font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-[#a27b66] transition-all z-50 bg-gradient-to-r from-[#E0C097] to-[#bba27d] text-black"
        aria-label="Stop narration"
      >
        Stop Narration
      </button>
    </section>
  );
}

function InViewNarrator({
  text,
  onSpeak,
}: {
  text: string;
  onSpeak: (t: string) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onSpeak(text);
      },
      { threshold: 0.55 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [text, onSpeak]);

  return <div ref={ref} className="h-1" />;
}
