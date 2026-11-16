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
    const TRACK_COUNT = 9;
    const packets = [];
    const PACKET_COUNT = 28;

    for (let i = 0; i < PACKET_COUNT; i++) {
      packets.push({
        trackIndex: Math.floor(Math.random() * TRACK_COUNT),
        x: Math.random() * width,
        speed: 1.1 + Math.random() * 2.0,
        length: 25 + Math.random() * 50,
        opacity: 0.15 + Math.random() * 0.35,
        color: i % 3 === 0 ? '#38bdf8' : (i % 3 === 1 ? '#34d399' : '#818cf8')
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Subtle, clean technical dot matrix grid
      ctx.fillStyle = 'rgba(255, 255, 255, 0.035)';
      const spacing = 42;
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
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(p.x - p.length, y);
        ctx.lineTo(p.x, y);
        ctx.stroke();

        // Leading head dot
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, y, 1.8, 0, Math.PI * 2);
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
        background: '#070a10',
      }}
    >
      {/* Soft Ambient Radial Lighting Mesh */}
      <div 
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '55vw',
          height: '55vw',
          maxHeight: '650px',
          maxWidth: '650px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.07) 0%, rgba(56, 189, 248, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }} 
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          maxHeight: '600px',
          maxWidth: '600px',
          background: 'radial-gradient(circle, rgba(52, 211, 153, 0.05) 0%, rgba(99, 102, 241, 0.04) 50%, rgba(0, 0, 0, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }} 
      />
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};

export default Background;
