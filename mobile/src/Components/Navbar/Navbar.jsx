import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaTools,
  FaHome,
  FaInfoCircle,
  FaHeadset,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Services", path: "/services", icon: <FaTools /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Contact", path: "/contact", icon: <FaHeadset /> },
  ];

  const rawNumber = "8444499672";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 ${
          isOpen
            ? "bg-slate-950/40 backdrop-blur-lg py-3"
            : scrolled
              ? "bg-white/90 backdrop-blur-md shadow-lg py-2 border-b border-slate-100"
              : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 flex justify-between items-center">
          {/* LOGO AREA */}
          <Link
            to="/"
            className="relative z-[160] flex flex-col leading-none"
            onClick={() => setIsOpen(false)}
          >
            <span
              className={`text-xl md:text-2xl  font-black italic uppercase tracking-tighter transition-colors ${isOpen ? "text-white" : "text-slate-950"}`}
            >
              Phone<span className="text-cyan-500">Repair</span>
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-400">
              Center
            </span>
          </Link>

          {/* DESKTOP LINKS (Clean & Minimal) */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative group ${
                  location.pathname === link.path
                    ? "text-cyan-500"
                    : "text-slate-900"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-500 transition-all ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </Link>
            ))}
          </div>

          {/* ACTIONS AREA */}
          <div className="flex items-center gap-3 z-[160]">
            <a
              href={`tel:${rawNumber}`}
              className={`flex items-center justify-center w-10 h-10 md:w-auto md:h-auto md:px-5 md:py-2.5 rounded-full md:rounded-none font-black uppercase italic text-[10px] tracking-widest transition-all ${
                isOpen
                  ? "bg-cyan-500 text-slate-950"
                  : "bg-slate-950 text-white hover:bg-cyan-500 hover:text-slate-950 shadow-xl"
              }`}
            >
              <FaPhoneAlt />
              <span className="hidden md:inline ml-2">Connect Now</span>
            </a>

            {/* HAMBURGER TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden flex flex-col items-center justify-center w-10 h-10 transition-all ${isOpen ? "text-white" : "text-slate-950"}`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU (COMPACT & MODERN) */}
      <div
        className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-[140] lg:hidden transition-all duration-500 flex flex-col ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex-1 flex flex-col justify-center px-10 space-y-8">
          <p className="text-cyan-500 font-black text-[9px] uppercase tracking-[0.5em] border-l-2 border-cyan-500 pl-4">
            System Navigation
          </p>

          <div className="space-y-4">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 text-4xl font-black italic uppercase tracking-tighter transition-all ${
                  location.pathname === link.path
                    ? "text-cyan-500"
                    : "text-white active:scale-95"
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span className="text-sm text-slate-700 font-mono italic">
                  0{idx + 1}
                </span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM ACTION BAR (Mobile Specific) */}
        <div className="p-8 border-t border-white/5 bg-white/5">
          <div className="grid grid-cols-2 gap-4">
            <a
              href={`tel:${rawNumber}`}
              className="bg-white text-slate-950 py-4 flex items-center justify-center gap-2 text-[10px] font-black uppercase italic tracking-widest"
            >
              <FaPhoneAlt className="text-cyan-500" /> Support
            </a>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-cyan-500 text-slate-950 py-4 flex items-center justify-center gap-2 text-[10px] font-black uppercase italic tracking-widest"
            >
              Book Slot
            </Link>
          </div>
          <p className="text-center text-[8px] text-slate-500 uppercase tracking-[0.3em] mt-6 italic">
            Precision Engineering Since 2014
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
