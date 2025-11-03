import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface ParticleCanvasProps {
  theme: string;
}

const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -Infinity, y: -Infinity, radius: 150 };

    const isDarkMode = theme === 'dark';
    const particleColor = isDarkMode ? '255, 0, 255' : '0, 191, 255'; // RGB
    const lineColor = particleColor;

    // 🔹 Resize canvas dynamically
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      angle: number;
      rotationSpeed: number;
      distance: number = 0;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1;
        this.density = Math.random() * 30 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.002; // smooth rotation
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = `rgba(${particleColor}, 0.9)`;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.angle += this.rotationSpeed; // rotate slowly

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        this.distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / this.distance;
        const forceDirectionY = dy / this.distance;
        const maxDistance = mouse.radius;
        const force = (maxDistance - this.distance) / maxDistance;
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;

        if (this.distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            const dxReturn = this.x - this.baseX;
            this.x -= dxReturn / 10;
          }
          if (this.y !== this.baseY) {
            const dyReturn = this.y - this.baseY;
            this.y -= dyReturn / 10;
          }
        }
      }
    }

    // 🔹 Initialize particles
    const init = () => {
      particles = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      if (numberOfParticles > 200) numberOfParticles = 200; // cap for performance
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    // 🔹 Connect lines between nearby particles
    const connect = () => {
      if (!ctx) return;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacityValue = 1 - distance / 120;
            ctx.strokeStyle = `rgba(${lineColor}, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // 🔹 Animate loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    // 🔹 Mouse move + leave
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(mouse, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(mouse, {
        x: -Infinity,
        y: -Infinity,
        duration: 1,
        ease: 'power2.in',
      });
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleCanvas;
