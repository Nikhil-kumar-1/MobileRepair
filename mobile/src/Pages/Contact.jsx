import { useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import GetInTouch from "../Components/Home/GetInTouch";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const contactDetails = [
    {
      id: 1,
      title: "Direct Line",
      info: "(844) 449-9672",
      sub: "Mon-Sat, 10am-8pm",
      icon: <FaPhoneAlt />,
      link: "tel:8444499672",
    },
    {
      id: 2,
      title: "Technical Support",
      info: "support@smartfix.com",
      sub: "24/7 Digital Inquiry",
      icon: <FaEnvelope />,
      link: "mailto:support@smartfix.com",
    },
    {
      id: 3,
      title: "Global HQ",
      info: "1540 Broadway, NY",
      sub: "New York, USA 10036",
      icon: <FaMapMarkerAlt />,
      link: "#",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans overflow-hidden">
      {/* --- HERO: GET IN TOUCH COMPONENT --- */}
      <GetInTouch />

      {/* --- INDUSTRIAL CONTACT CARDS --- */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-slate-200 border border-slate-200">
          {contactDetails.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="bg-white p-12 group hover:bg-slate-950 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={item.id * 100}
            >
              <div className="text-cyan-500 text-3xl mb-8 transform group-hover:scale-110 group-hover:-rotate-12 transition-all">
                {item.icon}
              </div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-cyan-500 mb-2">
                {item.title}
              </h3>
              <p className="text-l md:text-2xl font-black italic uppercase text-slate-900 group-hover:text-white mb-2 tracking-tighter">
                {item.info}
              </p>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest group-hover:text-slate-500">
                {item.sub}
              </p>
              <div className="mt-8 flex items-center gap-2 text-cyan-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Connect Now
                </span>
                <FaArrowRight className="text-[10px]" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="pb-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
            <div data-aos="fade-right">
              <span className="text-cyan-600 font-black uppercase tracking-[0.5em] text-[10px]">
                On-Site Operations
              </span>
              <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-slate-900 mt-2">
                VISIT THE <br />
                <span
                  className="text-white"
                  style={{ WebkitTextStroke: "2px #0f172a" }}
                >
                  ENGINEERING LAB.
                </span>
              </h2>
            </div>

            <div
              className="bg-slate-50 p-6 border-l-4 border-cyan-500"
              data-aos="fade-left"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaClock className="text-cyan-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                  Lab Schedule
                </span>
              </div>
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">
                Mon - Sat: 10:00 - 20:00
              </p>
              <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-1 italic">
                Sunday: Critical Repairs Only
              </p>
            </div>
          </div>

          <div
            className="relative h-[550px] w-full bg-slate-900 group border-[12px] border-slate-950"
            data-aos="zoom-in"
          >
            {/* Overlay for aesthetic */}
            <div className="absolute inset-0 border-[1px] border-white/10 pointer-events-none z-10"></div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.412153497144!2d-73.98785312341!3d40.75889497138677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale invert contrast-125 opacity-80 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-1000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Industrial Tag */}
            <div className="absolute bottom-6 left-6 bg-cyan-500 text-slate-950 px-6 py-3 text-[11px] font-black uppercase tracking-[0.3em] z-20 skew-x-[-12deg] shadow-2xl">
              HQ-Secure Location
            </div>
          </div>
        </div>
      </section>

      {/* --- WHATSAPP FLOATING ACTION --- */}
      <a
        href="https://wa.me/8444499672"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 left-10 z-[100] bg-green-500 text-white w-16 h-16 flex items-center justify-center text-2xl rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default ContactPage;
