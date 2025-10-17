// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const articles = [
//   {
//     slug: "modern-minimalist-trends",
//     title: "Modern Minimalist Trends Redefining Interior Architecture",
//     date: "October 8, 2025",
//     description:
//       "Explore how minimalism is transforming interior spaces through balance, simplicity, and mindful design.",
//     image:
//       "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     slug: "sustainable-materials",
//     title: "Sustainable Materials Shaping the Future of Design",
//     date: "September 25, 2025",
//     description:
//       "Eco-conscious materials are leading a revolution in architecture and interior design — combining beauty with responsibility.",
//     image:
//       "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     slug: "artisanal-spaces",
//     title: "The Rise of Artisanal Spaces: Craft Meets Modern Living",
//     date: "August 30, 2025",
//     description:
//       "Discover how handcrafted artistry is reshaping modern interiors with warmth, texture, and personality.",
//     image:
//       "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     slug: "color-inspiration-2025",
//     title: "Color Inspirations for 2025: Earthy Neutrals and Warm Accents",
//     date: "August 10, 2025",
//     description:
//       "A soft return to nature — discover the color palettes that evoke calm, sophistication, and timelessness this season.",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     slug: "biophilic-design",
//     title: "Biophilic Design: Bringing Nature Indoors",
//     date: "July 18, 2025",
//     description:
//       "Learn how natural elements like wood, greenery, and organic textures can create spaces that breathe and inspire.",
//     image:
//       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     slug: "smart-interiors",
//     title: "Smart Interiors: Where Technology Meets Aesthetic",
//     date: "June 30, 2025",
//     description:
//       "Explore how smart devices are seamlessly blending into elegant interiors to create intuitive, stylish living spaces.",
//     image:
//       "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// export default function NewsContent() {
//   return (
//     <section className="min-h-screen bg-[#f9f6f3] py-20 px-6 md:px-20">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-20"
//       >
//         <h1 className="text-4xl md:text-5xl font-cinzel tracking-wide text-gray-800">
//           Latest News & Insights
//         </h1>
//         <p className="text-gray-500 mt-4 text-lg italic max-w-2xl mx-auto">
//           Stay inspired with stories that shape modern interior architecture —
//           from timeless elegance to sustainable innovation.
//         </p>
//       </motion.div>

//       {/* Articles Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
//         {articles.map((article, index) => (
//           <motion.div
//             key={article.slug}
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: 80 }}
//             transition={{ duration: 0.7, delay: index * 0.1 }}
//             viewport={{ once: true, amount: 0.2 }}
//             className="bg-white/90 border border-[#eae6e1] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
//           >
//             {/* Image */}
//             <div className="relative w-full h-64 overflow-hidden">
//               <Image
//                 src={article.image}
//                 alt={article.title}
//                 fill
//                 className="object-cover transition-transform duration-700 hover:scale-105"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-8 flex flex-col justify-between h-full">
//               <div>
//                 <p className="text-sm text-gray-500 italic mb-3">
//                   {article.date}
//                 </p>
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 leading-snug">
//                   {article.title}
//                 </h2>
//                 <p className="text-gray-600 text-base leading-relaxed mb-6">
//                   {article.description}
//                 </p>
//               </div>

//               {/* Learn More Button */}
//               <div className="text-left mt-auto">
//                 <Link
//                   href={`/news/${article.slug}`}
//                   className="inline-block px-7 py-3 bg-[#B98E75] text-black rounded-full font-medium shadow-sm hover:bg-[#a27b66] transition-transform duration-300 hover:scale-105"
//                 >
//                   Learn More →
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    slug: "modern-minimalist-trends",
    title: "Modern Minimalist Trends Redefining Interior Architecture",
    date: "October 8, 2025",
    description:
      "Explore how minimalism is transforming interior spaces through balance, simplicity, and mindful design.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "sustainable-materials",
    title: "Sustainable Materials Shaping the Future of Design",
    date: "September 25, 2025",
    description:
      "Eco-conscious materials are leading a revolution in architecture and interior design — combining beauty with responsibility.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "artisanal-spaces",
    title: "The Rise of Artisanal Spaces: Craft Meets Modern Living",
    date: "August 30, 2025",
    description:
      "Discover how handcrafted artistry is reshaping modern interiors with warmth, texture, and personality.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "color-inspiration-2025",
    title: "Color Inspirations for 2025: Earthy Neutrals and Warm Accents",
    date: "August 10, 2025",
    description:
      "A soft return to nature — discover the color palettes that evoke calm, sophistication, and timelessness this season.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "biophilic-design",
    title: "Biophilic Design: Bringing Nature Indoors",
    date: "July 18, 2025",
    description:
      "Learn how natural elements like wood, greenery, and organic textures can create spaces that breathe and inspire.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "smart-interiors",
    title: "Smart Interiors: Where Technology Meets Aesthetic",
    date: "June 30, 2025",
    description:
      "Explore how smart devices are seamlessly blending into elegant interiors to create intuitive, stylish living spaces.",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function NewsContent() {
  return (
    <section className="min-h-screen bg-[#f9f6f3] py-20 px-6 md:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-cinzel tracking-wide text-gray-800">
          Latest News & Insights
        </h1>
        <p className="text-gray-500 mt-4 text-lg italic max-w-2xl mx-auto">
          Stay inspired with stories that shape modern interior architecture —
          from timeless elegance to sustainable innovation.
        </p>
      </motion.div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {articles.map((article, index) => (
          //   <motion.div
          //     key={article.slug}
          //     whileInView={{ opacity: 1, y: 0 }}
          //     initial={{ opacity: 0, y: 80 }}
          //     transition={{ duration: 0.7, delay: index * 0.1 }}
          //     viewport={{ once: true, amount: 0.2 }}
          //     className="bg-white/90 border border-[#eae6e1] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
          //   >
          //     {/* Image */}
          //     <div className="relative w-full h-64 overflow-hidden">
          //       <Image
          //         src={article.image}
          //         alt={article.title}
          //         fill
          //         className="object-cover transition-transform duration-700 hover:scale-105"
          //       />
          //     </div>

          //     {/* Content */}
          //     <div className="p-8 flex flex-col justify-between h-full">
          //       <div>
          //         <p className="text-sm text-gray-500 italic mb-3">
          //           {article.date}
          //         </p>
          //         <h2 className="text-2xl font-semibold text-gray-800 hover:text-[#B98E75] mb-3 leading-snug">
          //           {article.title}
          //         </h2>
          //         <p className="text-gray-600 text-base leading-relaxed mb-6">
          //           {article.description}
          //         </p>
          //       </div>

          //       {/* Learn More Button */}
          //       <div className="text-left mt-auto">
          //         <Link
          //           href={`/news/${article.slug}`}
          //           className="inline-block px-7 py-3 bg-[#B98E75] text-white rounded-full font-medium shadow-sm hover:bg-[#a27b66] transition-transform duration-300 hover:scale-105"
          //         >
          //           Learn More →
          //         </Link>
          //       </div>
          //     </div>
          //   </motion.div>
          <motion.div
            key={article.slug}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white/90 border border-[#eae6e1] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex-grow">
                <p className="text-sm text-[#B98E75] italic mb-3">
                  {article.date}
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 hover:text-[#B98E75] mb-3 leading-snug">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {article.description}
                </p>
              </div>

              {/* Learn More Button */}
              <div className="mt-auto pt-4">
                <Link
                  href={`/news/${article.slug}`}
                  className="inline-block w-full text-center px-7 py-3 bg-[#B98E75] text-white rounded-full font-medium shadow-sm hover:bg-[#a27b66] transition-transform duration-300 hover:scale-105"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
