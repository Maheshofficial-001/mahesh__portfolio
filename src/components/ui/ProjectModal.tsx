"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type ProjectDetail = {
  title: string;
  company: string;
  highlights: string[];
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectDetail | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.button
            type="button"
            aria-label="Close project details"
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="pointer-events-auto w-full max-w-2xl max-h-[85vh] overflow-auto rounded-xl sm:rounded-2xl bg-[var(--bg-card)] border border-white/10 shadow-2xl p-5 sm:p-8 scrollbar-hide"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3
                    id="project-modal-title"
                    className="font-display font-bold text-xl sm:text-2xl text-white"
                  >
                    {project.title}
                  </h3>
                  <p className="font-mono text-sm text-[var(--accent)] mt-1">
                    {project.company}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 w-8 h-8 rounded-lg border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-colors font-mono text-sm"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <ul className="space-y-3">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-white/80 text-sm leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-[var(--accent)] mt-0.5 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
