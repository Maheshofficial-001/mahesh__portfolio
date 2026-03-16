"use client";

export default function SectionTitle({
  title,
  accentPart,
  subtitle,
  className = "",
}: {
  title: string;
  accentPart: string;
  subtitle?: string;
  className?: string;
}) {
  const [before, after] = title.split(accentPart);
  return (
    <div className={className}>
      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-2">
        {before}
        <span className="text-[var(--accent)]">{accentPart}</span>
        {after}
      </h2>
      {subtitle && (
        <p className="text-white/60 font-mono text-xs sm:text-sm">{subtitle}</p>
      )}
    </div>
  );
}
