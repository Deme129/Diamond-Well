import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/Diamondwellandpump@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        console.error("Form submission failed");
        alert("There was an error submitting your request. Please try calling us instead.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting your request. Please try calling us instead.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-blue-50 text-center"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-4">Request Received!</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Thank you for reaching out. One of our well experts will contact you shortly to discuss your service needs.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-blue-600 font-bold hover:underline"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
      <div className="mb-8">
        <h3 className="text-2xl font-black text-gray-900 mb-2">Request Service</h3>
        <p className="text-gray-600">Fill out the form below and we'll get back to you fast.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Name</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Phone</label>
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
              placeholder="(386) 000-0000"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            placeholder="email@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="issue" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Type of Issue</label>
          <select
            id="issue"
            name="issue"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none"
          >
            <option>No Water / Emergency</option>
            <option>Low Water Pressure</option>
            <option>Pump Repair / Replacement</option>
            <option>Irrigation Issue</option>
            <option>Pressure Tank / Switch</option>
            <option>Other / Question</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
            placeholder="Tell us about your problem..."
          ></textarea>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-4 rounded-xl font-black text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] disabled:opacity-70"
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <>
              <span>GET FREE QUOTE</span>
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
        
        <p className="text-center text-xs text-gray-500 mt-4">
          By submitting, you agree to be contacted regarding your request.
        </p>
      </form>
    </div>
  );
}
