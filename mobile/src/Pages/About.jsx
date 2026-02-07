import { useEffect } from "react";
import {
  FaMicrochip,
  FaUserShield,
  FaAward,
  FaHistory,
  FaCheckCircle,
  FaTools,
  FaGlobeAmericas,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stats = [
    { label: "Devices Revived", value: "25k+", icon: <FaMicrochip /> },
    { label: "Success Rate", value: "99.2%", icon: <FaAward /> },
    { label: "Years in Lab", value: "12+", icon: <FaHistory /> },
    { label: "Lead Engineers", value: "08+", icon: <FaUserShield /> },
  ];

  return (
    <div className="bg-white min-h-screen font-sans overflow-hidden">
      {/* --- HERO: ARCHITECTURAL BOLDNESS --- */}
      <section className="relative pt-40 pb-24 px-6 border-b border-slate-100">
        <div className="absolute top-10 right-[-10%] text-slate-50 text-[12rem] md:text-[25rem] font-black italic select-none pointer-events-none -z-0 uppercase leading-none">
          LEGACY
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div
            className="border-l-[12px] border-cyan-500 pl-8 md:pl-16"
            data-aos="fade-right"
          >
            <span className="text-cyan-600 font-black uppercase tracking-[0.6em] text-[11px] block mb-6">
              Founded 2014 • Master Engineering Group
            </span>
            <h1 className="text-4xl md:text-[10rem] font-black italic uppercase tracking-tighter leading-[0.8] text-slate-900">
              CRAFTING <br />
              <span
                className="text-white"
                style={{ WebkitTextStroke: "3px #0f172a" }}
              >
                PRECISION.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* --- THE MISSION: NARRATIVE SECTION --- */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative" data-aos="fade-up">
            <div className="inline-block bg-slate-900 text-cyan-400 px-4 py-1 mb-6 text-[10px] font-black uppercase tracking-widest skew-x-[-15deg]">
              Expertise Level: 04
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900 mb-10 leading-none">
              Beyond Repair. <br />
              <span className="text-cyan-500">Pure Engineering.</span>
            </h2>
            <div className="space-y-8 text-slate-500 font-bold text-sm md:text-base uppercase tracking-wider leading-relaxed">
              <p>
                What started as a specialized hardware lab in 2014 has evolved
                into one of the country's most advanced **Level 4
                Micro-Soldering facilities**. We don't believe in temporary
                fixes; we believe in structural restoration.
              </p>
              <p className="border-l-4 border-slate-100 pl-6 italic">
                Our mission is to challenge the "disposable" culture of modern
                electronics. Every motherboard that enters our lab is treated as
                a high-precision surgery. If it has a circuit, we have a
                solution.
              </p>
              <div className="flex items-center gap-4 text-slate-900">
                <FaGlobeAmericas className="text-cyan-500 text-2xl" />
                <span className="text-[10px] tracking-[0.3em]">
                  OPERATING AT GLOBAL STANDARDS
                </span>
              </div>
            </div>
          </div>

          {/* STATS: INDUSTRIAL GRID */}
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-10 flex flex-col items-center justify-center text-center group hover:bg-slate-950 transition-all duration-700 relative overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="text-4xl text-cyan-500 group-hover:scale-110 transition-transform mb-6">
                  {item.icon}
                </div>
                <h4 className="text-4xl md:text-5xl font-black italic text-slate-900 group-hover:text-white leading-none mb-3 tracking-tighter">
                  {item.value}
                </h4>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-cyan-500">
                  {item.label}
                </p>
                {/* Background Number Decal */}
                <span className="absolute -bottom-4 -right-2 text-slate-200/50 text-6xl font-black italic group-hover:text-white/5 transition-colors">
                  0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE VALUES: THE DNA --- */}
      <section className="bg-slate-950 py-32 px-6 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div data-aos="fade-right">
              <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white">
                OUR <span className="text-cyan-500">DNA</span>
              </h2>
            </div>
            <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px] md:max-w-xs text-right">
              The fundamental principles that drive every restoration project in
              our facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-slate-800 border border-slate-800">
            {[
              {
                title: "Nano Precision",
                desc: "Operating at 0.01mm accuracy using world-class micro-soldering equipment. We see what others miss.",
              },
              {
                title: "OEM Integrity",
                desc: "We exclusively utilize Grade-A original components. We refuse to compromise your device's lifespan with generic parts.",
              },
              {
                title: "Live Protocol",
                desc: "Complete transparency. From diagnostic reports to component replacement, every step is logged and verified.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-slate-950 p-16 hover:bg-slate-900 transition-all group"
                data-aos="fade-up"
              >
                <div className="w-12 h-1 bg-cyan-500 mb-8 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-2xl font-black italic uppercase mb-6 text-white tracking-tight">
                  {v.title}
                </h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed tracking-wide">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LAB PHILOSOPHY CTA --- */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-[1000px] mx-auto" data-aos="zoom-out">
          <FaTools className="text-cyan-500 text-5xl mx-auto mb-10" />
          <h2 className="text-4xl md:text-7xl font-black italic uppercase text-slate-900 leading-none mb-10">
            "Electronics are not <br />
            <span
              className="text-white"
              style={{ WebkitTextStroke: "1.5px #0f172a" }}
            >
              Disposable waste."
            </span>
          </h2>
          <p className="text-slate-400 font-bold text-lg italic max-w-2xl mx-auto leading-relaxed">
            We are here to lead the 'Repair Revolution'. Our lab is dedicated to
            extending the life of your technology through superior engineering
            and unmatched craftsmanship.
          </p>
          <div className="mt-16 flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-slate-50 p-8 border border-slate-100">
              <span className="block text-4xl font-black italic text-slate-950">
                100%
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600">
                Certified Parts
              </span>
            </div>
            <div className="bg-slate-50 p-8 border border-slate-100">
              <span className="block text-4xl font-black italic text-slate-950">
                24H
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600">
                Avg. Turnaround
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
