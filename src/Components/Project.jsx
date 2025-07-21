import React, { useEffect, useRef, useState } from "react";
import Image from "../assets/image.png";
import calculatorImage from "../assets/calculator.jpeg";
import agri from "../assets/agri.jpg";
import health from "../assets/health.jpeg";
import coach from "../assets/coach.jpg";
import { FaCode, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const Projects = () => {
  const sectionRef = useRef(null);
  const [isDarkTheme] = useState(true);

  const projects = [
    {
      id: 1,
      name: "AI CAREER COACH WEBSITE",
      description: "Developed an AI-powered career coach web app using MERN stack and Gemini API for personalized roadmaps and resume generation.",
      image: coach,
      sourceCode: "https://github.com/amangupta9454/AI_TUTOR",
      livePreview: "https://mindstep.netlify.app/",
      tags: ["REACT.JS", "TAILWIND CSS", "MONGODB", "EXPRESS.JS", "NODE.JS", "GEMINI API"],
      featured: true,
    },
    {
      id: 2,
      name: "FARMIO-Local Roots, Fresh Routes",
      description: "A fully functional FARMER-CONSUMER AGRICULTURE website with modern UI and custom features.",
      image: agri,
      sourceCode: "https://github.com/amangupta9454/FARMER-CONSUMER-MARKER",
      livePreview: "https://agrifarmio.netlify.app/",
      tags: ["REACT.JS", "TAILWIND CSS", "MONGODB", "EXPRESS.JS", "NODE.JS", "OPENAI API", "DATA.GOV API"],
      featured: true,
    },
    {
      id: 3,
      name: "AI-POWERED HEALTHCARE APPOINTMENT SYSTEM",
      description: "A fully functional AI-powered healthcare appointment system with modern UI and custom features.",
      image: health,
      sourceCode: "https://github.com/amangupta9454/AI_HEALTHCARE",
      livePreview: "https://amanhealth.netlify.app/",
      tags: ["REACT.JS", "TAILWIND CSS", "MONGODB", "EXPRESS.JS", "NODE.JS", "OPENAI API", "NODEMAILER", "GEMINI API"],
      featured: true,
    },
    {
      id: 4,
      name: "TECH FEST REGISTRATION WEBSITE",
      description: "A fully functional college technical fest website with modern UI and custom features.",
      image: calculatorImage,
      sourceCode: "https://github.com/amangupta9454/CROSSROAD_2025",
      livePreview: "https://crossroad2025.netlify.app/",
      tags: ["REACT.JS", "TAILWIND CSS", "MONGODB", "EXPRESS.JS", "NODE.JS"],
      featured: false,
    },
    
    {
      id: 5,
      name: "TEAMUP PLATFORM FOR HACKATHON ENTHUSIASTS",
      description: "A fully functional Teamup platform website with modern UI and custom features.",
      image: Image,
      sourceCode: "https://github.com/amangupta9454/college",
      livePreview: "https://hietteam.netlify.app/",
      tags: ["MERN STACK"],
      featured: false,
    },
    
  ];

  useEffect(() => {
    const gradients = sectionRef.current.querySelectorAll(".gradient-overlay");
    gradients.forEach((gradient, index) => {
      const animateGradient = () => {
        gradient.style.opacity = 0.2 + Math.sin(Date.now() * 0.001 + index) * 0.1;
        gradient.style.transform = `scale(${1 + Math.sin(Date.now() * 0.0005 + index) * 0.1})`;
        requestAnimationFrame(animateGradient);
      };
      animateGradient();
    });
  }, []);

  return (
    <div
      id="projects"
      ref={sectionRef}
      className="relative w-full min-h-screen md:min-h-10 py-16 px-6 text-white bg-[#0e0d26] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`gradient-overlay w-[400px] h-[400px] ${isDarkTheme ? 'bg-gradient-to-r from-purple-700 to-pink-500' : 'bg-gradient-to-r from-blue-300 to-cyan-400'} rounded-full blur-[150px] opacity-20 top-[10%] left-[15%]`}></div>
        <div className={`gradient-overlay w-[300px] h-[300px] ${isDarkTheme ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : 'bg-gradient-to-r from-pink-300 to-purple-400'} rounded-full blur-[150px] opacity-20 bottom-[10%] right-[15%]`}></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="mt-2 text-gray-200 text-lg font-light tracking-wider">
            Discover my creative journey through code
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(({ id, name, description, image, sourceCode, livePreview, tags, featured }) => (
            <div
              key={id}
              className="group bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-purple-500/50 hover:border-purple-600/80 hover:shadow-[0_0_20px_rgba(147,51,234,0.6)] transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-700/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none" />

              {featured && (
                <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 animate-pulse">
                  <FaStar className="text-sm" /> Featured
                </div>
              )}

              <div className="relative z-10 overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-102">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-56 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>

              <div className="mt-4 z-10 relative">
                <h3 className="text-xl font-bold bg-gradient-to-r from-white via-purple-300 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-600 transition-all duration-300">
                  {name}
                </h3>
                <p className="mt-2 text-gray-300 text-sm font-medium leading-relaxed">{description}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-purple-500/30 text-purple-200 rounded-full border border-purple-500/50 group-hover:bg-purple-500/50 group-hover:border-purple-600/70 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-3 flex-wrap">
                  <a
                    href={sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <FaCode /> Source
                  </a>
                  <a
                    href={livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-pulse {
          animation: pulse 3s infinite ease-in-out;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .gradient-overlay {
          transition: opacity 1s ease-in-out, transform 3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Projects;