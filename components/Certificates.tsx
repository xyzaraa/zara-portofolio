
import React, { useState, useMemo, useEffect } from 'react';
import { CERTIFICATES_DATA } from '../constants';
import { LeftArrowIcon, RightArrowIcon } from './icons';

const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const canLoop = CERTIFICATES_DATA.length > 1;

  const extendedCertificates = useMemo(() => {
    if (!canLoop) return CERTIFICATES_DATA;
    // Clone first and last items for infinite loop effect
    const firstClone = CERTIFICATES_DATA[0];
    const lastClone = CERTIFICATES_DATA[CERTIFICATES_DATA.length - 1];
    return [lastClone, ...CERTIFICATES_DATA, firstClone];
  }, [canLoop]);
  
  // This effect is to re-enable transitions after a "jump" (e.g., from last clone to first item)
  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    }
  }, [transitionEnabled]);

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      // Jump from the last clone to the actual last item
      setTransitionEnabled(false);
      setCurrentIndex(CERTIFICATES_DATA.length);
    } else if (currentIndex === extendedCertificates.length - 1) {
      // Jump from the first clone to the actual first item
      setTransitionEnabled(false);
      setCurrentIndex(1);
    }
  };

  const goToPrevious = () => {
    if (!transitionEnabled) return;
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  const goToNext = () => {
    if (!transitionEnabled) return;
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  if (!CERTIFICATES_DATA || CERTIFICATES_DATA.length === 0) {
    return null;
  }

  const getDisplayIndex = () => {
    if (!canLoop) return currentIndex + 1;
    if (currentIndex === 0) return CERTIFICATES_DATA.length;
    if (currentIndex === extendedCertificates.length - 1) return 1;
    return currentIndex;
  };

  return (
    <section id="certificates" className="py-24">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">Certificates</h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {canLoop && (
          <div className="text-center mb-4 text-lg font-semibold text-white tracking-widest" aria-live="polite">
            {getDisplayIndex()} / {CERTIFICATES_DATA.length}
          </div>
        )}

        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {extendedCertificates.map((certificate, index) => {
            const offset = index - currentIndex;
            const isVisible = Math.abs(offset) <= 1; // Show current, next, and previous

            const cardStyle: React.CSSProperties = {
              position: 'absolute',
              width: 'clamp(300px, 60%, 800px)',
              transform: `translateX(${offset * 45}%) scale(${offset === 0 ? 1 : 0.7})`,
              filter: `blur(${offset === 0 ? '0px' : '5px'})`,
              opacity: isVisible ? 1 : 0,
              zIndex: extendedCertificates.length - Math.abs(offset),
              transition: transitionEnabled ? 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
              pointerEvents: offset === 0 ? 'auto' : 'none',
            };
            
            return (
              <div
                key={index}
                style={cardStyle}
                onTransitionEnd={offset === 0 ? handleTransitionEnd : undefined}
                aria-hidden={offset !== 0}
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="w-full h-[400px] md:h-[500px] bg-[#303632] rounded-2xl border border-solid border-[#4a5c4f] glow-border p-4">
                    <img
                      src={certificate.imageUrl}
                      alt={certificate.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 
                    className="text-xl font-semibold text-white mt-2 text-center h-14 flex items-center justify-center transition-opacity duration-300"
                    style={{ opacity: offset === 0 ? 1 : 0 }}
                  >
                    {certificate.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {canLoop && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 z-20 p-3 rounded-full bg-[#303632]/50 hover:bg-[#404642] transition-colors disabled:opacity-50"
              aria-label="Previous certificate"
              disabled={!transitionEnabled}
            >
              <LeftArrowIcon className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 z-20 p-3 rounded-full bg-[#303632]/50 hover:bg-[#404642] transition-colors disabled:opacity-50"
              aria-label="Next certificate"
              disabled={!transitionEnabled}
            >
              <RightArrowIcon className="w-8 h-8 text-white" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Certificates;
