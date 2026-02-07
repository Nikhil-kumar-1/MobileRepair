import React from "react";
import { FaMapMarkerAlt, FaPaperPlane, FaClock, FaTools } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Large Text Decoration */}
      <div className="absolute top-10 left-[-5%] text-gray-50 text-[15rem] md:text-[22rem] font-black italic select-none pointer-events-none -z-0 leading-none">
        CONTACT
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[3px] w-12 bg-cyan-500"></span>
            <span className="text-cyan-600 font-black uppercase tracking-[0.5em] text-[10px]">
              Direct Assistance
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]">
            READY TO{" "}
            <span
              className="text-slate-200"
              style={{ WebkitTextStroke: "1.5px #cbd5e1" }}
            >
              REVIVE?
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 border-2 border-slate-900 shadow-[20px_20px_0px_#22d3ee]">
          {/* LEFT: MAP SECTION */}
          <div className="lg:w-1/2 min-h-[400px] relative bg-slate-100 group">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5117282068!2d77.363944!3d28.6144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5619ff56545%3A0x8085d3839257e3f4!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 contrast-125"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>

            {/* Floating Info Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-slate-950 p-6 text-white transform -skew-x-2 border-l-4 border-cyan-500 hidden md:block">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-500 text-2xl" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-cyan-500">
                    Main Lab
                  </p>
                  <p className="text-sm font-black italic uppercase">
                    Sector 62, Noida, UP 201301
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM SECTION */}
          <div className="lg:w-1/2 bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden">
            {/* Form Texture Background */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <FaTools className="text-9xl -rotate-12" />
            </div>

            <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="E.G. NIKHIL KUMAR"
                    className="w-full bg-transparent border-b-2 border-slate-700 py-3 text-sm focus:border-cyan-500 outline-none transition-all placeholder:text-slate-600 font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500">
                    Device Model
                  </label>
                  <input
                    type="text"
                    placeholder="E.G. IPHONE 15 PRO"
                    className="w-full bg-transparent border-b-2 border-slate-700 py-3 text-sm focus:border-cyan-500 outline-none transition-all placeholder:text-slate-600 font-bold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500">
                  Service Needed
                </label>
                <select className="w-full bg-slate-800 border-none py-4 px-4 text-sm focus:ring-2 focus:ring-cyan-500 outline-none font-bold italic appearance-none cursor-pointer">
                  <option>SCREEN RESTORATION</option>
                  <option>BATTERY OVERHAUL</option>
                  <option>MOTHERBOARD SURGERY</option>
                  <option>LIQUID DAMAGE FIX</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500">
                  Issue Details
                </label>
                <textarea
                  rows="3"
                  placeholder="DESCRIBE THE PROBLEM..."
                  className="w-full bg-transparent border-b-2 border-slate-700 py-3 text-sm focus:border-cyan-500 outline-none transition-all placeholder:text-slate-600 font-bold resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-cyan-500 text-slate-900 py-5 font-black uppercase italic tracking-[0.3em] text-xs hover:bg-white transition-all flex items-center justify-center gap-4 group">
                Send Request
                <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 flex items-center gap-6 opacity-50">
              <div className="flex items-center gap-2">
                <FaClock className="text-cyan-500 text-xs" />
                <span className="text-[9px] font-black uppercase tracking-widest">
                  Avg Response: 15 Mins
                </span>
              </div>
              <div className="h-[1px] flex-1 bg-slate-700"></div>
            </div>
          </div>
        </div>

        {/* Floating Call to Action Tag */}
        <div className="mt-12 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
            Precision • Speed • Reliability
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
