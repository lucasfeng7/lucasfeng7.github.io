export const site = {
  name: 'Lucas Feng',
  role: 'Mechanical Engineering — Johns Hopkins University',
  tagline:
    'Mechanical engineering student who builds instrumented hardware end to end — CAD, nonlinear FEA, fabrication, test rigs, calibration, and the data analysis that proves it works.',
  email: 'lfeng22@jh.edu',
  linkedin: 'https://www.linkedin.com/in/lucas-feng',
  linkedinLabel: 'linkedin.com/in/lucas-feng',
  resumePath: '/resume.pdf',
} as const;

export const nav = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
] as const;
