import { useState, useMemo } from 'react';
import { MessageCircle, Star, Package, Zap, ChevronLeft, ChevronRight, Search, Grid3x3, List } from 'lucide-react';
import productsData from '../data/products.json';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const productsPerPage = 9;
  const phoneNumber = '919876543210';

  const categories = [
    { id: 'all', label: 'All Products', count: productsData.length },
    { id: 'big-dj-systems', label: 'Big DJ Systems', count: productsData.filter(p => p.category === 'big-dj-systems').length },
    { id: 'home-theater', label: 'Home Theater', count: productsData.filter(p => p.category === 'home-theater').length },
    { id: 'industry-sound', label: 'Industry Sound', count: productsData.filter(p => p.category === 'industry-sound').length },
  ];

  const filteredProducts = useMemo(() => {
    let products = selectedCategory === 'all'
      ? productsData
      : productsData.filter(p => p.category === selectedCategory);

    if (searchQuery.trim()) {
      products = products.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.usp.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return products;
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const createWhatsAppLink = (productTitle: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${productTitle}. Can you provide more details?`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
              <Package className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white">Premium Audio Equipment</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Discover premium sound systems engineered for excellence
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
            <div className="flex-1">
              <h2 className="text-lg font-bold text-slate-900 mb-3">Search Products</h2>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name, description, or features..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => handleSearchChange('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 text-sm font-medium"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-slate-600">View:</span>
              <div className="flex bg-slate-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  <Grid3x3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`group relative overflow-hidden px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span className="text-sm">{category.label}</span>
                <span className={`ml-2 text-xs font-bold ${
                  selectedCategory === category.id ? 'text-white/90' : 'text-blue-600'
                }`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-xl px-6 py-4">
          <p className="text-slate-700 font-medium">
            Showing <span className="text-xl font-bold text-blue-600">{startIndex + 1}-{Math.min(endIndex, filteredProducts.length)}</span> of <span className="text-xl font-bold text-blue-600">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setCurrentPage(1);
              }}
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 underline"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {currentProducts.length > 0 ? (
          <>
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-6'}>
              {currentProducts.map((product) => (
                viewMode === 'grid' ? (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-200 hover:border-blue-300 flex flex-col"
                  >
                    <div className="relative h-72 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                      {product.featured && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-white" />
                          <span>Featured</span>
                        </div>
                      )}

                      <div className="absolute top-4 left-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                          <p className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                            {product.category.replace(/-/g, ' ')}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2 flex-1">
                        {product.description}
                      </p>

                      <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 rounded-xl p-4 mb-5">
                        <div className="flex items-start space-x-3">
                          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-2 flex-shrink-0">
                            <Zap className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-blue-900 mb-1 uppercase tracking-wide">Key Feature</p>
                            <p className="text-sm text-slate-700 font-medium leading-relaxed">{product.usp}</p>
                          </div>
                        </div>
                      </div>

                      <a
                        href={createWhatsAppLink(product.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-xl text-sm font-bold hover:from-green-600 hover:to-green-700 transition-colors shadow-md hover:shadow-lg w-full"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-200 hover:border-blue-300 flex flex-col md:flex-row"
                  >
                    <div className="relative md:w-80 h-64 md:h-auto overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                      {product.featured && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-white" />
                          <span>Featured</span>
                        </div>
                      )}

                      <div className="absolute top-4 left-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                          <p className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                            {product.category.replace(/-/g, ' ')}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed flex-1">
                        {product.description}
                      </p>

                      <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 rounded-xl p-4 mb-5">
                        <div className="flex items-start space-x-3">
                          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-2 flex-shrink-0">
                            <Zap className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-blue-900 mb-1 uppercase tracking-wide">Key Feature</p>
                            <p className="text-sm text-slate-700 font-medium leading-relaxed">{product.usp}</p>
                          </div>
                        </div>
                      </div>

                      <a
                        href={createWhatsAppLink(product.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:from-green-600 hover:to-green-700 transition-colors shadow-md hover:shadow-lg md:w-auto"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-12 flex flex-col items-center gap-6">
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border-2 border-slate-200 text-slate-700 font-semibold hover:border-blue-500 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-700 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`w-10 h-10 rounded-lg font-bold transition-all ${
                              currentPage === page
                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30'
                                : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      } else if (page === currentPage - 2 || page === currentPage + 2) {
                        return (
                          <span key={page} className="text-slate-400 px-2">
                            ...
                          </span>
                        );
                      }
                      return null;
                    })}
                  </div>

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border-2 border-slate-200 text-slate-700 font-semibold hover:border-blue-500 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-700 transition-colors"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <p className="text-sm text-slate-600">
                  Page <span className="font-bold text-blue-600">{currentPage}</span> of <span className="font-bold text-blue-600">{totalPages}</span>
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="bg-slate-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Package className="h-12 w-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No Products Found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setCurrentPage(1);
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-colors shadow-lg"
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
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
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-100 transition-colors shadow-2xl"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Chat with an Expert</span>
          </a>
        </div>
      </section>
    </div>
  );
}
