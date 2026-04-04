import { useParams, Navigate, Link } from 'react-router-dom';
import { areas } from '../data/areas';
import { services } from '../data/services';
import { MapPin, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';

export default function AreaDetail() {
  const { slug } = useParams();
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    return <Navigate to="/service-areas" replace />;
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gray-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg">
              <MapPin className="w-6 h-6" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">Well & Pump Service in {area.name}</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {area.description} We provide fast, local service to homeowners and businesses throughout the {area.name} area.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Why Choose Diamond Well & Pump in {area.name}?</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                When you have a water emergency in {area.name}, you need a local company that can respond fast. We've been serving the Volusia County community for years, and we know the specific well conditions and water table challenges in your neighborhood.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {[
                  'Fast response to no-water calls',
                  'Local technicians who know the area',
                  'Expert troubleshooting for all systems',
                  'Honest, upfront pricing',
                  'Licensed and insured professionals',
                  'Full service for residential & commercial'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="font-bold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-black text-gray-900 mb-10 tracking-tight">Services We Provide in {area.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {services.slice(0, 4).map((service) => (
                  <div key={service.id}>
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>

              <div className="bg-blue-600 rounded-3xl p-10 text-white">
                <h3 className="text-2xl font-black mb-4">Serving Zip Codes in {area.name}:</h3>
                <div className="flex flex-wrap gap-3">
                  {area.zipCodes.map((zip) => (
                    <span key={zip} className="bg-white/20 px-4 py-2 rounded-lg font-bold backdrop-blur-sm">
                      {zip}
                    </span>
                  ))}
                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
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

            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
