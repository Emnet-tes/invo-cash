"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-6 py-16 bg-slate-50 text-black max-w-6xl mx-auto"
    >
      {/* LEFT - Text */}
      <div className="flex-1 flex flex-col items-start text-left max-w-xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Turn Invoices into Instant Cash
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-600 leading-relaxed">
          Empowering SMEs in Ethiopia with instant liquidity while giving banks
          tools for smarter lending.
        </p>
        <button
          className="bg-[#0070bf]/80 hover:bg-[#0070bf] text-white font-bold py-3 px-8 rounded-lg transition-colors cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Get Started
        </button>
      </div>

      {/* RIGHT - Illustration */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <Image
          src="/hero.svg"
          alt="Hero Illustration"
          width={500}
          height={500}
          className="w-full max-w-md md:max-w-lg"
        />
      </div>
    </section>
  );
}
