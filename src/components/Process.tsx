'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Palette, Hammer, Gift, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Consultation',
    description: 'Share your design ideas via WhatsApp! Tell us about your style preferences, budget, and occasion. We&apos;ll suggest the best options.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Design',
    description: 'Our designers create mockups of your custom piece. Choose from gold-plated, rose gold, or silver finishes with crystal or CZ stones.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Crafting',
    description: 'Skilled craftsmen bring your design to life using quality alloys, plating, and stone-setting techniques. Each piece is quality-checked.',
  },
  {
    number: '04',
    icon: Gift,
    title: 'Delivery',
    description: 'Your finished piece is beautifully packaged and delivered to your doorstep within 5-10 business days.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28" style={{ backgroundColor: 'var(--background-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-sm font-medium tracking-wider uppercase" style={{ color: 'var(--primary)' }}>
            Custom Orders
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-3 md:mb-4">
            How It <span className="text-gold-gradient">Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base" style={{ color: 'var(--foreground-muted)' }}>
            Get custom fashion jewelry designed just for you. Simple, affordable, and stylish!
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5" style={{ background: 'var(--card-border)' }} />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number & Icon */}
                <div className="relative z-10 flex flex-col items-center mb-3 md:mb-6">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-2 md:mb-4"
                    style={{ background: 'var(--gold-gradient)' }}
                  >
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
                  </div>
                  <span className="text-xs md:text-sm font-bold" style={{ color: 'var(--primary)' }}>
                    STEP {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="text-center p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl luxury-card">
                  <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-1 md:mb-3">{step.title}</h3>
                  <p className="text-xs md:text-sm hidden sm:block" style={{ color: 'var(--foreground-muted)' }}>
                    {step.description}
                  </p>
                </div>

                {/* Arrow (not on last item, desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-4 z-20 w-8 h-8 rounded-full items-center justify-center" style={{ background: 'var(--background-secondary)' }}>
                    <ArrowRight className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <a
            href="https://wa.me/923129653920?text=Hi!%20I'm%20interested%20in%20ordering%20custom%20fashion%20jewelry."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold btn-gold glow-effect text-sm md:text-base min-h-[48px]"
          >
            Start Custom Order
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <p className="mt-3 md:mt-4 text-xs md:text-sm" style={{ color: 'var(--foreground-muted)' }}>
            Turnaround: 5-10 business days
          </p>
        </motion.div>
      </div>
    </section>
  );
}

