'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/90 via-stone-50/70 to-stone-50 dark:from-slate-950/95 dark:via-slate-950/80 dark:to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center safe-area-inset">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span>Artisan Crafted with Love</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-stone-900 dark:text-slate-100 mb-6 leading-tight"
        >
          Handmade{' '}
          <span className="text-orange-700 dark:text-orange-500">Just For You</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-stone-600 dark:text-slate-300 max-w-2xl mx-auto mb-10"
        >
          Unique, customized pieces crafted with care at Click Khareed. 
          Discover artisanal treasures that tell your story.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="#categories"
            className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-500 dark:to-orange-600 rounded-2xl glow-effect transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Shop Now
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-stone-500 dark:text-slate-400"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇵🇰</span>
            <span>Made in Pakistan</span>
          </div>
          <div className="w-px h-4 bg-stone-300 dark:bg-slate-600" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span>100% Handmade</span>
          </div>
          <div className="w-px h-4 bg-stone-300 dark:bg-slate-600" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">💝</span>
            <span>Custom Orders</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-stone-400 dark:border-slate-500 flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-3 bg-orange-600 dark:bg-orange-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

