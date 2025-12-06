'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const categories = [
  { id: 1, title: 'Necklaces', subtitle: 'Statement pieces that captivate', count: '48 Items', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800' },
  { id: 2, title: 'Earrings', subtitle: 'From studs to chandeliers', count: '62 Items', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800' },
  { id: 3, title: 'Bracelets', subtitle: 'Elegant wrist adornments', count: '35 Items', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800' },
  { id: 4, title: 'Rings', subtitle: 'Symbols of eternal beauty', count: '54 Items', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800' },
  { id: 5, title: 'Bangles', subtitle: 'Traditional craftsmanship', count: '28 Items', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800' },
  { id: 6, title: 'Pendants', subtitle: 'Meaningful keepsakes', count: '41 Items', image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800' },
  { id: 7, title: 'Anklets', subtitle: 'Delicate charm for your feet', count: '19 Items', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800' },
  { id: 8, title: 'Bridal Sets', subtitle: 'Complete wedding collections', count: '15 Items', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800' },
];

export function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center px-4 mb-12">
          <span className="text-sm font-medium tracking-wider uppercase" style={{ color: 'var(--primary)' }}>Browse By Style</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-4">Shop by <span className="text-gold-gradient">Category</span></h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--foreground-muted)' }}>Explore our diverse collections of fashion jewelry, each category featuring trendy designs at affordable prices.</p>
        </motion.div>

        {/* Scroll Container */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button onClick={() => scroll('left')} className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all" style={{ background: 'var(--gold-gradient)' }} aria-label="Scroll left">
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button onClick={() => scroll('right')} className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all" style={{ background: 'var(--gold-gradient)' }} aria-label="Scroll right">
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          {/* Cards */}
          <div ref={scrollRef} className="flex gap-3 sm:gap-5 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-4 pb-4">
            {categories.map((cat, index) => (
              <motion.a
                key={cat.id}
                href="#featured"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 w-[200px] sm:w-64 md:w-72 snap-start group/card"
              >
                <div className="relative h-72 sm:h-80 md:h-96 rounded-xl md:rounded-2xl overflow-hidden luxury-card">
                  <Image src={cat.image} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover/card:scale-110" />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  {/* Gold border on hover */}
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity" style={{ border: '2px solid var(--primary)' }} />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <span className="text-[10px] sm:text-xs font-medium tracking-wider uppercase" style={{ color: 'var(--primary)' }}>{cat.count}</span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white mt-1 mb-0.5 sm:mb-1">{cat.title}</h3>
                    <p className="text-xs sm:text-sm text-white/70 mb-2 sm:mb-3 line-clamp-1">{cat.subtitle}</p>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium" style={{ color: 'var(--primary)' }}>
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/card:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <p className="md:hidden text-center text-xs sm:text-sm mt-3 sm:mt-4 px-4" style={{ color: 'var(--foreground-muted)' }}>← Swipe to explore more →</p>
      </div>
    </section>
  );
}

