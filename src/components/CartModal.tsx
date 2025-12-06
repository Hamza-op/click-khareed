'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export function CartModal() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return `PKR ${price.toLocaleString()}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md flex flex-col"
            style={{ backgroundColor: 'var(--background)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--card-border)' }}>
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                <h2 className="font-serif text-xl font-bold">Your Cart</h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 mb-4" style={{ color: 'var(--foreground-muted)' }} />
                  <p className="text-lg font-medium mb-2">Your cart is empty</p>
                  <p style={{ color: 'var(--foreground-muted)' }}>Add some beautiful jewelry to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 p-3 rounded-xl luxury-card"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{item.name}</h3>
                        <p className="text-sm" style={{ color: 'var(--foreground-muted)' }}>{item.category}</p>
                        <p className="font-semibold mt-1" style={{ color: 'var(--primary)' }}>{formatPrice(item.price)}</p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button onClick={() => removeFromCart(item.id)} className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 flex items-center justify-center rounded-full border" style={{ borderColor: 'var(--card-border)' }}>
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-medium">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 flex items-center justify-center rounded-full" style={{ background: 'var(--gold-gradient)' }}>
                            <Plus className="w-3 h-3 text-black" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-4 border-t" style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--background-secondary)' }}>
                <div className="flex items-center justify-between mb-4">
                  <span style={{ color: 'var(--foreground-muted)' }}>Subtotal</span>
                  <span className="text-xl font-bold" style={{ color: 'var(--primary)' }}>{formatPrice(getCartTotal())}</span>
                </div>
                <button className="w-full py-3 rounded-xl font-semibold btn-gold glow-effect mb-2">
                  Proceed to Checkout
                </button>
                <button onClick={clearCart} className="w-full py-2 text-sm" style={{ color: 'var(--foreground-muted)' }}>
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

