import { Volume2, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-2 rounded-lg">
                <Volume2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zoom Sounds</h3>
                <p className="text-xs text-orange-400">Surat's Sound Experts</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading manufacturer and dealer of premium sound systems in Surat. Quality you can trust, sound you can feel.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">Products</a></li>
              <li><a href="#" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">Verify Product</a></li>
              <li><a href="#" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Ring Road, Surat, Gujarat 395002</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">info@zoomsounds.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Follow Us</h4>
            <p className="text-slate-400 text-sm mb-4">Stay connected for latest updates and offers</p>
            <div className="flex space-x-3">
              <a href="#" className="bg-slate-800 p-2.5 rounded-lg hover:bg-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2.5 rounded-lg hover:bg-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2.5 rounded-lg hover:bg-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Zoom Sounds. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
