"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="relative flex justify-between items-center px-4 sm:px-8 md:px-16 py-5 bg-white border-b border-gray-200">
        <Link href="/" className="text-lg font-bold text-black z-50">
          AI Chatbot
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-black hover:text-blue-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-black hover:text-blue-500 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-black hover:text-blue-500 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-black hover:text-blue-500 transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center">
          <Link href="/login" className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors cursor-pointer">
            Log In
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </header>

      <div
        className={`md:hidden fixed top-[73px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <nav className="flex flex-col p-4">
          <Link
            href="/"
            className="py-3 text-sm font-medium text-black hover:text-blue-500 transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="py-3 text-sm font-medium text-black hover:text-blue-500 transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="py-3 text-sm font-medium text-black hover:text-blue-500 transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="py-3 text-sm font-medium text-black hover:text-blue-500 transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="mt-4">
            <Link 
              href="/login" 
              className="block w-full py-2.5 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors text-center cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;