'use client';

import React, { useEffect, useState } from 'react';

interface Drop {
  id: number;
  x: number;
  y: number;
  color: string;
}

const CursorRainEffect: React.FC = () => {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      const colors = ['drop-blue', 'drop-pink'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      const newDrop: Drop = {
        id,
        x: e.clientX,
        y: e.clientY,
        color,
      };

      setDrops((prev) => [...prev, newDrop]);

      setTimeout(() => {
        setDrops((prev) => prev.filter((d) => d.id !== id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="cursor-rain-wrapper">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className={`drop ${drop.color}`}
          style={{ left: drop.x, top: drop.y }}
        />
      ))}
    </div>
  );
};

export default CursorRainEffect;
