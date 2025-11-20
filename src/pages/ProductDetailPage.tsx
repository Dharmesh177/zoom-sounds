import { useState } from 'react';
import { ArrowLeft, MessageCircle, CheckCircle, Zap, Package, Target, Lightbulb, ExternalLink } from 'lucide-react';
import productsData from '../data/products.json';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (page: string) => void;
}

export default function ProductDetailPage({ productId, onNavigate }: ProductDetailPageProps) {
  const product = productsData.find(p => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const phoneNumber = '919876543210';

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
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-8 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-slate-50 to-white aspect-square">
              <img
                src={product.images?.[selectedImage] || product.image}
                alt={product.title}
                className="w-full h-full object-contain p-8"
              />
            </div>

            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === idx
                        ? 'border-blue-600 shadow-lg scale-105'
                        : 'border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="aspect-square bg-gradient-to-br from-slate-50 to-white p-4">
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

          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
                {product.category.replace(/-/g, ' ')}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                {product.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <Zap className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-semibold text-blue-900 mb-1 uppercase tracking-wide">
                    Key Highlight
                  </p>
                  <p className="text-base text-slate-800 font-medium leading-relaxed">{product.usp}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Contact on WhatsApp</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {product.topPoints && product.topPoints.length > 0 && (
            <section className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 rounded-lg p-2">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Top Points</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.topPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-slate-200">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <section className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-cyan-600 rounded-lg p-2">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Specifications</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value], idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">{key}</p>
                    <p className="text-slate-700">{value}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {product.features && product.features.length > 0 && (
            <section className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-teal-600 rounded-lg p-2">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Features</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-slate-200">
                    <Zap className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {product.idealFor && product.idealFor.length > 0 && (
            <section className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-emerald-600 rounded-lg p-2">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Ideal For</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.idealFor.map((use, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-lg border border-slate-200">
                    <Target className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{use}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {product.applications && product.applications.length > 0 && (
            <section className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-amber-600 rounded-lg p-2">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Applications and Use Cases</h2>
              </div>
              <div className="space-y-4">
                {product.applications.map((app, idx) => {
                  const [title, ...descParts] = app.split(':');
                  const description = descParts.join(':').trim();

                  return (
                    <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                      {description && <p className="text-slate-700">{description}</p>}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {product.externalLinks && product.externalLinks.length > 0 && (
            <section className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 rounded-lg p-2">
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Related Resources</h2>
              </div>
              <div className="space-y-3">
                {product.externalLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group"
                  >
                    <span className="text-slate-900 font-medium group-hover:text-blue-600">
                      {link.title}
                    </span>
                    <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in this product?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Get in touch with our experts for detailed specifications, pricing, and personalized recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-all shadow-lg hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-all shadow-lg hover:scale-105"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
