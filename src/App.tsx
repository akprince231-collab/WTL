import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { CategoryExplorer } from './components/CategoryExplorer';
import { FeaturedBike } from './components/FeaturedBike';
import { EngineeringSection } from './components/EngineeringSection';
import { LifestyleSection } from './components/LifestyleSection';
import { StorySection } from './components/StorySection';
import { StoriesGrid } from './components/StoriesGrid';
import { DealerCTA } from './components/DealerCTA';
import { Footer } from './components/Footer';
import { DealerModal } from './components/DealerModal';
import { BikeModal } from './components/BikeModal';
import { Bicycle } from './types';
import { BICYCLES } from './data/bikesData';

export default function App() {
  const [isDealerModalOpen, setIsDealerModalOpen] = useState(false);
  const [selectedBike, setSelectedBike] = useState<Bicycle | null>(null);

  const handleExploreBikes = () => {
    const el = document.getElementById('bicycles-range');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscoverWtl = () => {
    const el = document.getElementById('wtl-story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSpecsModal = (bike: Bicycle) => {
    setSelectedBike(bike);
  };

  return (
    <div className="min-h-screen bg-[#070D18] text-slate-100 selection:bg-[#E5A910] selection:text-[#070D18] flex flex-col font-body">
      {/* 1. Header / Navigation */}
      <Navbar
        onOpenDealerModal={() => setIsDealerModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onExploreBikes={handleExploreBikes}
          onDiscoverWtl={handleDiscoverWtl}
        />

        {/* 3. Brand Statement */}
        <BrandStatement />

        {/* 4. Explore Bicycle Categories */}
        <CategoryExplorer
          onSelectBike={(bike) => setSelectedBike(bike)}
        />

        {/* 5. Featured Bicycle / 3D Product Showcase */}
        <FeaturedBike
          onOpenSpecsModal={handleOpenSpecsModal}
          onOpenDealerModal={() => setIsDealerModalOpen(true)}
        />

        {/* 6. Performance / Engineering */}
        <EngineeringSection />

        {/* 7. Cycling Lifestyle */}
        <LifestyleSection />

        {/* 8. WTL Story */}
        <StorySection
          onDiscoverWtl={handleDiscoverWtl}
        />

        {/* 9. Stories / Journal */}
        <StoriesGrid />

        {/* 10. Dealer / Final CTA */}
        <DealerCTA
          onOpenDealerModal={() => setIsDealerModalOpen(true)}
          onExploreBikes={handleExploreBikes}
        />
      </main>

      {/* 11. Footer */}
      <Footer
        onOpenDealerModal={() => setIsDealerModalOpen(true)}
      />

      {/* Modals */}
      <DealerModal
        isOpen={isDealerModalOpen}
        onClose={() => setIsDealerModalOpen(false)}
      />

      <BikeModal
        bike={selectedBike}
        onClose={() => setSelectedBike(null)}
        onOpenDealerModal={() => {
          setSelectedBike(null);
          setIsDealerModalOpen(true);
        }}
      />
    </div>
  );
}
