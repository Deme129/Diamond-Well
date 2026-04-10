import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gray-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to get your water back on? Reach out today for fast, professional well and pump service.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Get in Touch Fast</h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Whether you have an emergency "no water" situation or just need a routine system check, we're here to help. Our team is responsive, professional, and ready to serve.
              </p>

              <div className="space-y-10 mb-16">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Call or Text</div>
                    <a href="tel:3866895993" className="text-3xl font-black text-gray-900 hover:text-blue-600 transition-colors tracking-tight">(386) 689-5993</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Email Us</div>
                    <a href="mailto:Diamondwellandpump@gmail.com" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Diamondwellandpump@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Service Hours</div>
                    <div className="text-xl font-bold text-gray-900">Mon-Fri: 7am - 7pm</div>
                    <div className="text-xl font-bold text-gray-900">Sat: 8am - 4pm</div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Service Area</div>
                    <div className="text-xl font-bold text-gray-900">All of Volusia County, Florida</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-gray-700">Licensed Professional</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-gray-700">Local Experts</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p className="font-bold uppercase tracking-widest text-sm">Serving Volusia County, FL</p>
          </div>
        </div>
      </section>
    </div>
  );
}
