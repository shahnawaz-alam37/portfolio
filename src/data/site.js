import resumePdf from '../assets/resume (1).pdf'

export const site = {
  name: 'Shahnawaz Alam',
  role: 'Engineer · Researcher · Builder',
  email: 'shahnawaz.alam1024@gmail.com',
  phone: '+91 9849575681',
  location: 'Hyderabad, India',
  url: 'https://shahnawaz-alam.vercel.app',
  description:
    'Software engineer building AI/ML and full-stack systems — from research to production. PyTorch, LLMs, FastAPI, React.',
  keywords: [
    'AI engineer',
    'ML engineer',
    'software engineer',
    'PyTorch',
    'LLMs',
    'FastAPI',
    'React',
    'LangGraph',
    'Shahnawaz Alam',
  ],
  resumeUrl: resumePdf,
  social: {
    github: 'https://github.com/shahnawaz-alam37',
    linkedin: 'https://linkedin.com/in/shahnawaz-alam37',
    scholar: 'https://scholar.google.com',
    researchgate: 'https://www.researchgate.net',
  },
  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'Research', href: '/#research' },
    { label: 'Hackathons', href: '/#hackathons' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shahnawaz Alam',
    url: 'https://shahnawaz-alam.vercel.app',
    email: 'mailto:shahnawaz.alam1024@gmail.com',
    sameAs: [
      'https://github.com/shahnawaz-alam37',
      'https://linkedin.com/in/shahnawaz-alam37',
    ],
    jobTitle: 'Software Engineer',
    knowsAbout: [
      'Machine Learning',
      'Large Language Models',
      'Software Engineering',
      'PyTorch',
      'React',
    ],
  },
}

export const socialLinks = [
  { label: 'GitHub', href: site.social.github },
  { label: 'LinkedIn', href: site.social.linkedin },
  { label: 'Scholar', href: site.social.scholar },
  { label: 'ResearchGate', href: site.social.researchgate },
]
