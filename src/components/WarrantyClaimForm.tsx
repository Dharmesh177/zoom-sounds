import { useState } from 'react';
import { CheckCircle2, Shield, Loader, AlertCircle } from 'lucide-react';
import { RecaptchaVerifier, ConfirmationResult } from 'firebase/auth';
import { initRecaptcha, sendOTP, verifyOTP } from '../config/firebase';
import { api, WarrantyClaimResponse } from '../services/api';

interface WarrantyClaimFormProps {
  serialNumber: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function WarrantyClaimForm({ serialNumber, onSuccess, onCancel }: WarrantyClaimFormProps) {
  const [step, setStep] = useState<'form' | 'otp' | 'success'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [recaptchaVerifier, setRecaptchaVerifier] = useState<RecaptchaVerifier | null>(null);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [claimResponse, setClaimResponse] = useState<WarrantyClaimResponse | null>(null);

  const initializeRecaptcha = () => {
    if (!recaptchaVerifier) {
      try {
        const verifier = initRecaptcha('recaptcha-container');
        setRecaptchaVerifier(verifier);
        return verifier;
      } catch (error) {
        console.error('Recaptcha initialization error:', error);
        setError('Failed to initialize verification. Please refresh the page.');
        return null;
      }
    }
    return recaptchaVerifier;
  };

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    let formattedPhone = phone.trim();
    if (!formattedPhone.startsWith('+')) {
      formattedPhone = '+91' + formattedPhone;
    }

    try {
      const verifier = initializeRecaptcha();
      if (!verifier) {
        setLoading(false);
        return;
      }

      const result = await sendOTP(formattedPhone, verifier);
      setConfirmationResult(result);
      setStep('otp');
      setError('');
    } catch (error: any) {
      console.error('Send OTP error:', error);
      setError(error.message || 'Failed to send OTP. Please check your phone number and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!otp.trim()) {
      setError('Please enter the OTP');
      setLoading(false);
      return;
    }

    if (!confirmationResult) {
      setError('Session expired. Please try again.');
      setLoading(false);
      return;
    }

    try {
      const firebaseIdToken = await verifyOTP(confirmationResult, otp);

      let formattedPhone = phone.trim();
      if (!formattedPhone.startsWith('+')) {
        formattedPhone = '+91' + formattedPhone;
      }

      const claimData = {
        name: name.trim(),
        email: email.trim(),
        phone: formattedPhone,
        serialNumber,
        firebaseIdToken,
      };

      const response = await api.claimWarranty(claimData);
      setClaimResponse(response);
      setStep('success');
      setTimeout(() => {
        onSuccess();
      }, 3000);
    } catch (error: any) {
      console.error('Warranty claim error:', error);
      setError(error.message || 'Failed to claim warranty. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setStep('form');
    setOtp('');
    setError('');
  };

  if (step === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-6 animate-pulse">
              <CheckCircle2 className="h-16 w-16 text-green-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Warranty Claimed Successfully!</h2>
          <p className="text-lg text-slate-600 mb-6">
            Your warranty has been activated and registered in our system.
          </p>
          {claimResponse?.data && (
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-left">
              <h3 className="font-bold text-green-900 mb-3">Warranty Details</h3>
              <div className="space-y-2 text-sm text-green-800">
                <p><span className="font-semibold">Customer:</span> {claimResponse.data.customer.name}</p>
                <p><span className="font-semibold">Email:</span> {claimResponse.data.customer.email}</p>
                <p><span className="font-semibold">Phone:</span> {claimResponse.data.customer.phone}</p>
                <p><span className="font-semibold">Product:</span> {claimResponse.data.product.name}</p>
                <p><span className="font-semibold">Serial Number:</span> {claimResponse.data.serialNumber}</p>
                <p><span className="font-semibold">Warranty Status:</span> {claimResponse.data.warranty.status}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (step === 'otp') {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-100 rounded-full p-3">
            <Shield className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Verify Phone Number</h2>
        </div>

        <p className="text-slate-600 mb-6">
          Enter the 6-digit OTP sent to {phone.startsWith('+') ? phone : '+91' + phone}
        </p>

        <form onSubmit={handleVerifyOTP} className="space-y-6">
          <div>
            <label htmlFor="otp" className="block text-sm font-semibold text-slate-900 mb-2">
              OTP Code
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="Enter 6-digit OTP"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-center text-2xl font-mono tracking-widest"
              maxLength={6}
            />
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleBack}
              disabled={loading}
              className="flex-1 px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-all disabled:opacity-50"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading || otp.length !== 6}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader className="h-5 w-5 animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <span>Verify & Claim</span>
              )}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 rounded-full p-3">
          <Shield className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Claim Your Warranty</h2>
      </div>

      <p className="text-slate-600 mb-6">
        Please provide your details to claim and activate your warranty coverage.
      </p>

      <form onSubmit={handleSendOTP} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="9876543210 or +919876543210"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-mono"
          />
          <p className="text-xs text-slate-600 mt-2 flex items-start gap-2">
            <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
            <span>+91 will be added automatically if you don't include a country code</span>
          </p>
        </div>

        <div>
          <label htmlFor="serial" className="block text-sm font-semibold text-slate-900 mb-2">
            Serial Number
          </label>
          <input
            type="text"
            id="serial"
            value={serialNumber}
            readOnly
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-600 font-mono cursor-not-allowed"
          />
        </div>

        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <div className="flex gap-4">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="flex-1 px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-all disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader className="h-5 w-5 animate-spin" />
                <span>Sending OTP...</span>
              </>
            ) : (
              <span>Send OTP</span>
            )}
          </button>
        </div>
      </form>

      <div id="recaptcha-container"></div>
    </div>
  );
}
