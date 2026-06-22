"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TechCube3D from "@/components/ui/TechCube3D";
import SectionTitle from "@/components/ui/SectionTitle";
import { getExperienceDisplay, type ExperienceDisplay } from "@/lib/career";

const highlights = [
  "Strong foundation in .NET Core / MVC / Web API development",
  "Database design and optimization using SQL Server",
  "CAD Automation — bridging engineering workflows with smart software solutions",
  "A problem-solver's mindset: I enjoy taking ambiguous problems and engineering clear, scalable solutions",
  "Fast learner, adaptable to new tech stacks and team environments",
];

export default function AboutSlide() {
  const [experience, setExperience] = useState<ExperienceDisplay>(() =>
    getExperienceDisplay()
  );

  useEffect(() => {
    setExperience(getExperienceDisplay());
  }, []);

  return (
    <div className="w-full h-full min-h-0 overflow-y-auto overscroll-y-contain scrollbar-hide bg-[var(--bg-card)]">
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 sm:gap-10 md:gap-16 px-4 sm:px-6 md:px-8 py-10 sm:py-16 min-h-min">
      <motion.div
        className="flex-1 max-w-xl w-full"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title="About me" accentPart="me" className="mb-4 sm:mb-6" />
        <p className="text-white/80 leading-relaxed mb-4">
          I&apos;m a <strong className="text-white">Software Engineer</strong> with{" "}
          {experience.experienceClause} building robust, scalable applications using .NET Core, ASP.NET MVC, and
          Web API. I specialize in designing efficient backend systems, writing clean RESTful
          APIs, and managing data with SQL Server (SSMS) — turning complex business requirements
          into reliable, production-ready solutions.
        </p>
        <p className="text-white/70 leading-relaxed mb-6">
          Alongside backend development, I bring hands-on experience in{" "}
          <strong className="text-white/90">CAD Automation</strong>, where I&apos;ve built tools
          and scripts that streamline design workflows and reduce manual engineering effort — a
          unique blend of software engineering and domain-specific automation that few developers
          offer.
        </p>

        <h3 className="font-mono text-sm text-[var(--accent)] mb-3 border-b border-white/10 pb-2">
          What I bring to the table
        </h3>
        <ul className="space-y-2">
          {highlights.map((item, i) => (
            <motion.li
              key={item}
              className="text-white/75 text-sm leading-relaxed flex items-start gap-2"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.05 }}
            >
              <span className="text-[var(--accent)] mt-0.5 shrink-0">→</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
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
    </div>
  );
}
