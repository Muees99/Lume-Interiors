"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { decorItems } from "../../home-decor/decorItems";
import { X } from "lucide-react";

export default function CartPage() {
  const [cart, setCart] = useState<number[]>([]);
  const [recommended, setRecommended] = useState<typeof decorItems>([]);

  // ✅ Load cart safely on mount
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(savedCart);

      // Show random recommended items
      const shuffled = [...decorItems].sort(() => 0.5 - Math.random());
      setRecommended(shuffled.slice(0, 4));
    } catch {
      setCart([]);
    }
  }, []);

  // ✅ Remove from cart and persist immediately
  const removeFromCart = (id: number) => {
    const updated = cart.filter((i) => i !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const totalPrice = cart
    .map((id) => decorItems.find((item) => item.id === id)?.price || 0)
    .reduce((sum, price) => sum + price, 0);

  // ✅ Proceed to checkout
  const handleProceedToCheckout = async () => {
    const items = cart
      .map((id) => decorItems.find((i) => i.id === id))
      .filter(Boolean);
    localStorage.setItem("checkoutItems", JSON.stringify(items));
    localStorage.setItem("checkoutTotal", totalPrice.toString());

    // tiny delay ensures localStorage write completes before navigation
    await new Promise((res) => setTimeout(res, 100));
  };

  return (
    <section className="min-h-screen bg-[#f4efe9] py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-cinzel text-gray-800 mb-12 text-center"
        >
          Your Shopping Cart
        </motion.h1>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 text-lg"
          >
            <p>Your cart is empty.</p>
            <Link
              href="/home-decor"
              className="text-[#B98E75] underline hover:text-[#a27b66] transition"
            >
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <>
            {/* 🛒 Cart Items */}
            <div className="grid sm:grid-cols-2 gap-10">
              {cart.map((id) => {
                const item = decorItems.find((i) => i.id === id);
                if (!item) return null;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row hover:scale-[1.02] transition-transform"
                  >
                    <div className="relative w-full md:w-1/3 h-48">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                          {item.name}
                        </h2>
                        <p className="text-gray-500 mb-2">{item.category}</p>
                        <p className="text-[#B98E75] font-semibold text-lg">
                          ${item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="self-start flex items-center gap-2 text-red-600 hover:text-red-700 mt-3 text-sm"
                      >
                        <X size={16} /> Remove
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* 💰 Total + Actions */}
            <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-medium text-gray-700">
                Total:{" "}
                <span className="text-[#B98E75] font-semibold">
                  ${totalPrice.toFixed(2)}
                </span>
              </h3>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/home-decor"
                  className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-300 transition"
                >
                  Continue Shopping
                </Link>

                <Link
                  href="/home-decor/checkout"
                  onClick={handleProceedToCheckout}
                  className="bg-[#B98E75] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#a27b66] transition"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>

            {/* 💡 Recommended Items */}
            {recommended.length > 0 && (
              <div className="mt-20">
                <h2 className="text-2xl font-cinzel text-gray-800 mb-8 text-center">
                  You May Also Like
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                  {recommended.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                      <div className="relative w-full h-48">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-medium text-gray-800 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-[#B98E75] font-semibold">
                          ${item.price}
                        </p>
                        <button
                          onClick={() => {
                            const updated = Array.from(
                              new Set([...cart, item.id])
                            );
                            setCart(updated);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify(updated)
                            );
                          }}
                          className="mt-3 w-full bg-[#B98E75] text-white py-2 rounded-full hover:bg-[#a27b66] transition"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
