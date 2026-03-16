"use client";

import { motion } from "framer-motion";
import TechCube3D from "@/components/ui/TechCube3D";
import SectionTitle from "@/components/ui/SectionTitle";

const stats = [
  { value: "1+", label: "Years experience" },
  { value: "3+", label: "Projects" },
  { value: "4.5/5", label: "Customer rating" },
];

export default function AboutSlide() {
  return (
    <div className="w-full h-full overflow-auto flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-16 px-4 sm:px-6 md:px-8 py-10 sm:py-16 bg-[var(--bg-card)]">
      <motion.div
        className="flex-1 max-w-lg w-full"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title="About me" accentPart="me" className="mb-4 sm:mb-6" />
        <p className="text-white/80 leading-relaxed mb-4">
          I&apos;m a <strong className="text-white">Software Engineer</strong> focused on
          full-stack development, system design, and shipping quality code. I care about
          performance, maintainability, and great DX.
        </p>
        <p className="text-white/70 leading-relaxed mb-8">
          From APIs and databases to 3D and motion on the web—I like building tools and
          experiences that are both robust and delightful.
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <span className="block font-mono text-2xl font-bold text-[var(--accent)]">
                {s.value}
              </span>
              <span className="text-xs text-white/60">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex-1 flex flex-col items-center gap-6 sm:gap-8 max-w-md w-full"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
            3D tech stack
          </span>
          <TechCube3D />
        </div>
      </motion.div>
    </div>
  );
}
