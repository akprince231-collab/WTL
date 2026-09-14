import React from 'react';
import { Compass, Sparkles } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  return (
    <section
      id="brand-statement"
      className="relative py-28 sm:py-36 bg-[#070D18] border-y border-white/[0.06] overflow-hidden"
    >
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[#E5A910]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle diagonal background lines */}
      <div className="absolute inset-0 bg-grid-tech opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Accent Column */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-tech tracking-wider text-[#E5A910] uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#E5A910]" />
              <span>THE WTL PHILOSOPHY</span>
            </div>

            <div className="w-16 h-[2px] bg-[#E5A910] mb-6" />

            <p className="text-xs font-tech text-slate-400 uppercase tracking-widest leading-relaxed">
              PRECISION FRAME ARCHITECTURE // TORSIONAL TUNING // AERODYNAMIC INTEGRATION
            </p>
          </div>

          {/* Large Headline & Editorial Manifesto */}
          <div className="lg:col-span-8">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[1.05] mb-8">
              MORE THAN <br />
              <span className="text-[#E5A910]">A BICYCLE.</span>
            </h2>

            <blockquote className="text-xl sm:text-2xl md:text-3xl text-slate-200 font-light leading-relaxed mb-6 border-l-2 border-[#E5A910]/40 pl-6 sm:pl-8 italic">
              “Every ride begins with movement. Every journey becomes a story.”
            </blockquote>

            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl">
              We design bicycles that connect rider and terrain in seamless harmony. From high-modulus road racing carbon to aggressive trail hardtails, every WTL frame is shaped by the relentless pursuit of speed, structural balance, and the pure joy of human propulsion.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
