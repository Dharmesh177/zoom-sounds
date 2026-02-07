# ZSIndia - ZS Acoustics

Official website for ZSIndia (ZS India / ZS Acoustics) with product verification and warranty claim functionality.

## Features

### Product Verification
- QR code scanning for product authentication
- Serial number verification
- Real-time product validation against backend database
- Counterfeit detection and warning system

### Warranty Management
- **Warranty Claim Flow**: Users can claim warranty with Firebase OTP verification
  - One-time phone number verification
  - No persistent login required
  - Secure Firebase authentication
  - Automatic warranty registration

- **Warranty Status Display**:
  - View remaining warranty time
  - Check warranty period and expiry dates
  - Access registered customer information
  - View warranty benefits and coverage

### Product Catalog
- Browse complete product range
- Detailed product specifications
- High-quality product images
- Category and family organization

## Setup

### Prerequisites
- Node.js 16+ and npm
- Firebase project (for OTP verification)
- Backend API running

### Installation

1. Clone the repository
```bash
git clone https://github.com/Dharmesh177/zoom-sounds
cd zoom-sounds
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create/edit `.env` file with:
```env
VITE_API_URL=https://api.zsindia.com/api/v1
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

See `WARRANTY_SETUP.md` for detailed Firebase setup instructions.

4. Run development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── WarrantyClaimForm.tsx
│   └── ...
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── ProductsPage.tsx
│   ├── VerifyPage.tsx
│   ├── ProductVerificationPage.tsx
│   └── ...
├── services/           # API services
│   └── api.ts
├── config/             # Configuration files
│   └── firebase.ts
└── data/               # Static data
    └── products.ts
```

## Key Technologies

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Firebase Authentication** for OTP verification
- **Lucide React** for icons
- **jsQR** for QR code scanning

## Warranty Claim Flow

1. User scans QR code or enters serial number
2. System verifies product authenticity
3. If warranty not claimed:
   - User clicks "Claim Warranty" button
   - Fills form with name, email, phone number
   - Receives OTP via SMS
   - Verifies OTP
   - Warranty is registered
4. If warranty already claimed:
   - Displays warranty details
   - Shows remaining time
   - Shows registered customer info

For detailed implementation, see `WARRANTY_SETUP.md`.

## Contact

ZSIndia Support: +91 63544 95770
Website: https://zsindia.com

## License

Proprietary - All rights reserved