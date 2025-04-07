
import { useEffect, useRef } from "react";
import anime from "animejs";

interface Particle {
  element: HTMLDivElement;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  vx: number;
  vy: number;
  opacity: number;
}

export function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const particleCount = Math.min(Math.floor(containerWidth * containerHeight / 20000), 50);
    
    const colors = ['#3b82f6', '#60a5fa', '#93c5fd', '#2563eb'];
    
    // Clear previous particles
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    particlesRef.current = [];
    
    // Create new particles
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 4 + 2;
      const particle = document.createElement('div');
      
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.className = "absolute rounded-full";
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.opacity = (Math.random() * 0.5 + 0.3).toString();
      
      container.appendChild(particle);
      
      particlesRef.current.push({
        element: particle,
        x,
        y,
        size,
        color,
        speed: Math.random() * 1 + 0.5,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
    
    // Animate particles
    const animate = () => {
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce off edges
        if (p.x < 0 || p.x > containerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > containerHeight) p.vy *= -1;
        
        p.element.style.left = `${p.x}px`;
        p.element.style.top = `${p.y}px`;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      particlesRef.current = [];
    };
  }, []);
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden z-0 pointer-events-none" />
  );
}
