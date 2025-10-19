"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type CheckoutForm = {
  name: string;
  email: string;
  address: string;
  city: string;
  payment: string;
};

export default function CheckoutPage() {
  const router = useRouter();
  const [form, setForm] = useState<CheckoutForm>({
    name: "",
    email: "",
    address: "",
    city: "",
    payment: "card",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      //    alert("✅ Your order has been placed successfully!");
      setShowCheckout(true); // ✅ Show modal instead of alert
    }, 2000);
  };

  const handleCloseModal = () => {
    setShowCheckout(false);
    router.push("/home-decor"); // ✅ Redirect after modal closes
  };

  return (
    <div className="min-h-screen bg-[#9b897e] pt-28 pb-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Checkout
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Delivery Address
            </label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

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
            disabled={isSubmitting}
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-all duration-300"
          >
            {isSubmitting ? "Processing..." : "Confirm Order"}
          </button>
        </form>
      </motion.div>

      {/* ✅ Final Checkout Modal */}
      {showCheckout && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md w-full"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Checkout Successful 🎉
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase! Our team will reach out shortly.
            </p>
            <button
              onClick={handleCloseModal}
              className="bg-[#B98E75] text-white px-6 py-2 rounded-full hover:bg-[#a27b66] transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
