// "use client";

// import { useStateCtx } from "../../../context/StateContext";
// import { NAVLINKS } from "../../../libs/constants";
// import cn from "../../../app/utils/twcx";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { BsX } from "react-icons/bs";
// import { motion, AnimatePresence } from "framer-motion";
// import TalkModal from "../../TalkModal";
// import { FaMicrophone } from "react-icons/fa";

// const MobileNavClient = () => {
//   const { showMobileMenu, setShowMobileMenu } = useStateCtx();
//   const [showModal, setShowModal] = useState(false);
//   const pathname = usePathname();
//   const currentPath = pathname === "/" ? "home" : pathname.split("/")[1];

//   const getNavPath = (link: string) => (link === "home" ? "/" : `/${link}`);

//   // Disable body scroll when mobile nav is open
//   useEffect(() => {
//     document.body.style.overflow = showMobileMenu ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [showMobileMenu]);

//   // Handle Escape key
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setShowMobileMenu(false);
//     };
//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, [setShowMobileMenu]);

//   const handleCloseMenu = () => setShowMobileMenu(false);

//   return (
//     <AnimatePresence>
//       {showMobileMenu && (
//         <>
//           {/* Overlay */}
//           <motion.div
//             key="overlay"
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[59]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             onClick={handleCloseMenu}
//           />

//           {/* Mobile Nav Drawer */}
//           <motion.nav
//             key="nav"
//             initial={{ x: "100%", opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: "100%", opacity: 0 }}
//             transition={{ type: "spring", stiffness: 120, damping: 18 }}
//             className={cn(
//               "fixed inset-y-0 right-0 w-72 sm:w-80 z-[60] p-6 flex flex-col justify-between",
//               "bg-gradient-to-b from-[#1a1a1a] via-[#222222] to-[#111111] text-white shadow-2xl"
//             )}
//           >
//             {/* Close button */}
//             <motion.button
//               aria-label="Close menu"
//               type="button"
//               whileTap={{ scale: 0.9 }}
//               className="absolute top-4 right-4 text-3xl hover:text-gray-400 transition"
//               onClick={handleCloseMenu}
//             >
//               <BsX />
//             </motion.button>

//             {/* Nav Links */}
//             <motion.div
//               className="flex flex-col gap-6 mt-12"
//               initial="hidden"
//               animate="show"
//               variants={{
//                 hidden: {},
//                 show: {
//                   transition: { staggerChildren: 0.08, delayChildren: 0.2 },
//                 },
//               }}
//             >
//               {NAVLINKS.map((link) => (
//                 <motion.div
//                   key={link.id}
//                   variants={{
//                     hidden: { opacity: 0, x: 20 },
//                     show: { opacity: 1, x: 0 },
//                   }}
//                 >
//                   <Link
//                     href={getNavPath(link.link)}
//                     onClick={handleCloseMenu}
//                     className={cn(
//                       "relative text-lg font-medium capitalize tracking-wide transition-all duration-300",
//                       "hover:text-gray-300 hover:translate-x-1",
//                       currentPath === link.link
//                         ? "text-[#E0C097]"
//                         : "text-white"
//                     )}
//                   >
//                     {link.label}
//                   </Link>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="mt-10 border-t border-gray-700 pt-6"
//             >
//               <button
//                 onClick={() => setShowModal(true)}
//                 className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#7a7265] to-[#a59a86] text-black font-semibold px-6 py-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg relative"
//               >
//                 <FaMicrophone className="text-black" />
//                 <span>Talk to Me</span>
//                 <span className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//               </button>
//             </motion.div>
//           </motion.nav>

//           {/* Modal */}
//           <TalkModal
//             showModal={showModal}
//             setShowModal={setShowModal}
//             isOpen={false}
//             onClose={() => setShowModal(false)}
//           />
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default MobileNavClient;





"use client";

import { useStateCtx } from "../../../context/StateContext";
import { NAVLINKS } from "../../../libs/constants";
import cn from "../../../app/utils/twcx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrophone, FaVolumeMute } from "react-icons/fa";

