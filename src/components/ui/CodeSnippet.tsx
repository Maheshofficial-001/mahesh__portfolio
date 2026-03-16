"use client";

import { motion } from "framer-motion";

const STACK_ITEMS = [
  ".NET MVC",
  ".NET Core",
  "WinForms",
  "Entity Framework",
  "Python",
  "Fast API",
  "Postman",
  "Swagger",
  "LibreCAD",
  "Inkscape",
  "SolidEdge",
  "PowerShape",
];

type CodeSnippetProps = {
  className?: string;
};

export default function CodeSnippet({ className = "" }: CodeSnippetProps) {
  return (
    <motion.pre
      className={`rounded-lg overflow-hidden border border-white/10 bg-[#0d1117] p-4 font-mono text-sm overflow-x-auto ${className}`}
      style={{
        transform: "perspective(600px) rotateY(-3deg)",
        transformStyle: "preserve-3d",
        boxShadow: "4px 8px 24px rgba(0,0,0,0.4)",
      }}
      initial={{ opacity: 0, rotateY: -8 }}
      animate={{ opacity: 1, rotateY: -3 }}
      transition={{ duration: 0.5 }}
    >
      <code className="text-white/90 block">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-[var(--accent)]">stack</span>{" "}
        <span className="text-white/60">=</span>{" "}
        <span className="text-amber-300">[</span>
        <br />
        {STACK_ITEMS.map((item, i) => (
          <span key={item}>
            <span className="text-white/40">  </span>
            <span className="text-emerald-400">&quot;{item}&quot;</span>
            {i < STACK_ITEMS.length - 1 ? (
              <span className="text-white/60">,</span>
            ) : null}
            <br />
          </span>
        ))}
        <span className="text-amber-300">]</span>
        <span className="text-white/60">;</span>
      </code>
    </motion.pre>
  );
}
