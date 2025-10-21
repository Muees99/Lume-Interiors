"use client";
export const dynamic = "force-dynamic";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { decorItems, DecorItem } from "../../home-decor/decorItems";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const productId = parseInt(id as string, 10);
  const product = decorItems.find((item) => item.id === productId);

  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  useEffect(() => {
    const savedLikes = localStorage.getItem("likedItems");
    const savedCart = localStorage.getItem("cart");
    if (savedLikes) setLikedItems(JSON.parse(savedLikes));
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleLike = (id: number) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleCart = (id: number) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  if (!product) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#f9f6f3] text-gray-600">
        <p>Product not found.</p>
      </section>
    );
  }

  // Recommended items (excluding current product)
  const recommendations = decorItems
    .filter((i) => i.id !== product.id)
    .slice(0, 3);

  return (
    <section className="min-h-screen bg-[#f9f6f3] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/home-decor"
          className="flex items-center gap-2 text-[#B98E75] mb-10 hover:underline"
        >
          <ArrowLeft size={18} /> Back to Shop
        </Link>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-md"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            <button
              onClick={() => toggleLike(product.id)}
              className="absolute top-4 right-4 bg-white/80 p-3 rounded-full shadow-md hover:scale-110 transition"
            >
              <Heart
                size={24}
                className={
                  likedItems.includes(product.id)
                    ? "text-red-500 fill-red-500"
                    : "text-gray-600"
                }
              />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-cinzel text-gray-800">
              {product.name}
            </h1>
            <p className="text-[#B98E75] font-medium text-lg">
              {product.category}
            </p>
            <p className="text-2xl font-semibold text-gray-700">
              ${product.price}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => toggleCart(product.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition ${
                  cart.includes(product.id)
                    ? "bg-red-100 text-red-600 hover:bg-red-200"
                    : "bg-[#B98E75] text-white hover:bg-[#a27b66]"
                }`}
              >
                <ShoppingCart size={18} />
                {cart.includes(product.id) ? "Remove from Cart" : "Add to Cart"}
              </button>

              <Link
                href="/home-decor/cart"
                className="border border-[#B98E75] px-6 py-3 rounded-full text-[#B98E75] hover:bg-[#B98E75] hover:text-white transition"
              >
                View Cart
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Recommendations */}
        <div>
          <h2 className="text-3xl font-cinzel text-gray-800 mb-8">
            You may also like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {recommendations.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                <Link href={`/home-decor/${item.id}`}>
                  <div className="relative w-full h-64">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-[#B98E75] font-semibold">
                      ${item.price}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
