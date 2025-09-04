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

  type ProblemCard = {
    icon: React.ComponentType<{ className?: string }>;
    text: string;
  };

  const card = (p: ProblemCard, i: number) => (
    <div
      key={i}
      className="flex flex-col items-start gap-3 bg-white rounded-xl p-5 border border-gray-200 w-64 mx-3 shadow-md hover:shadow-lg transition"
    >
      <p.icon className="w-7 h-7 text-red-500 shrink-0" />
      <span className="text-lg font-medium text-gray-800">{p.text}</span>
    </div>
  );

  return (
    <section
      className="relative bg-[#0070bf]/10 py-20 px-6 overflow-hidden"
      id="problem"
    >
      <div className="max-w-6xl mx-auto relative">
        <p className="text-red-600 font-semibold mb-4 border border-red-600 w-fit rounded-xl px-3 py-1 bg-red-50">
          The Problem
        </p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12 text-gray-900">
          Stop letting your business <br /> look like this:
        </h2>

        {/* First row scroll left to right */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...problemsRow1, ...problemsRow1].map((p, i) => card(p, i))}
          </motion.div>
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-20 " />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-20 " />
        </div>

        {/* Second row scroll right to left */}
        <div className="relative overflow-hidden mt-10">
          <motion.div
            className="flex min-w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...problemsRow2, ...problemsRow2].map((p, i) => card(p, i))}
          </motion.div>
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-20 " />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-20 " />
        </div>
      </div>
    </section>
  );
}
