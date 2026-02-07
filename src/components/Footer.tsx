import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4 bg-white p-3 rounded-lg inline-block">
              <OptimizedImage
                src="SiteImages/zsindia-logo.png"
                alt="ZS ACOUSTICS"
                className="h-20 w-auto"
                containerClassName="h-20"
                objectFit="contain"
                priority={true}
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              <strong className="text-white">ZS India</strong> – <strong className="text-white">ZS Acoustics</strong> – Leading manufacturer and dealer of premium sound systems in Surat, Gujarat. Quality you can trust, sound you can feel.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-blue-400 transition-colors text-sm text-left">Home</button></li>
              <li><button onClick={() => onNavigate('products')} className="text-slate-400 hover:text-blue-400 transition-colors text-sm text-left">Products</button></li>
              <li><button onClick={() => onNavigate('verify')} className="text-slate-400 hover:text-blue-400 transition-colors text-sm text-left">Verify Product</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-slate-400 hover:text-blue-400 transition-colors text-sm text-left">About Us</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-slate-400 hover:text-blue-400 transition-colors text-sm text-left">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Surat, Gujarat, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">+91 63544 95770</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">zsindia.pro@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Follow Us</h4>
            <p className="text-slate-400 text-sm mb-4">Stay connected for latest updates and offers</p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/people/zoom_sound_/100064127614433/" className="bg-slate-800 p-2.5 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/zoom_sound_/?hl=en" className="bg-slate-800 p-2.5 rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2.5 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} ZS India – ZS Acoustics. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
