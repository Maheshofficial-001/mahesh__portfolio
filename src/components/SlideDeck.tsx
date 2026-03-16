"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useSlide, SLIDE_LABELS } from "@/context/SlideContext";

const perspective = 2000;
const AUTO_SLIDE_INTERVAL_MS = 3 * 60 * 1000; // 3 minutes

export default function SlideDeck({
  children,
}: {
  children: React.ReactNode[];
}) {
  const { current, goTo, goNext, goPrev } = useSlide();

  useEffect(() => {
    const id = setInterval(goNext, AUTO_SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [goNext]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goPrev, goNext]);

  return (
    <div className="slide-stage relative w-full min-h-screen overflow-hidden bg-[var(--bg-deep)] pt-12 sm:pt-14">
      <div
        className="relative w-full"
        style={{
          height: "calc(100vh - 6rem)",
          minHeight: "320px",
          perspective: `${perspective}px`,
          transformStyle: "preserve-3d",
        }}
      >
        {children.map((slide, index) => {
          const isActive = index === current;
          const offset = index - current;
          const z = -Math.abs(offset) * 400;
          const x =
            offset *
            (typeof window !== "undefined"
              ? Math.min(window.innerWidth * 0.4, 420)
              : 420);
          const rotateY = offset * 18;
          const scale = 1 - Math.abs(offset) * 0.08;
          const opacity =
            Math.abs(offset) > 1 ? 0 : 1 - Math.abs(offset) * 0.3;

          return (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
              style={{
                transformStyle: "preserve-3d",
                perspective: `${perspective}px`,
                zIndex: children.length - Math.abs(offset),
                pointerEvents: isActive ? "auto" : "none",
              }}
              initial={false}
              animate={{
                x: `${x}px`,
                z: z,
                rotateY: `${rotateY}deg`,
                scale,
                opacity,
                filter: isActive ? "blur(0px)" : "blur(2px)",
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 24,
                mass: 0.8,
              }}
            >
              <div
                className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 bg-[var(--bg-card)] shadow-2xl"
                style={{
                  transform: "translateZ(0px)",
                  backfaceVisibility: "hidden",
                }}
              >
                {slide}
              </div>
            </motion.div>
          );
        })}
      </div>

      <nav
        className="fixed right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 sm:gap-4"
        aria-label="Slide navigation"
      >
        {SLIDE_LABELS.map((label, index) => {
          const isActive = index === current;
          return (
            <button
              key={label}
              onClick={() => goTo(index)}
              className="group flex items-center justify-end gap-2 sm:gap-2.5 text-right min-h-[44px] sm:min-h-0 py-1 sm:py-0 w-full max-w-[120px] sm:max-w-none ml-auto"
              aria-label={`Go to ${label}`}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`text-[10px] sm:text-xs font-medium transition-all shrink-0 ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-white/50 group-hover:text-white/70"
                }`}
              >
                {label}
              </span>
              <span
                className={`rounded-full shrink-0 transition-all ${
                  isActive
                    ? "h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
                    : "h-2 w-2 sm:h-2.5 sm:w-2.5 bg-white/25 group-hover:bg-white/40"
                }`}
                aria-hidden
              />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
