import { MessageCircle, Star, Award, Shield, Headphones } from 'lucide-react';
import productsData from '../data/products.json';
import testimonialsData from '../data/testimonials.json';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const featuredProducts = productsData.filter(p => p.featured).slice(0, 4);
  const phoneNumber = '919876543210';

  const createWhatsAppLink = (productTitle: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${productTitle}. Can you provide more details?`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Sound Systems for
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Every Need</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Surat's most trusted manufacturer and dealer of professional audio equipment. From home theaters to industrial PA systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('products')}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:from-orange-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl"
              >
                Explore Products
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-slate-900 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, title: '20+ Years', subtitle: 'Industry Experience' },
              { icon: Shield, title: '100%', subtitle: 'Genuine Products' },
              { icon: Headphones, title: '24/7', subtitle: 'Customer Support' },
              { icon: Star, title: '5000+', subtitle: 'Happy Customers' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl hover:bg-slate-50 transition-colors">
                <stat.icon className="h-10 w-10 mx-auto mb-3 text-orange-500" />
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{stat.title}</h3>
                <p className="text-slate-600 text-sm">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover our top-rated sound systems trusted by professionals across Surat
            </p>
          </div>

          <div className="space-y-24">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Featured
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      Premium Quality
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      {product.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-6">
                    <div className="flex items-start space-x-3">
                      <div className="bg-orange-500 rounded-full p-2 flex-shrink-0">
                        <Star className="h-5 w-5 text-white fill-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Key Feature</h4>
                        <p className="text-slate-700 leading-relaxed">{product.usp}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <a
                      href={createWhatsAppLink(product.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-green-600 transition-all shadow-md hover:shadow-lg flex-1"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => onNavigate('products')}
                      className="flex items-center justify-center border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg text-base font-semibold hover:border-orange-500 hover:text-orange-600 transition-all"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <button
              onClick={() => onNavigate('products')}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:from-orange-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Trusted by thousands of satisfied customers across Gujarat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="border-t border-slate-600 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                  <p className="text-xs text-orange-400 mt-1">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Superior Sound?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with our experts for personalized recommendations and best deals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi, I want to know more about your products')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-orange-600 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
