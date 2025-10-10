"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
 

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Service', href: '/service' },
    { name: 'Project', href: '/project' },
    { name: 'Pages', href: '/pages' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="https://i.ibb.co/t2MWDQB/AppIcon.png" alt="SolArt Logo" width={32} height={32} className="mr-2" />
          <span className="text-xl font-bold">Lumé Interiors</span>
        </Link>
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:text-gray-300 transition duration-300">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline">Call Anytime</span>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;