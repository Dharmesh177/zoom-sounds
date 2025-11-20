import { Volume2, Waves } from 'lucide-react';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 p-8 rounded-3xl shadow-2xl">
            <div className="relative">
              <Volume2 className="h-16 w-16 text-white animate-pulse" />
              <Waves className="absolute -bottom-1 -right-1 h-8 w-8 text-cyan-300 opacity-70 animate-bounce" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3 justify-center">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-3 h-3 bg-teal-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>

        <p className="mt-6 text-slate-300 font-semibold text-sm tracking-wider">Loading...</p>
      </div>
    </div>
  );
}
