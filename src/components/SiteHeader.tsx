"use client";

import { useState } from "react";
import { useSlide, SLIDE_LABELS } from "@/context/SlideContext";
import Logo from "@/components/Logo";

export default function SiteHeader() {
  const { current, goTo } = useSlide();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-[var(--bg-deep)]/95 backdrop-blur-md">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-4 sm:gap-6 min-w-0">
        {/* Left end: name */}
        <button
          type="button"
          onClick={() => goTo(0)}
          className="font-display font-bold text-lg sm:text-xl text-white hover:text-[var(--accent)] transition-colors shrink-0 text-left"
          aria-label="Go to home"
        >
          <span className="whitespace-nowrap">Maheshkumar Shankar</span>
        </button>

        {/* Center: nav */}
        <nav
          className="hidden md:flex items-center justify-center gap-1 flex-1 min-w-0"
          aria-label="Main navigation"
        >
          {SLIDE_LABELS.map((label, index) => (
            <button
              key={label}
              onClick={() => goTo(index)}
              className={`px-2 sm:px-3 py-2 rounded-lg text-sm font-medium transition-colors min-h-[40px] shrink-0 ${
                index === current
                  ? "text-[var(--accent)] bg-[var(--accent)]/10"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Right end: hamburger (mobile) + logo */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto">
          <button
            type="button"
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-white/80 hover:bg-white/10 min-h-[44px] min-w-[44px]"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <button
            type="button"
            onClick={() => goTo(0)}
            className="flex items-center justify-center p-1 rounded-full text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg-deep)] min-h-[48px] min-w-[48px] sm:min-h-[56px] sm:min-w-[56px]"
            aria-label="Home"
          >
            <Logo className="h-10 sm:h-12 w-auto" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[var(--bg-deep)]">
          <nav className="px-4 py-3 flex flex-col gap-1" aria-label="Mobile navigation">
            {SLIDE_LABELS.map((label, index) => (
              <button
                key={label}
                onClick={() => {
                  goTo(index);
                  setMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-lg text-left text-sm font-medium min-h-[48px] ${
                  index === current
                    ? "text-[var(--accent)] bg-[var(--accent)]/10"
                    : "text-white/80 hover:bg-white/5"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
