import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const logoLockupRef = useRef<HTMLDivElement | null>(null);
  const subheadingRef = useRef<HTMLHeadingElement | null>(null);

  // Subheading text with thin vertical bar dividers
  const subheadingText = "LUXURY │ ARTISANAL │ BAKERY";
  const chars = subheadingText.split("").map((char, index) => {
    const isDivider = char === '│';
    return (
      <span 
        key={index} 
        className={`inline-block char-span opacity-100 ${
          isDivider ? 'text-white/40 mx-2 md:mx-4 font-light select-none' : ''
        }`} 
        style={{ 
          fontFamily: "'Cinzel', serif",
          whiteSpace: char === ' ' ? 'pre' : 'normal'
        }}
      >
        {char}
      </span>
    );
  });

  useEffect(() => {
    // Session gating check (runs immediately to skip if already played)
    const introPlayed = sessionStorage.getItem('the_cakes_floor_intro_played');
    if (introPlayed === 'true') {
      onComplete();
      return;
    }

    let tl: gsap.core.Timeline | null = null;
    let isMounted = true;

    // Wait for custom fonts to finish loading so getBoundingClientRect outputs accurate positions
    document.fonts.ready.then(() => {
      if (!isMounted) return;

      // Target the combined navbar logo+text container
      const targetElement = document.getElementById('navbar-logo-lockup');
      const sourceElement = logoLockupRef.current;

      // Timeline setup
      tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('the_cakes_floor_intro_played', 'true');
          onComplete();
        }
      });

      if (targetElement && sourceElement && overlayRef.current && subheadingRef.current) {
        // 1. Get exact bounds for seamless scaling and positioning
        const targetRect = targetElement.getBoundingClientRect();
        const sourceRect = sourceElement.getBoundingClientRect();

        // Calculate translation and scaling differences
        const deltaX = (targetRect.left + targetRect.width / 2) - (sourceRect.left + sourceRect.width / 2);
        const deltaY = (targetRect.top + targetRect.height / 2) - (sourceRect.top + sourceRect.height / 2);
        const deltaScale = targetRect.width / sourceRect.width;

        // 2. Set will-change immediately before animating (split per element role)
        gsap.set(overlayRef.current, {
          willChange: "opacity"
        });
        gsap.set([sourceElement, subheadingRef.current], {
          willChange: "transform, opacity"
        });

        // 3. Stagger dissolve subheading text downward (0s to 1.2s)
        const charElements = subheadingRef.current.querySelectorAll('.char-span');
        tl.to(charElements, {
          opacity: 0,
          y: 25,
          stagger: 0.045,
          duration: 1.2,
          ease: "power2.in"
        }, 0);

        // 4. Move, scale-down, and Y-axis flip the logo lockup (0.6s to 3.0s)
        tl.to(sourceElement, {
          x: deltaX,
          y: deltaY,
          scale: deltaScale,
          rotateY: 1440,
          duration: 2.4,
          ease: "power2.inOut"
        }, 0.6);

        // 5. Fade out the glass overlay without expensive backdropFilter tweening (1.8s to 3.0s)
        tl.to(overlayRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.out"
        }, 1.8);

        // 6. Reset will-change on complete
        tl.eventCallback("onComplete", () => {
          if (overlayRef.current) {
            gsap.set(overlayRef.current, { willChange: "auto" });
          }
          if (logoLockupRef.current && subheadingRef.current) {
            gsap.set([logoLockupRef.current, subheadingRef.current], { willChange: "auto" });
          }
          sessionStorage.setItem('the_cakes_floor_intro_played', 'true');
          onComplete();
        });
      } else {
        // Fallback if elements aren't resolved in time
        tl.to(overlayRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            sessionStorage.setItem('the_cakes_floor_intro_played', 'true');
            onComplete();
          }
        });
      }
    });

    return () => {
      isMounted = false;
      if (tl) {
        tl.kill();
      }
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-transparent backdrop-blur-[20px] select-none overflow-hidden"
      style={{ perspective: 1200 }}
    >
      <div className="flex flex-col items-center justify-center text-center px-4 max-w-4xl">
        {/* Large Centered Logo Lockup (Matches side-by-side alignment of the navbar) */}
        <div
          ref={logoLockupRef}
          className="flex items-center gap-4 sm:gap-6 md:gap-8 shrink-0 mb-6 sm:mb-8"
          style={{ transformOrigin: "center center", backfaceVisibility: "hidden" }}
        >
          <img 
            src="/logo.png" 
            alt="The Cakes Floor Logo" 
            className="h-20 w-20 sm:h-28 sm:w-28 md:h-44 md:w-44 object-contain" 
          />
          <div className="flex flex-col justify-center gap-0 leading-[0.82] select-none font-display text-left">
            <span 
              className="font-extrabold tracking-[0.08em] text-white text-glow uppercase text-xl sm:text-3xl md:text-5xl lg:text-6xl" 
              style={{ fontFamily: "'Open Sauce One', sans-serif" }}
            >
              THE
            </span>
            <span 
              className="font-extrabold tracking-[0.08em] text-[#ffb954] text-glow uppercase text-xl sm:text-3xl md:text-5xl lg:text-6xl" 
              style={{ fontFamily: "'Open Sauce One', sans-serif" }}
            >
              CAKES
            </span>
            <span 
              className="font-extrabold tracking-[0.08em] text-[#ffb954] text-glow uppercase text-xl sm:text-3xl md:text-5xl lg:text-6xl" 
              style={{ fontFamily: "'Open Sauce One', sans-serif" }}
            >
              FLOOR
            </span>
          </div>
        </div>
        
        {/* Expanded Subheading styled in all-caps Cinzel font with wide letter-spacing */}
        <h2
          ref={subheadingRef}
          className="text-[10px] sm:text-lg md:text-3xl text-primary font-medium select-none flex flex-wrap justify-center items-center"
          style={{ letterSpacing: "0.25em" }}
        >
          {chars}
        </h2>
      </div>
    </div>
  );
};
