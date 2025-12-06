'use client';

import { motion } from 'framer-motion';
import { Mail, Sparkles, Gift, Bell } from 'lucide-react';
import { useState } from 'react';

const benefits = [
  { icon: Gift, text: '10% off your first order' },
  { icon: Sparkles, text: 'Early access to new collections' },
  { icon: Bell, text: 'Exclusive member-only offers' },
];

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--background-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden p-6 sm:p-8 md:p-16"
          style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)' }}
        >
          {/* Decorative Elements - Hidden on mobile for performance */}
          <div className="hidden md:block absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'var(--gold-gradient)', filter: 'blur(100px)' }} />
          <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: 'var(--gold-gradient)', filter: 'blur(80px)' }} />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6" style={{ background: 'rgba(212, 168, 75, 0.2)', color: '#D4A84B' }}>
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Join Our VIP List
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Get Exclusive Access to <span style={{ color: '#D4A84B' }}>New Collections</span>
              </h2>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                Be the first to know about new arrivals, special offers, and exclusive events.
              </p>

              {/* Benefits - Hidden on very small screens */}
              <div className="hidden sm:block space-y-2 sm:space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(212, 168, 75, 0.2)' }}>
                      <benefit.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#D4A84B' }} />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8 rounded-2xl"
                  style={{ backgroundColor: 'rgba(212, 168, 75, 0.1)', border: '1px solid rgba(212, 168, 75, 0.3)' }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'var(--gold-gradient)' }}>
                    <Sparkles className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Welcome to the Family!</h3>
                  <p className="text-gray-400">Check your inbox for your exclusive 10% discount code.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A84B] transition-colors text-sm sm:text-base"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 sm:py-4 rounded-xl font-semibold text-black transition-all disabled:opacity-70 text-sm sm:text-base min-h-[48px]"
                    style={{ background: 'var(--gold-gradient)' }}
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe & Get 10% Off'}
                  </motion.button>
                  <p className="text-[10px] sm:text-xs text-gray-500 text-center">
                    By subscribing, you agree to receive marketing emails.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

