import { Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'verify', label: 'Verify Product' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="bg-white text-slate-900 sticky top-0 z-50 shadow-md border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity group"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
              <Zap className="h-7 w-7 text-white" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold tracking-tight text-slate-900">ZSINDIA</span>
              <span className="text-xs text-blue-600 font-semibold">Premium Audio Solutions</span>
            </div>
          </button>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
