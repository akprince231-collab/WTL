import heroBikeImage from '../assets/images/wtl_hero_bike_1789402789345.jpg';
import featuredBikeImage from '../assets/images/wtl_featured_bike_1789402804156.jpg';
import engineeringDetailImage from '../assets/images/wtl_engineering_detail_1789402817427.jpg';
import lifestyleHeroImage from '../assets/images/wtl_lifestyle_hero_1789402833809.jpg';
import { Bicycle, CategoryData, EngineeringPillar, LifestyleMoment, StoryArticle, Dealer } from '../types';

export { heroBikeImage, featuredBikeImage, engineeringDetailImage, lifestyleHeroImage };

export const BICYCLES: Bicycle[] = [
  {
    id: 'wtl-apex-sl',
    name: 'WTL Apex SL',
    series: 'Pro Racing Road Series',
    category: 'ROAD',
    tagline: 'Ultralight aero road platform with zero-flex power transfer.',
    description: 'Developed for high-cadence road performance. High-modulus unidirectional carbon frame with wind-tunnel optimized aerodynamic tube profiles and integrated cockpit.',
    image: heroBikeImage,
    priceFormatted: '$4,850',
    weight: '6.85 kg',
    frameMaterial: 'HM-11 Carbon Monocoque',
    speeds: '24-Speed (2x12)',
    wheelSize: '700c Aero Carbon',
    specs: [
      { label: 'Frame Weight', value: '780g (Size M)', highlight: true },
      { label: 'Wheelset', value: 'WTL Veloce 50mm Carbon Tubeless' },
      { label: 'Drivetrain', value: '24-Speed Electronic Dual Control' },
      { label: 'Brakes', value: 'Flat-Mount Hydraulic Disc 160/140mm' },
      { label: 'Tire Clearance', value: 'Up to 32mm All-Road' },
      { label: 'Bottom Bracket', value: 'T47 Ceramic Bearing Integrated' },
    ],
    keyFeatures: [
      'Full internal cable routing through integrated stem',
      'Asymmetric chainstay design for direct power delivery',
      'Vibration-dampening carbon seatpost profile',
      'Race-geometry tuned for descending stability'
    ]
  },
  {
    id: 'wtl-trail-x9',
    name: 'WTL Trail X-9',
    series: 'Enduro & Hardtail MTB',
    category: 'MTB',
    tagline: 'Built for technical descents, rock gardens, and steep climbs.',
    description: 'Precision hardtail trail weapon featuring aggressive modern 65-degree head angle geometry, 29-inch tubeless wheels, and progressive 120mm air suspension fork.',
    image: featuredBikeImage,
    priceFormatted: '$3,450',
    weight: '10.2 kg',
    frameMaterial: 'Aero-Grade Hydroformed Alloy / Carbon Hybrid',
    speeds: '12-Speed 1x Drivetrain',
    wheelSize: '29" Boost Axle',
    specs: [
      { label: 'Front Travel', value: '120mm Air Spring with Lockout', highlight: true },
      { label: 'Wheelset', value: '29" Double-Wall 30mm Inner Rim' },
      { label: 'Cassette', value: '10-52T Wide Ratio 12-Speed' },
      { label: 'Brakes', value: '4-Piston Hydraulic Disc 180mm Rotors' },
      { label: 'Dropper Post', value: '150mm Internal Routing' },
      { label: 'Max Tire Width', value: '2.5" Tubeless Ready' },
    ],
    keyFeatures: [
      'Slacker head tube geometry for high-speed trail confidence',
      'Boost 148mm rear thru-axle for lateral stiffness',
      'Integrated downtube armor protection',
      'Steep seat angle for planted climbing traction'
    ]
  },
  {
    id: 'wtl-strada-hybrid',
    name: 'WTL Strada Hybrid',
    series: 'All-Terrain Cross Hybrid',
    category: 'HYBRID',
    tagline: 'Versatility without compromise across paved roads and light gravel.',
    description: 'The definitive all-terrain explorer. Blends the speed and efficiency of road geometry with the upright ergonomic posture and puncture resistance of an all-road explorer.',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80',
    priceFormatted: '$2,150',
    weight: '9.4 kg',
    frameMaterial: 'Triple-Butted 6061-T6 Aluminum',
    speeds: '18-Speed (2x9)',
    wheelSize: '700x38c Multi-Surface',
    specs: [
      { label: 'Tire Profile', value: '700x38c All-Surface Compound', highlight: true },
      { label: 'Fork', value: 'Carbon Steerer with Luggage Mounts' },
      { label: 'Drivetrain', value: 'Wide-Range Gravel/Hybrid Groupset' },
      { label: 'Braking', value: 'Dual-Piston Hydraulic Flat Mount' },
      { label: 'Cargo Mounts', value: 'Rear Rack, Fender & 3 Bottle Cages' },
      { label: 'Cockpit', value: 'Ergonomic Sweep Handlebar' },
    ],
    keyFeatures: [
      'Multi-surface micro-knob tires for low rolling resistance on tarmac',
      'Modular rack and fender bosses for bikepacking versatility',
      'Comfort-tuned seatstays absorbing chip-seal vibrations',
      'Hydraulic disc control in wet and muddy conditions'
    ]
  },
  {
    id: 'wtl-metro-commute',
    name: 'WTL Metro Urban',
    series: 'City Commuter Series',
    category: 'URBAN',
    tagline: 'Refined urban speed designed for daily metropolitan cadence.',
    description: 'Engineered for navigating city traffic with effortless posture and clean minimalist aesthetics. Low-maintenance internal cable routing, durable puncture-proof casing, and crisp hydraulic stopping power.',
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80',
    priceFormatted: '$1,850',
    weight: '10.1 kg',
    frameMaterial: 'Lightweight Alloy with Internal Cabling',
    speeds: '1x10 Urban Rapid-Fire',
    wheelSize: '700x32c Urban Reflective',
    specs: [
      { label: 'Cockpit', value: 'Integrated Bell & Low-Rise Bar', highlight: true },
      { label: 'Tires', value: 'Puncture-Shield 32mm with Reflective Strip' },
      { label: 'Gearing', value: '1x10 Single Front Chainring' },
      { label: 'Braking', value: 'Shimano Hydraulic Disc' },
      { label: 'Saddle', value: 'Waterproof Memory-Foam Commute' },
      { label: 'Stand', value: 'Hidden Integrated Kickstand Mount' },
    ],
    keyFeatures: [
      'Streamlined urban geometry with commanding traffic visibility',
      'Integrated stealth eyelets for pannier bags',
      'High-contrast reflective tire sidewall graphics for dawn/dusk safety',
      'Sealed bottom bracket and internal cable run preventing road spray ingress'
    ]
  },
  {
    id: 'wtl-cadet-pro',
    name: 'WTL Cadet Pro Junior',
    series: 'Youth & Junior Performance Series',
    category: 'KIDS',
    tagline: 'True high-spec performance geometry scaled for emerging riders.',
    description: 'Never a toy, always a bicycle. Engineered with custom child-proportioned cranks, short-reach brake levers, lightweight alloy tubing, and genuine pneumatic high-traction tires.',
    image: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1200&q=80',
    priceFormatted: '$680',
    weight: '7.8 kg',
    frameMaterial: 'Custom Ultralight 6061 Aluminum',
    speeds: '8-Speed Short-Cage',
    wheelSize: '24" / 20" Multi-Options',
    specs: [
      { label: 'Child Ergonomics', value: '127mm Crank Arms & Short-Reach Levers', highlight: true },
      { label: 'Weight Advantage', value: 'Sub-8kg Full Build' },
      { label: 'Brakes', value: 'Easy-Pull Mechanical Disc System' },
      { label: 'Gearing', value: '1x8 Wide Range with Chain Guard' },
      { label: 'Cockpit', value: 'Narrow 540mm Handlebars with Safety Grips' },
      { label: 'Pedals', value: 'Wide Platform Resin Studded' },
    ],
    keyFeatures: [
      'Low standover height provides confidence and swift dismounting',
      'Proportionate Q-factor matching narrower hips of young riders',
      'Lightweight rigid fork for precise steering feedback',
      'Durable dual-compound all-terrain pneumatic tires'
    ]
  }
];

