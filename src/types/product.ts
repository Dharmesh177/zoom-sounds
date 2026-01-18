export interface ProductSpecifications {
  powerOutput?: string;
  channels?: string;
  inputChannels?: string;
  digitalPlayer?: string;
  toneControl?: {
    bass?: string;
    mid?: string;
    treble?: string;
  };
  speakerOutput?: string;
  frequencyResponse?: string;
  snRatio?: string;
  powerSupply?: string;
  dimensions?: string;
  weight?: string;
  preOutput?: string;
  lineOutput?: string;
}

export interface Product {
  _id: string;
  id?: string; // For backward compatibility
  name: string;
  slug: string;
  family: string;
  category: string;
  technology: string;
  images: string[];
  thumbnail?: string;
  overview: string;
  keyHighlights: string[];
  features: string[];
  applications: string[];
  idealFor: string[];
  specifications?: ProductSpecifications;
  warranty: string;
  tags: string[];
  isTopSellingProduct: boolean;
  createdAt: string;
  updatedAt: string;
  __v?: number;
  
  // Legacy fields for backward compatibility
  title?: string;
  description?: string;
  heroImage?: string;
  highlights?: string[];
}
