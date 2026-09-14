import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Compass, Zap, ShieldCheck } from 'lucide-react';
import { heroBikeImage } from '../data/bikesData';

interface HeroProps {
  onExploreBikes: () => void;
  onDiscoverWtl: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreBikes, onDiscoverWtl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#070D18] pt-20 pb-16 lg:py-24"
    >
      {/* Background Layer: Deep navy atmosphere with technical grid & radial lighting */}
      <div className="absolute inset-0 bg-grid-tech opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#E5A910]/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Kinetic Speed Elements & Diagonal Yellow Accent Line */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-35">
        <div
          className="absolute -top-24 right-1/4 w-[2px] h-[140%] bg-gradient-to-b from-transparent via-[#E5A910]/40 to-transparent rotate-[28deg] origin-top"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/3 -right-20 w-[900px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-12"
          aria-hidden="true"
        />
      </div>

      {/* Massive Background Brand Watermark for Depth */}
      <div
        className="absolute bottom-4 left-4 lg:bottom-12 lg:left-8 select-none pointer-events-none z-0"
        aria-hidden="true"
      >
        <span className="font-display font-extrabold text-[18vw] leading-none text-white/[0.02] tracking-tighter block">
          WTL
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* LEFT / HERO CONTENT: Asymmetric, Strong Typography, Editorial Hierarchy (Cols 1-6) */}
          <div className="lg:col-span-6 z-20 flex flex-col justify-center">
            {/* Small Technical Brand Pill Labels */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-tech font-semibold tracking-wider text-[#E5A910] bg-[#E5A910]/10 border border-[#E5A910]/25">
                <Zap className="w-3 h-3" />
                PERFORMANCE
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-tech font-semibold tracking-wider text-slate-300 bg-white/5 border border-white/10">
                <Compass className="w-3 h-3 text-[#E5A910]" />
                ADVENTURE
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-tech font-semibold tracking-wider text-slate-300 bg-white/5 border border-white/10">
                <ShieldCheck className="w-3 h-3 text-[#E5A910]" />
                ENGINEERING
              </span>
            </div>

            {/* Oversized Confident Display Headline */}
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white tracking-tight uppercase leading-[0.92] mb-6">
              RIDE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                BEYOND
              </span>
              <span className="text-[#E5A910]">.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl font-normal leading-relaxed mb-8">
              Built for every road, every trail, every adventure. Precision engineered bicycles crafted with unyielding focus on geometry, responsiveness, and human-powered momentum.
            </p>

            {/* CTA Group with Refined Micro-Interactions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              {/* Primary CTA */}
              <button
                id="hero-explore-cta"
                type="button"
                onClick={onExploreBikes}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-sm tracking-wider uppercase text-[#070D18] bg-[#E5A910] hover:bg-[#FFBF1A] active:scale-[0.99] transition-all duration-200 shadow-xl shadow-[#E5A910]/20 hover:shadow-[#E5A910]/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A910]"
              >
                <span>EXPLORE BIKES</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button
                id="hero-discover-cta"
                type="button"
                onClick={onDiscoverWtl}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-display font-semibold text-sm tracking-wider uppercase text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-white/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span>DISCOVER WTL</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A910] group-hover:scale-125 transition-transform" />
              </button>
            </div>

            {/* Technical Specifications Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-[11px] font-tech text-slate-400 uppercase tracking-wider">CHASSIS WEIGHT</div>
                <div className="text-lg sm:text-xl font-display font-bold text-white mt-0.5">
                  6.85 <span className="text-xs text-[#E5A910] font-tech">KG</span>
                </div>
              </div>
              <div>
                <div className="text-[11px] font-tech text-slate-400 uppercase tracking-wider">DRIVETRAIN</div>
                <div className="text-lg sm:text-xl font-display font-bold text-white mt-0.5">
                  24 <span className="text-xs text-[#E5A910] font-tech">SPD</span>
                </div>
              </div>
              <div>
                <div className="text-[11px] font-tech text-slate-400 uppercase tracking-wider">AERODYNAMICS</div>
                <div className="text-lg sm:text-xl font-display font-bold text-white mt-0.5">
                  -18.4 <span className="text-xs text-[#E5A910] font-tech">WATTS</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: DYNAMIC BICYCLE PRESENTATION (Cols 7-12) */}
          <div className="lg:col-span-6 relative z-10 lg:-mr-8">
            <div
              className="relative transition-transform duration-500 ease-out"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Technical Linework Frame & Coordinate Markers */}
              <div className="absolute -inset-4 sm:-inset-6 border border-white/[0.06] rounded-3xl pointer-events-none" />
              
              {/* Corner Coordinate Marks */}
              <span className="absolute -top-3 -left-3 font-tech text-[10px] text-[#E5A910]/70 tracking-widest uppercase">
                +WTL-01
              </span>
              <span className="absolute -top-3 -right-3 font-tech text-[10px] text-slate-500 tracking-widest">
                LAT: 40.0150° N
              </span>
              <span className="absolute -bottom-3 -left-3 font-tech text-[10px] text-slate-500 tracking-widest">
                SPEC: CARBON AERO
              </span>

              {/* Dynamic Golden Accent Angle */}
              <div className="absolute top-1/2 -left-3 w-1.5 h-16 bg-[#E5A910] -translate-y-1/2 rounded-full hidden sm:block" />

              {/* Bicycle Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-[#0B1528] via-[#0E1C36] to-[#070E1A] p-2 sm:p-4 border border-white/10 shadow-2xl shadow-black/80">
                
                {/* 3D Bicycle Render */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full flex items-center justify-center overflow-hidden">
                  <img
                    src={heroBikeImage}
                    alt="WTL Apex SL Carbon Aero Performance Bicycle"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-contain object-center transition-transform duration-700 ease-out ${
                      isHovered ? 'scale-105 -translate-y-1' : 'scale-100'
                    }`}
                  />
                  
                  {/* Subtle Studio Floor Reflection Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#070D18] via-[#070D18]/40 to-transparent pointer-events-none" />
                </div>

                {/* Floating Technical Product Pill */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-[#070D18]/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E5A910] animate-pulse" />
                    <div>
                      <div className="text-xs font-display font-bold text-white tracking-wide">
                        WTL APEX SL PRO
                      </div>
                      <div className="text-[11px] text-slate-400 font-tech">
                        Handcrafted Carbon Road Platform
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-tech text-[#E5A910] tracking-wider uppercase block">
                      STAGE 1 FLAGSHIP
                    </span>
                    <span className="text-xs font-semibold text-slate-200">
                      HUMAN POWERED
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-tech uppercase tracking-widest text-slate-400">
          EXPLORE
        </span>
        <ChevronDown className="w-4 h-4 text-[#E5A910] animate-bounce" />
      </div>
    </section>
  );
};
