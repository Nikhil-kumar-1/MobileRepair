import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TermsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-white min-h-screen pt-40 pb-20 px-6 font-sans">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div
          className="border-l-8 border-slate-950 pl-8 mb-20"
          data-aos="fade-right"
        >
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-slate-900 leading-none">
            SERVICE <br />
            <span className="text-cyan-500">TERMS.</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px] mt-4">
            Legal Agreement • Standard Operating Procedure
          </p>
        </div>

        {/* Content Section */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          data-aos="fade-up"
        >
          <div className="border border-slate-100 p-8 hover:border-cyan-500 transition-colors">
            <span className="text-cyan-500 font-black text-xs uppercase tracking-widest">
              Section A
            </span>
            <h3 className="text-xl font-black italic uppercase text-slate-900 mt-2 mb-4">
              Repair Warranty
            </h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              All hardware repairs (excluding liquid damage) come with a
              standard 90-day lab warranty. This cover includes part defects but
              excludes physical damage or unauthorized third-party intervention.
            </p>
          </div>

          <div className="border border-slate-100 p-8 hover:border-cyan-500 transition-colors">
            <span className="text-cyan-500 font-black text-xs uppercase tracking-widest">
              Section B
            </span>
            <h3 className="text-xl font-black italic uppercase text-slate-900 mt-2 mb-4">
              Device Abandonment
            </h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Devices not collected within 30 days of repair completion notice
              will be moved to long-term storage. After 60 days, the center
              reserves the right to recycle the device to recover service costs.
            </p>
          </div>

          <div className="border border-slate-100 p-8 hover:border-cyan-500 transition-colors">
            <span className="text-cyan-500 font-black text-xs uppercase tracking-widest">
              Section C
            </span>
            <h3 className="text-xl font-black italic uppercase text-slate-900 mt-2 mb-4">
              Diagnostic Fees
            </h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              A standard diagnostic fee applies to all "No Fix" or "Refused
              Estimate" cases. This covers the labor and precision equipment
              usage during the troubleshooting phase.
            </p>
          </div>

          <div className="border border-slate-100 p-8 hover:border-cyan-500 transition-colors">
            <span className="text-cyan-500 font-black text-xs uppercase tracking-widest">
              Section D
            </span>
            <h3 className="text-xl font-black italic uppercase text-slate-900 mt-2 mb-4">
              Risk Disclosure
            </h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Complex board repairs (IC replacements) involve heat. While we
              maintain a 99% success rate, pre-existing micro-fractures in
              "Dead" devices can occasionally lead to total failure.
            </p>
          </div>
        </div>

        {/* Support Footer */}
        <div className="mt-20 p-10 bg-slate-50 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
            Questions regarding our terms? Call Support
          </p>
          <p className="text-2xl font-black italic text-slate-900 mt-2">
            (844) 449-9672
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
