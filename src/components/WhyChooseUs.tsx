'use client';

import { motion } from 'framer-motion';
import { Gem, Shield, Truck, RefreshCw, Palette, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Quality Materials',
    description: 'Premium gold-plated brass, stainless steel, cubic zirconia, and crystal stones for lasting beauty.',
  },
  {
    icon: Palette,
    title: 'Custom Designs',
    description: 'Work with our designers to create unique fashion pieces that match your style and budget.',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Every piece is quality-checked to ensure beautiful finish and durability.',
  },
  {
    icon: Truck,
    title: 'Free Nationwide Delivery',
    description: 'Complimentary shipping across Pakistan on all orders above PKR 3,000.',
  },
  {
    icon: RefreshCw,
    title: '7-Day Easy Returns',
    description: 'Not satisfied? Return within 7 days in original condition for exchange or refund.',
  },
  {
    icon: HeartHandshake,
    title: 'Affordable Luxury',
    description: 'Get the designer look you love at prices that make sense. Fashion jewelry for everyone!',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-sm font-medium tracking-wider uppercase" style={{ color: 'var(--primary)' }}>
            The Click Khareed Promise
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-3 md:mb-4">
            Why Choose <span className="text-gold-gradient">Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base" style={{ color: 'var(--foreground-muted)' }}>
            Beautiful fashion jewelry that lets you express your style without the hefty price tag.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl luxury-card text-center"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-5 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ background: 'var(--gold-gradient)' }}
              >
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" />
              </div>

              {/* Content */}
              <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-1 sm:mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-xs sm:text-sm md:text-base hidden sm:block" style={{ color: 'var(--foreground-muted)' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-16 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl text-center relative overflow-hidden"
          style={{ background: 'var(--gold-gradient)' }}
        >
          {/* Decorative circles - hidden on mobile */}
          <div className="hidden md:block absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
          <div className="hidden md:block absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h3 className="font-serif text-xl sm:text-2xl md:text-4xl font-bold text-black mb-3 md:mb-4">
              Ready to Find Your Perfect Piece?
            </h3>
            <p className="text-black/80 mb-4 md:mb-6 max-w-xl mx-auto text-sm md:text-base">
              Browse our collection or contact us for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#featured"
                className="px-6 md:px-8 py-3 rounded-full font-semibold bg-black text-white hover:bg-black/80 transition-colors text-sm md:text-base min-h-[48px] flex items-center justify-center"
              >
                Shop Collection
              </a>
              <a
                href="https://wa.me/923129653920"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 py-3 rounded-full font-semibold border-2 border-black text-black hover:bg-black/10 transition-colors text-sm md:text-base min-h-[48px] flex items-center justify-center"
              >
                Get Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

