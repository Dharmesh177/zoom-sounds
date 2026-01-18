import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import { Product } from '../types/product';

interface ProductWidgetProps {
  product: Product;
  reversed?: boolean;
  onLearnMore: (productId: string) => void;
  onInquiry: (product: Product) => void;
}

export default function ProductWidget({
  product,
  reversed = false,
  onLearnMore,
  onInquiry
}: ProductWidgetProps) {
  const productName = product.name || product.title || 'Product';
  const productImage = product.thumbnail || product.images?.[0] || product.heroImage || '/placeholder.jpg';
  const productDesc = product.overview || product.description || '';
  const highlights = product.keyHighlights || product.highlights || [];
  const productId = product._id || product.id || '';
  
  const handleInquiry = () => {
    const message = encodeURIComponent(`Hi, I'm interested in learning more about ${productName}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
    onInquiry(product);
  };

  return (
    <article className="group">
      <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-white border border-slate-200">
              <img
                src={productImage}
                alt={productName}
                className="w-full h-full object-contain p-6 transition-all duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4 leading-tight">
              {productName}
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              {productDesc}
            </p>
          </div>

          {highlights.length > 0 && (
            <ul className="space-y-3">
              {highlights.slice(0, 5).map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 group/item">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 group-hover/item:bg-blue-200 transition-colors">
                    <Check className="w-4 h-4 text-blue-600" strokeWidth={2.5} />
                  </span>
                  <span className="text-slate-800 leading-relaxed">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => onLearnMore(productId)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 active:scale-95 group/btn"
            >
              Learn More
              <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </button>

            <button
              onClick={handleInquiry}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold border-2 border-blue-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-95 group/btn"
            >
              <MessageCircle className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
              Inquiry
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
