'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Heart, Instagram, Facebook, Clock, CreditCard, Truck, Shield } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Collections', href: '#categories' },
  { name: 'Featured', href: '#featured' },
  { name: 'About Us', href: '#about' },
  { name: 'Custom Orders', href: '#process' },
  { name: 'FAQ', href: '#faq' },
];

const customerService = [
  { name: 'Shipping & Delivery', href: '#' },
  { name: 'Returns & Exchanges', href: '#' },
  { name: 'Size Guide', href: '#' },
  { name: 'Care Instructions', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
];

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith('#')) {
    e.preventDefault();
    const element = document.getElementById(href.replace('#', ''));
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export function Footer() {
  return (
    <footer id="footer" className="pt-12 md:pt-20 pb-8 safe-area-bottom" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-10 md:mb-16 pb-10 md:pb-16" style={{ borderBottom: '1px solid rgba(212, 168, 75, 0.2)' }}>
          {[
            { icon: Truck, title: 'Free Shipping', desc: 'Orders over PKR 3K' },
            { icon: Shield, title: 'Secure Payment', desc: '100% secure' },
            { icon: CreditCard, title: 'Easy Returns', desc: '7-day policy' },
            { icon: Clock, title: 'Support 24/7', desc: 'Always here' },
          ].map((item) => (
            <div key={item.title} className="text-center p-2 sm:p-4">
              <item.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3" style={{ color: '#D4A84B' }} />
              <h4 className="font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</h4>
              <p className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 md:mb-12">
          {/* Brand Column */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="col-span-2 md:col-span-1">
            <a href="#hero" onClick={(e) => handleSmoothScroll(e, '#hero')} className="font-serif text-xl sm:text-2xl font-bold text-gold-gradient">Click Khareed</a>
            <p className="mt-3 sm:mt-4 text-gray-400 leading-relaxed text-xs sm:text-sm">
              Pakistan&apos;s favorite destination for custom artificial jewelry. Beautiful designs, affordable prices.
            </p>
            <div className="flex gap-3 mt-4 sm:mt-6">
              {[
                { icon: Instagram, href: 'https://instagram.com/clickkhareed', label: 'Instagram' },
                { icon: Facebook, href: 'https://facebook.com/clickkhareed', label: 'Facebook' },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full transition-all hover:scale-110 min-h-[44px] min-w-[44px]" style={{ backgroundColor: 'rgba(212, 168, 75, 0.1)', border: '1px solid rgba(212, 168, 75, 0.3)' }} aria-label={social.label}>
                  <social.icon className="w-5 h-5" style={{ color: '#D4A84B' }} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)} className="text-gray-400 hover:text-[#D4A84B] transition-colors text-xs sm:text-sm py-1 inline-block">{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service - Hidden on very small screens */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="hidden sm:block">
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Customer Service</h3>
            <ul className="space-y-2 sm:space-y-3">
              {customerService.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-[#D4A84B] transition-colors text-xs sm:text-sm py-1 inline-block">{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="mailto:support@clickkhareed.com" className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-[#D4A84B] transition-colors text-xs sm:text-sm py-1 min-h-[44px]">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#D4A84B' }} /><span className="break-all">support@clickkhareed.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+923129653920" className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-[#D4A84B] transition-colors text-xs sm:text-sm py-1 min-h-[44px]">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#D4A84B' }} />+923129653920
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" style={{ color: '#D4A84B' }} />
                <span>Liberty Market, Gulberg III<br />Lahore, Pakistan</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8" style={{ borderTop: '1px solid rgba(212, 168, 75, 0.2)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2025 Click Khareed. All rights reserved.</p>
            <p className="flex items-center gap-1">Made with <Heart className="w-4 h-4 fill-current" style={{ color: '#D4A84B' }} /> in Pakistan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

