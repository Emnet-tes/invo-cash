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
    <section className="py-20 bg-[#0070bf]/10 px-6 md:px-12" id="team">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A passionate team blending technology, finance, and strategy to
            revolutionize SME financing.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg hover:shadow-[#0070bf]/30 transition-all duration-300"
            >
              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