const MobileNavClient = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname === "/" ? "home" : pathname.split("/")[1];

  const getNavPath = (link: string) => (link === "home" ? "/" : `/${link}`);

  // Lock body scroll and fix position when mobile nav is open
  useEffect(() => {
    if (showMobileMenu) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [showMobileMenu]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowMobileMenu(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setShowMobileMenu]);

  // Sync voice state with main navbar
  useEffect(() => {
    const handleVoiceToggle = (e: Event) => {
      const customEvent = e as CustomEvent;
      setVoiceEnabled(customEvent.detail.enabled);
    };
    window.addEventListener("toggleVoice", handleVoiceToggle);
    return () => window.removeEventListener("toggleVoice", handleVoiceToggle);
  }, []);

  const handleCloseMenu = () => setShowMobileMenu(false);

  // Toggle Voice Narration
  const toggleVoice = () => {
    const newState = !voiceEnabled;
    setVoiceEnabled(newState);

    // Dispatch to all components
    window.dispatchEvent(
      new CustomEvent("toggleVoice", { detail: { enabled: newState } })
    );

    // Speech feedback
    speechSynthesis.cancel();
    const message = new SpeechSynthesisUtterance(
      newState ? "Voice narration enabled." : "Voice narration disabled."
    );
    message.rate = 0.95;
    message.pitch = 1.05;
    message.lang = "en-GB";
    speechSynthesis.speak(message);
  };

  return (
    <AnimatePresence>
      {showMobileMenu && (
        <>
          {/* Overlay - Fixed positioning ensures it stays in place */}
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[59]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseMenu}
            style={{ position: "fixed" }} // Force fixed position
          />

          {/* Mobile Nav Drawer - Fixed positioning */}
          <motion.nav
            key="nav"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="fixed inset-y-0 right-0 w-[85vw] max-w-sm z-[60] flex flex-col shadow-2xl"
            style={{
              position: "fixed",
              background:
                "linear-gradient(to bottom right, #1a1a1a, #252525, #111111)",
            }}
          >
            {/* Header with Close Button */}
            <div className="relative flex items-center justify-between p-6 border-b border-gray-700/50 bg-black/20">
              <h2 className="text-xl font-semibold text-[#E0C097]">Menu</h2>
              <motion.button
                aria-label="Close menu"
                type="button"
                whileTap={{ scale: 0.9 }}
                className="text-3xl text-gray-400 hover:text-white transition"
                onClick={handleCloseMenu}
              >
                <BsX />
              </motion.button>
            </div>

            {/* Nav Links */}
            <motion.div
              className="flex-1 flex flex-col gap-4 px-6 py-8 overflow-y-auto"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.15 },
                },
              }}
            >
              {NAVLINKS.map((link) => (
                <motion.div
                  key={link.id}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={getNavPath(link.link)}
                    onClick={handleCloseMenu}
                    className={cn(
                      "block text-lg font-medium capitalize tracking-wide transition-all duration-300 py-2 px-4 rounded-lg",
                      "hover:bg-white/5 hover:translate-x-1",
                      currentPath === link.link
                        ? "text-[#E0C097] bg-white/10"
                        : "text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Footer with Voice Button - SINGLE BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 border-t border-gray-700/50 bg-black/20 space-y-3"
            >
              {/* Single Voice Toggle Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleVoice}
                className={cn(
                  "w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg relative",
                  voiceEnabled
                    ? "bg-gradient-to-r from-[#E0C097] to-[#bba27d] text-black"
                    : "bg-gradient-to-r from-[#7a7265] to-[#a59a86] text-black"
                )}
              >
                {voiceEnabled ? (
                  <>
                    <FaVolumeMute className="text-black text-lg" />
                    <span className="text-base">Stop Narration</span>
                  </>
                ) : (
                  <>
                    <FaMicrophone className="text-black text-lg" />
                    <span className="text-base">Talk to Me</span>
                  </>
                )}
                <span
                  className={cn(
                    "absolute top-2 right-3 w-2 h-2 rounded-full",
                    voiceEnabled ? "bg-green-400 animate-pulse" : "bg-gray-400"
                  )}
                />
              </motion.button>

              {/* Voice Status Text */}
              <AnimatePresence>
                {voiceEnabled && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-center text-xs text-green-400 font-medium"
                  >
                    🎙️ Voice narration is active
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNavClient;