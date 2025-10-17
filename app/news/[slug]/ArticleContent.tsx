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
