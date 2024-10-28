"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "./navbarStyles.css";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: "#aboutUs", text: "About us" },
    // { href: "#host", text: "Your Host" },
    { href: "#gallery", text: "Gallery" },
    { href: "#services", text: "Services" },
    { href: "#nearbyAttraction", text: "Attractions" },
    { href: "#review", text: "Reviews" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <LogoIcon className="h-6 w-6 md:h-8 md:w-8" />
          <span className="text-lg md:text-xl font-bold">Neera</span>
        </div>
        <div className="hidden md:flex space-x-4">
          {navLinks.map(({ href, text }) => (
            <Link key={href} href={href} className="hover:text-gray-300">
              {text}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none">
            <motion.svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.3 }}>
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              className="md:flex md:space-x-4 block absolute md:relative top-full left-0 right-0 bg-gray-800 md:bg-transparent p-4 md:p-0 mt-2 md:mt-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}>
              {navLinks.map(({ href, text }) => (
                <motion.li
                  key={href}
                  className="py-2 md:py-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}>
                  <Link
                    href={href}
                    className="block md:inline-block text-white hover:text-yellow-500 transition-colors duration-300"
                    prefetch={false}
                    onClick={() => setIsMenuOpen(false)}>
                    {text}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                className="py-2 md:py-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}>
                <a href="#contactUs" className="block md:hidden">
                  <Button
                    variant="default"
                    className="w-full bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-300">
                    Get A Quote
                  </Button>
                </a>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
        <a href="#contactUs" className="hidden md:block">
          <Button
            variant="default"
            className="bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-300 relative overflow-hidden group">
            <span className="relative z-10 font-semibold">Get A Quote</span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></span>
            <span className="absolute -inset-px bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-50 blur transition-opacity duration-300"></span>
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

interface IconProps {
  className?: string;
}

function LogoIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}
