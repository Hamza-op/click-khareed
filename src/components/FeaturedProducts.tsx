'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star } from 'lucide-react';
import { Product, useCart } from '@/context/CartContext';
import Image from 'next/image';
import { useState } from 'react';
import { ProductModal } from './ProductModal';

const products: Product[] = [
  { id: '1', name: 'Royal Statement Necklace', price: 3500, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800', category: 'Necklaces', description: 'Gold-plated statement necklace with intricate crystal detailing' },
  { id: '2', name: 'Crystal Stud Earrings', price: 1800, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800', category: 'Earrings', description: 'Sparkling cubic zirconia studs in gold-plated brass setting' },
  { id: '3', name: 'Pearl Charm Bracelet', price: 2200, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800', category: 'Bracelets', description: 'Faux pearl bracelet with gold-plated clasp and charms' },
  { id: '4', name: 'Emerald Crystal Ring', price: 2800, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800', category: 'Rings', description: 'Green crystal stone with rhinestone accents in alloy setting' },
  { id: '5', name: 'Designer Bangle Set', price: 4200, image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800', category: 'Bracelets', description: 'Set of 6 gold-plated bangles with enamel work' },
  { id: '6', name: 'Ruby Crystal Pendant', price: 2500, image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800', category: 'Necklaces', description: 'Deep red crystal pendant in gold-plated setting' },
  { id: '7', name: 'Sapphire Drop Earrings', price: 3200, image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800', category: 'Earrings', description: 'Blue crystal drop earrings with CZ accents' },
  { id: '8', name: 'Couple Ring Set', price: 4500, image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800', category: 'Rings', description: 'Matching couple bands in premium stainless steel' },
];

interface ProductCardProps {
  product: Product;
  onOpenProduct: (product: Product) => void;
}

function ProductCard({ product, onOpenProduct }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  const formatPrice = (price: number) => `PKR ${price.toLocaleString()}`;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group luxury-card rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => onOpenProduct(product)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        {/* Wishlist Button */}
        <button
          onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
          className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
          style={{ backgroundColor: 'var(--card-bg)', backdropFilter: 'blur(8px)' }}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} style={{ color: isLiked ? undefined : 'var(--primary)' }} />
        </button>
        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--primary)', backdropFilter: 'blur(8px)' }}>
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: 'var(--primary)' }} />
          ))}
          <span className="text-xs ml-1" style={{ color: 'var(--foreground-muted)' }}>(48)</span>
        </div>

        {/* Name */}
        <h3 className="font-semibold mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm mb-3 line-clamp-2" style={{ color: 'var(--foreground-muted)' }}>{product.description}</p>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-base md:text-lg font-bold" style={{ color: 'var(--primary)' }}>{formatPrice(product.price)}</span>
          <motion.button
            onClick={handleAddToCart}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all min-h-[44px] flex-shrink-0"
            style={{ background: 'var(--gold-gradient)', color: '#1A1A1A' }}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="sm:hidden">Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProducts() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categories = ['All', 'Necklaces', 'Earrings', 'Bracelets', 'Rings'];
  const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter);

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="featured" className="py-20 md:py-28" style={{ backgroundColor: 'var(--background-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: 'var(--primary)' }}>Curated Selection</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-4">Featured <span className="text-gold-gradient">Collection</span></h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--foreground-muted)' }}>Discover our most sought-after fashion jewelry pieces, each designed to make you shine without breaking the bank.</p>
          </motion.div>

          {/* Filter Tabs - Scrollable on mobile */}
          <div className="flex gap-2 mb-8 md:mb-10 overflow-x-auto hide-scrollbar pb-2 px-1 md:justify-center md:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex-shrink-0 px-4 md:px-5 py-2.5 rounded-full text-sm font-medium transition-all min-h-[44px] ${filter === cat ? 'btn-gold' : 'btn-outline-gold'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onOpenProduct={handleOpenProduct} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

