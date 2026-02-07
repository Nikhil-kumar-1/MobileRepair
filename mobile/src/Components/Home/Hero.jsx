import React from "react";
import { motion } from "framer-motion";
import {
  FaTools,
  FaBolt,
  FaShieldAlt,
  FaArrowRight,
  FaMicrochip,
} from "react-icons/fa";

const Hero = () => {
  const marqueeText = [
    "Broken Screen? We Fix It!",
    "Battery Replacement in 30 Mins",
    "Water Damage Recovery",
    "Original Spare Parts",
    "90 Days Warranty",
    "Expert Technicians",
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden pt-24">
      {/* Background Large Decoration - "ARENA" Style */}
      <div className="absolute top-0 right-[-10%] text-slate-50 text-[25rem] md:text-[40rem] font-black italic select-none pointer-events-none -z-0 leading-none">
        FIX
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
          {/* LEFT: POWERFUL TEXT CONTENT */}
          <div className="w-full mb-20 lg:w-3/5 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[3px] w-12 bg-cyan-500"></span>
              <span className="text-cyan-600 font-black uppercase tracking-[0.5em] text-[11px]">
                The Hardware Lab
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-[110px] font-black italic uppercase leading-[0.85] tracking-tighter text-slate-900 mb-8"
            >
              WE DON'T JUST FIX. <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px #0f172a" }}
              >
                WE REVIVE.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-500 text-lg md:text-xl font-bold uppercase tracking-tight max-w-xl mb-12 border-l-4 border-slate-900 pl-6"
            >
              Professional Grade Hardware Restoration. From Micro-soldering to
              Factory-standard Screen Replacement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <button className="bg-slate-950 text-white px-12 py-6 font-black uppercase italic tracking-widest text-sm hover:bg-cyan-500 hover:text-slate-900 transition-all shadow-[10px_10px_0px_#22d3ee] flex items-center gap-4 group">
                Initiate Repair
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>

              <div className="flex items-center gap-4 px-6 border-2 border-slate-100 transform -skew-x-12 bg-slate-50">
                <FaBolt className="text-cyan-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest italic text-slate-900">
                  Express Fix: 30 Mins
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: THE INDUSTRIAL PRODUCT MOCKUP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/5 mt-20 lg:mt-0 relative"
          >
            {/* Geometric Background Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-slate-50 -z-10 rotate-12"></div>

            <div className="relative z-20 transform skew-x-2 hover:skew-x-0 transition-transform duration-700">
              <div className="bg-white border-[16px] border-slate-900 shadow-2xl relative overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=800"
                  alt="Repair Lab"
                  className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />

                {/* Internal Badge */}
                <div className="absolute top-0 right-0 bg-cyan-500 p-6 text-slate-900 font-black italic uppercase text-xs">
                  Lab Certified
                </div>

                {/* Technical Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-4">
                    <FaMicrochip className="text-cyan-500 text-3xl" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
                      Hardware Diagnostics Active
                    </p>
                  </div>
                </div>
              </div>

              {/* Float-behind card */}
              <div className="absolute -bottom-10 -left-10 bg-slate-100 p-8 border-2 border-slate-900 -z-10 hidden md:block">
                <p className="text-5xl font-black italic text-slate-200 uppercase leading-none">
                  SURGERY
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER MARQUEE - REIMAGINED */}
      <div className="absolute bottom-0 w-[110%] left-[-5%] bg-slate-950 py-8 transform rotate-2 z-30 shadow-2xl">
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex space-x-20 items-center whitespace-nowrap"
          >
            {[...marqueeText, ...marqueeText].map((text, index) => (
              <span
                key={index}
                className="text-white text-2xl font-black uppercase italic flex items-center tracking-tighter"
              >
                <span className="w-3 h-3 bg-cyan-500 rounded-full mr-6"></span>
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
