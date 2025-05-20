import React from 'react';
import { Heart, Cake, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-birthday-pink-800 text-white py-12">
      <div className="container-custom">
        <div className="text-center animate-on-scroll">
          <div className="flex justify-center space-x-4 mb-6">
            <Heart className="h-6 w-6 text-birthday-pink-200" />
            <Cake className="h-6 w-6 text-birthday-pink-200" />
            <BookOpen className="h-6 w-6 text-birthday-pink-200" />
          </div>
          
          <h3 className="font-script text-3xl mb-4">Happy Birthday Annabelle!</h3>
          
          <p className="text-birthday-pink-100 max-w-md mx-auto mb-8">
            Wishing you a day filled with joy and success in your exam. 
            May all your dreams and wishes come true!
          </p>
          
          <div className="pt-6 border-t border-birthday-pink-700">
            <p className="text-birthday-pink-200 text-sm">
              Made with <Heart className="h-4 w-4 inline-block text-birthday-pink-300" /> for your special day
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;