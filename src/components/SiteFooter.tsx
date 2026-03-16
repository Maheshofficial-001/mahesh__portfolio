"use client";

const currentYear = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/5 bg-[var(--bg-deep)]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex justify-center">
        <p className="text-[10px] sm:text-xs text-white/40 font-mono text-center max-w-[90vw]">
          © {currentYear} Maheshkumar Shankar · Built with Next.js · Security headers enabled
        </p>
      </div>
    </footer>
  );
}
