import React from 'react';
import { ArrowRight, Wrench, Shield, Compass, Sparkles } from 'lucide-react';
import { WtlLogo } from './WtlLogo';

interface StorySectionProps {
  onDiscoverWtl: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onDiscoverWtl }) => {
  return (
    <section
      id="wtl-story"
      className="relative py-28 sm:py-36 bg-[#08101E] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: EDITORIAL BRAND STORY COPY (Cols 1-6) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A910]/10 border border-[#E5A910]/30 text-xs font-tech font-bold text-[#E5A910] uppercase tracking-widest mb-6 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#E5A910]" />
              <span>THE BRAND IDENTITY</span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.02] mb-6">
              THE WTL <br />
              <span className="text-[#E5A910]">STORY.</span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed mb-6">
              WTL was born from a singular obsession: to eliminate the compromises between structural stiffness, aerodynamic efficiency, and the raw emotional thrill of the ride.
            </p>

            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed mb-8">
              We design bicycles for riders who measure moments not merely in miles or minutes, but in the precision of a descent, the crispness of a gear shift, and the pure feedback of hand-laid carbon against open asphalt and rugged dirt.
            </p>

            {/* Core Values / Craft Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-xs font-tech text-[#E5A910] uppercase tracking-wider font-bold mb-1">
                  OBSESSIVE CRAFT
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  Every tube profile is aerodynamically validated and hand-finished.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-xs font-tech text-[#E5A910] uppercase tracking-wider font-bold mb-1">
                  UNCOMPROMISING QUALITY
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  Built exclusively for human-powered performance and lasting durability.
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#wtl-story"
                id="story-discover-cta"
                onClick={(e) => {
                  e.preventDefault();
                  onDiscoverWtl();
                }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#E5A910] hover:bg-[#FFBF1A] text-[#070D18] font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#E5A910]/20"
              >
                <span>DISCOVER WTL</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* RIGHT: STRONG HERO STORY IMAGE WITH TECHNICAL OVERLAY (Cols 7-12) */}
          <div className="lg:col-span-6">
            <div className="relative group rounded-3xl overflow-hidden bg-[#070E1B] p-2 sm:p-4 border border-white/10 shadow-2xl">
              
              {/* Corner branding */}
              <div className="absolute top-8 left-8 z-20">
                <WtlLogo className="h-6" />
              </div>

              {/* Main Image */}
              <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full overflow-hidden rounded-2xl bg-black">
                <img
                  src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80"
                  alt="WTL Bicycle Studio and Craftsmanship"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Bottom Quote / Manifesto */}
              <div className="absolute bottom-8 left-8 right-8 z-20 bg-[#070D18]/90 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed mb-2">
                  “The bicycle remains humanity's greatest invention for translating human energy directly into pure momentum.”
                </p>
                <div className="flex items-center justify-between text-[11px] font-tech text-[#E5A910] tracking-wider uppercase">
                  <span>DESIGNED TO INSPIRE</span>
                  <span>WTL ARCHIVE</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
