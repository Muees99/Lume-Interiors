"use client";
export const dynamic = "force-dynamic";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type CheckoutForm = {
  name: string;
  email: string;
  address: string;
  city: string;
  payment: string;
};

function CheckoutPageContent() {
  const router = useRouter();
  const [form, setForm] = useState<CheckoutForm>({
    name: "",
    email: "",
    address: "",
    city: "",
    payment: "card",
  });
  const [items, setItems] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  // 🧾 Load items from localStorage
  useEffect(() => {
    const savedItems = localStorage.getItem("checkoutItems");
    const savedTotal = localStorage.getItem("checkoutTotal");
    if (savedItems) setItems(JSON.parse(savedItems));
    if (savedTotal) setTotal(parseFloat(savedTotal));
  }, []);

  // Auto-close success modal and redirect
  useEffect(() => {
    if (showCheckout) {
      const fadeTimer = setTimeout(() => {
        setShowCheckout(false);
        const redirectTimer = setTimeout(
          () => router.push("/home-decor"),
          1000
        );
        return () => clearTimeout(redirectTimer);
      }, 2000);
      return () => clearTimeout(fadeTimer);
    }
  }, [showCheckout, router]);

  // Handle form change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 💳 Submit order
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setShowCheckout(true);
      localStorage.removeItem("cart");
      localStorage.removeItem("checkoutItems");
      localStorage.removeItem("checkoutTotal");
    }, 2000);
  };

  // 🛍️ Go back to decor to edit cart
  const handleBackToDecor = () => {
    router.push("/home-decor");
  };

  return (
    <div className="min-h-screen bg-[#f4efe9] pt-28 pb-16 px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8"
      >
        {/* 🔙 Back Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center flex-1">
            Checkout
          </h1>
          <motion.button
            onClick={handleBackToDecor}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#B98E75] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#a27b66] transition"
          >
            ← Back to Decor
          </motion.button>
        </div>

        {/* 🧾 Order Summary */}
        {items.length > 0 && (
          <div className="border border-gray-200 rounded-xl p-5 mb-8 bg-[#faf7f4]">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-3"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </div>
                <p className="text-[#B98E75] font-semibold">${item.price}</p>
              </div>
            ))}
            <div className="border-t border-gray-300 pt-4 flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span className="text-[#B98E75]">${total.toFixed(2)}</span>
            </div>
          </div>
        )}

        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {["name", "email", "address", "city"].map((field) => (
            <div key={field}>
              <label className="block font-medium text-gray-700 mb-1 capitalize">
                {field === "email"
                  ? "Email Address"
                  : field === "name"
                  ? "Full Name"
                  : field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={(form as any)[field]}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>
          ))}

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <select
              name="payment"
              value={form.payment}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 bg-[#e8c9b8] text-slate-900 focus:ring-black focus:outline-none"
            >
              <option value="card">Credit / Debit Card</option>
              <option value="bank">Bank Transfer</option>
              <option value="cash">Cash on Delivery</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
          >
            {isProcessing ? "Processing..." : "Confirm Order"}
          </button>
        </form>
      </motion.div>

      {/* Processing Spinner Overlay */}
      <AnimatePresence>
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col justify-center items-center backdrop-blur-md bg-black/40"
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-12 h-12 rounded-full bg-[#B98E75] mb-5 shadow-lg shadow-[#B98E75]/40"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-white text-lg font-medium tracking-wide"
            >
              Processing your order...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🎉 Success Modal */}
      <AnimatePresence>
        {showCheckout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md w-full"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Checkout Successful 🎉
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for your purchase! Redirecting you shortly...
              </p>
              <button
                onClick={() => setShowCheckout(false)}
                className="bg-[#B98E75] text-white px-6 py-2 rounded-full hover:bg-[#a27b66] transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Suspense wrapper due to useSearchParams usage
export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen bg-[#f4efe9]">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-10 h-10 rounded-full bg-[#B98E75]"
          />
        </div>
      }
    >
      <CheckoutPageContent />
    </Suspense>
  );
}
