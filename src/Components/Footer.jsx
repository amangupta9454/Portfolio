import React, { useEffect } from "react";
import {
  FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaWhatsapp, FaArrowUp
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import gsap from "gsap";

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      ".scroll-up-btn",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 2.5 }
    );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-200 py-16 relative overflow-hidden">
      {/* Ambient animated blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_2px,transparent_2px)] bg-[size:40px_40px] opacity-25 animate-bg-shift"></div>
      <div className="absolute top-0 left-0 w-56 h-56 bg-cyan-500/15 rounded-full blur-3xl animate-orbit-slow"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-orbit-slow animation-delay-2000"></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.05)_50%,transparent_75%)] bg-[size:60px_60px] animate-bg-flow"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/90"></div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="scroll-up-btn fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow-xl hover:scale-110 transition-transform duration-300 group"
      >
        <FaArrowUp size={24} className="group-hover:animate-bounce" />
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-full animate-sweep"></span>
      </button>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Branding */}
        <div className="flex flex-col items-start space-y-6 animate-fade-in-up">
          <h2 className="text-5xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 relative animate-gradient">
            Aman's Portfolio
            <span className="absolute -top-4 -right-4 text-sm text-cyan-400 animate-spin-slow">🌟</span>
           
          </h2>
          <p className="text-base italic max-w-xs font-light relative text-gray-300">
            "Crafting digital dreams with code & vision."
            <span className="absolute -bottom-2 -left-2 text-xs text-purple-400 animate-float">💡</span>
          </p>
          <div className="relative w-40 h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-expand shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-white/40 animate-shimmer"></div>
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent to-cyan-500/50 animate-sweep"></div>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center space-y-8 animate-fade-in-up animation-delay-200">
          <h3 className="text-3xl font-bold text-white relative">
            Connect with Me
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-pulse shadow-xl shadow-blue-500/40"></span>
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm text-cyan-400 animate-bounce">🔗</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { Icon: FaWhatsapp, href: "https://wa.me/9560472926", hover: "green" },
              { Icon: FaGithub, href: "https://github.com/amangupta9454", hover: "gray" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/amangupta9454/", hover: "blue" },
              { Icon: SiLeetcode, href: "https://leetcode.com/amangupta9454", hover: "yellow" },
              { Icon: FaInstagram, href: "https://www.instagram.com/gupta_aman_9161/", hover: "pink" },
              { Icon: FaTelegram, href: "https://telegram.me/amangupta20053", hover: "blue" },
            ].map(({ Icon, href, hover }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full bg-gray-900/90 border border-gray-700/70 text-white group hover:-translate-y-3 hover:ring-2 hover:ring-${hover}-500/60 transition-all duration-300 relative overflow-hidden`}
              >
                <Icon size={36} className="group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-500"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col items-end text-right animate-fade-in-up animation-delay-400">
          <h3 className="text-3xl font-bold text-white mb-6 relative">
            Address
            <span className="absolute -bottom-4 right-0 w-28 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-pulse shadow-xl shadow-purple-500/40"></span>
            <span className="absolute -top-6 right-0 text-sm text-purple-400 animate-float">📍</span>
          </h3>
          <div className="text-sm text-gray-300 leading-relaxed bg-gray-900/80 p-6 rounded-xl border border-gray-700/50 shadow-2xl hover:bg-gray-900/95 hover:border-cyan-500/60 hover:-translate-y-2 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-slide-fast"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-purple-500/15 rounded-full blur-md animate-pulse-slow"></div>
            <span className="block font-medium tracking-wider relative z-10">Vill: Jashara</span>
            <span className="block font-medium tracking-wider relative z-10">Post: Sachui</span>
            <span className="block font-medium tracking-wider relative z-10">District: Mau</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-gray-400 text-sm border-t border-gray-800/60 pt-6 max-w-screen-2xl mx-auto animate-fade-in-up animation-delay-600 relative">
        <p className="relative inline-block font-mono tracking-wide">
          © {new Date().getFullYear()} Aman Gupta
          <span className="absolute -top-4 -right-6 text-lg text-cyan-400 animate-spin-slow">💾</span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></span>
        </p>
        <p className="mt-3 text-xs text-gray-500 font-mono tracking-widest animate-text-glow">
          [ Dream / Code / Conquer ]
        </p>
      </div>
    </footer>
  );
};

export default Footer;