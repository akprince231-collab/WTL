import React, { useState } from 'react';
import { Bicycle } from '../types';
import { X, CheckCircle2, Shield, ArrowRight, Gauge, Layers, Wrench } from 'lucide-react';

interface BikeModalProps {
  bike: Bicycle | null;
  onClose: () => void;
  onOpenDealerModal: () => void;
}

export const BikeModal: React.FC<BikeModalProps> = ({
  bike,
  onClose,
  onOpenDealerModal,
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'features'>('specs');

  if (!bike) return null;

  return (
    <div
      id="bike-modal-overlay"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#0A1324] border border-[#E5A910]/30 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between bg-[#080E1C]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-tech font-bold uppercase tracking-wider bg-[#E5A910]/15 text-[#E5A910] border border-[#E5A910]/30">
                {bike.category} PLATFORM
              </span>
              <span className="text-xs font-tech text-slate-400">
                {bike.series}
              </span>
            </div>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase">
              {bike.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-tech mt-1">
              {bike.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-[10px] font-tech text-slate-400 uppercase tracking-widest block">
                MSRP FROM
              </span>
              <span className="font-display font-extrabold text-2xl text-[#E5A910]">
                {bike.priceFormatted}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8">
          
          {/* Bicycle Hero View */}
          <div className="relative aspect-[16/9] w-full rounded-2xl bg-[#060B14] p-4 sm:p-6 flex items-center justify-center border border-white/5 overflow-hidden">
            <img
              src={bike.image}
              alt={bike.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain object-center"
            />
            <div className="absolute bottom-3 left-4 text-[10px] font-tech text-slate-400 uppercase tracking-widest">
              WEIGHT: {bike.weight} // MATERIAL: {bike.frameMaterial}
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <button
              type="button"
              onClick={() => setActiveTab('specs')}
              className={`pb-2 text-xs font-display font-bold uppercase tracking-wider transition-colors relative ${
                activeTab === 'specs' ? 'text-[#E5A910]' : 'text-slate-400 hover:text-white'
              }`}
            >
              Specifications Sheet
              {activeTab === 'specs' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E5A910]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('features')}
              className={`pb-2 text-xs font-display font-bold uppercase tracking-wider transition-colors relative ${
                activeTab === 'features' ? 'text-[#E5A910]' : 'text-slate-400 hover:text-white'
              }`}
            >
              Engineering Features
              {activeTab === 'features' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E5A910]" />
              )}
            </button>
          </div>

          {/* Specs Tab Content */}
          {activeTab === 'specs' && (
            <div className="space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                {bike.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {bike.specs.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border flex items-center justify-between ${
                      item.highlight
                        ? 'bg-[#E5A910]/10 border-[#E5A910]/40'
                        : 'bg-white/[0.02] border-white/[0.07]'
                    }`}
                  >
                    <span className="text-xs font-tech text-slate-400 uppercase">
                      {item.label}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        item.highlight ? 'text-[#E5A910] font-tech' : 'text-white'
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Tab Content */}
          {activeTab === 'features' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {bike.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E5A910] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#070D18] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-tech">
            100% HUMAN-POWERED PRECISION CYCLING
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-display font-bold uppercase tracking-wider"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenDealerModal();
              }}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#E5A910] hover:bg-[#FFBF1A] text-[#070D18] text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#E5A910]/25"
            >
              <span>Locate In Dealer Showroom</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
