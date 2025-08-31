"use client";

export default function Team() {
  const teamMembers = [
    {
      name: "Abel Matheos",
      role: "Seasoned Software Engineer",
      bio: "Expert in building scalable fintech solutions with 10+ years of experience.",
      image: "/team/abel.jpg",
    },
    {
      name: "Rediet Matwose",
      role: "Finance Lead",
      bio: "Financial expert specializing in SME lending and risk assessment.",
      image: "/team/rediet.jpg",
    },
    {
      name: "Ezana Nebeyu",
      role: "Business Strategist",
      bio: "Business development professional with extensive market knowledge.",
      image: "/team/ezana.jpg",
    },
  ];

  return (
    <section className="py-20  bg-gradient-to-b from-blue-800 via-[#0a021a] to-black  px-6 md:px-12 min-h-screen" id="team">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Meet Our Team
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            A passionate team blending technology, finance, and strategy to
            revolutionize SME financing.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg overflow-hidden hover:shadow-blue-500 hover:border-blue-400/40 transition-all duration-300"
            >
              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
