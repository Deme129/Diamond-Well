import { Droplets, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none tracking-tight uppercase">DIAMOND</span>
                <span className="text-sm font-semibold text-blue-400 tracking-widest uppercase">Well & Pump</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Your local Volusia County well and pump experts. Fast, reliable service for homeowners, farms, and businesses. Licensed and insured.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/DiamondWellandPump" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/diamondwellpump/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link to="/service-areas" className="hover:text-blue-400 transition-colors">Service Areas</Link></li>
              <li><Link to="/reviews" className="hover:text-blue-400 transition-colors">Customer Reviews</Link></li>
              <li><Link to="/faq" className="hover:text-blue-400 transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Our Services</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link to="/services/well-pump-repair" className="hover:text-blue-400 transition-colors">Well Pump Repair</Link></li>
              <li><Link to="/services/well-pump-replacement" className="hover:text-blue-400 transition-colors">Well Pump Replacement</Link></li>
              <li><Link to="/services/pressure-tank-service" className="hover:text-blue-400 transition-colors">Pressure Tank Service</Link></li>
              <li><Link to="/services/irrigation-pump-service" className="hover:text-blue-400 transition-colors">Irrigation Pump Service</Link></li>
              <li><Link to="/services/well-system-troubleshooting" className="hover:text-blue-400 transition-colors">System Troubleshooting</Link></li>
              <li><Link to="/services/sand-in-water" className="hover:text-blue-400 transition-colors">Sand in Water Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="flex flex-col gap-5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-gray-400">Call Now</span>
                  <a href="tel:3866895993" className="text-white font-bold hover:text-blue-400 transition-colors">(386) 689-5993</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-gray-400">Email Us</span>
                  <a href="mailto:Diamondwellandpump@gmail.com" className="text-white font-bold hover:text-blue-400 transition-colors">Diamondwellandpump@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-gray-400">Service Area</span>
                  <span className="text-white font-bold">Volusia County, FL</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} Diamond Well and Pump. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
