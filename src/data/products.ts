import { Product } from '../types/product';

export const dummyProducts: Product[] = [
  {
    id: '1',
    slug: 'prod-001',
    title: 'Thunder Pro X9000',
    description: 'Professional DJ sound system with 9000W power output, perfect for large events and outdoor concerts.',
    heroImage: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      '9000W peak power output for massive coverage',
      'Professional-grade components built to last',
      'Weather-resistant coating for outdoor use',
      'Integrated handles for easy transport'
    ]
  },
  {
    id: '2',
    slug: 'prod-002',
    title: 'IndustrialMax 5000',
    description: 'Heavy-duty industrial PA system designed for factories, warehouses, and large commercial spaces.',
    heroImage: 'https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'Weather-resistant with 10-year warranty',
      '24/7 operation capability',
      'Long-range coverage up to 500 meters',
      'Vandal-proof construction'
    ]
  },
  {
    id: '3',
    slug: 'prod-003',
    title: 'StudioMaster Elite',
    description: 'Premium recording studio monitors with crystal-clear frequency response and zero distortion.',
    heroImage: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      'Flat frequency response 20Hz-40kHz',
      'Near-field design for accurate mixing',
      'Bi-amplified design with 200W total power',
      'Acoustic isolation feet included'
    ]
  },
  {
    id: '4',
    slug: 'prod-004',
    title: 'ConcertPro 12K',
    description: 'State-of-the-art concert sound system delivering unmatched clarity for audiences up to 10,000 people.',
    heroImage: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: [
      '12,000W RMS power for massive venues',
      'Line array configuration for even coverage',
      'Digital signal processing built-in',
      'Rigging hardware included'
    ]
  }
];
