import { Award, Users, Target, Heart, TrendingUp, Shield, Zap, CheckCircle, Sparkles, Rocket } from 'lucide-react';
import SEO from '../components/SEO';

export default function AboutPage() {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "ZS India",
      "alternateName": ["ZSIndia", "Zoom Sounds", "ZS Acoustics", "ZoomSounds", "ZSAcoustics", "zsindia", "zoomsound", "zsacoustics"],
      "description": "ZS India (also known as ZSIndia, Zoom Sounds, and ZS Acoustics) is a leading professional audio systems manufacturer in Surat, Gujarat. Established in 2004 with 20+ years of experience.",
      "foundingDate": "2004",
      "url": "https://www.zsindia.com",
      "logo": "https://zsindia.s3.us-east-1.amazonaws.com/SiteImages/zsindia-logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vrundavan Shopping Center, Kohinoor Road, Kodiyar Nagar, Varachha",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395006",
        "addressCountry": "IN"
      },
      "areaServed": ["Gujarat", "Maharashtra", "Rajasthan", "India"],
      "knowsAbout": ["Audio Systems", "Sound Equipment", "DJ Systems", "Home Theater", "Professional Audio", "Sound Engineering", "Audio Manufacturing"],
      "slogan": "Premium Audio That Delivers"
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEO
        title="About ZS India (ZSIndia) | Zoom Sounds - ZS Acoustics | 20+ Years Audio Excellence"
        description="Learn about ZS India (ZSIndia, Zoom Sounds, ZS Acoustics) - Surat's leading professional audio systems manufacturer since 2004. 20+ years of excellence, 5000+ satisfied customers, 100% genuine products. Premium sound equipment, DJ systems & home theaters."
        keywords="About ZS India, ZSIndia company, Zoom Sounds about, ZS Acoustics history, audio manufacturer surat, sound systems manufacturer gujarat, ZS India established, professional audio surat, sound equipment supplier gujarat"
        canonicalUrl="https://www.zsindia.com/about"
        structuredData={aboutStructuredData}
      />
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white py-16 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 lg:w-[800px] h-96 lg:h-[800px] bg-blue-600/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 lg:w-[800px] h-96 lg:h-[800px] bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 lg:w-[600px] h-64 lg:h-[600px] bg-teal-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjAyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full px-4 lg:px-8 py-2 lg:py-4 mb-6 lg:mb-10">
              <Heart className="h-4 lg:h-6 w-4 lg:w-6 text-cyan-400 animate-pulse" />
              <span className="text-xs lg:text-sm font-black text-cyan-300 tracking-wider lg:tracking-[0.3em]">OUR STORY</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 lg:mb-10 leading-tight lg:leading-[0.9] tracking-tight lg:tracking-tighter">
              Pioneering
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                Audio Excellence
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-light px-4">
              <strong className="text-white">ZS India</strong> (also known as <strong className="text-white">ZSIndia</strong> and <strong className="text-white">Zoom Sounds</strong>) – For over two decades, we've been crafting extraordinary audio experiences that resonate with perfection
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-32 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 border-2 border-blue-200 rounded-full px-4 lg:px-6 py-2 lg:py-3">
              <Rocket className="h-4 lg:h-5 w-4 lg:w-5 text-blue-600" />
              <span className="text-xs lg:text-sm font-black text-blue-900 tracking-wider lg:tracking-widest">OUR JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              Built on Passion,
              <br />
              Driven by Quality
            </h2>
            <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-slate-700 leading-relaxed">
              <p>
                Established in <span className="font-black text-blue-600">2004</span>, <strong>ZS India</strong> (also known as <strong>ZSIndia</strong>, <strong>Zoom Sounds</strong>, and <strong>ZSAcoustics</strong>) emerged from a simple yet powerful vision: to bring world-class audio quality to every corner of Gujarat. What started as a modest audio equipment dealership has evolved into one of Surat's most respected manufacturers and suppliers of professional sound systems.
              </p>
              <p>
                Over two decades of unwavering dedication, <strong>ZS India</strong> has cultivated lasting relationships with thousands of satisfied customers. From individual audiophiles and home theater enthusiasts to major event companies, wedding planners, and large industrial facilities across <strong>Surat, Varachha, and Gujarat</strong>, our reputation speaks volumes.
              </p>
              <p>
                Today, <strong>ZS India (ZSIndia)</strong> stands as a beacon of excellence in the audio industry. As a leading <strong>sound manufacturer in Surat</strong>, we don't merely sell products—we deliver comprehensive sound solutions backed by expert consultation, professional installation services, and lifetime technical support. Your success is our mission.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:gap-6 pt-4 lg:pt-6">
              {[
                { value: '20+', label: 'Years Excellence', gradient: 'from-blue-600 to-cyan-600' },
                { value: '5000+', label: 'Happy Clients', gradient: 'from-cyan-600 to-teal-600' },
                { value: '100%', label: 'Genuine Products', gradient: 'from-teal-600 to-emerald-600' },
                { value: '24/7', label: 'Support', gradient: 'from-emerald-600 to-green-600' },
              ].map((stat, idx) => (
                <div key={idx} className="group relative bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-8 shadow-lg lg:shadow-xl hover:shadow-2xl transition-all border-2 border-slate-100 hover:border-blue-200 hover:-translate-y-2">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.gradient} rounded-t-2xl lg:rounded-t-3xl`}></div>
                  <p className={`text-3xl lg:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 lg:mb-2`}>
                    {stat.value}
                  </p>
                  <p className="text-xs lg:text-sm text-slate-600 font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all group transform hover:-rotate-2">
                  <img
                    src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional Sound Equipment"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="h-72 rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all group transform hover:rotate-2">
                  <img
                    src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="DJ Equipment"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-16">
                <div className="h-72 rounded-3xl overflow-hidden shadow-2xl hover:shadow-teal-500/20 transition-all group transform hover:-rotate-2">
                  <img
                    src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Sound System Setup"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-all group transform hover:rotate-2">
                  <img
                    src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Audio Workshop"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-3xl p-6 lg:p-10 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform z-10">
              <p className="text-4xl lg:text-6xl font-black text-white mb-2">20+</p>
              <p className="text-white/90 font-bold text-base lg:text-lg">Years Strong</p>
            </div>
          </div>
        </div>

        <div className="mb-16 lg:mb-32">
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-cyan-100 border-2 border-cyan-200 rounded-full px-4 lg:px-6 py-2 lg:py-3 mb-4 lg:mb-6">
              <Sparkles className="h-4 lg:h-5 w-4 lg:w-5 text-cyan-600" />
              <span className="text-xs lg:text-sm font-black text-cyan-900 tracking-wider lg:tracking-widest">CORE VALUES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 lg:mb-6 tracking-tight">
              What Drives Us Forward
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'Committed to delivering only the highest quality products and services that exceed expectations',
                gradient: 'from-blue-600 to-cyan-600',
              },
              {
                icon: Users,
                title: 'Customer First',
                description: 'Your satisfaction drives everything we do, always going the extra mile to ensure your success',
                gradient: 'from-cyan-600 to-teal-600',
              },
              {
                icon: Target,
                title: 'Innovation',
                description: 'Staying ahead with cutting-edge audio technology and forward-thinking sound solutions',
                gradient: 'from-teal-600 to-emerald-600',
              },
              {
                icon: Heart,
                title: 'Integrity',
                description: '100% genuine products with transparent pricing, honest advice, and ethical practices always',
                gradient: 'from-emerald-600 to-green-600',
              },
            ].map((value, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-lg lg:shadow-xl hover:shadow-2xl transition-all border-2 border-slate-100 hover:border-blue-200 hover:-translate-y-2 lg:hover:-translate-y-3 overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 lg:h-2 bg-gradient-to-r ${value.gradient}`}></div>
                <div className={`inline-flex p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-gradient-to-br ${value.gradient} mb-6 lg:mb-8 group-hover:scale-110 transition-transform shadow-xl lg:shadow-2xl`}>
                  <value.icon className="h-7 lg:h-10 w-7 lg:w-10 text-white" />
                </div>
                <h3 className="text-xl lg:text-3xl font-black text-slate-900 mb-3 lg:mb-5 group-hover:text-blue-600 transition-colors">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm lg:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 rounded-3xl lg:rounded-[3rem] p-8 md:p-12 lg:p-16 xl:p-20 text-white mb-16 lg:mb-32 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 lg:mb-6">Why Choose ZSINDIA?</h2>
              <p className="text-base sm:text-lg lg:text-2xl text-slate-300 max-w-3xl mx-auto font-light">
                Experience the difference that two decades of expertise makes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <h3 className="text-2xl lg:text-3xl font-black mb-6 lg:mb-8 flex items-center space-x-3 lg:space-x-4">
                  <Shield className="h-6 lg:h-8 w-6 lg:w-8 text-cyan-400" />
                  <span>Our Promise</span>
                </h3>
                <ul className="space-y-4 lg:space-y-5">
                  {[
                    'Over 20 years of industry expertise and hands-on experience',
                    '100% genuine products from authorized manufacturers',
                    'Comprehensive warranty and dedicated after-sales support',
                    'Professional installation and expert setup services',
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3 lg:space-x-4 group">
                      <CheckCircle className="h-5 lg:h-7 w-5 lg:w-7 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-slate-200 text-sm lg:text-lg leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl lg:text-3xl font-black mb-6 lg:mb-8 flex items-center space-x-3 lg:space-x-4">
                  <Zap className="h-6 lg:h-8 w-6 lg:w-8 text-cyan-400" />
                  <span>Our Edge</span>
                </h3>
                <ul className="space-y-4 lg:space-y-5">
                  {[
                    'Competitive pricing with flexible payment options',
                    'Custom solutions tailored to your specific needs',
                    'Extensive inventory covering all audio categories',
                    'Trusted by 5000+ satisfied customers across Gujarat',
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3 lg:space-x-4 group">
                      <CheckCircle className="h-5 lg:h-7 w-5 lg:w-7 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-slate-200 text-sm lg:text-lg leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          {[
            {
              icon: TrendingUp,
              title: 'State-of-the-Art Showroom',
              description: 'Visit our modern showroom at Ring Road, Surat to experience our complete range. Test and compare different systems in acoustically treated demo rooms.',
              gradient: 'from-blue-600 to-cyan-600',
            },
            {
              icon: Shield,
              title: 'Dedicated Service Center',
              description: 'Our in-house service center handles all maintenance, repair, and warranty work with genuine parts and certified technicians.',
              gradient: 'from-cyan-600 to-teal-600',
            },
            {
              icon: Target,
              title: 'Wide Service Area',
              description: 'Proudly serving Surat, Navsari, Bardoli, Valsad, and surrounding regions with prompt delivery, installation, and ongoing support.',
              gradient: 'from-teal-600 to-emerald-600',
            },
          ].map((feature, idx) => (
            <div key={idx} className="group bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-lg lg:shadow-xl hover:shadow-2xl transition-all border-2 border-slate-100 hover:border-blue-200 hover:-translate-y-2">
              <div className={`inline-flex p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 lg:mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-7 lg:h-9 w-7 lg:w-9 text-white" />
              </div>
              <h3 className="text-xl lg:text-3xl font-black text-slate-900 mb-4 lg:mb-6 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
