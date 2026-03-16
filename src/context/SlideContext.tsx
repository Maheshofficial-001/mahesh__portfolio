"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type SlideContextType = {
  current: number;
  total: number;
  goTo: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
};

const SlideContext = createContext<SlideContextType | null>(null);

const SLIDE_LABELS = ["Home", "About", "Skills", "Projects", "Contact"];

export function SlideProvider({
  total,
  children,
}: {
  total: number;
  children: ReactNode;
}) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setCurrent((prev) => {
        const next = Math.max(0, Math.min(index, total - 1));
        return prev === next ? prev : next;
      });
    },
    [total]
  );

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev < total - 1 ? prev + 1 : 0));
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : total - 1));
  }, [total]);

  return (
    <SlideContext.Provider
      value={{ current, total, goTo, goNext, goPrev }}
    >
      {children}
    </SlideContext.Provider>
  );
}

export function useSlide() {
  const ctx = useContext(SlideContext);
  if (!ctx) throw new Error("useSlide must be used within SlideProvider");
  return ctx;
}

export { SLIDE_LABELS };
