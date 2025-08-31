"use client";

import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-t from-blue-800 via-[#0a021a] to-black text-gray-300 py-12 px-6 md:px-16"
      id="footer"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        {/* Left Section: Logo, Description, Socials */}
        <div>
         
            <img
              src="/Asset 4pattern.png"
              alt="InvoCash Logo"
              className="h-8 w-auto"
            />
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            InvoCash is transforming invoice financing in Ethiopia, empowering
            SMEs to access instant liquidity while reducing risk for lenders.
          </p>

          <p className="mt-6 font-medium text-white">Get latest updates here</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-3">
            <Link href="#" className="hover:text-blue-400">
              <Linkedin size={22} />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <Twitter size={22} />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <Facebook size={22} />
            </Link>
            <Link href="#" className="hover:text-blue400">
              <Youtube size={22} />
            </Link>
          </div>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="flex flex-col space-y-3 text-sm md:text-base">
          <Link href="#" className="hover:text-purple-400">
            Home
          </Link>
          <Link href="#" className="hover:text-purple-400">
            About us
          </Link>
          <Link href="#" className="hover:text-purple-400">
            Why us
          </Link>
          <Link href="#" className="hover:text-purple-400">
            Team
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} InvoCash. All rights reserved.</p>
      </div>
    </footer>
  );
}
