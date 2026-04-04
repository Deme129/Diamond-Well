import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gray-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000"
            alt="Water system"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From emergency repairs to routine maintenance, we provide complete well and water system solutions for Volusia County.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professional Service Matters */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">Why Professional Well Service Matters</h2>
              <div className="space-y-6">
                {[
                  { title: 'System Longevity', desc: 'Proper diagnosis and repair prevent small issues from turning into expensive pump failures.' },
                  { title: 'Water Safety', desc: 'We ensure your system is sealed and protected from surface contaminants and bacteria.' },
                  { title: 'Energy Efficiency', desc: 'A well-tuned system uses less electricity and reduces wear on your electrical components.' },
                  { title: 'Reliable Pressure', desc: 'Get consistent water flow throughout your home, even when multiple faucets are running.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-600 rounded-3xl p-10 md:p-16 text-white text-center">
              <h3 className="text-3xl font-black mb-6">Need a Custom Solution?</h3>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Every well is different. We provide tailored solutions based on your specific water needs and local aquifer conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:3866895993"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-black flex items-center justify-center gap-3 hover:bg-blue-50 transition-all shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>(386) 689-5993</span>
                </a>
                <Link
                  to="/contact"
                  className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-800 transition-all"
                >
                  <span>Request Service</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
