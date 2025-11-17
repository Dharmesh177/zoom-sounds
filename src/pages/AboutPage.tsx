import { Award, Users, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Zoom Sounds</h1>
          <p className="text-xl text-slate-300">Surat's trusted name in professional audio solutions since 2004</p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              Established in 2004, Zoom Sounds has grown from a small dealer to become one of Surat's most respected manufacturers and suppliers of professional audio equipment. Our journey began with a simple mission: to bring world-class sound quality to every corner of Gujarat.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              Over the past two decades, we've built lasting relationships with thousands of customers, from individual audiophiles to major event companies, wedding planners, and industrial facilities. Our commitment to quality, authenticity, and customer service has made us the go-to choice for premium sound systems.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              Today, Zoom Sounds stands as a symbol of excellence in the audio industry. We don't just sell products; we provide complete sound solutions backed by expert consultation, professional installation, and lifetime support.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional Sound Equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 rounded-2xl overflow-hidden shadow-lg mt-8">
              <img
                src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sound System Setup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 rounded-2xl overflow-hidden shadow-lg -mt-8">
              <img
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="DJ Equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Audio Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: Award,
              title: 'Excellence',
              description: 'Committed to delivering only the highest quality products and services',
            },
            {
              icon: Users,
              title: 'Customer First',
              description: 'Your satisfaction is our top priority, always going the extra mile',
            },
            {
              icon: Target,
              title: 'Innovation',
              description: 'Staying ahead with the latest audio technology and solutions',
            },
            {
              icon: Heart,
              title: 'Integrity',
              description: '100% genuine products with transparent pricing and honest advice',
            },
          ].map((value, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Zoom Sounds?</h2>
              <ul className="space-y-4">
                {[
                  'Over 20 years of industry expertise and experience',
                  '100% genuine products from authorized manufacturers',
                  'Comprehensive warranty and after-sales support',
                  'Professional installation and setup services',
                  'Competitive pricing with flexible payment options',
                  'Custom solutions tailored to your specific needs',
                  'Extensive inventory covering all audio categories',
                  'Trusted by 5000+ satisfied customers across Gujarat',
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="bg-orange-500 rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-200">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Our Presence</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Showroom</h4>
                  <p className="text-slate-300">Experience our products firsthand at our state-of-the-art showroom in Ring Road, Surat</p>
                </div>
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Service Center</h4>
                  <p className="text-slate-300">Dedicated service and support center for all maintenance and repair needs</p>
                </div>
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Service Area</h4>
                  <p className="text-slate-300">Serving Surat, Navsari, Bardoli, Valsad, and surrounding regions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
