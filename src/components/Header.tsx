import { Phone, Menu, X, Droplets } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Service Areas', path: '/service-areas' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-none tracking-tight">DIAMOND</span>
              <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Well & Pump</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Call CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:3866895993"
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>(386) 689-5993</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold py-2 border-b border-gray-50 ${
                    location.pathname === link.path ? 'text-blue-600' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:3866895993"
                className="flex items-center justify-center gap-3 bg-blue-600 text-white py-4 rounded-xl font-bold mt-4 shadow-md"
              >
                <Phone className="w-5 h-5" />
                <span>Call (386) 689-5993</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
