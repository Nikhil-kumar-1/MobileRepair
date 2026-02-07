import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaClock,
  FaBolt,
  FaPlus,
  FaPhoneAlt,
  FaMicrochip,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const RepairArena = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Simulating Data Fetch
    setTimeout(() => {
      setServices([
        {
          id: 1,
          name: "Screen Restoration",
          time: "30-45 Mins",
          price: "$89.00",
          type: "OLED/LCD",
          status: "Popular",
          img: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=500",
        },
        {
          id: 2,
          name: "Battery Overhaul",
          time: "20 Mins",
          price: "$45.00",
          type: "Li-ion",
          status: "Express",
          img: "https://images.unsplash.com/photo-1611396000732-f8c9a933424f?w=600&auto=format&fit=crop&q=60",
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
          name: "Logic Board Surgery",
          time: "24 Hours",
          price: "$120.00+",
          type: "Micro-Solder",
          status: "Level 4",
          img: "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=600&auto=format&fit=crop&q=60",
        },
      ]);
      setLoading(false);
    }, 600);
  }, []);

  const phoneNumber = "(844) 449-9672";
  const rawNumber = "8444499672";

  return (
    <div className="min-h-screen py-12 md:py-20 px-4 md:px-8 bg-white text-slate-900 font-sans overflow-hidden relative">
      {/* Background Watermark Decoration */}
      <div className="absolute top-10 right-[-5%] text-slate-100 text-[10rem] md:text-[18rem] font-black italic select-none pointer-events-none -z-0 leading-none opacity-50">
        REPAIR
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* --- REFINED HEADER --- */}
        <div
          className="mb-12 md:mb-20 flex flex-col md:flex-row items-start md:items-end justify-between border-b-4 border-slate-900 pb-10 gap-6"
          data-aos="fade-down"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[4px] w-12 bg-cyan-500"></span>
              <span className="text-cyan-600 font-black uppercase tracking-[0.4em] text-[10px]">
                Precision Lab Services
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
              SERVICE{" "}
              <span
                className="text-white"
                style={{ WebkitTextStroke: "2px #0f172a" }}
              >
                ARENA
              </span>
            </h1>
          </div>
          <div className="md:text-right">
            <p className="max-w-[300px] text-slate-500 font-bold text-[12px] uppercase tracking-widest leading-relaxed mb-2">
              Surgical grade repairs for high-end digital architecture.
            </p>
            <p className="text-cyan-600 font-black text-lg">{phoneNumber}</p>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-40 gap-4">
            <div className="w-12 h-12 border-4 border-slate-100 border-t-cyan-500 rounded-full animate-spin"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Initializing Lab...
            </span>
          </div>
        ) : (
          <>
            {/* --- SERVICES GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {services.map((service) => (
                <div key={service.id} className="group" data-aos="fade-up">
                  <div className="relative h-full transition-all duration-500 border-l-4 border-transparent group-hover:border-cyan-500 pl-0 group-hover:pl-2">
                    <div className="bg-slate-50 border border-slate-200 overflow-hidden flex flex-col sm:flex-row h-full group-hover:shadow-2xl transition-all">
                      {/* Service Image */}
                      <div className="w-full sm:w-48 h-56 sm:h-auto overflow-hidden relative">
                        <img
                          src={service.img}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                          alt={service.name}
                        />
                        <div className="absolute top-0 left-0 bg-slate-900 text-white text-[9px] font-black uppercase px-4 py-2">
                          {service.status}
                        </div>
                      </div>

                      {/* Service Info */}
                      <div className="flex-1 p-6 flex flex-col justify-between bg-white">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <FaBolt className="text-cyan-500 text-[10px]" />
                            <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">
                              {service.type}
                            </span>
                          </div>

                          <h3 className="text-2xl font-black italic uppercase tracking-tight mb-6 group-hover:text-cyan-600 transition-colors">
                            {service.name}
                          </h3>

                          <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-4 mb-6">
                            <div>
                              <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest">
                                Timeframe
                              </p>
                              <p className="text-[12px] font-bold flex items-center gap-2 mt-1">
                                <FaClock className="text-cyan-500" />{" "}
                                {service.time}
                              </p>
                            </div>
                            <div>
                              <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest">
                                Price Est.
                              </p>
                              <p className="text-[14px] font-black text-slate-900 mt-1">
                                {service.price}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Updated Call Now Button */}
                        <a
                          href={`tel:${rawNumber}`}
                          className="flex items-center justify-center gap-3 bg-slate-900 text-white px-6 py-4 font-black uppercase text-[11px] tracking-[0.2em] hover:bg-cyan-500 hover:text-slate-900 transition-all shadow-lg"
                        >
                          <FaPhoneAlt size={12} /> Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- VIEW MORE SECTION --- */}
            <div className="mt-16 flex justify-center" data-aos="fade-up">
              <button
                onClick={() => navigate("/services")}
                className="group flex items-center gap-6 border-2 border-slate-900 px-12 py-5 font-black uppercase text-[12px] tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-xl"
              >
                Explore All Services
                <FaPlus className="text-cyan-500 group-hover:rotate-90 transition-transform" />
              </button>
            </div>
          </>
        )}

        {/* --- PREMIUM CALL TO ACTION --- */}
        <div className="mt-24" data-aos="zoom-in">
          <div className="bg-slate-950 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden rounded-sm">
            {/* Design Element */}
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"></div>

            <div className="text-center md:text-left relative z-10">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <FaMicrochip className="text-cyan-500 text-2xl" />
                <span className="text-cyan-500 font-black tracking-[0.5em] text-[10px] uppercase">
                  Expert Consultation
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white leading-[0.9]">
                NEED A <span className="text-cyan-500">CUSTOM</span> <br />
                HARDWARE FIX?
              </h2>
              <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[11px] mt-6">
                Direct Technical Line:{" "}
                <span className="text-white ml-2">{phoneNumber}</span>
              </p>
            </div>

            <a
              href={`tel:${rawNumber}`}
              className="group bg-white text-slate-900 px-12 py-6 font-black uppercase tracking-[0.2em] text-[13px] hover:bg-cyan-500 transition-all relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4"
            >
              <FaPhoneAlt className="group-hover:animate-bounce" /> Get Expert
              Advice
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairArena;
