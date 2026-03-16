"use client";

import { motion } from "framer-motion";

const faces = [
  { label: ".NET", type: "backend" },
  { label: "Python", type: "backend" },
  { label: "API", type: "backend" },
  { label: "React", type: "ui" },
  { label: "UI", type: "ui" },
  { label: "CSS", type: "ui" },
];

export default function TechCube3D() {
  return (
    <motion.div
      className="relative w-36 h-36 flex items-center justify-center"
      style={{ perspective: 400 }}
      animate={{ rotateY: 360, rotateX: 15 }}
      transition={{
        rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
        rotateX: { duration: 8, repeat: Infinity, ease: "linear" },
      }}
    >
      <div
        className="absolute w-28 h-28"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(-20deg) rotateY(30deg)",
        }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const rotations: Record<number, string> = {
            0: "rotateY(0deg) translateZ(56px)",
            1: "rotateY(90deg) translateZ(56px)",
            2: "rotateY(180deg) translateZ(56px)",
            3: "rotateY(270deg) translateZ(56px)",
            4: "rotateX(90deg) translateZ(56px)",
            5: "rotateX(-90deg) translateZ(56px)",
          };
          const face = faces[i];
          const isUI = face.type === "ui";
          return (
            <motion.div
              key={i}
              className="absolute inset-0 flex items-center justify-center rounded-xl border-2 bg-[var(--bg-card)] font-mono font-bold select-none"
              style={{
                backfaceVisibility: "hidden",
                transform: rotations[i],
                width: 112,
                height: 112,
                left: "50%",
                top: "50%",
                marginLeft: -56,
                marginTop: -56,
                borderColor: isUI ? "rgba(99, 102, 241, 0.6)" : "rgba(0, 212, 170, 0.5)",
                color: isUI ? "#818cf8" : "var(--accent)",
                fontSize: 14,
                textShadow: "0 0 20px currentColor",
              }}
            >
              <span className="drop-shadow-sm">{face.label}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
