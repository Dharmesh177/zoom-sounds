import { Award, Users, Target, Heart, TrendingUp, Shield, Zap, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 text-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full filter blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjAzIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">About ZSINDIA</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Surat's trusted name in professional audio solutions since 2004
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Journey</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Established in 2004, ZSINDIA has evolved from a modest audio equipment dealer to become one of Surat's most respected manufacturers and suppliers of professional sound systems. Our journey began with a clear vision: to bring world-class audio quality to every corner of Gujarat.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Over two decades of dedication, we've forged lasting relationships with thousands of satisfied customers, ranging from individual audiophiles and home theater enthusiasts to major event companies, wedding planners, and large industrial facilities across the region.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Today, ZSINDIA stands as a beacon of excellence in the audio industry. We don't merely sell products; we provide comprehensive sound solutions backed by expert consultation, professional installation services, and lifetime technical support.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200">
                <p className="text-4xl font-bold text-blue-600 mb-2">20+</p>
                <p className="text-sm text-slate-600 font-medium">Years of Excellence</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-white rounded-xl border border-cyan-200">
                <p className="text-4xl font-bold text-cyan-600 mb-2">5000+</p>
                <p className="text-sm text-slate-600 font-medium">Happy Customers</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-teal-200">
                <p className="text-4xl font-bold text-teal-600 mb-2">100%</p>
                <p className="text-sm text-slate-600 font-medium">Genuine Products</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-white rounded-xl border border-emerald-200">
                <p className="text-4xl font-bold text-emerald-600 mb-2">24/7</p>
                <p className="text-sm text-slate-600 font-medium">Customer Support</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional Sound Equipment"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="DJ Equipment"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sound System Setup"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Audio Workshop"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'Committed to delivering only the highest quality products and services to our valued customers',
                color: 'from-blue-600 to-blue-700',
              },
              {
                icon: Users,
                title: 'Customer First',
                description: 'Your satisfaction is our top priority, always going the extra mile to exceed expectations',
                color: 'from-cyan-600 to-cyan-700',
              },
              {
                icon: Target,
                title: 'Innovation',
                description: 'Staying ahead with the latest audio technology and cutting-edge sound solutions',
                color: 'from-teal-600 to-teal-700',
              },
              {
                icon: Heart,
                title: 'Integrity',
                description: '100% genuine products with transparent pricing, honest advice, and ethical business practices',
                color: 'from-emerald-600 to-emerald-700',
              },
            ].map((value, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:shadow-2xl transition-all hover:scale-105">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 text-white mb-24 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose ZSINDIA?</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Experience the difference that two decades of expertise makes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                  <Shield className="h-7 w-7 text-blue-400" />
                  <span>Our Commitment</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    'Over 20 years of industry expertise and hands-on experience',
                    '100% genuine products from authorized manufacturers worldwide',
                    'Comprehensive warranty and dedicated after-sales support',
                    'Professional installation and expert setup services',
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                  <Zap className="h-7 w-7 text-blue-400" />
                  <span>Our Advantages</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    'Competitive pricing with flexible payment options',
                    'Custom solutions tailored to your specific requirements',
                    'Extensive inventory covering all audio categories',
                    'Trusted by 5000+ satisfied customers across Gujarat',
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: 'State-of-the-Art Showroom',
              description: 'Experience our complete range of products firsthand at our modern showroom located at Ring Road, Surat. Test and compare different systems in our acoustically treated demo rooms.',
              color: 'from-blue-600 to-blue-700',
            },
            {
              icon: Shield,
              title: 'Dedicated Service Center',
              description: 'Our in-house service and support center handles all maintenance, repair, and warranty work with genuine parts and certified technicians.',
              color: 'from-cyan-600 to-cyan-700',
            },
            {
              icon: Target,
              title: 'Wide Service Area',
              description: 'Proudly serving Surat, Navsari, Bardoli, Valsad, and surrounding regions with prompt delivery, installation, and ongoing support.',
              color: 'from-teal-600 to-teal-700',
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
