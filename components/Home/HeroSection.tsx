import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="https://i.ibb.co/fnc0TG1/unsplash-Qd-AAasr-Zhdk.png"
        // src="https://images.unsplash.com/photo-1555179092-916caae26142?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=706"
        alt="Interior Design"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl sm:text-2xl font-semibold text-white mb-2">
            No.1
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            WORLD CLASS DESIGN
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            FOR YOUR INTERIOR SET-UP
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            At Lumé Interiors, we bring timeless design and modern functionality
            together to create spaces that inspire. From luxurious living rooms
            to elegant office spaces, our team transforms your vision into an
            experience — where every detail reflects comfort, creativity, and
            sophistication.
          </p>

          <Link href="/projects" passHref>
            <button className="bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-opacity-80 transition duration-300">
              OUR PROJECTS
            </button>
          </Link>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-24 h-1 bg-white" />
      {/* <div className="absolute top-0 right-0 w-24 h-1  bg-amber-300" /> */}
    </div>
  );
};

export default HeroSection;
