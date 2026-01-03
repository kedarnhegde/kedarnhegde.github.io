"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // show after scrolling 300px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-white p-3 text-purple-600 shadow-2xl transition-all hover:scale-110 hover:shadow-purple-300 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3.293 12.707a1 1 0 010-1.414L9.586 5 16 11.293a1 1 0 01-1.414 1.414L10 8.414l-4.586 4.293a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
