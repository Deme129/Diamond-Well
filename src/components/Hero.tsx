import { Phone, ArrowRight, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative bg-gray-900 overflow-hidden py-20 lg:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7ec3?auto=format&fit=crop&q=80&w=2000"
          alt="Well pump technician working"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-blue-600/30">
              <Clock className="w-4 h-4" />
              <span>Fast Response in Volusia County</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
              Fast, Reliable <span className="text-blue-500">Well & Pump</span> Service
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              No water? Low pressure? We're your local experts for well pump repair, replacement, and water system troubleshooting throughout Volusia County.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href="tel:3866895993"
                className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
              >
                <Phone className="w-6 h-6" />
                <span>CALL NOW: (386) 689-5993</span>
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, text: 'Licensed & Insured' },
                { icon: CheckCircle2, text: 'Local Family Owned' },
                { icon: Clock, text: 'Same-Day Service' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <item.icon className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
