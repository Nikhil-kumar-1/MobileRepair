import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaClock, FaArrowRight, FaBolt, FaShieldAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const RepairArena = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    setTimeout(() => {
      setServices([
        {
          id: 1,
          name: "Screen Restoration",
          time: "30-45 Mins",
          price: "Starting ₹1,499",
          type: "OLED/LCD",
          status: "Popular",
          img: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=500",
        },
        {
          id: 2,
          name: "Battery Overhaul",
          time: "20 Mins",
          price: "Starting ₹899",
          type: "Li-ion",
          status: "Express",
          img: "https://images.unsplash.com/photo-1611396000732-f8c9a933424f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcmVwYWlyfGVufDB8fDB8fHww",
        },
        {
          id: 3,
          name: "Liquid Damage Fix",
          time: "2-4 Hours",
          price: "On Diagnosis",
          type: "Ultrasonic",
          status: "Critical",
          img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=500",
        },
        {
          id: 4,
          name: "Motherboard Surgery",
          time: "24 Hours",
          price: "Expert Only",
          type: "Micro-Solder",
          status: "Level 4",
          img: "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW90aGVyYm9hcmR8ZW58MHx8MHx8fDA%3D",
        },
      ]);
      setLoading(false);
    }, 600);
  }, []);

  return (
    <div className="min-h-screen py-12 md:py-20 px-4 md:px-8 bg-white text-slate-900 font-sans overflow-hidden">
      {/* Background Watermark - Smaller for Laptop */}
      <div className="absolute top-10 right-0 text-slate-50 text-[6rem] md:text-[12rem] font-black italic select-none pointer-events-none -z-0 leading-none">
        REPAIR
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* REFINED HEADER */}
        <div
          className="mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-slate-100 pb-8 md:pb-12 gap-4"
          data-aos="fade-down"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-8 bg-cyan-500"></span>
              <span className="text-cyan-600 font-black uppercase tracking-widest text-[9px]">
                Professional Lab
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
              SERVICE{" "}
              <span
                className="text-slate-200"
                style={{ WebkitTextStroke: "1px #e2e8f0" }}
              >
                ARENA
              </span>
            </h1>
          </div>
          <p className="max-w-[250px] text-slate-400 font-bold text-[10px] uppercase tracking-widest leading-relaxed md:text-right">
            Surgical precision for your high-end digital devices.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-t-cyan-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service) => (
              <div key={service.id} className="group" data-aos="fade-up">
                {/* THE CARD: Desktop me subtle skew, Mobile me transform-none (SIDHA) */}
                <div className="relative md:transform md:-skew-x-3 transition-all duration-500 group-hover:md:skew-x-0 h-full">
                  {/* Subtle Card Body */}
                  <div className="relative bg-white border border-slate-100 p-5 md:p-6 overflow-hidden shadow-sm group-hover:shadow-xl group-hover:border-cyan-500 transition-all flex flex-col sm:flex-row gap-5">
                    {/* Image Area - Smaller & Rectangular */}
                    <div className="w-full sm:w-40 md:w-44 h-40 sm:h-auto overflow-hidden bg-slate-50 relative md:transform md:skew-x-3 group-hover:md:skew-x-0 transition-all duration-500">
                      <img
                        src={service.img}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        alt={service.name}
                      />
                      <div className="absolute top-0 left-0 bg-slate-900 text-white text-[8px] font-black uppercase px-3 py-1">
                        {service.status}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 md:transform md:skew-x-3 group-hover:md:skew-x-0 transition-all duration-500 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <FaBolt className="text-cyan-500 text-[10px]" />
                          <span className="text-[9px] font-black uppercase text-slate-400 tracking-tighter">
                            {service.type}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tight mb-4 group-hover:text-cyan-600 transition-colors">
                          {service.name}
                        </h3>

                        <div className="grid grid-cols-2 gap-2 border-t border-slate-50 pt-4 mb-5">
                          <div>
                            <p className="text-[8px] font-black text-slate-300 uppercase">
                              Time
                            </p>
                            <p className="text-[10px] font-bold flex items-center gap-1">
                              <FaClock className="text-cyan-500 text-[8px]" />{" "}
                              {service.time}
                            </p>
                          </div>
                          <div>
                            <p className="text-[8px] font-black text-slate-300 uppercase">
                              Cost
                            </p>
                            <p className="text-[11px] font-black text-slate-900">
                              {service.price}
                            </p>
                          </div>
                        </div>
                      </div>

                      <Link
                        to="/repair-booking"
                        className="inline-flex items-center justify-between bg-slate-900 text-white px-5 py-3 font-black uppercase text-[10px] tracking-widest hover:bg-cyan-500 hover:text-slate-900 transition-all"
                      >
                        Book Slot <FaArrowRight />
                      </Link>
                    </div>

                    {/* ID Watermark Small */}
                    <div className="absolute -bottom-2 -right-1 text-slate-50 text-5xl font-black italic -z-10 opacity-50">
                      0{service.id}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* COMPACT CTA */}
        <div className="mt-20 md:mt-24" data-aos="zoom-in">
          <div className="bg-slate-950 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 rounded-sm">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-black uppercase italic text-white leading-tight">
                NEED A <span className="text-cyan-500">CUSTOM FIX?</span>
              </h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px] mt-1">
                Direct consultation with lead hardware engineers.
              </p>
            </div>
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 font-black uppercase tracking-widest text-[10px] hover:bg-cyan-500 transition-all"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairArena;
