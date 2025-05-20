import React, { useState, useEffect } from 'react';
import { Cake } from 'lucide-react';

interface BirthdayCakeProps {
  triggerConfetti: () => void;
}

const BirthdayCake: React.FC<BirthdayCakeProps> = ({ triggerConfetti }) => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [cakeRotation, setCakeRotation] = useState(0);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setCakeRotation(prev => (prev + 0.5) % 360);
    }, 50);

    return () => clearInterval(rotationInterval);
  }, []);

  useEffect(() => {
    if (candlesBlown) {
      const interval = setInterval(() => {
        setSparkles(prev => {
          const newSparkle = {
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100
          };
          return [...prev.slice(-20), newSparkle];
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [candlesBlown]);
  
  const blowCandles = () => {
    setCandlesBlown(true);
    triggerConfetti();
    setTimeout(() => {
      setShowWish(true);
    }, 1000);
  };
  
  const resetCake = () => {
    setCandlesBlown(false);
    setShowWish(false);
    setSparkles([]);
  };
  
  return (
    <section className="section bg-birthday-pink-100 relative overflow-hidden min-h-screen flex items-center justify-center perspective-1000">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,77,109,0.1),transparent)] animate-pulse"></div>
      
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute w-2 h-2 bg-birthday-gold-400 rounded-full animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animation: 'sparkle 1s ease-out forwards'
          }}
        />
      ))}
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-float">
          <Cake className="h-16 w-16 mx-auto text-birthday-pink-600 mb-4 animate-spin-slow" />
          <h2 className="title text-birthday-pink-700 mb-4 animate-gradient-text">Make a Wish!</h2>
          <p className="subtitle text-gray-600 max-w-xl mx-auto backdrop-blur-sm">
            It's not a birthday without cake and wishes. Blow out the candles!
          </p>
        </div>
        
        <div className="flex justify-center mb-16">
          <div 
            className="relative w-96 h-96 transform-gpu transition-transform duration-1000 hover:scale-110"
            style={{ transform: `rotateY(${cakeRotation}deg)` }}
          >
            {/* Cake base with 3D effect */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-br from-birthday-pink-400 to-birthday-pink-500 rounded-b-3xl rounded-t-lg transform-gpu rotate-3d-cake shadow-neon"></div>
            <div className="absolute bottom-0 left-12 right-12 h-56 bg-gradient-to-br from-birthday-pink-300 to-birthday-pink-400 rounded-t-lg transform-gpu rotate-3d-cake-middle shadow-neon"></div>
            <div className="absolute bottom-56 left-24 right-24 h-32 bg-gradient-to-br from-birthday-pink-200 to-birthday-pink-300 rounded-t-lg transform-gpu rotate-3d-cake-top shadow-neon"></div>
            
            {/* Holographic decorations */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer"></div>
            
            {/* Interactive frosting */}
            <div className="absolute bottom-32 left-16 right-16 flex justify-around">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 bg-birthday-gold-300 rounded-full animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            
            {/* Candles with dynamic flames */}
            {!candlesBlown && (
              <>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="absolute" style={{ 
                    left: `${25 + i * 25}%`,
                    bottom: '80%'
                  }}>
                    <div className="w-2 h-16 bg-gradient-to-t from-birthday-gold-400 to-birthday-gold-300"></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 animate-flame">
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 bg-birthday-gold-500 rounded-full blur-sm animate-flicker"></div>
                          <div className="absolute inset-1 bg-birthday-gold-300 rounded-full blur-md animate-flicker-delay"></div>
                          <div className="absolute inset-2 bg-white rounded-full blur-lg animate-flicker-fast"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            
            {/* Holographic text */}
            <div className="absolute bottom-20 left-0 right-0 text-center transform-gpu">
              <p className="font-script text-2xl text-transparent bg-clip-text bg-gradient-to-r from-birthday-pink-200 via-white to-birthday-pink-200 animate-gradient">
                Happy Birthday
              </p>
              <p className="font-script text-3xl text-transparent bg-clip-text bg-gradient-to-r from-birthday-gold-200 via-white to-birthday-gold-200 animate-gradient-reverse">
                Annabelle!
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center relative z-20">
          {!candlesBlown ? (
            <button 
              onClick={blowCandles}
              className="btn-primary animate-pulse-glow relative group overflow-hidden"
            >
              <span className="relative z-10">Blow Out the Candles</span>
              <div className="absolute inset-0 bg-gradient-to-r from-birthday-pink-400 via-birthday-pink-600 to-birthday-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          ) : (
            <div className="animate-scale-up">
              {showWish ? (
                <>
                  <p className="text-3xl font-script text-transparent bg-clip-text bg-gradient-to-r from-birthday-pink-600 via-birthday-gold-400 to-birthday-pink-600 animate-gradient mb-6">
                    "Wishing you a year filled with success, happiness, and everything your heart desires!"
                  </p>
                  <button 
                    onClick={resetCake}
                    className="btn-secondary hover:shadow-neon transition-all duration-300"
                  >
                    Make Another Wish
                  </button>
                </>
              ) : (
                <p className="text-2xl font-script text-birthday-pink-700 animate-float">
                  Make a wish...
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BirthdayCake;