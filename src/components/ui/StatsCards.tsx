"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getExperienceDisplay, type ExperienceDisplay } from "@/lib/career";

export default function StatsCards({
  className = "",
  delay = 0.5,
}: {
  className?: string;
  delay?: number;
}) {
  const [experience, setExperience] = useState<ExperienceDisplay>(() =>
    getExperienceDisplay()
  );

  useEffect(() => {
    setExperience(getExperienceDisplay());
  }, []);

  const stats = [
    { value: experience.value, label: experience.statLabel },
    { value: "4+", label: "Projects" },
    { value: "4.5/5", label: "Customer rating" },
  ];

  return (
    <div className={`flex flex-wrap gap-4 sm:gap-6 ${className}`}>
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          className="px-4 py-2 rounded-lg bg-white/5 border border-white/10"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + i * 0.1 }}
        >
          <span className="block font-mono text-2xl font-bold text-[var(--accent)]">
            {s.value}
          </span>
          <span className="text-xs text-white/60">{s.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
