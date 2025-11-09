import { useState } from 'react';
import { MessageCircle, Star, Sparkles, Package } from 'lucide-react';
import productsData from '../data/products.json';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const phoneNumber = '919876543210';

  const categories = [
    { id: 'all', label: 'All Products', count: productsData.length },
    { id: 'big-dj-systems', label: 'Big DJ Systems', count: productsData.filter(p => p.category === 'big-dj-systems').length },
    { id: 'home-theater', label: 'Home Theater', count: productsData.filter(p => p.category === 'home-theater').length },
    { id: 'industry-sound', label: 'Industry Sound', count: productsData.filter(p => p.category === 'industry-sound').length },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(p => p.category === selectedCategory);

  const createWhatsAppLink = (productTitle: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${productTitle}. Can you provide more details?`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
              <Package className="h-4 w-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Complete Product Catalog</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Explore our comprehensive range of premium sound systems designed for every application
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Filter by Category</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative overflow-hidden px-6 py-4 rounded-xl font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg scale-105'
                    : 'bg-slate-50 text-slate-700 border-2 border-slate-200 hover:border-orange-400 hover:shadow-md'
                }`}
              >
                <div className="flex flex-col items-center space-y-1">
                  <span className="text-sm">{category.label}</span>
                  <span className={`text-xs font-bold ${
                    selectedCategory === category.id ? 'text-white' : 'text-orange-600'
                  }`}>
                    {category.count} {category.count === 1 ? 'Product' : 'Products'}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-6 py-4">
          <p className="text-slate-700 font-medium">
            Showing <span className="text-2xl font-bold text-orange-600">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-sm font-semibold text-orange-600 hover:text-orange-700 underline"
            >
              Clear Filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-200"
            >
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>

                {product.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-white" />
                    <span>Featured</span>
                  </div>
                )}

                <div className="absolute top-4 left-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                    <p className="text-xs font-bold text-orange-600 uppercase tracking-wide">
                      {product.category.replace(/-/g, ' ')}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                    <p className="text-white font-bold text-sm">{product.title}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4 mb-5">
                  <div className="flex items-start space-x-2">
                    <Sparkles className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-orange-800 mb-1">Key Feature</p>
                      <p className="text-sm text-orange-900 font-medium leading-relaxed">{product.usp}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={createWhatsAppLink(product.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-xl text-sm font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-slate-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Package className="h-12 w-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No Products Found</h3>
            <p className="text-slate-600 mb-6">No products match the selected category.</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all shadow-lg"
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      <section className="py-16 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Our experts are ready to help you find the perfect sound system for your needs
          </p>
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi, I need help choosing the right sound system')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-100 transition-all shadow-2xl hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Chat with an Expert</span>
          </a>
        </div>
      </section>
    </div>
  );
}
