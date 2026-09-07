export const site = {
  name: 'Lucas Feng',
  brand: "Lucas Feng's Portfolio",
  role: 'Mechanical Engineering — Johns Hopkins University',
  heroKicker: "I'm Lucas Feng,",
  heroHeadline: 'a Mechanical Engineer.',
  heroBio: [
    "I'm a mechanical engineering student at Johns Hopkins building instrumented hardware end to end — sensors, test rigs, and the calibration pipelines that make the data trustworthy.",
    "Scroll down to see what I've designed, built, and tested this year.",
  ],
  tagline:
    'Mechanical engineering student who builds instrumented hardware end to end — CAD, nonlinear FEA, fabrication, test rigs, calibration, and the data analysis that proves it works.',
  email: 'lfeng22@jh.edu',
  linkedin: 'https://www.linkedin.com/in/lucas-feng',
  linkedinLabel: 'linkedin.com/in/lucas-feng',
  resumePath: '/resume.pdf',
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
  { href: '/#projects', label: 'Projects' },
] as const;
