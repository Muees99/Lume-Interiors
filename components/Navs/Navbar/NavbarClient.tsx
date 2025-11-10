"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaMicrophone, FaVolumeMute } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useStateCtx } from "../../../context/StateContext";
import cn from "../../../app/utils/twcx";
import { NAVLINKS } from "../../../libs/constants";
import MobileNav from "../MobileNav";
import Logo from "../../../public/assets/Logoo.png";
import TalkModal from "../../TalkModal";

const NavbarClient = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const [showModal, setShowModal] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname === "/" ? "home" : pathname.split("/")[1];

  const getNavPath = (link: string) => (link === "home" ? "/" : `/${link}`);

  // Hide/Reveal navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100)
        setVisible(false);
      else setVisible(true);

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 🧠 Toggle Voice Narration Mode
  const toggleVoice = () => {
    const newState = !voiceEnabled;
    setVoiceEnabled(newState);

    // Dispatch to all components (ProjectPage listens for this)
    window.dispatchEvent(
      new CustomEvent("toggleVoice", { detail: { enabled: newState } })
    );

    // Smooth speech feedback
    speechSynthesis.cancel(); // stop ongoing voice
    const message = new SpeechSynthesisUtterance(
      newState
        ? "Welcome to Lumé Interiors. Voice narration enabled. Enjoy your tour."
        : "Voice narration disabled. Thank you for visiting Lumé Interiors."
    );
    message.rate = 0.95;
    message.pitch = 1.05;
    message.lang = "en-GB";
    speechSynthesis.speak(message);
  };

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
            <Link href="/" className="flex items-center space-x-2">
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
                  href={getNavPath(link.link)}
                  className={cn(
                    "text-gray-300 text-lg capitalize relative font-light before:bg-[#E0C097] before:w-[0%] before:h-[1px] before:absolute before:-bottom-1 before:left-0 before:transition-all before:duration-500",
                    currentPath === link.link
                      ? "before:w-full text-[#E0C097]"
                      : "",
                    "hover:text-gray-600 hover:before:w-full transition-all"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Talk to Me Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleVoice}
                className={cn(
                  "ml-6 flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg relative",
                  voiceEnabled
                    ? "bg-gradient-to-r from-[#E0C097] to-[#bba27d] text-black"
                    : "bg-gradient-to-r from-[#7a7265] to-[#a59a86] text-black"
                )}
              >
                {voiceEnabled ? (
                  <FaVolumeMute className="text-black" />
                ) : (
                  <FaMicrophone className="text-black" />
                )}
                <span>{voiceEnabled ? "Voice On" : "Talk to Me"}</span>
                <span
                  className={cn(
                    "absolute top-2 right-[-6px] w-2 h-2 rounded-full animate-pulse",
                    voiceEnabled ? "bg-green-400" : "bg-gray-400"
                  )}
                ></span>
              </motion.button>
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
            <MobileNav />
          </nav>

          {/* Modal */}
          <TalkModal
            showModal={showModal}
            setShowModal={setShowModal}
            isOpen={false}
            onClose={() => {}}
          />
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default NavbarClient;
