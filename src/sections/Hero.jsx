import React, { useState, useEffect } from "react";
import profile from "../assets/Prateek.jpeg";

const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Frontend Developer",
  "Backend Developer",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Typewriter effect
  useEffect(() => {
    const currentWord = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl top-1/2 right-0 animate-pulse"
          style={{
            animationDelay: '1s',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -bottom-48 left-1/3 animate-pulse"
          style={{
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        ></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-700 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Text Content */}
          <div 
            className="text-center lg:text-left space-y-8"
            style={{
              animation: 'fadeInUp 0.8s ease-out'
            }}
          >
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-cyan-400 text-lg font-medium tracking-wide">
                Hello, World! 👋
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  I'm Prateek
                </span>
              </h1>
            </div>

            {/* Typewriter text */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl text-gray-300">
                I am a{" "}
                <span className="inline-block min-w-[300px] text-left">
                  <span className="text-white font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {displayText}
                    <span className="animate-blink">|</span>
                  </span>
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Crafting digital experiences with modern technologies and creative solutions. 
              Passionate about building scalable applications that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105">
               <a href="/Resume.pdf" download="Prateek_Resume.pdf">
  Download Resume
</a>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://www.linkedin.com/in/prateek-yadav-webdeveloper/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-14 h-14 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500/10 hover:scale-110">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </a>

              <a 
                href="https://github.com/Prateek-yadav1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-14 h-14 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:scale-110">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </a>

              <a 
                href="#" 
                className="group relative"
              >
                <div className="w-14 h-14 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center transition-all duration-300 hover:border-pink-500 hover:bg-pink-500/10 hover:scale-110">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-red-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">10+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">2+</div>
                <div className="text-sm text-gray-500">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">5+</div>
                <div className="text-sm text-gray-500">Tech Stack</div>
              </div>
            </div>
          </div>

          {/* RIGHT: 3D Avatar/Visual */}
          <div 
            className="flex justify-center lg:justify-end"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.2s both'
            }}
          >
            <div className="relative">
              {/* Main avatar container */}
              <div 
                className="relative w-80 h-80 sm:w-96 sm:h-96"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 1.75}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {/* Glowing rings */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border-2 border-purple-500/30 animate-spin-slow-reverse"></div>
                <div className="absolute inset-8 rounded-full border-2 border-pink-500/30 animate-spin-slow"></div>
                
                {/* Center circle with gradient */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-1 animate-pulse-slow">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                    {/* Avatar placeholder - you can replace with actual image */}
                    <img src={profile} alt="Prateek Yadav" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>

                {/* Floating tech icons */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '0s'}}>
                  <span className="text-2xl">⚛️</span>
                </div>
                <div className="absolute top-1/4 -left-8 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '1s'}}>
                  <span className="text-xl">💾</span>
                </div>
                <div className="absolute bottom-1/4 -right-8 w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '2s'}}>
                  <span className="text-xl">🚀</span>
                </div>
                <div className="absolute -bottom-4 left-1/4 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '1.5s'}}>
                  <span className="text-2xl">⚡</span>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(16px);
            opacity: 0;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}