export const CATEGORIES: CategoryData[] = [
  {
    id: 'MTB',
    name: 'Mountain Bikes',
    subtitle: 'Rugged Trail & Alpine',
    description: 'Engineered for steep climbs, technical descents, and rugged terrain with aggressive tire clearance and progressive geometry.',
    image: featuredBikeImage,
    badge: 'Hardtail & Trail',
    specSummary: '29" Wheels • 120mm Travel • Boost Axles',
    accent: '#E5A910',
    featuredBikeId: 'wtl-trail-x9'
  },
  {
    id: 'ROAD',
    name: 'Road & Aero',
    subtitle: 'High Velocity Tarmac',
    description: 'Aerodynamic wind-slicing profiles, featherweight carbon layup, and relentless power transfer built for pure road speed.',
    image: heroBikeImage,
    badge: 'Race & Endurance',
    specSummary: 'Ultralight Carbon • 24-Speed • Aero Cockpit',
    accent: '#E5A910',
    featuredBikeId: 'wtl-apex-sl'
  },
  {
    id: 'HYBRID',
    name: 'Hybrid & All-Road',
    subtitle: 'Multi-Surface Versatility',
    description: 'The sweet spot between tarmac speed and off-road stability. Equipped for gravel paths, greenways, and daily training.',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80',
    badge: 'Tarmac to Trail',
    specSummary: '700x38c Tires • Multi-Rack Mounts • Hydraulic Disc',
    accent: '#E5A910',
    featuredBikeId: 'wtl-strada-hybrid'
  },
  {
    id: 'URBAN',
    name: 'Urban Commute',
    subtitle: 'Metropolitan Agility',
    description: 'Sleek, minimalist city frames crafted for quick maneuvering, all-weather braking, and effortless daily commuting.',
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80',
    badge: 'City & Transit',
    specSummary: 'Clean Cockpit • Anti-Puncture • Reflective Details',
    accent: '#E5A910',
    featuredBikeId: 'wtl-metro-commute'
  },
  {
    id: 'KIDS',
    name: 'Junior Performance',
    subtitle: 'Youth Progression',
    description: 'Precision scaled geometry and lightweight alloy construction that inspires confidence for the next generation of riders.',
    image: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1200&q=80',
    badge: 'Youth & Junior',
    specSummary: 'Proportioned Cranks • Sub-8kg • Safe Short-Reach Controls',
    accent: '#E5A910',
    featuredBikeId: 'wtl-cadet-pro'
  }
];

