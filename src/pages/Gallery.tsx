import React from 'react';
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Optimized WebP image assets from the public folder
const galleryImages = [
  '/images/gallery/gallery-cake-1.webp',
  '/images/gallery/gallery-cake-2.webp',
  '/images/gallery/gallery-cake-3.webp',
  '/images/gallery/gallery-cake-4.webp',
  '/images/gallery/gallery-cake-5.webp',
  '/images/gallery/gallery-cake-6.webp',
  '/images/gallery/gallery-cake-7.webp',
  '/images/gallery/gallery-cake-8.webp',
  '/images/gallery/gallery-cake-9.webp',
  '/images/gallery/gallery-cake-10.webp',
  '/images/gallery/gallery-cake-11.webp',
  '/images/gallery/gallery-cake-12.webp',
  '/images/gallery/gallery-cake-13.webp',
  '/images/gallery/gallery-cake-14.webp',
  '/images/gallery/gallery-cake-15.webp',
  '/images/gallery/gallery-cake-16.webp',
  '/images/gallery/gallery-cake-17.webp',
  '/images/gallery/gallery-cake-18.webp',
  '/images/gallery/gallery-cake-19.webp',
  '/images/gallery/gallery-cake-20.webp',
  '/images/gallery/gallery-cake-21.webp',
  '/images/gallery/gallery-cake-22.webp',
  '/images/gallery/gallery-cake-23.webp',
  '/images/gallery/gallery-cake-24.webp',
];

export const Gallery: React.FC = () => {

  // Individual card item animation variants (fade-in & slide-up)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="pt-24 pb-16 bg-[#0c0c0c] min-h-screen">
      {/* 1. Page Header */}
      <section className="py-16 bg-gradient-to-b from-[#181817] to-[#0c0c0c] border-b border-white/5 relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="font-body text-xs uppercase tracking-[0.25em] text-primary">Portfolio</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-on-surface">
            Signature Creations
          </h1>
          <div className="w-16 h-[1px] bg-primary/50 mx-auto mt-4" />
          <p className="font-body text-[#e5e2e0]/60 font-light text-sm max-w-lg mx-auto leading-relaxed">
            Take a visual tour of our bespoke cakes, masterfully styled themes, and custom-baked delights.
          </p>
        </div>
      </section>

      {/* 2. Grid Gallery Section */}
      <section className="py-16 container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-[#121212] border border-white/5 shadow-lg group aspect-[4/5]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
            >
              {/* Premium image container with hover zoom effect */}
              <div className="h-full w-full overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`}
                  alt={`Signature Creation ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading={index < 6 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>

              {/* Glossy overlay frame visible on hover */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none transition-all duration-300 group-hover:border-primary/30" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
