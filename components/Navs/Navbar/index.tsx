"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import { useStateCtx } from "../../../context/StateContext";
import cn from "../../../app/utils/twcx";
import { NAVLINKS } from "../../../libs/constants";
import MobileNav from "../MobileNav";
import Logo from "../../../public/assets/logo.png"
import { FaMicrophone } from "react-icons/fa";
import TalkModal from "../../TalkModal";

const Navbar = () => {
  const router = useRouter();
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const [showModal, setShowModal] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  // const searchParams = useSearchParams().get("path");
  const searchParams = useSearchParams();
  const path = searchParams.get("path");



  // detect page change for active state
  // useEffect(() => {
  //   if (searchParams) {
  //     setIsActive(searchParams);
  //   }
  // }, [searchParams]);
  useEffect(() => {
      if (path) setIsActive(path);
    }, [path]);

  // hide/reveal on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // when user scrolls down → hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "fixed top-0 w-full z-50 flex justify-center transition-all duration-500",
            scrolled
              ? "bg-black/30 backdrop-blur-md shadow-md"
              : "bg-transparent"
          )}
        >
          <nav className="w-full sm:px-[5%] px-[4%] h-[12vh] flex justify-between items-center">
            {/* Logo Section */}
            <Link href="/?path=home" className="flex items-center space-x-2">
              <Image
                src={Logo}
                alt="Lumé Interiors Logo"
                width={40}
                height={40}
                className="rounded-full object-contain"
              />
              <span className="text-white text-lg sm:text-xl font-semibold tracking-wide">
                Lumé Interiors
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center justify-center gap-x-6 2xl:gap-x-10 ml-auto">
              {NAVLINKS.map((link) => (
                <Link
                  key={link.id}
                  href={
                    link.link === "home"
                      ? "/?path=home"
                      : `${link.link}?path=${link.link}`
                  }
                  onClick={() => setIsActive(link.link)}
                  className={cn(
                    "text-white text-lg capitalize relative font-light before:bg-white before:w-[0%] before:h-[1px] before:absolute before:-bottom-1 before:left-0 before:transition-all before:duration-500",
                    isActive === link.link ? "before:w-full text-gray-200" : "",
                    "hover:text-gray-300 hover:before:w-full transition-all"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              {/* Talk to Me Button */}
              <button
                onClick={() => setShowModal(true)}
                className="ml-6 flex items-center gap-2 bg-gradient-to-r from-[#7a7265] to-[#a59a86] text-black font-semibold px-6 py-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg relative"
              >
                <FaMicrophone className="text-black" />
                <span>Talk to Me</span>
                <span className="absolute top-2 right-[-6] w-2 h-2 bg-green-500 rounded-full animate-dot"></span>
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div
              tabIndex={0}
              className="lg:hidden text-2xl cursor-pointer ml-auto"
              onClick={() => setShowMobileMenu(true)}
            >
              <FaBars className="text-white" />
            </div>

            {/* Mobile Nav */}
            {/* {MobileNav("arg1", "arg2", "arg3")} */}
            <MobileNav />
          </nav>
          {/* Modal */}
          <TalkModal
            showModal={showModal}
            setShowModal={setShowModal}
            isOpen={false}
            onClose={function (): void {
              // throw new Error("Function not implemented.");
            }}
          />
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
