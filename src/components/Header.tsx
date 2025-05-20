import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Heart className={`h-6 w-6 mr-2 ${scrolled ? 'text-birthday-pink-600' : 'text-white'}`} />
          <h1 className={`font-script text-xl font-bold ${scrolled ? 'text-birthday-pink-700' : 'text-white'}`}>
            Annabelle's Day
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#wishes" 
                className={`font-medium hover:text-birthday-pink-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Wishes
              </a>
            </li>
            <li>
              <a 
                href="#exam" 
                className={`font-medium hover:text-birthday-pink-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Good Luck
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                className={`font-medium hover:text-birthday-pink-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#message" 
                className={`font-medium hover:text-birthday-pink-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Message
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;