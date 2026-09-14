export interface BikeSpec {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface Bicycle {
  id: string;
  name: string;
  series: string;
  category: 'MTB' | 'ROAD' | 'HYBRID' | 'URBAN' | 'KIDS';
  tagline: string;
  description: string;
  image: string;
  priceFormatted: string;
  weight: string;
  frameMaterial: string;
  speeds: string;
  wheelSize: string;
  specs: BikeSpec[];
  keyFeatures: string[];
}

export interface CategoryData {
  id: 'MTB' | 'ROAD' | 'HYBRID' | 'URBAN' | 'KIDS';
  name: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  specSummary: string;
  accent: string;
  featuredBikeId: string;
}

export interface EngineeringPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
  metric: {
    label: string;
    value: string;
  };
}

export interface LifestyleMoment {
  id: string;
  title: string;
  category: string;
  terrain: string;
  image: string;
  description: string;
}

export interface StoryArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  image: string;
  author: string;
}

export interface Dealer {
  id: string;
  name: string;
  city: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  services: string[];
  distance?: string;
}
