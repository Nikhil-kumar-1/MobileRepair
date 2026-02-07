import React from "react";
import { motion } from "framer-motion";
import {
  FaMicrochip,
  FaTools,
  FaShieldAlt,
  FaUserCheck,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.03] select-none">
        <h1 className="text-[20rem] font-black italic -rotate-12 translate-x-[-10%] translate-y-[20%]">
          SMARTFIX
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Side: Creative Image Grid */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
            <div className="relative z-10 transform -skew-x-3">
              <img
                src="https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?q=80&w=800"
                alt="Repair Workshop"
                className="w-full h-[500px] object-cover border-[12px] border-white shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 bg-cyan-500 p-8 text-slate-900 shadow-xl skew-x-6 hidden md:block">
                <p className="text-4xl font-black italic leading-none mb-1">
                  10Y+
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest">
                  Mastery in Repair
                </p>
              </div>
            </div>
            {/* Background Accent Box */}
            <div className="absolute top-10 left-10 w-full h-full border-2 border-cyan-500/20 -z-10 translate-x-4 translate-y-4"></div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-left">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-12 bg-cyan-500"></span>
                <span className="text-cyan-600 font-black uppercase tracking-[0.4em] text-[11px]">
                  The Repair Revolution
                </span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter">
                WE HEAL <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px #0f172a" }}
                >
                  YOUR TECH.
                </span>
              </h2>
            </div>

            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
              At SmartFix, we don't just replace screens; we restore your
              connection to the world. Our lab combines surgical precision with
              factory-grade components to give your device a second life.
            </p>

            {/* Feature Icons Grid */}
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="bg-slate-50 p-3 rounded-xl group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <FaMicrochip className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-black italic uppercase text-sm tracking-tight">
                    Micro Soldering
                  </h4>
                  <p className="text-xs text-slate-400 font-bold uppercase mt-1">
                    Level 4 Expertise
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="bg-slate-50 p-3 rounded-xl group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <FaShieldAlt className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-black italic uppercase text-sm tracking-tight">
                    Genuine Parts
                  </h4>
                  <p className="text-xs text-slate-400 font-bold uppercase mt-1">
                    Zero Compromise
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap gap-6 items-center">
              <Link
                to="/about"
                className="bg-slate-900 text-white px-10 py-5 font-black uppercase italic tracking-[0.2em] text-xs hover:bg-cyan-500 hover:text-slate-900 transition-all shadow-[8px_8px_0px_rgba(15,23,42,0.1)] flex items-center gap-4 group"
              >
                Learn Our Story
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>

              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white object-cover"
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt="customer"
                  />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-cyan-500 flex items-center justify-center text-[10px] font-black text-slate-900">
                  +15k
                </div>
              </div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                Happy <br /> Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
