import { MessageCircle, Star, Award, Shield, Headphones, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import productsData from '../data/products.json';
import testimonialsData from '../data/testimonials.json';

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const featuredProducts = productsData.filter(p => p.featured);
  const phoneNumber = '919876543210';

  const createWhatsAppLink = (productTitle: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${productTitle}. Can you provide more details?`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 text-slate-900 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjAzIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <img
                src="/zsindia-logo.png"
                alt="ZS ACOUSTICS"
                className="h-48 md:h-56 lg:h-64 w-auto object-contain"
              />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-slate-900">
              Premium Sound Systems
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">for Every Need</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Trusted manufacturer and dealer of professional audio equipment. Delivering crystal-clear sound quality for over 20 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('products')}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-base font-semibold hover:from-blue-700 hover:to-blue-800 transition-colors shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-slate-100 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-base font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjAyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Featured Products
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover our top-rated audio equipment trusted by professionals
            </p>
          </div>

          <div className="space-y-24 mb-16">
            {featuredProducts.map((product, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={product.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="relative group overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-slate-50 to-white">
                      <div className="aspect-square flex items-center justify-center p-12">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-6">
                    <div>
                      <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
                        {product.category.replace(/-/g, ' ')}
                      </p>
                      <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        {product.description}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-slate-50 border-l-4 border-blue-600 p-6 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Zap className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-xs font-semibold text-blue-900 mb-1 uppercase tracking-wide">Key Highlight</p>
                          <p className="text-base text-slate-800 font-medium leading-relaxed">{product.usp}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">Top Features</p>
                      <ul className="space-y-2">
                        {product.topPoints?.slice(0, 5).map((point, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        onClick={() => onNavigate('product-detail', product.id)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl text-base font-semibold hover:from-blue-700 hover:to-blue-800 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-5 w-5" />
                      </button>
                      <a
                        href={createWhatsAppLink(product.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-500 text-white px-6 py-4 rounded-xl text-base font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span>Contact Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-8">
            <button
              onClick={() => onNavigate('products')}
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-colors shadow-xl hover:shadow-2xl"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose ZSINDIA
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Industry-leading expertise and customer commitment
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: '20+ Years', subtitle: 'Industry Experience', color: 'from-blue-600 to-blue-700' },
              { icon: Shield, title: '100%', subtitle: 'Genuine Products', color: 'from-cyan-600 to-cyan-700' },
              { icon: Headphones, title: '24/7', subtitle: 'Customer Support', color: 'from-teal-600 to-teal-700' },
              { icon: Star, title: '5000+', subtitle: 'Happy Customers', color: 'from-emerald-600 to-emerald-700' },
            ].map((stat, idx) => (
              <div key={idx} className="group text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-xl transition-all hover:border-blue-300">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.title}</h3>
                <p className="text-slate-600 font-medium">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-2 mb-4">
              <Star className="h-4 w-4 text-blue-300 fill-blue-300" />
              <span className="text-sm font-medium text-blue-300">Customer Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Trusted by thousands of satisfied customers across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialsData.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all border border-white/10 hover:border-blue-400/50"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center mb-4 space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-200 mb-6 leading-relaxed italic text-sm">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-sm text-slate-300">{testimonial.role}</p>
                  <p className="text-xs text-blue-300 mt-1 font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
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
              className="group inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-colors shadow-2xl"
            >
              <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-colors shadow-2xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
