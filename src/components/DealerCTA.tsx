import React from 'react';
import { ArrowRight, MapPin, Sparkles, PhoneCall, Shield } from 'lucide-react';
import { heroBikeImage } from '../data/bikesData';

interface DealerCTAProps {
  onOpenDealerModal: () => void;
  onExploreBikes: () => void;
}

export const DealerCTA: React.FC<DealerCTAProps> = ({
  onOpenDealerModal,
  onExploreBikes,
}) => {
  return (
    <section
      id="dealers"
      className="relative py-28 sm:py-36 bg-[#060C17] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Lighting & Tech Grid */}
      <div className="absolute inset-0 bg-grid-tech opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[500px] bg-[#E5A910]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-[500px] h-[400px] bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Cinematic Callout Box */}
        <div className="relative rounded-3xl bg-gradient-to-tr from-[#091224] via-[#0D1B36] to-[#081020] border border-white/15 p-8 sm:p-14 lg:p-20 shadow-2xl overflow-hidden">
          
          {/* Faded Background Bicycle Silhouette Asset */}
          <div className="absolute right-0 bottom-0 top-0 w-full lg:w-3/5 opacity-15 pointer-events-none overflow-hidden flex items-center justify-end">
            <img
              src={heroBikeImage}
              alt="WTL Bicycle Silhouette"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain object-right scale-125 translate-x-12 translate-y-6 filter contrast-125"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            
            {/* Small Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A910]/15 border border-[#E5A910]/30 text-xs font-tech font-bold text-[#E5A910] uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#E5A910]" />
              <span>THE FIRST PEDAL STROKE</span>
            </div>

            {/* Large Final Display Headline */}
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-white tracking-tight uppercase leading-[0.95] mb-6">
              YOUR NEXT RIDE <br />
              <span className="text-[#E5A910]">STARTS HERE.</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-10 max-w-xl">
              Experience the unmatched responsiveness of a WTL bicycle in person. Visit an authorized partner studio for a personalized fitting, professional consultation, and test ride.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                id="final-cta-find-dealer"
                type="button"
                onClick={onOpenDealerModal}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E5A910] hover:bg-[#FFBF1A] text-[#070D18] font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#E5A910]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A910]"
              >
                <MapPin className="w-4 h-4 text-[#070D18]" />
                <span>FIND A DEALER</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                id="final-cta-explore-bikes"
                type="button"
                onClick={onExploreBikes}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-display font-semibold text-sm tracking-wider uppercase text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition-all duration-200"
              >
                <span>EXPLORE BIKES</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="font-tech text-xs text-[#E5A910] uppercase tracking-wider">
                  AUTHORIZED FIT
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  Laser Precision Sizing
                </div>
              </div>
              <div>
                <div className="font-tech text-xs text-[#E5A910] uppercase tracking-wider">
                  TEST FLEET
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  Full Series Demos
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="font-tech text-xs text-[#E5A910] uppercase tracking-wider">
                  GLOBAL SUPPORT
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  Certified Workshop Network
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
