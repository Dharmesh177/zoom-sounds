import { MessageCircle, Star, Award, Shield, Headphones, ArrowRight, Sparkles } from 'lucide-react';
import productsData from '../data/products.json';
import testimonialsData from '../data/testimonials.json';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const featuredProducts = productsData.filter(p => p.featured);
  const phoneNumber = '919876543210';

  const createWhatsAppLink = (productTitle: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${productTitle}. Can you provide more details?`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Surat's Premier Audio Excellence</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Premium Sound Systems
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">for Every Need</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Trusted manufacturer and dealer of professional audio equipment. Delivering crystal-clear sound quality for over 20 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('products')}
                className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:from-orange-600 hover:to-red-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/20 transition-all shadow-xl hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: '20+ Years', subtitle: 'Industry Experience', color: 'from-orange-500 to-red-500' },
              { icon: Shield, title: '100%', subtitle: 'Genuine Products', color: 'from-blue-500 to-cyan-500' },
              { icon: Headphones, title: '24/7', subtitle: 'Customer Support', color: 'from-green-500 to-emerald-500' },
              { icon: Star, title: '5000+', subtitle: 'Happy Customers', color: 'from-amber-500 to-yellow-500' },
            ].map((stat, idx) => (
              <div key={idx} className="group text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-xl hover:scale-105 transition-all">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.title}</h3>
                <p className="text-slate-600 font-medium">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjAzIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
              <Star className="h-4 w-4 text-blue-600 fill-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Featured Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Premium Sound Systems
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Top-rated audio equipment trusted by professionals across Gujarat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-4 border border-slate-200 hover:border-blue-400 transform hover:scale-105"
              >
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent group-hover:from-slate-900/80 transition-all"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-xl flex items-center space-x-1 backdrop-blur-sm border border-white/20">
                    <Star className="h-3 w-3 fill-white" />
                    <span>Featured</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl border border-white/30">
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                        {product.category.replace(/-/g, ' ')}
                      </p>
                      <p className="text-sm font-bold text-slate-900 mt-1 line-clamp-1">
                        {product.title}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 border border-blue-200 rounded-xl p-5 mb-6 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-2.5 flex-shrink-0 mt-0.5 shadow-md">
                        <Zap className="h-3.5 w-3.5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-blue-900 mb-1 uppercase tracking-wide">Key Feature</p>
                        <p className="text-sm text-slate-700 font-medium leading-relaxed">{product.usp}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={createWhatsAppLink(product.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3.5 rounded-xl text-sm font-bold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Enquire Now</span>
                    </a>
                    <button
                      onClick={() => onNavigate('products')}
                      className="flex items-center justify-center border-2 border-slate-300 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-semibold hover:border-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md active:scale-95"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('products')}
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-4">
              <Star className="h-4 w-4 text-orange-400 fill-orange-400" />
              <span className="text-sm font-medium text-orange-400">Customer Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Trusted by thousands of satisfied customers across Gujarat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialsData.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105 border border-white/10 hover:border-orange-500/50"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center mb-4 space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-slate-200 mb-6 leading-relaxed italic text-sm">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-sm text-slate-300">{testimonial.role}</p>
                  <p className="text-xs text-orange-400 mt-1 font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Superior Sound?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our experts for personalized recommendations and exclusive deals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi, I want to know more about your products')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-all shadow-2xl hover:scale-105"
            >
              <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-orange-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-all shadow-2xl hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
