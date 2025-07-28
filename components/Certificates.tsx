import React, { useState, useMemo, useEffect } from 'react';
import { CERTIFICATES_DATA } from '../constants';
import { LeftArrowIcon, RightArrowIcon } from './icons';

const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const canLoop = CERTIFICATES_DATA.length > 1;

  // Memoize the extended array for the infinite loop effect
  const extendedCertificates = useMemo(() => {
    if (!canLoop) return CERTIFICATES_DATA;
    const firstClone = CERTIFICATES_DATA[0];
    const lastClone = CERTIFICATES_DATA[CERTIFICATES_DATA.length - 1];
    return [lastClone, ...CERTIFICATES_DATA, firstClone];
  }, [canLoop]);
  
  // Effect to re-enable transitions after a "jump" to create the loop
  useEffect(() => {
    if (!transitionEnabled) {
      // Use requestAnimationFrame to ensure the style change has been flushed
      // before re-enabling transitions.
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    }
  }, [transitionEnabled]);

  // Handler for when the CSS transition ends
  const handleTransitionEnd = () => {
    // If we are at the first clone (displaying the last item)
    if (currentIndex === 0) {
      setTransitionEnabled(false); // Disable transition for the jump
      setCurrentIndex(CERTIFICATES_DATA.length); // Jump to the actual last item
    } 
    // If we are at the last clone (displaying the first item)
    else if (currentIndex === extendedCertificates.length - 1) {
      setTransitionEnabled(false); // Disable transition for the jump
      setCurrentIndex(1); // Jump to the actual first item
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
        
        {/* Carousel Container */}
        <div className="relative h-[550px] md:h-[650px] flex items-center justify-center overflow-hidden">
          {extendedCertificates.map((certificate, index) => {
            const offset = index - currentIndex;
            const isVisible = Math.abs(offset) <= 1;

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

        {/* Navigation Controls Below Carousel */}
        {canLoop && (
          <div className="flex items-center justify-center gap-8 mt-4">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full bg-[#303632]/80 hover:bg-[#404642] transition-colors disabled:opacity-50"
              aria-label="Previous certificate"
              disabled={!transitionEnabled}
            >
              <LeftArrowIcon className="w-6 h-6 text-white" />
            </button>
            
            <div className="text-lg font-semibold text-white tracking-widest" aria-live="polite">
              {getDisplayIndex()} / {CERTIFICATES_DATA.length}
            </div>
            
            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-[#303632]/80 hover:bg-[#404642] transition-colors disabled:opacity-50"
              aria-label="Next certificate"
              disabled={!transitionEnabled}
            >
              <RightArrowIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;