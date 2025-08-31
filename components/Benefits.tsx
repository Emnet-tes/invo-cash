"use client";

import { ShieldCheck, SearchCheck, Activity } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
      title: "Proprietary Credit Scoring",
      description:
        "Advanced algorithms to assess creditworthiness with higher accuracy and speed.",
    },
    {
      icon: <SearchCheck className="w-8 h-8 text-blue-400" />,
      title: "Document Authentication",
      description:
        "Fraud prevention through verified documentation and legal compliance checks.",
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-400" />,
      title: "Real-time Monitoring",
      description:
        "Continuous risk assessment and live tracking for smarter, safer lending.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-t from-blue-800 via-[#0a021a] to-black py-20 px-6 md:px-12" id="features">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <span className="px-4 py-1 text-sm font-medium bg-blue-700/40 rounded-full text-blue-300">
          Benefits
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Innovative tools and powerful insights designed to elevate your
          business and make lending safer, faster, and more efficient.
        </p>

        {/* Benefit Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-left border border-white/10 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
