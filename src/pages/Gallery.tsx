import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = [
  { url: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ec3?auto=format&fit=crop&q=80&w=800', title: 'Pump Replacement' },
  { url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800', title: 'System Inspection' },
  { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800', title: 'Pressure Tank Install' },
  { url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800', title: 'Well Troubleshooting' },
  { url: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ec3?auto=format&fit=crop&q=80&w=800', title: 'Irrigation Pump Repair' },
  { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800', title: 'Shallow Well Service' }
];

export default function Gallery() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gray-900 py-20 lg:py-32 relative overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Our Work</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our recent well and pump projects throughout Volusia County.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <div key={i} className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <h3 className="text-xl font-bold text-white tracking-tight">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 bg-gray-50 rounded-3xl p-10 md:p-16 text-center border border-gray-100">
            <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Need Similar Results?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              We bring the same level of quality and attention to detail to every job we do. Contact us today for a free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3866895993"
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
              >
                <Phone className="w-6 h-6" />
                <span>(386) 689-5993</span>
              </a>
              <Link
                to="/contact"
                className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-all shadow-xl"
              >
                <span>Request Service</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
