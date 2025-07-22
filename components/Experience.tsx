import React, { useState, useEffect, useRef } from 'react';
import { EXPERIENCE_DATA } from '../constants';
import type { ExperienceItem } from '../types';

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Animate in and out
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Animate when 20% of the card is visible
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);


  return (
    <div className="flex gap-8" ref={cardRef}>
      <div className={`w-1/4 text-right pr-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <h4 className="text-lg font-semibold text-white">{item.year}</h4>
      </div>
      <div className={`relative w-3/4 pl-8 border-l-2 border-[#4a5c4f] transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <div className={`absolute -left-[10px] top-1 w-4 h-4 bg-[#242825] border-2 border-[#9EB991] rounded-full transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}></div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#9EB991]">{item.title}</h3>
          <p className="text-md text-[#BDBDBD] mb-4">{item.company}</p>
          <ul className="list-disc list-inside space-y-2 text-[#BDBDBD]">
            {item.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTitleVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );
     const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-24" ref={sectionRef}>
      <div className={`text-center mb-16 transition-all duration-700 ease-out ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl font-bold text-white">Experience</h2>
        <div className="mt-4 w-24 h-1 bg-[#9EB991] mx-auto rounded-full"></div>
      </div>
      <div className="flex flex-col gap-4">
        {EXPERIENCE_DATA.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;