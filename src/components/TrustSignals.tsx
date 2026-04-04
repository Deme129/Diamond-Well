import { ShieldCheck, Award, ThumbsUp, MapPin } from 'lucide-react';

export default function TrustSignals() {
  const signals = [
    {
      icon: ShieldCheck,
      title: 'Licensed & Insured',
      description: 'Fully protected for your peace of mind.'
    },
    {
      icon: Award,
      title: 'Expert Technicians',
      description: 'Decades of combined well system experience.'
    },
    {
      icon: ThumbsUp,
      title: 'Honest Pricing',
      description: 'No hidden fees or unnecessary upsells.'
    },
    {
      icon: MapPin,
      title: 'Volusia Local',
      description: 'Proudly serving our neighbors since day one.'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {signals.map((signal, i) => (
        <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
            <signal.icon className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">{signal.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{signal.description}</p>
        </div>
      ))}
    </div>
  );
}
