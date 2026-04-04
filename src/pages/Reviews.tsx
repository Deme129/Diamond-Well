import { Star, Quote, Phone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
  { name: 'John D.', location: 'Deland', rating: 5, date: '2 weeks ago', text: 'Diamond Well & Pump saved us! We had no water on a Sunday morning and they were out within 2 hours. Fast, professional, and very fair pricing.' },
  { name: 'Sarah M.', location: 'Port Orange', rating: 5, date: '1 month ago', text: 'Had low pressure for months. They diagnosed a failing pressure tank and replaced it the same day. Our showers are great again!' },
  { name: 'Robert K.', location: 'Daytona Beach', rating: 5, date: '1 month ago', text: 'Very impressed with the communication. They explained exactly what was wrong with our irrigation pump and fixed it quickly. Highly recommend.' },
  { name: 'Linda P.', location: 'New Smyrna Beach', rating: 5, date: '2 months ago', text: 'Honest and reliable. Another company told me I needed a whole new well, but Diamond found it was just a bad pressure switch. Saved me thousands!' },
  { name: 'Mike T.', location: 'Deltona', rating: 5, date: '3 months ago', text: 'Great service from start to finish. The technician was knowledgeable and respectful of our property. Will definitely use them again.' },
  { name: 'Karen W.', location: 'Ormond Beach', rating: 5, date: '3 months ago', text: 'Fast response and excellent work. They fixed our sandy water issue and now our water is crystal clear. Thank you!' }
];

export default function Reviews() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gray-900 py-20 lg:py-32 relative overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Customer Reviews</h1>
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We pride ourselves on providing honest, reliable service to our Volusia County neighbors. See what they have to say about our work.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative flex flex-col h-full">
                <Quote className="w-12 h-12 text-blue-600/10 absolute top-6 right-6" />
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-8 leading-relaxed flex-grow">"{review.text}"</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-black text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.location}, FL</div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-24 bg-blue-600 rounded-3xl p-10 md:p-20 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Experience the Diamond Difference</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                Join our list of satisfied customers. Contact us today for fast, professional well and pump service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:3866895993"
                  className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-blue-50 transition-all shadow-2xl"
                >
                  <Phone className="w-6 h-6" />
                  <span>(386) 689-5993</span>
                </a>
                <Link
                  to="/contact"
                  className="bg-blue-700 text-white border border-blue-500 px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-blue-800 transition-all"
                >
                  <span>Request Service</span>
                  <CheckCircle2 className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
