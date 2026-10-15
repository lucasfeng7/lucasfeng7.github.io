export const site = {
  name: 'Lucas Feng',
  role: 'Mechanical Engineering, Johns Hopkins University',
  heroGreeting: "Hi, I'm Lucas.",
  heroBio:
    "I'm a mechanical engineering student at Johns Hopkins. I build hardware for robotic hands: actuators, force and tactile sensors, and the calibration that makes their data trustworthy.",
  about: [
    "I'm a mechanical engineering student at Johns Hopkins University. I research dexterous robotic hands in the SciPhy Laboratory, where I'm helping develop the ODD hand, and force and tactile sensing in the Neuroengineering & Biomedical Instrumentation Laboratory.",
    'I build instrumented hardware end to end: CAD, nonlinear FEA, fabrication, test rigs, calibration, and the data analysis that proves it works.',
  ],
  education: {
    school: 'Johns Hopkins University, Whiting School of Engineering',
    degree: 'B.S. Mechanical Engineering, expected May 2029',
    gpa: 'GPA 3.88 / 4.0',
  },
  experience: [
    { role: 'Mechanical Engineering Researcher, Dexterous Robotic Hands', org: 'Johns Hopkins SciPhy Laboratory', dates: 'Sep 2026 – present' },
    { role: 'Mechanical Engineering Researcher, Force and Tactile Sensing', org: 'Johns Hopkins Neuroengineering and Biomedical Instrumentation Laboratory', dates: 'May 2026 – present' },
    { role: 'Drivetrain Engineer', org: 'Johns Hopkins Baja SAE', dates: 'Sep 2025 – present' },
    { role: 'Associate', org: 'A-Level Capital', dates: 'Feb 2026 – present' },
  ],
  skills: [
    { group: 'Design & simulation', items: ['SolidWorks (CAD & FEA)', 'Onshape', 'KiCad'] },
    { group: 'Languages', items: ['Python', 'C++'] },
    { group: 'Manufacturing', items: ['CNC lathe and mill', 'FDM and resin 3D printing', 'Laser cutting'] },
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
