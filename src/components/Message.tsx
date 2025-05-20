import React, { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const Message: React.FC = () => {
  const [showFullMessage, setShowFullMessage] = useState(false);
  
  const toggleMessage = () => {
    setShowFullMessage(!showFullMessage);
  };

  return (
    <section id="message" className="section bg-birthday-pink-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 animate-on-scroll">
            <MessageCircle className="h-12 w-12 mx-auto text-birthday-pink-600 mb-4" />
            <h2 className="title text-birthday-pink-700 mb-4">A Special Message</h2>
            <p className="subtitle text-gray-600">
              A heartfelt note just for you, Annabelle
            </p>
          </div>
          
          <div 
            className={`bg-white rounded-3xl p-8 shadow-xl border-2 border-birthday-pink-200 transition-max-height duration-500 ease-in-out overflow-hidden animate-on-scroll`}
            style={{ maxHeight: showFullMessage ? '1000px' : '16rem' }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-birthday-pink-100 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-birthday-pink-600" />
              </div>
              
              <p className="font-script text-2xl text-birthday-pink-700 mb-6">Dearest Annabelle,</p>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Happy Birthday to the most amazing person I know! Today is all about celebrating the wonderful person you are and all the joy you bring to the lives of those around you.
                </p>
                
                <p>
                  I know having an exam on your birthday isn't ideal, but it just shows how strong and dedicated you are. Your commitment to your studies is truly inspiring, and I have no doubt that you'll excel in your Business Paper 2 exam!
                </p>
                
                <p>
                  After your exam, it's time to celebrate both your birthday and your accomplishment. You deserve all the happiness in the world, not just today but every day.
                </p>
                
                <p>
                  Remember to take a moment amidst the busyness to smile and appreciate yourself. You're incredible, and I'm so grateful to have you in my life.
                </p>
                
                <p>
                  Wishing you success in your exam and a birthday filled with everything that makes you happiest!
                </p>
                
                <p className="font-script text-xl text-birthday-pink-600">
                  With all my love,
                </p>
                
                <p className="font-script text-xl text-birthday-pink-600">
                  Your special someone
                </p>
              </div>
              
              {!showFullMessage && (
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
              )}
            </div>
          </div>
          
          <div className="text-center mt-6 animate-on-scroll">
            <button 
              onClick={toggleMessage}
              className="btn-secondary"
            >
              {showFullMessage ? "Show Less" : "Read Full Message"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
