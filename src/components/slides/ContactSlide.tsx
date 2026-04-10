"use client";

import { motion } from "framer-motion";
import TiltCard3D from "@/components/ui/TiltCard3D";
import TerminalBlock from "@/components/ui/TerminalBlock";

const links = [
  { label: "Email", href: "mailto:maheshkumar.shankar@outlook.com", icon: "→" },
  { label: "GitHub", href: "https://github.com", icon: "→" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/maheshkumar-shankar-768900255/", icon: "→" },
];

export default function ContactSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-10 sm:py-16 bg-[var(--bg-card)]">
      <div className="w-full max-w-2xl flex flex-col md:flex-row gap-8 sm:gap-10 items-center">
        <motion.div
          className="text-center md:text-left flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6">
            Get in <span className="text-[var(--accent)]">touch</span>
          </h2>
          <p className="text-white/70 mb-8">
            Open to new opportunities and side projects. Let&apos;s build something.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 text-white/90 hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/40 transition-colors font-mono text-sm"
              >
                <span className="text-[var(--accent)]">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex-1 w-full max-w-sm"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <TiltCard3D intensity={6}>
            <TerminalBlock
              title="contact.sh"
              lines={[
                { text: "$ ./contact.sh", type: "command" },
                { text: "Sending message...", type: "output" },
                { text: "# Open to: full-time · contract · open-source", type: "comment" },
                { text: "✓ Ready to connect", type: "success" },
              ]}
            />
          </TiltCard3D>
        </motion.div>
      </div>
    </div>
  );
}
