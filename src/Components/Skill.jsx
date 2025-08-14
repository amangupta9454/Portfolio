import { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaEnvelope,
  FaCuttlefish,
  FaGitAlt
} from "react-icons/fa";
import { SiTailwindcss, SiPython, SiCplusplus, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, proficiency: 90 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, proficiency: 50 },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, proficiency: 80 },
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, proficiency: 60 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, proficiency: 40 },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" />, proficiency: 85 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, proficiency: 85 },
  { name: "MongoDB", icon: <FaDatabase className="text-green-700" />, proficiency: 82 },
  { name: "Nodemailer", icon: <FaEnvelope className="text-blue-400" />, proficiency: 90 },
  { name: "C", icon: <FaCuttlefish className="text-blue-400" />, proficiency: 50 },
  { name: "C++", icon: <SiCplusplus className="text-indigo-500" />, proficiency: 10 },
  { name: "Python", icon: <SiPython className="text-yellow-500" />, proficiency: 0 },
  { name: "DSA(Basic)", icon: <FaGitAlt className="text-orange-400" />, proficiency: 5 },
];

const Skill = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Optimized particle system
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.5 ? '#8b5cf6' : '#06b6d4'
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isVisible]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative min-h-screen transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          zIndex: 3,
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative" style={{ zIndex: 10 }}>
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 tracking-wide relative inline-block transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">
            ⚡ Tech Arsenal ⚡
          </span>
          <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transform scale-x-0 animate-scale-x"></div>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 px-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 
                hover:bg-white/20 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/30
                transform transition-all duration-700 hover:scale-110 hover:-translate-y-4 cursor-pointer
                ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
              <div className="absolute inset-[2px] rounded-2xl bg-slate-900/90 group-hover:bg-slate-800/90 transition-colors duration-500"></div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-cyan-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              {/* Progress Circle */}
              <div className="absolute top-3 right-3 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-white/20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-purple-400 animate-draw-circle"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray={`${skill.proficiency}, 100`}
                    strokeLinecap="round"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>

              {/* Icon */}
              <div className="text-4xl sm:text-5xl mb-4 flex justify-center relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <p className="text-base sm:text-lg font-bold text-white/95 relative z-10 mb-2 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </p>
              
              {/* Proficiency */}
              <p className="text-sm text-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-500 relative z-10 font-semibold">
                {skill.proficiency}% Mastery
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-180deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.15;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.25;
            transform: translate(-50%, -50%) scale(1.1);
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

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes draw-circle {
          from {
            stroke-dasharray: 0, 100;
          }
          to {
            stroke-dasharray: var(--progress, 0), 100;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-scale-x {
          animation: scale-x 1.2s ease-out 0.8s forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-draw-circle {
          animation: draw-circle 1s ease-out forwards;
        }

        .skill-card:nth-child(1) { animation-delay: 0ms; }
        .skill-card:nth-child(2) { animation-delay: 150ms; }
        .skill-card:nth-child(3) { animation-delay: 300ms; }
        .skill-card:nth-child(4) { animation-delay: 450ms; }
        .skill-card:nth-child(5) { animation-delay: 600ms; }
        .skill-card:nth-child(6) { animation-delay: 750ms; }
        .skill-card:nth-child(7) { animation-delay: 900ms; }
        .skill-card:nth-child(8) { animation-delay: 1050ms; }
        .skill-card:nth-child(9) { animation-delay: 1200ms; }
        .skill-card:nth-child(10) { animation-delay: 1350ms; }
        .skill-card:nth-child(11) { animation-delay: 1500ms; }
        .skill-card:nth-child(12) { animation-delay: 1650ms; }
        .skill-card:nth-child(13) { animation-delay: 1800ms; }
      `}</style>
    </section>
  );
};

export default Skill;