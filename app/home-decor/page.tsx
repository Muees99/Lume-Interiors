// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { Heart, ShoppingCart, Search, Filter } from "lucide-react";
// import { decorItems, DecorItem } from "./decorItems";

// export default function HomeDecorPage() {
//   const [search, setSearch] = useState("");
//   const [likedItems, setLikedItems] = useState<number[]>([]);
//   const [cart, setCart] = useState<number[]>([]);
//   const [category, setCategory] = useState("All");

//   // persist state in localStorage
//   useEffect(() => {
//     const savedLikes = localStorage.getItem("likedItems");
//     const savedCart = localStorage.getItem("cart");
//     if (savedLikes) setLikedItems(JSON.parse(savedLikes));
//     if (savedCart) setCart(JSON.parse(savedCart));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("likedItems", JSON.stringify(likedItems));
//   }, [likedItems]);

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

// const categories = [
//   "All",
//   ...Array.from(new Set<string>(decorItems.map((item) => item.category))),
// ];

//   const filteredItems = decorItems.filter((item) => {
//     const matchCategory = category === "All" || item.category === category;
//     const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
//     return matchCategory && matchSearch;
//   });

//   const toggleLike = (id: number) => {
//     setLikedItems((prev) =>
//       prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
//     );
//   };

//   const addToCart = (id: number) => {
//     if (!cart.includes(id)) setCart([...cart, id]);
//   };

//   const removeFromCart = (id: number) => {
//     setCart(cart.filter((i) => i !== id));
//   };

//   return (
//     <section className="min-h-screen bg-[#c5bca4] py-20 px-6 md:px-16">
//       {/* Header */}
//       <div className="text-center mb-14">
//         <h1 className="text-5xl md:text-6xl font-cinzel text-gray-800 mb-4">
//           Home Décor & Lifestyle
//         </h1>
//         <p className="text-gray-600 max-w-3xl mx-auto text-lg">
//           Discover timeless pieces crafted to bring elegance, warmth, and
//           personality into your home.
//         </p>
//       </div>

//       {/* Top Controls */}
//       <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto mb-10 gap-6">
//         {/* Search */}
//         <div className="relative w-full md:w-1/2">
//           <Search className="absolute left-4 top-3 text-gray-400" size={20} />
//           <input
//             type="text"
//             placeholder="Search for decor..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full pl-12 pr-4 py-3 border text-gray-400 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#B98E75]"
//           />
//         </div>

//         {/* Category Filter */}
//         <div className="flex items-center gap-3">
//           <Filter className="text-gray-500" size={18} />
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="border border-gray-300   text-gray-400 rounded-full px-4 py-2 focus:ring-2 focus:ring-[#B98E75]"
//           >
//             {categories.map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex gap-4 items-center">
//           <Link href="/home-decor/wishlist" className="relative">
//             <Heart size={26} className="text-gray-800" />
//             {likedItems.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-[#B98E75] text-white text-xs px-2 py-1 rounded-full">
//                 {likedItems.length}
//               </span>
//             )}
//           </Link>

//           <Link href="/home-decor/cart" className="relative">
//             <ShoppingCart size={26} className="text-gray-800" />
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-[#B98E75] text-white text-xs px-2 py-1 rounded-full">
//                 {cart.length}
//               </span>
//             )}
//           </Link>
//         </div>
//       </div>

//       {/* Decor Items Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {filteredItems.map((item: DecorItem, index: number) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1, duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
//           >
//             <div className="relative w-full h-64">
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 fill
//                 className="object-cover"
//               />
//               <button
//                 onClick={() => toggleLike(item.id)}
//                 className="absolute top-3 right-3 bg-white/80 p-2 rounded-full shadow-md hover:scale-110 transition"
//               >
//                 <Heart
//                   size={20}
//                   className={
//                     likedItems.includes(item.id)
//                       ? "text-red-500 fill-red-500"
//                       : "text-gray-500"
//                   }
//                 />
//               </button>
//             </div>
//             <div className="p-6">
//               {/* <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                 {item.name}
//               </h2> */}
//               {/* <Link href={`/home-decor/${item.id}`}>
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-[#B98E75] transition">
//                   {item.name}
//                 </h2>
//               </Link> */}
//               <Link href={`/home-decor/${item.id}`}>
//                 <div className="relative w-full  mb-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </Link>

//               <p className="text-gray-500 text-sm mb-3">{item.category}</p>
//               <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                 {item.description}
//               </p>
//               <div className="flex justify-between items-center">
//                 <span className="text-[#B98E75] font-semibold text-lg">
//                   ${item.price}
//                 </span>
//                 {cart.includes(item.id) ? (
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm hover:bg-red-200 transition"
//                   >
//                     Remove
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => addToCart(item.id)}
//                     className="bg-[#B98E75] text-white px-4 py-2 rounded-full text-sm hover:bg-[#a27b66] transition"
//                   >
//                     Add to Cart
//                   </button>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";
// export const dynamic = "force-dynamic";

// import React, { Suspense } from "react";
// import HomeDecorContent from "./HomeDecorContent";

// export default function HomeDecorPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex justify-center items-center min-h-[70vh]">
//           <div className="w-10 h-10 border-4 border-[#B98E75] border-t-transparent rounded-full animate-spin" />
//         </div>
//       }
//     >
//       <HomeDecorContent />
//     </Suspense>
//   );
// }

// "use client";
// import { Suspense, lazy } from "react";

// const HomeDecorContent = lazy(() => import("./HomeDecorContent"));

// export default function HomeDecorPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex justify-center items-center min-h-[70vh]">
//           <div className="w-10 h-10 border-4 border-[#B98E75] border-t-transparent rounded-full animate-spin" />
//         </div>
//       }
//     >
//       <HomeDecorContent />
//     </Suspense>
//   );
// }

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
