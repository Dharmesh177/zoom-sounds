import {
  MessageCircle,
  Star,
  Award,
  Shield,
  ArrowRight,
  Users,
  Sparkles,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import TopProducts from "../components/TopProducts";
import { Product } from "../types/product";
import TestimonialForm from "../components/TestimonialForm";
import { api, Testimonial } from "../services/api";
import { S3_BASE_URL } from "../constants/CommonConstants";
import SEO from "../components/SEO";

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void;
  onDataLoaded: () => void;
}

export default function HomePage({ onNavigate, onDataLoaded }: HomePageProps) {
  const phoneNumber = "919876543210";
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [productsError, setProductsError] = useState<string | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [testimonialsLoading, setTestimonialsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setProductsError(null);
        const response = await api.getFeaturedProducts();
        setFeaturedProducts(response.product);
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
        setProductsError("Failed to load featured products");
      } finally {
        // Notify parent that data is loaded
        onDataLoaded();
      }
    };

    fetchFeaturedProducts();
  }, [onDataLoaded]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setTestimonialsLoading(true);
        const data = await api.getApprovedTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setTestimonialsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleLearnMore = (productId: string) => {
    onNavigate("product-detail", productId);
  };

  const handleInquiry = (product: Product) => {
    const productName = product.name || product.title || "this product";
    const message = encodeURIComponent(
      `Hi, I'm interested in learning more about ${productName}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // Carousel navigation
  const nextTestimonials = () => {
    if (testimonials.length > 3) {
      setCurrentTestimonialIndex((prev) => 
        prev + 3 >= testimonials.length ? 0 : prev + 3
      );
    }
  };

  const prevTestimonials = () => {
    if (testimonials.length > 3) {
      setCurrentTestimonialIndex((prev) => 
        prev === 0 ? Math.max(0, testimonials.length - 3) : Math.max(0, prev - 3)
      );
    }
  };

  const getVisibleTestimonials = () => {
    return testimonials.slice(currentTestimonialIndex, currentTestimonialIndex + 3);
  };

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ZS India - ZS Acoustics | Premium Audio Systems Manufacturer",
    "description": "ZS India – ZS Acoustics: Leading professional audio systems manufacturer in Surat, Gujarat. 20+ years of excellence in DJ systems, home theaters, and sound equipment.",
    "url": "https://www.zsindia.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "ZS India",
      "alternateName": ["ZSIndia", "ZS Acoustics", "ZSAcoustics"]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="ZS India | ZS Acoustics – Premium Audio Systems Manufacturer Surat, Gujarat"
        description="ZS India – ZS Acoustics is a leading professional audio systems manufacturer in Surat, Gujarat with 20+ years expertise. Premium sound equipment, DJ systems, home theaters & professional audio solutions. Best sound manufacturer in Surat, Varachha, Gujarat."
        keywords="ZS India, zs india, ZSIndia, zsindia, ZSAcoustics, ZS Acoustics, zsacoustics, sound manufacturer surat, sound systems manufacturer gujarat, audio manufacturer varachha"
        canonicalUrl="https://www.zsindia.com/"
        structuredData={homeStructuredData}
      />
      {/* Desktop Hero */}
      <section className="hidden lg:block relative text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${S3_BASE_URL}/background_main.png)` }}
        ></div>

        <div className="container mx-auto px-8 relative">
          <div className="grid grid-cols-2 gap-16 items-center max-w-7xl mx-auto min-h-[calc(100vh-5rem)] py-12">
            <div className="space-y-8 z-10">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full px-5 py-2.5">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-bold text-cyan-300 tracking-wider">
                  20+ YEARS EXCELLENCE
                </span>
              </div>

              <h1 className="text-6xl font-black leading-tight">
                Premium Audio
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  That Delivers
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                <strong className="text-white">ZS India</strong> – <strong className="text-white">ZS Acoustics</strong> – Professional sound systems engineered for perfection. From home theaters to concert venues.
              </p>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => onNavigate("products")}
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 flex items-center space-x-2 hover:scale-105"
                >
                  <span>View Products</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate("contact")}
                  className="bg-white/10 border-2 border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { icon: Users, value: "5000+", label: "Customers" },
                  { icon: Award, value: "20+", label: "Years" },
                  { icon: Shield, value: "100%", label: "Genuine" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
                  >
                    <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                    <p className="text-3xl font-black text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-400 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero */}
      <section className="lg:hidden relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #123B6D 50%, #1E5AA8 100%)' }}>
        <div className="container mx-auto px-6 pt-12 pb-16 relative z-10">
          <div className="space-y-6 text-left">
            {/* 20+ Years Excellence Badge */}
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full px-4 py-2">
              <Sparkles className="h-3 w-3 text-cyan-400" />
              <span className="text-[10px] font-bold text-cyan-300 tracking-widest uppercase">
                20+ Years Excellence
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight">
              Premium Audio
              <br />
              <span className="text-blue-400">That Delivers</span>
            </h1>

            {/* Description */}
            <p className="text-base text-slate-300 leading-relaxed">
              <strong className="text-white">ZS India</strong> – <strong className="text-white">ZS Acoustics</strong> – Professional sound systems engineered for perfection. From home theaters to concert venues.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={() => onNavigate("products")}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-900/20"
              >
                <span>View Products</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl font-bold backdrop-blur-md"
              >
                Contact Us
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2 pt-6">
              {[
                { icon: Users, value: "5000+", label: "Customers" },
                { icon: Award, value: "20+", label: "Years" },
                { icon: Shield, value: "100%", label: "Genuine" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm"
                >
                  <stat.icon className="h-5 w-5 text-cyan-400 mx-auto mb-2 opacity-80" />
                  <p className="text-lg font-black text-white">{stat.value}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Products Section */}
      {productsError ? (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-red-600">
              <p>{productsError}</p>
            </div>
          </div>
        </section>
      ) : featuredProducts.length > 0 ? (
        <TopProducts
          products={featuredProducts}
          onLearnMore={handleLearnMore}
          onInquiry={handleInquiry}
        />
      ) : null}

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full px-4 lg:px-6 py-2 mb-4 lg:mb-6">
              <Star className="h-4 lg:h-5 w-4 lg:w-5 text-cyan-400 fill-cyan-400" />
              <span className="text-xs lg:text-sm font-black text-cyan-300 tracking-widest">
                CUSTOMER REVIEWS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 lg:mb-6">
              Loved by Thousands
            </h2>
            <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">
              See what our customers say about their experience
            </p>
          </div>

          {testimonialsLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-300 text-lg">No testimonials available yet</p>
            </div>
          ) : (
            <div className="relative">
              {/* Navigation Buttons */}
              {testimonials.length > 3 && (
                <>
                  <button
                    onClick={prevTestimonials}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 lg:p-4 transition-all border-2 border-white/20 hover:border-cyan-400/50 group"
                    aria-label="Previous testimonials"
                  >
                    <ChevronLeft className="h-6 w-6 lg:h-8 lg:w-8 text-white group-hover:text-cyan-400 transition-colors" />
                  </button>
                  <button
                    onClick={nextTestimonials}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 lg:p-4 transition-all border-2 border-white/20 hover:border-cyan-400/50 group"
                    aria-label="Next testimonials"
                  >
                    <ChevronRight className="h-6 w-6 lg:h-8 lg:w-8 text-white group-hover:text-cyan-400 transition-colors" />
                  </button>
                </>
              )}

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {getVisibleTestimonials().map((testimonial, idx) => (
                  <div
                    key={testimonial._id}
                    className={`bg-white/5 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:bg-white/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-2 border-white/10 hover:border-cyan-400/30 text-center animate-fade-in delay-${
                      idx * 100 + 100
                    }`}
                  >
                    <div className="flex items-center justify-center mb-4 space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 lg:h-5 w-4 lg:w-5 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform"
                        />
                      ))}
                    </div>
                    <p className="text-sm lg:text-base text-slate-200 mb-4 lg:mb-6 leading-relaxed italic line-clamp-4">
                      "{testimonial.message}"
                    </p>
                    <div className="border-t border-white/10 pt-4 lg:pt-6">
                      <p className="font-black text-white text-base lg:text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-cyan-400 mt-1 lg:mt-2 font-bold">
                        {new Date(testimonial.createdAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Dots */}
              {testimonials.length > 3 && (
                <div className="flex justify-center items-center space-x-2 mt-8">
                  {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonialIndex(idx * 3)}
                      className={`transition-all ${
                        currentTestimonialIndex === idx * 3
                          ? 'w-8 h-2 bg-cyan-400'
                          : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                      } rounded-full`}
                      aria-label={`Go to testimonials page ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Testimonial Form Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-200 rounded-full px-4 lg:px-5 py-2 mb-3 lg:mb-4">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-black text-blue-900 tracking-widest">
                SHARE YOUR EXPERIENCE
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3 tracking-tight">
              We Value Your Feedback
            </h2>
            <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {showTestimonialForm
                ? "Thank you for taking the time to share your experience with us"
                : "Help others make informed decisions by sharing your experience with our products and services"}
            </p>
          </div>

          {showTestimonialForm ? (
            <div>
              <TestimonialForm onClose={() => setShowTestimonialForm(false)} />
              <div className="text-center mt-4">
                <button
                  onClick={() => setShowTestimonialForm(false)}
                  className="text-slate-600 hover:text-slate-900 text-sm font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <button
                onClick={() => setShowTestimonialForm(true)}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 active:scale-95"
              >
                <Star className="h-5 w-5 hover:rotate-12 transition-transform" />
                <span>Write a Review</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 lg:mb-6">
            Ready for Perfect Sound?
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl mb-8 lg:mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Connect with our audio experts and discover the perfect system for
            your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Hi, I want to know more about your products"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center space-x-3 bg-green-500 text-white px-8 lg:px-12 py-4 lg:py-6 rounded-xl lg:rounded-2xl text-base lg:text-lg font-black hover:bg-green-600 transition-all duration-300 shadow-2xl hover:scale-110 hover:-translate-y-1 active:scale-95"
            >
              <MessageCircle className="h-5 lg:h-6 w-5 lg:w-6 group-hover:rotate-12 transition-transform" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => onNavigate("contact")}
              className="bg-white text-blue-600 px-8 lg:px-12 py-4 lg:py-6 rounded-xl lg:rounded-2xl text-base lg:text-lg font-black hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:scale-110 hover:-translate-y-1 active:scale-95"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Hidden but indexed */}
      <section className="sr-only" aria-hidden="true">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              ZS India - Premier Sound Systems Manufacturer in Surat, Gujarat
            </h2>
            <p className="text-slate-700 mb-4">
              <strong>ZS India</strong> (searchable as{" "}
              <strong>ZSIndia</strong> or{" "}
              <strong>ZS Acoustics</strong>) is a leading sound systems
              manufacturer and supplier based in{" "}
              <strong>Varachha, Surat, Gujarat</strong>. With over 20 years of
              excellence in the audio industry, we are proud to be recognized as
              one of the top sound manufacturers in Surat and across Gujarat.
            </p>

            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 mt-6">
              Why Choose ZS India for Your Audio Needs?
            </h3>
            <p className="text-slate-700 mb-4">
              As a trusted <strong>sound manufacturer in Surat</strong>,{" "}
              <strong>ZS Acoustics</strong> specializes in manufacturing and
              supplying premium audio equipment for homes, businesses, and
              professional venues. Whether you're searching for "zs india,"
              "zsindia," or "sounds manufacture surat," you've come to the
              right place. Our state-of-the-art facility in Varachha, Surat
              produces world-class DJ systems, home theater solutions, and
              professional sound equipment.
            </p>

            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 mt-6">
              Sound Manufacturing Excellence in Gujarat
            </h3>
            <p className="text-slate-700 mb-4">
              Located in the heart of <strong>Surat, Gujarat</strong>,
              specifically on <strong>Varachha Road</strong>, ZS India serves
              customers across the region looking for premium sound systems. Our
              manufacturing facility ensures that every product meets the
              highest quality standards. When you search for "sound manufacturer
              Gujarat," "sounds manufacture by Surat," or "audio manufacturer
              Varachha," ZS India stands as the premier choice.
            </p>

            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 mt-6">
              Our Product Range
            </h3>
            <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
              <li>
                <strong>Professional DJ Systems:</strong> Industry-leading sound
                systems for events and entertainment
              </li>
              <li>
                <strong>Home Theater Solutions:</strong> Immersive audio
                experiences for your home
              </li>
              <li>
                <strong>Commercial Audio Equipment:</strong> Sound systems for
                retail, hospitality, and corporate spaces
              </li>
              <li>
                <strong>Industrial Sound Solutions:</strong> Heavy-duty audio
                systems for factories and warehouses
              </li>
              <li>
                <strong>Custom Audio Installations:</strong> Tailored sound
                solutions for unique requirements
              </li>
            </ul>

            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 mt-6">
              Serving Surat, Varachha, and All of Gujarat
            </h3>
            <p className="text-slate-700 mb-4">
              Our showroom and manufacturing unit at{" "}
              <strong>
                Vrundavan Shopping Center, Behind Gitanjali Petrol Pump, Kohinoor Rd, B-4, Kodiyar Nagar, Varachha, Surat, Gujarat 395006
              </strong>{" "}
              welcomes customers from across Gujarat. Whether you're from Surat,
              Navsari, Bardoli, Valsad, Ahmedabad, or Vadodara, ZSAcoustics is
              your trusted partner for all audio needs. Visit us or call to
              experience why we're the preferred sound manufacturer in the
              region.
            </p>

            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 mt-6">
              Contact ZS India Today
            </h3>
            <p className="text-slate-700 mb-4">
              Looking for the best{" "}
              <strong>sound systems manufacturer in Surat</strong>? Search no
              more! ZS India – ZS Acoustics is here to serve you with
              premium quality, competitive pricing, and exceptional customer
              service. Contact us today to discuss your audio requirements.
            </p>

            <div className="bg-slate-50 border-l-4 border-blue-600 p-4 mt-6">
              <p className="text-slate-700 font-semibold">
                📍 Location: Vrundavan Shopping Center, Kohinoor Rd, Varachha, Surat, Gujarat 395006 | 📞 Phone:
                +91-63544-95770 | ⏰ Hours: Mon-Sat, 10 AM - 8 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
