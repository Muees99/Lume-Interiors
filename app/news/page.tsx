// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";




// const newsArticles = [
//   {
//     id: 1,
//     title: "Designing Tranquility: The Art of Minimal Living Spaces",
//     date: "October 5, 2025",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
//     description:
//       "Discover how minimal design can elevate comfort and calm. Our latest collection embraces simplicity, balance, and timeless elegance.",
//   },
//   {
//     id: 2,
//     title: "Earthy Palettes: The Return of Warm Neutrals",
//     date: "September 20, 2025",
//     image:
//       "https://images.unsplash.com/photo-1616486651771-30e9d5a87d49?auto=format&fit=crop&q=80&w=1000",
//     description:
//       "Warm tones are making a comeback. Here’s how you can blend earthy textures and colors into your home interiors.",
//   },
//   {
//     id: 3,
//     title: "A Touch of Gold: Elevating Spaces with Subtle Accents",
//     date: "August 29, 2025",
//     image:
//       "https://images.unsplash.com/photo-1618213837799-1ba5d9b6b91c?auto=format&fit=crop&q=80&w=1000",
//     description:
//       "Metallics done right — adding gold accents can transform an ordinary space into a sophisticated retreat.",
//   },
//   {
//     id: 4,
//     title: "Sustainable Interiors: Where Beauty Meets Responsibility",
//     date: "July 14, 2025",
//     image:
//       "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1000",
//     description:
//       "Sustainability is more than a trend; it’s a movement. See how our design team reimagines eco-conscious interiors with elegance.",
//   },
// ];

// export default function NewsPage() {
//   return (
//     <section className="min-h-screen bg-[#f9f6f3] py-24 px-6 md:px-16">
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-16"
//       >
//         <h1 className="text-4xl md:text-5xl font-cinzel text-gray-800">
//           News & Insights
//         </h1>
//         <p className="mt-4 text-gray-600 italic">
//           Inspiration, trends, and stories from our design studio.
//         </p>
//       </motion.div>

//       {/* Grid Section */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {newsArticles.map((article, i) => (
//           <motion.div
//             key={article.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.1 }}
//             className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition border border-[#eae6e1]"
//           >
//             <motion.div
//               className="overflow-hidden relative h-60"
//               whileHover={{ scale: 1.02 }}
//             >
//               <Image
//                 src={article.image}
//                 alt={article.title}
//                 width={600}
//                 height={400}
//                 className="w-full h-full object-cover hover:scale-105 transition duration-700"
//               />
//             </motion.div>

//             <div className="p-6">
//               <p className="text-sm text-[#B98E75] font-semibold mb-2">
//                 {article.date}
//               </p>
//               <h2 className="text-xl font-cinzel text-gray-800 mb-3 hover:text-[#B98E75] transition">
//                 {article.title}
//               </h2>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {article.description}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import NewsContent from "./NewsContent";

// export const metadata = {
//   title: "News | Lumé Interiors",
//   description:
//     "Discover the latest stories and insights in modern interior design.",
// };

// export default function NewsPage() {
//   return <NewsContent />;
// }

import NewsContent from "./NewsContent";

export const metadata = {
  title: "News | Lumé Interiors",
  description:
    "Discover the latest stories and insights in modern interior design.",
};

export default function NewsPage() {
  return <NewsContent />;
}
