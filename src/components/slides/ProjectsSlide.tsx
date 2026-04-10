"use client";

import { motion } from "framer-motion";
import TerminalBlock from "@/components/ui/TerminalBlock";
import FloatingOrbs from "@/components/ui/FloatingOrbs";
import BinaryGrid from "@/components/ui/BinaryGrid";

const projects: Array<{ title: string; desc: string; tech: string; href: string }> = []; 

export default function ProjectsSlide() {
  return (
    <div className="relative w-full h-full overflow-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-deep)] to-[#0d1117] overflow-hidden">
      <BinaryGrid />
      <FloatingOrbs />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,212,170,0.08),transparent)]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 sm:gap-12 mb-10 sm:mb-12">
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 font-mono text-xs text-[var(--accent)] uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              Things I&apos;ve shipped
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-2">
              Proj<span className="text-[var(--accent)]">ects</span>
            </h2>
            <p className="text-white/60 font-mono text-xs sm:text-sm">
              {"// no project cards are currently displayed"}
            </p>
          </motion.div>

          <motion.div
            className="w-full lg:max-w-sm shrink-0"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <TerminalBlock
              title="ls projects/"
              lines={[
                { text: "$ ls projects/", type: "command" },
                ...projects.map((p, i) => ({
                  text: `${i + 1}. ${p.title}`,
                  type: "success" as const,
                })),
              ]}
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
