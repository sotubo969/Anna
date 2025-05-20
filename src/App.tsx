import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Wishes from './components/Wishes';
import Gallery from './components/Gallery';
import BirthdayCake from './components/BirthdayCake';
import Footer from './components/Footer';
import Message from './components/Message';
import ExamWishes from './components/ExamWishes';
import Confetti from './components/Confetti';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<HTMLElement[]>([]);

  useEffect(() => {
    // Initial confetti after a short delay
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 800);

    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      observer.observe(el);
      setAnimatedElements(prev => [...prev, el as HTMLElement]);
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Trigger confetti on button click
  const triggerConfetti = () => {
    setShowConfetti(false);
    setTimeout(() => setShowConfetti(true), 100);
  };

  return (
    <div className="relative min-h-screen">
      {showConfetti && <Confetti />}
      <Header />
      <main>
        <Hero triggerConfetti={triggerConfetti} />
        <Wishes />
        <ExamWishes />
        <BirthdayCake triggerConfetti={triggerConfetti} />
        <Gallery />
        <Message />
      </main>
      <Footer />
    </div>
  );
}

export default App;