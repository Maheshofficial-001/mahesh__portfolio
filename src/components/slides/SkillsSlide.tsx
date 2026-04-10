"use client";

import TiltCard3D from "@/components/ui/TiltCard3D";
import SectionTitle from "@/components/ui/SectionTitle";
import SlideCard from "@/components/ui/SlideCard";

const skillGroups = [
  {
    title: "Backend & API",
    items: [".NET MVC", ".NET Core", "WinForms", "Entity Framework", "Python", "Fast API"],
  },
  {
    title: "Tools",
    items: ["Postman", "Swagger"],
  },
  {
    title: "SVG creation",
    items: ["LibreCAD", "Inkscape"],
  },
  {
    title: "CAD Automation",
    items: ["SolidEdge", "PowerShape"],
  },
];

export default function SkillsSlide() {
  return (
    <div className="w-full h-full overflow-auto scrollbar-hide px-4 sm:px-6 md:px-8 py-10 sm:py-16 bg-[var(--bg-card)]">
      <div className="w-full max-w-4xl mx-auto">
        <SectionTitle
          title="Skills"
          accentPart="ills"
          subtitle="// tech stack & tools"
          className="mb-8 sm:mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {skillGroups.map((group, gi) => (
            <TiltCard3D key={group.title} intensity={8}>
              <SlideCard delay={0.1 * gi}>
                <h3 className="font-mono text-sm text-[var(--accent)] mb-4 border-b border-white/10 pb-2">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-white/80 text-sm font-medium flex items-center gap-2"
                    >
                      <span className="text-white/40">→</span> {item}
                    </li>
                  ))}
                </ul>
              </SlideCard>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </div>
  );
}
