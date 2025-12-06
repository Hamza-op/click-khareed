'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, MessageCircle, Heart, Star, Minus, Plus } from 'lucide-react';
import { Product, useCart } from '@/context/CartContext';
import Image from 'next/image';
import { useState } from 'react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const formatPrice = (price: number) => `PKR ${price.toLocaleString()}`;

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      setQuantity(1);
      onClose();
    }
  };

  const handleOrderNow = () => {
    if (product) {
      const message = `Hi! I'm interested in ordering:\n\n*${product.name}*\nCategory: ${product.category}\nQuantity: ${quantity}\nPrice: ${formatPrice(product.price * quantity)}\n\nPlease provide availability and payment details.`;
      const whatsappUrl = `https://wa.me/923129653920?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-4xl md:w-[calc(100%-2rem)] md:max-h-[85vh] z-50 overflow-hidden rounded-2xl"
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
            <div className="flex flex-col md:flex-row h-full max-h-[calc(100vh-2rem)] md:max-h-[85vh] overflow-hidden">
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-48 sm:h-64 md:h-auto flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--primary)', backdropFilter: 'blur(8px)' }}>
                  {product.category}
                </div>
                {/* Wishlist Button */}
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="absolute top-4 right-14 md:right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{ backgroundColor: 'var(--card-bg)', backdropFilter: 'blur(8px)' }}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} style={{ color: isLiked ? undefined : 'var(--primary)' }} />
                </button>
                {/* Close Button - Mobile */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: 'var(--card-bg)', backdropFilter: 'blur(8px)', color: 'var(--foreground)' }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-5 md:p-6 overflow-y-auto relative">
                {/* Close Button - Desktop */}
                <button
                  onClick={onClose}
                  className="hidden md:flex absolute top-4 right-4 w-10 h-10 rounded-full items-center justify-center transition-colors hover:bg-white/10"
                  style={{ color: 'var(--foreground)' }}
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2 md:mb-3 md:mt-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--primary)' }} />
                  ))}
                  <span className="text-sm ml-2" style={{ color: 'var(--foreground-muted)' }}>(48 reviews)</span>
                </div>

                {/* Name & Description */}
                <h2 className="font-serif text-xl md:text-3xl font-bold mb-2 md:mb-3">{product.name}</h2>
                <p className="text-sm md:text-base mb-4 md:mb-6" style={{ color: 'var(--foreground-muted)' }}>{product.description}</p>

                {/* Price */}
                <div className="mb-4 md:mb-6">
                  <span className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--primary)' }}>{formatPrice(product.price)}</span>
                </div>

                {/* Quantity Selector */}
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <span className="text-sm font-medium">Quantity:</span>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full" style={{ backgroundColor: 'var(--background-secondary)' }}>
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm" style={{ color: 'var(--foreground-muted)' }}>Total: <span className="font-semibold" style={{ color: 'var(--primary)' }}>{formatPrice(product.price * quantity)}</span></span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button onClick={handleAddToCart} whileTap={{ scale: 0.95 }} className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium transition-all text-sm md:text-base" style={{ background: 'var(--gold-gradient)', color: '#1A1A1A' }}>
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </motion.button>
                  <motion.button onClick={handleOrderNow} whileTap={{ scale: 0.95 }} className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium transition-all btn-outline-gold text-sm md:text-base">
                    <MessageCircle className="w-5 h-5" />
                    Order via WhatsApp
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

