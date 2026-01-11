const API_URL = import.meta.env.VITE_API_URL || 'https://api.zsindia.com/api/v1';

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

export interface Warranty {
  startDate: string;
  endDate: string;
  durationDays: number;
  status: string;
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
}

export interface VerificationResponse {
  valid: boolean;
  product?: Product;
  serialData?: SerialNumber;
  warranty?: Warranty;
  warrantyClaimed?: boolean;
  customer?: Customer;
  message?: string;
}

export interface WarrantyClaimRequest {
  name: string;
  email: string;
  phone: string;
  serialNumber: string;
  firebaseIdToken: string;
}

export interface WarrantyClaimResponse {
  status: string;
  message: string;
  data?: {
    customer: Customer;
    warranty: Warranty;
    product: {
      name: string;
      category: string;
    };
    serialNumber: string;
  };
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

  async claimWarranty(claimData: WarrantyClaimRequest): Promise<WarrantyClaimResponse> {
    try {
      const response = await fetch(`${API_URL}/serial-numbers/warranty/claim/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(claimData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to claim warranty');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Warranty claim error:', error);
      throw error;
    }
  },
};
