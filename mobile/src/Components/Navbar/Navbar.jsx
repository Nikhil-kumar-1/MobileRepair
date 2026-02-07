import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Center", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const phoneNumber = "(844) 449-9672";
  const rawNumber = "8444499672";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2 md:py-3"
          : "bg-transparent py-5 md:py-8"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-10 flex justify-between items-center">
        {/* LOGO: Phone Service Center */}
        <Link to="/" className="flex flex-col leading-none group">
          <span className="text-xl md:text-2xl font-black italic uppercase tracking-tighter text-slate-950">
            PHONE <span className="text-cyan-500">SERVICE</span>
          </span>
          <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] text-slate-400 group-hover:text-cyan-600 transition-colors">
            Center
          </span>
        </Link>

        {/* CENTER LINKS (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative group ${
                location.pathname === link.path
                  ? "text-cyan-600"
                  : "text-slate-900"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-500 transition-all duration-300 ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE: ACTIONS */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* OPTIMIZED CALL BUTTON */}
          <a
            href={`tel:${rawNumber}`}
            className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-sm font-black uppercase italic text-[10px] tracking-widest hover:bg-cyan-500 hover:text-slate-900 transition-all shadow-xl group active:scale-95"
          >
            <div className="relative">
              <FaPhoneAlt className="text-xs md:text-sm group-hover:animate-shake" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-500 rounded-full animate-ping"></span>
            </div>
            <span className="hidden sm:inline">{phoneNumber}</span>
            <span className="sm:hidden inline">Call Now</span>
          </a>

          {/* Book Now (Desktop Only) */}
          <Link
            to="/contact"
            className="hidden xl:block border-2 border-slate-900 text-slate-900 px-6 py-2.5 font-black uppercase italic text-[10px] tracking-widest hover:bg-slate-900 hover:text-white transition-all"
          >
            Book Slot
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-slate-950 p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-slate-950 z-[110] lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-10">
          <div className="flex justify-between items-center mb-16">
            <span className="text-2xl font-black italic text-white uppercase">
              Menu<span className="text-cyan-500">.</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-4xl"
            >
              &times;
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black italic uppercase tracking-tighter text-white hover:text-cyan-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-4">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em]">
              Emergency Support
            </p>
            <a
              href={`tel:${rawNumber}`}
              className="w-full bg-cyan-500 text-slate-950 py-6 text-center text-xl font-black uppercase italic rounded-none flex items-center justify-center gap-4 active:bg-white transition-all"
            >
              <FaPhoneAlt /> {phoneNumber}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
