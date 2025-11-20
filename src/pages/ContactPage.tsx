import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Headphones } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const phoneNumber = '919876543210';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              <Headphones className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">Contact Us</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We're here to help with all your sound system needs and questions
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: MapPin,
              title: 'Visit Our Showroom',
              details: ['Ring Road, Near City Mall', 'Surat, Gujarat 395002', 'India'],
              color: 'from-blue-600 to-blue-700',
            },
            {
              icon: Phone,
              title: 'Call or Text Us',
              details: ['Sales: +91 98765 43210', 'Support: +91 98765 43211', 'WhatsApp Available'],
              color: 'from-cyan-600 to-cyan-700',
            },
            {
              icon: Clock,
              title: 'Business Hours',
              details: ['Monday - Saturday', '10:00 AM - 8:00 PM', 'Sunday: Closed'],
              color: 'from-teal-600 to-teal-700',
            },
          ].map((info, idx) => (
            <div key={idx} className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:scale-105">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${info.color} mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <info.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{info.title}</h3>
              {info.details.map((detail, detailIdx) => (
                <p key={detailIdx} className="text-slate-600 leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Fill out the form below and our team will get back to you within 24 hours. For urgent inquiries, please call us directly or message us on WhatsApp.
            </p>

            {submitSuccess && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl p-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-600 rounded-full p-2">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-green-900">Message Sent Successfully!</p>
                    <p className="text-sm text-green-800">We'll get back to you soon.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="quotation">Request Quotation</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="installation">Installation Services</option>
                  <option value="warranty">Warranty & Service</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements, questions, or how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-5 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Find Us on Map</h2>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59434.816344764215!2d72.77098967257662!3d21.17024394499776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sRing%20Rd%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1635789234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ZSINDIA Location"
                ></iframe>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500 rounded-full filter blur-3xl"></div>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                  <MessageCircle className="h-7 w-7 text-blue-400" />
                  <span>Prefer Instant Communication?</span>
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Get immediate responses to your queries by contacting us directly via WhatsApp or phone call.
                </p>
                <div className="space-y-4">
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi, I would like to know more about your sound systems')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 bg-green-500 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:scale-105 group"
                  >
                    <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Message on WhatsApp</span>
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center space-x-3 bg-white/10 border-2 border-white/30 text-white px-6 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call: +91 98765 43210</span>
                  </a>
                  <a
                    href="mailto:info@zsindia.com"
                    className="flex items-center justify-center space-x-3 bg-white/10 border-2 border-white/30 text-white px-6 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
                  >
                    <Mail className="h-5 w-5" />
                    <span>info@zsindia.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Response Guarantee</h3>
              <ul className="space-y-3">
                {[
                  'Email inquiries answered within 24 hours',
                  'WhatsApp messages replied within 2 hours',
                  'Phone support available during business hours',
                  'Emergency support for existing customers',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="bg-blue-600 rounded-full p-1 mt-0.5 flex-shrink-0">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
