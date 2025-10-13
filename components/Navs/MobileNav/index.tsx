// "use client";

// import { useStateCtx } from "@/context/StateContext";
// import { NAVLINKS } from "@/libs/constants";
// import cn from "@/app/utils/twcx";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { BsX } from "react-icons/bs";

// const MobileNav = () => {
//   const { showMobileMenu, setShowMobileMenu } = useStateCtx();
//   const [isActive, setIsActive] = useState("");
//   const searchParams = useSearchParams().get("path");

//   useEffect(() => {
//     if (searchParams) setIsActive(searchParams);
//   }, [searchParams]);

//   // Prevent scrolling when the menu is open
//   useEffect(() => {
//     if (showMobileMenu) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
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
//     <>
//       {/* Backdrop overlay */}
//       {showMobileMenu && (
//         <div
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[59] transition-opacity duration-300"
//           onClick={handleCloseMenu}
//         />
//       )}

//       {/* Mobile Sidebar */}
//       <nav
//         className={cn(
//           "fixed inset-y-0 right-0 w-72 sm:w-80 z-[60] p-6 flex flex-col justify-between",
//           "bg-gradient-to-b from-[#1a1a1a] via-[#222222] to-[#111111] text-white shadow-2xl",
//           "transform transition-transform duration-300 ease-in-out",
//           showMobileMenu ? "translate-x-0" : "translate-x-full"
//         )}
//       >
//         {/* Close button */}
//         <button
//           aria-label="Close menu"
//           type="button"
//           className="absolute top-4 right-4 text-3xl hover:text-gray-400 transition"
//           onClick={handleCloseMenu}
//         >
//           <BsX />
//         </button>

//         {/* Nav Links */}
//         <div className="flex flex-col gap-6 mt-12">
//           {NAVLINKS.map((link) => (
//             <Link
//               href={
//                 link.link === "home"
//                   ? "/?path=home"
//                   : `/${link.link}?path=${link.link}`
//               }
//               key={link.id}
//               onClick={() => {
//                 setIsActive(link.link);
//                 setShowMobileMenu(false);
//               }}
//               className={cn(
//                 "relative text-lg font-medium capitalize tracking-wide transition-all duration-300",
//                 "hover:text-gray-300 hover:translate-x-1",
//                 isActive === link.link ? "text-[#E0C097]" : "text-white"
//               )}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* Call-to-Action */}
//         <div className="mt-10 border-t border-gray-700 pt-6">
//           <button
//             onClick={handleCloseMenu}
//             className="w-full bg-[#E0C097] text-black font-semibold py-3 rounded-full hover:bg-[#d6b68f] transition"
//           >
//             Call Anytime
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default MobileNav;


"use client";

import { useStateCtx } from "@/context/StateContext";
import { NAVLINKS } from "@/libs/constants";
import cn from "@/app/utils/twcx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const [isActive, setIsActive] = useState("");
  const searchParams = useSearchParams().get("path");

  useEffect(() => {
    if (searchParams) setIsActive(searchParams);
  }, [searchParams]);

  // Disable body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "";
  }, [showMobileMenu]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowMobileMenu(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setShowMobileMenu]);

  const handleCloseMenu = () => setShowMobileMenu(false);

  return (
    <AnimatePresence>
      {showMobileMenu && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[59]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseMenu}
          />

          {/* Mobile Nav Drawer */}
          <motion.nav
            key="nav"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className={cn(
              "fixed inset-y-0 right-0 w-72 sm:w-80 z-[60] p-6 flex flex-col justify-between",
              "bg-gradient-to-b from-[#1a1a1a] via-[#222222] to-[#111111] text-white shadow-2xl"
            )}
          >
            {/* Close button */}
            <motion.button
              aria-label="Close menu"
              type="button"
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 text-3xl hover:text-gray-400 transition"
              onClick={handleCloseMenu}
            >
              <BsX />
            </motion.button>

            {/* Nav Links */}
            <motion.div
              className="flex flex-col gap-6 mt-12"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.2 },
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
                    href={
                      link.link === "home"
                        ? "/?path=home"
                        : `/${link.link}?path=${link.link}`
                    }
                    onClick={() => {
                      setIsActive(link.link);
                      setShowMobileMenu(false);
                    }}
                    className={cn(
                      "relative text-lg font-medium capitalize tracking-wide transition-all duration-300",
                      "hover:text-gray-300 hover:translate-x-1",
                      isActive === link.link ? "text-[#E0C097]" : "text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 border-t border-gray-700 pt-6"
            >
              <button
                onClick={handleCloseMenu}
                className="w-full bg-[#E0C097] text-black font-semibold py-3 rounded-full hover:bg-[#d6b68f] transition"
              >
                Call Anytime
              </button>
            </motion.div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
