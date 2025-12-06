const API_URL = import.meta.env.VITE_API_URL || 'https://zoom-sounds-backend.onrender.com/api/v1';

export interface ProductSpecifications {
  powerOutput?: string;
  channels?: string;
  inputChannels?: string;
  digitalPlayer?: string;
  speakerOutput?: string;
  frequencyResponse?: string;
  snRatio?: string;
  powerSupply?: string;
  dimensions?: string;
  weight?: string;
}

export interface Product {
  _id: string;
  name: string;
  category: string;
  family: string;
  overview: string;
  keyHighlights?: string[];
  features?: string[];
  specifications?: ProductSpecifications;
  applications?: string[];
  idealFor?: string[];
  warranty?: string;
  images?: string[];
}

export interface SerialNumber {
  _id: string;
  serialNumber: string;
  productId: string;
  batchNumber?: string;
  manufactureDate?: string;
  isActive: boolean;
  verifiedCount: number;
  lastVerifiedAt?: string;
}

export interface VerificationResponse {
  valid: boolean;
  product?: Product;
  serialData?: SerialNumber;
  message?: string;
}

export const api = {
  async verifySerialNumber(serialNumber: string): Promise<VerificationResponse> {
    try {
      const response = await fetch(`${API_URL}/serial-numbers/verify/${serialNumber}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          return {
            valid: false,
            message: 'Serial number not found',
          };
        }
        throw new Error('Failed to verify serial number');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Verification error:', error);
      throw error;
    }
  },
};
