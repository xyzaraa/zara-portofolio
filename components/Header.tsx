import React from 'react';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Project', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact Me', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#242825]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 h-20 flex justify-between items-center">
        <div className="text-lg font-semibold tracking-wider text-[#EAEAEA]">
          キアラ・アザフラ
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#BDBDBD] hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;