import { Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-0 right-0 z-40 px-4 lg:hidden"
        >
          <div className="flex gap-3 max-w-md mx-auto">
            <a
              href="tel:3866895993"
              className="flex-1 flex items-center justify-center gap-3 bg-blue-600 text-white py-4 rounded-2xl font-black shadow-2xl active:scale-95 transition-transform"
            >
              <Phone className="w-5 h-5" />
              <span>CALL NOW</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
