import { useState, useEffect } from 'react';
import { MessageCircle, Star, ArrowRight, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  usp: string;
  image: string;
}

interface ProductsCarouselProps {
  products: Product[];
  phoneNumber: string;
  onNavigate: (page: string, productId?: string) => void;
}

export default function ProductsCarousel({ products, phoneNumber, onNavigate }: ProductsCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const createWhatsAppLink = (productTitle: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${productTitle}. Can you provide more details?`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const autoSwipe = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoSwipe);
  }, [currentSlide]);

  return (
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

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div className="relative bg-gradient-to-br from-slate-50 to-white p-8 lg:p-12 border-2 border-slate-200 shadow-2xl">
              {products.map((product, index) => (
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
                          loading="lazy"
                          decoding="async"
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

              <div className="flex items-center justify-center space-x-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full hover:shadow-xl transition-all hover:scale-110"
                  aria-label="Previous product"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="flex space-x-2">
                  {products.map((_, index) => (
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
  );
}
