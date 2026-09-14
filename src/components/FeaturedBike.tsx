import React, { useState } from 'react';
import { featuredBikeImage } from '../data/bikesData';
import { Bicycle } from '../types';
import { BICYCLES } from '../data/bikesData';
import { Disc3, Cpu, Sparkles, SlidersHorizontal, CheckCircle2, ArrowRight } from 'lucide-react';

interface FeaturedBikeProps {
  onOpenSpecsModal: (bike: Bicycle) => void;
  onOpenDealerModal: () => void;
}

export const FeaturedBike: React.FC<FeaturedBikeProps> = ({
  onOpenSpecsModal,
  onOpenDealerModal,
}) => {
  const trailBike = BICYCLES.find((b) => b.id === 'wtl-trail-x9') || BICYCLES[1];
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'specs' | 'geometry' | 'chassis'>('specs');

  const hotspots = [
    {
      id: 1,
      top: '28%',
      left: '26%',
      title: '120MM AIR SUSPENSION',
      desc: 'Progressive air spring fork with remote lockout for efficient climbing and downhill suppleness.',
      spec: 'Travel: 120mm // 34mm Stanchions',
    },
    {
      id: 2,
      top: '42%',
      left: '52%',
      title: 'HYDROFORMED CHASSIS',
      desc: 'Multi-butted aerospace aluminum with internal gusseting and tuned lateral compliance.',
      spec: 'Double-Butted 6061-T6 Matrix',
    },
    {
      id: 3,
      top: '64%',
      left: '32%',
      title: 'HYDRAULIC 4-PISTON CALIPERS',
      desc: 'High-torque mineral oil hydraulic brakes providing fade-free deceleration on prolonged descents.',
      spec: 'Rotors: 180mm Front / 180mm Rear',
    },
    {
      id: 4,
      top: '68%',
      left: '78%',
      title: '29" TUBELESS WHEELSET',
      desc: 'Wide 30mm internal rim profile supporting high-volume tubeless tires at lower pressures.',
      spec: 'Boost 148x12mm Thru-Axle',
    },
  ];

  return (
    <section
      id="featured-showcase"
      className="relative py-28 sm:py-36 bg-[#070D18] overflow-hidden border-t border-white/[0.08]"
    >
      {/* Background Lighting & Tech Texture */}
      <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-950/30 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[300px] bg-[#E5A910]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Technical Coordinate Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A910]/10 border border-[#E5A910]/30 text-xs font-tech font-bold text-[#E5A910] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A910]" />
            <span>3D PRODUCT SHOWCASE // TRAIL ENGINEERING</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-tight mb-6">
            ENGINEERED <br />
            <span className="text-[#E5A910]">TO MOVE.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Every millimeter of the WTL Trail X-9 is sculpted for relentless technical singletrack and all-day backcountry exploration.
          </p>
        </div>

        {/* 3D PRODUCT HERO STAGE */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0B152A] via-[#080E1C] to-[#050A14] border border-white/10 p-6 sm:p-12 shadow-2xl overflow-hidden mb-12">
          
          {/* Subtle Technical Frame Accents */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E5A910] animate-ping" />
            <span className="text-xs font-tech text-slate-400 uppercase tracking-widest">
              ACTIVE SPEC MODEL // TRAIL X-9
            </span>
          </div>

          <div className="absolute top-6 right-6 hidden sm:block">
            <span className="text-xs font-tech text-slate-500 uppercase tracking-widest">
              CHASSIS CODE: WTL-TR29-PRO
            </span>
          </div>

          {/* Center 3D Bicycle Render with Interactive Hotspots */}
          <div className="relative w-full max-w-5xl mx-auto my-6 sm:my-10">
            <div className="relative aspect-[16/9] w-full flex items-center justify-center">
              <img
                src={featuredBikeImage}
                alt="WTL Trail X-9 3D Studio Product Render"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-center drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
              />

              {/* Floor Shadow / Studio Reflection */}
              <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-[#050A14] to-transparent pointer-events-none" />

              {/* Interactive Technical Hotspot Markers */}
              {hotspots.map((spot) => {
                const isSelected = activeHotspot === spot.id;
                return (
                  <div
                    key={spot.id}
                    style={{ top: spot.top, left: spot.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveHotspot(isSelected ? null : spot.id)}
                      className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 focus:outline-none ${
                        isSelected
                          ? 'bg-[#E5A910] border-white scale-125 shadow-lg shadow-[#E5A910]/50'
                          : 'bg-[#070D18]/90 border-[#E5A910] hover:scale-110'
                      }`}
                      aria-label={spot.title}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          isSelected ? 'bg-[#070D18]' : 'bg-[#E5A910]'
                        }`}
                      />
                    </button>

                    {/* Popover Callout Box */}
                    {isSelected && (
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 sm:w-72 p-4 rounded-xl bg-[#070D18]/95 border border-[#E5A910]/50 backdrop-blur-md shadow-2xl z-30 animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-tech font-bold text-[#E5A910] uppercase tracking-wider">
                            POINT SPEC 0{spot.id}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveHotspot(null);
                            }}
                            className="text-xs text-slate-400 hover:text-white"
                          >
                            ✕
                          </button>
                        </div>
                        <h4 className="font-display font-bold text-sm text-white uppercase mb-1">
                          {spot.title}
                        </h4>
                        <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                          {spot.desc}
                        </p>
                        <div className="pt-2 border-t border-white/10 text-[10px] font-tech text-[#E5A910]">
                          {spot.spec}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Hotspot interaction hint */}
            <div className="text-center mt-2">
              <span className="text-[11px] font-tech text-slate-400 tracking-wider">
                CLICK THE GOLDEN SPEC MARKERS TO REVEAL TECHNICAL BLUEPRINT HIGHLIGHTS
              </span>
            </div>
          </div>

          {/* Surrounding Technical Blueprint Specs Cards (Grid of 4) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/10">
            
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#E5A910]/40 transition-colors">
              <div className="text-[11px] font-tech text-[#E5A910] uppercase tracking-wider mb-1">
                WHEELSET
              </div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white">
                29" WHEELS
              </div>
              <p className="text-xs text-slate-400 mt-1 font-tech">
                High-Volume Tubeless Ready
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#E5A910]/40 transition-colors">
              <div className="text-[11px] font-tech text-[#E5A910] uppercase tracking-wider mb-1">
                TRANSMISSION
              </div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white">
                12-SPEED 1X
              </div>
              <p className="text-xs text-slate-400 mt-1 font-tech">
                10-52T Massive Gear Range
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#E5A910]/40 transition-colors">
              <div className="text-[11px] font-tech text-[#E5A910] uppercase tracking-wider mb-1">
                BRAKING
              </div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white">
                HYDRAULIC DISC
              </div>
              <p className="text-xs text-slate-400 mt-1 font-tech">
                4-Piston Calipers 180mm
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#E5A910]/40 transition-colors">
              <div className="text-[11px] font-tech text-[#E5A910] uppercase tracking-wider mb-1">
                CHASSIS
              </div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white">
                ALLOY HYBRID
              </div>
              <p className="text-xs text-slate-400 mt-1 font-tech">
                Hydroformed 6061 Matrix
              </p>
            </div>

          </div>

          {/* Showcase Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#E5A910]" />
              <span className="text-xs font-tech text-slate-300">
                100% HUMAN-POWERED PRECISION CYCLING
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onOpenSpecsModal(trailBike)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-display font-bold text-xs uppercase tracking-wider border border-white/15 transition-all"
              >
                <span>FULL SPEC SHEET</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={onOpenDealerModal}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#E5A910] hover:bg-[#FFBF1A] text-[#070D18] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#E5A910]/20"
              >
                <span>TEST RIDE AT DEALER</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
