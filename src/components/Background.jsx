import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Minimal stream particles moving along horizontal data tracks
    const TRACK_COUNT = 8;
    const trackY = [];
    for (let i = 0; i < TRACK_COUNT; i++) {
      trackY.push((height / (TRACK_COUNT + 1)) * (i + 1));
    }

    const packets = [];
    const PACKET_COUNT = 24;
    for (let i = 0; i < PACKET_COUNT; i++) {
      packets.push({
        trackIndex: Math.floor(Math.random() * TRACK_COUNT),
        x: Math.random() * width,
        speed: 1.2 + Math.random() * 2.2,
        length: 20 + Math.random() * 45,
        opacity: 0.15 + Math.random() * 0.35,
        color: i % 3 === 0 ? '#38bdf8' : (i % 3 === 1 ? '#34d399' : '#818cf8')
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Subtle, clean technical dot matrix grid (non-intrusive)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      const spacing = 40;
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          ctx.fillRect(x, y, 1, 1);
        }
      }

      // 2. Faint horizontal pipeline tracks
      ctx.lineWidth = 1;
      for (let i = 0; i < TRACK_COUNT; i++) {
        const y = (height / (TRACK_COUNT + 1)) * (i + 1);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 3. Flowing data packets along tracks
      for (let i = 0; i < packets.length; i++) {
        const p = packets[i];
        const y = (height / (TRACK_COUNT + 1)) * (p.trackIndex + 1);

        p.x += p.speed;
        if (p.x - p.length > width) {
          p.x = -p.length;
          p.trackIndex = Math.floor(Math.random() * TRACK_COUNT);
        }

        const grad = ctx.createLinearGradient(p.x - p.length, y, p.x, y);
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(1, p.color);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(p.x - p.length, y);
        ctx.lineTo(p.x, y);
        ctx.stroke();

        // Leading head dot
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: '#0a0d14',
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};

export default Background;
