import React, { useEffect, useRef, useState } from 'react';
import './SmokeEffect.css';

const SmokeEffect = () => {
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    let particleCount = 0;
    const maxParticles = 50; 
    const particleArray = [];

    const handleMouseMove = (e) => {
      // Create 3-5 particles at once for a thicker smoke trail
      const particlesToCreate = Math.floor(Math.random() * 3) + 3;
      
      for (let i = 0; i < particlesToCreate; i++) {
        if (particleCount < maxParticles) {
          const newParticle = {
            id: Date.now() + Math.random(),
            x: e.clientX + (Math.random() - 0.5) * 30,
            y: e.clientY + (Math.random() - 0.5) * 30,
            size: Math.random() * 40 + 20, // Much larger particles (20-60px)
            lifetime: Math.random() * 2000 + 1500,
            opacity: Math.random() * 0.6 + 0.4,
            xSpread: (Math.random() - 0.5) * 10,
            speed: Math.random() * 0.8 + 0.5
          };
          particleArray.push(newParticle);
          particleCount++;
        }
      }
      setParticles([...particleArray]);
    };

    // Animation frame for particle movement
    let animationFrame;
    const animateParticles = () => {
      const now = Date.now();
      const updatedParticles = particleArray.filter(particle => {
        return now - particle.id < particle.lifetime;
      });

      // Update positions
      updatedParticles.forEach(particle => {
        particle.y -= particle.speed;
        particle.x += particle.xSpread * 0.2;
        particle.opacity -= 0.0015;
        particle.size += 0.2; // Grow faster
      });

      setParticles([...updatedParticles]);
      particleArray.length = 0;
      particleArray.push(...updatedParticles);
      particleCount = particleArray.length;

      animationFrame = requestAnimationFrame(animateParticles);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrame = requestAnimationFrame(animateParticles);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={containerRef} className="smoke-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="smoke-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: `translate(-50%, -50%)`,
            animationDuration: `${particle.lifetime}ms`,
            background: `rgba(220, 220, 220, ${particle.opacity})`
          }}
        />
      ))}
    </div>
  );
};

export default SmokeEffect;