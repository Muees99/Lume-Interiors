// "use client";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { articles, getArticleBySlug } from "./utils";

// export async function generateStaticParams() {
//   return articles.map((article) => ({ slug: article.slug }));
// }

// export function generateMetadata({ params }: { params: { slug: string } }) {
//   const article = getArticleBySlug(params.slug);
//   if (!article) return { title: "Article Not Found" };

//   return {
//     title: `${article.title} | Lumé Interiors`,
//     description: article.description,
//   };
// }

// export default function ArticlePage({ params }: { params: { slug: string } }) {
//   const article = getArticleBySlug(params.slug);
//   if (!article) return notFound();

//   // Find related articles (3 others, random)
//   const related = articles
//     .filter((a) => a.slug !== article.slug)
//     .sort(() => 0.5 - Math.random())
//     .slice(0, 3);

//   return (
//     <section className="min-h-screen bg-[#f9f6f3] py-16 px-6 md:px-20">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-4xl mx-auto"
//       >
//         {/* Back Link */}
//         <Link
//           href="/news"
//           className="text-[#B98E75] font-medium hover:underline mb-8 inline-block"
//         >
//           ← Back to News
//         </Link>

//         {/* Article Header */}
//         <h1 className="text-4xl md:text-5xl font-cinzel text-gray-800 leading-tight">
//           {article.title}
//         </h1>
//         <p className="text-gray-500 italic mt-3">{article.date}</p>

//         {/* Image */}
//         <div className="relative w-full h-[450px] mt-10 mb-10 rounded-2xl overflow-hidden shadow-md">
//           <Image
//             src={article.image}
//             alt={article.title}
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Article Content */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="max-w-3xl mx-auto text-gray-700 font-serif text-lg leading-relaxed tracking-wide"
//         >
//           {article.content ? (
//             article.content.split("\n").map((para, i) => (
//               <p key={i} className="mb-6">
//                 {para.trim()}
//               </p>
//             ))
//           ) : (
//             <p className="italic text-gray-500">
//               More details coming soon — stay tuned for an in-depth feature on
//               this topic.
//             </p>
//           )}
//         </motion.div>

//         {/* Footer CTA */}
//         <div className="mt-14 text-center">
//           <Link
//             href="/contact"
//             className="inline-block bg-[#B98E75] text-white px-8 py-4 rounded-full font-medium shadow-sm hover:bg-[#a27b66] transition-transform duration-300 hover:scale-105"
//           >
//             Get in Touch →
//           </Link>
//         </div>
//       </motion.div>

//       {/* Related Articles Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//         viewport={{ once: true }}
//         className="mt-24 max-w-6xl mx-auto"
//       >
//         <h2 className="text-3xl md:text-4xl font-cinzel text-center text-gray-800 mb-12">
//           You May Also Like
//         </h2>
//         <div className="grid md:grid-cols-3 gap-10">
//           {related.map((rel) => (
//             <motion.div
//               key={rel.slug}
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white/90 border border-[#eae6e1] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
//             >
//               <div className="relative w-full h-56 overflow-hidden">
//                 <Image
//                   src={rel.image}
//                   alt={rel.title}
//                   fill
//                   className="object-cover transition-transform duration-700 hover:scale-105"
//                 />
//               </div>
//               <div className="p-6 flex flex-col justify-between h-full">
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-[#B98E75] transition-colors">
//                     {rel.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed mb-5">
//                     {rel.description}
//                   </p>
//                 </div>
//                 <Link
//                   href={`/news/${rel.slug}`}
//                   className="inline-block text-[#B98E75] font-medium hover:underline"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ArticleContent({ article }: { article: any }) {
  return (
    <section className="min-h-screen bg-[#f9f6f3] py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <Link
          href="/news"
          className="text-[#B98E75] font-medium hover:underline mb-8 inline-block text-lg"
        >
          ← Back to News
        </Link>

        <h1 className="text-4xl md:text-5xl font-cinzel text-gray-800 leading-tight">
          {article.title}
        </h1>
        <p className="text-gray-500 italic mt-3 text-base">{article.date}</p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-full h-[450px] mt-10 mb-12 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="max-w-3xl mx-auto text-gray-700 font-serif text-lg leading-relaxed tracking-wide"
        >
          {article.content?.split("\n").map((para: string, i: number) => (
            <p key={i} className="mb-6">
              {para}
            </p>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block bg-[#B98E75] text-white px-10 py-4 rounded-full text-lg font-medium shadow-md hover:bg-[#a27b66] transition-all duration-300 hover:scale-105"
          >
            Get in Touch →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
