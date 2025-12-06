'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Gem, Award, Shield } from 'lucide-react';

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.getElementById(href.replace('#', ''));
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Luxury Jewelry */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        {/* Gradient Overlay - Light: cream fade, Dark: black fade */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, var(--background) 0%, transparent 30%, transparent 70%, var(--background) 100%), linear-gradient(to right, var(--background) 0%, transparent 50%)'
          }}
        />
        <div className="absolute inset-0 bg-[var(--background)]/60 dark:bg-[var(--background)]/80" />
      </div>

      {/* Decorative Gold Elements - Hidden on mobile for performance */}
      <div className="hidden md:block absolute top-20 right-10 w-32 h-32 rounded-full opacity-20" style={{ background: 'var(--gold-gradient)', filter: 'blur(60px)' }} />
      <div className="hidden md:block absolute bottom-40 left-10 w-48 h-48 rounded-full opacity-15" style={{ background: 'var(--gold-gradient)', filter: 'blur(80px)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 md:py-32 text-center safe-area-inset">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
          style={{ backgroundColor: 'var(--background-secondary)', border: '1px solid var(--card-border)' }}
        >
          <Gem className="w-4 h-4" style={{ color: 'var(--primary)' }} />
          <span className="text-sm font-medium" style={{ color: 'var(--primary)' }}>Custom Fashion Jewelry</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
        >
          Stunning Style,{' '}
          <span className="text-gold-gradient">Affordable Elegance</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 px-2"
          style={{ color: 'var(--foreground-muted)' }}
        >
          Discover beautiful custom artificial jewelry that lets you shine at every occasion — premium designs without the premium price tag.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#featured"
            onClick={(e) => handleSmoothScroll(e, '#featured')}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-black rounded-full btn-gold glow-effect min-h-[48px]"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Collection
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#process"
            onClick={(e) => handleSmoothScroll(e, '#process')}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full btn-outline-gold min-h-[48px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Custom Orders
          </motion.a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 md:mt-16 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: Gem, title: 'Quality Materials', desc: 'Premium plating & crystals' },
            { icon: Award, title: 'Custom Designs', desc: 'Made to your style' },
            { icon: Shield, title: 'Quality Guaranteed', desc: 'Satisfaction assured' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex flex-col items-center gap-1 md:gap-2 p-2 sm:p-3 md:p-4 rounded-xl md:rounded-2xl"
              style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
            >
              <item.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'var(--primary)' }} />
              <span className="font-semibold text-xs md:text-sm text-center leading-tight">{item.title}</span>
              <span className="text-[10px] md:text-xs text-center hidden sm:block" style={{ color: 'var(--foreground-muted)' }}>{item.desc}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}

