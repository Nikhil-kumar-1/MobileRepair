import React from "react";
import { Link } from "react-router-dom"; // Essential for SPA navigation
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowUp,
  FaShieldAlt,
  FaCertificate,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    { name: "Screen Restoration", path: "/services" },
    { name: "Battery Overhaul", path: "/services" },
    { name: "Motherboard Surgery", path: "/services" },
    { name: "Data Recovery", path: "/services" },
    { name: "Liquid Damage", path: "/services" },
  ];

  const company = [
    { name: "Our Lab", path: "/about" },
    { name: "The Team", path: "/team" },
    { name: "Service Warranty", path: "/warranty" },
    { name: "Privacy Protocol", path: "/privacy" },
    { name: "Contact HQ", path: "/contact" },
  ];

  const socialLinks = [
    { Icon: FaFacebookF, url: "https://facebook.com" },
    { Icon: FaInstagram, url: "https://instagram.com" },
    { Icon: FaTwitter, url: "https://twitter.com" },
    { Icon: FaYoutube, url: "https://youtube.com" },
  ];

  return (
    <footer className="bg-white pt-24 pb-12 border-t-8 border-slate-950 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute bottom-[-5%] left-[-2%] text-slate-50 text-[10rem] md:text-[20rem] font-black italic select-none pointer-events-none -z-0">
        SMARTFIX
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Identity */}
          <div className="space-y-8">
            <Link
              to="/"
              className="text-4xl font-black italic uppercase tracking-tighter group"
            >
              SMART
              <span className="text-cyan-500 group-hover:text-slate-900 transition-colors">
                FIX.
              </span>
            </Link>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed max-w-xs">
              The industry standard in precision hardware repair. We revive,
              restore, and overhaul your digital lifelines with surgical
              accuracy.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center hover:bg-cyan-500 hover:text-slate-900 transition-all transform -skew-x-12 hover:scale-110"
                >
                  <Icon className="text-sm skew-x-12" />
                </a>
              ))}
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] border-l-4 border-cyan-500 pl-4">
              Operations
            </h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[11px] font-black uppercase text-slate-400 hover:text-cyan-600 hover:translate-x-2 transition-all tracking-widest block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] border-l-4 border-cyan-500 pl-4">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[11px] font-black uppercase text-slate-400 hover:text-cyan-600 hover:translate-x-2 transition-all tracking-widest block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Badges & Scroll */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] border-l-4 border-cyan-500 pl-4">
              Accreditation
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 transform -skew-x-6 flex flex-col items-center justify-center text-center border border-transparent hover:border-cyan-200 transition-colors">
                <FaShieldAlt className="text-cyan-500 text-xl mb-2" />
                <p className="text-[8px] font-black uppercase tracking-tighter">
                  100% Genuine Parts
                </p>
              </div>
              <div className="bg-slate-50 p-4 transform -skew-x-6 flex flex-col items-center justify-center text-center border border-transparent hover:border-cyan-200 transition-colors">
                <FaCertificate className="text-cyan-500 text-xl mb-2" />
                <p className="text-[8px] font-black uppercase tracking-tighter">
                  Certified Lab
                </p>
              </div>
            </div>
            <button
              onClick={scrollToTop}
              className="w-full bg-slate-950 text-white py-4 font-black uppercase italic text-[10px] tracking-[0.4em] hover:bg-cyan-500 hover:text-slate-900 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              Back to Top <FaArrowUp className="animate-bounce" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-300">
            © {new Date().getFullYear()} SmartFix Lab. Engineered by{" "}
            <Link to="https://my-portfolio-main-tan.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-slate-900 transition-colors" >
              <span className="text-slate-900">Nikhil Kumar</span>
            </Link>
          </p>
          <div className="flex gap-8">
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>{" "}
              Lab Status: <span className="text-slate-900">Operational</span>
            </p>
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">
              Uptime: <span className="text-slate-900">99.9%</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
