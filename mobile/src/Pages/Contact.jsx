import { useEffect } from "react";
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, 
  FaPaperPlane, FaWhatsapp, FaInstagram 
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans overflow-hidden">
      
      {/* --- HERO: BOLD CONTACT --- */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute top-10 right-[-5%] text-slate-50 text-[10rem] md:text-[20rem] font-black italic select-none pointer-events-none -z-0">
          CONNECT
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="border-l-8 border-cyan-500 pl-6 md:pl-12" data-aos="fade-right">
            <span className="text-cyan-600 font-black uppercase tracking-[0.5em] text-[10px] block mb-4">
              Available 24/7 for support
            </span>
            <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.85] text-slate-900">
              GET IN <br />
              <span className="text-slate-200">TOUCH.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* --- CONTACT GRID: FORM & INFO --- */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* LEFT: Contact Information */}
          <div data-aos="fade-up">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-10 text-slate-900">
              Direct <span className="text-cyan-500">Channels</span>
            </h2>
            
            <div className="space-y-12">
              {/* Phone */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-slate-900 text-cyan-500 flex items-center justify-center text-xl shrink-0 transition-all group-hover:bg-cyan-500 group-hover:text-white">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Call Expert</h4>
                  <p className="text-2xl font-black italic text-slate-800">+91 98765 43210</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-slate-900 text-cyan-500 flex items-center justify-center text-xl shrink-0 transition-all group-hover:bg-cyan-500 group-hover:text-white">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Send Mail</h4>
                  <p className="text-2xl font-black italic text-slate-800">support@repairarena.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-slate-900 text-cyan-500 flex items-center justify-center text-xl shrink-0 transition-all group-hover:bg-cyan-500 group-hover:text-white">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Lab Location</h4>
                  <p className="text-xl font-bold text-slate-600 leading-tight">Sector 62, Noida, Uttar Pradesh, <br />India - 201301</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-16 flex gap-4">
              <a href="#" className="w-12 h-12 border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all"><FaWhatsapp /></a>
              <a href="#" className="w-12 h-12 border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all"><FaInstagram /></a>
            </div>
          </div>

          {/* RIGHT: Modern Contact Form */}
          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-cyan-500 translate-x-4 translate-y-4 -z-10"></div>
            <div className="bg-slate-900 p-8 md:p-12 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-slate-800 border-none text-white px-4 py-4 text-sm focus:ring-2 focus:ring-cyan-500 transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Phone Number</label>
                    <input type="text" placeholder="+91..." className="w-full bg-slate-800 border-none text-white px-4 py-4 text-sm focus:ring-2 focus:ring-cyan-500 transition-all outline-none" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Service Needed</label>
                  <select className="w-full bg-slate-800 border-none text-white px-4 py-4 text-sm focus:ring-2 focus:ring-cyan-500 outline-none appearance-none">
                    <option>Smartphone Repair</option>
                    <option>Laptop Service</option>
                    <option>Motherboard Surgery</option>
                    <option>Data Recovery</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Your Message</label>
                  <textarea rows="4" placeholder="Describe your issue..." className="w-full bg-slate-800 border-none text-white px-4 py-4 text-sm focus:ring-2 focus:ring-cyan-500 transition-all outline-none resize-none"></textarea>
                </div>

                <button className="w-full bg-cyan-500 text-slate-950 font-black uppercase text-xs tracking-[0.2em] py-5 flex items-center justify-center gap-3 hover:bg-white transition-all duration-300">
                  Send Request <FaPaperPlane className="text-[10px]" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* --- FULL WIDTH GOOGLE MAP SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">Visit Our <span className="text-cyan-500">Lab</span></h2>
              <div className="h-1 w-24 bg-slate-950 mt-2"></div>
            </div>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest md:text-right">Open: Mon - Sat (10:00 AM - 08:00 PM)</p>
          </div>

          <div className="relative h-[450px] w-full bg-slate-100 grayscale hover:grayscale-0 transition-all duration-700 border-2 border-slate-900" data-aos="zoom-in">
            {/* Replace the iframe src with your actual Google Maps embed link */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.11482716333!2d77.3597395!3d28.6289017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d45%3A0x1b923916b622d421!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            
            {/* Industrial Overlay Decoration */}
            <div className="absolute top-4 left-4 bg-slate-900 text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest pointer-events-none">
              Live Location
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;