import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import VanillaTilt from "vanilla-tilt"; // Install: npm install vanilla-tilt

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Development Internship",
      company: "CodSoft",
      duration: "10 Sep 2024 - 10 Oct 2024",
      description:
        "Enhanced web development skills by building dynamic and responsive web pages using HTML, CSS, and JavaScript.",
    },
    {
      id: 2,
      title: "Frontend Web Development Internship",
      company: "CodeAlpha",
      duration: "15 Sep 2024 - 15 Oct 2024",
      description:
        "Built advanced websites focusing on user experience and clean, maintainable code.",
    },
    {
      id: 3,
      title: "Python Internship",
      company: "CodeAlpha",
      duration: "15 Sep 2024 - 15 Oct 2024",
      description:
        "Applied Python for projects including automation and data analysis tasks.",
    },
  ];

  const tiltRefs = useRef([]);

  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      distance: "100px",
      duration: 1400,
      delay: 400,
      reset: true,
    });

    sr.reveal(".timeline-item-left", { origin: "left", easing: "cubic-bezier(0.5, 0, 0, 1)" });
    sr.reveal(".timeline-item-right", { origin: "right", easing: "cubic-bezier(0.5, 0, 0, 1)" });
    sr.reveal(".section-title", { origin: "top", distance: "60px" });

    // Initialize VanillaTilt
    tiltRefs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 15, // Maximum tilt rotation (degrees)
          speed: 400, // Speed of the tilt effect
          glare: true, // Enable glare effect
          "max-glare": 0.1, // Maximum glare opacity
          scale: 1.02, // Slight scale-up on tilt
        });
      }
    });

    // Cleanup tilt on unmount
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
      className="w-full min-h-screen md:min-h-3 bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white py-20 overflow-hidden relative"
    >
      {/* Floating Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const particles = ["•", "✦", "△", "◇", "□"];
          const randomParticle = particles[Math.floor(Math.random() * particles.length)];
          return (
            <div
              key={i}
              className="absolute text-indigo-400 opacity-25 animate-drift"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 15 + 10}px`,
                animationDuration: `${Math.random() * 15 + 8}s`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            >
              <span>{randomParticle}</span>
            </div>
          );
        })}
      </div>

      <div className="max-w-screen-xl p-8 mx-auto flex flex-col justify-center w-full relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-20 section-title">
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
            Experience
          </h2>
          <p className="py-5 text-xl text-indigo-200 font-light tracking-wider text-center max-w-3xl">
            Explore my professional evolution through an interactive timeline
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Gradient Line with Glow */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-indigo-500 via-purple-600 to-pink-600 h-full rounded-full shadow-[0_0_20px_rgba(99,102,241,0.7)]"></div>

          {experiences.map(({ id, title, company, duration, description }, index) => (
            <div
              key={id}
              className={`mb-20 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Empty Space for Alignment */}
              <div className="w-5/12 hidden md:block"></div>

              {/* Timeline Card with VanillaTilt */}
              <div
                ref={(el) => (tiltRefs.current[index] = el)}
                className={`w-full md:w-5/12 p-8 bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-2xl shadow-2xl border border-indigo-500/30 hover:border-indigo-500 transition-all duration-300 ${
                  index % 2 === 0 ? "timeline-item-left" : "timeline-item-right"
                }`}
              >
                <div className="relative">
                  
                  <h3 className="text-3xl font-semibold text-indigo-300 mb-4 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-lg text-gray-200 mb-3">
                    <strong className="text-white font-medium">Company:</strong> {company}
                  </p>
                  <p className="text-lg text-gray-200 mb-4">
                    <strong className="text-white font-medium">Duration:</strong> {duration}
                  </p>
                  <p className="text-base text-gray-300 leading-relaxed tracking-wide">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for Animations */}
      <style>{`
  @keyframes drift {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.25;
    }
    50% {
      transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) scale(1.1);
      opacity: 0.4;
    }
  }
  .animate-drift {
    animation: drift infinite ease-in-out;
  }
  @media (max-width: 768px) {
    .timeline-item-left,
    .timeline-item-right {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
    .absolute.left-1/2 {
      left: 2rem;
    }
    .absolute.w-6 {
      left: 0.75rem;
    }
    .absolute.w-10 {
      left: 2rem;
      width: 1.5rem;
    }
  }
`}</style>

    </div>
  );
};

export default Experience;