"use client";

import { motion } from "framer-motion";

type TerminalBlockProps = {
  title?: string;
  lines: { text: string; type?: "command" | "output" | "comment" | "success" }[];
  className?: string;
};

export default function TerminalBlock({ title = "terminal", lines, className = "" }: TerminalBlockProps) {
  return (
    <motion.div
      className={`rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(800px) rotateX(2deg)",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
      }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-xs text-white/50">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm">
        {lines.map((line, i) => (
          <div
            key={i}
            className={
              line.type === "command"
                ? "text-[var(--accent)]"
                : line.type === "comment"
                  ? "text-white/40"
                  : line.type === "success"
                    ? "text-emerald-400"
                    : "text-white/80"
            }
          >
            {line.type === "command" && "> "}
            {line.text}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
