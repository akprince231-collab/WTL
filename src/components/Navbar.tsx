import React, { useState, useEffect } from 'react';
import { WtlLogo } from './WtlLogo';
import { Menu, X, ArrowUpRight, MapPin, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenDealerModal: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDealerModal, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Bicycles', href: '#bicycles-range', sectionId: 'bicycles-range' },
    { label: 'Collections', href: '#featured-showcase', sectionId: 'featured-showcase' },
    { label: 'Technology', href: '#engineering', sectionId: 'engineering' },
    { label: 'About', href: '#wtl-story', sectionId: 'wtl-story' },
    { label: 'Stories', href: '#stories', sectionId: 'stories' },
    { label: 'Dealers', href: '#dealers', sectionId: 'dealers' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    // If the section exists on page, scroll smoothly to it
    const element = document.getElementById(link.sectionId);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      if (onNavigateSection) onNavigateSection(link.sectionId);
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070D18]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#070D18]/80 via-[#070D18]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: WTL Logo */}
            <a
              href="#top"
              id="nav-logo"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A910] rounded"
            >
              <WtlLogo className="h-8 sm:h-9" showTagline />
            </a>

            {/* CENTER / RIGHT NAVIGATION (Desktop) */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className="relative px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white transition-colors duration-200 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Subtle Yellow line micro-interaction */}
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#E5A910] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left ease-out" />
                </a>
              ))}
            </nav>

            {/* RIGHT CTA: FIND A DEALER */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                id="nav-dealer-cta"
                type="button"
                onClick={onOpenDealerModal}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#070D18] bg-[#E5A910] hover:bg-[#FFBF1A] active:bg-[#D49808] transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#E5A910]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E5A910]"
              >
                <MapPin className="w-3.5 h-3.5 text-[#070D18]" />
                <span>Find a Dealer</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-3">
              <button
                id="mobile-dealer-button"
                type="button"
                onClick={onOpenDealerModal}
                className="p-2 text-xs font-semibold text-[#E5A910] border border-[#E5A910]/30 rounded-full hover:bg-[#E5A910]/10"
                aria-label="Find Dealer"
              >
                <MapPin className="w-4 h-4" />
              </button>

              <button
                id="mobile-menu-toggle"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A910] rounded"
                aria-label="Toggle Mobile Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu: Clean Full-Screen Navy Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-40 bg-[#070D18] flex flex-col justify-between pt-24 pb-8 px-6 md:hidden overflow-y-auto"
        >
          {/* Subtle background tech accents */}
          <div className="absolute inset-0 bg-grid-tech pointer-events-none opacity-20" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#E5A910]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col space-y-4">
            <div className="text-[10px] font-mono tracking-widest text-[#E5A910] uppercase mb-2">
              Navigation Menu
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                id={`mobile-nav-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="flex items-center justify-between py-3 border-b border-white/[0.08] text-2xl font-bold tracking-tight text-white hover:text-[#E5A910] transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-slate-500 font-normal">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="relative z-10 pt-8 border-t border-white/[0.08] space-y-4">
            <button
              id="mobile-menu-dealer-cta"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDealerModal();
              }}
              className="w-full py-4 px-6 rounded-xl bg-[#E5A910] text-[#070D18] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#FFBF1A] transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Find an Authorized Dealer</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-2">
              <span>WTL BIKES GLOBAL</span>
              <span>EST. PERFORMANCE</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
