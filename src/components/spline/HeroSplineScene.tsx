import React, { Suspense, lazy, useState, useEffect, useRef, Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class SplineErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("Spline error handled by boundary:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const HeroSplineScene: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const splineRef = useRef<any>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (splineRef.current && typeof splineRef.current.dispose === 'function') {
        try {
          splineRef.current.dispose();
        } catch (e) {
          console.warn("Error disposing Spline instance on unmount:", e);
        }
      }
    };
  }, []);

  const videoFallback = (
    <div className="w-full h-full min-h-[350px] relative flex items-center justify-center rounded-2xl overflow-hidden border border-white/5 bg-gradient-to-b from-white/5 to-transparent">
      <video
        src="/videos/Cake_rotating_with_chocolate_chips_202607021831.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );

  if (isMobile) {
    return videoFallback;
  }

  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[600px] relative flex items-center justify-center">
      {/* Loading State Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-background z-10"
          >
            <div className="w-12 h-12 border-t-2 border-primary border-r-2 rounded-full animate-spin" />
            <p className="text-xs uppercase tracking-[0.25em] text-primary text-glow animate-pulse">
              Initializing 3D Model...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <SplineErrorBoundary fallback={videoFallback}>
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center bg-background">
              <div className="w-12 h-12 border-t-2 border-primary border-r-2 rounded-full animate-spin" />
            </div>
          }
        >
          {/* Using a verified, highly compatible Spline scene link */}
          <Spline
            scene="https://prod.spline.design/kZmsxO5Urw8gTeKw/scene.splinecode"
            className="w-full h-full"
            onLoad={(splineApp) => {
              splineRef.current = splineApp;
              setIsLoaded(true);
            }}
            onError={() => {
              console.warn("Spline onLoad error trigger");
              // Fallback is handled automatically by the boundary when rendering errors occur,
              // but we also log it here for sanity.
            }}
          />
        </Suspense>
      </SplineErrorBoundary>
    </div>
  );
};
