import { useState, useEffect } from 'react';
import { ArrowLeft, MessageCircle, CheckCircle, Zap, Package, Target, Lightbulb, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import productsData from '../data/products.json';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (page: string) => void;
}

export default function ProductDetailPage({ productId, onNavigate }: ProductDetailPageProps) {
  const product = productsData.find(p => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const phoneNumber = '6354495770';

  useEffect(() => {
    if (!product?.images || product.images.length <= 1 || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % product.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [product?.images, isAutoPlaying]);

  const handlePrevImage = () => {
    if (!product?.images) return;
    setIsAutoPlaying(false);
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleNextImage = () => {
    if (!product?.images) return;
    setIsAutoPlaying(false);
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const handleThumbnailClick = (idx: number) => {
    setIsAutoPlaying(false);
    setSelectedImage(idx);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Product Not Found</h1>
          <button
            onClick={() => onNavigate('home')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const createWhatsAppLink = () => {
    const message = encodeURIComponent(`Hi, I'm interested in ${product.title}. Can you provide more details and pricing?`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 font-medium transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-5 space-y-4">
            <div className="relative overflow-hidden rounded-xl bg-white border border-slate-200 aspect-[4/3] group shadow-sm hover:shadow-md transition-shadow">
              <img
                src={product.images?.[selectedImage] || product.image}
                alt={product.title}
                className="w-full h-full object-contain p-6 lg:p-8 transition-all duration-500"
              />

              {product.images && product.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-slate-700 p-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-slate-700 p-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
                    {product.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleThumbnailClick(idx)}
                        className={`transition-all duration-300 rounded-full ${
                          selectedImage === idx
                            ? 'bg-blue-600 w-6 h-1.5'
                            : 'bg-slate-300 hover:bg-slate-400 w-1.5 h-1.5'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium shadow-sm">
                    {selectedImage + 1} / {product.images.length}
                  </div>

                  {isAutoPlaying && (
                    <div className="absolute top-3 left-3 bg-emerald-500 text-white px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 shadow-sm">
                      <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                      AUTO
                    </div>
                  )}
                </>
              )}
            </div>

            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleThumbnailClick(idx)}
                    className={`relative overflow-hidden rounded-lg border transition-all duration-300 ${
                      selectedImage === idx
                        ? 'border-blue-600 ring-2 ring-blue-100 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="aspect-square bg-white p-2">
                      <img
                        src={image}
                        alt={`${product.title} ${idx + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full mb-3">
                {product.category.replace(/-/g, ' ')}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                {product.title}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 p-5 rounded-xl">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-900 mb-1.5 uppercase tracking-wide">
                    Key Highlight
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed">{product.usp}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 text-white px-6 py-3.5 rounded-lg text-base font-semibold hover:bg-green-700 transition-all shadow-sm hover:shadow-md flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="flex-1 bg-blue-600 text-white px-6 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {product.topPoints && product.topPoints.length > 0 && (
            <section className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-5">
                <div className="bg-blue-600 rounded-lg p-2">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Top Points</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.topPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-slate-50 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <section className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-5">
                <div className="bg-cyan-600 rounded-lg p-2">
                  <Package className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Specifications</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(product.specifications).map(([key, value], idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">{key}</p>
                    <p className="text-slate-700">{value}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {product.features && product.features.length > 0 && (
            <section className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-5">
                <div className="bg-teal-600 rounded-lg p-2">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Features</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3 bg-slate-50 p-4 rounded-lg">
                    <Zap className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {product.idealFor && product.idealFor.length > 0 && (
            <section className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-5">
                <div className="bg-emerald-600 rounded-lg p-2">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Ideal For</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {product.idealFor.map((use, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-slate-50 p-3 rounded-lg">
                    <Target className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{use}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {product.applications && product.applications.length > 0 && (
            <section className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-5">
                <div className="bg-amber-600 rounded-lg p-2">
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Applications and Use Cases</h2>
              </div>
              <div className="space-y-3">
                {product.applications.map((app, idx) => {
                  const [title, ...descParts] = app.split(':');
                  const description = descParts.join(':').trim();

                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg">
                      <h3 className="text-base font-bold text-slate-900 mb-1.5">{title}</h3>
                      {description && <p className="text-slate-600 text-sm">{description}</p>}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {product.externalLinks && Array.isArray(product.externalLinks) && product.externalLinks.length > 0 && (
            <section className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-5">
                <div className="bg-blue-600 rounded-lg p-2">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Related Resources</h2>
              </div>
              <div className="space-y-2">
                {product.externalLinks.map((link: any, idx: number) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-slate-50 p-4 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all group"
                  >
                    <span className="text-slate-700 group-hover:text-blue-600 text-sm">
                      {link.title}
                    </span>
                    <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="mt-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 lg:p-10 text-white text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Interested in this product?</h2>
          <p className="text-base md:text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Get in touch with our experts for detailed specifications, pricing, and personalized recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>

      <div className="h-8"></div>
    </div>
  );
}
