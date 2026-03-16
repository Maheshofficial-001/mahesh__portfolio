"use client";

import { motion } from "framer-motion";

const orbs = [
  { size: 120, x: "10%", y: "20%", color: "var(--accent)", delay: 0 },
  { size: 80, x: "85%", y: "30%", color: "rgba(0,212,170,0.3)", delay: 0.2 },
  { size: 60, x: "75%", y: "70%", color: "rgba(99,102,241,0.25)", delay: 0.4 },
  { size: 100, x: "15%", y: "75%", color: "rgba(0,212,170,0.2)", delay: 0.1 },
  { size: 50, x: "50%", y: "15%", color: "rgba(0,212,170,0.15)", delay: 0.3 },
];

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
            transform: "translate(-50%, -50%)",
            transformStyle: "preserve-3d",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
