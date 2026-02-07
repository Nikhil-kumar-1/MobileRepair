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
    { name: "About Lab", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-12 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-black italic uppercase tracking-tighter text-slate-950">
            SMART<span className="text-cyan-500 text-2xl md:text-3xl">.</span>
            FIX
          </span>
        </Link>

        {/* CENTER LINKS (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-cyan-600 ${
                location.pathname === link.path
                  ? "text-cyan-600"
                  : "text-slate-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE: COMPACT CALL BUTTON */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* OPTIMIZED CALL NOW: Mobile me chota, Desktop me full */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 bg-cyan-500 text-slate-950 px-3 py-2 md:px-5 md:py-2.5 rounded-full font-black uppercase italic text-[10px] tracking-widest shadow-lg shadow-cyan-500/20 hover:bg-slate-950 hover:text-white transition-all transform active:scale-90 group"
          >
            <div className="relative">
              <FaPhoneAlt className="text-[12px] md:text-sm group-hover:rotate-12 transition-transform" />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>
            </div>
            {/* Ye text mobile par hide ho jayega agar screen bohot choti hai, ya sirf 'Call' dikhayega */}
            <span className="hidden sm:inline">Call Now</span>
            <span className="inline sm:hidden text-[9px]">Call</span>
          </a>

          {/* Book Button (Desktop Only) */}
          <Link
            to="/book"
            className="hidden md:block bg-slate-900 text-white px-6 py-2.5 rounded-full font-black uppercase italic text-[10px] tracking-widest hover:bg-cyan-600 transition-colors"
          >
            Book
          </Link>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-xl text-slate-900 ml-1"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-white z-[110] lg:hidden transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-20">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-3xl"
          >
            &times;
          </button>
          <div className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-4xl font-black italic uppercase tracking-tighter text-slate-900"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu ke andar bada Call button (Optionally) */}
          <a
            href="tel:+919876543210"
            className="mt-auto w-full bg-slate-950 text-white py-5 text-center text-lg font-black uppercase italic rounded-xl flex items-center justify-center gap-3"
          >
            <FaPhoneAlt className="text-cyan-500" /> Start Repair
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
