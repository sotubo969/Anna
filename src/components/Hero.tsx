import React, { useEffect, useState } from 'react';
import { PartyPopper, Cake, Gift } from 'lucide-react';

interface HeroProps {
  triggerConfetti: () => void;
}

const Hero: React.FC<HeroProps> = ({ triggerConfetti }) => {
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Set tomorrow as the birthday date
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const difference = tomorrow.getTime() - now.getTime();
      
      if (difference > 0) {
        setCountdown({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // It's her birthday!
        setCountdown({ hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const isToday = countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-animation"></div>
      
      {/* Floating balloons */}
      <div className="absolute top-20 left-10 w-12 h-16 bg-birthday-pink-400 rounded-full animate-float" style={{ '--delay': 0 } as React.CSSProperties}></div>
      <div className="absolute top-40 right-14 w-10 h-14 bg-birthday-gold-400 rounded-full animate-float-delay-1"></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-20 bg-birthday-pink-600 rounded-full animate-float-delay-2"></div>
      <div className="absolute top-1/4 right-1/3 w-14 h-18 bg-birthday-gold-500 rounded-full animate-float-delay-3"></div>
      
      <div className="container-custom relative z-10">
        <div className="bg-white bg-opacity-90 rounded-3xl p-8 md:p-12 shadow-2xl max-w-3xl mx-auto text-center animate-scale-up">
          <div className="mb-6 inline-block">
            <Cake className="h-16 w-16 mx-auto text-birthday-pink-600 animate-wiggle" />
          </div>
          
          <h1 className="title text-birthday-pink-700 mb-4 animate-fade-in">
            Happy Birthday <br/><span className="text-birthday-gold-600">Annabelle!</span>
          </h1>
          
          <p className="subtitle text-gray-600 mb-8 animate-fade-in-delay-1">
            {isToday ? (
              "Today is your special day! Wishing you all the joy and happiness in the world."
            ) : (
              "Your special day is almost here! Just a little longer until we celebrate you."
            )}
          </p>
          
          {!isToday && (
            <div className="flex justify-center gap-4 mb-8 animate-fade-in-delay-2">
              <div className="bg-birthday-pink-100 p-4 rounded-lg w-20">
                <div className="text-3xl font-bold text-birthday-pink-700">{countdown.hours}</div>
                <div className="text-xs text-birthday-pink-500">Hours</div>
              </div>
              <div className="bg-birthday-pink-100 p-4 rounded-lg w-20">
                <div className="text-3xl font-bold text-birthday-pink-700">{countdown.minutes}</div>
                <div className="text-xs text-birthday-pink-500">Minutes</div>
              </div>
              <div className="bg-birthday-pink-100 p-4 rounded-lg w-20">
                <div className="text-3xl font-bold text-birthday-pink-700">{countdown.seconds}</div>
                <div className="text-xs text-birthday-pink-500">Seconds</div>
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-3">
            <button 
              className="btn-primary flex items-center justify-center gap-2"
              onClick={triggerConfetti}
            >
              <PartyPopper className="h-5 w-5" />
              Celebrate!
            </button>
            <a href="#wishes" className="btn-secondary flex items-center justify-center gap-2">
              <Gift className="h-5 w-5" />
              Birthday Wishes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;