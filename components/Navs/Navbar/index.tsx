import { Suspense } from "react";
import NavbarClient from "./NavbarClient";

const Navbar = () => {
  return (
    <Suspense fallback={<div className="h-[12vh]" />}>
      <NavbarClient />
    </Suspense>
  );
};

export default Navbar;