import { useEffect, useState } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Shield, Package, Clock, Award } from 'lucide-react';
import { api, SerialNumber, Warranty, Customer, CustomerInfo } from '../services/api';
import { Product } from '../types/product';
import WarrantyClaimForm from '../components/WarrantyClaimForm';
import { OptimizedImage } from '../components/OptimizedImage';

interface ProductVerificationPageProps {
  serialNumber: string;
}

export default function ProductVerificationPage({ serialNumber }: ProductVerificationPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [serialData, setSerialData] = useState<SerialNumber | null>(null);
  const [warranty, setWarranty] = useState<Warranty | null>(null);
  const [claimedWarranty, setClaimedWarranty] = useState(false);
  const [warrantyStatus, setWarrantyStatus] = useState<string>('');
  const [warrantyExpireTime, setWarrantyExpireTime] = useState<string>('');
  const [daysRemaining, setDaysRemaining] = useState<number | undefined>(undefined);
  const [hoursRemaining, setHoursRemaining] = useState<number | undefined>(undefined);
  const [isExpired, setIsExpired] = useState(false);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showClaimForm, setShowClaimForm] = useState(false);

  useEffect(() => {
    const verifyProduct = async () => {
      try {
        const result = await api.verifySerialNumber(serialNumber);

        if (result.valid && result.product) {
          setProduct(result.product);
          setSerialData(result.serialData || null);
          setWarranty(result.warranty || null);

          const isClaimed = result.claimedWarranty ||
                           result.claimed ||
                           result.warrantyClaimed ||
                           result.serialData?.claimedWarranty ||
                           false;

          setClaimedWarranty(isClaimed);
          setWarrantyStatus(result.warrantyStatus || '');
          
          // Handle warrantyExpireTime properly
          if (result.warrantyExpireTime) {
            setWarrantyExpireTime(result.warrantyExpireTime.endDate || '');
            setDaysRemaining(result.warrantyExpireTime.daysRemaining);
            setHoursRemaining(result.warrantyExpireTime.hoursRemaining);
            setIsExpired(result.warrantyExpireTime.isExpired || false);
          }
          
          setCustomer(result.customer || null);
          setCustomerInfo(result.customerInfo || null);
        } else {
          setError(true);
          setErrorMessage(result.message || 'Invalid or deactivated serial number');
        }
      } catch (error) {
        console.error('Failed to verify:', error);
        setError(true);
        setErrorMessage('Product verification failed. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    verifyProduct();
  }, [serialNumber]);

  const handleWarrantyClaimSuccess = async () => {
    setShowClaimForm(false);
    setLoading(true);
    try {
      const result = await api.verifySerialNumber(serialNumber);
      if (result.valid && result.product) {
        setProduct(result.product);
        setSerialData(result.serialData || null);
        setWarranty(result.warranty || null);

        const isClaimed = result.claimedWarranty ||
                         result.claimed ||
                         result.warrantyClaimed ||
                         result.serialData?.claimedWarranty ||
                         false;

        setClaimedWarranty(isClaimed);
        setWarrantyStatus(result.warrantyStatus || '');
        
        // Handle warrantyExpireTime properly
        if (result.warrantyExpireTime) {
          setWarrantyExpireTime(result.warrantyExpireTime.endDate || '');
          setDaysRemaining(result.warrantyExpireTime.daysRemaining);
          setHoursRemaining(result.warrantyExpireTime.hoursRemaining);
          setIsExpired(result.warrantyExpireTime.isExpired || false);
        }
        
        setCustomer(result.customer || null);
        setCustomerInfo(result.customerInfo || null);
      }
    } catch (error) {
      console.error('Failed to refresh warranty data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getWarrantyTimeBreakdown = () => {
    if (isExpired) {
      return { years: 0, months: 0, days: 0, hours: 0, isExpired: true };
    }

    if (daysRemaining !== undefined) {
      const years = Math.floor(daysRemaining / 365);
      const remainingAfterYears = daysRemaining % 365;
      const months = Math.floor(remainingAfterYears / 30);
      const days = Math.floor(remainingAfterYears % 30);
      const hours = hoursRemaining || 0;

      return { years, months, days, hours, isExpired: false };
    }

    return { years: 0, months: 0, days: 0, hours: 0, isExpired: false };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Verifying Product</h2>
          <p className="text-slate-600">Please wait while we authenticate your product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border-4 border-red-500 overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-rose-600 p-8 text-white text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 rounded-full p-4">
                <XCircle className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">Verification Failed</h1>
            <p className="text-red-100 text-lg">{errorMessage}</p>
          </div>

          <div className="p-8">
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="font-bold text-yellow-900 mb-2 text-lg">Warning: Potential Counterfeit Product</p>
                  <p className="text-yellow-800 text-sm leading-relaxed">
                    This serial number could not be verified in our system. This product may be counterfeit
                    or the serial number may have been tampered with.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                Immediate Actions Required:
              </p>
              <ul className="space-y-3">
                {[
                  'Contact ZS India support immediately at +91 63544 95770',
                  'Keep your purchase receipt and product packaging',
                  'Note down the seller details and purchase location',
                  'Do not use the product as it may be unsafe or unreliable',
                  'Report the seller to help combat counterfeit products',
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-red-600 font-bold text-lg">•</span>
                    <span className="text-slate-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl shadow-2xl border-4 border-green-500 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-white text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 rounded-full p-4 animate-pulse">
                <CheckCircle2 className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-3">Authentic Product Verified!</h1>
            <p className="text-green-100 text-lg font-medium">
              This is a genuine ZS India product
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="bg-white rounded-xl p-6 border-2 border-green-200 shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-full p-3">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">Serial Number</p>
                    <p className="text-lg font-bold text-slate-900 font-mono">{serialData?.serialNumber}</p>
                  </div>
                </div>
              </div>

              {serialData?.batchNumber && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Batch Number:</span> {serialData.batchNumber}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

{showClaimForm ? (
          <WarrantyClaimForm
            serialNumber={serialNumber}
            onSuccess={handleWarrantyClaimSuccess}
            onCancel={() => setShowClaimForm(false)}
          />
        ) : claimedWarranty && warrantyStatus === 'active' ? (
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Warranty Active</h2>
                <p className="text-green-100 leading-relaxed mb-4">
                  Your product warranty is registered and active. You are eligible for full after-sales support and service coverage.
                </p>

                {/* Warranty Countdown Clock */}
                <div className="bg-white/10 rounded-xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 rounded-full p-2">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Warranty Time Remaining</h3>
                  </div>

                  {(() => {
                    const timeBreakdown = getWarrantyTimeBreakdown();
                    if (timeBreakdown.isExpired) {
                      return (
                        <div className="text-center py-8">
                          <p className="text-2xl font-bold text-white">Warranty Expired</p>
                        </div>
                      );
                    }

                    const timeUnits = [
                      { label: 'Years', value: timeBreakdown.years, show: timeBreakdown.years > 0 },
                      { label: 'Months', value: timeBreakdown.months, show: timeBreakdown.months > 0 },
                      { label: 'Days', value: timeBreakdown.days, show: timeBreakdown.days > 0 },
                      { label: 'Hours', value: timeBreakdown.hours, show: timeBreakdown.hours > 0 && timeBreakdown.years === 0 && timeBreakdown.months === 0 }
                    ].filter(unit => unit.show);

                    return (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {timeUnits.map((unit, idx) => (
                          <div key={idx} className="bg-white/20 rounded-lg p-4 text-center backdrop-blur-sm">
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-1 tabular-nums">
                              {unit.value}
                            </div>
                            <div className="text-xs sm:text-sm text-green-100 font-medium uppercase tracking-wide">
                              {unit.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })()}

                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-100">Total Days Remaining:</span>
                      <span className="font-bold text-white tabular-nums">{daysRemaining || 0} days</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-white mb-2">Warranty Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <p className="text-lg font-bold text-white capitalize">{warrantyStatus}</p>
                  </div>
                </div>

                {warranty && (
                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm font-semibold text-white mb-3">Warranty Period</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-green-200">Start Date</p>
                        <p className="font-semibold text-white">{new Date(warranty.startDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-green-200">End Date</p>
                        <p className="font-semibold text-white">{new Date(warranty.endDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                )}

                {(customer || customerInfo) && (
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-white mb-2">Registered Customer</p>
                    <div className="space-y-1 text-sm text-green-100">
                      <p><span className="font-semibold">Name:</span> {customer?.name || customerInfo?.name}</p>
                      <p><span className="font-semibold">Email:</span> {customer?.email || customerInfo?.email}</p>
                      <p><span className="font-semibold">Phone:</span> {customer?.phone || customerInfo?.phone}</p>
                    </div>
                  </div>
                )}

                <div className="bg-white/10 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold text-white mb-2">Your Benefits Include:</p>
                  <ul className="space-y-1 text-sm text-green-100">
                    <li>• Manufacturer warranty coverage</li>
                    <li>• Priority customer support</li>
                    <li>• Genuine spare parts guarantee</li>
                    <li>• Free service consultations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Claim Your Warranty</h2>
                <p className="text-blue-100 leading-relaxed mb-4">
                  This product is eligible for warranty coverage. Claim your warranty now to activate full after-sales support and service coverage.
                </p>
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-white mb-2">Benefits of Claiming Warranty:</p>
                  <ul className="space-y-1 text-sm text-blue-100">
                    <li>• Manufacturer warranty coverage</li>
                    <li>• Priority customer support</li>
                    <li>• Genuine spare parts guarantee</li>
                    <li>• Free service consultations</li>
                  </ul>
                </div>
                <button
                  onClick={() => setShowClaimForm(true)}
                  className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <Award className="h-5 w-5" />
                  <span>Claim Warranty Now</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Product Details</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {product.images && product.images.length > 0 && (
              <div className="space-y-4">
                {product.images.slice(0, 2).map((image: string, index: number) => (
                  <div key={index} className="relative rounded-xl overflow-hidden shadow-lg border-2 border-slate-200">
                    <OptimizedImage
                      src={image}
                      alt={`${product.name} - Image ${index + 1}`}
                      className="w-full aspect-video"
                      containerClassName="w-full"
                      objectFit="cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <div className="flex gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {product.family}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Overview</h4>
                <p className="text-slate-700 leading-relaxed text-sm">{product.overview}</p>
              </div>

              {product.keyHighlights && product.keyHighlights.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Key Highlights</h4>
                  <ul className="space-y-1">
                    {product.keyHighlights.slice(0, 4).map((highlight: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-slate-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.warranty && (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-green-900 mb-1">Warranty</p>
                  <p className="text-sm text-green-800">{product.warranty}</p>
                </div>
              )}
            </div>
          </div>

          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="border-t-2 border-slate-200 pt-6">
              <h4 className="font-bold text-slate-900 mb-4 text-lg">Technical Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => {
                  if (!value) return null;
                  const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

                  let displayValue: string;
                  if (typeof value === 'object' && !Array.isArray(value)) {
                    displayValue = Object.entries(value)
                      .map(([k, v]) => `${k}: ${v}`)
                      .join(', ');
                  } else if (Array.isArray(value)) {
                    displayValue = value.join(', ');
                  } else {
                    displayValue = String(value);
                  }

                  return (
                    <div key={key} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">{label}</p>
                      <p className="text-sm font-medium text-slate-900">{displayValue}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 text-center border-2 border-slate-200 shadow-lg">
          <p className="text-slate-600">
            For more information about your product or to access support, visit{' '}
            <a
              href="https://zsindia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold underline"
            >
              zsindia.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
