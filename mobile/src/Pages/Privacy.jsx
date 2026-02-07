import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PrivacyPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-white min-h-screen pt-40 pb-20 px-6 font-sans">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div
          className="border-l-8 border-cyan-500 pl-8 mb-20"
          data-aos="fade-right"
        >
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-slate-900 leading-none">
            DATA <br />
            <span
              className="text-white"
              style={{ WebkitTextStroke: "2px #0f172a" }}
            >
              PROTOCOL.
            </span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px] mt-4">
            Privacy Policy • Last Updated: Feb 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-16 text-slate-600" data-aos="fade-up">
          <section>
            <h3 className="text-2xl font-black italic uppercase text-slate-900 mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-cyan-500"></span> 01. Information
              Collection
            </h3>
            <p className="font-medium leading-relaxed tracking-wide">
              We collect essential technical data required to perform hardware
              diagnostics. This includes your device model, serial number, and
              contact details. We do not access personal files unless explicitly
              required for Data Recovery services.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-black italic uppercase text-slate-900 mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-cyan-500"></span> 02. Data
              Security
            </h3>
            <p className="font-medium leading-relaxed tracking-wide">
              Your device integrity is our priority. During the "Repair Phase,"
              devices are kept in a secure, monitored lab environment. Any data
              backup taken for recovery purposes is encrypted and permanently
              purged after the service is completed.
            </p>
          </section>

          <section className="bg-slate-950 p-10 text-white transform -skew-x-2">
            <h3 className="text-xl font-black italic uppercase text-cyan-500 mb-4">
              Laboratory Integrity Note
            </h3>
            <p className="text-sm font-bold opacity-80 uppercase tracking-widest leading-loose">
              Phone Service Center follows strict USA-standard privacy laws. We
              never sell, trade, or leak client information to third-party
              marketing agencies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
