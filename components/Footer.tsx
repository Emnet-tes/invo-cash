"use client";

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin , FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-[#0070bf] text-gray-300 py-12 px-6 md:px-16"
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
              <FaLinkedin />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <FaXTwitter />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <FaFacebook />
            </Link>
          </div>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="flex flex-col space-y-3 text-sm md:text-base">
          <Link href="#" className="hover:text-black">
            Home
          </Link>
          <Link href="#" className="hover:text-black">
            About us
          </Link>
          <Link href="#" className="hover:text-black">
            Why us
          </Link>
          <Link href="#" className="hover:text-black">
            Team
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-500 pt-6 text-center text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} InvoCash. All rights reserved.</p>
      </div>
    </footer>
  );
}
