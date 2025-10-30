// app/home-decor/page.tsx
import { Suspense } from "react";
import HomeDecorContent from "./HomeDecorContent";


export default function HomeDecorPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-[70vh]">
          <div className="w-10 h-10 border-4 border-[#B98E75] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <HomeDecorContent />
    </Suspense>
  );
}
