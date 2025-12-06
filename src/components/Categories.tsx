'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'Jewelry Boxes',
    subtitle: 'Hand-carved storage',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Ceramic Mugs',
    subtitle: 'Vibrant & bright',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Woolen Scarves',
    subtitle: 'Soft & stylish',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Custom Gifts',
    subtitle: 'Personalized treasures',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Home Decor',
    subtitle: 'Artisan accents',
    image: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=800&auto=format&fit=crop',
  },
];

export function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="categories" className="py-16 md:py-24 bg-stone-100/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center px-4 mb-10"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-slate-100 mb-4">
            Shop by Category
          </h2>
          <p className="text-stone-600 dark:text-slate-400 max-w-md mx-auto">
            Explore our handcrafted collections, each piece made with love and attention to detail.
          </p>
        </motion.div>

        {/* Categories Scroll Container */}
        <div className="relative group">
          {/* Scroll Buttons (Desktop) */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white/90 dark:bg-slate-800/90 text-stone-600 dark:text-slate-300 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-slate-700"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white/90 dark:bg-slate-800/90 text-stone-600 dark:text-slate-300 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-slate-700"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-4 pb-4"
          >
            {categories.map((category, index) => (
              <motion.a
                key={category.id}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 w-64 md:w-72 snap-start"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden glass shadow-lg">
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                    style={{ backgroundImage: `url('${category.image}')` }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                    <p className="text-sm text-white/80">{category.subtitle}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Scroll Hint (Mobile) */}
        <p className="md:hidden text-center text-sm text-stone-500 dark:text-slate-500 mt-4 px-4">
          ← Swipe to explore more →
        </p>
      </div>
    </section>
  );
}

