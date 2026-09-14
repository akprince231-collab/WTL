import React from 'react';
import { LIFESTYLE_MOMENTS } from '../data/bikesData';
import { Compass, Wind, Mountain, Navigation } from 'lucide-react';

export const LifestyleSection: React.FC = () => {
  const mainMoment = LIFESTYLE_MOMENTS[0];
  const sideMoments = LIFESTYLE_MOMENTS.slice(1);

  return (
    <section
      id="lifestyle"
      className="relative py-28 sm:py-36 bg-[#070D18] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Subtle atmospheric gradient */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#E5A910]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5A910]" />
              <span className="text-xs font-tech text-[#E5A910] tracking-widest uppercase font-semibold">
                CYCLING LIFESTYLE & FREEDOM
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              RIDE <span className="text-[#E5A910]">YOUR WAY</span>.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-400 max-w-md font-normal leading-relaxed">
            Beyond the wattage and wind tunnels lies the pure exhilaration of human movement. From quiet alpine switchbacks to morning urban avenues, the bicycle is your passport to presence.
          </p>
        </div>

        {/* ASYMMETRIC EDITORIAL COLLAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-8">
          
          {/* DOMINANT LARGE MOMENT (Cols 1-7) */}
          <div className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-[#0A1324] border border-white/10 min-h-[460px] sm:min-h-[580px] flex flex-col justify-end p-6 sm:p-10 shadow-2xl">
            {/* Background Image */}
            <img
              src={mainMoment.image}
              alt={mainMoment.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Moody cinematic gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/50 to-transparent" />
            <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply pointer-events-none" />

            {/* Content overlay */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#070D18]/80 backdrop-blur-md border border-[#E5A910]/40 text-xs font-tech font-bold text-[#E5A910] uppercase tracking-wider mb-4">
                <Wind className="w-3.5 h-3.5 text-[#E5A910]" />
                <span>{mainMoment.category}</span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase mb-3">
                {mainMoment.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-200 max-w-lg leading-relaxed mb-4">
                {mainMoment.description}
              </p>

              <div className="text-xs font-tech text-slate-400 tracking-wider">
                TERRAIN // {mainMoment.terrain}
              </div>
            </div>
          </div>

          {/* TWO STACKED ASYMMETRIC MOMENTS (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {sideMoments.slice(0, 2).map((moment, idx) => (
              <div
                key={moment.id}
                className="group relative rounded-3xl overflow-hidden bg-[#0A1324] border border-white/10 min-h-[250px] sm:min-h-[275px] flex flex-col justify-end p-6 sm:p-8 shadow-xl"
              >
                <img
                  src={moment.image}
                  alt={moment.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/60 to-transparent" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-tech font-bold text-[#E5A910] uppercase tracking-wider mb-2">
                    {idx === 0 ? <Mountain className="w-3 h-3" /> : <Navigation className="w-3 h-3" />}
                    <span>{moment.category}</span>
                  </div>

                  <h4 className="font-display font-bold text-xl sm:text-2xl text-white uppercase mb-1.5">
                    {moment.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                    {moment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Full-width Panoramic Moment Quote Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0C172E] via-[#081121] to-[#0C172E] border border-white/10 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="text-[11px] font-tech text-[#E5A910] uppercase tracking-widest block mb-2">
                HUMAN MOMENTUM
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase leading-snug">
                “NO ENGINE. NO EMISSIONS. JUST THE SILENCE OF THE TRAIL AND THE RHYTHM OF THE CRANK.”
              </h3>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-right">
                <div className="text-xs font-tech text-[#E5A910] uppercase tracking-wider">
                  DESIGNED FOR LIFE
                </div>
                <div className="font-display font-bold text-lg text-white mt-1">
                  100% CYCLING DEDICATION
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
