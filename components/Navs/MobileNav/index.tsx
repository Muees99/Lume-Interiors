// /* eslint-disable react-hooks/exhaustive-deps */

"use client";
import { useStateCtx } from "@/context/StateContext";
import { NAVLINKS } from "@/libs/constants";
import cn from "@/app/utils/twcx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";

const MobileNav = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const [isActive, setIsActive] = useState("");
  const searchParams = useSearchParams().get("path");

  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
    }
  }, [searchParams]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowMobileMenu]);

  const handleCloseMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-55"
          onClick={handleCloseMenu}
        />
      )}

      <nav
        className={cn(
          "fixed inset-y-0 right-0 w-80 bg-white bg-opacity-80 backdrop-blur-lg shadow-lg flex flex-col items-center p-6 z-[60] transition-transform duration-300",
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          aria-label="close menu"
          type="button"
          className="outline-none text-primary text-2xl sm:text-4xl absolute top-2 right-2 h-12 w-12 rounded-full border focus:border-2 focus-visible:border-primary  flex justify-center items-center"
          onClick={handleCloseMenu}
        >
          <BsX />
        </button>
        <div className="flex flex-col items-start gap-4 mt-8">
          {NAVLINKS.map((link) => (
            <Link
              href={link.link === "home" ? "/?path=home" : `/${link.link}`} //page navigation
              // key={link.id}

              // href={`#${link.link}`} // Use hash links for on-page navigation
              key={link.id}
              onClick={() => {
                setIsActive(link.link);
                setShowMobileMenu(false);
              }}
              className={cn(
                "text-black relative font-medium text-lg capitalize before:bg- before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500",
                isActive === link.link ? "before:w-full text-primary-light" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
