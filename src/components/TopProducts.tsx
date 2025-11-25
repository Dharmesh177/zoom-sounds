import { Zap } from 'lucide-react';
import { Product } from '../types/product';
import ProductWidget from './ProductWidget';

interface TopProductsProps {
  products: Product[];
  onLearnMore?: (slug: string) => void;
  onInquiry?: (product: Product) => void;
}

export default function TopProducts({
  products,
  onLearnMore = () => {},
  onInquiry = () => {}
}: TopProductsProps) {
  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-200 rounded-full px-4 lg:px-5 py-2 mb-3 lg:mb-4">
            <Zap className="h-4 w-4 text-orange-600" />
            <span className="text-xs font-black text-orange-900 tracking-widest">TRENDING NOW</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-3 tracking-tighter">
            Top Rated Products
          </h2>
          <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover what professionals are choosing this month
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {products.map((product, index) => (
            <ProductWidget
              key={product.id}
              product={product}
              reversed={index % 2 !== 0}
              onLearnMore={onLearnMore}
              onInquiry={onInquiry}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
