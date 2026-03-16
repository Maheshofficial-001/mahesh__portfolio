"use client";

import { motion } from "framer-motion";
import { useSlide } from "@/context/SlideContext";
import FloatingOrbs from "@/components/ui/FloatingOrbs";
import BinaryGrid from "@/components/ui/BinaryGrid";
import TerminalBlock from "@/components/ui/TerminalBlock";
import Pill from "@/components/ui/Pill";

const SLIDE_INDEX = { projects: 3, contact: 4 } as const;

export default function HeroSlide() {
  const { goTo } = useSlide();
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-10 sm:py-16 bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-deep)] to-[#0d1117] overflow-hidden">
      <BinaryGrid />
      <FloatingOrbs />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,212,170,0.12),transparent)]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12">
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Pill className="mb-6">Software Engineer</Pill>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-4 sm:mb-6">
            Hi, I&apos;m{" "}
            <span className="text-[var(--accent)]">Maheshkumar Shankar</span>
          </h1>
          <motion.p
            className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I build scalable systems and APIs with .NET, Python & Fast API.
          </motion.p>
          <motion.div
            className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              type="button"
              onClick={() => goTo(SLIDE_INDEX.projects)}
              className="px-6 py-3 rounded-lg bg-[var(--accent)] text-[var(--bg-deep)] font-semibold hover:bg-[var(--accent-dim)] transition-colors font-mono text-sm"
            >
              View work
            </button>
            <button
              type="button"
              onClick={() => goTo(SLIDE_INDEX.contact)}
              className="px-6 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/5 transition-colors font-mono text-sm"
            >
              Get in touch
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full max-w-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <TerminalBlock
            title="whoami"
            lines={[
              { text: "$ whoami", type: "command" },
              { text: "software-engineer", type: "success" },
              { text: "$ cat stack.txt", type: "command" },
              { text: ".NET MVC · .NET Core · Python · Fast API · Postman · Swagger", type: "output" },
            ]}
          />
        </motion.div>
      </div>
    </div>
  );
}
