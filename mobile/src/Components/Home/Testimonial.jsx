import React from "react";
import { FaQuoteRight, FaStar, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Rohan Sharma",
      role: "iPhone 14 User",
      text: "Mera screen puri tarah crack ho gaya tha. SmartFix ne 40 mins mein thik kar diya!",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      name: "Sneha Kapoor",
      role: "Samsung S23 User",
      text: "Water damage recovery ke liye best place. Motherboard level repair expert hain.",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=2",
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Pixel 7 Pro User",
      text: "Express battery replacement service is top-notch. Transparency ke saath kaam karte hain.",
      rating: 4,
      img: "https://i.pravatar.cc/150?u=3",
    },
    {
      id: 4,
      name: "Priya Das",
      role: "OnePlus 11 User",
      text: "Inka software update fix kamaal ka hai. Mera phone dead tha, ab smooth chal raha hai.",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=4",
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "iPhone 13 User",
      text: "Authentic parts use karte hain. Warranty bhi mili hai, so tension ki baat nahi.",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=5",
    },
    {
      id: 6,
      name: "Rahul Mehta",
      role: "iPad Air User",
      text: "Tablet repair ke liye best place. Display replacement bilkul factory jaisa hai.",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=6",
    },
    {
      id: 7,
      name: "Ananya Iyer",
      role: "MacBook User",
      text: "Sirf mobile hi nahi, laptop repair mein bhi mahir hain. Quick diagnosis!",
      rating: 4,
      img: "https://i.pravatar.cc/150?u=7",
    },
    {
      id: 8,
      name: "Kabir Khan",
      role: "Nothing Phone User",
      text: "Transparent pricing aur honest advice. Koi hidden charges nahi liye.",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=8",
    },
    {
      id: 9,
      name: "Sonia Goel",
      role: "Redmi Note 12 User",
      text: "Charging port issue tha, 15 minute mein fix kar diya. Bahut badhiya service!",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=9",
    },
    {
      id: 10,
      name: "Arjun Reddy",
      role: "Asus ROG User",
      text: "Gaming phone repair ke liye technical expertise chahiye, jo yahan milti hai.",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=10",
    },
  ];

  // Doubling the array for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-0 right-0 text-slate-50 text-[18rem] font-black italic select-none pointer-events-none -z-0 leading-none translate-x-1/4">
        VOICES
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-[1400px] mx-auto px-6 mb-16 border-b-2 border-slate-100 pb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[3px] w-12 bg-cyan-500"></span>
            <span className="text-cyan-600 font-black uppercase tracking-[0.5em] text-[10px]">
              Global Trust
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]">
            USER{" "}
            <span
              className="text-slate-200"
              style={{ WebkitTextStroke: "1.5px #e2e8f0" }}
            >
              VERDICTS.
            </span>
          </h2>
        </div>

        {/* --- INFINITE SCROLL CONTAINER --- */}
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex gap-8 py-4"
            animate={{
              x: ["0%", "-50%"], // Moves from right to left
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Speed control (higher = slower)
                ease: "linear",
              },
            }}
          >
            {duplicatedReviews.map((review, i) => (
              <div
                key={i}
                className="w-[350px] md:w-[450px] flex-shrink-0 relative bg-white border-2 border-slate-100 p-8 hover:border-cyan-500 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <FaQuoteRight className="absolute top-6 right-8 text-slate-100 text-5xl" />

                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-cyan-500 text-xs" />
                    ))}
                  </div>

                  <p className="text-slate-600 font-medium text-base leading-relaxed mb-8 italic">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                    <div className="relative">
                      <img
                        src={review.img}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border-2 border-white"
                      />
                      <FaCheckCircle className="absolute -bottom-1 -right-1 text-cyan-500 bg-white rounded-full text-sm" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-black italic uppercase text-xs tracking-tight">
                        {review.name}
                      </h4>
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="max-w-[1400px] mx-auto px-6 mt-20">
          <div className="bg-slate-950 p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white skew-x-[-2deg] shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-cyan-500/10 opacity-20 pointer-events-none italic font-black text-6xl translate-y-8">
              TRUSTED SERVICE
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black italic uppercase leading-none mb-2">
                Ready for a revival?
              </h3>
              <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                Join 15,000+ satisfied tech owners today.
              </p>
            </div>

            <button className="relative z-10 bg-white text-slate-900 px-12 py-5 font-black uppercase italic text-xs tracking-widest hover:bg-cyan-500 transition-all transform skew-x-[2deg]">
              Book Instant Repair
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
