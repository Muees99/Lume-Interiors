import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import Logoo from "@/public/assets/Logoo.png";
import { FOOTER_LINKS } from "@/libs/constants";
import Link from "next/link";
import cn from "@/app/utils/twcx";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [{ title: "Our Services", links: FOOTER_LINKS.ourServices }];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* MAIN GRID: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Newsletter Section */}
          <div className="flex flex-col max-w-sm w-full">
            <h3 className="text-2xl font-semibold mb-4 text-[#B98E75]">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Subscribe to get updates on our latest interior designs and
              trends.
            </p>
            <form className="flex max-w-[350px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 px-4 py-2 flex-grow focus:outline-none text-sm text-white placeholder-gray-400 rounded-l-md"
              />
              <button
                type="submit"
                className="bg-[#B98E75] px-6 py-2 text-sm font-semibold rounded-r-md hover:bg-opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Our Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#B98E75]">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Architecture", href: "/architecture" },
                { label: "Interior Design", href: "/interior-design" },
                { label: "Home Decor", href: "/home-decor" },
                { label: "Urban Design", href: "/urban-design" },
                { label: "Design System", href: "/design-system" },
              ].map((service, index) => (
                <li key={index} className="flex items-center group">
                  <MdArrowForward className="mr-2 text-[#B98E75] group-hover:translate-x-1 transition-transform duration-300" />
                  <Link
                    href={service.href}
                    className="capitalize text-white/90 hover:text-[#B98E75] transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Projects Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#B98E75] uppercase">
              Our Projects
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                "https://images.unsplash.com/photo-1676794944553-399cade9cd39?auto=format&fit=crop&w=400&q=80",
                "https://i.ibb.co/fnc0TG1/unsplash-Qd-AAasr-Zhdk.png",
                "https://images.unsplash.com/photo-1587913560680-7f8187bf9634?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1742367539759-6e4fc2e39209?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1745221847962-0397cc719b8e?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1535745684445-440d5472e777?auto=format&fit=crop&w=400&q=80",
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Project ${i + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-20 object-cover rounded-md hover:opacity-80 transition"
                />
              ))}
            </div>
          </div>

          {/* Lumé Interiors Section */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src={Logoo}
                alt="Lumé Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h3 className="text-2xl font-semibold ml-2">Lumé Interiors</h3>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Crafting timeless spaces that reflect elegance and harmony. Let’s
              transform your home with Lumé.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, href: "https://www.facebook.com/" },
                { icon: <FaTwitter />, href: "https://www.twitter.com/" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/" },
              ].map(({ icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[#B98E75] hover:bg-opacity-80 transition"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {currentYear} Lumé Interiors. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
