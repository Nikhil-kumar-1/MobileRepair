import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowUp,
  FaShieldAlt,
  FaCertificate,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const phoneNumber = "(844) 449-9672";
  const rawNumber = "8444499672";

  const services = [
    { name: "Screen Restoration", path: "/services" },
    { name: "Battery Overhaul", path: "/services" },
    { name: "Motherboard Surgery", path: "/services" },
    { name: "Data Recovery", path: "/services" },
    { name: "Liquid Damage", path: "/services" },
  ];

  const company = [
    { name: "Our Lab", path: "/about" },
    { name: "Terms & Conditions", path: "/terms" },
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
      <div className="absolute bottom-[-5%] left-[-2%] text-slate-50 text-[8rem] md:text-[15rem] font-black italic select-none pointer-events-none -z-0 uppercase">
        SERVICE
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Identity & Call Action */}
          <div className="space-y-8">
            <Link to="/" className="flex flex-col leading-none group">
              <span className="text-3xl font-black italic uppercase tracking-tighter text-slate-950">
                PHONE <span className="text-cyan-500">SERVICE</span>
              </span>
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-slate-400">
                Center
              </span>
            </Link>

            <div className="space-y-4">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed max-w-xs">
                Premium hardware laboratory specialized in complex digital
                restoration and micro-soldering.
              </p>

              {/* Call Now Button in Footer */}
              <a
                href={`tel:${rawNumber}`}
                className="inline-flex items-center gap-3 bg-cyan-500 text-slate-900 px-6 py-4 font-black uppercase italic text-[11px] tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-lg"
              >
                <FaPhoneAlt className="animate-pulse" /> {phoneNumber}
              </a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center hover:bg-cyan-500 hover:text-slate-900 transition-all transform -skew-x-12"
                >
                  <Icon className="text-sm skew-x-12" />
                </a>
              ))}
            </div>
          </div>

          {/* Operations Links */}
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

          {/* Support Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] border-l-4 border-cyan-500 pl-4">
              Support
            </h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 text-slate-400">
                <FaMapMarkerAlt className="text-cyan-500 mt-1" />
                <p className="text-[10px] font-black uppercase tracking-widest">
                  1540 Broadway, New York, <br />
                  NY 10036, USA
                </p>
              </div>
            </div>
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

          {/* Accreditation & Top Scroll */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] border-l-4 border-cyan-500 pl-4">
              Trust & Safety
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 transform -skew-x-6 flex flex-col items-center justify-center text-center border border-transparent hover:border-cyan-200 transition-colors">
                <FaShieldAlt className="text-cyan-500 text-xl mb-2" />
                <p className="text-[8px] font-black uppercase tracking-tighter text-slate-600">
                  Genuine Parts Only
                </p>
              </div>
              <div className="bg-slate-50 p-4 transform -skew-x-6 flex flex-col items-center justify-center text-center border border-transparent hover:border-cyan-200 transition-colors">
                <FaCertificate className="text-cyan-500 text-xl mb-2" />
                <p className="text-[8px] font-black uppercase tracking-tighter text-slate-600">
                  USA Certified Lab
                </p>
              </div>
            </div>
            <button
              onClick={scrollToTop}
              className="w-full bg-slate-950 text-white py-4 font-black uppercase italic text-[10px] tracking-[0.4em] hover:bg-cyan-500 hover:text-slate-900 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              System.ScrollUp <FaArrowUp className="animate-bounce text-xs" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-300">
            © {new Date().getFullYear()} Phone Service Center. Licensed in USA.
          </p>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-900">
                System Status: Online
              </p>
            </div>
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">
              Tech Support:{" "}
              <span className="text-slate-900">{phoneNumber}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