export const ENGINEERING_PILLARS: EngineeringPillar[] = [
  {
    number: '01',
    title: 'CONTROL',
    subtitle: 'Aero Integrated Cockpit & Steering Axis',
    description: 'Every input from the handlebars translates with pinpoint accuracy. The tapered head tube and oversized crown junction resist torsional deflection under aggressive sprints and steep hairpins.',
    details: [
      'Direct-mount internal cabling eliminates cable drag and turbulence',
      'Optimized 72.8° head tube angle strikes ideal balance of stability and responsiveness',
      'High-frequency road vibration filtration along the fork blade fibers'
    ],
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'High-end bicycle handlebars and integrated aerodynamic cockpit',
    metric: {
      label: 'Steering Torsional Rigidity',
      value: '+22%'
    }
  },
  {
    number: '02',
    title: 'PERFORMANCE',
    subtitle: 'High-Modulus Carbon Layup & Power Transfer',
    description: 'Our proprietary carbon layering matrix aligns fibers along directional stress lines, maximizing bottom bracket stiffness without deadening the organic compliance cyclists love.',
    details: [
      'Unidirectional Japanese carbon weave with high-compaction epoxy resin',
      'Oversized bottom bracket shell directly converts every watt from crank to cassette',
      'Micro-tuned wall thickness varying from 0.8mm to 2.4mm at high-torque stress nodes'
    ],
    image: engineeringDetailImage,
    imageAlt: 'Precision carbon fiber bicycle bottom bracket and crankset',
    metric: {
      label: 'Wattage Transfer Efficiency',
      value: '98.4%'
    }
  },
  {
    number: '03',
    title: 'COMFORT',
    subtitle: 'Engineered Micro-Compliance Stays',
    description: 'Fatigue is the enemy of endurance. Flattened seatstays flex vertically over harsh chip seal and trail chatter while remaining laterally rigid for instantaneous acceleration.',
    details: [
      'Dropped seatstay geometry lowers center of gravity and increases seatpost flex',
      'Clearance engineered for modern wider tires running lower pressures',
      'Isolates high-frequency vibration before it reaches rider contact points'
    ],
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Bicycle rear carbon seatstay and aerodynamic frame triangle',
    metric: {
      label: 'Vertical Road Chatter Dampening',
      value: '-34%'
    }
  },
  {
    number: '04',
    title: 'PRECISION',
    subtitle: 'Hydraulic Heat-Dissipating Disc Calipers',
    description: 'Uncompromising stopping power across torrential downpours, dry alpine dust, and technical singletrack. Modulated braking gives you the confidence to carry speed deeper into every apex.',
    details: [
      'Dual-piston mineral hydraulic system with tool-free reach adjustment',
      'Floating stainless-steel rotors with aluminum carrier fins dissipate heat',
      'Consistent lever feel across 2,000-meter descents without fade'
    ],
    image: 'https://images.unsplash.com/photo-1502744688674-c619d3864003?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Precision hydraulic disc brake on bicycle wheel',
    metric: {
      label: 'Fade-Free Heat Dissipation',
      value: '420°C'
    }
  }
];

