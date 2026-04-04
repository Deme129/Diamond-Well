import ServiceAreaList from '../components/ServiceAreaList';
import { MapPin, Phone, CheckCircle2 } from 'lucide-react';

export default function ServiceAreas() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gray-900 py-20 lg:py-32 relative overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Our Service Areas</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide fast, professional well and pump service throughout Volusia County, Florida.
          </p>
        </div>
      </section>

      {/* Areas List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">Where We Work</h2>
            <p className="text-xl text-gray-600">Click on your city to learn more about our local services.</p>
          </div>
          <ServiceAreaList />
        </div>
      </section>

      {/* County-Wide Service */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">Full Volusia County Coverage</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                From the beaches to the rural inland properties, Diamond Well & Pump covers every corner of Volusia County. We understand the different aquifer conditions and well requirements across the county, ensuring you get the right solution for your specific location.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Residential Well Service',
                  'Commercial Water Systems',
                  'Agricultural Well Support',
                  'Irrigation Pump Repair',
                  'Emergency No-Water Service',
                  'Water System Inspections'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="font-bold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <MapPin className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Don't See Your City?</h3>
              <p className="text-gray-600 mb-10 leading-relaxed">
                If you're in Volusia County, we serve you! Give us a call to confirm service to your specific address.
              </p>
              <a
                href="tel:3866895993"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl"
              >
                <Phone className="w-6 h-6" />
                <span>(386) 689-5993</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
