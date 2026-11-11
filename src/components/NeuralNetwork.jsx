
"use client";

import { useEffect, useRef } from "react";

export default function NeuralNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let nodes = [];
    let pulses = [];
    let animationFrame;
    let time = 0;

    const NODE_COUNT = 65;
    const CONNECTION_DISTANCE = 165;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = canvas.clientWidth;
      height = canvas.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes = Array.from({ length: NODE_COUNT }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: Math.random() * 1.8 + 1,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.025 + 0.008,
        energy: Math.random(),
        id: i,
      }));

      pulses = [];
    }

    function drawBackgroundGlow() {
      const glow = ctx.createRadialGradient(
        width * 0.52,
        height * 0.48,
        0,
        width * 0.52,
        height * 0.48,
        Math.max(width, height) * 0.55
      );

      glow.addColorStop(0, "rgba(215, 25, 32, 0.09)");
      glow.addColorStop(0.5, "rgba(215, 25, 32, 0.025)");
      glow.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    }

    function drawGrid() {
      const spacing = 42;

      ctx.beginPath();
      ctx.strokeStyle = "rgba(145, 20, 35, 0.055)";
      ctx.lineWidth = 0.6;

      for (let x = 0; x < width; x += spacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }

      for (let y = 0; y < height; y += spacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }

      ctx.stroke();
    }

    function updateNodes() {
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        node.phase += node.pulseSpeed;

        if (node.x < 0 || node.x > width) {
          node.vx *= -1;
          node.x = Math.max(0, Math.min(width, node.x));
        }

        if (node.y < 0 || node.y > height) {
          node.vy *= -1;
          node.y = Math.max(0, Math.min(height, node.y));
        }
      });
    }

    function drawConnections() {
      const connections = [];

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];

          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.hypot(dx, dy);

          if (distance < CONNECTION_DISTANCE) {
            const opacity =
              (1 - distance / CONNECTION_DISTANCE) * 0.3;

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);

            ctx.strokeStyle = `rgba(145, 20, 35, ${opacity})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();

            connections.push({
              x1: node.x,
              y1: node.y,
              x2: other.x,
              y2: other.y,
              opacity,
              distance,
            });
          }
        }
      }

      return connections;
    }

    function createPulse(connections) {
      if (connections.length === 0 || Math.random() > 0.035) {
        return;
      }

      const connection =
        connections[Math.floor(Math.random() * connections.length)];

      pulses.push({
        x1: connection.x1,
        y1: connection.y1,
        x2: connection.x2,
        y2: connection.y2,
        progress: 0,
        speed: Math.random() * 0.012 + 0.006,
      });
    }

    function drawPulses() {
      pulses = pulses.filter((pulse) => pulse.progress < 1);

      pulses.forEach((pulse) => {
        pulse.progress += pulse.speed;

        const x =
          pulse.x1 + (pulse.x2 - pulse.x1) * pulse.progress;

        const y =
          pulse.y1 + (pulse.y2 - pulse.y1) * pulse.progress;

        const glow = ctx.createRadialGradient(x, y, 0, x, y, 13);

        glow.addColorStop(0, "rgba(215, 25, 32, 0.9)");
        glow.addColorStop(0.3, "rgba(215, 25, 32, 0.35)");
        glow.addColorStop(1, "rgba(215, 25, 32, 0)");

        ctx.beginPath();
        ctx.arc(x, y, 13, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "#d71920";
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#d71920";
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    }

    function drawNodes() {
      nodes.forEach((node) => {
        const pulse = (Math.sin(node.phase) + 1) / 2;
        const radius = node.radius + pulse * 0.8;

        // Outer glow
        const glow = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          radius * 8
        );

        glow.addColorStop(0, "rgba(215, 25, 32, 0.24)");
        glow.addColorStop(1, "rgba(215, 25, 32, 0)");

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 8, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Node center
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(145, 20, 35, ${0.45 + pulse * 0.45})`;

        ctx.shadowBlur = 7 + pulse * 7;
        ctx.shadowColor = "rgba(215, 25, 32, 0.6)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    }

    function draw() {
      time += 0.01;

      ctx.clearRect(0, 0, width, height);

      drawBackgroundGlow();
      drawGrid();

      updateNodes();

      const connections = drawConnections();

      createPulse(connections);
      drawPulses();
      drawNodes();

      animationFrame = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas className="neural-canvas" ref={canvasRef} />;
}
