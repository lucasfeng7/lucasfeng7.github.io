export const site = {
  name: 'Lucas Feng',
  role: 'Mechanical engineering, Johns Hopkins University',
  heroStatement:
    'Mechanical engineering student at Johns Hopkins. I build sensors, test rigs, and the calibration that makes their data trustworthy.',
  about: [
    "I'm a mechanical engineering student at Johns Hopkins, doing research in the Neuroengineering & Biomedical Instrumentation Lab.",
    'I build instrumented hardware end to end: CAD, nonlinear FEA, fabrication, test rigs, calibration, and the data analysis that proves it works.',
  ],
  tagline:
    'Mechanical engineering student who builds instrumented hardware end to end: CAD, nonlinear FEA, fabrication, test rigs, calibration, and the data analysis that proves it works.',
  email: 'lfeng22@jh.edu',
  linkedin: 'https://www.linkedin.com/in/lucas-feng',
  linkedinLabel: 'linkedin.com/in/lucas-feng',
  github: 'https://github.com/lucasfeng7',
  githubLabel: 'github.com/lucasfeng7',
  resumePath: '/resume.pdf',
} as const;

export const nav = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/resume', label: 'Résumé' },
] as const;
