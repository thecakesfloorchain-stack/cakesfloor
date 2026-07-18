import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, ArrowLeft, Star, Clock, Heart, Award, Compass } from 'lucide-react';
import { menuItems } from '../data/menu';
import { SEO } from '../components/SEO';

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Bakery",
      "@id": "https://thecakesfloor.in/#bhandara",
      "name": "The Cakes Floor",
      "image": "https://thecakesfloor.in/images/aboutus-img.webp",
      "telephone": "+91 78873 24373",
      "url": "https://thecakesfloor.in/",
      "priceRange": "₹₹",
      "servesCuisine": ["Bakery", "Cakes", "Fast Food"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Zilla Parishad Square, Takiya Ward, Near Sai Mandir, Near Ganeshpur",
        "addressLocality": "Bhandara",
        "addressRegion": "Maharashtra",
        "postalCode": "441904",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.1736173,
        "longitude": 80.1874254
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "22:30"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.1,
        "reviewCount": 697
      },
      "sameAs": ["https://www.instagram.com/thecakesfloor"]
    },
    {
      "@type": "Bakery",
      "@id": "https://thecakesfloor.in/#lakhani",
      "name": "The Cakes Floor - Lakhani Outlet",
      "image": "https://thecakesfloor.in/images/aboutus-img2.webp",
      "telephone": "+91 78873 24373",
      "url": "https://thecakesfloor.in/",
      "priceRange": "₹₹",
      "servesCuisine": ["Bakery", "Cakes", "Fast Food"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gangotri Building, Murmadi",
        "addressLocality": "Lakhani",
        "addressRegion": "Maharashtra",
        "postalCode": "441804",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "22:30"
      },
      "sameAs": ["https://www.instagram.com/thecakesfloor"]
    }
  ]
};

