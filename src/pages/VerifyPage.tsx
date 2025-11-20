import { useState } from 'react';
import { Upload, CheckCircle, XCircle, Shield, Sparkles, AlertCircle } from 'lucide-react';

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
                  setVerificationMethod('uuid');
                  handleReset();
                }}
                className={`group p-8 rounded-xl border-2 transition-all ${
                  verificationMethod === 'uuid'
                    ? 'border-blue-600 bg-blue-50 shadow-lg scale-105'
                    : 'border-slate-300 hover:border-blue-400 hover:shadow-md'
                }`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 transition-colors ${
                  verificationMethod === 'uuid'
                    ? 'bg-blue-600'
                    : 'bg-slate-200 group-hover:bg-blue-100'
                }`}>
                  <Shield className={`h-6 w-6 ${
                    verificationMethod === 'uuid' ? 'text-white' : 'text-slate-600 group-hover:text-blue-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">UUID Code</h3>
                <p className="text-sm text-slate-600">
                  Enter the unique identification code found on your product label
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

            {verificationMethod === 'uuid' ? (
              <div className="space-y-4">
                <label htmlFor="uuid" className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
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
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-mono text-base"
                />
                <p className="text-sm text-slate-600 flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>Find the UUID code on your product label, warranty card, or packaging</span>
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
                (verificationMethod === 'uuid' ? !uuid.trim() : !imageFile)
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

            {verificationResult && (
              <div
                className={`mt-10 p-8 rounded-2xl border-2 ${
                  verificationResult === 'genuine'
                    ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-500'
                    : 'bg-gradient-to-br from-red-50 to-rose-50 border-red-500'
                }`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  {verificationResult === 'genuine' ? (
                    <>
                      <div className="bg-green-600 rounded-full p-3">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-green-900">Verified Genuine Product</h3>
                        <p className="text-green-700 font-medium">Your product is 100% authentic</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-red-600 rounded-full p-3">
                        <XCircle className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-red-900">Verification Failed</h3>
                        <p className="text-red-700 font-medium">Warning: Potential counterfeit product</p>
                      </div>
                    </>
                  )}
                </div>
                <p
                  className={`text-base leading-relaxed mb-6 ${
                    verificationResult === 'genuine' ? 'text-green-800' : 'text-red-800'
                  }`}
                >
                  {verificationResult === 'genuine'
                    ? 'Congratulations! This is an authentic ZSINDIA product. Your warranty and after-sales support are fully active. Thank you for choosing genuine products and supporting quality manufacturing.'
                    : 'This product could not be verified in our authentication system. It may be counterfeit or the verification code may be invalid. For your safety and to ensure warranty coverage, please contact our support team immediately.'}
                </p>
                {verificationResult === 'fake' && (
                  <div className="bg-red-100 border border-red-300 rounded-xl p-6">
                    <p className="text-sm font-bold text-red-900 mb-3 uppercase tracking-wide">
                      Immediate Actions Required:
                    </p>
                    <ul className="text-sm text-red-800 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-600 font-bold">•</span>
                        <span>Contact our support team at +91 98765 43210</span>
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
                )}
              </div>
            )}
          </div>

          <div className="mt-12 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Sample UUID Codes for Testing</h3>
            <p className="text-sm text-slate-600 mb-6">
              Use these sample UUID codes to test the verification system and see how it works:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {genuineUUIDs.map((id, idx) => (
                <div
                  key={id}
                  className="bg-white rounded-lg p-4 border border-slate-300 hover:border-blue-400 hover:shadow-md transition-all group cursor-pointer"
                  onClick={() => {
                    setUuid(id);
                    setVerificationMethod('uuid');
                    setVerificationResult(null);
                  }}
                >
                  <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">
                    Sample {idx + 1}
                  </p>
                  <p className="font-mono text-xs text-slate-700 break-all">{id}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
