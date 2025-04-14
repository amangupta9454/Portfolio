import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { FaGraduationCap, FaSchool, FaBookOpen, FaSeedling, FaTrophy } from 'react-icons/fa';
const Qualification = () => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      origin: 'bottom',
      distance: '80px',
      duration: 1400,
      delay: 150,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
      reset: true,
      interval: 200,
    });

    ScrollReveal().reveal('.heading-animate', {
      origin: 'top',
      distance: '80px',
      duration: 1600,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
      reset: true,
    });
  }, []);

  const qualifications = [
    {
      icon: <FaGraduationCap className="text-4xl text-sky-300" />,
      title: 'B.Tech in CSE (2023–2027)',
      subtitle: 'Hi-Tech Institute of Engineering and Technology, Ghaziabad',
      detail: 'Current SGPA: 6.9',
      borderColor: 'border-sky-400',
      gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.25), transparent)',
      badge: 'In Progress',
    },
    {
      icon: <FaBookOpen className="text-4xl text-emerald-300" />,
      title: 'Intermediate (2020–2022)',
      subtitle: 'New Modern Children Public School, Dullahapur, Ghazipur',
      detail: 'PCM – 60.6%',
     
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25), transparent)',
      badge: 'Completed',
    },
    {
      icon: <FaSchool className="text-4xl text-amber-300" />,
      title: 'High School (2018–2020)',
      subtitle: 'Shree Balkrishna Public Vidyalaya, Sherpur Sachui, Mau',
      detail: 'General Subjects – 66.8%',
      borderColor: 'border-amber-400',
      gradient: 'linear-gradient(135deg, rgba(251, 191, 36, 0.25), transparent)',
      badge: 'Completed',
    },
    {
      icon: <FaSeedling className="text-4xl text-fuchsia-300" />,
      title: 'Diploma in Agriculture (2022–2023)',
      subtitle: 'Maharishi Dayanand College Of Vocational Training',
      detail: 'Score: 91.8%',
      borderColor: 'border-fuchsia-400',
      gradient: 'linear-gradient(135deg, rgba(217, 70, 239, 0.25), transparent)',
      badge: 'Completed',
    },
  ];

  return (
    <div id="qualifications"  className=" min-h-screen md:min-h-2 relative overflow-hidden py-32 px-6 md:px-28 bg-[#0f172a] text-white font-sans z-0">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] opacity-75 z-0"></div>
      {/* Enhanced Floating Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
        <div className="absolute w-36 h-36 bg-cyan-400/25 rounded-[30px] rotate-45 float-orbit top-16 left-16"></div>
        <div className="absolute w-28 h-28 bg-fuchsia-400/25 rounded-[30px] rotate-30 float-orbit-delayed bottom-24 right-24"></div>
        <div className="absolute w-48 h-48 bg-emerald-400/25 rounded-[30px] rotate-60 float-orbit-slow top-1/3 left-1/4"></div>
        <div className="absolute w-32 h-32 bg-amber-400/25 rounded-[30px] rotate-15 float-orbit top-2/3 right-1/3"></div>
      </div>
      {/* Background Particles */}
      <div className="absolute inset-0 particle-container z-0">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold heading-animate text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-2xl gradient-shift">
          🎓 My Qualifications
        </h2>
        <div className="w-48 h-1 mx-auto mt-5 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 rounded-full shadow-lg expand-animation glow-effect"></div>
        <p className="text-xl text-gray-200 mt-6 heading-animate tracking-wider font-light shimmer-text">
          A constellation of my educational achievements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 z-10 relative">
        {qualifications.map((q, index) => (
          <div  key={index}className={`reveal group relative overflow-hidden border-l-4 ${q.borderColor} p-7 rounded-3xl backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_15px_50px_rgba(0,0,0,0.35)] card-hover`}style={{ background: q.gradient }}>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl glow-overlay"></div>
            <div className="relative flex items-center gap-6 mb-5">
              <div className="p-5 bg-white/15 rounded-full backdrop-blur-lg border border-white/40 shadow-xl group-hover:scale-115 group-hover:rotate-12 transition-all duration-400 spin-on-hover">
                {q.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                  {q.title}
                </h3>
                <span className="inline-block mt-1 px-3 py-1 text-xs font-medium text-white bg-white/10 rounded-full backdrop-blur-sm shadow-inner">
                  {q.badge}
                </span>
              </div>
            </div>
            <p className="text-gray-100 font-medium text-[17px] leading-relaxed">{q.subtitle}</p>
            <p className="text-sm text-gray-300 italic mt-3 tracking-wide">{q.detail}</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
          </div>
        ))}
      </div>
      {/* Achievement */}
      <div className="mt-32 text-center z-10 relative">
        <h2 className="text-5xl md:text-6xl font-extrabold heading-animate text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 drop-shadow-2xl gradient-shift">
          🏆 Achievement
        </h2>
        <div className="w-56 h-1 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 mx-auto mt-4 rounded-full shadow-md expand-animation glow-effect"></div>
        <p className="text-xl text-gray-200 mt-6 heading-animate tracking-wider font-light shimmer-text">
          Stellar moments of excellence and grit
        </p>
        <div className="reveal mx-auto mt-14 max-w-3xl backdrop-blur-2xl p-10 rounded-3xl border-l-4 border-pink-500 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_50px_rgba(0,0,0,0.35)] card-hover"style={{ background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.2), transparent)' }}>
          <div className="flex items-center gap-6 justify-center mb-5">
            <div className="p-5 bg-white/15 rounded-full border border-white/40 backdrop-blur-lg shadow-xl bounce-animation rotate-on-hover">
              <FaTrophy className="text-4xl text-pink-400" />
            </div>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-rose-300">
              1st Place – GAMBED Quiz (2024)
            </h3>
          </div>
          <p className="text-gray-100 text-lg tracking-wide leading-relaxed font-medium">
            Conquered 1st place in a nationwide technical quiz, surpassing 200+ contenders – a shining testament to brilliance!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Qualification;