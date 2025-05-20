import React, { useEffect, useRef } from 'react';

const Confetti: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Confetti particles
    const particles: Particle[] = [];
    const particleCount = 150;
    
    interface Particle {
      x: number;
      y: number;
      color: string;
      size: number;
      speed: number;
      angle: number;
      spin: number;
      shape: number; // 0 for square, 1 for circle
    }
    
    // Colors for confetti
    const colors = [
      '#FF758F', '#FFB3C1', '#FFC837', '#FFE6A0', 
      '#FFF0F3', '#FFCCD5', '#FFD45A', '#FFF8E6'
    ];
    
    // Create confetti particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        speed: Math.random() * 3 + 1,
        angle: Math.random() * 2 * Math.PI,
        spin: Math.random() * 0.2 - 0.1,
        shape: Math.random() > 0.5 ? 0 : 1
      });
    }
    
    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        p.y += p.speed;
        p.x += Math.sin(p.angle) * 2;
        p.angle += p.spin;
        
        ctx.fillStyle = p.color;
        ctx.beginPath();
        
        if (p.shape === 0) {
          // Square
          ctx.rect(p.x, p.y, p.size, p.size);
        } else {
          // Circle
          ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        }
        
        ctx.fill();
        
        // Reset particle if it goes off screen
        if (p.y > canvas.height) {
          particles[i].y = -p.size;
          particles[i].x = Math.random() * canvas.width;
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return <canvas ref={canvasRef} id="confetti-canvas" />;
};

export default Confetti;