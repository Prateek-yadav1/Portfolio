import React, { useState } from "react";

const skills = [
  {
    category: "Frontend",
    icon: "💻",
    color: "from-cyan-500 to-blue-600",
    items: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 75  },
      { name: "React", level: 65 },
      { name: "Tailwind", level: 70 }
    ]
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-purple-500 to-pink-600",
    items: [
      { name: "Node.js", level: 65 },
      { name: "Express.js", level: 65 },
      { name: "MongoDB", level: 70 },
      { name: "JWT Authentication", level: 70 },
    { name: "Session-based Auth", level: 65 },
    ]
  },
  {
    category: "Tools",
    icon: "🛠️",
    color: "from-orange-500 to-red-600",
    items: [
      { name: "Git & GitHub", level: 75 },
      { name: "Postman", level: 65 },
    { name: "Vercel", level: 70 },
    { name: "Render", level: 70 },
    { name: "VS Code", level: 90 },
    ]
  }
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skillCategory, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${categoryIndex * 0.2}s both`
              }}
            >
              {/* Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${skillCategory.color} shadow-lg`}>
                    {skillCategory.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {skillCategory.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Skill Name */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className={`text-sm font-bold transition-all duration-300 ${
                          hoveredSkill === `${categoryIndex}-${skillIndex}`
                            ? 'text-cyan-400 scale-110'
                            : 'text-gray-500'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skillCategory.color} rounded-full transition-all duration-1000 ease-out relative`}
                          style={{
                            width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 0.1}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${skillCategory.color} opacity-10 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-4">
            Always learning and expanding my skill set
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

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}