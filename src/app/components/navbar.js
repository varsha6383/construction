"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const isActive = (path) => pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
     
      {/* 1️⃣ DESKTOPRESPONSIVE*/}
      
      <div className="hidden xl:block bg-transparent absolute w-full z-50">
        <div className="max-w-7xl mx-auto px-[8%] py-5 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" onClick={closeMenu}>

            <Image src="/sri_logo.png" alt="sri velan" width={130} height={300} />
      
          </Link>

          {/* Menu */}
          <ul className="flex items-center space-x-10 text-[1.2vw] text-white font-sencondary">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`hover:text-lime-400 hover:border-b hover:border-lime-500 hover:pb-2 transition ${
                    isActive(item.path)
                      ? "text-lime-400 border-b border-lime-500 pb-2"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <Link href="/contact">
            <button className="bg-[#cbff54] hover:bg-lime-500 text-[#063231] cursor-pointer font-semibold px-6 py-2 rounded-full transition font-c2a">
              GET IN TOUCH
            </button>
          </Link>
        </div>
      </div>
      {/* 1️⃣ DESKTOPRESPONSIVE*/}

     
      {/* 2️⃣ LAPTOPRESPONSIVE*/}
      
      <div className="hidden lg:block xl:hidden bg-transparent absolute w-full z-50">
        <div className="max-w-6xl mx-auto px-[8%] py-4 flex justify-between items-center">
          <Link href="/" onClick={closeMenu}>

            <Image src="/sri_logo.png" alt="sri velan" width={100} height={300} />
      
          </Link>

          <ul className="flex items-center space-x-6 text-[1.3vw] text-white font-sencondary">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`hover:text-lime-400 hover:border-b hover:border-lime-500 hover:pb-2 transition ${
                    isActive(item.path)
                      ? "text-lime-400 border-b border-lime-500 pb-2"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact">
            <button className="bg-[#cbff54] hover:bg-lime-500 text-[#063231] cursor-pointer  font-semibold px-5 py-2 rounded-full  transition font-c2a">
              GET IN TOUCH
            </button>
          </Link>
        </div>
      </div>
      {/* 2️⃣ LAPTOPRESPONSIVE*/}

     
      {/* 3️⃣ TABLETRESPONSIVE  */}
     
      <div className="hidden sm:block lg:hidden bg-transparent absolute w-full z-50">
        <div className="px-[8%] py-4 flex justify-between items-center">
          <Link href="/" onClick={closeMenu}>

            <Image src="/sri_logo.png" alt="sri velan" width={120} height={300} />
      
          </Link>

          {/* Toggle Menu Button */}
          <button
            className="flex flex-col justify-between w-7 h-6 focus:outline-none"
            onClick={toggleMenu}
          >
            <motion.span
              className="block h-[2px] bg-white rounded"
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-[2px] bg-white rounded"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-[2px] bg-white rounded"
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-[#305658] mx-4 rounded-2xl shadow-lg"
            >
              <ul className="flex flex-col items-center space-y-5 text-[3vw] py-6 text-white text-lg font-sencondary">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      onClick={closeMenu}
                      className={`transition ${
                        isActive(item.path)
                          ? "text-lime-400 border-b border-lime-500 pb-1"
                          : "hover:text-lime-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <Link href="/contact" onClick={closeMenu}>
                  <button className="bg-[#cbff54] hover:bg-lime-500 text-[#063231] cursor-pointer   font-semibold px-5 py-2 rounded-full  transition font-c2a">
                    GET IN TOUCH
                  </button>
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3️⃣ TABLETRESPONSIVE  */}
     
      {/* 4️⃣ MOBILERESPONSIVE   */}
     
      <div className="sm:hidden absolute w-full z-50">
        <div className="px-[8%] py-3 flex justify-between items-center">
          <Link href="/" onClick={closeMenu}>

            <Image src="/sri_logo.png" alt="sri velan" width={100} height={300} />
      
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="flex flex-col justify-between w-5 h-4 focus:outline-none"
            onClick={toggleMenu}
          >
            <motion.span
              className="block h-[2px] bg-white rounded"
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-[2px] bg-white rounded"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-[2px] bg-white rounded"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-[#305658] mx-3 rounded-2xl shadow-lg"
            >
              <ul className="flex flex-col items-center space-y-4 py-5 text-[4vw] text-white text-base font-sencondary">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      onClick={closeMenu}
                      className={`transition ${
                        isActive(item.path)
                          ? "text-lime-400 border-b border-lime-500 pb-1"
                          : "hover:text-lime-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <Link href="/contact" onClick={closeMenu}>
                  <button className="bg-[#cbff54] hover:bg-lime-500 text-[#063231] cursor-pointer  font-semibold px-4 py-2 rounded-full  transition font-c2a">
                    GET IN TOUCH
                  </button>
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    {/* 4️⃣ MOBILERESPONSIVE   */}
    </div>
  );
}
