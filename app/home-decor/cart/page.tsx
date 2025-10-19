// "use client";

// import React, { useEffect, useState } from "react";
// import { decorItems } from "../../home-decor/decorItems";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function CartPage() {
//   const [cart, setCart] = useState<number[]>([]);
//   const [showCheckout, setShowCheckout] = useState(false);

//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) setCart(JSON.parse(savedCart));
//   }, []);

//   const total = cart.reduce(
//     (sum, id) => sum + (decorItems.find((i) => i.id === id)?.price || 0),
//     0
//   );

//   const removeFromCart = (id: number) => {
//     const updated = cart.filter((item) => item !== id);
//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//   };

//   const handleCheckout = () => {
//     setShowCheckout(true);
//   };

//   return (
//     <section className="min-h-screen bg-[#f9f6f3] py-20 px-6 md:px-16">
//       <Link
//         href="/home-decor"
//         className="text-[#B98E75] hover:underline mb-8 block"
//       >
//         ← Back to Shop
//       </Link>
//       <h1 className="text-4xl font-cinzel text-gray-800 mb-10">Your Cart</h1>

//       {cart.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="grid gap-6 max-w-4xl mx-auto mb-10">
//             {cart.map((id) => {
//               const item = decorItems.find((i) => i.id === id);
//               if (!item) return null;
//               return (
//                 <div
//                   key={item.id}
//                   className="flex items-center justify-between bg-white shadow-md rounded-xl p-4"
//                 >
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-24 h-24 rounded-lg object-cover"
//                     />
//                     <div>
//                       <h2 className="text-lg font-medium text-gray-800">
//                         {item.name}
//                       </h2>
//                       <p className="text-[#B98E75] font-semibold">
//                         ${item.price}
//                       </p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-500 hover:underline text-sm"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               );
//             })}
//           </div>

//           {/* <div className="text-right max-w-4xl mx-auto">
//             <p className="text-xl font-semibold text-gray-700">
//               Total: <span className="text-[#B98E75]">${total}</span>
//             </p>
//             <button
//               onClick={handleCheckout}
//               className="mt-6 bg-[#B98E75] text-white px-6 py-3 rounded-full hover:bg-[#a27b66] transition"
//             >
//               Proceed to Checkout
//             </button>
//           </div> */}
//           {/* Checkout Button */}
//           {cart.length > 0 && (
//             <div className="flex justify-end mt-8">
//               <Link
//                 href="/home-decor/checkout"
//                 className="bg-[#B98E75] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#a27b66] transition"
//               >
//                 Proceed to Checkout
//               </Link>
//             </div>
//           )}
//         </>
//       )}

   
//     </section>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import { decorItems } from "../decorItems";
import { decorItems } from "../../home-decor/decorItems";
import { X } from "lucide-react";

export default function CartPage() {
  const [cart, setCart] = useState<number[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const removeFromCart = (id: number) => {
    const updated = cart.filter((i) => i !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const totalPrice = cart
    .map((id) => decorItems.find((item) => item.id === id)?.price || 0)
    .reduce((sum, price) => sum + price, 0);

  const handleCheckout = () => {
    setShowCheckout(true);
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <section className="min-h-screen bg-[#f4efe9] py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-cinzel text-gray-800 mb-12 text-center">
          Your Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Your cart is empty.{" "}
            <Link href="/home-decor" className="text-[#B98E75] underline">
              Continue Shopping
            </Link>
          </p>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 gap-10">
              {cart.map((id) => {
                const item = decorItems.find((i) => i.id === id);
                if (!item) return null;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row"
                  >
                    <div className="relative w-full md:w-1/3 h-48">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                          {item.name}
                        </h2>
                        <p className="text-gray-500 mb-2">{item.category}</p>
                        <p className="text-[#B98E75] font-semibold text-lg">
                          ${item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="self-start flex items-center gap-2 text-red-600 hover:text-red-700 mt-3 text-sm"
                      >
                        <X size={16} /> Remove
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Total & Checkout */}
            <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-medium text-gray-700">
                Total:{" "}
                <span className="text-[#B98E75] font-semibold">
                  ${totalPrice.toFixed(2)}
                </span>
              </h3>
              {/* <button
                onClick={handleCheckout}
                className="bg-[#B98E75] text-white px-8 py-3 rounded-full text-lg hover:bg-[#a27b66] transition"
              >
                Proceed to Checkout
              </button> */}
              {/* Checkout Button */}
           {cart.length > 0 && (
             <div className="flex justify-end mt-8">
               <Link
                 href="/home-decor/checkout"
                 className="bg-[#B98E75] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#a27b66] transition"
               >
                 Proceed to Checkout
               </Link>
             </div>
           )}
            </div>
          </>
        )}
      </div>

      
    </section>
  );
}
