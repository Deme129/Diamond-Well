import { faqs } from '../data/faqs';
import { Plus, Minus, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gray-900 py-20 lg:py-32 relative overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about your well system? We have answers. If you don't see your question here, give us a call.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  openIndex === index ? 'border-blue-200 bg-blue-50/30 shadow-md' : 'border-gray-100 bg-white hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Still Have Questions? */}
          <div className="mt-20 bg-gray-900 rounded-3xl p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl font-black mb-6 tracking-tight">Still Have Questions?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our experts are ready to help you with any well or pump issue. Reach out today for clear, honest answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3866895993"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
              >
                <Phone className="w-5 h-5" />
                <span>Call (386) 689-5993</span>
              </a>
              <Link
                to="/contact"
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Message Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
