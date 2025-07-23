import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Managing Director",
      image: "/images/woman-3.png",
      description:
        "15+ years of experience in corporate accounting and tax strategy.",
      expertise: ["Tax Planning", "Business Strategy", "Financial Analysis"],
    },
    {
      name: "Michael Chen",
      role: "Tax Director",
      image: "/images/woman-5.png",
      description: "Expert in international tax law and corporate structuring.",
      expertise: ["International Tax", "Corporate Law", "Risk Management"],
    },
    {
      name: "Emily Davis",
      role: "Audit Manager",
      image: "/images/woman-3.png",
      description: "Specialized in financial audits and compliance consulting.",
      expertise: ["Auditing", "Compliance", "Internal Controls"],
    },
    {
      name: "David Wilson",
      role: "Financial Advisor",
      image: "/images/woman-5.png",
      description:
        "Dedicated to helping clients achieve their financial goals.",
      expertise: [
        "Financial Planning",
        "Investment Strategy",
        "Retirement Planning",
      ],
    },
    {
      name: "Lisa Thompson",
      role: "Bookkeeping Manager",
      image: "/images/woman-3.png",
      description:
        "Expert in modern accounting software and bookkeeping practices.",
      expertise: ["Bookkeeping", "QuickBooks", "Financial Reporting"],
    },
    {
      name: "James Rodriguez",
      role: "Tax Consultant",
      image: "/images/woman-5.png",
      description: "Specializes in personal and small business tax planning.",
      expertise: ["Tax Preparation", "Tax Planning", "Small Business Advisory"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="flex flex-col items-center relative mb-16">
        <h2 className="text-[120px] leading-[140px] font-extrabold tracking-wider text-shadow-[0_5px_7px_#0000002b] text-white">
          Our Team
        </h2>
        <h6 className="text-[65px] font-semibold absolute -bottom-3 text-green-700">
          Meet The Experts
        </h6>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h4>
              <p className="text-green-700 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.description}</p>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center">
        <p className="text-xl text-gray-600 mb-6">
          Want to join our team of experts?
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold">
          View Open Positions
        </button>
      </div>
    </div>
  );
};

export default Team;
