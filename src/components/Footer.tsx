import React, { useState } from 'react';
import { WtlLogo } from './WtlLogo';
import { ArrowRight, Mail, Instagram, Youtube, Twitter, Check } from 'lucide-react';

interface FooterProps {
  onOpenDealerModal: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDealerModal, onNavigateSection }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#050912] border-t border-white/[0.08] text-slate-400 pt-20 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Brand Column + Link Columns + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          
          {/* Brand & Manifesto (Cols 1-4) */}
          <div className="md:col-span-4">
            <a href="/" className="inline-block mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A910] rounded">
              <WtlLogo className="h-9" showTagline />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Precision human-powered bicycles engineered for riders who value craftsmanship, structural performance, and the pure freedom of two wheels.
            </p>

            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center hover:bg-white/[0.1] hover:text-[#E5A910] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center hover:bg-white/[0.1] hover:text-[#E5A910] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center hover:bg-white/[0.1] hover:text-[#E5A910] transition-colors"
                aria-label="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links 1: Bicycles & Collections (Cols 5-6) */}
          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-5">
              Bicycles
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('bicycles-range')}
                  className="hover:text-white transition-colors"
                >
                  Road & Aero
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('bicycles-range')}
                  className="hover:text-white transition-colors"
                >
                  Mountain (MTB)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('bicycles-range')}
                  className="hover:text-white transition-colors"
                >
                  Hybrid Cross
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('bicycles-range')}
                  className="hover:text-white transition-colors"
                >
                  Urban Commute
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('bicycles-range')}
                  className="hover:text-white transition-colors"
                >
                  Junior Cadets
                </button>
              </li>
            </ul>
          </div>

          {/* Links 2: Company & Technology (Cols 7-8) */}
          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-5">
              Technology
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('engineering')}
                  className="hover:text-white transition-colors"
                >
                  Carbon Architecture
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('engineering')}
                  className="hover:text-white transition-colors"
                >
                  Aerodynamic Tunneling
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('wtl-story')}
                  className="hover:text-white transition-colors"
                >
                  About WTL
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollTo('stories')}
                  className="hover:text-white transition-colors"
                >
                  WTL Stories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenDealerModal}
                  className="text-[#E5A910] hover:underline font-medium"
                >
                  Find a Dealer
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter & Dispatch (Cols 9-12) */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-3">
              The WTL Dispatch
            </h4>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Receive quarterly technical dispatches, new bicycle releases, and endurance stories directly to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#E5A910] focus:ring-1 focus:ring-[#E5A910] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to dispatch"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-lg bg-[#E5A910] hover:bg-[#FFBF1A] text-[#070D18] font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-colors"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-[#E5A910] font-tech">
                  Thank you for subscribing to the WTL Dispatch.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-tech">
          <div>
            © {new Date().getFullYear()} WTL BIKES. ALL RIGHTS RESERVED. HUMAN-POWERED CYCLING.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              onClick={(e) => e.preventDefault()}
              className="hover:text-slate-300 transition-colors"
            >
              PRIVACY POLICY
            </a>
            <a
              href="#terms"
              onClick={(e) => e.preventDefault()}
              className="hover:text-slate-300 transition-colors"
            >
              TERMS OF SERVICE
            </a>
            <a
              href="#dealers"
              onClick={(e) => {
                e.preventDefault();
                onOpenDealerModal();
              }}
              className="hover:text-[#E5A910] transition-colors"
            >
              DEALER NETWORK
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
