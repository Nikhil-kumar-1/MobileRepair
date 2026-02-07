import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaMobileAlt,
  FaLaptop,
  FaMicrochip,
  FaArrowRight,
  FaBolt,
  FaCamera,
  FaTabletAlt,
  FaWifi,
  FaHdd,
  FaKeyboard,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  // 20 Services List
  const allServices = [
    {
      id: 1,
      title: "Screen Fix",
      icon: <FaMobileAlt />,
      price: "₹1,499",
      tag: "Display",
    },
    {
      id: 2,
      title: "Battery Lab",
      icon: <FaBolt />,
      price: "₹899",
      tag: "Power",
    },
    {
      id: 3,
      title: "MacBook Fix",
      icon: <FaLaptop />,
      price: "₹2,999",
      tag: "Logic",
    },
    {
      id: 4,
      title: "IC Solder",
      icon: <FaMicrochip />,
      price: "Expert",
      tag: "Level 4",
    },
    {
      id: 5,
      title: "Camera Revive",
      icon: <FaCamera />,
      price: "₹1,200",
      tag: "Lens",
    },
    {
      id: 6,
      title: "iPad Repair",
      icon: <FaTabletAlt />,
      price: "₹1,999",
      tag: "Touch",
    },
    {
      id: 7,
      title: "Network Fix",
      icon: <FaWifi />,
      price: "₹799",
      tag: "Signal",
    },
    {
      id: 8,
      title: "Data Recovery",
      icon: <FaHdd />,
      price: "₹2,500",
      tag: "Storage",
    },
    {
      id: 9,
      title: "Keys Swap",
      icon: <FaKeyboard />,
      price: "₹600",
      tag: "Input",
    },
    {
      id: 10,
      title: "Water Fix",
      icon: <FaBolt />,
      price: "Diag",
      tag: "Liquid",
    },
    {
      id: 11,
      title: "Port Clean",
      icon: <FaBolt />,
      price: "₹499",
      tag: "Charging",
    },
    {
      id: 12,
      title: "SSD Upgrade",
      icon: <FaHdd />,
      price: "₹3,200",
      tag: "Speed",
    },
    {
      id: 13,
      title: "Software OS",
      icon: <FaLaptop />,
      price: "₹500",
      tag: "System",
    },
    {
      id: 14,
      title: "Speaker Fix",
      icon: <FaWifi />,
      price: "₹800",
      tag: "Audio",
    },
    {
      id: 15,
      title: "Hinge Repair",
      icon: <FaLaptop />,
      price: "₹1,500",
      tag: "Body",
    },
    {
      id: 16,
      title: "Back Glass",
      icon: <FaMobileAlt />,
      price: "₹1,800",
      tag: "Glass",
    },
    {
      id: 17,
      title: "Face ID Fix",
      icon: <FaCamera />,
      price: "₹2,400",
      tag: "Sensor",
    },
    {
      id: 18,
      title: "BIOS Unlock",
      icon: <FaMicrochip />,
      price: "₹1,500",
      tag: "Chip",
    },
    {
      id: 19,
      title: "GPU Reflow",
      icon: <FaMicrochip />,
      price: "₹3,500",
      tag: "Graphics",
    },
    {
      id: 20,
      title: "Custom PC",
      icon: <FaLaptop />,
      price: "Expert",
      tag: "Build",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* --- HERO: CLEAN & BOLD --- */}
      <section className="relative pt-24 pb-12 px-6">
        <div className="absolute top-10 right-0 text-slate-50 text-[10rem] md:text-[15rem] font-black italic select-none pointer-events-none -z-0">
          REPAIR
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div
            className="border-l-4 border-cyan-500 pl-6"
            data-aos="fade-right"
          >
            <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-slate-900">
              SERVICE{" "}
              <span
                className="text-slate-100"
                style={{ WebkitTextStroke: "1.5px #cbd5e1" }}
              >
                ARENA
              </span>
            </h1>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.4em] mt-3">
              Full Spectrum Technical Lab • 20+ Expert Solutions
            </p>
          </div>
        </div>
      </section>

      {/* --- 20 SERVICES COMPACT GRID --- */}
      <section className="py-12 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {allServices.map((s) => (
            <div key={s.id} className="group" data-aos="zoom-in">
              {/* COMPACT SKEW CARD */}
              <div className="relative md:transform md:-skew-x-6 transition-all duration-300 group-hover:md:skew-x-0 h-full">
                <div className="relative bg-white border border-slate-100 p-5 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-cyan-500 transition-all h-full overflow-hidden">
                  {/* Small Industrial Icon */}
                  <div className="w-10 h-10 bg-slate-900 text-cyan-500 flex items-center justify-center text-xl mb-3 md:transform md:skew-x-6 group-hover:md:skew-x-0 transition-all">
                    {s.icon}
                  </div>

                  <div className="md:transform md:skew-x-6 group-hover:md:skew-x-0 transition-all">
                    <span className="text-[7px] font-black uppercase text-cyan-600 tracking-widest bg-cyan-50 px-2 py-0.5 rounded-full">
                      {s.tag}
                    </span>
                    <h3 className="text-lg font-black italic uppercase tracking-tighter mt-2 mb-1 text-slate-800">
                      {s.title}
                    </h3>
                    <p className="text-slate-900 font-black text-xs mb-4">
                      {s.price}
                    </p>

                    <Link
                      to="/booking"
                      className="inline-flex items-center justify-center w-full bg-slate-900 text-white hover:bg-cyan-500 py-2 px-4 text-[9px] font-black uppercase tracking-widest transition-all"
                    >
                      Book Now <FaArrowRight className="ml-2 text-[8px]" />
                    </Link>
                  </div>

                  {/* ID Watermark Small */}
                  <div className="absolute -bottom-1 -right-1 text-slate-50 text-4xl font-black italic -z-10 group-hover:text-cyan-50 transition-colors opacity-50">
                    {s.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMPACT FOOTER CTA --- */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
          <div className="bg-slate-950 p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#06b6d4 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic text-white leading-none">
                CUSTOM <span className="text-cyan-500">REQUEST?</span>
              </h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px] mt-2">
                If it's electronic, we can fix it. Talk to an engineer.
              </p>
            </div>

            <Link
              to="/contact"
              className="relative z-10 bg-white text-slate-900 px-10 py-4 font-black uppercase tracking-widest text-[11px] hover:bg-cyan-500 transition-all shadow-xl"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
