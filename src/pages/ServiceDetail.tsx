import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { CheckCircle2, Phone, ArrowRight, Wrench, ArrowRightLeft, Database, ToggleRight, Search, Droplets, Filter, Sprout, Waves } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const iconMap: Record<string, any> = {
  Wrench,
  ArrowRightLeft,
  Database,
  ToggleRight,
  Search,
  Droplets,
  Filter,
  Sprout,
  Waves
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.icon] || Wrench;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gray-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-600/20">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">{service.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Expert {service.title} in Volusia County</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">1</span>
                    What We Offer
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">2</span>
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Ready to get started?</h3>
                  <p className="text-gray-600">Call us now for a free estimate on {service.title.toLowerCase()}.</p>
                </div>
                <a
                  href="tel:3866895993"
                  className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 shrink-0"
                >
                  <Phone className="w-5 h-5" />
                  <span>(386) 689-5993</span>
                </a>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-12 tracking-tight text-center">Other Services We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <h3 className="font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                  <p className="text-sm text-gray-600 mb-6 line-clamp-2">{s.shortDescription}</p>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
