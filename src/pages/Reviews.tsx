import React from 'react';
import { Star, MessageSquare, X } from 'lucide-react';
import { reviews, reviewsSummary } from '../data/reviews';
import type { Review } from '../data/reviews';
import { SEO } from '../components/SEO';

interface WhiteBoxProps {
  heading: string;
  text: string;
  imageSrc: string;
}

const WhiteBox: React.FC<WhiteBoxProps> = ({ heading, text, imageSrc }) => {
  return (
    <div 
      className="bg-[#FFF8EF] border border-[#EFE3D3] px-8 md:px-10 pb-8 md:pb-10 pt-[18px] rounded-[2.5rem] shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex flex-col justify-start text-left h-auto md:h-[calc(85vh-36px)] w-full"
    >
      {/* Top Header Area: Full Width Image Frame with centered cake, object-cover scaling to fill the container */}
      <div className="flex-1 min-h-[200px] md:min-h-0 w-full mb-[18px] rounded-[2.5rem] flex items-center justify-center overflow-hidden">
        <img 
          src={`${import.meta.env.BASE_URL}${imageSrc.replace(/^\//, '')}`} 
          alt={heading} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Text Content */}
      <div className="space-y-4 shrink-0">
        <h3 
          className="font-display text-2xl md:text-3xl font-semibold text-[#2B1B12] leading-tight"
          style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
        >
          {heading}
        </h3>
        <p 
          className="font-body text-[14px] md:text-[15px] font-normal text-[#6B564A]"
          style={{ lineHeight: '1.6' }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

// Module-level background style objects moved outside the component body
const pinkSectionStyles = {
  backgroundColor: '#F8BDBE',
  backgroundImage: `url("${import.meta.env.BASE_URL}images/noise-tile.webp")`,
  backgroundRepeat: 'repeat'
};

const mintSectionStyles = {
  backgroundColor: '#ADEBB3',
  backgroundImage: `url("${import.meta.env.BASE_URL}images/noise-tile.webp")`,
  backgroundRepeat: 'repeat'
};

const beigeSectionStyles = {
  backgroundColor: '#D1B7E1',
  backgroundImage: `url("${import.meta.env.BASE_URL}images/noise-tile.webp")`,
  backgroundRepeat: 'repeat'
};

export const Reviews: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const outlets = [
    { name: "Bhandara Main Branch", address: "Zilla Parishad Square, Takiya Ward, Near Sai Mandir, Near, Ganeshpur, Bhandara, Maharashtra - 441904", placeId: "ChIJ45vTPpo5KzoRak6ZRefnnzs" },
    { name: "Lakhani", address: "Gangotri Building, Murmadi, Lakhani, Maharashtra", placeId: "ChIJHQ3vizxpKzoRzvV6K5INjA4" },
  ];

  const renderCard = (rev: Review, isCompact: boolean, theme: 'dark-overlay' | 'light-glass' | 'clear-glass') => {
    const initial = rev.firstName.charAt(0).toUpperCase();
    
    // Theme configurations
    let cardClass = '';
    let textClass = '';
    let nameClass = '';
    let dateClass = '';
    let borderClass = '';
    
    if (theme === 'dark-overlay') {
      cardClass = 'bg-[#160f0a]/95 border-[#30221a] hover:border-primary/45';
      textClass = 'text-[#e5e2e0]';
      nameClass = 'text-[#e5e2e0]';
      dateClass = 'text-[#e5e2e0]/50';
      borderClass = 'border-white/10';
    } else if (theme === 'light-glass') {
      cardClass = 'bg-white/40 border-black/10 hover:border-black/25';
      textClass = 'text-[#2B1B12]/95';
      nameClass = 'text-[#2B1B12]';
      dateClass = 'text-[#2B1B12]/50';
      borderClass = 'border-black/10';
    } else {
      // clear-glass
      cardClass = 'bg-white/10 border-white/15 hover:border-white/30';
      textClass = 'text-[#e5e2e0]';
      nameClass = 'text-[#e5e2e0]';
      dateClass = 'text-[#e5e2e0]/50';
      borderClass = 'border-white/10';
    }

    return (
      <div 
        className={`border rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col justify-between transition-all duration-300 w-full ${cardClass} ${
          isCompact 
            ? 'p-6 md:p-8 min-h-[220px] space-y-6' 
            : 'p-8 md:p-10 min-h-[260px] space-y-8'
        }`}
        style={{ backdropFilter: 'none', WebkitBackdropFilter: 'none' }}
      >
        <div className={isCompact ? 'space-y-4' : 'space-y-6'}>
          <div className="flex gap-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={isCompact ? 14 : 18} className={i < rev.rating ? 'fill-primary' : ''} />
            ))}
          </div>
          <p className={`font-body font-light leading-relaxed italic ${textClass} ${
            isCompact 
              ? 'text-sm md:text-base line-clamp-3' 
              : 'text-base md:text-lg line-clamp-4'
          }`}>
            "{rev.text}"
          </p>
        </div>
        <div className={`flex items-center gap-3 border-t ${borderClass} ${isCompact ? 'pt-4' : 'pt-6'}`}>
          <div className={`${
            isCompact 
              ? 'w-10 h-10 text-xs' 
              : 'w-12 h-12 text-sm'
          } rounded-full bg-gradient-to-br ${rev.avatarBg} flex items-center justify-center text-on-primary font-display font-bold shadow-md shrink-0`}>
            {initial}
          </div>
          <div>
            <h4 className={`font-body font-bold ${nameClass} ${isCompact ? 'text-sm md:text-base' : 'text-base md:text-lg'}`}>{rev.firstName}</h4>
            <span className={`font-body uppercase tracking-widest ${dateClass} ${isCompact ? 'text-[9px]' : 'text-[11px]'}`}>
              {rev.date}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-24 pb-16 bg-[#0c0c0c] min-h-screen">
      <SEO 
        title="Customer Reviews | The Cakes Floor Bhandara (4.1★, 697+ reviews)" 
        description="Read customer reviews and testimonials about The Cakes Floor in Bhandara. Discover why our bakery is rated 4.1 stars based on over 697 verified Google reviews." 
        path="/reviews" 
      />
      {/* Combined Section: Header + Google Rating Summary */}
      <section className="py-16 bg-gradient-to-b from-[#181817] to-background border-b border-white/5 relative" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 400px' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="text-left space-y-4">
            <span className="font-body text-xs uppercase tracking-[0.25em] text-primary">Testimonials</span>
            <h1 
              className="text-4xl md:text-5xl text-on-surface uppercase leading-none tracking-widest"
              style={{ fontFamily: "'Horizon', sans-serif" }}
            >
              What Our Customers Say
            </h1>
            <div className="w-16 h-[2px] bg-primary mt-2" />
            <p className="font-body text-[#e5e2e0]/60 font-light text-sm max-w-md leading-relaxed">
              Read verified feedback from our guests across Bhandara about our flavor standards, custom designs, and service.
            </p>
          </div>

          {/* Right Column */}
          <div className="p-8 bg-[#2B1B12]/50 border border-white/15 rounded-3xl text-center space-y-4 shadow-xl">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center gap-1.5 text-primary text-5xl font-bold justify-center">
                <span style={{ fontFamily: "'Horizon', sans-serif" }}>{reviewsSummary.rating}</span>
                <span className="text-3xl">★</span>
              </div>
              <p className="font-body text-xs uppercase tracking-widest text-[#e5e2e0]/40">
                Based on {reviewsSummary.totalReviews} Google Reviews
              </p>
            </div>

            <div className="flex justify-center gap-1.5 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < Math.floor(reviewsSummary.rating) ? 'fill-primary' : ''}
                />
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-on-primary font-body text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 rounded-full hover:brightness-110 active:scale-95 transition-all button-glow inline-flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare size={14} />
                Rate Us on Google
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Image 1 Background */}
      <section className="relative h-auto py-16 md:h-[85vh] md:py-12 flex flex-col justify-center items-center overflow-hidden bg-black border-y border-white/5" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 1000px' }}>
        <div className="absolute inset-0 z-0 bg-[#0c0c0c]">
          <img 
            src={`${import.meta.env.BASE_URL}images/review-bg-1.webp`} 
            alt="Beautiful custom cake preparation and ingredients background" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
            className="w-full h-full object-cover object-top opacity-100 pointer-events-none select-none"
          />
          {/* Black overlay: 40% opacity on mobile only, transparent on desktop */}
          <div className="absolute inset-0 bg-black/40 md:bg-transparent pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-16 w-full">
            {/* Row 1: Top-Left (Visible on mobile & desktop) & Top-Right (Desktop only) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
              <div className="order-1">{renderCard(reviews[0], true, 'clear-glass')}</div>
              <div className="hidden md:block order-2" />
              <div className="hidden md:block order-3">{renderCard(reviews[11], true, 'clear-glass')}</div>
            </div>
            {/* Row 2: Bottom-Left & Bottom-Right (Desktop only) */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
              <div className="order-1">{renderCard(reviews[1], true, 'clear-glass')}</div>
              <div className="hidden md:block order-2" />
              <div className="hidden md:block order-3">{renderCard(reviews[2], true, 'clear-glass')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Beige Background */}
      <section
        className="relative h-auto py-16 md:h-[85vh] md:py-[18px] flex flex-col justify-center items-center overflow-hidden border-b border-[#30221a]/10"
        style={{ ...beigeSectionStyles, contentVisibility: 'auto', containIntrinsicSize: 'auto 1000px' }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
            <div className="order-1 flex items-center">{renderCard(reviews[3], false, 'light-glass')}</div>
            <div className="hidden md:flex order-2 items-center">{renderCard(reviews[4], false, 'light-glass')}</div>
            <div className="order-3">
              <WhiteBox 
                heading="A Promise You Can Taste" 
                text="Every review you read here echoes the same thing we hear at the counter every day — our cakes are soft, our breads are fresh, and nothing tastes &quot;store-bought.&quot; That's because nothing is rushed. From the first mix at dawn to the final piping detail, every bake goes out the same day it's made." 
                imageSrc="/images/box-img-1.webp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Image 2 Background */}
      <section className="relative h-auto py-16 md:h-[85vh] md:py-12 flex flex-col justify-center items-center overflow-hidden bg-black border-b border-white/5" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 1000px' }}>
        <div className="absolute inset-0 z-0 bg-[#0c0c0c]">
          <img 
            src={`${import.meta.env.BASE_URL}images/review-bg-2.webp`} 
            alt="Artisanal bakery and cake styling background image" 
            loading="lazy"
            decoding="async"
            width="1920"
            height="1080"
            className="w-full h-full object-cover object-top opacity-100 pointer-events-none select-none"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-16 w-full">
            {/* Row 1: Top-Left (Visible on mobile & desktop) & Top-Right (Desktop only) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
              <div className="order-1">{renderCard(reviews[5], true, 'dark-overlay')}</div>
              <div className="hidden md:block order-2" />
              <div className="hidden md:block order-3">{renderCard(reviews[6], true, 'dark-overlay')}</div>
            </div>
            {/* Row 2: Bottom-Center (Desktop only) */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
              <div className="hidden md:block order-1" />
              <div className="order-2 mt-4">{renderCard(reviews[7], true, 'dark-overlay')}</div>
              <div className="hidden md:block order-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Mint Background */}
      <section
        className="relative h-auto py-16 md:h-[85vh] md:py-[18px] flex flex-col justify-center items-center overflow-hidden border-b border-[#30221a]/10"
        style={{ ...mintSectionStyles, contentVisibility: 'auto', containIntrinsicSize: 'auto 1000px' }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
            <div className="order-1">
              <WhiteBox 
                heading="Ingredients That Earn Their Place" 
                text="Behind every review praising our flavor is a simple reason — we don't settle for average ingredients. Real Madagascar vanilla, premium Belgian cocoa, and farm-fresh butter go into our bakes because shortcuts show up in taste, and we'd rather you notice the quality than the compromise." 
                imageSrc="/images/box-img-2.webp"
              />
            </div>
            <div className="order-2 flex items-center">{renderCard(reviews[8], false, 'light-glass')}</div>
            <div className="hidden md:flex order-3 items-center">{renderCard(reviews[9], false, 'light-glass')}</div>
          </div>
        </div>
      </section>

      {/* Black & White Review Marquee Separator */}
      <div className="w-full overflow-hidden bg-black py-4 border-y border-white/10 relative z-20">
        <div className="animate-marquee whitespace-nowrap flex gap-12" style={{ willChange: 'transform' }}>
          <span
            className="text-sm sm:text-base uppercase flex items-center gap-12 text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              letterSpacing: "0.8px"
            }}
          >
            <span>Swapnil — "Good product, awesome taste 👍" ⭐⭐⭐⭐⭐</span>
            <span>Shreyash — "Food is really good and the staff is great too." ⭐⭐⭐⭐⭐</span>
            <span>Preveen — "Only place in Bhandara with such tasty plum cake!" ⭐⭐⭐⭐⭐</span>
            <span>Taskin — "Amazing food, lovely decor for selfies, super friendly staff." ⭐⭐⭐⭐⭐</span>
            <span className="mx-4 opacity-30">✦</span>
            <span>Swapnil — "Good product, awesome taste 👍" ⭐⭐⭐⭐⭐</span>
            <span>Shreyash — "Food is really good and the staff is great too." ⭐⭐⭐⭐⭐</span>
            <span>Preveen — "Only place in Bhandara with such tasty plum cake!" ⭐⭐⭐⭐⭐</span>
            <span>Taskin — "Amazing food, lovely decor for selfies, super friendly staff." ⭐⭐⭐⭐⭐</span>
          </span>
          <span
            className="text-sm sm:text-base uppercase flex items-center gap-12 text-white"
            aria-hidden="true"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              letterSpacing: "0.8px"
            }}
          >
            <span>Swapnil — "Good product, awesome taste 👍" ⭐⭐⭐⭐⭐</span>
            <span>Shreyash — "Food is really good and the staff is great too." ⭐⭐⭐⭐⭐</span>
            <span>Preveen — "Only place in Bhandara with such tasty plum cake!" ⭐⭐⭐⭐⭐</span>
            <span>Taskin — "Amazing food, lovely decor for selfies, super friendly staff." ⭐⭐⭐⭐⭐</span>
            <span className="mx-4 opacity-30">✦</span>
            <span>Swapnil — "Good product, awesome taste 👍" ⭐⭐⭐⭐⭐</span>
            <span>Shreyash — "Food is really good and the staff is great too." ⭐⭐⭐⭐⭐</span>
            <span>Preveen — "Only place in Bhandara with such tasty plum cake!" ⭐⭐⭐⭐⭐</span>
            <span>Taskin — "Amazing food, lovely decor for selfies, super friendly staff." ⭐⭐⭐⭐⭐</span>
          </span>
        </div>
      </div>

      {/* Section 5: Bashful Pink Background */}
      <section
        className="relative h-auto py-16 md:h-[85vh] md:py-[18px] flex flex-col justify-center items-center overflow-hidden border-b border-[#30221a]/10"
        style={{ ...pinkSectionStyles, contentVisibility: 'auto', containIntrinsicSize: 'auto 1000px' }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
            <div className="order-1">
              <WhiteBox 
                heading="Part of Bhandara's Celebrations" 
                text="The stories in these reviews aren't just about cake — they're about birthdays, weddings, and everyday joys we've been lucky enough to be part of. Year after year, families across Bhandara's ward districts have trusted us with their biggest moments, and that trust is the review that matters most to us." 
                imageSrc="/images/box-img-3.webp"
              />
            </div>
            <div className="order-2 flex items-center">{renderCard(reviews[12], false, 'light-glass')}</div>
            <div className="hidden md:flex order-3 items-center">{renderCard(reviews[13], false, 'light-glass')}</div>
          </div>
        </div>
      </section>

      {/* Section 6: Image 4 Background */}
      <section className="relative h-auto py-16 md:h-[85vh] md:py-12 flex flex-col justify-center items-center overflow-hidden bg-black border-b border-white/5" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 1000px' }}>
        <div className="absolute inset-0 z-0 bg-[#0c0c0c]">
          <img 
            src={`${import.meta.env.BASE_URL}images/review-bg-4.webp`} 
            alt="Freshly baked cake slices background image" 
            loading="lazy"
            decoding="async"
            width="1920"
            height="1080"
            className="w-full h-full object-cover object-top opacity-100 pointer-events-none select-none"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-16 w-full">
            {/* Row 1: Top-Left (Visible on mobile & desktop) & Top-Right (Desktop only) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
              <div className="order-1">{renderCard(reviews[14], true, 'clear-glass')}</div>
              <div className="hidden md:block order-2" />
              <div className="hidden md:block order-3">{renderCard(reviews[10], true, 'clear-glass')}</div>
            </div>
            {/* Row 2: Bottom-Left & Bottom-Right (Desktop only) */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
              <div className="order-1">{renderCard(reviews[15], true, 'clear-glass')}</div>
              <div className="hidden md:block order-2" />
              <div className="hidden md:block order-3">{renderCard(reviews[16], true, 'clear-glass')}</div>
            </div>
          </div>
        </div>
      </section>
      {/* Outlet Selection Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="bg-[#160f0a] border border-[#30221a] rounded-[2.5rem] p-6 md:p-8 max-w-md w-full relative shadow-[0_24px_64px_rgba(0,0,0,0.8)] space-y-6 text-[#e5e2e0] animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-[#e5e2e0]/60 hover:text-[#DFBA6B] hover:scale-110 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="space-y-2 text-center">
              <h3 className="font-display text-2xl font-bold leading-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Which outlet did you visit?
              </h3>
              <p className="font-body text-xs text-[#e5e2e0]/60 leading-relaxed font-light">
                Select the store location you visited to leave your Google review.
              </p>
            </div>

            {/* Outlet Options */}
            <div className="space-y-3">
              {outlets.map((outlet, index) => (
                <button
                  key={index}
                  onClick={() => {
                    window.open(`https://search.google.com/local/writereview?placeid=${outlet.placeId}`, '_blank', 'noopener,noreferrer');
                    setIsModalOpen(false);
                  }}
                  className="w-full text-left p-4 rounded-2xl bg-black/35 hover:bg-white/5 border border-[#30221a] hover:border-[#DFBA6B]/50 transition-all cursor-pointer group space-y-1.5 shadow-md"
                >
                  <h4 
                    className="font-display text-base font-bold text-[#DFBA6B] group-hover:text-[#ffb954] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.2px" }}
                  >
                    {outlet.name}
                  </h4>
                  <p className="font-body text-xs text-[#e5e2e0]/50 leading-relaxed font-light">
                    {outlet.address}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
