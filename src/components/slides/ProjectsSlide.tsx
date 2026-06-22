"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TerminalBlock from "@/components/ui/TerminalBlock";
import FloatingOrbs from "@/components/ui/FloatingOrbs";
import BinaryGrid from "@/components/ui/BinaryGrid";
import SlideCard from "@/components/ui/SlideCard";
import TiltCard3D from "@/components/ui/TiltCard3D";
import ProjectModal, { type ProjectDetail } from "@/components/ui/ProjectModal";

const projects: ProjectDetail[] = [
  {
    title: "Product Configurator & CAD Automation Platform",
    company: "Solidpro Group",
    highlights: [
      "Built a web-based product configurator using ASP.NET MVC, allowing users to interactively configure products through the UI in real time.",
      "Exposed configuration data and integration functionality through ASP.NET Web API, with jQuery used on the front end to handle dynamic UI interactions and API calls.",
      "Developed a Windows application to handle CAD automation, auto-generating accurate 2D and 3D outputs directly from user-defined configurations.",
      "Developed automated Bill of Materials (BOM) generation, exporting a structured BOM to Excel for every configuration, eliminating manual BOM preparation.",
      "Designed and managed the backend data layer in SQL Server (SSMS) to support configuration logic, persistence, and BOM generation.",
      "Created stored procedures, triggers, and functions in SQL Server to handle business logic, automate data operations, and enforce data integrity at the database level.",
      "Enhanced the existing legacy application underlying the platform, performing ongoing maintenance, debugging, and new feature development.",
      "Designed and built a new RESTful API from scratch to send RFQ (Request for Quote) data from the legacy application to the CRM system.",
      "Applied strong debugging and root-cause analysis skills to resolve complex issues within the legacy codebase, improving system stability.",
      "Owned client-facing communication and requirement walkthroughs, delivering the project to a 4.5/5 customer satisfaction rating upon completion.",
    ],
  },
  {
    title: "ERP Helpdesk & Ticketing System",
    company: "Solidpro Group",
    highlights: [
      "Developed the backend for an ERP helpdesk module, building a fully configurable, location-based ticketing system to support internal business operations.",
      "Built the backend using FastAPI and the frontend using Next.js, delivering a complete full-stack ticketing solution.",
      "Designed location-based ticket configuration and routing, allowing tickets to be categorized and managed by site/location.",
      "Deployed and maintained the application on a VPS, managing configuration and uptime.",
      "Adopted organization-wide as the central ticketing platform, with IT, Admin, and Finance among the departments routing day-to-day issues through it for tracking and resolution.",
    ],
  },
  {
    title: "Mould Automation Tool",
    company: "Solidpro Group",
    highlights: [
      "Built a full mould automation application using WinForms, automating mould design workflows within Solid Edge end-to-end.",
      "Developed a template-based automation engine that generates mould designs automatically from configurable templates and input parameters, reducing manual design effort.",
      "Used XML-based storage to define and persist mould templates and configuration data driving the automation engine.",
    ],
  },
  {
    title: "CAD Automation Support — UK-Based Client",
    company: "Solidpro Group",
    highlights: [
      "Developed a CAD automation tool for a UK-based client, automating design workflows within SolidWorks.",
      "Developed a SolidWorks add-in that arranges and positions CAD models within SolidWorks, then auto-generates a pre-templated Excel file populated with the model's dimensional data.",
      "Built a two-way integration — users can edit dimensions directly in Excel, and a macro-driven button in the Excel file pushes the updated values back into SolidWorks, automatically updating the CAD model.",
    ],
  },
];

export default function ProjectsSlide() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <div className="relative w-full h-full overflow-auto scrollbar-hide px-4 sm:px-6 md:px-8 py-10 sm:py-16 bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-deep)] to-[#0d1117]">
      <BinaryGrid />
      <FloatingOrbs />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,212,170,0.08),transparent)]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 sm:gap-12 mb-10 sm:mb-12">
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 font-mono text-xs text-[var(--accent)] uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              Things I&apos;ve shipped
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-2">
              Proj<span className="text-[var(--accent)]">ects</span>
            </h2>
            <p className="text-white/60 font-mono text-xs sm:text-sm">
              {"// click a project to view details"}
            </p>
          </motion.div>

          <motion.div
            className="w-full lg:max-w-sm shrink-0"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <TerminalBlock
              title="ls projects/"
              lines={[
                { text: "$ ls projects/", type: "command" },
                ...projects.map((p, i) => ({
                  text: `${i + 1}. ${p.title}`,
                  type: "success" as const,
                })),
              ]}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <TiltCard3D intensity={6}>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full text-left cursor-pointer group"
                >
                  <SlideCard
                    delay={0.1 * i}
                    className="h-full transition-colors group-hover:border-[var(--accent)]/30 group-hover:bg-white/[0.07]"
                  >
                    <div className="mb-3">
                      <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs sm:text-sm text-[var(--accent)]">
                        {project.company}
                      </p>
                    </div>

                    <p className="text-white/60 text-sm leading-relaxed line-clamp-3 mb-4">
                      {project.highlights[0]}
                    </p>

                    <p className="font-mono text-xs text-white/40 group-hover:text-[var(--accent)] transition-colors">
                      {project.highlights.length} highlights · click to open →
                    </p>
                  </SlideCard>
                </button>
              </TiltCard3D>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
