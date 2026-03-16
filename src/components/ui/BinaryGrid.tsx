"use client";

import { motion } from "framer-motion";

const binary = "01".split("");
const cols = 20;
const rows = 12;

export default function BinaryGrid() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.06]"
      aria-hidden
    >
      <div
        className="grid gap-2 p-8 h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: cols * rows }).map((_, i) => (
          <motion.span
            key={i}
            className="font-mono text-[10px] text-[var(--accent)]"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 2 + (i % 5) * 0.5,
              repeat: Infinity,
              delay: i * 0.02,
            }}
          >
            {binary[i % 2]}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