export const LIFESTYLE_MOMENTS: LifestyleMoment[] = [
  {
    id: 'coastal-dawn',
    title: 'Dawn Pacific Ascent',
    category: 'ROAD ENDURANCE',
    terrain: 'Asphalt & Coastal Cliffs',
    image: lifestyleHeroImage,
    description: 'Chasing the first morning light across coastal switchbacks. Crisp air, rhythmic breathing, and the hum of tires against cool pavement.'
  },
  {
    id: 'alpine-singletrack',
    title: 'Ridge Line Singletrack',
    category: 'TRAIL & MTB',
    terrain: 'Lush Forest & Rock Gardens',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80',
    description: 'Navigating root steps, loam berms, and alpine ridges with instant suspension feedback and grounded traction.'
  },
  {
    id: 'metropolis-flow',
    title: 'Urban Grid Velocity',
    category: 'COMMUTER CADENCE',
    terrain: 'Architectural City Streets',
    image: 'https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?auto=format&fit=crop&w=1000&q=80',
    description: 'Cutting smoothly through rush-hour boulevards and across river bridges. Human momentum turning the concrete jungle into an open lane.'
  },
  {
    id: 'gravel-frontier',
    title: 'Backcountry Gravel Expedition',
    category: 'ALL-ROAD EXPLORER',
    terrain: 'Crushed Limestone & Dirt',
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1000&q=80',
    description: 'Leaving tarmac behind where the cell signal fades. Loaded with essentials for multi-hour gravel exploration.'
  }
];

export const STORIES: StoryArticle[] = [
  {
    id: 'art-of-the-ride',
    title: 'The Art of the Ride: Finding Flow in High Altitudes',
    category: 'RACE & CULTURE',
    readTime: '6 min read',
    date: 'SEPTEMBER 2026',
    author: 'Julian Thorne',
    summary: 'What happens when grade percentages rise above 12% and the road narrows to a single thread? A reflection on rhythm, pacing, and mental clarity on two wheels.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'choosing-your-ride',
    title: 'Choosing Your Perfect Ride: Geometry, Terrain & Purpose',
    category: 'TECHNICAL GUIDE',
    readTime: '8 min read',
    date: 'AUGUST 2026',
    author: 'Elena Rossi',
    summary: 'Demystifying stack, reach, head-angles, and tire profiles so you find the exact bicycle built for your riding ambition.',
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'life-on-two-wheels',
    title: 'Life on Two Wheels: The Quiet Revolution in City Living',
    category: 'LIFESTYLE',
    readTime: '5 min read',
    date: 'JULY 2026',
    author: 'Marcus Chen',
    summary: 'How daily bicycle commuting reshapes relationship to city architecture, physical wellbeing, and personal freedom.',
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80'
  }
];

export const AUTHORIZED_DEALERS: Dealer[] = [
  {
    id: 'd1',
    name: 'WTL Flagship Studio — Boulder',
    city: 'Boulder',
    region: 'Colorado, USA',
    address: '1420 Pearl Street, Suite 100',
    phone: '+1 (303) 555-0192',
    email: 'boulder@wtlbikes.com',
    services: ['Complete Bicycle Lineup', 'Professional Bike Fitting', 'Demo Fleet & Test Rides', 'Master Certified Workshop'],
    distance: '0.8 mi'
  },
  {
    id: 'd2',
    name: 'Pacific Velocity Hub',
    city: 'Seattle',
    region: 'Washington, USA',
    address: '812 Ballard Avenue NW',
    phone: '+1 (206) 555-0834',
    email: 'seattle@wtlbikes.com',
    services: ['All-Road & MTB Specialist', 'Custom Drivetrain Tuning', 'Test Ride Circuit', 'Authorized Service'],
    distance: '2.4 mi'
  },
  {
    id: 'd3',
    name: 'Veloce Atelier Zurich',
    city: 'Zurich',
    region: 'Switzerland',
    address: 'Bahnhofstrasse 44, 8001 Zürich',
    phone: '+41 44 555 9210',
    email: 'zurich@wtlbikes.com',
    services: ['Carbon Aero Showcase', 'Precision 3D Body Scanning', 'Full Range Demo', 'Concierge Delivery'],
    distance: 'Direct Partner'
  },
  {
    id: 'd4',
    name: 'Summit Edge Cycles',
    city: 'Innsbruck',
    region: 'Austria',
    address: 'Maria-Theresien-Straße 18',
    phone: '+43 512 555 412',
    email: 'innsbruck@wtlbikes.com',
    services: ['Enduro & MTB Specialists', 'Alpine Route Planning', 'Suspension Tuning', 'Factory Warranty Center'],
    distance: 'Direct Partner'
  }
];
