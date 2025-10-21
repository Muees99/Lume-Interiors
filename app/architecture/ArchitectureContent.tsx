// "use client";

// import { Suspense } from "react";
// import ArchitectureHero from "../../components/ArchitectureHero";
// import ArchitectureGrid from "../../components/ArchitectureGrid";
// import ArchitectureCTA from "../../components/ArchitectureCTA";
// import { motion } from "framer-motion";

// function ArchitectureContent() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.9, ease: "easeOut" }}
//       // className="px-6 md:px-12 py-20"
//       className="min-h-screen bg-[#f9f6f3] py-20 px-6 md:px-16"
//     >
//       <ArchitectureHero />
//       <ArchitectureGrid />
//       <ArchitectureCTA />
//     </motion.div>
//   );
// }

// export default function ArchitecturePage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex flex-col items-center justify-center h-[80vh] text-gray-500">
//           <div className="w-16 h-16 border-4 border-[#B98E75] border-t-transparent rounded-full animate-spin mb-4"></div>
//           <p className="text-lg font-medium">
//             Loading architectural marvels...
//           </p>
//         </div>
//       }
//     >
//       <ArchitectureContent />
//     </Suspense>
//   );
// }



"use client";

import { motion } from "framer-motion";
import ArchitectureHero from "../../components/ArchitectureHero";
import ArchitectureGrid from "../../components/ArchitectureGrid";
import ArchitectureCTA from "../../components/ArchitectureCTA";

export default function ArchitectureContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="min-h-screen bg-[#f9f6f3] py-20 px-6 md:px-16"
    >
      <ArchitectureHero />
      <ArchitectureGrid />
      <ArchitectureCTA />
    </motion.div>
  );
}
