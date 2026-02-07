import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaMobileAlt,
  FaLaptop,
  FaMicrochip,
  FaPhoneAlt,
  FaBolt,
  FaCamera,
  FaTabletAlt,
  FaWifi,
  FaHdd,
  FaKeyboard,
  FaTools,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const phoneNumber = "(844) 449-9672";
  const rawNumber = "8444499672";

  // 20 Services List with USD Prices
  const allServices = [
    {
      id: 1,
      title: "Screen Fix",
      icon: <FaMobileAlt />,
      price: "$89.00",
      tag: "Display",
    },
    {
      id: 2,
      title: "Battery Lab",
      icon: <FaBolt />,
      price: "$45.00",
      tag: "Power",
    },
    {
      id: 3,
      title: "MacBook Fix",
      icon: <FaLaptop />,
      price: "$120.00",
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
      price: "$65.00",
      tag: "Lens",
    },
    {
      id: 6,
      title: "iPad Repair",
      icon: <FaTabletAlt />,
      price: "$95.00",
      tag: "Touch",
    },
    {
      id: 7,
      title: "Network Fix",
      icon: <FaWifi />,
      price: "$35.00",
      tag: "Signal",
    },
    {
      id: 8,
      title: "Data Recovery",
      icon: <FaHdd />,
      price: "$150.00",
      tag: "Storage",
    },
    {
      id: 9,
      title: "Keys Swap",
      icon: <FaKeyboard />,
      price: "$25.00",
      tag: "Input",
    },
    {
      id: 10,
      title: "Water Fix",
      icon: <FaBolt />,
      price: "Diagnosis",
      tag: "Liquid",
    },
    {
      id: 11,
      title: "Port Clean",
      icon: <FaBolt />,
      price: "$15.00",
      tag: "Charging",
    },
    {
      id: 12,
      title: "SSD Upgrade",
      icon: <FaHdd />,
      price: "$110.00",
      tag: "Speed",
    },
    {
      id: 13,
      title: "Software OS",
      icon: <FaLaptop />,
      price: "$40.00",
      tag: "System",
    },
    {
      id: 14,
      title: "Speaker Fix",
      icon: <FaWifi />,
      price: "$30.00",
      tag: "Audio",
    },
    {
      id: 15,
      title: "Hinge Repair",
      icon: <FaLaptop />,
      price: "$55.00",
      tag: "Body",
    },
    {
      id: 16,
      title: "Back Glass",
      icon: <FaMobileAlt />,
      price: "$75.00",
      tag: "Glass",
    },
    {
      id: 17,
      title: "Face ID Fix",
      icon: <FaCamera />,
      price: "$130.00",
      tag: "Sensor",
    },
    {
      id: 18,
      title: "BIOS Unlock",
      icon: <FaMicrochip />,
      price: "$85.00",
      tag: "Chip",
    },
    {
      id: 19,
      title: "GPU Reflow",
      icon: <FaMicrochip />,
      price: "$145.00",
      tag: "Graphics",
    },
    {
      id: 20,
      title: "Custom PC",
      icon: <FaLaptop />,
      price: "Estimate",
      tag: "Build",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-10 right-[-5%] text-slate-50 text-[10rem] md:text-[20rem] font-black italic select-none pointer-events-none -z-0 leading-none">
          ARENA
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div
            className="border-l-8 border-cyan-500 pl-8"
            data-aos="fade-right"
          >
            <h1 className="text-4xl md:text-9xl font-black italic uppercase tracking-tighter leading-none text-slate-900">
              REPAIR <br />
              <span
                className="text-white"
                style={{ WebkitTextStroke: "2px #0f172a" }}
              >
                SOLUTIONS
              </span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mt-6">
              <p className="text-slate-400 font-bold text-[12px] uppercase tracking-[0.5em]">
                USA Certified Engineering Lab • Precision Guaranteed
              </p>
              <div className="hidden md:block h-[1px] w-24 bg-slate-200"></div>
              <p className="text-cyan-600 font-black text-sm uppercase tracking-widest flex items-center gap-2">
                <FaPhoneAlt className="animate-pulse" /> {phoneNumber}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-12 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allServices.map((s) => (
            <div key={s.id} className="group" data-aos="zoom-in">
              <div className="relative bg-slate-50 border border-slate-200 p-8 flex flex-col h-full hover:bg-white hover:shadow-2xl hover:border-cyan-500 transition-all duration-500 group-hover:-translate-y-2">
                {/* ID Tag */}
                <div className="absolute top-4 right-6 text-slate-200 text-4xl font-black italic opacity-40 group-hover:text-cyan-100 transition-colors">
                  {s.id < 10 ? `0${s.id}` : s.id}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-slate-950 text-cyan-400 flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:bg-cyan-500 group-hover:text-white transition-all transform group-hover:rotate-12">
                  {s.icon}
                </div>

                <div className="flex-1">
                  <span className="text-[9px] font-black uppercase text-cyan-600 tracking-[0.3em]">
                    {s.tag}
                  </span>
                  <h3 className="text-xl font-black italic uppercase tracking-tighter mt-1 mb-2 text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {s.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-2xl font-black text-slate-900 tracking-tighter">
                      {s.price}
                    </span>
                    {s.price !== "Expert" && s.price !== "Diagnosis" && (
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        Start
                      </span>
                    )}
                  </div>
                </div>

                {/* Call Now Action */}
                <a
                  href={`tel:${rawNumber}`}
                  className="flex items-center justify-center gap-3 w-full bg-slate-900 text-white py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-cyan-500 hover:text-slate-900 transition-all"
                >
                  <FaPhoneAlt className="text-[10px]" /> Call Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-[1400px] mx-auto" data-aos="fade-up">
          <div className="bg-slate-950 p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden border-b-8 border-cyan-500">
            <div className="absolute top-[-10%] right-[-10%] opacity-10">
              <FaTools className="text-[20rem] text-white -rotate-12" />
            </div>

            <div className="relative z-10 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <span className="h-1 w-10 bg-cyan-500"></span>
                <span className="text-cyan-500 font-black tracking-[0.4em] text-[10px] uppercase">
                  Immediate Support
                </span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black uppercase italic text-white leading-[0.85]">
                DEVICE CRASHED? <br />
                <span className="text-cyan-500">WE REVIVE IT.</span>
              </h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-6 max-w-xl">
                Our lead engineers are standing by for surgical-grade hardware
                intervention. No appointment needed for diagnostics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <a
                href={`tel:${rawNumber}`}
                className="bg-white text-slate-950 px-12 py-6 font-black uppercase tracking-[0.2em] text-[14px] hover:bg-cyan-500 transition-all flex items-center justify-center gap-4 shadow-2xl"
              >
                <FaPhoneAlt /> Call Expert
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-12 py-6 font-black uppercase tracking-[0.2em] text-[14px] hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center"
              >
                Inquiry Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
