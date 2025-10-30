import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Project', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact Me', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Allow native browser anchor link navigation.
    // Smooth scrolling is handled by the `scroll-behavior: smooth` CSS rule in index.html.
    // This also ensures the URL hash is updated for shareable links.
    setIsMenuOpen(false);
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#242825]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 h-20 flex justify-between items-center">
          <div className="text-lg font-semibold tracking-wider text-[#EAEAEA]">
            ニン・イージョー
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[#BDBDBD] hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="z-50 text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Container */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={toggleMenu}
        />
        
        {/* Sidebar Panel */}
        <nav
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-[#242825] shadow-lg p-8 pt-24 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-2xl font-light text-[#BDBDBD] hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;