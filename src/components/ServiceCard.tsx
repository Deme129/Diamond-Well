import React from 'react';
import { ArrowRight, Wrench, ArrowRightLeft, Database, ToggleRight, Search, Droplets, Filter, Sprout, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../data/services';

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

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Wrench;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all flex flex-col h-full"
    >
      <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors tracking-tight">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
        {service.shortDescription}
      </p>
      <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
