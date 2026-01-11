import { useState } from 'react';
import { Upload, CheckCircle, XCircle, Shield, Sparkles, AlertCircle } from 'lucide-react';
import { api } from '../services/api';
import ProductVerificationPage from './ProductVerificationPage';
import jsQR from 'jsqr';

export default function VerifyPage() {
  const [verificationMethod, setVerificationMethod] = useState<'serial' | 'image'>('serial');
  const [serialNumber, setSerialNumber] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [verificationResult, setVerificationResult] = useState<'verified' | 'failed' | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifiedSerialNumber, setVerifiedSerialNumber] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const decodeQRFromImage = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Failed to get canvas context'));
            return;
          }

          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);

          if (code && code.data) {
            resolve(code.data);
          } else {
            reject(new Error('No QR code found in image'));
          }
        };
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = e.target?.result as string;
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  };

  const extractSerialFromUrl = (url: string): string | null => {
    const match = url.match(/\/verify\/([A-Z0-9-]+)/i);
    return match ? match[1] : null;
  };

  const handleVerify = async () => {
    setIsVerifying(true);
    setVerificationResult(null);
    setErrorMessage('');

    try {
      let serialNumberToVerify = '';

      if (verificationMethod === 'serial') {
        serialNumberToVerify = serialNumber.trim();
      } else if (imageFile) {
        try {
          const qrData = await decodeQRFromImage(imageFile);
          const extractedSerial = extractSerialFromUrl(qrData);

          if (!extractedSerial) {
            setVerificationResult('failed');
            setErrorMessage('Could not extract serial number from QR code. Please ensure the QR code contains a valid verification URL.');
            setIsVerifying(false);
            return;
          }

          serialNumberToVerify = extractedSerial;
        } catch (error) {
          console.error('QR decode error:', error);
          setVerificationResult('failed');
          setErrorMessage('Failed to decode QR code. Please ensure the image is clear and contains a valid QR code.');
          setIsVerifying(false);
          return;
        }
      }

      if (!serialNumberToVerify) {
        setVerificationResult('failed');
        setErrorMessage('No serial number provided');
        setIsVerifying(false);
        return;
      }

      const result = await api.verifySerialNumber(serialNumberToVerify);

      if (result.valid && result.product) {
        setVerificationResult('verified');
        setVerifiedSerialNumber(serialNumberToVerify);
      } else {
        setVerificationResult('failed');
        setErrorMessage(result.message || 'Invalid or deactivated serial number');
      }
    } catch (error) {
      console.error('Verification error:', error);
      setVerificationResult('failed');
      setErrorMessage('Verification failed. Please check your connection and try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  if (verificationResult === 'verified' && verifiedSerialNumber) {
    return <ProductVerificationPage serialNumber={verifiedSerialNumber} />;
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setVerificationResult(null);
    }
  };

  const handleReset = () => {
    setSerialNumber('');
    setImageFile(null);
    setVerificationResult(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 text-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full filter blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjAzIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Product Authentication</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">Verify Your Product</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ensure the authenticity of your ZSINDIA product and protect yourself from counterfeit items
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Shield,
                title: 'Genuine Products',
                description: 'Verify authenticity instantly',
                color: 'from-blue-600 to-blue-700',
              },
              {
                icon: CheckCircle,
                title: 'Warranty Coverage',
                description: 'Ensure your warranty is valid',
                color: 'from-cyan-600 to-cyan-700',
              },
              {
                icon: Sparkles,
                title: 'Peace of Mind',
                description: 'Buy with confidence',
                color: 'from-teal-600 to-teal-700',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 text-center hover:shadow-lg transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} mb-4`}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white mb-12 shadow-xl">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Verify Your Product?</h2>
                <ul className="space-y-3">
                  {[
                    'Confirm you have purchased a genuine ZSINDIA product',
                    'Protect yourself from counterfeit and unsafe products',
                    'Activate and validate your warranty coverage',
                    'Ensure eligibility for after-sales support and service',
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-100">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Choose Verification Method</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <button
                onClick={() => {
                  setVerificationMethod('serial');
                  handleReset();
                }}
                className={`group p-8 rounded-xl border-2 transition-all ${
                  verificationMethod === 'serial'
                    ? 'border-blue-600 bg-blue-50 shadow-lg scale-105'
                    : 'border-slate-300 hover:border-blue-400 hover:shadow-md'
                }`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 transition-colors ${
                  verificationMethod === 'serial'
                    ? 'bg-blue-600'
                    : 'bg-slate-200 group-hover:bg-blue-100'
                }`}>
                  <Shield className={`h-6 w-6 ${
                    verificationMethod === 'serial' ? 'text-white' : 'text-slate-600 group-hover:text-blue-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Serial Number</h3>
                <p className="text-sm text-slate-600">
                  Enter the serial number found on your product label
                </p>
              </button>

              <button
                onClick={() => {
                  setVerificationMethod('image');
                  handleReset();
                }}
                className={`group p-8 rounded-xl border-2 transition-all ${
                  verificationMethod === 'image'
                    ? 'border-blue-600 bg-blue-50 shadow-lg scale-105'
                    : 'border-slate-300 hover:border-blue-400 hover:shadow-md'
                }`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 transition-colors ${
                  verificationMethod === 'image'
                    ? 'bg-blue-600'
                    : 'bg-slate-200 group-hover:bg-blue-100'
                }`}>
                  <Upload className={`h-6 w-6 ${
                    verificationMethod === 'image' ? 'text-white' : 'text-slate-600 group-hover:text-blue-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Upload Image</h3>
                <p className="text-sm text-slate-600">
                  Upload a photo of your product's verification label or packaging
                </p>
              </button>
            </div>

            {verificationMethod === 'serial' ? (
              <div className="space-y-4">
                <label htmlFor="serialNumber" className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Product Serial Number
                </label>
                <input
                  type="text"
                  id="serialNumber"
                  value={serialNumber}
                  onChange={(e) => {
                    setSerialNumber(e.target.value);
                    setVerificationResult(null);
                  }}
                  placeholder="e.g., ZS-123456"
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-mono text-base"
                />
                <p className="text-sm text-slate-600 flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>Find the serial number on your product label, warranty card, or packaging</span>
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Upload Product Image
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-blue-500 transition-all bg-slate-50">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <div className="inline-flex p-4 rounded-full bg-blue-100 mb-4">
                      <Upload className="h-8 w-8 text-blue-600" />
                    </div>
                    <p className="text-slate-900 font-semibold mb-2 text-lg">
                      {imageFile ? imageFile.name : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-sm text-slate-600">PNG, JPG, JPEG up to 10MB</p>
                  </label>
                </div>
                <p className="text-sm text-slate-600 flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>Take a clear photo of the verification label or hologram sticker on your product</span>
                </p>
              </div>
            )}

            <button
              onClick={handleVerify}
              disabled={
                isVerifying ||
                (verificationMethod === 'serial' ? !serialNumber.trim() : !imageFile)
              }
              className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-5 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 hover:scale-105"
            >
              {isVerifying ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <Shield className="h-6 w-6" />
                  <span>Verify Product Authenticity</span>
                </>
              )}
            </button>

            {verificationResult === 'failed' && (
              <div className="mt-10 p-8 rounded-2xl border-2 bg-gradient-to-br from-red-50 to-rose-50 border-red-500">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-red-600 rounded-full p-3">
                    <XCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-900">Verification Failed</h3>
                    <p className="text-red-700 font-medium">Warning: Potential counterfeit product</p>
                  </div>
                </div>
                <p className="text-base leading-relaxed mb-6 text-red-800">
                  {errorMessage || 'This product could not be verified in our authentication system. It may be counterfeit or the serial number may be invalid. For your safety and to ensure warranty coverage, please contact our support team immediately.'}
                </p>
                <div className="bg-red-100 border border-red-300 rounded-xl p-6">
                  <p className="text-sm font-bold text-red-900 mb-3 uppercase tracking-wide">
                    Immediate Actions Required:
                  </p>
                  <ul className="text-sm text-red-800 space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Contact our support team at +91 63544 95770</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Provide your purchase receipt and seller details</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Do not use the product as it may be unsafe or perform poorly</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>Report the seller to help us combat counterfeit products</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Need Help?</h3>
            <p className="text-sm text-slate-600 mb-4">
              If you're having trouble finding your product's serial number or verification code:
            </p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Check the product label on the device or packaging</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Look for the warranty card that came with your product</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Contact our support team at +91 63544 95770 for assistance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
