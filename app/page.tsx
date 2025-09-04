'use client'
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Team from "../components/Team";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import About from "@/components/About";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <About />
      <Benefits />
      <Team />
    </div>
  );
}
