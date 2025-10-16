"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxnN7PjDfK4OoIizYDhu_5XpZZuwvHRk10YyDDqxfuN0wmZ8zg0rX55hpGmBcyWN4pj/exec";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // phone: ,
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Framer Motion shake animation variant
  const shakeVariant = {
    shake: {
      x: [0, -10, 10, -6, 6, -2, 2, 0],
      transition: { duration: 0.5 },
    },
  };

  // Validate form fields
  const validate = () => {
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) newErrors.email = "Please enter your email.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!formData.message.trim())
      newErrors.message = "Please enter your message.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev: any) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccess(false);

    try {
      const form = e.target as HTMLFormElement;
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          // phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative min-h-screen py-20 px-6 md:px-20 flex flex-col justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1667400104789-f50a4cb393cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687')",
        backgroundColor: "#f9f6f3",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />

      <div className="relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-cinzel tracking-wide text-gray-800">
            Let’s Create Something Timeless
          </h1>
          <p className="text-gray-500 mt-4 text-lg italic">
            Every great space begins with a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* CONTACT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-10 border border-[#eae6e1]"
          >
            {["name", "email", "subject", "message"].map((field) => (
              <motion.div
                key={field}
                variants={shakeVariant}
                animate={errors[field] ? "shake" : ""}
                className={`mb-6 ${
                  field === "message" ? "col-span-2" : "col-span-1"
                }`}
              >
                <label className="block text-sm font-semibold text-gray-600 mb-2 capitalize">
                  {field === "name"
                    ? "Full Name"
                    : field === "message"
                    ? "Message"
                    : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>

                {field === "message" ? (
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    rows={5}
                    placeholder={
                      field === "message"
                        ? "Write your message here..."
                        : `Enter your ${field}`
                    }
                    className={`w-full border rounded-md p-3 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#B98E75] transition ${
                      errors[field] ? "border-red-400" : "border-[#d9d3ce]"
                    }`}
                  />
                ) : (
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={`Enter your ${field}`}
                    className={`w-full border rounded-md p-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#B98E75] transition ${
                      errors[field] ? "border-red-400" : "border-[#d9d3ce]"
                    }`}
                  />
                )}

                <AnimatePresence>
                  {errors[field] && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors[field]}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <div className="text-right mt-8">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className="bg-[#B98E75] text-white font-semibold px-10 py-3 rounded-full shadow-md hover:bg-[#a27b66] transition disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </div>

            {/* <AnimatePresence>
              {success && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-[#B98E75] mt-6 font-medium"
                >
                  Message sent successfully — we’ll get back to you soon!
                </motion.p>
              )}
            </AnimatePresence> */}
            {/* ✅ GOLD SUCCESS CHECKMARK ANIMATION */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center justify-center mt-8"
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                    className="w-16 h-16"
                  >
                    <motion.circle
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                      stroke="#B98E75"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1 }}
                    />
                    <motion.path
                      fill="none"
                      stroke="#B98E75"
                      strokeWidth="3"
                      d="M14 27l7 7 17-17"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  </motion.svg>

                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[#B98E75] mt-4 font-medium text-lg"
                  >
                    Message sent successfully — we’ll be in touch soon!
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>

          {/* IMAGE + CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#eae6e1]">
              <Image
                src="https://images.unsplash.com/photo-1598367815092-a2c0cbc1ea3d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
                alt="Elegant interior"
                width={900}
                height={600}
                className="object-cover w-full h-[400px]"
              />
            </div>

            <div className="bg-white/80 backdrop-blur-sm shadow-lg border border-[#eae6e1] rounded-2xl p-8">
              <h2 className="text-2xl font-cinzel mb-6 text-gray-800">
                Visit Our Studio
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <FaPhone className="text-[#B98E75] mr-3" /> +1 203-xxx-0709
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-[#B98E75] mr-3" />{" "}
                  hello@lumeinteriors.com
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-[#B98E75] mr-3" /> 24 King St,
                 Hartford,Connecticut USA.
                </li>
              </ul>

              {/* <div className="mt-6 flex space-x-5 text-[#B98E75] text-xl">
                <FaFacebook className="cursor-pointer hover:opacity-70 transition" />
                <FaTwitter className="cursor-pointer hover:opacity-70 transition" />
                <FaInstagram className="cursor-pointer hover:opacity-70 transition" />
                <FaLinkedin className="cursor-pointer hover:opacity-70 transition" />
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
