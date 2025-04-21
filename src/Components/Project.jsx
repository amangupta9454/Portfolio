import React, { useEffect, useRef } from "react";
import healthImage from "../assets/health.jpeg";
import calculatorImage from "../assets/calculator.jpeg";
import techImage from "../assets/techclub.jpg";
import { gsap } from "gsap";
import ScrollReveal from "scrollreveal";
import VanillaTilt from "vanilla-tilt";
import { FaCode, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const Projects = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      id: 1,
      name: "Aman Healthcare Website",
      description: "A sleek healthcare platform with responsive design and smooth animations.",
      image: healthImage,
      sourceCode: "https://github.com/amangupta9454/mini_project",
      livePreview: "https://amanhealthcare.netlify.app/",
      tags: ["HTML", "CSS", "JavaScript"],
      featured: true,
    },
    {
      id: 2,
      name: "Advanced Calculator",
      description: "A fully functional college technical fest website with modern UI and custom features.",
      image: calculatorImage,
      sourceCode: "https://github.com/amangupta9454/technical_fest",
      livePreview: "https://crossroadhiet.netlify.app/",
      tags: ["REACT.JS", "TAILWIND CSS", "MONGODB", "EXPRESS.JS", "NODE.JS",],
      featured: false,
    },
    {
      id: 3,
      name: "Tech Club Portal",
      description: "A fully functional college technical club website with modern UI and custom features.",
      image: techImage,
      sourceCode: "https://github.com/amangupta9454/Technical_club",
      livePreview: "https://techfusion2024.netlify.app/",
      tags: ["React", "TailwindCSS", "Animations"],
      featured: true,
    },
  ];

  useEffect(() => {
    // ScrollReveal Configuration
    const sr = ScrollReveal({
      distance: "120px",
      duration: 1800,
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      reset: true,
      viewFactor: 0.3,
      mobile: true,
    });

    sr.reveal(headingRef.current, {
      origin: "top",
      delay: 200,
      scale: 0.85,
      opacity: 0,
    });

    cardsRef.current.forEach((card, index) => {
      sr.reveal(card, {
        origin: index % 2 === 0 ? "left" : "right",
        delay: 400 + index * 300,
        rotate: { x: 0, y: 0, z: index % 2 === 0 ? -10 : 10 },
        opacity: 0,
      });

      if (card) {
        VanillaTilt.init(card, {
          max: 3,
          speed: 600,
         
          glare: true,
          "max-glare": 0.5,
          
        });
      }
    });

    // Floating Shapes Animation
    const shapes = sectionRef.current.querySelectorAll(".float-shape");
    shapes.forEach((shape, index) => {
      gsap.to(shape, {
        x: () => Math.sin(index) * 250,
        y: () => Math.cos(index) * 250,
        rotation: () => Math.random() * 180 - 90,
        scale: () => Math.random() * 0.5 + 0.8,
        duration: () => Math.random() * 4 + 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5,
      });
    });
  }, []);

  return (
    <div
      id="projects"
      ref={sectionRef}
      className="relative w-full min-h-screen md:min-h-10 py-24 px-8 text-white bg-gradient-to-br from-gray-900 via-black to-purple-950 overflow-hidden"
    >
      {/* Floating Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="float-shape w-48 h-48 bg-purple-700/25 rounded-full absolute top-[15%] left-[20%] blur-3xl" />
        <div className="float-shape w-72 h-72 bg-blue-700/25 absolute bottom-[25%] right-[15%] clip-path-pentagon blur-3xl" />
        <div className="float-shape w-36 h-36 bg-pink-700/25 absolute top-[60%] left-[70%] clip-path-hexagon blur-2xl" />
        <div className="float-shape w-28 h-28 bg-yellow-500/20 absolute top-[30%] right-[10%] clip-path-star blur-2xl" />
        <div className="float-shape w-32 h-32 bg-green-500/20 absolute bottom-[15%] left-[10%] rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto">
        <div className="text-center mb-20">
          <h2
            ref={headingRef}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent border-b-4 border-purple-500 inline-block pb-4 animate-pulse-slow"
          >
            Projects
          </h2>
          <br />
          <p className="pt-6 text-gray-200 text-xl font-light tracking-wider bg-black/50 px-4 py-2 rounded-full inline-block">
            Discover my creative journey through code
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {projects.map(({ id, name, description, image, sourceCode, livePreview, tags, featured }, index) => (
            <div
              key={id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-purple-500/30 hover:border-purple-600 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-500 relative overflow-hidden cursor-pointer"
            >
              {/* Card Background Effect */}
              <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-700/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />

              {/* Featured Badge */}
              {featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <FaStar /> Featured
                </div>
              )}

              {/* Image */}
              <div className="relative z-10 overflow-hidden rounded-xl transition-transform duration-700 group-hover:scale-105">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-60 object-cover rounded-xl shadow-md transition-all duration-500 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>

              {/* Content */}
              <div className="mt-6 z-10 relative">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-600 transition-all duration-300">
                  {name}
                </h3>
                <p className="mt-3 text-gray-300 font-medium leading-relaxed">{description}</p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/40 group-hover:bg-purple-500/40 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4 flex-wrap">
                  <a
                    href={sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-full font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <FaCode /> Source
                  </a>
                  <a
                    href={livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Shape CSS */}
      <style>{`
  .clip-path-pentagon {
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  }
  .clip-path-hexagon {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }
  .clip-path-star {
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
  }
  .animate-pulse-slow {
    animation: pulse 4s infinite ease-in-out;
  }
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.85;
    }
  }
`}</style>
    </div>
  );
};

export default Projects;