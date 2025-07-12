import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import VanillaTilt from "vanilla-tilt";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Development Internship",
      company: "CodSoft",
      duration: "10 Sep 2024 - 10 Oct 2024",
      description:
        "Built dynamic, responsive web pages using HTML, CSS, and JavaScript, enhancing web development skills.",
    },
    {
      id: 2,
      title: "Frontend Web Development Internship",
      company: "CodeAlpha",
      duration: "15 Sep 2024 - 15 Oct 2024",
      description:
        "Developed advanced websites with a focus on user experience and maintainable code.",
    },
    {
      id: 3,
      title: "Python Internship",
      company: "CodeAlpha",
      duration: "15 Sep 2024 - 15 Oct 2024",
      description:
        "Utilized Python for automation and data analysis projects, improving efficiency.",
    },
  ];

  const tiltRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "100px",
      duration: 1400,
      delay: 400,
      reset: true,
    });

    sr.reveal(".experience-card", { origin: "left", easing: "cubic-bezier(0.5, 0, 0, 1)" });
    sr.reveal(".section-title", { origin: "top", distance: "60px" });

    tiltRefs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.1,
          scale: 1.02,
        });
      }
    });

    const gradients = sectionRef.current.querySelectorAll(".gradient-overlay");
    gradients.forEach((gradient, index) => {
      const animateGradient = () => {
        gradient.style.opacity = 0.25 + Math.sin(Date.now() * 0.001 + index) * 0.1;
        gradient.style.transform = `scale(${1 + Math.sin(Date.now() * 0.0005 + index) * 0.1})`;
        requestAnimationFrame(animateGradient);
      };
      animateGradient();
    });

    return () => {
      tiltRefs.current.forEach((ref) => {
        if (ref && ref.vanillaTilt) {
          ref.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <div
      id="experience"
      ref={sectionRef}
      className="w-full min-h-[50vh] bg-gradient-to-br from-gray-900 to-gray-950 text-white py-8 px-4 overflow-hidden relative"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => {
          const particles = ["•", "✦", "△", "◇", "□"];
          const randomParticle = particles[Math.floor(Math.random() * particles.length)];
          return (
            <div
              key={i}
              className="absolute text-cyan-200 opacity-25 animate-drift"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 12 + 8}px`,
                animationDuration: `${Math.random() * 12 + 6}s`,
                animationDelay: `${Math.random() * 5}s`,
                filter: "blur(1px)",
              }}
            >
              <span>{randomParticle}</span>
            </div>
          );
        })}
        <div className="gradient-overlay w-[400px] h-[400px] bg-gradient-to-r from-cyan-700 to-purple-600 rounded-full blur-[120px] opacity-25 top-[15%] left-[20%]"></div>
        <div className="gradient-overlay w-[300px] h-[300px] bg-gradient-to-r from-pink-600 to-blue-600 rounded-full blur-[120px] opacity-25 bottom-[10%] right-[15%]"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col justify-center w-full relative z-10">
        <div className="flex flex-col items-center mb-6 section-title">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
            Experience
          </h2>
          <p className="mt-2 text-base text-gray-300 font-light tracking-wider text-center">
            My journey in tech internships
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map(({ id, title, company, duration, description }, index) => (
            <div
              key={id}
              ref={(el) => (tiltRefs.current[index] = el)}
              className="experience-card bg-gray-900/95 rounded-xl p-8 shadow-lg border-2 border-gradient-to-r from-cyan-500 to-purple-700 hover:shadow-[0_0_25px_rgba(147,51,234,0.9)] transition-all duration-300 min-h-[240px] relative group hover:scale-105"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-600/30 via-transparent to-transparent opacity-60 rounded-xl"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-purple-700 rounded-t-xl group-hover:animate-pulse-bar"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mt-4 mb-3">
                  {title}
                </h3>
                <p className="text-lg text-gray-200 mb-2 flex items-center gap-2">
                  <FaBriefcase className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <strong className="text-white font-medium">Company:</strong> {company}
                </p>
                <p className="text-lg text-gray-200 mb-3 flex items-center gap-2">
                  <FaCalendarAlt className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <strong className="text-white font-medium">Duration:</strong> {duration}
                </p>
                <p className="text-base text-gray-300 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.25;
          }
          50% {
            transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) scale(1.1);
            opacity: 0.35;
          }
        }
        @keyframes pulse-bar {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-drift {
          animation: drift infinite ease-in-out;
        }
        .border-gradient-to-r {
          border-image: linear-gradient(to right, #22d3ee, #a855f7) 1;
        }
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        .group:hover .group-hover\\:animate-pulse-bar {
          animation: pulse-bar 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Experience;