"use client";

import React, { useEffect, useState } from "react";
import { decorItems } from "../../home-decor/decorItems";
import Link from "next/link";

export default function WishlistPage() {
  const [likedItems, setLikedItems] = useState<number[]>([]);

  useEffect(() => {
    const savedLikes = localStorage.getItem("likedItems");
    if (savedLikes) setLikedItems(JSON.parse(savedLikes));
  }, []);

  const liked = decorItems.filter((i) => likedItems.includes(i.id));

  return (
    <section className="min-h-screen bg-[#f9f6f3] py-20 px-6 md:px-16">
      <Link
        href="/home-decor"
        className="text-[#B98E75] hover:underline mb-8 block"
      >
        ← Back to Shop
      </Link>
      <h1 className="text-4xl font-cinzel text-gray-800 mb-10">Wishlist</h1>

      {liked.length === 0 ? (
        <p className="text-gray-600">You haven’t liked any items yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {liked.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-[#B98E75] font-medium mb-3">${item.price}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
