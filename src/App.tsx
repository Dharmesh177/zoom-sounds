import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import VerifyPage from './pages/VerifyPage';
import ProductVerificationPage from './pages/ProductVerificationPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [serialNumber, setSerialNumber] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isHomeDataLoaded, setIsHomeDataLoaded] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const verifyMatch = path.match(/\/verify\/([A-Z0-9-]+)/i);

    if (verifyMatch && verifyMatch[1]) {
      setSerialNumber(verifyMatch[1]);
      setCurrentPage('product-verification');
      // For non-home pages, hide preloader after 1 second
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      // For home page, add a max timeout fallback (3 seconds)
      const maxTimeout = setTimeout(() => {
        console.warn('Preloader timeout - forcing hide');
        setIsLoading(false);
      }, 3000);

      // Clear timeout if data loads earlier
      return () => clearTimeout(maxTimeout);
    }
  }, []);

  // Hide preloader when home page data is ready
  useEffect(() => {
    if (currentPage === 'home' && isHomeDataLoaded) {
      setIsLoading(false);
    }
  }, [currentPage, isHomeDataLoaded]);

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string, productId?: string) => {
    setCurrentPage(page);
    if (productId) {
      setSelectedProductId(productId);
    }
  };

  const handleHomeDataLoaded = () => {
    setIsHomeDataLoaded(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onDataLoaded={handleHomeDataLoaded} />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} />;
      case 'product-detail':
        return selectedProductId ? (
          <ProductDetailPage productId={selectedProductId} onNavigate={handleNavigate} />
        ) : (
          <HomePage onNavigate={handleNavigate} onDataLoaded={handleHomeDataLoaded} />
        );
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'verify':
        return <VerifyPage />;
      case 'product-verification':
        return serialNumber ? (
          <ProductVerificationPage serialNumber={serialNumber} />
        ) : (
          <VerifyPage />
        );
      default:
        return <HomePage onNavigate={handleNavigate} onDataLoaded={handleHomeDataLoaded} />;
    }
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow page-transition">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <ScrollToTop />
    </div>
  );
}

export default App;
