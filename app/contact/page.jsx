
"use client";

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
      <p className="text-lg mb-8">Have Any Questions?</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Your Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter the subject"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your message"
                rows="4"
              />
            </div>
            <div className="mb-4">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Vector Image */}
        <div className="flex items-center justify-center">
          <Image
            src="/path/to/vector-image.jpg"
            alt="Vector Image"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Main Image */}
      <div className="mt-8 flex justify-center">
        <Image
          src="/path/to/main-image.jpg"
          alt="Main Image"
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="flex items-center mb-2">
            <FaPhone className="mr-2 text-blue-500" /> +1 203-123-0606
          </p>
          <p className="flex items-center mb-2">
            <FaEnvelope className="mr-2 text-blue-500" /> architecture@bauen.com
          </p>
          <p className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2 text-blue-500" /> 24 King St, Charleston, SC 29401 USA
          </p>
          <p className="flex items-center mb-2">
            <FaGlobe className="mr-2 text-blue-500" /> www.yourwebsite.com
          </p>
        </div>

        {/* Placeholder for Map */}
        <div className="h-64 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Map</h2>
          <Image
            src="/path/to/map-placeholder.jpg"
            alt="Map Placeholder"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-between items-center">
        <div className="flex space-x-4">
          <FaFacebook className="text-blue-700" />
          <FaTwitter className="text-blue-400" />
          <FaInstagram className="text-pink-500" />
          <FaLinkedin className="text-blue-600" />
        </div>
        <div className="text-gray-500">
          Copyright by SolArt © 2022. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
