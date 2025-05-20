import React from 'react';
import { Sparkles, Heart, Star, PartyPopper } from 'lucide-react';

const Wishes: React.FC = () => {
  const wishCards = [
    {
      icon: <Sparkles className="h-10 w-10 text-birthday-gold-500" />,
      title: "Joyful Celebrations",
      text: "May your birthday be as wonderful and special as you are. Here's to a day full of laughter and celebration!",
      delay: "animate-fade-in-delay-1"
    },
    {
      icon: <Heart className="h-10 w-10 text-birthday-pink-500" />,
      title: "Love & Happiness",
      text: "Wishing you a birthday filled with love, happiness, and all the things that bring joy to your heart.",
      delay: "animate-fade-in-delay-2"
    },
    {
      icon: <Star className="h-10 w-10 text-birthday-gold-600" />,
      title: "Bright Future",
      text: "May the coming year be even more amazing than the last. Your future is as bright and beautiful as you are!",
      delay: "animate-fade-in-delay-3"
    },
    {
      icon: <PartyPopper className="h-10 w-10 text-birthday-pink-600" />,
      title: "Special Moments",
      text: "Here's to creating more beautiful memories in the year ahead. May your birthday be the start of a wonderful journey.",
      delay: "animate-fade-in-delay-3"
    }
  ];

  return (
    <section id="wishes" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="title text-birthday-pink-700 mb-4">Birthday Wishes</h2>
          <p className="subtitle text-gray-600 max-w-xl mx-auto">
            Sending you the warmest wishes on your special day, Annabelle!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wishCards.map((card, index) => (
            <div 
              key={index} 
              className={`card hover:shadow-xl animate-on-scroll ${index % 2 === 0 ? 'hover:bg-birthday-pink-50' : 'hover:bg-birthday-gold-50'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center p-2">
                <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{card.title}</h3>
                <p className="text-gray-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-2xl font-script text-birthday-pink-600">
            "May this special day bring you endless joy and countless reasons to smile!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Wishes;