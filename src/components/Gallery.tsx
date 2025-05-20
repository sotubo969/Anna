import React, { useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  const items = [
    {
      url: "image/WhatsApp Image 2025-05-19 at 12.52.29_2a559054.jpg",
      caption: "Celebration Moments",
      type: "image"
    },
    {
      url: "image/WhatsApp Video 2025-05-19 at 12.52.30_09c9cc7d.mp4",
      caption: "Birthday Joy",
      type: "video"
    },
    {
      url: "image/WhatsApp Image 2025-05-19 at 12.52.30_138031e2.jpg",
      caption: "Sweet Memories",
      type: "image"
    },
    {
      url: "image/WhatsApp Video 2025-05-19 at 12.53.29_3dc757a7.mp4",
      caption: "Special Day",
      type: "video"
    },
    {
      url: "image/WhatsApp Image 2025-05-19 at 12.53.30_30083374.jpg",
      caption: "Happy Moments",
      type: "image"
    },
    // {
    //   url: "https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //   caption: "Celebration Time",
    //   type: "image"
    // },
    {
      url: "/image/WhatsApp Video 2025-05-19 at 12.53.30_a54b7575.mp4",
      caption: "Special Video",
      type: "video"
    }
  ];
  
  const handleImageClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (!document.fullscreenElement) {
        video.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <section id="gallery" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <Sparkles className="h-12 w-12 mx-auto text-birthday-gold-500 mb-4" />
          <h2 className="title text-birthday-pink-700 mb-4">Celebration Gallery</h2>
          <p className="subtitle text-gray-600 max-w-xl mx-auto">
            A collection of beautiful moments to celebrate your special day!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {items.map((item, index) => (
            <div 
              key={index}
              className="gallery-item overflow-hidden rounded-xl shadow-md cursor-pointer animate-on-scroll"
              onClick={() => item.type === 'image' && handleImageClick(index)}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative group h-64 flex items-center justify-center bg-black">
                {item.type === "image" ? (
                  <>
                    <img 
                      src={item.url} 
                      alt={item.caption} 
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-semibold p-4 font-script text-xl">{item.caption}</p>
                    </div>
                  </>
                ) : (
                  <video
                    ref={el => videoRefs.current[index] = el}
                    src={item.url}
                    controls
                    className="w-full h-full object-cover transition-all duration-500 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoClick(index);
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-on-scroll">
          <p className="text-xl font-script text-birthday-pink-600 mb-6">
            "Every picture tells a story, and your story is filled with joy and happiness!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

