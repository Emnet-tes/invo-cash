"use client";

import Image from "next/image";

export default function Solution() {
  return (
    <section className="bg-gradient-to-t from-blue-800 via-[#0a021a] to-black  text-white py-16 px-6" id="solution">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-400 font-semibold mb-4 border border-blue-600 w-fit rounded-xl px-2">The Solution</p>
        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-12">
          InvoCash: Your <br /> Instant Liquidity Partner
        </h2>

        {/* Card 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Turn Invoices into Liquidity
            </h3>
            <p className="text-zinc-300">
              SMEs upload unpaid invoices directly to InvoCash. We instantly
              verify, authenticate, and value them — eliminating weeks of
              waiting.
            </p>
          </div>
          <div className="relative h-72 w-full">
            <Image
              src="/liquidity.webp"
              alt="Invoice liquidity illustration"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <div className="relative h-72 w-full order-2 md:order-1">
            <Image
              src="/bank.png"
              alt="Bank financing dashboard"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="order-1 md:order-2 items-start">
            <h3 className="text-2xl font-semibold mb-4">
              Safer Bank Financing
            </h3>
            <p className="text-zinc-300">
              Banks get real-time risk insights, document authentication, and
              transparent borrower data. This means faster approvals, safer
              lending, and more inclusion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
