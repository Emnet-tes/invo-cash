"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  const href = e.currentTarget.getAttribute("href");
  if (href && href.startsWith("#") && href.length > 1) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="flex justify-center pt-6 top-0 left-0 w-full z-50 sticky ">
      <div className="flex items-center justify-between w-4/5 md:w-full max-w-6xl px-6 py-3 rounded-full bg-[#0070bf] text-white shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/Asset 4pattern.png"
            alt="InvoCash Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-100">
          <Link
            href="#home"
            className="hover:text-white transition"
            onClick={handleSmoothScroll}
          >
            Home
          </Link>
          <Link
            href="#problem"
            className="hover:text-white transition"
            onClick={handleSmoothScroll}
          >
            Problem
          </Link>
          <Link
            href="#solution"
            className="hover:text-white transition"
            onClick={handleSmoothScroll}
          >
            Solution
          </Link>
          <Link
            href="#about"
            className="hover:text-white transition"
            onClick={handleSmoothScroll}
          >
            About Us
          </Link>
          <Link
            href="#features"
            className="hover:text-white transition"
            onClick={handleSmoothScroll}
          >
            Why Us
          </Link>
          <Link
            href="#team"
            className="hover:text-white transition"
            onClick={handleSmoothScroll}
          >
            Team
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md  hover:bg-gray-600/50 cursor-pointer"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 right-6 w-52 bg-white text-black rounded-xl shadow-lg md:hidden">
          <div className="flex flex-col py-4 px-6 gap-4">
            <Link
              href="#"
              onClick={(e) => {
                setIsOpen(false);
                handleSmoothScroll(e);
              }}
              className="hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              href="#problem"
              onClick={(e) => {
                setIsOpen(false);
                handleSmoothScroll(e);
              }}
              className="hover:text-blue-400"
            >
              Problem
            </Link>
            <Link
              href="#benefits"
              onClick={(e) => {
                setIsOpen(false);
                handleSmoothScroll(e);
              }}
              className="hover:text-blue-400"
            >
              Solution
            </Link>
            <Link
              href="#about"
              onClick={(e) => {
                setIsOpen(false);
                handleSmoothScroll(e);
              }}
              className="hover:text-blue-400"
            >
              About Us
            </Link>
            <Link
              href="#features"
              onClick={(e) => {
                setIsOpen(false);
                handleSmoothScroll(e);
              }}
              className="hover:text-blue-400"
            >
              Why Us
            </Link>
            <Link
              href="#team"
              onClick={(e) => {
                setIsOpen(false);
                handleSmoothScroll(e);
              }}
              className="hover:text-blue-400"
            >
              Team
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
