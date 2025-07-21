import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => (
  <div className="bg-[#303632] p-8 rounded-2xl border border-solid border-[#4a5c4f] glow-border hover:-translate-y-2 transition-transform duration-300">
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
      title: 'Data Visualization',
      description: 'Present data in a clear and engaging way using charts, dashboards, and visuals that anyone can understand.',
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="text-center mb-12">
        <h2 className="text-sm font-semibold tracking-widest text-[#9EB991] uppercase">Services</h2>
        <p className="text-4xl font-bold text-white mt-2">Making sense of data</p>
        <p className="text-4xl font-bold text-white">for everyone.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default Services;