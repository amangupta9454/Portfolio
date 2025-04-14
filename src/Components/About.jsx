import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import heroImage from "../assets/heroImage.png";

const About = () => {
  const [headingRef, headingInView] = useInView({ threshold: 0.3, triggerOnce: false });
  const [textRef, textInView] = useInView({ threshold: 0.3, triggerOnce: false });
  const [imageRef, imageInView] = useInView({ threshold: 0.3, triggerOnce: false });
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 400 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        d: Math.random() * 1.5 + 0.5,
        twinkle: Math.random() * 0.4 + 0.6,
        shape: Math.random() < 0.33 ? "circle" : Math.random() < 0.66 ? "square" : "triangle",
      }));
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        if (star.shape === "triangle") {
          ctx.beginPath();
          ctx.moveTo(star.x, star.y - star.r);
          ctx.lineTo(star.x - star.r, star.y + star.r);
          ctx.lineTo(star.x + star.r, star.y + star.r);
          ctx.closePath();
          ctx.fill();
        } else if (star.shape === "square") {
          ctx.rect(star.x - star.r, star.y - star.r, star.r * 2, star.r * 2);
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${star.twinkle})`;
        ctx.fill();
        star.twinkle += Math.random() * 0.08 - 0.04;
        star.twinkle = Math.max(0.6, Math.min(1, star.twinkle));
      });
    };

    const animateStars = () => {
      stars.forEach((star) => {
        star.y += star.d; // Increased speed
        if (star.y > canvas.height) {
          star.y = -star.r;
          star.x = Math.random() * canvas.width;
        }
      });
      drawStars();
      animationFrameId = requestAnimationFrame(animateStars);
    };

    resizeCanvas();
    animateStars();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen md:min-h-10 flex items-center justify-center px-4 py-16 md:py-24 bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white overflow-hidden"
    >
      {/* Starry Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-80"
      />

      {/* Enhanced Glowing Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-gradient-to-br from-purple-800/50 to-indigo-700/50 rounded-full mix-blend-overlay blur-2xl opacity-25 animate-pulse-slow z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-gradient-to-tl from-cyan-600/50 to-teal-500/50 rounded-full mix-blend-overlay blur-2xl opacity-25 animate-pulse-slow z-0"></div>

      {/* Main Container */}
      <div className="z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div
          ref={textRef}
          className={`relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-xl space-y-5 transform transition-all duration-700 ease-out ${
            textInView ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
          }`}
        >
          {/* Neon glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600/30 to-indigo-600/30 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition duration-500"></div>

          <h2
            ref={headingRef}
            className={`relative text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-400 text-transparent bg-clip-text transition-all duration-700 ease-out ${
              headingInView ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            About Me
            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-300 to-indigo-400 rounded-full animate-pulse"></span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-200 tracking-wide">
            👋 I'm{" "}
            <span className="text-cyan-300 font-semibold hover:text-cyan-100 transition-colors duration-300">
              Aman Gupta
            </span>
            , a dedicated MERN Stack Developer with a passion for creating seamless, full-stack solutions that shine. From sleek UIs to scalable backends — I’ve got it covered.
          </p>
          <p className="text-sm md:text-base text-gray-300">
            🚀 Currently experimenting with{" "}
            <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors duration-300">
              AI integrations
            </span>
            , and counting down to a deep dive into{" "}
            <span className="text-yellow-300 font-medium hover:text-yellow-200 transition-colors duration-300">
              Blockchain
            </span>{" "}
            in June 2025. The journey never stops!
          </p>
          <div className="text-xs md:text-sm text-gray-400 italic border-t border-gray-600/50 pt-3 tracking-wider">
            "Code is my canvas, and innovation is my brush."
          </div>
        </div>

        {/* Image Section */}
        <div
          ref={imageRef}
          className={`flex justify-center items-center transition-all duration-700 ease-out ${
            imageInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"
          }`}
        >
          <div className="relative w-44 sm:w-52 md:w-60 lg:w-64 group transform transition duration-500 hover:scale-105">
            {/* Subtle gradient glow */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-indigo-500/70 via-purple-500/70 to-pink-500/70 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition duration-400"></div>
            <img
              src={heroImage}
              alt="Aman Gupta - MERN Developer"
              className="relative w-full h-auto aspect-square rounded-full border border-red-700/50 shadow-xl object-cover"
              loading="lazy"
            />
            {/* Minimal reflective shadow */}
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-28 h-4 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 blur-lg opacity-40 rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 8 + 4}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default About;