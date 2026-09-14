import React from 'react';
import { ENGINEERING_PILLARS } from '../data/bikesData';
import { ShieldCheck, CheckCircle, ArrowUpRight } from 'lucide-react';

export const EngineeringSection: React.FC = () => {
  return (
    <section
      id="engineering"
      className="relative py-28 sm:py-36 bg-[#0B1426] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A910]/10 border border-[#E5A910]/30 text-xs font-tech font-bold text-[#E5A910] uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E5A910]" />
            <span>METRIC-TESTED DESIGN STANDARDS</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-tight mb-6">
            ENGINEERED <br />
            <span className="text-[#E5A910]">FOR THE RIDE.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Every contour, carbon filament, and pivot point is subjected to rigorous computational analysis and physical road testing to deliver unconditional reliability.
          </p>
        </div>

        {/* 4 Alternating Editorial Blocks */}
        <div className="space-y-24 sm:space-y-32">
          {ENGINEERING_PILLARS.map((pillar, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={pillar.title}
                id={`engineering-block-${pillar.title.toLowerCase()}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* IMAGE CONTAINER (Alternates left/right on desktop) */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative group rounded-3xl overflow-hidden bg-[#070D18] p-2 sm:p-3 border border-white/10 shadow-2xl">
                    
                    {/* Technical coordinate label badge */}
                    <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-[#070D18]/80 backdrop-blur-md border border-white/15 text-[10px] font-tech text-[#E5A910] tracking-widest uppercase">
                      <span>PILLAR // {pillar.number}</span>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black/40">
                      <img
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070D18]/70 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Floating Metric Badge */}
                    <div className="absolute bottom-6 right-6 z-20 bg-[#070D18]/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-[#E5A910]/30 shadow-xl">
                      <div className="text-[10px] font-tech text-slate-400 uppercase tracking-wider">
                        {pillar.metric.label}
                      </div>
                      <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#E5A910] mt-0.5">
                        {pillar.metric.value}
                      </div>
                    </div>

                  </div>
                </div>

                {/* TEXT CONTAINER */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display font-black text-4xl sm:text-5xl text-white/20">
                      {pillar.number}
                    </span>
                    <div className="h-[2px] w-12 bg-[#E5A910]" />
                    <span className="text-xs font-tech text-[#E5A910] font-bold tracking-widest uppercase">
                      TECHNICAL PILLAR
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase mb-2">
                    {pillar.title}
                  </h3>

                  <h4 className="text-sm sm:text-base font-tech text-slate-300 font-semibold uppercase tracking-wider mb-6">
                    {pillar.subtitle}
                  </h4>

                  <p className="text-base text-slate-300 font-normal leading-relaxed mb-8">
                    {pillar.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-8">
                    {pillar.details.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-[#E5A910] flex-shrink-0 mt-1" />
                        <span className="text-sm text-slate-300 leading-relaxed font-normal">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-tech text-slate-400 tracking-wider">
                    <span>TESTED TO ISO 4210 RACING BENCHMARKS</span>
                    <span className="text-[#E5A910]">•</span>
                    <span>WTL CARBON LAB</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
