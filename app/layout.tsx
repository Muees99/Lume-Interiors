// app/layout.tsx
import type { Metadata } from "next";
import { outfit, italiana, cinzel } from "./font";
import "./globals.css";
import StateProvider from "../context/StateContext";
import Navbar from "../components/Navs/Navbar";
import Footer from "../components/Footer";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Lumé Interiors",
    template: "%s | Lumé Interiors",
  },
  description: "Elevating spaces through timeless, modern design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${italiana.variable} ${cinzel.variable}`}
    >
      <body className="font-outfit bg-gray-900 text-white">
        <StateProvider>
          <Navbar />
          {children}
          <Footer />
        </StateProvider>
      </body>
    </html>
  );
}
