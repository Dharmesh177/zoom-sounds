import { Product } from '../types/product';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

export interface SerialNumber {
  _id: string;
  serialNumber: string;
  productId: string;
  batchNumber?: string;
  manufactureDate?: string;
  isActive: boolean;
  verifiedCount: number;
  lastVerifiedAt?: string;
  claimedWarranty?: boolean;
  claimedAt?: string;
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
  claimedAt?: string;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  claimedAt?: string;
}

export interface VerificationResponse {
  valid: boolean;
  product?: Product;
  serialData?: SerialNumber;
  warranty?: Warranty;
  warrantyClaimed?: boolean;
  claimed?: boolean;
  claimedWarranty?: boolean;
  warrantyStatus?: string;
  warrantyExpireTime?: string;
  daysRemaining?: number;
  hoursRemaining?: number;
  isExpired?: boolean;
  customer?: Customer;
  customerInfo?: CustomerInfo;
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

export interface FeaturedProductsResponse {
  status: string;
  product: Product[];
}

export interface AllProductsResponse {
  page?: number;
  limit?: number;
  totalPages?: number;
  totalProducts?: number;
  status: string;
  products: Product[];
}

export interface ProductDetailResponse {
  status: string;
  product: Product;
}

export const api = {
  async getFeaturedProducts(): Promise<FeaturedProductsResponse> {
    try {
      const response = await fetch(`${API_URL}/products/featuredproducts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch featured products');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Featured products error:', error);
      throw error;
    }
  },

  async getAllProducts(page?: number, limit?: number): Promise<AllProductsResponse> {
    try {
      let url = `${API_URL}/products`;
      const params = new URLSearchParams();
      
      if (page !== undefined) {
        params.append('page', page.toString());
      }
      if (limit !== undefined) {
        params.append('limit', limit.toString());
      }
      
      if (params.toString()) {
        url += `?${params.toString()}`;
      }

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get products error:', error);
      throw error;
    }
  },

  async getProductById(productId: string): Promise<ProductDetailResponse> {
    try {
      const response = await fetch(`${API_URL}/products/${productId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Product not found');
        }
        throw new Error('Failed to fetch product details');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Get product details error:', error);
      throw error;
    }
  },

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
