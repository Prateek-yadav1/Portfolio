import React, { useState } from "react";

const experiences = [
  {
    year: "Jun 2025 – Jul 2025",
    title: "Intern (Web Development)",
    company: "Coding Blocks",
    location: "Noida, Uttar Pradesh",
    description:
      "Developed a full-stack web application (MediConnect) for online healthcare appointment management. Implemented secure role-based authentication, appointment scheduling, medical report sharing, and real-time video consultation. Conducted thorough testing, UI enhancements, and iterative improvements based on user feedback, resulting in a robust product successfully demonstrated to company and academic mentors.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "WebRTC",
    ],
    link: "https://mediconnect-4dbu.onrender.com/",
    icon: "💼",
    color: "from-cyan-500 to-blue-600"
  },
  {
    year: "April 2025",
    title: "Technical Lead",
    company: "SCI-MAT Club Event, BML Munjal University",
    location: "Gurugram, Haryana",
    description:
      "Led the technical planning and execution of a college-level club event, overseeing website development, registrations, and technical infrastructure. Coordinated with designers and developers to ensure smooth deployment, resolved real-time technical issues during the event, and ensured a seamless experience for participants and organizers.",
    techStack: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
      "Deployment",
    ],
    link: "https://www.bmu.edu.in",
    icon: "🎯",
    color: "from-purple-500 to-pink-600"
  },
  {
    year: "Aug 2024 – Aug 2025",
    title: "Web Development Team Member",
    company: "SCI-MAT Club, BML Munjal University",
    location: "Gurugram, Haryana",
    description:
      "Contributed to the design and development of the club website showcasing activities, events, and achievements, resulting in a 100+ increase in monthly visitors. Collaborated with a team of four developers to maintain consistent functionality and user experience. Improved website performance by reducing load times by 20% and enhanced navigation for over 150 weekly active users.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git",
    ],
    link: "https://www.bmu.edu.in",
    icon: "👥",
    color: "from-orange-500 to-red-600"
  },
];

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-20 right-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my growth, contributions, and milestones in the tech industry
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>

          {/* Timeline dots animation */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 w-2 h-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Desktop Layout */}
                <div className={`hidden md:flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Content Card */}
                  <div className="w-5/12">
                    <div
                      className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                        hoveredIndex === index ? 'border-cyan-500/50 shadow-cyan-500/20' : ''
                      }`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Header with Icon */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${exp.color} shadow-lg shrink-0`}>
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-cyan-400 font-semibold mb-1">
                            {exp.company}
                          </p>
                          <p className="text-gray-500 text-sm flex items-center gap-2">
                            <span>📍</span> {exp.location}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white shadow-md hover:scale-110 transition-transform cursor-default`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r ${exp.color} text-white hover:shadow-lg hover:scale-105`}
                      >
                        <span>View Project</span>
                        <span className="text-xl">→</span>
                      </a>

                      {/* Decorative corner */}
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${exp.color} opacity-5 rounded-bl-full`}></div>
                    </div>
                  </div>

                  {/* Center Timeline Node */}
                  <div className="relative flex items-center justify-center w-2/12">
                    <div className="absolute w-px h-full bg-gradient-to-b from-gray-700 to-transparent"></div>
                    <div className={`relative z-10 w-6 h-6 rounded-full border-4 border-gray-900 transition-all duration-300 ${
                      hoveredIndex === index
                        ? `bg-gradient-to-br ${exp.color} scale-150 shadow-lg`
                        : 'bg-gray-700'
                    }`}>
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} animate-ping ${
                        hoveredIndex === index ? 'opacity-75' : 'opacity-0'
                      }`}></div>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="w-5/12">
                    <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      <div className={`inline-block px-6 py-3 rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 ${
                        hoveredIndex === index ? 'border-cyan-500/50' : ''
                      }`}>
                        <span className="text-cyan-400 font-bold text-lg">
                          {exp.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Year Badge Mobile */}
                    <div className="inline-block px-4 py-2 rounded-lg bg-gray-700/50 mb-4">
                      <span className="text-cyan-400 font-bold">
                        {exp.year}
                      </span>
                    </div>

                    {/* Header with Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`text-3xl p-2 rounded-lg bg-gradient-to-br ${exp.color} shadow-lg shrink-0`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-400 font-semibold mb-1">
                          {exp.company}
                        </p>
                        <p className="text-gray-500 text-sm">
                          📍 {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${exp.color} text-white`}
                    >
                      <span>View Project</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <p className="text-gray-400 text-lg mb-4">
            Building the future, one project at a time
          </p>
          <div className="flex gap-2 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}