import { MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { areas } from '../data/areas';

export default function ServiceAreaList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {areas.map((area) => (
        <Link
          key={area.id}
          to={`/service-areas/${area.slug}`}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-all group border border-transparent hover:border-blue-100"
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span className="font-bold text-sm tracking-tight">{area.name}</span>
          </div>
          <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      ))}
    </div>
  );
}
