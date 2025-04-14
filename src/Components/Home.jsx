import { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaDownload} from "react-icons/fa";
import Typed from "typed.js";
import HeroImage from "../assets/coder-image.png";
import ScrollReveal from "scrollreveal";
import VanillaTilt from "vanilla-tilt"; 
const Home = () => {
  const typedRef = useRef(null);
  const imageRef = useRef(null);
  const [greeting, setGreeting] = useState("");
  const [isDarkTheme] = useState(true);
  const [downloadCount, setDownloadCount] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const canvasRef = useRef(null);
  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening");
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    const progressInterval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    const typed = new Typed(typedRef.current, {
      strings: [
        "I am a Full Stack Web Developer",
        "Aspiring Software Engineer",
        "Passionate Code Crafter",
        "Creative Problem Solver"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    });
    const sr = ScrollReveal();
    sr.reveal(".sr-fade", {
      origin: "bottom",
      distance: "50px",
      duration: 1200,
      delay: 200,
      reset: true,
      opacity: 0,
      easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"
    });
    sr.reveal(".sr-left", {
      origin: "left",
      distance: "80px",
      duration: 1200,
      delay: 300,
      reset: true,
      opacity: 0,
      easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"
    });
    sr.reveal(".sr-right", {
      origin: "right",
      distance: "80px",
      duration: 1200,
      delay: 300,
      reset: true,
      opacity: 0,
      easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"
    });
    if (imageRef.current) {
      VanillaTilt.init(imageRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let w = (canvas.width = window.innerWidth);
      let h = (canvas.height = window.innerHeight);
      const particles = Array.from({ length: 150 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
        color: `hsl(${Math.random() * 360}, 70%, ${isDarkTheme ? 80 : 60}%)`,
        glow: 0
      }));
      let mouse = { x: null, y: null };
      const animateParticles = () => {
        ctx.clearRect(0, 0, w, h);
        const gradient = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w);
        gradient.addColorStop(0, isDarkTheme ? "#0d0d26" : "#e6f3ff");
        gradient.addColorStop(1, isDarkTheme ? "#000000" : "#b3d9ff");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
        particles.forEach((particle, i) => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.shadowBlur = particle.glow;
          ctx.shadowColor = particle.color;
          ctx.fill();
          if (mouse.x && mouse.y) {
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) {
              particle.dx += dx * 0.02;
              particle.dy += dy * 0.02;
              particle.glow = Math.min(20, 20 - distance / 10);
            } else {
              particle.glow = Math.max(0, particle.glow - 0.5);
            }
          }
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particle.x - particles[j].x;
            const dy = particle.y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${isDarkTheme ? "255, 255, 255" : "0, 0, 0"}, ${1 - distance / 100})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
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
        typed.destroy();
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);
        clearInterval(progressInterval);
        clearInterval(timeInterval);
      };
    }
  }, [isDarkTheme]);
  const handleDownload = () => setDownloadCount(prev => prev + 1);
  return (
    <section id="home"className={`relative min-h-screen md:min-h-[30vh] flex flex-col items-center justify-center px-4 py-16 overflow-hidden`} >
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div  className={`h-full ${isDarkTheme ? 'bg-gradient-to-r from-purple-600 to-indigo-700' : 'bg-gradient-to-r from-blue-400 to-cyan-500'}`} style={{ width: `${loadProgress}%`, transition: 'width 0.2s ease' }} />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>
      <div className={`absolute w-[300px] h-[300px] ${isDarkTheme ? 'bg-gradient-to-r from-purple-700 to-pink-500' : 'bg-gradient-to-r from-blue-300 to-cyan-400'} rounded-full blur-[180px] opacity-20 top-[-80px] left-[-80px] animate-[spin_15s_linear_infinite]`}></div>
      <div className={`absolute w-[250px] h-[250px] ${isDarkTheme ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : 'bg-gradient-to-r from-pink-300 to-purple-400'} rounded-full blur-[180px] opacity-20 bottom-[-80px] right-[-80px] animate-[spin_12s_linear_infinite_reverse]`}></div>

      <div className="z-0 max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 sr-fade">
        {/* Text Section */}
        <div className={`w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start p-8 md:p-10 rounded-3xl border ${isDarkTheme ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'} backdrop-blur-md shadow-2xl hover:scale-[1.03] transition duration-500 hover:shadow-yellow-400/30 sr-left`}>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text ${isDarkTheme ? 'bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-100' : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'} drop-shadow-xl animate-jump-text`}>
            {greeting}, I'm Aman Gupta
          </h1>
          <p className={`${isDarkTheme ? 'text-green-400' : 'text-blue-600'} text-lg md:text-3xl lg:text-3xl font-semibold mt-4`}>
            <span ref={typedRef}></span>
          </p>

          {/* Live Clock */}
          <div className={`mt-4 text-sm md:text-lg ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
            Current Time: 
            <span className="ml-2 font-mono">
              {currentTime.split(":").map((part, index) => (
                <span key={index} className="inline-block animate-[clockTick_1s_infinite] mx-0.5">
                  {part}
                </span>
              ))}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
            <a
              href="/resume.pdf"
              download
              onClick={handleDownload}
              className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-lg ${isDarkTheme ? 'text-white bg-gradient-to-r from-purple-600 to-indigo-700' : 'text-black bg-gradient-to-r from-blue-400 to-cyan-500'} transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]`}
            >
              <FaDownload className="group-hover:animate-bounce" />
              Resume {downloadCount > 0 && `(${downloadCount})`}
            </a>
           
            <a
              href="https://linkedin.com/in/amangupta9454"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-lg ${isDarkTheme ? 'text-white bg-gradient-to-r from-sky-500 to-cyan-600' : 'text-black bg-gradient-to-r from-cyan-400 to-sky-500'} transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]`}
            >
              <FaLinkedin className="group-hover:animate-bounce" />
              LinkedIn
            </a>
           
          </div>
        </div>

        {/* Image Section with 3D Tilt */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative sr-right">
          <div className={`absolute w-[420px] h-[420px] ${isDarkTheme ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500' : 'bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300'} rounded-full blur-3xl opacity-40 animate-[spin_25s_linear_infinite]`}></div>
          <div ref={imageRef} className="relative z-0">
            <img
              src={HeroImage}
              alt="Aman Gupta"
              className="max-h-[400px] w-auto rounded-[30px] shadow-2xl transition duration-500"
            />
          </div>
        </div>
      </div>


     
      <style>
        {`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px) scale(0.95); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes slide-in-left {
            0% { opacity: 0; transform: translateX(-30px) rotate(-5deg); }
            100% { opacity: 1; transform: translateX(0) rotate(0deg); }
          }
          @keyframes slide-in-right {
            0% { opacity: 0; transform: translateX(30px) rotate(5deg); }
            100% { opacity: 1; transform: translateX(0) rotate(0deg); }
          }
          @keyframes jump-text {
            0% { transform: translateY(0) scale(1); }
            20% { transform: translateY(-15px) scale(1.05); }
            40% { transform: translateY(0) scale(1); }
            60% { transform: translateY(-8px) scale(1.03); }
            100% { transform: translateY(0) scale(1); }
          }
          @keyframes glow {
            0% { box-shadow: 0 0 5px rgba(255,255,255,0.2); }
            50% { box-shadow: 0 0 20px rgba(255,255,255,0.5); }
            100% { box-shadow: 0 0 5px rgba(255,255,255,0.2); }
          }
          @keyframes clockTick {
            0% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
            100% { transform: translateY(0); }
          }
          @keyframes scrollBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
          }
          .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
          .animate-slide-in-left { animation: slide-in-left 1s ease-out; }
          .animate-slide-in-right { animation: slide-in-right 1s ease-out; }
          .animate-jump-text { animation: jump-text 2s ease-in-out infinite; }
          .animate-bounce { animation: bounce 0.5s ease infinite; }
          .animate-glow { animation: glow 2s ease-in-out infinite; }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `}
      </style>
    </section>
  );
};

export default Home;