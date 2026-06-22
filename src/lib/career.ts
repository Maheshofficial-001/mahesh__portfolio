/** Career start — aligned with earliest role (Solidpro Group, Jan 2025). */
export const CAREER_START_DATE = new Date(2025, 0, 1);

export function getTotalMonthsOfExperience(asOf: Date = new Date()): number {
  const start = CAREER_START_DATE;
  let months =
    (asOf.getFullYear() - start.getFullYear()) * 12 + (asOf.getMonth() - start.getMonth());

  if (asOf.getDate() < start.getDate()) {
    months -= 1;
  }

  return Math.max(0, months);
}

export type ExperienceDisplay = {
  value: string;
  statLabel: string;
  phrase: string;
  experienceClause: string;
};

/** Under 12 months → "8+ months"; 12+ months → nearest 0.5 year, e.g. "1.5+ years" */
export function getExperienceDisplay(asOf: Date = new Date()): ExperienceDisplay {
  const months = getTotalMonthsOfExperience(asOf);

  if (months < 12) {
    const stepped = Math.max(1, months);
    const phrase = `${stepped}+ months`;
    return {
      value: `${stepped}+`,
      statLabel: "Months experience",
      phrase,
      experienceClause: `${phrase} of experience`,
    };
  }

  const years = months / 12;
  const stepped = Math.round(years * 2) / 2;
  const text = Number.isInteger(stepped) ? String(stepped) : stepped.toFixed(1);
  const phrase = `${text}+ years`;

  return {
    value: `${text}+`,
    statLabel: "Years experience",
    phrase,
    experienceClause: `${phrase} of experience`,
  };
}

/** @deprecated Use getExperienceDisplay for unit-aware labels */
export function getExperienceLabel(asOf: Date = new Date()): string {
  return getExperienceDisplay(asOf).phrase;
}
