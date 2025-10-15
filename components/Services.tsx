import React, { useState, useEffect, useRef } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => (
  <div className="bg-[#303632] p-8 rounded-2xl border border-solid border-[#4a5c4f] glow-border hover:-translate-y-2 transition-transform duration-300 h-full">
    <h3 className="text-2xl font-bold text-[#9EB991] mb-4">{title}</h3>
    <p className="text-[#BDBDBD]">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: 'Data Analysis',
      description: 'Collect, explore, and interpret data to extract valuable insights that support better decision-making.',
    },
    {
      title: 'Machine Learning',
      description: 'Build and train predictive models to solve problems, automate processes, and uncover hidden patterns.',
    },
    {
      title: 'Data Engineering',
      description: 'Process, clean, and transform raw data into structured formats for analysis and reporting.',
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
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
        threshold: 0.1, // Animate when 10% of the section is visible
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
    <section id="services" className="py-24" ref={sectionRef}>
      <div className={`text-center mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-sm font-semibold tracking-widest text-[#9EB991] uppercase">Services</h2>
        <p className="text-4xl font-bold text-white mt-2">Making sense of data</p>
        <p className="text-4xl font-bold text-white">for everyone.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
           <div
            key={service.title}
            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <ServiceCard title={service.title} description={service.description} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;