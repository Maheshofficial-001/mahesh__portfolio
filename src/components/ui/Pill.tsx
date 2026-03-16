"use client";

import { motion } from "framer-motion";

export default function Pill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 font-mono text-xs text-[var(--accent)] uppercase tracking-wider ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
      {children}
    </motion.div>
  );
}
