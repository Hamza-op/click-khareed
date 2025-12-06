'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ShoppingBag, Menu, X, Home, Store, Info, Phone, Gem, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { name: 'Home', href: '#hero', icon: Home },
  { name: 'Collections', href: '#categories', icon: Gem },
  { name: 'Featured', href: '#featured', icon: Sparkles },
  { name: 'About', href: '#about', icon: Info },
  { name: 'Process', href: '#process', icon: Store },
  { name: 'Contact', href: '#footer', icon: Phone },
];

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (href === '#hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { openCart, getCartCount } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 safe-area-inset" style={{ backgroundColor: 'var(--background)' }}>
        <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span className="font-serif text-xl font-bold text-gold-gradient">Click Khareed</span>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-area-inset ${
          scrolled ? 'backdrop-blur-lg shadow-lg' : ''
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--card-bg)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--card-border)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, '#hero')}
            className="font-serif text-xl md:text-2xl font-bold text-gold-gradient"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Click Khareed
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--foreground-muted)' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-full transition-colors"
              style={{ backgroundColor: 'var(--background-secondary)' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Cart */}
            <motion.button
              onClick={openCart}
              className="relative p-2.5 rounded-full transition-colors"
              style={{ backgroundColor: 'var(--background-secondary)' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold text-black rounded-full"
                  style={{ background: 'var(--gold-gradient)' }}
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>

            {/* Menu Toggle */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-full transition-colors"
              style={{ backgroundColor: 'var(--background-secondary)' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" style={{ color: 'var(--primary)' }} /> : <Menu className="w-5 h-5" style={{ color: 'var(--primary)' }} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-16 right-0 bottom-0 z-50 w-72 shadow-2xl"
            style={{ backgroundColor: 'var(--background)', borderLeft: '1px solid var(--card-border)' }}
          >
            <nav className="p-6">
              <ul className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.li key={link.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                    <a
                      href={link.href}
                      onClick={(e) => { handleSmoothScroll(e, link.href); setIsMenuOpen(false); }}
                      className="flex items-center gap-3 p-3 rounded-xl transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                    >
                      <link.icon className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                      <span className="font-medium">{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

