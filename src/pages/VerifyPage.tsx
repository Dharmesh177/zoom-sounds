import { useState } from 'react';
import { Upload, CheckCircle, XCircle, Shield } from 'lucide-react';

export default function VerifyPage() {
  const [verificationMethod, setVerificationMethod] = useState<'uuid' | 'image'>('uuid');
  const [uuid, setUuid] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [verificationResult, setVerificationResult] = useState<'genuine' | 'fake' | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const genuineUUIDs = [
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
  ];

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      if (verificationMethod === 'uuid') {
        const isGenuine = genuineUUIDs.includes(uuid.toLowerCase().trim());
        setVerificationResult(isGenuine ? 'genuine' : 'fake');
      } else {
        const isGenuine = Math.random() > 0.3;
        setVerificationResult(isGenuine ? 'genuine' : 'fake');
      }
      setIsVerifying(false);
    }, 1500);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setVerificationResult(null);
    }
  };

  const handleReset = () => {
    setUuid('');
    setImageFile(null);
    setVerificationResult(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 text-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center space-x-4 mb-4">
            <Shield className="h-12 w-12 text-blue-600" />
            <h1 className="text-5xl md:text-6xl font-bold">Verify Your Product</h1>
          </div>
          <p className="text-xl text-slate-600">Confirm the authenticity of your ZSINDIA product</p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Verify?</h2>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-1 mt-1 flex-shrink-0">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Ensure you have purchased a genuine Zoom Sounds product</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-1 mt-1 flex-shrink-0">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Protect yourself from counterfeit products</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full p-1 mt-1 flex-shrink-0">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Validate warranty and after-sales support eligibility</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Choose Verification Method</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => {
                  setVerificationMethod('uuid');
                  handleReset();
                }}
                className={`p-5 rounded-lg border-2 transition-all ${
                  verificationMethod === 'uuid'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-slate-300 hover:border-blue-300'
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Enter UUID Code</h3>
                <p className="text-sm text-slate-600">Enter the unique identification code found on your product</p>
              </button>

              <button
                onClick={() => {
                  setVerificationMethod('image');
                  handleReset();
                }}
                className={`p-5 rounded-lg border-2 transition-all ${
                  verificationMethod === 'image'
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-slate-300 hover:border-orange-300'
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Upload Image</h3>
                <p className="text-sm text-slate-600">Upload a photo of your product's verification label</p>
              </button>
            </div>

            {verificationMethod === 'uuid' ? (
              <div>
                <label htmlFor="uuid" className="block text-sm font-semibold text-slate-700 mb-2">
                  Product UUID Code
                </label>
                <input
                  type="text"
                  id="uuid"
                  value={uuid}
                  onChange={(e) => {
                    setUuid(e.target.value);
                    setVerificationResult(null);
                  }}
                  placeholder="e.g., a1b2c3d4-e5f6-7890-abcd-ef1234567890"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-mono text-sm"
                />
                <p className="text-xs text-slate-500 mt-2">
                  The UUID code is printed on the product label and warranty card
                </p>
              </div>
            ) : (
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Upload Product Image
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-blue-600 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-700 font-medium mb-2">
                      {imageFile ? imageFile.name : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-sm text-slate-500">PNG, JPG up to 10MB</p>
                  </label>
                </div>
              </div>
            )}

            <button
              onClick={handleVerify}
              disabled={
                isVerifying ||
                (verificationMethod === 'uuid' ? !uuid.trim() : !imageFile)
              }
              className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <Shield className="h-5 w-5" />
              <span>{isVerifying ? 'Verifying...' : 'Verify Product'}</span>
            </button>

            {verificationResult && (
              <div
                className={`mt-8 p-6 rounded-xl ${
                  verificationResult === 'genuine'
                    ? 'bg-green-50 border-2 border-green-500'
                    : 'bg-red-50 border-2 border-red-500'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  {verificationResult === 'genuine' ? (
                    <>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                      <h3 className="text-xl font-bold text-green-900">Genuine Product</h3>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-8 w-8 text-red-600" />
                      <h3 className="text-xl font-bold text-red-900">Warning: Counterfeit Product</h3>
                    </>
                  )}
                </div>
                <p
                  className={`${
                    verificationResult === 'genuine' ? 'text-green-800' : 'text-red-800'
                  } leading-relaxed`}
                >
                  {verificationResult === 'genuine'
                    ? 'Congratulations! This is an authentic ZSINDIA product. Your warranty and support are fully active. Thank you for choosing genuine products.'
                    : 'This product could not be verified in our system. It may be counterfeit. Please contact our support team immediately with your purchase details for assistance.'}
                </p>
                {verificationResult === 'fake' && (
                  <div className="mt-4 pt-4 border-t border-red-300">
                    <p className="text-sm font-semibold text-red-900 mb-2">What to do next:</p>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>Contact us at +91 98765 43210</li>
                      <li>Provide your purchase receipt and seller details</li>
                      <li>Do not use the product as it may be unsafe</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-8 bg-slate-100 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Sample UUID for Testing</h3>
            <p className="text-sm text-slate-600 mb-3">You can use these sample UUIDs to test the verification system:</p>
            <div className="space-y-2">
              {genuineUUIDs.map((id) => (
                <div key={id} className="bg-white rounded-lg p-3 font-mono text-sm text-slate-700 border border-slate-300">
                  {id}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
