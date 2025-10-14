// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { NAVLINKS } from "@/libs/constants";
// import cn from "@/app/utils/twcx";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useStateCtx } from "@/context/StateContext";
// import useWindowHeight from "@/hooks/useDimension";
// import { FaBars } from "react-icons/fa";
// import Image from "next/image";
// // import Logo from "../../public/assets/logo.png";
// import Logo from "@/public/assets/logo.png";
// import MobileNav from "../MobileNav";

// // const Navbar = () => {
// const Navbar = () => {
//   const router = useRouter();
//   const { showMobileMenu, setShowMobileMenu } = useStateCtx();
//   const searchParams = useSearchParams().get("path");
//   const scrollHeight = useWindowHeight();

//   const [isActive, setIsActive] = useState("");
//   useEffect(() => {
//     if (searchParams) {
//       setIsActive(searchParams);
//       return;
//     }
//   }, [searchParams]);

//   return (
//     <header className="fixed top-4 w-full z-50 flex justify-center">
//       <nav
//         className={cn(
//           "w-full sm:px-[5%] px-[4%] h-[12vh] flex justify-between items-center  transition-all duration-500",
//           scrollHeight > 200
//             ? "backdrop-blur-lg shadow-md py-3 rounded-xl bg-black/30"
//             : ""
//         )}
//       >
//         {/* <div className="container mx-auto flex justify-between items-center"> */}
//         <Link
//           href="/?path=home"
//           className={cn(
//             "flex items-center max-sm:w-[120px] max-[450px]:w-[100px]",
//             scrollHeight > 200 ? "max-w-[50%]" : "w-fit"
//           )}
//         >
//           <Image
//             src={Logo}
//             alt="SolArt Logo"
//             width={32}
//             height={32}
//             className="mr-2"
//           />
//           <span className="text-white text-sm md:text-lg sm:text-xl font-semibold whitespace-nowrap flex-grow">
//             Lumé Interiors
//           </span>
//         </Link>
//         <div className="hidden lg:flex items-center justify-center  gap-x-5 lg:gap-x-7 2xl:gap-x-10 ml-auto">
//           {NAVLINKS.map((link) => (
//             <Link
//               href={
//                 link.link === "home"
//                   ? "/?path=home"
//                   : `${link.link}?path=${link.link}`
//               }
//               key={link.id}
//               onClick={() => {
//                 setIsActive(link.link);
//               }}
//               className={cn(
//                 "text-[white] text-lg capitalize relative font-extralight  before:bg-blue-100 before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500",
//                 isActive === link.link ? "before:w-full text-gray-200" : "",
//                 "hover:text-gray-500"
//               )}
//             >
//               <span className="">{link.label}</span>
//             </Link>
//           ))}
//           <button
//             className=" flex items-center justify-center  px-6 py-3 rounded-full text-white bg-[#494f50]"
//             onClick={() => router.push("/donate")}
//           >
//             Call Anytime
//           </button>
//         </div>
//         <div
//           tabIndex={0}
//           className="lg:hidden text-2xl cursor-pointer focus:border border-primary focus:p-1 focus:rounded-md ml-auto"
//           onClick={() => setShowMobileMenu(true)}
//         >
//           <FaBars className="text-[#ffffff]" />
//         </div>
//         <MobileNav />
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import { useStateCtx } from "@/context/StateContext";
import cn from "@/app/utils/twcx";
import { NAVLINKS } from "@/libs/constants";
import MobileNav from "../MobileNav";
import Logo from "@/public/assets/logo.png";

const Navbar = () => {
  const router = useRouter();
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const searchParams = useSearchParams().get("path");
  const [isActive, setIsActive] = useState("");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // detect page change for active state
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
    }
  }, [searchParams]);

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

              <button
                onClick={() => router.push("/contact")}
                className="ml-6 bg-gradient-to-r from-[#7a7265] to-[#a59a86] text-black font-semibold px-6 py-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
              >
                Call Anytime
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
            <MobileNav />
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
