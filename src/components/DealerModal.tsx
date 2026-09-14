import React, { useState } from 'react';
import { AUTHORIZED_DEALERS } from '../data/bikesData';
import { Dealer } from '../types';
import { MapPin, Phone, Mail, Search, Check, Calendar, ArrowRight, X } from 'lucide-react';

interface DealerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DealerModal: React.FC<DealerModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDealer, setSelectedDealer] = useState<Dealer | null>(null);
  const [testRideBooked, setTestRideBooked] = useState(false);
  const [riderName, setRiderName] = useState('');

  if (!isOpen) return null;

  const filteredDealers = AUTHORIZED_DEALERS.filter(
    (d) =>
      d.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookTestRide = (e: React.FormEvent) => {
    e.preventDefault();
    if (riderName.trim()) {
      setTestRideBooked(true);
      setTimeout(() => {
        setTestRideBooked(false);
        setSelectedDealer(null);
        setRiderName('');
      }, 3500);
    }
  };

  return (
    <div
      id="dealer-modal-overlay"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#0A1324] border border-[#E5A910]/30 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between bg-[#080E1C]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#E5A910]" />
              <span className="text-[11px] font-tech text-[#E5A910] uppercase tracking-widest font-bold">
                AUTHORIZED PARTNERS & FLAGSHIPS
              </span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase">
              FIND A <span className="text-[#E5A910]">WTL DEALER</span>
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {/* Search bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by city, region, or dealer name (e.g. Boulder, Seattle, Zurich)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E5A910] focus:ring-1 focus:ring-[#E5A910]"
            />
          </div>

          {/* Test Ride Confirmation message */}
          {testRideBooked && (
            <div className="p-4 rounded-xl bg-[#E5A910]/15 border border-[#E5A910]/40 text-[#E5A910] flex items-center gap-3 animate-in fade-in">
              <Check className="w-5 h-5 flex-shrink-0" />
              <div>
                <span className="font-display font-bold block text-sm">
                  Test Ride Reserved!
                </span>
                <span className="text-xs text-slate-300">
                  {selectedDealer?.name} will contact you shortly to confirm your bike sizing.
                </span>
              </div>
            </div>
          )}

          {/* Dealer Cards List */}
          <div className="space-y-4">
            {filteredDealers.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                <p>No authorized studios match "{searchQuery}".</p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="mt-3 text-xs font-tech text-[#E5A910] underline uppercase"
                >
                  Clear search
                </button>
              </div>
            ) : (
              filteredDealers.map((dealer) => (
                <div
                  key={dealer.id}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#E5A910]/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <h4 className="font-display font-bold text-lg text-white">
                        {dealer.name}
                      </h4>
                      {dealer.distance && (
                        <span className="text-[10px] font-tech text-[#E5A910] bg-[#E5A910]/10 px-2 py-0.5 rounded">
                          {dealer.distance}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-[#E5A910]" />
                      <span>{dealer.address}, {dealer.city}, {dealer.region}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {dealer.services.map((svc) => (
                        <span
                          key={svc}
                          className="text-[10px] font-tech text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex items-center gap-3 pt-2 md:pt-0">
                    <button
                      type="button"
                      onClick={() => setSelectedDealer(dealer)}
                      className="px-4 py-2.5 rounded-xl bg-[#E5A910] hover:bg-[#FFBF1A] text-[#070D18] font-display font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Test Ride</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Test Ride Booking Form for selected dealer */}
          {selectedDealer && !testRideBooked && (
            <div className="p-5 rounded-2xl bg-[#0E1E38] border border-[#E5A910]/50 mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-sm text-white uppercase">
                  Schedule Test Ride at {selectedDealer.name}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedDealer(null)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
              </div>

              <form onSubmit={handleBookTestRide} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={riderName}
                  onChange={(e) => setRiderName(e.target.value)}
                  className="px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-slate-400 focus:outline-none focus:border-[#E5A910]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-slate-400 focus:outline-none focus:border-[#E5A910]"
                />
                <select className="px-3.5 py-2.5 rounded-lg bg-[#070D18] border border-white/10 text-white text-xs focus:outline-none focus:border-[#E5A910]">
                  <option value="Apex SL">WTL Apex SL (Aero Road)</option>
                  <option value="Trail X9">WTL Trail X-9 (Hardtail MTB)</option>
                  <option value="Strada Hybrid">WTL Strada (Hybrid Cross)</option>
                  <option value="Metro Urban">WTL Metro (City Commute)</option>
                </select>
                <button
                  type="submit"
                  className="py-2.5 px-4 rounded-lg bg-[#E5A910] text-[#070D18] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#FFBF1A] transition-colors"
                >
                  Confirm Reservation
                </button>
              </form>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#070D18] flex items-center justify-between text-xs text-slate-400 font-tech">
          <span>ALL WTL DEALERS OFFER COMPLIMENTARY 1-ON-1 BIKE FITTING</span>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-300 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
