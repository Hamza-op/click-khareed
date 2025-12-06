'use client';

import { motion } from 'framer-motion';
import { Gem, Award, Users, Clock } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { icon: Clock, value: '10+', label: 'Years of Experience' },
  { icon: Users, value: '15,000+', label: 'Happy Customers' },
  { icon: Award, value: '1000+', label: 'Unique Designs' },
  { icon: Gem, value: '100%', label: 'Quality Guaranteed' },
];

export function AboutUs() {
  return (
    <section id="about" className="py-20 md:py-28" style={{ backgroundColor: 'var(--background-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1000"
                alt="Master craftsman at work"
                fill
                className="object-cover"
              />
              {/* Gold frame accent - hidden on small screens */}
              <div className="hidden sm:block absolute inset-4 rounded-xl" style={{ border: '1px solid var(--primary)', opacity: 0.5 }} />
            </div>
            {/* Floating Badge - repositioned for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 right-4 sm:-bottom-6 sm:right-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl"
              style={{ background: 'var(--gold-gradient)' }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-black">1000+</p>
              <p className="text-xs sm:text-sm font-medium text-black/80">Custom Designs</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: 'var(--primary)' }}>Our Story</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-4 md:mb-6">
              Masters of <span className="text-gold-gradient">Fashion Jewelry</span>
            </h2>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-sm md:text-base" style={{ color: 'var(--foreground-muted)' }}>
              <p>
                Founded in 2014, Click Khareed started with a passion for creating beautiful, affordable fashion jewelry that lets everyone express their unique style without compromise.
              </p>
              <p className="hidden sm:block">
                Our skilled designers combine trending aesthetics with quality materials like gold-plated brass, premium alloys, cubic zirconia, and crystal stones to create stunning pieces that look luxurious at accessible prices.
              </p>
              <p>
                Today, we&apos;re proud to be Pakistan&apos;s trusted destination for custom artificial jewelry, serving thousands of fashion-forward customers who appreciate style, quality, and value.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 md:p-4 rounded-xl luxury-card"
                >
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" style={{ color: 'var(--primary)' }} />
                  <p className="text-xl md:text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs md:text-sm" style={{ color: 'var(--foreground-muted)' }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

