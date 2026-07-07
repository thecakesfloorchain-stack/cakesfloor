import { useEffect } from 'react';

export function useLazyBackgrounds(dependency?: any) {
  useEffect(() => {
    const lazyBackgrounds = document.querySelectorAll('[data-bg]');
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const bgUrl = target.getAttribute('data-bg');
            if (bgUrl) {
              target.style.backgroundImage = `url('${bgUrl}')`;
            }
            observer.unobserve(target);
          }
        });
      }, {
        rootMargin: '200px',
      });
      
      lazyBackgrounds.forEach((bg) => observer.observe(bg));
      
      return () => {
        lazyBackgrounds.forEach((bg) => observer.unobserve(bg));
      };
    } else {
      // Fallback for older browsers
      lazyBackgrounds.forEach((bg) => {
        const target = bg as HTMLElement;
        const bgUrl = target.getAttribute('data-bg');
        if (bgUrl) {
          target.style.backgroundImage = `url('${bgUrl}')`;
        }
      });
    }
  }, [dependency]);
}
