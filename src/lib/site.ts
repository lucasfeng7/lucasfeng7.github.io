export const site = {
  name: 'Lucas Feng',
  role: 'Mechanical Engineering, Johns Hopkins University',
  heroGreeting: "Hi, I'm Lucas.",
  heroBio:
    "I'm a mechanical engineering student at Johns Hopkins. I build instrumented hardware end to end: sensors, test rigs, and the calibration that makes their data trustworthy.",
  about: [
    "I'm a mechanical engineering student at Johns Hopkins University, doing research in the Neuroengineering & Biomedical Instrumentation Lab.",
    'I build instrumented hardware end to end: CAD, nonlinear FEA, fabrication, test rigs, calibration, and the data analysis that proves it works.',
  ],
  skills: [
    { group: 'Design & analysis', items: ['SolidWorks', 'SolidWorks Simulation (nonlinear, hyperelastic FEA)', 'Python (regularized least squares, data analysis)'] },
    { group: 'Fabrication', items: ['FDM and resin 3D printing', 'Silicone molding'] },
    { group: 'Electronics & robotics', items: ['Teensy / C++ firmware', 'UR5e / RTDE'] },
  ],
  tagline:
    'Mechanical engineering student who builds instrumented hardware end to end: CAD, nonlinear FEA, fabrication, test rigs, calibration, and the data analysis that proves it works.',
  email: 'lfeng22@jh.edu',
  linkedin: 'https://www.linkedin.com/in/lucas-feng',
  github: 'https://github.com/lucasfeng7',
  resumePath: '/resume.pdf',
} as const;

export const nav = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/resume', label: 'Résumé' },
] as const;
