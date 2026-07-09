import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Home, User, Cake, Image, Star, Menu, X } from 'lucide-react';
import { NavBar } from '../ui/tubelight-navbar';

export interface NavbarProps {
  introCompleted: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ introCompleted }) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);
  const location = useLocation();

  // Detect mobile viewport size to conditionally render mobile DOM elements
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const lastScrollY = lastScrollYRef.current;
          
          // Scrolled styling (only update state if value has changed)
          const isScrolled = currentScrollY > 50;
          setScrolled(prev => prev !== isScrolled ? isScrolled : prev);

          // Mobile vs. Desktop logic
          if (isMobile) {
            // Mobile-specific scroll behavior:
            // 1. Stays fixed. Fades out/becomes hidden as user scrolls down even slightly (scrollY > 10).
            // 2. Only reappears when the user scrolls back to the very top (scrollY <= 10).
            if (currentScrollY > 10) {
              if (!mobileMenuOpen) {
                setVisible(prev => prev !== false ? false : prev);
              }
            } else {
              setVisible(prev => prev !== true ? true : prev);
            }
          } else {
            // Desktop/Tablet behavior (md breakpoint and above):
            // Hide on scroll down, show on scroll up past 80% threshold.
            const heroHeight = window.innerHeight;
            const threshold = heroHeight * 0.8;
            
            if (currentScrollY <= threshold) {
              setVisible(prev => prev !== true ? true : prev);
            } else {
              if (currentScrollY > lastScrollY) {
                setVisible(prev => prev !== false ? false : prev);
              } else {
                setVisible(prev => prev !== true ? true : prev);
              }
            }
          }

          lastScrollYRef.current = currentScrollY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen, isMobile]);

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Menu', url: '/menu', icon: Cake },
    { name: 'Gallery', url: '/gallery', icon: Image },
    { name: 'Reviews', url: '/reviews', icon: Star },
    { name: 'Contact', url: '/contact', icon: Phone },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ease-out ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } ${
          scrolled ? 'glass-nav py-2.5 shadow-lg' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full gap-4">
          {/* Logo (Left) */}
          <Link 
            id="navbar-logo-lockup"
            to="/" 
            className={`flex items-center gap-3 shrink-0 transition-opacity duration-100 ${
              introCompleted ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`} 
              alt="The Cakes Floor Logo" 
              className={`transition-all duration-300 object-contain ${scrolled ? 'h-12' : 'h-16'}`} 
            />
            <div 
              className={`flex flex-col justify-center gap-0 transition-all duration-300 leading-[0.85] select-none font-display ${
                scrolled ? 'h-12' : 'h-16'
              }`}
            >
              <span 
                className={`font-extrabold tracking-[0.08em] text-white text-glow uppercase transition-all duration-300 ${scrolled ? 'text-xs' : 'text-sm'}`} 
                style={{ fontFamily: "'Open Sauce One', sans-serif" }}
              >
                THE
              </span>
              <span 
                className={`font-extrabold tracking-[0.08em] text-[#ffb954] text-glow uppercase transition-all duration-300 ${scrolled ? 'text-xs' : 'text-sm'}`} 
                style={{ fontFamily: "'Open Sauce One', sans-serif" }}
              >
                CAKES
              </span>
              <span 
                className={`font-extrabold tracking-[0.08em] text-[#ffb954] text-glow uppercase transition-all duration-300 ${scrolled ? 'text-xs' : 'text-sm'}`} 
                style={{ fontFamily: "'Open Sauce One', sans-serif" }}
              >
                FLOOR
              </span>
            </div>
          </Link>

          {/* --- DESKTOP VIEW ONLY (md:flex) --- */}
          <div className="hidden md:flex flex-grow items-center justify-between ml-8">
            {/* Inline Tubelight Navigation Bar (Center) */}
            <div className="flex-1 flex justify-center">
              <NavBar items={navItems} />
            </div>

            {/* Quick Contact CTA (Right) */}
            <div className="shrink-0">
              <Link
                to="/contact"
                className="bg-primary text-on-primary font-body text-xs uppercase tracking-[0.2em] font-semibold px-5 py-2.5 rounded-full hover:brightness-110 active:scale-95 transition-all button-glow flex items-center gap-1.5"
              >
                <Phone size={12} strokeWidth={2.5} />
                <span>Contact</span>
              </Link>
            </div>
          </div>

          {/* --- MOBILE VIEW ONLY (md:hidden) --- */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-[#e5e2e0] hover:text-primary hover:border-primary/30 transition-all duration-300 active:scale-90"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY (md:hidden) --- */}
      {isMobile && mobileMenuOpen && (
        <div 
          className={`fixed left-0 w-full md:hidden bg-[#0c0c0c]/98 backdrop-blur-xl border-b border-white/5 shadow-2xl flex flex-col justify-center items-center transition-all duration-300 z-40 ${
            scrolled ? 'top-16 h-[calc(100vh-64px)]' : 'top-20 h-[calc(100vh-80px)]'
          }`}
        >
          <nav className="flex flex-col gap-3 text-center py-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.url || (item.url !== '/' && location.pathname.startsWith(item.url));
              return (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`flex items-center gap-3 text-sm uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                    isActive ? 'text-primary bg-white/5 border border-primary/20' : 'text-[#e5e2e0]/80 hover:text-primary'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-primary' : 'text-[#e5e2e0]/60'} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
};
