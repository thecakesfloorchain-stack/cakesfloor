import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { menuItems } from '../data/menu';
import type { MenuItem } from '../data/menu';

export const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [vegOnly, setVegOnly] = useState<boolean>(false);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);

  const categories = [
    'All',
    'Cakes & Pastries',
    'Pizza',
    'Sandwich',
    'Burger',
    'Maggi',
    'Hot Dog',
    'Puffs',
    'Rolls',
    'Beverages',
    'Others',
  ];

  useEffect(() => {
    let result = menuItems;

    // Category Filter
    if (selectedCategory !== 'All') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Vegetarian Filter
    if (vegOnly) {
      result = result.filter((item) => item.isVeg);
    }

    setFilteredItems(result);
  }, [selectedCategory, vegOnly]);

  useEffect(() => {
    // GSAP ScrollTrigger reveals
    const items = gsap.utils.toArray('.reveal-item');
    const triggers = items.map((item: any) =>
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    );

    return () => {
      triggers.forEach((t) => t.scrollTrigger?.kill());
    };
  }, [filteredItems]);

  return (
    <div className="pt-24 pb-16">
      {/* 1. Page Header */}
      <section className="relative py-24 overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#181817] to-background">

        <div className="max-w-4xl mx-auto px-6 text-center space-y-4 relative z-10">
          <span className="font-body text-xs uppercase tracking-[0.25em] text-primary">Artisanal</span>
          <h1 
            className="text-5xl md:text-6xl text-on-surface uppercase tracking-wider text-glow"
            style={{ fontFamily: "'Gagalin', sans-serif" }}
          >
            Our Menu
          </h1>
          <div className="w-16 h-[1px] bg-primary/50 mx-auto mt-4" />
          <p className="font-body text-[#e5e2e0]/80 font-medium text-sm md:text-base max-w-lg mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Browse our full catalog of fresh custom cakes, golden pastries, and savory quick bites.
          </p>
        </div>
      </section>

      {/* 2. Category Navigation & Filters */}
      <section className="max-w-7xl mx-auto px-6 py-10 space-y-6">
        {/* Scrollable Category Tabs */}
        <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent snap-x">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-body text-xs uppercase tracking-widest transition-all shrink-0 snap-start active:scale-95 ${
                selectedCategory === cat
                  ? 'bg-primary text-on-primary font-semibold'
                  : 'bg-white/5 border border-white/5 text-[#e5e2e0]/70 hover:text-primary hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Veg Only Toggle */}
        <div className="flex justify-end items-center">
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <span className="font-body text-xs uppercase tracking-wider text-[#e5e2e0]/60">Vegetarian Only</span>
            <div className="relative">
              <input
                type="checkbox"
                checked={vegOnly}
                onChange={() => setVegOnly(!vegOnly)}
                className="sr-only"
              />
              <div
                className={`w-10 h-6 rounded-full transition-colors duration-300 ${
                  vegOnly ? 'bg-primary' : 'bg-white/10'
                }`}
              />
              <div
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-background transition-transform duration-300 ${
                  vegOnly ? 'transform translate-x-4' : ''
                }`}
              />
            </div>
          </label>
        </div>
      </section>

      {/* 3. Items Grid */}
      <section className="max-w-7xl mx-auto px-6 min-h-[400px]">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="glass-card rounded-2xl overflow-hidden text-left flex flex-col group h-full border border-white/5 bg-[#121212] hover:border-primary/20 transition-colors duration-300"
              >
                {/* Image Header */}
                <div className="h-44 w-full overflow-hidden relative bg-neutral-900 border-b border-white/5">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {item.isPopular && (
                    <span className="absolute top-4 left-4 bg-primary/20 backdrop-blur-md border border-primary/40 text-primary font-body text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-semibold">
                      Popular
                    </span>
                  )}
                  <span
                    className={`absolute top-4 right-4 w-5 h-5 flex items-center justify-center border bg-black/50 backdrop-blur-sm rounded p-0.5 ${
                      item.isVeg ? 'border-green-600' : 'border-red-600'
                    }`}
                    title={item.isVeg ? 'Pure Veg' : 'Non-Veg'}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.isVeg ? 'bg-green-600' : 'bg-red-600'
                      }`}
                    />
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline gap-2">
                      <h3 className="font-display text-lg font-bold text-[#e5e2e0] group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-body text-primary font-bold text-sm shrink-0">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#e5e2e0]/60 font-light leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <p className="text-secondary font-body text-sm">No items found matching your filters.</p>
          </div>
        )}
      </section>
    </div>
  );
};
