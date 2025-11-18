import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BubbleAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const createBubble = () => {
      if (!containerRef.current) return;

      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Random properties untuk variasi
      const size = Math.random() * 100 + 60; // 60px - 160px
      const left = Math.random() * 100; // 0% - 100%
      const duration = Math.random() * 20 + 10; // 10s - 30s
      const delay = Math.random() * 2; // 0s - 2s

      // Styling bubble - BUAT SANGAT TERANG DAN KENTAL
      Object.assign(bubble.style, {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        bottom: '-100px',
        borderRadius: '50%',
        background: 'transparent',
        border: '3px solid rgba(236, 72, 153, 0.8)', // LEBIH PEKAT
        boxShadow: `
          0 0 50px rgba(236, 72, 153, 0.8),
          0 0 100px rgba(236, 72, 153, 0.6),
          0 0 150px rgba(236, 72, 153, 0.4),
          inset 0 0 60px rgba(255, 255, 255, 0.3)
        `,
        zIndex: '5',
        pointerEvents: 'none',
      });

      containerRef.current.appendChild(bubble);

      console.log('Bubble created - VISIBLE:', { size, left }); // Debug

      // Animasi GSAP
      const timeline = gsap.timeline({
        onComplete: () => {
          if (bubble.parentNode) {
            bubble.parentNode.removeChild(bubble);
          }
        }
      });

      timeline
        .to(bubble, {
          y: -800,
          x: `+=${(Math.random() - 0.5) * 80}`,
          rotation: Math.random() * 360 - 180,
          duration: duration,
          delay: delay,
          ease: "power1.inOut"
        })
        .to(bubble, {
          scale: 1.2,
          duration: duration * 0.3,
          ease: "power1.inOut"
        }, 0)
        .to(bubble, {
          scale: 0.9,
          duration: duration * 0.4,
          ease: "power1.inOut"
        }, duration * 0.6);

      // Hapus bubble setelah selesai
      setTimeout(() => {
        if (bubble.parentNode) {
          bubble.parentNode.removeChild(bubble);
        }
      }, (duration + delay) * 1000);
    };

    // Create bubbles
    const bubbleInterval = setInterval(createBubble, 1000);

    // Create initial bubbles
    for (let i = 0; i < 8; i++) {
      setTimeout(createBubble, i * 500);
    }

    // Cleanup
    return () => {
      clearInterval(bubbleInterval);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="bubbles-inside-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5,
        overflow: 'hidden',
        borderRadius: '1rem'
      }}
    />
  );
};

export default BubbleAnimation;