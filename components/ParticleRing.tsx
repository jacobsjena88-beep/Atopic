import React, { useEffect, useRef } from 'react';

const ParticleRing: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    // Particles now have a color property to mix blue/purple/white
    let particles: { x: number; y: number; size: number; angle: number; speed: number; radius: number; opacity: number; color: string }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = window.innerWidth < 768 ? 300 : 600;
      
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        // Tighter ring distribution
        const minDim = Math.min(canvas.width, canvas.height);
        const baseRadius = minDim * 0.3; 
        const spread = Math.random() * (minDim * 0.2); 
        const radius = baseRadius + (Math.random() - 0.5) * spread * 3;

        // Color variation: Blue, Purple, White
        const colors = [
            'rgba(147, 197, 253,', // Blue-300
            'rgba(167, 139, 250,', // Violet-400
            'rgba(255, 255, 255,'  // White
        ];
        const selectedColor = colors[Math.floor(Math.random() * colors.length)];

        particles.push({
          x: canvas.width / 2 + Math.cos(angle) * radius,
          y: canvas.height / 2 + Math.sin(angle) * radius,
          size: Math.random() * 2.5,
          angle: angle,
          radius: radius,
          speed: 0.0002 + Math.random() * 0.0005,
          opacity: Math.random() * 0.5 + 0.1,
          color: selectedColor
        });
      }
    };

    const draw = () => {
      // Clear with very slight opacity for trails, but keep it clean
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.angle += p.speed;
        p.x = canvas.width / 2 + Math.cos(p.angle) * p.radius;
        p.y = canvas.height / 2 + Math.sin(p.angle) * p.radius;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    resizeCanvas();
    createParticles();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ParticleRing;
