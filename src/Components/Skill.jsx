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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "scrollreveal";

gsap.registerPlugin(ScrollTrigger);

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
  const titleRef = useRef(null);
  const canvasRef = useRef(null);
  const [isDarkTheme] = useState(true);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.1 }
    );

    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 800,
      delay: 100,
      easing: "ease-out",
      interval: 50,
      reset: false,
    });

    sr.reveal(".skill-item");

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let w = (canvas.width = window.innerWidth);
      let h = (canvas.height = window.innerHeight);
      const particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: `hsl(${Math.random() * 360}, 70%, ${isDarkTheme ? 80 : 60}%)`,
      }));

      let mouse = { x: null, y: null };

      const animateParticles = () => {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = isDarkTheme ? "#0d0d26" : "#e6f3ff";
        ctx.fillRect(0, 0, w, h);

        particles.forEach(particle => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();

          if (mouse.x && mouse.y) {
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
              particle.dx += dx * 0.01;
              particle.dy += dy * 0.01;
            }
          }

          particle.x += particle.dx;
          particle.y += particle.dy;
          if (particle.x < 0 || particle.x > w) particle.dx *= -1;
          if (particle.y < 0 || particle.y > h) particle.dy *= -1;
        });

        requestAnimationFrame(animateParticles);
      };

      const handleResize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      };

      const handleMouseMove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("mousemove", handleMouseMove);
      animateParticles();

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isDarkTheme]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-10 bg-[#0e0d26] text-white overflow-hidden relative min-h-[50vh]"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>
      <div className={`absolute w-[300px] h-[300px] ${isDarkTheme ? 'bg-gradient-to-r from-purple-700 to-pink-500' : 'bg-gradient-to-r from-blue-300 to-cyan-400'} rounded-full blur-[180px] opacity-20 top-[-80px] left-[-80px] animate-[spin_15s_linear_infinite]`}></div>
      <div className={`absolute w-[250px] h-[250px] ${isDarkTheme ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : 'bg-gradient-to-r from-pink-300 to-purple-400'} rounded-full blur-[180px] opacity-20 bottom-[-80px] right-[-80px] animate-[spin_12s_linear_infinite_reverse]`}></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 tracking-wide relative inline-block"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-purple-300 to-pink-300">
            ⚡ Tech Arsenal ⚡
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cyan-200 to-purple-300 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 px-2 py-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item bg-gray-900/80 backdrop-blur-md border border-purple-300/30 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-[0_0_15px_rgba(192,132,252,0.5)] transform transition-all duration-300 hover:scale-105 relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(192, 132, 252, 0.2)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#grad)"
                    strokeWidth="2"
                    strokeDasharray={`${skill.proficiency * 2.83}, 283`}
                    transform="rotate(-90 50 50)"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#c084fc" }} />
                      <stop offset="100%" style={{ stopColor: "#7dd3fc" }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="text-3xl sm:text-4xl md:text-5xl mb-2 flex justify-center relative z-10">
                {skill.icon}
              </div>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-white relative z-10">{skill.name}</p>
              <p className="text-xs text-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10 mt-1">
                {skill.proficiency}%
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .animate-pulse {
            animation: pulse 2s ease-in-out infinite;
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};

export default Skill;