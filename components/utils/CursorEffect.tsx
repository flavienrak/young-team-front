'use client';

import React from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  color: string;
}

const CursorEffect: React.FC = () => {
  const [bubbles, setBubbles] = React.useState<Bubble[]>([]);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const id = Date.now() + Math.random();

      const colors = ['bubble-blue', 'bubble-pink'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      const newBubble: Bubble = {
        id,
        x: e.clientX,
        y: e.clientY,
        color,
      };

      setBubbles((prev) => [...prev, newBubble]);

      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="cursor-effect-wrapper z-10 fixed pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`bubble ${bubble.color}`}
          style={{ left: bubble.x, top: bubble.y }}
        />
      ))}
    </div>
  );
};

export default CursorEffect;
