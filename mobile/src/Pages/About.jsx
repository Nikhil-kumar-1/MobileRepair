import { useEffect } from "react";
import {
  FaMicrochip,
  FaUserShield,
  FaAward,
  FaHistory,
  FaCheckCircle,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stats = [
    { label: "Devices Revived", value: "15k+", icon: <FaMicrochip /> },
    { label: "Success Rate", value: "98.5%", icon: <FaAward /> },
    { label: "Years Experience", value: "10+", icon: <FaHistory /> },
    { label: "Expert Engineers", value: "12+", icon: <FaUserShield /> },
  ];

  return (
    <div className="bg-white min-h-screen font-sans overflow-hidden">
      {/* --- HERO: BOLD IDENTITY --- */}
      <section className="relative pt-32 pb-20 px-6 border-b border-slate-50">
        <div className="absolute top-10 right-[-5%] text-slate-50 text-[10rem] md:text-[20rem] font-black italic select-none pointer-events-none -z-0">
          WHO WE ARE
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div
            className="border-l-8 border-cyan-500 pl-6 md:pl-12"
            data-aos="fade-right"
          >
            <span className="text-cyan-600 font-black uppercase tracking-[0.5em] text-[10px] block mb-4">
              Est. 2014 • Technical Excellence
            </span>
            <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.85] text-slate-900">
              REDEFINING <br />
              <span
                className="text-slate-200"
                style={{ WebkitTextStroke: "2px #e2e8f0" }}
              >
                POSSIBLE.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* --- THE STORY (EXPLANATION SECTION) --- */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative" data-aos="fade-up">
            {/* Decorative Box */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-50 -z-10 rounded-full blur-3xl opacity-50"></div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900 mb-8 leading-none">
              We don't just fix; <br />
              <span className="text-cyan-500">We Restore.</span>
            </h2>
            <div className="space-y-6 text-slate-500 font-medium leading-relaxed">
              <p>
                Hamari shuruat ek choti si lab se hui thi jahan hum sirf
                hardware problems solve karte the. Lekin aaj, hum India ki
                leading **Level 4 Micro-Soldering Lab** ban chuke hain. Hamara
                maqsad sirf device thik karna nahi, balki use original factory
                condition mein wapas lana hai.
              </p>
              <p>
                Har ek motherboard jo hamare paas aata hai, wo ek challenge hota
                hai. Humne un devices ko bhi zinda kiya hai jinhe badi-badi
                companies ne "Dead" bol kar wapas kar diya tha.
              </p>
            </div>
          </div>

          {/* PARALLELOGRAM STATS GRID */}
          <div className="grid grid-cols-2 gap-6 md:transform md:-rotate-3">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 p-8 flex flex-col items-center justify-center text-center group hover:bg-cyan-500 transition-all duration-500 shadow-2xl"
              >
                <div className="text-3xl text-cyan-500 group-hover:text-white mb-4 transform group-hover:scale-125 transition-all">
                  {item.icon}
                </div>
                <h4 className="text-3xl font-black italic text-white leading-none mb-2">
                  {item.value}
                </h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE VALUES: THE "WHY" --- */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-slate-900">
              OUR <span className="text-cyan-500">DNA</span>
            </h2>
            <div className="h-2 w-24 bg-slate-900 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Precision",
                desc: "Hum 0.01mm ki accuracy ke saath micro-soldering karte hain. No shortcuts, only perfection.",
              },
              {
                title: "Transparency",
                desc: "Aapke device mein kya badla gaya aur kyun badla gaya, har cheez ka live report.",
              },
              {
                title: "Quality",
                desc: "Sirf OEM Grade parts. Hum saste Chinese parts use karke aapke device ki life kharab nahi karte.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white p-10 border-b-4 border-slate-900 hover:border-cyan-500 transition-all shadow-sm"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <FaCheckCircle className="text-cyan-500 text-3xl mb-6" />
                <h3 className="text-2xl font-black italic uppercase mb-4 text-slate-800">
                  {v.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRIAL PHILOSOPHY --- */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto bg-slate-950 p-12 md:p-24 relative overflow-hidden text-center md:text-left">
          {/* Background Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#06b6d4 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white leading-[0.9] mb-8">
                THE LAB <br />
                <span className="text-cyan-500">PHILOSOPHY</span>
              </h2>
              <p className="text-slate-400 font-medium italic text-lg leading-relaxed">
                "Electronics are not disposable waste. With the right skill and
                equipment, everything can be saved. We are here to fight the
                'Replace' culture with 'Repair' culture."
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="border-4 border-white/10 p-4">
                <div className="bg-white/5 backdrop-blur-sm p-8 text-center">
                  <span className="text-cyan-500 text-5xl font-black italic block">
                    100%
                  </span>
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">
                    Commitment Rate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
