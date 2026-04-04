import Hero from '../components/Hero';
import TrustSignals from '../components/TrustSignals';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import ServiceAreaList from '../components/ServiceAreaList';
import { services } from '../data/services';
import { Phone, ArrowRight, Star, Quote, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Trust Signals Bar */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <TrustSignals />
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">NO WATER? EMERGENCY SERVICE AVAILABLE</h2>
              <p className="text-xl text-red-100 leading-relaxed">
                We prioritize "No Water" situations. Call us now for fast, professional help getting your water back on.
              </p>
            </div>
            <a
              href="tel:3866895993"
              className="flex items-center gap-4 bg-white text-red-600 px-10 py-5 rounded-2xl font-black text-2xl hover:bg-red-50 transition-all shadow-2xl active:scale-95 shrink-0"
            >
              <Phone className="w-8 h-8" />
              <span>(386) 689-5993</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4 block">Expert Solutions</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Complete Well & Pump Services</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                From simple repairs to full system replacements, we handle everything related to your well and water system.
              </p>
            </div>
            <Link
              to="/services"
              className="flex items-center gap-2 text-blue-600 font-bold hover:underline group shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <div key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-400 font-black uppercase tracking-widest text-sm mb-4 block">The Diamond Difference</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-tight">Why Volusia County Trusts Diamond Well & Pump</h2>
              
              <div className="space-y-8">
                {[
                  { icon: Clock, title: 'Same-Day Response', desc: 'We know water issues are urgent. We aim for same-day service for all no-water calls.' },
                  { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Work with confidence knowing your property is protected by a fully insured local business.' },
                  { icon: CheckCircle2, title: 'Honest Diagnosis', desc: 'We only recommend what you actually need. No high-pressure sales or hidden fees.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center shrink-0 border border-blue-600/30">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white/5 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000"
                  alt="Professional well service"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-blue-600 p-10 rounded-3xl shadow-2xl hidden md:block">
                <div className="text-4xl font-black mb-1">100%</div>
                <div className="text-blue-100 font-bold uppercase tracking-widest text-sm">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4 block">Customer Stories</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">What Your Neighbors Are Saying</h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-xl text-gray-600">Average 5-star rating across Volusia County.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'John D.', location: 'Deland', text: 'Diamond Well & Pump saved us! We had no water on a Sunday morning and they were out within 2 hours. Fast, professional, and very fair pricing.' },
              { name: 'Sarah M.', location: 'Port Orange', text: 'Had low pressure for months. They diagnosed a failing pressure tank and replaced it the same day. Our showers are great again!' },
              { name: 'Robert K.', location: 'Daytona Beach', text: 'Very impressed with the communication. They explained exactly what was wrong with our irrigation pump and fixed it quickly. Highly recommend.' }
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative">
                <Quote className="w-12 h-12 text-blue-600/10 absolute top-6 right-6" />
                <p className="text-gray-700 italic mb-8 leading-relaxed relative z-10">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-black text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.location}, FL</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/reviews" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg active:scale-95">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4 block">Our Service Area</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Serving All of Volusia County</h2>
            <p className="text-xl text-gray-600">We bring professional well and pump service directly to your door, anywhere in the county.</p>
          </div>
          <ServiceAreaList />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight leading-tight">Ready to Restore Your Water?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Don't let water issues stress you out. Contact Diamond Well & Pump today for a free quote or emergency service.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">Call or Text</div>
                    <a href="tel:3866895993" className="text-2xl font-black text-gray-900 hover:text-blue-600 transition-colors">(386) 689-5993</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">Service Hours</div>
                    <div className="text-xl font-bold text-gray-900">Mon-Fri: 7am - 7pm | Sat: 8am - 4pm</div>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
