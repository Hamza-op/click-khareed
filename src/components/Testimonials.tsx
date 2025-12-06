'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Ayesha Khan',
    location: 'Lahore',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    text: 'I ordered a custom statement necklace for my sister\'s wedding and everyone thought it was designer! The crystal work is stunning and nobody could tell it\'s fashion jewelry. Amazing quality at such a great price!',
    rating: 5,
    product: 'Custom Statement Necklace',
    date: 'November 2024',
  },
  {
    id: 2,
    name: 'Fatima Rizvi',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
    text: 'The bridal jewelry set I purchased looked absolutely gorgeous in photos! The gold plating is so rich and the cubic zirconia stones sparkle beautifully. Perfect for my mehndi and cost a fraction of real gold!',
    rating: 5,
    product: 'Bridal Fashion Set',
    date: 'October 2024',
  },
  {
    id: 3,
    name: 'Sara Malik',
    location: 'Islamabad',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
    text: 'I\'ve ordered from Click Khareed multiple times now. Their faux pearl collection is beautiful and the quality lasts! I can afford to have different pieces for every outfit. Love the variety and prices!',
    rating: 5,
    product: 'Pearl Charm Collection',
    date: 'September 2024',
  },
  {
    id: 4,
    name: 'Hina Ahmed',
    location: 'Multan',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
    text: 'Ordered matching friendship bracelets for my squad. The rose gold plating is gorgeous and the crystal charms are so pretty. The packaging was luxurious too - perfect for gifting!',
    rating: 5,
    product: 'Crystal Charm Bracelets',
    date: 'August 2024',
  },
  {
    id: 5,
    name: 'Zara Tariq',
    location: 'Faisalabad',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200',
    text: 'The emerald crystal earrings I bought look so elegant! The color is vibrant and the gold-plated setting has held up beautifully. Customer service sent me a video before shipping - so professional!',
    rating: 5,
    product: 'Crystal Drop Earrings',
    date: 'July 2024',
  },
  {
    id: 6,
    name: 'Nadia Hussain',
    location: 'Rawalpindi',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200',
    text: 'I was hesitant about artificial jewelry but Click Khareed changed my mind! The ruby crystal pendant looks expensive and gets so many compliments. Now I can have trendy jewelry for every occasion!',
    rating: 5,
    product: 'Ruby Crystal Pendant',
    date: 'June 2024',
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-80 md:w-96 p-4 sm:p-6 rounded-2xl luxury-card">
      <Quote className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4" style={{ color: 'var(--primary)', opacity: 0.5 }} />
      <div className="flex gap-1 mb-3 sm:mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" style={{ color: 'var(--primary)' }} />
        ))}
      </div>
      <p className="mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-4 sm:line-clamp-none" style={{ color: 'var(--foreground-muted)' }}>
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="inline-block px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium mb-3 sm:mb-4" style={{ backgroundColor: 'var(--background-secondary)', color: 'var(--primary)' }}>
        {testimonial.product}
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0" style={{ border: '2px solid var(--primary)' }}>
          <Image src={testimonial.image} alt={testimonial.name} fill sizes="48px" className="object-cover" />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-xs sm:text-sm truncate">{testimonial.name}</p>
          <p className="text-[10px] sm:text-xs truncate" style={{ color: 'var(--foreground-muted)' }}>{testimonial.location} • {testimonial.date}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <span className="text-sm font-medium tracking-wider uppercase" style={{ color: 'var(--primary)' }}>Customer Stories</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-4">What Our <span className="text-gold-gradient">Customers</span> Say</h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--foreground-muted)' }}>Join thousands of happy customers who love our affordable, stylish fashion jewelry.</p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 z-10" style={{ background: 'linear-gradient(to right, var(--background), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 z-10" style={{ background: 'linear-gradient(to left, var(--background), transparent)' }} />
        <div className="flex gap-4 sm:gap-6 animate-marquee">
          {doubledTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

