"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DecorItem, decorItems } from "../../home-decor/decorItems";

export default function WishlistPage() {
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<DecorItem[]>([]);

  // Load liked items from localStorage
  useEffect(() => {
    const savedLikes = localStorage.getItem("likedItems");
    if (savedLikes) {
      const likedIds = JSON.parse(savedLikes) as number[];
      setLikedItems(likedIds);
      setWishlist(decorItems.filter((item) => likedIds.includes(item.id)));
    }
  }, []);

  // Handle removing items
  const removeFromWishlist = (id: number) => {
    const updatedLikes = likedItems.filter((itemId) => itemId !== id);
    setLikedItems(updatedLikes);
    setWishlist(wishlist.filter((item) => item.id !== id));
    localStorage.setItem("likedItems", JSON.stringify(updatedLikes));
  };

  return (
    <section className="min-h-screen bg-[#f9f6f3] py-20 px-6 md:px-16">
      <Link
        href="/home-decor"
        className="text-[#B98E75] hover:underline mb-8 block text-lg"
      >
        ← Back to Shop
      </Link>

      <h1 className="text-4xl font-cinzel text-gray-800 mb-10">Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-gray-600 mb-6">
            You haven&apos;t liked any items yet.
          </p>
          <Link
            href="/home-decor"
            className="inline-block bg-[#B98E75] text-white px-6 py-3 rounded-full font-medium hover:bg-[#a27b66] transition"
          >
            Browse Decor →
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition relative"
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-[#B98E75] font-medium mb-3">${item.price}</p>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-500 hover:underline text-sm font-medium transition"
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