export const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [[page, direction], setPage] = useState([0, 0]);

  const slides = [
    {
      id: 0,
      image: '/images/hero-carousel-2.webp',
      badge: "Bhandara’s Premier Bakery",
      heading: (
        <>
          Crafting <span className="text-primary text-glow">Sweet</span> Moments
        </>
      ),
      subtext: "Step into a world of sensory indulgence. From customized celebration cakes to delicious hot savories, we bake happiness fresh daily.",
      subtextStyle: { fontFamily: "'Quicksand', sans-serif" },
      headingStyle: { fontFamily: "'Berkshire Swash', serif", textTransform: 'none' }
    },
    {
      id: 1,
      image: '/images/hero-carousel-1.webp',
      badge: "Handmade Delicacies",
      heading: (
        <>
          Handmade With <span className="text-primary text-glow font-cormorant">Love</span>, Displayed With Pride
        </>
      ),
      subtext: "From birthdays to celebrations — pick your favourite, freshly made.",
      subtextStyle: { fontFamily: "'Lato', sans-serif", color: "#EDE6DA" },
      headingStyle: { fontFamily: "'Cormorant Garamond', serif" }
    },
    {
      id: 2,
      image: '/images/hero-carousel-3.webp',
      badge: "Bakers of Bhandara",
      heading: (
        <>
          Sweet <span className="text-primary text-glow font-cormorant">Moments</span> Start Here
        </>
      ),
      subtext: "Visit us in-store for the freshest cakes, made fresh every day.",
      subtextStyle: { fontFamily: "'Lato', sans-serif", color: "#EDE6DA" },
      headingStyle: { fontFamily: "'Cormorant Garamond', serif" }
    }
  ];

  const currentSlide = page;

  const nextSlide = () => {
    setPage([(page + 1) % slides.length, 1]);
  };

  const prevSlide = () => {
    setPage([(page - 1 + slides.length) % slides.length, -1]);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : dir < 0 ? '-100%' : '0%',
      opacity: 0
    }),
    center: {
      x: '0%',
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : dir > 0 ? '-100%' : '0%',
      opacity: 0
    })
  };

  // Filter popular highlights
  const highlights = menuItems.filter((item) => item.isPopular).slice(0, 4);

  // GSAP ScrollTrigger reveals with proper memory leak cleanup
  useEffect(() => {
    const items = gsap.utils.toArray('.reveal-item');
    const triggers = items.map((item: any) =>
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      })
    );

    return () => {
      triggers.forEach((t) => t.scrollTrigger?.kill());
    };
  }, []);

  // Track the current page value in a ref to avoid recreation of the interval
  const pageRef = useRef(page);
  useEffect(() => {
    pageRef.current = page;
  }, [page]);

  // Set up the auto-advance interval exactly once on mount, respecting Page Visibility API
  useEffect(() => {
    const autoAdvance = () => {
      if (document.visibilityState === 'visible') {
        setPage(([current]) => [(current + 1) % slides.length, 1]);
      }
    };

    const timer = setInterval(autoAdvance, 5000);

    const handleVisibilityChange = () => {
      // If user comes back to the tab, we reset the timer interval if needed
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [slides.length]);

  const handleGetDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          window.open(
            `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=The+Cakes+Floor,+near+Sai+Mandir,+Khat+Road,+Bhandara`,
            '_blank'
          );
        },
        () => {
          // Fallback if permission denied
          window.open(
            'https://www.google.com/maps/dir/?api=1&destination=The+Cakes+Floor,+near+Sai+Mandir,+Khat+Road,+Bhandara',
            '_blank'
          );
        }
      );
    } else {
      window.open(
        'https://www.google.com/maps/dir/?api=1&destination=The+Cakes+Floor,+near+Sai+Mandir,+Khat+Road,+Bhandara',
        '_blank'
      );
    }
  };

  return (
    <div ref={containerRef} className="overflow-hidden">
      <SEO 
        title="The Cakes Floor | Premium Artisanal Cakes & Bakery in Bhandara" 
        description="Indulge in Bhandara's finest 100% vegetarian bakery. Order custom birthday & wedding cakes, fresh pastries, hot savories, pizzas, and desserts. Visit our Bhandara and Lakhani outlets today." 
        path="/" 
        jsonLd={homeJsonLd} 
      />
      {/* 1. Hero Section */}
      <section className="relative h-[calc(100vh-54px)] flex items-center pt-16 md:pt-24 overflow-hidden bg-[#0c0c0c]">
        {/* Background Slide (Uses absolute images inside animated motion containers for proper LCP optimization) */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.25 }
            }}
            className="absolute inset-0 z-0 overflow-hidden"
          >
            <img 
              src={`${import.meta.env.BASE_URL}${slides[currentSlide].image.replace(/^\//, '')}`} 
              alt={slides[currentSlide].badge} 
              className="w-full h-full object-cover"
              loading={currentSlide === 0 ? "eager" : "lazy"}
              fetchPriority={currentSlide === 0 ? "high" : "auto"}
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay to dim background brightness */}
        <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center w-full z-10 py-8 pt-5 md:pt-8">
          {/* Centered Text Block */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-3 md:space-y-6 max-w-3xl flex flex-col items-center justify-center text-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] max-md:translate-y-0 translate-y-2 sm:-translate-y-6 md:-translate-y-12 w-full px-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/30 text-primary font-body text-[10px] sm:text-xs uppercase tracking-widest backdrop-blur-md shadow-sm">
                <Star size={12} className="fill-primary text-primary" />
                {slides[currentSlide].badge}
              </div>
              
              <h1
                className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.2] md:leading-[1.25] text-on-surface py-1 uppercase select-none font-bold"
                style={slides[currentSlide].headingStyle}
              >
                {slides[currentSlide].heading}
              </h1>
              
              <p
                className="text-[#EDE6DA] text-[11px] sm:text-base md:text-lg font-medium max-w-2xl leading-relaxed select-none bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 sm:px-6 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-sm"
                style={slides[currentSlide].subtextStyle}
              >
                {slides[currentSlide].subtext}
              </p>
              
              {currentSlide === 0 && (
                <div className="hidden md:flex flex-wrap gap-4 mt-5 md:mt-0 pt-1 sm:pt-2 pb-2 sm:pb-10 justify-center">
                  <Link
                    to="/menu"
                    className="bg-primary text-on-primary font-body text-[9px] sm:text-xs uppercase tracking-[0.2em] font-semibold px-4 sm:px-8 py-2 sm:py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all button-glow flex items-center gap-1.5"
                  >
                    Explore Menu
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </Link>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 z-20 flex items-center gap-4 bg-black/45 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg relative mt-5 md:mt-0">
            <button 
              onClick={prevSlide}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-primary transition-colors hover:bg-white/5 active:scale-90"
              aria-label="Previous Slide"
            >
              <ArrowLeft size={16} />
            </button>
            
            <div className="flex gap-1.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage([index, index > currentSlide ? 1 : -1])}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-primary w-4' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-primary transition-colors hover:bg-white/5 active:scale-90"
              aria-label="Next Slide"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="w-full overflow-hidden bg-[#B8562F] py-4 border-y border-[#a04622] relative z-20">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          <span
            className="text-sm sm:text-base uppercase flex items-center gap-12 text-[#FDF6EC]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              letterSpacing: "0.8px"
            }}
          >
            <span>🎂 BHANDARA'S FAVORITE CAKE DESTINATION</span>
            <span>✨ 100% PURE VEG & FRESHLY BAKED DAILY</span>
            <span>🍓 ORDER CUSTOMIZED CAKES FOR BIRTHDAYS & ANNIVERSARIES</span>
            <span>🎉 VISIT US NEAR SAI MANDIR</span>
            <span>🌟</span>
          </span>
          {/* Duplicate for seamless looping */}
          <span
            className="text-sm sm:text-base uppercase flex items-center gap-12 text-[#FDF6EC]"
            aria-hidden="true"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              letterSpacing: "0.8px"
            }}
          >
            <span>🎂 BHANDARA'S FAVORITE CAKE DESTINATION</span>
            <span>✨ 100% PURE VEG & FRESHLY BAKED DAILY</span>
            <span>🍓 ORDER CUSTOMIZED CAKES FOR BIRTHDAYS & ANNIVERSARIES</span>
            <span>🎉 VISIT US NEAR SAI MANDIR</span>
            <span>🌟</span>
          </span>
        </div>
      </div>

      {/* 2. About Us Teaser Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#E7DCCB' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="grid grid-cols-3 gap-4 w-full relative z-10">
            {/* Image 1 */}
            <div className="w-full h-[360px] md:h-[500px] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.15)] border border-neutral-350 bg-white/20 transition-transform duration-500 hover:scale-105">
              <img 
                src={`${import.meta.env.BASE_URL}images/teaser-cake-1.webp`} 
                alt="Custom butterfly theme fondant cake by The Cakes Floor Bhandara" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Image 2 */}
            <div className="w-full h-[360px] md:h-[500px] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.15)] border border-neutral-350 bg-white/20 transition-transform duration-500 hover:scale-105">
              <img 
                src={`${import.meta.env.BASE_URL}images/teaser-cake-2.webp`} 
                alt="Handcrafted Avengers superhero theme cake for kids birthday" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Image 3 */}
            <div className="w-full h-[360px] md:h-[500px] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.15)] border border-neutral-350 bg-white/20 transition-transform duration-500 hover:scale-105">
              <img 
                src={`${import.meta.env.BASE_URL}images/teaser-cake-3.webp`} 
                alt="Premium 3D sports car themed birthday cake" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="text-left space-y-6 relative z-10">
            <span className="font-body text-xs uppercase tracking-[0.25em] text-primary font-bold drop-shadow-[0_1px_2.5px_rgba(0,0,0,0.15)]">Our Legacy</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#7A3B3B' }}>
              The Cakes Floor — Bhandara’s Favorite Since Inception
            </h2>
            <p className="text-black font-medium leading-relaxed text-base md:text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              For years, The Cakes Floor has been craft-baking premium confectioneries. Every cake, sponge, and savory roll is built by hand using the highest standards of hygiene and carefully selected local ingredients. 
            </p>
            <p className="text-black font-medium leading-relaxed text-base md:text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              We specialize in bringing your dream custom cake designs to life. Whether it is a grand multi-tier wedding cake or a customized birthday surprise, our bakers shape happiness just for you.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="bg-[#7A3B3B] hover:bg-[#662f2f] text-white font-body text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-full transition-all active:scale-95 flex items-center gap-2 inline-flex shadow-md"
              >
                Read Our Story
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Menu Highlights Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-4 max-w-2xl mx-auto reveal-item">
            <span className="font-body text-xs uppercase tracking-[0.25em] text-primary">Hand-picked</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Signature Masterworks</h2>
            <div className="w-16 h-[1px] bg-primary/50 mx-auto" />
            <p className="font-body text-[#e5e2e0]/60 font-light text-sm">
              Discover our most popular sweet and savory creations, baked daily in limited batches.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -8 }}
                className="glass-card rounded-2xl overflow-hidden text-left flex flex-col group border border-white/5 bg-[#121212] hover:border-primary/20 transition-all duration-300 h-full"
              >
                {/* Image Header */}
                <div className="h-48 w-full overflow-hidden relative bg-neutral-900 border-b border-white/5">
                  <img 
                    src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`} 
                    alt={`${item.name} - The Cakes Floor Signature Selection`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  {item.isPopular && (
                    <span className="absolute top-4 left-4 bg-primary/20 backdrop-blur-md border border-primary/40 text-primary font-body text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-semibold">
                      Popular
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-[#e5e2e0] group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-body text-xs text-[#e5e2e0]/60 font-light leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-4 reveal-item">
            <Link
              to="/menu"
              className="bg-primary/5 border border-primary/20 text-primary hover:bg-primary/10 px-8 py-3.5 rounded-full font-body text-xs uppercase tracking-[0.2em] font-semibold transition-all active:scale-95 inline-flex gap-2"
            >
              View Full Menu
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why The Cakes Floor (USP Section) */}
      <section className="relative min-h-screen pt-16 pb-32 flex flex-col justify-start items-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#0c0c0c]">
          <div
            className="w-full h-full bg-cover bg-center opacity-100 transition-opacity duration-500 bg-[#0c0c0c]"
            style={{
              backgroundImage: "url('" + import.meta.env.BASE_URL + "images/usp-bg.webp')",
              backgroundAttachment: 'scroll'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center gap-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="font-body text-xs uppercase tracking-[0.25em] text-primary">Discover Our Difference</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface">Why Choose Us</h2>
            <div className="w-16 h-[1px] bg-primary/50 mx-auto" />
          </div>

          {/* Vertical Stack */}
          <div className="flex flex-col gap-36 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-24 w-full items-center">
              <div className="hidden md:block order-1" />
              <div className="order-2 glass-card bg-[#160e0a]/85 border border-[#30221a] p-8 md:p-10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex gap-5 text-left hover:border-primary/45 transition-all duration-300">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                  <Clock size={22} />
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-bold text-primary">Always Baked Fresh</h3>
                  <p className="font-body text-[#e5e2e0]/90 font-light leading-relaxed text-sm md:text-base">
                    Every morning starts the same way for us — fresh dough, real butter, and 100% eggless batters, mixed before the sun's even up. No shortcuts, no preservatives, no resting overnight in a freezer. Our sponge layers are baked in small batches, so what reaches your table is soft, warm, and melts the moment it touches your mouth — completely vegetarian, without compromising on taste.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-24 w-full items-center">
              <div className="order-1 glass-card bg-[#160e0a]/85 border border-[#30221a] p-8 md:p-10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex gap-5 text-left hover:border-primary/45 transition-all duration-300">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                  <Heart size={22} />
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-bold text-primary">Premium Ingredients</h3>
                  <p className="font-body text-[#e5e2e0]/90 font-light leading-relaxed text-sm md:text-base">
                    We don't compromise on what goes into our bakes. Real Madagascar vanilla, premium Belgian cocoa, and farm-fresh butter go into our bakes because shortcuts show up in taste, and we'd rather you notice the quality than the compromise.
                  </p>
                </div>
              </div>
              <div className="hidden md:block order-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-24 w-full items-center">
              <div className="hidden md:block order-1" />
              <div className="order-2 glass-card bg-[#160e0a]/85 border border-[#30221a] p-8 md:p-10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex gap-5 text-left hover:border-primary/45 transition-all duration-300">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                  <Award size={22} />
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-bold text-primary">Bhandara’s Trusted Choice</h3>
                  <p className="font-body text-[#e5e2e0]/90 font-light leading-relaxed text-sm md:text-base">
                    For years, families across Bhandara's ward districts have chosen us to be part of their biggest moments — birthdays, weddings, festivals, and everyday celebrations. As a pure veg bakery, we've earned trust not just for our taste, but for staying true to every family's dietary values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee-Brown Marquee Banner */}
      <div className="w-full overflow-hidden bg-[#3E2C23] py-4 border-y border-[#2d2019] relative z-20">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          <span
            className="text-sm sm:text-base uppercase flex items-center gap-12 text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              letterSpacing: "0.8px"
            }}
          >
            <span>Warm from the Oven 🍞</span>
            <span>Baked Fresh Every Morning ✦</span>
            <span>No Preservatives, Just Passion ✦</span>
            <span>Taste the Difference ✦</span>
            <span className="mx-4 opacity-30">✦</span>
            <span>Warm from the Oven 🍞</span>
            <span>Baked Fresh Every Morning ✦</span>
            <span>No Preservatives, Just Passion ✦</span>
            <span>Taste the Difference ✦</span>
          </span>
          {/* Duplicate for seamless looping */}
          <span
            className="text-sm sm:text-base uppercase flex items-center gap-12 text-white"
            aria-hidden="true"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              letterSpacing: "0.8px"
            }}
          >
            <span>Warm from the Oven 🍞</span>
            <span>Baked Fresh Every Morning ✦</span>
            <span>No Preservatives, Just Passion ✦</span>
            <span>Taste the Difference ✦</span>
            <span className="mx-4 opacity-30">✦</span>
            <span>Warm from the Oven 🍞</span>
            <span>Baked Fresh Every Morning ✦</span>
            <span>No Preservatives, Just Passion ✦</span>
            <span>Taste the Difference ✦</span>
          </span>
        </div>
      </div>

      {/* 5. Instagram Profile Feature Section */}
      <section className="bg-white text-neutral-900 border-y border-neutral-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 w-full gap-12 items-center py-0">
          {/* Left Column */}
          <div className="flex items-center justify-start h-full">
            <div className="relative w-full max-w-[580px] aspect-[1000/590] overflow-hidden select-none border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <img 
                src={`${import.meta.env.BASE_URL}images/instagram-profile.webp`} 
                alt="The Cakes Floor Instagram feed and latest custom cake designs social page" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <a 
                href="https://www.instagram.com/thecakesfloor/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute left-[7.8%] top-[20.3%] w-[18.4%] h-[31.4%] rounded-full cursor-pointer z-10"
                title="Go to Instagram Profile"
              />
              <a 
                href="https://www.instagram.com/thecakesfloor/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute left-[29.5%] top-[15.5%] w-[19%] h-[10.5%] cursor-pointer z-10"
                title="Go to Instagram Profile"
              />
              <a 
                href="https://www.instagram.com/thecakesfloor/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute left-[7.8%] top-[54.5%] w-[37.6%] h-[9.5%] cursor-pointer z-10"
                title="Follow us on Instagram"
              />
              <a 
                href="https://ig.me/m/thecakesfloor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute left-[46.5%] top-[54.5%] w-[38.3%] h-[9.5%] cursor-pointer z-10"
                title="Message us on Instagram"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center items-center lg:items-start space-y-6 py-12 md:py-16 w-full">
            <div className="bg-[#e6e6fa]/40 backdrop-blur-md border border-[#c3b6f0]/30 p-8 md:p-10 rounded-3xl shadow-[0_12px_36px_rgba(110,80,220,0.06)] space-y-6 text-center max-w-xl mx-auto lg:mx-0">
              <p className="text-neutral-900 font-medium leading-relaxed text-base md:text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Our Instagram is where the magic happens first — new designs, fresh flavours, and a closer look at how each cake comes together. If you love what you see here, you'll love what's waiting there. Come follow along.
              </p>
              
              <div className="pt-2 flex justify-center">
                <a
                  href="https://www.instagram.com/thecakesfloor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-body text-xs uppercase tracking-wider font-bold bg-[#3b53f6] hover:bg-[#2c42db] active:scale-95 transition-all shadow-[0_4px_16px_rgba(59,83,246,0.35)]"
                >
                  explore us on insta
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Google Maps & Geolocation Directions */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Maps iframe */}
          <div className="h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative bg-white/5">
            <iframe
              src="https://maps.google.com/maps?q=The%20Cakes%20Floor%2C%20near%20Sai%20Mandir%2C%20Khat%20Road%2C%20Bhandara&t=&z=16&ie=UTF8&iwloc=A&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="The Cakes Floor Bhandara Map Location"
            />
          </div>

          {/* Maps info block */}
          <div className="text-left space-y-6 reveal-item">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-body text-xs uppercase tracking-widest">
              <Compass size={12} />
              Visit Our Shop
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Steer Directly to Sweetness
            </h2>
            <p className="font-body text-[#e5e2e0]/70 font-light leading-relaxed">
              Located conveniently at **Zilla Parishad Square, Khat Road in Bhandara, Maharashtra**. We invite you to experience the scent of fresh baking and explore our range of pastries.
            </p>
            <div className="space-y-4 font-body text-sm font-light text-[#e5e2e0]/70">
              <p>📍 Zilla Parishad Square, near Sai Mandir, Khat Road, Bhandara</p>
              <p>📞 Phone Enquiries: +91 78873 24373</p>
              <p>⏰ Open Daily: 10:00 AM - 10:30 PM</p>
            </div>
            <div className="pt-2">
              <button
                onClick={handleGetDirections}
                className="bg-primary text-on-primary font-body text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 rounded-full hover:brightness-110 active:scale-95 transition-all button-glow flex items-center gap-2"
              >
                Get Live Directions
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
