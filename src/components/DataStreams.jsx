
"use client";

import { useEffect, useRef } from "react";

export default function DataStreams() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;
    let width = 0;
    let height = 0;
    let time = 0;
    let streams = [];
    let particles = [];

    const colors = [
      "rgba(215, 25, 32, 0.30)",
      "rgba(215, 25, 32, 0.18)",
      "rgba(239, 105, 120, 0.25)",
      "rgba(255, 170, 180, 0.22)",
    ];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createStreams();
      createParticles();
    };

    const createStreams = () => {
      streams = [];

      const count = Math.max(9, Math.floor(width / 115));

      for (let i = 0; i < count; i++) {
        const y = (height / (count + 1)) * (i + 1);

        streams.push({
          y,
          amplitude: 15 + Math.random() * 32,
          frequency: 0.0015 + Math.random() * 0.001,
          speed: 0.0003 + Math.random() * 0.0004,
          phase: Math.random() * Math.PI * 2,
          opacity: 0.12 + Math.random() * 0.16,
          color: colors[i % colors.length],
          thickness: 0.6 + Math.random() * 0.6,
        });
      }
    };

    const createParticles = () => {
      particles = [];

      const count = Math.max(18, Math.floor(width / 30));

      for (let i = 0; i < count; i++) {
        particles.push({
          stream: Math.floor(Math.random() * streams.length),
          progress: Math.random(),
          speed: 0.0003 + Math.random() * 0.0005,
          size: 0.7 + Math.random() * 1.3,
          opacity: 0.25 + Math.random() * 0.45,
        });
      }
    };

    const getStreamPoint = (stream, x) => {
      const wave =
        Math.sin(x * stream.frequency + stream.phase + time * stream.speed) *
        stream.amplitude;

      const secondaryWave =
        Math.sin(x * 0.002 + stream.phase + time * 0.0004) * 12;

      return {
        x,
        y: stream.y + wave + secondaryWave,
      };
    };

    const drawStreams = () => {
      streams.forEach((stream) => {
        ctx.beginPath();

        for (let x = 0; x <= width + 8; x += 8) {
          const point = getStreamPoint(stream, x);

          if (x === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        }

        ctx.strokeStyle = stream.color;
        ctx.lineWidth = stream.thickness;
        ctx.globalAlpha = stream.opacity;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(215, 25, 32, 0.22)";
        ctx.stroke();
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    const drawParticles = () => {
      particles.forEach((particle) => {
        const stream = streams[particle.stream];

        particle.progress += particle.speed;

        if (particle.progress > 1) {
          particle.progress = 0;
        }

        const x = particle.progress * width;
        const point = getStreamPoint(stream, x);

        const pulse = 0.65 + Math.sin(time * 0.002 + particle.progress * 8) * 0.35;

        ctx.beginPath();
        ctx.arc(point.x, point.y, particle.size * pulse, 0, Math.PI * 2);

        ctx.fillStyle = "rgba(215, 25, 32, 0.8)";
        ctx.globalAlpha = particle.opacity * pulse;

        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(215, 25, 32, 0.65)";
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    const drawAmbientGlow = () => {
      const glow = ctx.createRadialGradient(
        width * 0.72,
        height * 0.48,
        0,
        width * 0.72,
        height * 0.48,
        width * 0.55
      );

      glow.addColorStop(0, "rgba(215, 25, 32, 0.055)");
      glow.addColorStop(0.45, "rgba(239, 105, 120, 0.025)");
      glow.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    const animate = () => {
      time += 1;

      ctx.clearRect(0, 0, width, height);

      drawAmbientGlow();
      drawStreams();
      drawParticles();

      animationFrame = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    resize();
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="data-streams-canvas" />;
}
