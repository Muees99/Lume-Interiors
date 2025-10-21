import React, { Suspense } from "react";
import ArchitectureContent from "./ArchitectureContent";

export default function ArchitecturePage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-[80vh] text-gray-500">
          <div className="w-16 h-16 border-4 border-[#B98E75] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg font-medium">
            Loading architectural marvels...
          </p>
        </div>
      }
    >
      <ArchitectureContent />
    </Suspense>
  );
}
