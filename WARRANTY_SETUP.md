# Warranty Claim Flow - Setup Guide

This document explains the enhanced QR code verification and warranty claim flow implementation.

## Overview

The application now supports a complete warranty claim flow with Firebase OTP verification. Users can scan a QR code, verify their product, and claim warranty coverage with phone number verification.

## Features Implemented

### 1. Enhanced Product Verification
- Backend returns warranty details including `warrantyClaimed` boolean flag
- Product verification displays different UI based on warranty status

### 2. Warranty Claim Flow
When `warrantyClaimed = false`:
- "Claim Warranty" button is displayed
- User clicks button to open warranty claim form
- Form collects: Name, Email, Phone Number, Serial Number (pre-filled)
- Phone number accepts both formats: `9876543210` or `+919876543210`
- System automatically adds `+91` prefix if country code is not provided
- Firebase OTP is sent to the provided phone number
- User verifies OTP
- Backend validates Firebase ID token and registers warranty
- Success confirmation is displayed

When `warrantyClaimed = true`:
- No claim button shown
- Displays warranty details:
  - Time remaining until warranty expiry
  - Warranty start and end dates
  - Warranty status
  - Registered customer information

## Firebase Setup Required

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project" and follow the setup wizard
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable "Phone" authentication provider

### Step 2: Get Firebase Configuration
1. In Firebase Console, go to Project Settings
2. Under "Your apps", click the web icon (</>)
3. Register your app and copy the configuration

### Step 3: Update Environment Variables
Edit the `.env` file and replace the placeholder values:

```env
VITE_FIREBASE_API_KEY=your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Step 4: Configure reCAPTCHA (Production)
For production deployment:
1. Go to Firebase Console > Authentication > Settings
2. Under "Authorized domains", add your production domain
3. Configure reCAPTCHA settings if needed

## File Structure

```
src/
├── config/
│   └── firebase.ts              # Firebase configuration and OTP utilities
├── components/
│   └── WarrantyClaimForm.tsx    # Warranty claim form with OTP verification
├── pages/
│   └── ProductVerificationPage.tsx  # Updated verification page
└── services/
    └── api.ts                   # Updated API with warranty endpoints
```

## API Integration

### Backend Endpoint
**POST** `/warranty/claim/verify`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "serialNumber": "ZS-123456",
  "firebaseIdToken": "<FIREBASE_ID_TOKEN>"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Warranty claimed successfully!",
  "data": {
    "customer": {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+919876543210"
    },
    "warranty": {
      "startDate": "2026-01-10T00:00:00.000Z",
      "endDate": "2027-01-09T00:00:00.000Z",
      "durationDays": 365,
      "status": "active"
    },
    "product": {
      "name": "Product Name",
      "category": "Product Category"
    },
    "serialNumber": "ZS-123456"
  }
}
```

## User Flow

### When Product is Not Yet Claimed
1. User scans QR code or enters serial number
2. System verifies product authenticity
3. "Claim Warranty" button is displayed
4. User clicks button and fills warranty claim form
   - User can enter phone number with or without country code
   - System automatically adds +91 prefix if not provided
5. System sends OTP to provided phone number via Firebase
6. User enters OTP code
7. System verifies OTP and obtains Firebase ID token
8. Backend validates token and stores warranty claim
9. Success message displayed
10. Page refreshes to show warranty details

### When Product is Already Claimed
1. User scans QR code or enters serial number
2. System verifies product authenticity
3. Warranty details section is displayed showing:
   - Time remaining until expiry
   - Warranty period (start/end dates)
   - Warranty status
   - Registered customer information
   - Warranty benefits

## Security Notes

- Firebase handles phone verification securely
- No persistent login or user session is maintained
- OTP verification is one-time for warranty claim only
- Backend decodes and validates Firebase ID token
- All sensitive operations happen server-side

## Testing

### Test Phone Numbers (Development)
Configure test phone numbers in Firebase Console for development:
1. Go to Authentication > Sign-in method > Phone
2. Add test phone numbers with verification codes
3. Use these for testing without sending actual SMS

### Local Testing
```bash
npm run dev
```

Navigate to `/verify` or scan a QR code to test the flow.

## Troubleshooting

### reCAPTCHA Issues
- Ensure your domain is authorized in Firebase Console
- Check browser console for detailed error messages
- Use invisible reCAPTCHA for better UX

### OTP Not Received
- Verify phone number format includes country code (+91 for India)
- Check Firebase project has Phone authentication enabled
- Verify SMS quota is not exceeded (Firebase Console > Usage)

### Build Errors
Run type checking:
```bash
npm run typecheck
```

Run build:
```bash
npm run build
```

## Production Deployment

1. Set all Firebase environment variables in production
2. Configure authorized domains in Firebase Console
3. Test the complete flow on staging environment
4. Monitor Firebase Authentication usage and quotas

## Support

For issues or questions, contact the development team or refer to:
- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Firebase Phone Authentication Guide](https://firebase.google.com/docs/auth/web/phone-auth)
