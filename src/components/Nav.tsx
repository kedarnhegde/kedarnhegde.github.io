"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-white/10 backdrop-blur-md border-b border-white/20"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className={`text-2xl font-bold transition-colors ${
          scrolled ? "text-gray-900" : "text-white"
        }`}>
          KH
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#experience" className={`transition-colors font-medium ${
            scrolled ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"
          }`}>
            Experience
          </a>
          <a href="#projects" className={`transition-colors font-medium ${
            scrolled ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"
          }`}>
            Projects
          </a>
          <a href="#skills" className={`transition-colors font-medium ${
            scrolled ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"
          }`}>
            Skills
          </a>
          <a href="#contact" className={`transition-colors font-medium ${
            scrolled ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"
          }`}>
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
