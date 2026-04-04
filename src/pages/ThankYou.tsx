import { CheckCircle2, Phone, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-blue-50 text-center">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Request Received!</h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Thank you for contacting Diamond Well & Pump. We've received your service request and one of our experts will contact you shortly to discuss your needs.
          </p>
          
          <div className="bg-blue-50 p-8 rounded-2xl mb-12 text-left">
            <h3 className="font-bold text-blue-900 mb-2 uppercase tracking-widest text-xs">What's Next?</h3>
            <ul className="space-y-3 text-blue-800 font-medium">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">1</div>
                <span>We'll review your request immediately.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">2</div>
                <span>A technician will call you to confirm details.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">3</div>
                <span>We'll schedule your service at your convenience.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <a
              href="tel:3866895993"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
