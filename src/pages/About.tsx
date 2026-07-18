import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Award, ShieldCheck, Smile } from 'lucide-react';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  useEffect(() => {
    // GSAP ScrollTrigger reveals
    const items = gsap.utils.toArray('.reveal-item');
    const triggers = items.map((item: any) =>
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 1,
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
  }, []);

  return (
    <div className="pt-24 pb-16">
      <SEO 
        title="Our Story | The Cakes Floor Bhandara" 
        description="Learn about The Cakes Floor, Bhandara's premium pure vegetarian bakery. Discover our baking philosophy, strict hygiene standards, and how our pastry chefs handcraft every cake, bread, and snack with love." 
        path="/about" 
      />
      {/* 1. Page Header */}
      <section className="py-16 bg-gradient-to-b from-[#181817] to-background border-b border-white/5 relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="font-body text-xs uppercase tracking-[0.25em] text-primary">Discover</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-on-surface">
            Our Story
          </h1>
          <div className="w-16 h-[1px] bg-primary/50 mx-auto mt-4" />
          <p 
            className="font-body text-[#e5e2e0]/60 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Crafting beautiful memories in Bhandara, one premium recipe at a time.
          </p>
        </div>
      </section>

      {/* 2. Story Section (The Art of Fine Baking) */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-left space-y-6 reveal-item">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">The Art of Fine Baking</h2>
          <p className="font-body text-[#e5e2e0]/70 font-light leading-relaxed">
            Founded with a passion for genuine flavors, The Cakes Floor began as a humble kitchen with a single mission: to create celebration confectioneries that taste as gorgeous as they look. Over the years, we have grown into Bhandara’s favorite spot for birthdays, weddings, and daily cravings.
          </p>
          <p className="font-body text-[#e5e2e0]/70 font-light leading-relaxed">
            Our secret lies in respecting the craft of baking. We do not believe in shortcuts or mass production. Every batch of sponge cake, puff pastry, and savory roll is mixed, shaped, and baked fresh by our skilled pastry chefs daily.
          </p>
          <p className="font-body text-[#e5e2e0]/70 font-light leading-relaxed">
            We use only 100% vegetarian, premium quality ingredients—ranging from fresh seasonal fruits to pure dairy cream and rich cocoa—ensuring our creations remain safe, hygienic, and incredibly delicious.
          </p>
        </div>

        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-neutral-900">
          <img
            src={`${import.meta.env.BASE_URL}images/aboutus-img.webp`}
            alt="The Cakes Floor bakery cafe interior seating and coffee area in Bhandara"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      </section>

      {/* 3. Core Philosophy */}
      <section className="py-20 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Title + 3 Cards Stacked Vertically */}
          <div className="text-left space-y-6">
            <div className="space-y-2 reveal-item">
              <span className="font-body text-xs uppercase tracking-[0.25em] text-primary">Foundations</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Our Philosophy</h2>
              <div className="w-16 h-[1px] bg-primary/50 mt-2" />
            </div>

            <div className="flex flex-col gap-5 w-full pt-2">
              {/* Value 1: Absolute Hygiene */}
              <div className="glass-card p-6 rounded-2xl text-left flex gap-4 items-start reveal-item">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck size={22} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold text-primary">Absolute Hygiene</h3>
                  <p className="font-body text-xs text-[#e5e2e0]/60 font-light leading-relaxed">
                    We maintain strict sanitary practices in our kitchen. From ingredient sourcing to baking and packing, hygiene is non-negotiable.
                  </p>
                </div>
              </div>

              {/* Value 2: Artisanal Quality */}
              <div className="glass-card p-6 rounded-2xl text-left flex gap-4 items-start reveal-item">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Award size={22} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold text-primary">Artisanal Quality</h3>
                  <p className="font-body text-xs text-[#e5e2e0]/60 font-light leading-relaxed">
                    Every recipe is balanced by our pastry chefs. We pride ourselves on custom decorations and soft sponges that melt in your mouth.
                  </p>
                </div>
              </div>

              {/* Value 3: 100% Pure Veg */}
              <div className="glass-card p-6 rounded-2xl text-left flex gap-4 items-start reveal-item">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Smile size={22} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold text-primary">100% Pure Veg</h3>
                  <p className="font-body text-xs text-[#e5e2e0]/60 font-light leading-relaxed">
                    All of our bakes, custom cakes, savories, and beverages are 100% pure vegetarian, ensuring a safe and inclusive treat for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Big Image Box */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-neutral-900">
            <img
              src={`${import.meta.env.BASE_URL}images/aboutus-img2.webp`}
              alt="The Cakes Floor premium bakery wall signage decor"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* 4. Consistency & Trust Section (Centered heading with 3 boxes side-by-side) */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-12">
          {/* Centered Heading */}
          <div className="space-y-2 reveal-item text-center max-w-2xl mx-auto">
            <span className="font-body text-xs uppercase tracking-[0.25em] text-primary">Reliability</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Baked Consistently, Everywhere We Are</h2>
            <div className="w-16 h-[1px] bg-primary/50 mx-auto mt-2" />
          </div>

          {/* 3 Boxes Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-2 items-stretch">
            {/* Card 1: Same Recipe, Every Time */}
            <div className="bg-[#FFF8EF] border border-[#EFE3D3] p-6 rounded-2xl text-left flex gap-4 items-start shadow-[0_4px_20px_rgba(0,0,0,0.15)] reveal-item h-full">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shrink-0 shadow-md">
                <span className="font-display text-xl font-bold">1</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-lg font-bold text-[#2B1B12]">Same Recipe, Every Time</h3>
                <p className="font-body text-sm text-[#6B564A] font-light leading-relaxed">
                  No matter which branch you walk into, the recipe never changes. Every cake, every pastry, every loaf is made using the exact same process, ingredients, and quality checks — so the taste you fell in love with is never a surprise, it's a guarantee.
                </p>
              </div>
            </div>

            {/* Card 2: Trusted by More Families Every Year */}
            <div className="bg-[#FFF8EF] border border-[#EFE3D3] p-6 rounded-2xl text-left flex gap-4 items-start shadow-[0_4px_20px_rgba(0,0,0,0.15)] reveal-item h-full">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shrink-0 shadow-md">
                <span className="font-display text-xl font-bold">2</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-lg font-bold text-[#2B1B12]">Trusted by More Families Every Year</h3>
                <p className="font-body text-sm text-[#6B564A] font-light leading-relaxed">
                  Growing to multiple branches didn't happen overnight — it happened because more families kept choosing us for their everyday treats and their biggest celebrations. Each new branch is a reflection of that trust, not a shortcut around it.
                </p>
              </div>
            </div>

            {/* Card 3: Built on the Same Values We Started With */}
            <div className="bg-[#FFF8EF] border border-[#EFE3D3] p-6 rounded-2xl text-left flex gap-4 items-start shadow-[0_4px_20px_rgba(0,0,0,0.15)] reveal-item h-full">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shrink-0 shadow-md">
                <span className="font-display text-xl font-bold">3</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-lg font-bold text-[#2B1B12]">Built on the Same Values We Started With</h3>
                <p className="font-body text-sm text-[#6B564A] font-light leading-relaxed">
                  Bigger doesn't mean different. Whether it's our very first branch or our newest one, the same care, the same standards, and the same passion for baking go into every single order — because growth should never come at the cost of quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
