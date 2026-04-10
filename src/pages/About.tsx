import { ShieldCheck, CheckCircle2, Clock, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gray-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">About Diamond Well & Pump</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your local, family-owned well and pump experts serving Volusia County with honesty and integrity.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div>
              <span className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight leading-tight">Built on Hard Work and Honest Service</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Diamond Well & Pump was started with a simple mission: to provide the homeowners and businesses of Volusia County with reliable, professional well and pump services that they can trust.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We understand that losing water is a major stress. That's why we built our business around fast response times, expert troubleshooting, and honest communication. We don't just fix pumps; we provide peace of mind for our neighbors.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: ShieldCheck, title: 'Licensed Professional', desc: 'Expert service you can trust for your peace of mind.' },
                  { icon: CheckCircle2, title: 'Quality Parts', desc: 'We only use top-tier equipment and components.' },
                  { icon: Clock, title: 'Fast Response', desc: 'Same-day service for no-water emergencies.' },
                  { icon: MapPin, title: 'Local Knowledge', desc: 'We understand Florida\'s unique water systems.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <item.icon className="w-6 h-6 text-blue-600 shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Our Commitment to You</h2>
            <p className="text-xl text-gray-600">We treat every customer's home like it's our own.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Honesty First', desc: 'We will never recommend a replacement if a repair is the better, more cost-effective option for you.' },
              { title: 'Clear Communication', desc: 'We explain exactly what the problem is and how we plan to fix it, with no technical jargon.' },
              { title: 'Reliable Workmanship', desc: 'We stand behind our work. If it\'s not right, we\'ll make it right. Period.' }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm text-center">
                <h3 className="text-2xl font-black text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Need Help With Your Well?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact Diamond Well & Pump today for fast, professional service throughout Volusia County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3866895993"
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-blue-50 transition-all shadow-2xl"
            >
              <Phone className="w-6 h-6" />
              <span>(386) 689-5993</span>
            </a>
            <Link
              to="/contact"
              className="bg-blue-700 text-white border border-blue-500 px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-blue-800 transition-all"
            >
              <span>Request Service</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
