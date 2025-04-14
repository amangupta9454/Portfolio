import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ScrollReveal from "scrollreveal";
import VanillaTilt from "vanilla-tilt";

const Contact = () => {
  const formRef = useRef();
  const cardRef = useRef();

  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "80px",
      duration: 1500,
      delay: 200,
    });

    ScrollReveal().reveal(".contact-heading", { origin: "top" });
    ScrollReveal().reveal(".contact-info", { origin: "left" });
    ScrollReveal().reveal(".contact-form", { origin: "bottom" });

    VanillaTilt.init(cardRef.current, {
      max: 3,
      speed: 300,
      glare: true,
      "max-glare": 0.2,
    });

    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    let trail = [];
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      const trailDot = document.createElement("div");
      trailDot.className = "cursor-trail";
      trailDot.style.left = `${e.clientX}px`;
      trailDot.style.top = `${e.clientY}px`;
      document.body.appendChild(trailDot);

      trail.push(trailDot);
      if (trail.length > 10) {
        const oldDot = trail.shift();
        oldDot.remove();
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
      trail.forEach((dot) => dot.remove());
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_API
      )
      .then(() => {
        alert("Thank you for contacting us! We’ll get back to you soon.");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error.text);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <div
      id="contact"
      className="relative w-full min-h-screen md:min-h-4 text-white py-20 overflow-hidden bg-gray-900"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const shapes = [
            { type: "circle", size: Math.random() * 40 + 30 },
            { type: "triangle", size: Math.random() * 30 + 20 },
            { type: "hexagon", size: Math.random() * 35 + 25 },
          ];
          const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
          return (
            <div
              key={i}
              className={`absolute shape-${randomShape.type} animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${randomShape.size}px`,
                height: `${randomShape.size}px`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.5,
              }}
            />
          );
        })}
      </div>

      <div className="absolute inset-0 z-10 bg-gray-900 bg-opacity-30 backdrop-blur-sm" />

      <div className="relative z-20 max-w-6xl px-8 mx-auto">
        <div className="mb-16 text-center contact-heading">
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Contact Me
          </h2>
          <div className="w-32 h-1 mx-auto mt-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse" />
          <p className="mt-2 text-lg text-gray-400 font-light">
            Reach out and let's make magic happen!
          </p>
        </div>

        <div className="mb-20 contact-info">
          <p className="text-2xl text-center font-light text-gray-300">
            Connect with me anytime:
          </p>
        </div>

        <div className="flex justify-center contact-form">
          <div ref={cardRef} className="w-full max-w-3xl">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="p-10 bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-500/30 hover:border-cyan-500/70 transition-all duration-500"
            >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {[
                  { label: "Name", type: "text", name: "name" },
                  { label: "Email", type: "email", name: "email" },
                  { label: "Mobile Number", type: "tel", name: "mobile" },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      id={field.name}
                      required
                      className="w-full px-5 py-3 text-gray-900 bg-white/90 rounded-lg focus:ring-4 focus:ring-cyan-400/50 focus:outline-none transition-all duration-300 hover:bg-white shadow-md"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-20 rounded-lg transition-opacity duration-300" />
                  </div>
                ))}
                <div className="relative">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    required
                    className="w-full px-5 py-3 text-gray-900 bg-white/90 rounded-lg focus:ring-4 focus:ring-cyan-400/50 focus:outline-none transition-all duration-300 hover:bg-white shadow-md appearance-none"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-20 rounded-lg transition-opacity duration-300" />
                </div>
              </div>

              <div className="mt-8 relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="6"
                  className="w-full px-5 py-3 text-gray-900 bg-white/90 rounded-lg focus:ring-4 focus:ring-cyan-400/50 focus:outline-none transition-all duration-300 hover:bg-white shadow-md resize-y"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-20 rounded-lg transition-opacity duration-300" />
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-10 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-xl hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-500 relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-400 to-purple-500 animate-gradient-bg" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .shape-circle {
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.5), transparent);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }
        .shape-triangle {
          width: 0;
          height: 0;
          border-left: calc(var(--size) / 2) solid transparent;
          border-right: calc(var(--size) / 2) solid transparent;
          border-bottom: var(--size) solid rgba(147, 51, 234, 0.5);
          background: none;
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
        }
        .shape-hexagon {
          position: relative;
          width: var(--size);
          height: calc(var(--size) * 0.57735);
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.5), transparent);
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-40px) rotate(10deg);
          }
        }
        .animate-float {
          animation: float infinite ease-in-out;
          --size: inherit;
        }
        .custom-cursor {
          position: fixed;
          width: 24px;
          height: 24px;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.6), transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.7);
        }
        .cursor-trail {
          position: fixed;
          width: 8px;
          height: 8px;
          background: rgba(0, 255, 255, 0.3);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          animation: fadeOut 0.5s ease forwards;
        }
        @keyframes fadeOut {
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
        }
        @keyframes animate-gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: animate-gradient 5s ease infinite;
        }
        .animate-gradient-bg {
          background-size: 300% 300%;
          animation: animate-gradient 8s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;