import React, { useState, useMemo, useEffect } from 'react';
import { CERTIFICATES_DATA } from '../constants';
import { LeftArrowIcon, RightArrowIcon } from './icons';

const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const canLoop = CERTIFICATES_DATA.length > 1;

  const extendedCertificates = useMemo(() => {
    if (!canLoop) return CERTIFICATES_DATA;
    const firstClone = CERTIFICATES_DATA[0];
    const lastClone = CERTIFICATES_DATA[CERTIFICATES_DATA.length - 1];
    return [lastClone, ...CERTIFICATES_DATA, firstClone];
  }, [canLoop]);
  
  useEffect(() => {
    if (!transitionEnabled) {
      // Re-enable transitions after the jump has been rendered.
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    }
  }, [currentIndex, transitionEnabled]);

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(extendedCertificates.length - 2);
    } else if (currentIndex === extendedCertificates.length - 1) {
      setTransitionEnabled(false);
      setCurrentIndex(1);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  if (!CERTIFICATES_DATA || CERTIFICATES_DATA.length === 0) {
    return null;
  }

  const filmStripStyle = canLoop
    ? {
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: transitionEnabled ? 'transform 500ms ease-in-out' : 'none',
      }
    : {
        transform: `translateX(0%)`
      };

  return (
    <section id="certificates" className="py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Certificates</h2>
      </div>
      <div className="relative max-w-4xl mx-auto">
        {/* Viewport for the slider */}
        <div className="overflow-hidden">
          {/* Film strip container that slides */}
          <div
            className="flex"
            style={filmStripStyle}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedCertificates.map((certificate, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                <div className="flex flex-col items-center gap-6">
                  {/* Certificate Image Container */}
                  <div className="w-full h-[450px] md:h-[550px] bg-[#303632] rounded-2xl border border-solid border-[#4a5c4f] glow-border p-4">
                    <img
                      src={certificate.imageUrl}
                      alt={certificate.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Certificate Title */}
                  <h3 className="text-xl font-semibold text-white mt-4 text-center h-14 flex items-center justify-center">
                    {certificate.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - only show if there's more than one certificate */}
        {canLoop && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-10 p-3 rounded-full bg-[#303632]/50 hover:bg-[#404642] transition-colors"
              aria-label="Previous certificate"
            >
              <LeftArrowIcon className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-10 p-3 rounded-full bg-[#303632]/50 hover:bg-[#404642] transition-colors"
              aria-label="Next certificate"
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