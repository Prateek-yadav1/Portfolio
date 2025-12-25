import { useState, useEffect } from "react";
import React from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="relative group cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {"<Prateek Yadav/>"}
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-1 items-center">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    activeSection === item.href
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Active indicator */}
                  {activeSection === item.href && (
                    <span className="absolute inset-0 bg-cyan-500/10 rounded-lg border border-cyan-500/30"></span>
                  )}
                  
                  {/* Hover effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </li>
            ))}
          </ul>

        

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all duration-300"
            style={{
              width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
            }}
          ></div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 w-64 h-full bg-gradient-to-br from-gray-900 to-black border-l border-gray-800 shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-24">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  style={{
                    animation: isMobileMenuOpen
                      ? `slideInRight 0.3s ease-out ${index * 0.1}s both`
                      : "none",
                  }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === item.href
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30"
                        : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

        

            {/* Social Links Mobile */}
            <div
              className="flex gap-4 justify-center mt-8"
              style={{
                animation: isMobileMenuOpen
                  ? `slideInRight 0.3s ease-out ${(navItems.length + 1) * 0.1}s both`
                  : "none",
              }}
            >
              <a
                href="https://www.linkedin.com/in/prateek-yadav-webdeveloper/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Prateek-yadav1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}