export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 bg-gradient-to-t from-blue-800 via-[#0a021a] to-black"
    >
      <div className="max-w-2xl text-slate-100 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Turn Invoices into Instant Cash Flow
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 opacity-90 leading-relaxed">
          Empowering SMEs in Ethiopia with instant liquidity while giving banks
          tools for smarter lending.
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors cursor-pointer mx-auto"
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
    </section>
  );
}
