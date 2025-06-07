import  { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaEnvelope,
  FaCuttlefish,
  FaBrain,
 
  FaGitAlt
} from "react-icons/fa";
import { SiTailwindcss, SiPython, SiCplusplus,SiExpress } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "scrollreveal";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, proficiency: 90 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, proficiency: 50 },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, proficiency: 80 },
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, proficiency: 60 },
  { name: "Tailwind CSS", icon: <SiTailwindcss  className="text-teal-400" />, proficiency: 40 },
  { name: "Express.js", icon: <SiExpress  className="text-gray-300" />, proficiency: 85 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, proficiency: 85 },
  { name: "MongoDB", icon: <FaDatabase className="text-green-700" />, proficiency: 82 },
  { name: "Nodemailer", icon: <FaEnvelope  className="text-blue-400" />, proficiency: 90 },
  // { name: "GSAP", icon: <FaBrain className="text-lime-400" />, proficiency: 20 },
  { name: "C", icon: <FaCuttlefish className="text-blue-400" />, proficiency: 50 },
  { name: "C++", icon: <SiCplusplus  className="text-indigo-500" />, proficiency: 10 },
  { name: "Python", icon: <SiPython  className="text-yellow-500" />, proficiency: 0 },
  { name: "DSA(Basic)", icon: <FaGitAlt className="text-orange-400" />, proficiency: 5 },
  // { name: "AI Use", icon: <FaBrain className="text-purple-400" />, proficiency: 100 },
];

const Skill = () => {
  const sectionRef = useRef(null);
  const cuboidRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      titleRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)", delay: 0.3 }
    );

    const sr = ScrollReveal({
      origin: "bottom",
      distance: "40px",
      duration: 1400,
      delay: 200,
      easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      interval: 100,
      reset: true,
    });

    sr.reveal(".skill-item");
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 bg-[#0e0e0e] text-white overflow-hidden relative min-h-[60vh] sm:min-h-[70vh]"
    >
      <div
        ref={cuboidRef}
        className="absolute inset-0 opacity-40 pointer-events-none block"
      >
        {[...Array(13)].map((_, i) => (
          <div
            key={i}
            className="absolute cuboid"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateZ(${Math.random() * 500 - 250}px)`,
              background: `linear-gradient(135deg, rgba(192, 132, 252, 0.8), rgba(125, 211, 252, 0.6))`,
              boxShadow: `0 0 25px rgba(192, 132, 252, 0.7), 0 0 50px rgba(125, 211, 252, 0.4)`,
              border: `1px solid rgba(192, 132, 252, 0.85)`,
              animation: `float ${Math.random() * 12 + 6}s infinite ease-in-out ${Math.random() * 5}s`,
              borderRadius: "6px",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 md:mb-10 lg:mb-12 tracking-wide relative inline-block"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-purple-300 to-pink-300 animate-gradient">
            ⚡ Tech Arsenal ⚡
          </span>
          <span className="absolute -bottom-1 sm:-bottom-1.5 md:-bottom-2 left-0 w-full h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-cyan-200 to-purple-300 animate-pulse rounded-full"></span>
          <span className="absolute inset-0 opacity-20 blur-lg sm:blur-xl bg-gradient-to-r from-cyan-200 to-purple-300 animate-glow"></span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-2 sm:px-2 md:px-2 md:py-4 sm:py-2 py-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item bg-gray-900/80 backdrop-blur-xl border border-purple-300/40 rounded-xl p-9 sm:p-8 md:p-10 lg:p-8 shadow-md hover:shadow-[0_0_25px_rgba(192,132,252,0.6)] transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 relative overflow-visible group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/25 to-cyan-400/25 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(192, 132, 252, 0.25)"
                    strokeWidth="3"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#grad)"
                    strokeWidth="3"
                    strokeDasharray={`${skill.proficiency * 2.83}, 283`}
                    transform="rotate(-90 50 50)"
                    className="animate-draw"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#c084fc" }} />
                      <stop offset="100%" style={{ stopColor: "#7dd3fc" }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 sm:mb-3 md:mb-4 flex justify-center animate-float relative z-0">
                {skill.icon}
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wide text-white relative z-0">{skill.name}</p>
              <p className="text-xs sm:text-sm md:text-base text-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-400 relative z-0 mt-1 sm:mt-2">
                {skill.proficiency}%
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .cuboid {
            transform-style: preserve-3d;
            position: absolute;
          }

          @keyframes float {
            0%, 100% {
              transform: translateZ(-150px) translateY(0);
            }
            50% {
              transform: translateZ(150px) translateY(-25px);
            }
          }

          .animate-float {
            animation: float 4s infinite ease-in-out;
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientFlow 6s ease infinite;
          }

          .animate-glow {
            animation: glow 2.5s ease-in-out infinite;
          }

          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes glow {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.5; }
          }

          .animate-draw {
            animation: draw 0.8s ease-out forwards;
          }

          @keyframes draw {
            from { stroke-dashoffset: 283; }
            to { stroke-dashoffset: 0; }
          }
        `}
      </style>
    </section>
  );
};

export default Skill;