// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaMicrophone } from "react-icons/fa";

// const TalkModal = ({
//   isOpen,
//   onClose,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
// }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-white text-center rounded-2xl shadow-2xl p-8 w-[90%] sm:w-[400px]"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="text-xl font-semibold mb-4 text-gray-800">
//               Allow Microphone Access
//             </h2>
//             <p className="text-gray-600 text-sm mb-6">
//               To talk with Lumé Interiors, please grant microphone access.
//             </p>

//             <div className="flex justify-center">
//               <button className="bg-[#7a7265] text-white rounded-full p-5 hover:scale-110 transition-all duration-300 shadow-md">
//                 <FaMicrophone size={28} />
//               </button>
//             </div>

//             <button
//               onClick={onClose}
//               className="mt-6 text-sm text-gray-500 hover:text-gray-700"
//             >
//               Close
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default TalkModal;

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrophone, FaTimes } from "react-icons/fa";
import { TalkModalProps } from "../@types";

const TalkModal = ({ showModal, setShowModal }: TalkModalProps) => {
  const [micStatus, setMicStatus] = useState<"idle" | "pending" | "granted" | "denied">("idle");

  const requestMicrophone = async () => {
    try {
      setMicStatus("pending");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (stream) {
        setMicStatus("granted");
        console.log("🎤 Microphone access granted!");
      }
    } catch (err) {
      console.error("Microphone access denied:", err);
      setMicStatus("denied");
    }
  };

  useEffect(() => {
    if (showModal) setMicStatus("idle");
  }, [showModal]);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex justify-center items-center px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white text-center rounded-2xl shadow-2xl p-8 w-[90%] sm:w-[400px] backdrop-blur-md border border-white/20 sm:p-8 max-w-sm relative"
          >
            {/* Close button */}
            {/* <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-300 hover:text-white"
            >
              <FaTimes />
            </button> */}

            <h2 className="text-gray-800 text-xl font-semibold mb-3">
              Talk to Lumé Interiors
            </h2>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {micStatus === "idle" &&
                "Tap the microphone below to grant permission and start a real conversation."}
              {micStatus === "pending" &&
                "Requesting microphone access... please allow access in your browser."}
              {micStatus === "granted" &&
                "Microphone is active! You can start speaking now."}
              {micStatus === "denied" &&
                "Microphone permission was denied. Please enable it in your browser settings."}
            </p>

            {/* Microphone Animation */}
            <div className="flex justify-center">
              <div className="relative flex items-center justify-center">
                {/* Pulsing rings with status-based colors */}
                {micStatus !== "idle" && (
                  <>
                    <span
                      className={`absolute h-24 w-24 rounded-full ${
                        micStatus === "pending"
                          ? "bg-yellow-400/40"
                          : micStatus === "granted"
                          ? "bg-green-400/40"
                          : "bg-red-500/40"
                      } animate-pulse-ring blur-lg`}
                    ></span>
                    <span
                      className={`absolute h-16 w-16 rounded-full ${
                        micStatus === "pending"
                          ? "bg-yellow-400/30"
                          : micStatus === "granted"
                          ? "bg-green-500/30"
                          : "bg-red-500/30"
                      } animate-pulse-ring-slow blur-md`}
                    ></span>
                  </>
                )}

                {/* Main Mic Button */}
                <button
                  onClick={requestMicrophone}
                  disabled={micStatus === "pending"}
                  className={`relative z-10 rounded-full p-6 shadow-lg transition-all duration-300 ${
                    micStatus === "granted"
                      ? "bg-green-500 hover:bg-green-600"
                      : micStatus === "denied"
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-gray-500 hover:bg-gray-600"
                  }`}
                >
                  <FaMicrophone className="text-white text-3xl" />
                </button>
              </div>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 text-sm  text-gray-500 hover:text-gray-700  transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TalkModal;
