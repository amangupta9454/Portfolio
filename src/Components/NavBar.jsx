import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" }, // Keep this as #skills
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Qualifications", href: "#qualifications" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // Navbar entrance animation
    gsap.fromTo(
      ".navbar",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    // Stagger nav links
    gsap.fromTo(
      ".nav-link",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.6,
        ease: "power2.out",
      }
    );

    // Mobile menu animation
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log(`Element with ID ${href} not found`); // Debug log
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar fixed top-0 w-full bg-gradient-to-r from-gray-900/95 via-blue-950/95 to-gray-900/95 backdrop-blur-xl text-white px-6 py-5 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="container lg:mx-auto md:mx-3 flex justify-between items-center">
        {/* Logo/Name */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
  <a
    href="#home"
    onClick={(e) => handleScroll(e, "#home")}
    className="relative group"
  >
    <span
      className="bg-clip-text text-transparent bg-gradient-to-r from-pink-700 via-teal-300 to-blue-400 group-hover:animate-gradient bg-[length:200%_100%] lg:mr-3 md:mr-4 md:ml-3 transition-colors duration-300"
      style={{ fontFamily: "'Cedarville Cursive', cursive" }}
    >
      PORTFOLIO
    </span>
    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-teal-300 group-hover:w-full transition-all duration-500 rounded-full" />
  </a>
</h1>


        {/* Desktop Menu */}
        <ul className="hidden md:flex lg:gap-12 md:gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="nav-link relative text-lg font-semibold tracking-wider text-gray-200 transition-all duration-400 group hover:text-white hover:scale-110 transform hover:drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-teal-400 to-blue-400 group-hover:w-full transition-all duration-400 ease-out rounded-full" />
                <span className="absolute top-1/2 -left-3 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all duration-400 scale-0 group-hover:scale-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-3xl text-gray-200 hover:text-teal-400 transition-all duration-300 focus:outline-none relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="animate-spin-once" />
          ) : (
            <FaBars className="animate-pulse-once" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-gray-900/95 via-blue-950/95 to-gray-900/95 text-white px-8 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.6)] rounded-b-3xl border-t border-gray-800/40 backdrop-blur-xl"
        >
          <ul className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="nav-link block text-xl font-semibold tracking-wider text-gray-200 hover:text-white transition-all duration-400 py-3 relative group transform hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-teal-400/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;