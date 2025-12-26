import React, { useState, useEffect } from 'react';

export default function GeometricLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentShape, setCurrentShape] = useState(0);

  const shapes = [
    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond
    'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)', // Pentagon
    'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', // Hexagon
    'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', // Octagon
    'circle(50%)', // Circle
  ];

  useEffect(() => {
    // Progress simulation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 200);

    // Shape morphing
    const shapeInterval = setInterval(() => {
      setCurrentShape(prev => (prev + 1) % shapes.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(shapeInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* 3D Cube background elements */}
      <div className="absolute inset-0 perspective-1000">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 border border-cyan-500/20"
            style={{
              left: `${(i * 15) % 100}%`,
              top: `${(i * 20) % 100}%`,
              transform: `rotateX(${i * 30}deg) rotateY(${i * 30}deg)`,
              animation: `float3d ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* Morphing geometric shape */}
        <div className="relative w-64 h-64">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30 blur-2xl animate-pulse"></div>
          
          {/* Main morphing shape */}
          <div 
            className="absolute inset-8 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 transition-all duration-700 ease-in-out"
            style={{
              clipPath: shapes[currentShape],
              animation: 'rotate3d 4s linear infinite'
            }}
          >
            {/* Inner dark shape */}
            <div className="absolute inset-1 bg-black flex items-center justify-center"
              style={{
                clipPath: shapes[currentShape],
              }}
            >
              {/* Progress number */}
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {Math.floor(progress)}
              </div>
            </div>
          </div>

          {/* Rotating particles around shape */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-3 h-3"
              style={{
                animation: `orbitParticle ${3 + i * 0.3}s linear infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            >
              <div className={`w-3 h-3 rounded-full ${
                i % 3 === 0 ? 'bg-cyan-500' : i % 3 === 1 ? 'bg-purple-500' : 'bg-pink-500'
              } shadow-lg shadow-current`}></div>
            </div>
          ))}
        </div>

        {/* Segmented loading bar */}
        <div className="w-96 space-y-4">
          <div className="flex gap-2">
            {[...Array(20)].map((_, i) => {
              const segmentProgress = (progress - i * 5) / 5 * 100;
              const isActive = segmentProgress > 0;
              const fillPercent = Math.min(Math.max(segmentProgress, 0), 100);
              
              return (
                <div
                  key={i}
                  className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700"
                  style={{
                    transition: 'all 0.3s ease-out',
                    transform: isActive ? 'scaleY(1.5)' : 'scaleY(1)'
                  }}
                >
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      i % 3 === 0 
                        ? 'bg-cyan-500' 
                        : i % 3 === 1 
                        ? 'bg-purple-500' 
                        : 'bg-pink-500'
                    }`}
                    style={{ width: `${fillPercent}%` }}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Loading text */}
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2 tracking-widest">
              {[...'LOADING'].map((letter, i) => (
                <span
                  key={i}
                  className="inline-block"
                  style={{
                    animation: `bounce 1s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <div className="text-gray-500 text-sm font-mono">
              {progress < 25 && 'Initializing systems...'}
              {progress >= 25 && progress < 50 && 'Compiling assets...'}
              {progress >= 50 && progress < 75 && 'Rendering interface...'}
              {progress >= 75 && progress < 95 && 'Finalizing experience...'}
              {progress >= 95 && 'Ready to launch! 🚀'}
            </div>
          </div>
        </div>

        {/* Floating data points */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-500/30 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `dataStream ${3 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              {Math.random().toString(16).substr(2, 4)}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes rotate3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          33% {
            transform: rotateX(360deg) rotateY(0deg) rotateZ(0deg);
          }
          66% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }

        @keyframes float3d {
          0%, 100% {
            transform: translateZ(0) rotateX(0deg) rotateY(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateZ(100px) rotateX(180deg) rotateY(180deg);
            opacity: 0.6;
          }
        }

        @keyframes orbitParticle {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(140px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(140px) rotate(-360deg);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes dataStream {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100px) translateX(${Math.random() * 50 - 25}px);
            opacity: 0;
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}