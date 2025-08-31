"use client";

import {
  Clock,
  Banknote,
  FileSearch,
  ShieldAlert,
  Users,
  XCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProblemSection() {
  const problemsRow1 = [
    { icon: Clock, text: "Delayed Payments (30–90 days)" },
    { icon: Banknote, text: "Cash Flow Shortages" },
    { icon: ShieldAlert, text: "Collateral-based Loans" },
  ];

  const problemsRow2 = [
    { icon: FileSearch, text: "No Real-time Risk Data" },
    { icon: Users, text: "Distrust Between SMEs and Lenders" },
    { icon: XCircle, text: "Financial Exclusion" },
  ];

  type ProblemCard = { icon: React.ComponentType<{ className?: string }>; text: string };

  const card = (p: ProblemCard, i: number) => (
    <div
      key={i}
      className="flex flex-col items-start gap-3 bg-zinc-900 rounded-xl p-5 border border-zinc-800 min-w-[200px] mx-2"
    >
      <p.icon className="w-6 h-6 text-red-400 shrink-0" />
      <span className="text-lg">{p.text}</span>
    </div>
  );

  return (
    <section
      className="relative bg-black text-white py-16 px-6 overflow-hidden"
      id="problem"
    >
      <div className="max-w-5xl mx-auto relative">
        <p className="text-red-500 font-semibold mb-4 border border-red-600 w-fit rounded-xl px-2">
          The Problem
        </p>
        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-10">
          Stop letting your business <br /> look like this:
        </h2>
        {/* First row scroll left to right */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            {[...problemsRow1, ...problemsRow1].map((p, i) => card(p, i))}
          </motion.div>
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent" />
        </div>

        {/* Second row scroll right to left */}
        <div className="relative overflow-hidden mt-8">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            {[...problemsRow2, ...problemsRow2].map((p, i) => card(p, i))}
          </motion.div>
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent" />
        </div>
      </div>
    </section>
  );
}
