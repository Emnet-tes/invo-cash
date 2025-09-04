"use client";

import Image from "next/image";

export default function About() {
  const people = [
    {
      src: "/monitering.jpg",
      alt: "Person 1",
      pos: "top-[10%] left-[60%]",
    },
    { src: "/dollar.png", alt: "Person 3", pos: "top-[65%] left-[80%]" },
    {
      src: "/efficency.avif",
      alt: "Person 4",
      pos: "top-[80%] left-[40%]",
    },
    { src: "/trust.jpg", alt: "Person 6", pos: "top-[30%] left-[5%]" },
  ];

  return (
    <section
      className="relative  bg-[#0070bf]/10 py-20 px-6 md:px-12"
      id="about"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT - Orbit with avatars */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          {/* Central Logo */}
          <div className="text-center relative w-32 h-32 md:w-48 md:h-48">
            <Image
              src="/Asset 3pattern.png"
              fill
              alt="InvoCash Logo"
              className="object-contain"
            />
          </div>

          {/* Orbit Circles */}
          <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-gray-300" />
          <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-gray-300" />
          <div className="absolute w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full border border-gray-300" />

          {/* Floating Avatars */}
          {people.map((p, i) => (
            <div
              key={i}
              className={`absolute ${p.pos} w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-md ring-2 ring-blue-500/40`}
            >
              <Image src={p.src} alt={p.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* RIGHT - About Text */}
        <div className="space-y-6">
          <span className="px-4 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            Revolutionizing SME Financing
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            InvoCash is a financial platform revolutionizing access to working
            capital for SMEs by turning invoices into immediate liquidity. Our
            platform delivers more than financing — it provides intelligent
            credit and risk assessments, authenticates legal documents to
            prevent fraud, and ensures full KYC/AML compliance.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            By reducing financing timelines from weeks to hours, we empower SMEs
            with instant capital while helping banks make safer, data-driven
            lending decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
