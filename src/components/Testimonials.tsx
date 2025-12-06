'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "The handmade necklace I ordered was perfect. Quality shows!",
    author: "Sara M.",
    location: "Lahore",
    rating: 5,
  },
  {
    id: 2,
    text: "I gifted a custom mug, and it was a hit! Great craftsmanship.",
    author: "Ali R.",
    location: "Karachi",
    rating: 5,
  },
  {
    id: 3,
    text: "Beautiful jewelry box for my wife. She absolutely loved it!",
    author: "Hassan K.",
    location: "Islamabad",
    rating: 5,
  },
  {
    id: 4,
    text: "The woolen scarf is so soft and warm. Perfect for winter!",
    author: "Ayesha T.",
    location: "Peshawar",
    rating: 5,
  },
  {
    id: 5,
    text: "Amazing customer service and beautiful products. Highly recommend!",
    author: "Fatima N.",
    location: "Rawalpindi",
    rating: 5,
  },
  {
    id: 6,
    text: "Ordered custom gifts for Eid. Everyone loved them!",
    author: "Usman S.",
    location: "Faisalabad",
    rating: 5,
  },
];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="flex-shrink-0 w-80 p-6 glass rounded-2xl">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
        ))}
      </div>
      {/* Quote */}
      <p className="text-stone-700 dark:text-slate-200 mb-4 leading-relaxed">
        &ldquo;{review.text}&rdquo;
      </p>
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold">
          {review.author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-stone-900 dark:text-slate-100">{review.author}</p>
          <p className="text-sm text-stone-500 dark:text-slate-400">{review.location}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  // Double the reviews for seamless infinite scroll
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center px-4 mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-slate-100 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-stone-600 dark:text-slate-400 max-w-md mx-auto">
            Join thousands of happy customers who love our handcrafted products.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-stone-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-stone-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Reviews */}
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {doubledReviews.map((review, index) => (
              <ReviewCard key={`${review.id}-${index}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

