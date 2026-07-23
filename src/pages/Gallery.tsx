import React from 'react';
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { SEO } from '../components/SEO';

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
  '/images/gallery/gallery-cake-25.webp',
  '/images/gallery/gallery-cake-26.webp',
  '/images/gallery/gallery-cake-27.webp',
  '/images/gallery/gallery-cake-28.webp',
  '/images/gallery/gallery-cake-29.webp',
  '/images/gallery/gallery-cake-30.webp',
  '/images/gallery/gallery-cake-31.webp',
  '/images/gallery/gallery-cake-32.webp',
  '/images/gallery/gallery-cake-33.webp',
  '/images/gallery/gallery-cake-34.webp',
  '/images/gallery/gallery-cake-35.webp',
  '/images/gallery/gallery-cake-36.webp',
  '/images/gallery/gallery-cake-37.webp',
  '/images/gallery/gallery-cake-38.webp',
  '/images/gallery/gallery-cake-39.webp',
  '/images/gallery/gallery-cake-40.webp',
];

const galleryAltTexts = [
  "Custom chocolate birthday cake with elegant gold dust and premium chocolate toppings",
  "Elegant multi-tier wedding cake decorated with soft pastel rose petals and fine fondant",
  "Colorful cartoon character themed birthday cake for kids birthday celebrations",
  "Premium fresh strawberry cream cake topped with glazed berries and chocolate curls",
  "Classic black forest chocolate gateau with whipped cream stars and glazed cherries",
  "Heart-shaped red velvet celebration cake with smooth pink cream cheese frosting",
  "Bespoke tiered anniversary cake with rustic naked styling and rosemary accents",
  "Butterscotch drip cake decorated with caramelized walnuts and gold piping details",
  "Creative children's theme cake shaped like a playful blue toy car",
  "Luxury dark chocolate drip cake topped with French macarons and chocolate shards",
  "Traditional Indian fusion rasmalai cake garnished with pistachios and almond flakes",
  "Playful baby shower cake in pastel pink and blue with edible baby booties",
  "Fresh tropical mango mousse cake styled with mango slices and white curls",
  "Delicate vanilla sponge anniversary cake with handmade white chocolate roses",
  "Festive star themed tiered cake for new year celebrations",
  "Bespoke engagement cake featuring intertwined gold wedding rings design",
  "Zesty lemon curd celebration cake with toasted Swiss meringue peaks",
  "Soft red velvet cake decorated with premium cream cheese frosting swirls",
  "Custom photo print birthday cake with colorful sprinkles and chocolate borders",
  "Gourmet pineapple gateau with caramelized slices and cherry highlights",
  "Minimalist coffee mocha cream cake topped with dark chocolate beans",
  "Stunning blue marble effect fondant cake with gold leaf detailing",
  "Seasonal mixed fruit whipped cream cake loaded with kiwi, grapes, and orange slices",
  "Premium dark chocolate truffle cake with golden sugar sprinkles",
  "Custom white and blue 'We love You OUR Superman' birthday cake for husband & papa with photo banner bunting and gold leaf accents",
  "Bespoke 2-tier floating white engagement cake with fresh flower arrangement and golden 'We're Engaged' topper",
  "Stunning 2-tier pink engagement cake with illuminated acrylic flower separator and gold leaf details",
  "Luxury 2-tier white pearl engagement cake with gold initials monogram and white rose bouquet",
  "Enchanting Princess Sofia themed 2-tier purple birthday cake for girls with castle topper and butterflies",
  "Artistic custom portrait birthday cake featuring 3D chocolate hair curls, red roses, and colorful chocolates",
  "Vibrant 2-tier Candyland sweet treats theme birthday cake topped with donuts, lollipops, and ice cream cone",
  "Grand 3-tier Disney Princesses birthday cake with Elsa, Anna, Ariel, and Belle figurines",
  "Custom Spider-Man number 5 shaped birthday cake with detailed web piping for kids birthday party",
  "Elegant pink marble effect birthday cake decorated with handcrafted sugar roses and gold leaf foliage",
  "Twin celebration pastel rainbow cake set decorated with ice cream cones, popsicles, and rainbow arch",
  "Playful 2-tier Jungle Safari animal themed 4th birthday cake with 3D lion, giraffe, and elephant figures",
  "Creative white and blue birthday cake featuring a 3D girl floating with gold and blue balloon sphere bundle",
  "Magical illuminated birthday cake with a girl on a fairy light swing, sugar flowers, and gold lettering",
  "3D sculptured giant red rose flower birthday cake crafted with delicate edible sugar petals",
  "Modern gold and white calendar date birthday cake with gold sphere toppers and torn gold foil accent"
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
      <SEO 
        title="Custom Cake Gallery | The Cakes Floor Bhandara" 
        description="Browse our portfolio of custom-designed celebration cakes in Bhandara. See real photos of our birthday cakes, wedding cakes, baby shower cakes, and themed creations." 
        path="/gallery" 
      />
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
                  alt={galleryAltTexts[index] || `Signature Creation ${index + 1}`}
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
