"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import SlideCard from "@/components/ui/SlideCard";

type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
};

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Solidpro Group",
    period: "Jan 2025 – Present",
    location: "Chennai, Tamil Nadu, India (On-site)",
    highlights: [
      "Designed and developed scalable, production-ready backend systems and clean RESTful APIs using .NET Core, ASP.NET MVC, and Web API to support core business operations.",
      "Built and optimized SQL Server databases (SSMS) for reliable data storage, retrieval, and reporting, improving query efficiency and data integrity.",
      "Translated complex and often ambiguous business requirements into clear, scalable technical solutions, reducing rework and improving delivery turnaround.",
      "Built custom CAD automation scripts that streamlined engineering design workflows and significantly reduced manual effort, using LibreCAD and Inkscape to create and manipulate SVG output.",
      "Collaborated across full-stack development tasks, working with JavaScript and front-end components alongside backend services to deliver complete features.",
      "Worked independently and within cross-functional teams to ship reliable, production-grade software in a fast-paced, on-site engineering environment.",
    ],
  },
];

export default function ExperienceSlide() {
  return (
    <div className="w-full h-full overflow-auto scrollbar-hide px-4 sm:px-6 md:px-8 py-10 sm:py-16 bg-[var(--bg-card)]">
      <div className="w-full max-w-3xl mx-auto">
        <SectionTitle
          title="Work experience"
          accentPart="experience"
          subtitle="// professional journey"
          className="mb-8 sm:mb-12"
        />

        <div className="relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent)]/60 via-white/10 to-transparent hidden sm:block"
            aria-hidden
          />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                className="relative sm:pl-8"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <span
                  className="absolute left-0 top-6 hidden sm:block w-[15px] h-[15px] rounded-full border-2 border-[var(--accent)] bg-[var(--bg-card)]"
                  aria-hidden
                />

                <SlideCard delay={0.1 * i}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-sm text-[var(--accent)]">{exp.company}</p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <p className="font-mono text-xs text-white/60">{exp.period}</p>
                      {exp.location && (
                        <p className="font-mono text-xs text-white/40">{exp.location}</p>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-white/75 text-sm leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[var(--accent)] mt-0.5 shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SlideCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
