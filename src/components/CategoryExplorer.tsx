import React, { useState } from 'react';
import { CATEGORIES, BICYCLES } from '../data/bikesData';
import { CategoryData, Bicycle } from '../types';
import { ArrowRight, ChevronRight, Gauge, Layers, Shield } from 'lucide-react';

interface CategoryExplorerProps {
  onSelectBike: (bike: Bicycle) => void;
}

export const CategoryExplorer: React.FC<CategoryExplorerProps> = ({ onSelectBike }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('ROAD');

  const activeCategory: CategoryData =
    CATEGORIES.find((c) => c.id === activeCategoryId) || CATEGORIES[0];

  const matchedBike =
    BICYCLES.find((b) => b.id === activeCategory.featuredBikeId) || BICYCLES[0];

  return (
    <section
      id="bicycles-range"
      className="relative py-24 sm:py-32 bg-[#0A1222] overflow-hidden"
    >
      {/* Background Subtle Tech Elements */}
      <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#E5A910]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-white/[0.08] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5A910]" />
              <span className="text-xs font-tech text-[#E5A910] tracking-widest uppercase font-semibold">
                COMPLETE BICYCLE RANGE
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              FIND YOUR <span className="text-[#E5A910]">RIDE</span>.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-400 max-w-md font-normal leading-relaxed">
            Purpose-built bicycles tuned for high-velocity tarmac, technical mountain singletrack, mixed-surface gravel, and daily urban transit.
          </p>
        </div>

        {/* Category Selector Tabs (Quick Filter Pills) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                id={`category-tab-${cat.id.toLowerCase()}`}
                type="button"
                onClick={() => setActiveCategoryId(cat.id)}
                className={`relative px-5 py-3 rounded-xl font-display font-bold text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-200 flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-[#E5A910] text-[#070D18] shadow-lg shadow-[#E5A910]/20'
                    : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                <span>{cat.id}</span>
                <span
                  className={`text-[10px] font-tech font-normal px-2 py-0.5 rounded ${
                    isActive ? 'bg-[#070D18]/20 text-[#070D18]' : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Category Explorer Grid: 1 Dominant Feature Visual + Supporting Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* DOMINANT LARGE CATEGORY VISUAL (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#0E1B33] to-[#070D18] border border-white/10 p-6 sm:p-10 relative overflow-hidden group shadow-2xl">
            
            {/* Top info badge */}
            <div className="relative z-10 flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A910]/15 border border-[#E5A910]/30 text-xs font-tech font-bold text-[#E5A910] tracking-wider uppercase">
                <span>{activeCategory.badge}</span>
              </div>
              <span className="text-xs font-tech text-slate-400 tracking-wider">
                FLAGSHIP MODEL // {matchedBike.name}
              </span>
            </div>

            {/* Title & Descriptors */}
            <div className="relative z-10 mb-6">
              <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase mb-2">
                {activeCategory.name}
              </h3>
              <p className="text-sm font-tech text-[#E5A910] uppercase tracking-wider mb-4">
                {activeCategory.subtitle}
              </p>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                {activeCategory.description}
              </p>
            </div>

            {/* Large Bicycle Image Render with Smooth Transition */}
            <div className="relative z-10 aspect-[16/10] w-full my-4 flex items-center justify-center overflow-hidden rounded-2xl bg-[#060B14]/60 p-4 border border-white/5">
              <img
                src={activeCategory.image}
                alt={`${activeCategory.name} - ${matchedBike.name}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              
              {/* Subtle yellow highlight accent */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-[#E5A910]/10 rounded-full blur-xl pointer-events-none" />
            </div>

            {/* Bottom Specs & Action Bar */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-tech text-slate-400 uppercase tracking-widest block">
                  CONFIGURATION SUMMARY
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  {activeCategory.specSummary}
                </span>
              </div>

              <button
                id={`explore-category-btn-${activeCategory.id.toLowerCase()}`}
                type="button"
                onClick={() => onSelectBike(matchedBike)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E5A910] hover:bg-[#FFBF1A] text-[#070D18] font-display font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#E5A910]/25"
              >
                <span>EXPLORE {activeCategory.id} BIKES</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SUPPORTING CATEGORIES LIST (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="text-xs font-tech text-slate-400 uppercase tracking-widest mb-1 flex items-center justify-between">
              <span>SELECT CATEGORY PLATFORM</span>
              <span className="text-[#E5A910]">{CATEGORIES.length} SERIES</span>
            </div>

            <div className="flex flex-col gap-3.5">
              {CATEGORIES.map((cat, idx) => {
                const isCurrent = cat.id === activeCategoryId;
                const bike = BICYCLES.find((b) => b.id === cat.featuredBikeId) || BICYCLES[0];

                return (
                  <div
                    key={cat.id}
                    id={`category-card-${cat.id.toLowerCase()}`}
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={`group cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-200 border relative overflow-hidden ${
                      isCurrent
                        ? 'bg-[#0E1E38] border-[#E5A910]/50 shadow-xl'
                        : 'bg-[#070E1B] border-white/[0.08] hover:border-white/20 hover:bg-[#0A1528]'
                    }`}
                  >
                    {/* Active yellow indicator on left edge */}
                    {isCurrent && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#E5A910]" />
                    )}

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {/* Thumbnail image */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-black/40 p-1.5 flex-shrink-0 border border-white/5 overflow-hidden flex items-center justify-center">
                          <img
                            src={cat.image}
                            alt={cat.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-tech text-[#E5A910] font-bold tracking-widest uppercase">
                              SERIES 0{idx + 1}
                            </span>
                            <span className="text-[11px] font-medium text-slate-400">
                              • {cat.badge}
                            </span>
                          </div>
                          <h4 className="font-display font-bold text-lg text-white group-hover:text-[#E5A910] transition-colors">
                            {cat.name}
                          </h4>
                          <p className="text-xs text-slate-400 font-tech line-clamp-1 mt-0.5">
                            {cat.specSummary}
                          </p>
                        </div>
                      </div>

                      <div className="flex-shrink-0 flex items-center">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectBike(bike);
                          }}
                          className={`p-2.5 rounded-full transition-all ${
                            isCurrent
                              ? 'bg-[#E5A910] text-[#070D18]'
                              : 'bg-white/5 text-slate-300 group-hover:bg-white/10 group-hover:text-white'
                          }`}
                          aria-label={`View ${cat.name}`}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Assurance Card */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
              <span className="font-tech">ALL BICYCLES BUILT WITH HIGH-GRADE HUMAN-POWERED PRECISION</span>
              <span className="text-[#E5A910] font-bold font-tech">WTL SPEC</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
