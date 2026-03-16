"use client";

const accent = "#00d4aa";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-8 w-auto ${className}`}
      aria-label="Maheshkumar Shankar"
    >
      <g stroke={accent} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 6v20l6-3V9L2 6z" opacity="0.9" />
        <path d="M14 6v20l-6-3V9l6-3z" opacity="0.6" />
      </g>
    </svg>
  );
}
