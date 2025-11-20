import { useState, useEffect } from 'react';
import { MessageCircle, Star, Award, Shield, ArrowRight, Zap, TrendingUp, Users, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import productsData from '../data/products.json';
import testimonialsData from '../data/testimonials.json';

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const featuredProducts = productsData.filter(p => p.featured);
  const phoneNumber = '919876543210';
  const [currentSlide, setCurrentSlide] = useState(0);

  const createWhatsAppLink = (productTitle: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${productTitle}. Can you provide more details?`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  useEffect(() => {
    const autoSwipe = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoSwipe);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Hero */}
      <section className="hidden lg:block relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden min-h-screen">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-blue-600/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjAyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-400/30 rounded-full px-6 py-3">
                <Sparkles className="h-5 w-5 text-cyan-400" />
                <span className="text-sm font-black text-cyan-300 tracking-widest">20+ YEARS OF AUDIO EXCELLENCE</span>
              </div>
              <h1 className="text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
                Audio That
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Moves Souls
                </span>
              </h1>
              <p className="text-2xl text-slate-300 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                Experience unparalleled sound quality with our premium audio systems. From intimate home theaters to massive concert stages.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
                <button
                  onClick={() => onNavigate('products')}
                  className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 text-white px-12 py-6 rounded-2xl text-lg font-black hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center justify-center space-x-3"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white px-12 py-6 rounded-2xl text-lg font-black hover:bg-white/10 transition-all hover:scale-105"
                >
                  Get in Touch
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { icon: Users, value: '5000+', label: 'Customers' },
                  { icon: Award, value: '20+', label: 'Years' },
                  { icon: TrendingUp, value: '99%', label: 'Satisfaction' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                    <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-slate-400 font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Professional DJ Concert Setup"
                  className="w-full h-[600px] object-cover"
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

      {/* Trending Products Carousel Section */}
      <section className="py-16 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-200 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6">
              <Zap className="h-4 lg:h-5 w-4 lg:w-5 text-orange-600" />
              <span className="text-xs lg:text-sm font-black text-orange-900 tracking-widest">TRENDING NOW</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 mb-4 lg:mb-6 tracking-tighter">
              Top Rated Products
            </h2>
            <p className="text-lg lg:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
              Discover what professionals are choosing this month
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div className="relative bg-gradient-to-br from-slate-50 to-white p-8 lg:p-12 border-2 border-slate-200 shadow-2xl">
                {featuredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`${index === currentSlide ? 'block' : 'hidden'} transition-all duration-500`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      <div className="relative">
                        <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-slate-100 p-8">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-orange-500 to-red-600 text-white px-6 py-3 rounded-2xl text-sm font-black shadow-2xl transform rotate-3">
                          <div className="flex items-center space-x-2">
                            <Star className="h-5 w-5 fill-white" />
                            <span>TOP RATED</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6 text-center lg:text-left">
                        <div>
                          <p className="text-xs lg:text-sm font-black text-blue-600 uppercase tracking-widest mb-3">
                            {product.category.replace(/-/g, ' ')}
                          </p>
                          <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
                            {product.title}
                          </h3>
                          <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-6">
                            {product.description}
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-xl">
                          <div className="flex items-start space-x-3">
                            <Zap className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-xs font-semibold text-orange-900 mb-1 uppercase tracking-wide">Why Customers Love It</p>
                              <p className="text-base text-slate-800 font-medium">{product.usp}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <button
                            onClick={() => onNavigate('product-detail', product.id)}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-5 rounded-xl text-base lg:text-lg font-black hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:scale-105 flex items-center justify-center space-x-2"
                          >
                            <span>View Full Details</span>
                            <ArrowRight className="h-5 w-5" />
                          </button>
                          <a
                            href={createWhatsAppLink(product.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white px-8 py-5 rounded-xl text-base lg:text-lg font-black hover:bg-green-600 transition-all shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
                          >
                            <MessageCircle className="h-5 w-5" />
                            <span>Inquire Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center space-x-4 mt-8">
                  <button
                    onClick={prevSlide}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full hover:shadow-xl transition-all hover:scale-110"
                    aria-label="Previous product"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <div className="flex space-x-2">
                    {featuredProducts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 rounded-full transition-all ${
                          index === currentSlide
                            ? 'w-12 bg-gradient-to-r from-blue-600 to-cyan-600'
                            : 'w-3 bg-slate-300 hover:bg-slate-400'
                        }`}
                        aria-label={`Go to product ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full hover:shadow-xl transition-all hover:scale-110"
                    aria-label="Next product"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('products')}
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 lg:px-12 py-4 lg:py-6 rounded-xl lg:rounded-2xl text-base lg:text-lg font-black hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:scale-105"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 lg:h-6 w-5 lg:w-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

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
    </div>
  );
}
