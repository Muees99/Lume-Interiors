

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// const articles = [
//   {
//     slug: "modern-minimalist-trends",
//     title: "Modern Minimalist Trends Redefining Interior Architecture",
//     date: "October 8, 2025",
//     description:
//       "Explore how minimalism is transforming interior spaces through balance, simplicity, and mindful design.",
//     content: `
//       Minimalism is more than a design choice — it’s a lifestyle philosophy that prioritizes clarity, calm, and balance.
//       The beauty of minimalism lies in using space, light, and texture to achieve emotional harmony.
      
//       Designers today are embracing neutral tones, open layouts, and natural lighting to create interiors that evoke serenity.
//       Minimalism isn’t about having less — it’s about making room for what truly matters.
//     `,
//     image:
//       "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     slug: "sustainable-materials",
//     title: "Sustainable Materials Shaping the Future of Design",
//     date: "September 25, 2025",
//     description:
//       "Eco-conscious materials are leading a revolution in architecture and interior design.",
//     content: `
//       Sustainability is redefining modern interiors. Designers are turning to renewable and recycled materials,
//       merging style with environmental responsibility.
      
//       From bamboo flooring to reclaimed wood and terrazzo surfaces, these choices not only reduce environmental impact
//       but also add character and warmth to living spaces.
//     `,
//     image:
//       "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     slug: "artisanal-spaces",
//     title: "The Rise of Artisanal Spaces: Craft Meets Modern Living",
//     date: "August 30, 2025",
//     description:
//       "Discover how handcrafted artistry is reshaping modern interiors with warmth and personality.",
//     content: `
//       Artisanal design celebrates craftsmanship — from handwoven rugs to handmade ceramics.
//       These small imperfections are what make spaces truly human and memorable.
      
//       In a world of mass production, the charm of hand-crafted detail reconnects us with authenticity and intention.
//     `,
//     image:
//       "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     slug: "color-inspiration-2025",
//     title: "Color Inspirations for 2025: Earthy Neutrals and Warm Accents",
//     date: "August 10, 2025",
//     description:
//       "Discover the color palettes that evoke calm and sophistication this season.",
//     content: `
//       The color story of 2025 brings comfort and nature together — warm beige, clay, soft green, and muted terracotta.
//       These hues create grounded, soothing interiors that connect us back to the earth.
      
//       Designers are pairing these tones with organic textures like linen, jute, and raw timber for timeless appeal.
//     `,
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     slug: "biophilic-design",
//     title: "Biophilic Design: Bringing Nature Indoors",
//     date: "July 18, 2025",
//     description:
//       "Natural elements like wood, greenery, and organic forms make spaces feel alive.",
//     content: `
//       Biophilic design bridges nature and architecture, improving well-being and creativity.
//       Sunlight, ventilation, and greenery are key ingredients in this timeless approach.
      
//       It’s about designing for human connection — with natural patterns, organic materials, and sensory balance.
//     `,
//     image:
//       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     slug: "smart-interiors",
//     title: "Smart Interiors: Where Technology Meets Aesthetic",
//     date: "June 30, 2025",
//     description:
//       "Explore how smart devices are blending into elegant interiors to create intuitive living spaces.",
//     content: `
//       Smart homes are no longer futuristic — they’re the new normal.
//       Subtle, integrated technologies enhance comfort and efficiency without compromising design aesthetics.
      
//       The future of interior design lies in creating spaces that are both intelligent and emotionally engaging.
//     `,
//     image:
//       "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// export async function generateStaticParams() {
//   return articles.map((article) => ({
//     slug: article.slug,
//   }));
// }

// export function generateMetadata({ params }: { params: { slug: string } }) {
//   const article = articles.find((a) => a.slug === params.slug);
//   if (!article) return { title: "Article Not Found" };
//   return {
//     title: `${article.title} | Lumé Interiors`,
//     description: article.description,
//   };
// }

// export default function ArticlePage({ params }: { params: { slug: string } }) {
//   const article = articles.find((a) => a.slug === params.slug);
//   if (!article) return notFound();

//   return (
//     <section className="min-h-screen bg-[#f9f6f3] py-16 px-6 md:px-20">
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//         className="max-w-4xl mx-auto"
//       >
//         <Link
//           href="/news"
//           className="text-[#B98E75] font-medium hover:underline mb-8 inline-block text-lg"
//         >
//           ← Back to News
//         </Link>

//         <h1 className="text-4xl md:text-5xl font-cinzel text-gray-800 leading-tight">
//           {article.title}
//         </h1>
//         <p className="text-gray-500 italic mt-3 text-base">{article.date}</p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="relative w-full h-[450px] mt-10 mb-12 rounded-2xl overflow-hidden shadow-xl"
//         >
//           <Image
//             src={article.image}
//             alt={article.title}
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
//           {article.content.split("\n").map((para, i) => (
//             <p key={i} className="mb-6">
//               {para}
//             </p>
//           ))}
//         </motion.div>

//         <div className="mt-16 text-center">
//           <Link
//             href="/contact"
//             className="inline-block bg-[#B98E75] text-white px-10 py-4 rounded-full text-lg font-medium shadow-md hover:bg-[#a27b66] transition-all duration-300 hover:scale-105"
//           >
//             Get in Touch →
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

import { notFound } from "next/navigation";
import { generateStaticParams, generateMetadata, articles } from "./utils";
import ArticleContent from "./ArticleContent";

export { generateStaticParams, generateMetadata };

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  return <ArticleContent article={article} />;
}
