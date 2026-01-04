import { MessageCircle, Star, Award, Shield, ArrowRight, TrendingUp, Users, Sparkles, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import testimonialsData from '../data/testimonials.json';
import TopProducts from '../components/TopProducts';
import { dummyProducts } from '../data/products';
import { Product } from '../types/product';
import TestimonialForm from '../components/TestimonialForm';

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const phoneNumber = '919876543210';
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);

  const handleLearnMore = (slug: string) => {
    onNavigate('product-detail', slug);
  };

  const handleInquiry = (product: Product) => {
    const message = encodeURIComponent(`Hi, I'm interested in learning more about ${product.title}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Hero */}
      <section className="hidden lg:block relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden" style={{height: '90vh'}}>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-blue-600/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjAyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative flex items-center h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto w-full">
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-400/30 rounded-full px-4 py-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-black text-cyan-300 tracking-widest">20+ YEARS OF AUDIO EXCELLENCE</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-[0.95] tracking-tighter">
                Audio That
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Moves Souls
                </span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                Experience unparalleled sound quality with our premium audio systems. From intimate home theaters to massive concert stages.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl text-base font-black hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-2xl text-base font-black hover:bg-white/10 transition-all hover:scale-105"
                >
                  Get in Touch
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4">
                {[
                  { icon: Users, value: '5000+', label: 'Customers' },
                  { icon: Award, value: '20+', label: 'Years' },
                  { icon: TrendingUp, value: '99%', label: 'Satisfaction' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <stat.icon className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                    <p className="text-2xl font-black text-white mb-1">{stat.value}</p>
                    <p className="text-xs text-slate-400 font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Professional DJ Concert Setup"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border-2 border-white/20">
                    <div className="flex items-center space-x-5">
                      <div className="bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-700 p-5 rounded-2xl">
                        <Shield className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-black text-2xl tracking-tight mb-1">100% Genuine</p>
                        <p className="text-cyan-300 text-base font-bold">Authorized Dealer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 rounded-3xl p-8 shadow-2xl border-4 border-slate-950 z-10">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-white fill-white -ml-1 first:ml-0" />
                    ))}
                  </div>
                  <p className="text-3xl font-black text-white mb-1">4.9/5</p>
                  <p className="text-xs text-emerald-100 font-black tracking-wider">RATED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero - Simplified */}
      <section className="lg:hidden relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 relative text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-xs font-bold text-white tracking-wider">20+ YEARS EXCELLENCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
            Premium Sound
            <br />
            <span className="text-cyan-100">Systems</span>
          </h1>

          <p className="text-lg text-white/90 mb-8 max-w-md mx-auto">
            Professional audio equipment for every need. Trusted by 5000+ customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => onNavigate('products')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-base font-black hover:bg-slate-100 transition-all shadow-lg flex items-center justify-center space-x-2"
            >
              <span>View Products</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl text-base font-black hover:bg-white/20 transition-all"
            >
              Contact Us
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
            {[
              { value: '5000+', label: 'Customers' },
              { value: '20+', label: 'Years' },
              { value: '100%', label: 'Genuine' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="text-2xl font-black text-white mb-1">{stat.value}</p>
                <p className="text-xs text-white/80 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Products Section */}
      <TopProducts
        products={dummyProducts}
        onLearnMore={handleLearnMore}
        onInquiry={handleInquiry}
      />

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6">
              <Star className="h-4 lg:h-5 w-4 lg:w-5 text-cyan-400 fill-cyan-400" />
              <span className="text-xs lg:text-sm font-black text-cyan-300 tracking-widest">CUSTOMER REVIEWS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 lg:mb-6">
              Loved by Thousands
            </h2>
            <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">
              See what our customers say about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:bg-white/10 transition-all border-2 border-white/10 text-center"
              >
                <div className="flex items-center justify-center mb-4 space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 lg:h-5 w-4 lg:w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm lg:text-base text-slate-200 mb-4 lg:mb-6 leading-relaxed italic line-clamp-4">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/10 pt-4 lg:pt-6">
                  <p className="font-black text-white text-base lg:text-lg">{testimonial.name}</p>
                  <p className="text-xs lg:text-sm text-slate-300">{testimonial.role}</p>
                  <p className="text-xs text-cyan-400 mt-1 lg:mt-2 font-bold">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Form Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-200 rounded-full px-4 lg:px-5 py-2 mb-3 lg:mb-4">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-black text-blue-900 tracking-widest">SHARE YOUR EXPERIENCE</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3 tracking-tight">
              We Value Your Feedback
            </h2>
            <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {showTestimonialForm
                ? "Thank you for taking the time to share your experience with us"
                : "Help others make informed decisions by sharing your experience with our products and services"
              }
            </p>
          </div>

          {showTestimonialForm ? (
            <div>
              <TestimonialForm onClose={() => setShowTestimonialForm(false)} />
              <div className="text-center mt-4">
                <button
                  onClick={() => setShowTestimonialForm(false)}
                  className="text-slate-600 hover:text-slate-900 text-sm font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <button
                onClick={() => setShowTestimonialForm(true)}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
              >
                <Star className="h-5 w-5" />
                <span>Write a Review</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 lg:mb-6">
            Ready for Perfect Sound?
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl mb-8 lg:mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Connect with our audio experts and discover the perfect system for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi, I want to know more about your products')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center space-x-3 bg-green-500 text-white px-8 lg:px-12 py-4 lg:py-6 rounded-xl lg:rounded-2xl text-base lg:text-lg font-black hover:bg-green-600 transition-all shadow-2xl hover:scale-105"
            >
              <MessageCircle className="h-5 lg:h-6 w-5 lg:w-6" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 px-8 lg:px-12 py-4 lg:py-6 rounded-xl lg:rounded-2xl text-base lg:text-lg font-black hover:bg-slate-100 transition-all shadow-2xl hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Hidden but indexed */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Zoom Sounds - Premier Sound Systems Manufacturer in Surat, Gujarat
            </h2>
            <p className="text-slate-700 mb-4">
              <strong>Zoom Sounds</strong> (also known as <strong>ZS India</strong>, <strong>ZSAcoustics</strong>, and <strong>ZS Acoustics</strong>) is a leading sound systems manufacturer and supplier based in <strong>Varachha, Surat, Gujarat</strong>. With over 20 years of excellence in the audio industry, we are proud to be recognized as one of the top sound manufacturers in Surat and across Gujarat.
            </p>
            
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 mt-6">
              Why Choose ZoomSound for Your Audio Needs?
            </h3>
            <p className="text-slate-700 mb-4">
              As a trusted <strong>sound manufacturer in Surat</strong>, <strong>zsacoustics</strong> specializes in manufacturing and supplying premium audio equipment for homes, businesses, and professional venues. Whether you're searching for "zoom sounds," "zoomsound," or "sounds manufacture surat," you've come to the right place. Our state-of-the-art facility in Varachha, Surat produces world-class DJ systems, home theater solutions, and professional sound equipment.
            </p>

            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 mt-6">
              Sound Manufacturing Excellence in Gujarat
            </h3>
            <p className="text-slate-700 mb-4">
              Located in the heart of <strong>Surat, Gujarat</strong>, specifically on <strong>Varachha Road</strong>, ZS India serves customers across the region looking for premium sound systems. Our manufacturing facility ensures that every product meets the highest quality standards. When you search for "sound manufacturer Gujarat," "sounds manufacture by Surat," or "audio manufacturer Varachha," ZoomSound stands as the premier choice.
            </p>

            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 mt-6">
              Our Product Range
            </h3>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li><strong>Professional DJ Systems:</strong> Industry-leading sound systems for events and entertainment</li>
              <li><strong>Home Theater Solutions:</strong> Immersive audio experiences for your home</li>
              <li><strong>Commercial Audio Equipment:</strong> Sound systems for retail, hospitality, and corporate spaces</li>
              <li><strong>Industrial Sound Solutions:</strong> Heavy-duty audio systems for factories and warehouses</li>
              <li><strong>Custom Audio Installations:</strong> Tailored sound solutions for unique requirements</li>
            </ul>

            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 mt-6">
              Serving Surat, Varachha, and All of Gujarat
            </h3>
            <p className="text-slate-700 mb-4">
              Our showroom and manufacturing unit at <strong>B-4, Vrundavan Shopping Centre, Varachha Road, Surat</strong> welcomes customers from across Gujarat. Whether you're from Surat, Navsari, Bardoli, Valsad, Ahmedabad, or Vadodara, ZSAcoustics is your trusted partner for all audio needs. Visit us or call to experience why we're the preferred sound manufacturer in the region.
            </p>

            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 mt-6">
              Contact Zoom Sounds Today
            </h3>
            <p className="text-slate-700 mb-4">
              Looking for the best <strong>sound systems manufacturer in Surat</strong>? Search no more! ZS India (ZoomSound, ZSAcoustics) is here to serve you with premium quality, competitive pricing, and exceptional customer service. Contact us today to discuss your audio requirements.
            </p>
            
            <div className="bg-slate-50 border-l-4 border-blue-600 p-4 mt-6">
              <p className="text-slate-700 font-semibold">
                📍 Location: Varachha Road, Surat, Gujarat | 📞 Phone: +91-9876543210 | ⏰ Hours: Mon-Sat, 10 AM - 8 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
