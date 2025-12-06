'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const footerLinks = [
  { name: 'Home', href: '#' },
  { name: 'Shop', href: '#categories' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#footer' },
];

const socialLinks = [
  { name: 'Instagram', icon: '📸', href: '#' },
  { name: 'Facebook', icon: '👤', href: '#' },
  { name: 'Pinterest', icon: '📌', href: '#' },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-stone-100 dark:bg-slate-900 pt-16 pb-8 safe-area-bottom">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="font-serif text-2xl font-bold text-orange-700 dark:text-orange-500">
              Click Khareed
            </a>
            <p className="mt-4 text-stone-600 dark:text-slate-400 leading-relaxed">
              Save big on handmade treasures! Unique, customized pieces crafted with care and love.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 text-stone-600 dark:text-slate-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors text-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-stone-900 dark:text-slate-100 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-600 dark:text-slate-400 hover:text-orange-700 dark:hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-stone-900 dark:text-slate-100 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:support@clickkhareed.com"
                  className="flex items-center gap-3 text-stone-600 dark:text-slate-400 hover:text-orange-700 dark:hover:text-orange-500 transition-colors"
                >
                  <Mail className="w-5 h-5 text-orange-600 dark:text-orange-500" />
                  support@clickkhareed.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923001234567"
                  className="flex items-center gap-3 text-stone-600 dark:text-slate-400 hover:text-orange-700 dark:hover:text-orange-500 transition-colors"
                >
                  <Phone className="w-5 h-5 text-orange-600 dark:text-orange-500" />
                  +92 300 1234567
                </a>
              </li>
              <li className="flex items-start gap-3 text-stone-600 dark:text-slate-400">
                <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Lahore, Pakistan</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-200 dark:border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500 dark:text-slate-500">
            <p>© 2025 Click Khareed. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

