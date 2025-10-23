// import NewsContent from "./NewsContent";

// export const metadata = {
//   title: "News | Lumé Interiors",
//   description:
//     "Discover the latest stories and insights in modern interior design.",
// };

// export default function NewsPage() {
//   return <NewsContent />;
// }


import { Suspense } from "react";
import NewsContent from "./NewsContent";

export const metadata = {
  title: "News | Lumé Interiors",
  description:
    "Discover the latest stories and insights in modern interior design.",
};

export default function NewsPage() {
  return (
    <Suspense fallback={<div>Loading news...</div>}>
      <NewsContent />
    </Suspense>
  );
}
