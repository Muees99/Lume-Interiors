import { Suspense } from "react";
import MobileNavClient from "./MobileNavClient";

const MobileNav = () => {
  return (
    <Suspense fallback={null}>
      <MobileNavClient />
    </Suspense>
  );
};

export default MobileNav;