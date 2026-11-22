import medinsightOne from './assets/photos/medinsight 1.jpg'
import medinsightTwo from './assets/photos/medinsight 2.jpg'
import draiImage from './assets/photos/drai 1.png'

export const identity = {
  name: 'Shahnawaz Alam',
  role: 'Software Engineer · AI/ML & Full-Stack Systems',
  summary:
    'Software Engineer with hands-on experience in AI/ML and full-stack development. Worked on projects involving Python, FastAPI, React, PyTorch, LangGraph, and LLM applications, including model fine-tuning, pruning, and tool calling. I also have experience in AI/ML research and deploying machine learning models in resource-constrained environments.',
  email: 'shahnawaz.alam1024@gmail.com',
  phone: '+91 9849575681',
  github: 'https://github.com/shahnawaz-alam37',
  linkedin: 'https://linkedin.com/in/shahnawaz-alam37',
  researchGate: '',
}

export const metrics = [
  {
    value: '200',
    unit: 'ms',
    label: 'Leaf-image inference',
    source: 'Plant Pathology · PyTorch + FastAPI',
    scale: 0.82,
  },
  {
    value: '40',
    unit: '%',
    label: 'Smaller ResNet18',
    source: 'Structured pruning · no significant accuracy loss',
    scale: 0.4,
  },
  {
    value: '70',
    unit: '%',
    label: 'Lower GPU memory',
    source: 'Medical Q&A LLM · 4-bit QLoRA',
    scale: 0.7,
  },
  {
    value: '2',
    unit: '×',
    label: 'Model compression',
    source: 'Edge pruning study · >85% baseline accuracy',
    scale: 0.66,
  },
]

export const skillGroups = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'Go', 'C/C++', 'Java'] },
  { label: 'Machine learning / AI', items: ['PyTorch', 'LLM fine-tuning', 'Classification & regression', 'LangChain', 'LangGraph'] },
  { label: 'Backend', items: ['Flask', 'Django', 'FastAPI', 'ExpressJS'] },
  { label: 'Frontend', items: ['ReactJS', 'React Native (Expo)'] },
  { label: 'Cloud / infrastructure', items: ['AWS EC2', 'S3', 'Route 53', 'CloudFront'] },
  { label: 'Databases', items: ['MySQL', 'MongoDB', 'QdrantDB'] },
  { label: 'Developer tools', items: ['Git / GitHub', 'Docker', 'Linux'] },
  { label: 'AI-assisted development', items: ['Cursor', 'Claude Code', 'OpenCode', 'GitHub Copilot'] },
]

export const projects = [
  {
    number: '01',
    title: 'Plant Pathology',
    stack: 'PyTorch · FastAPI · React Native · AWS',
    summary: 'A two-stage production ML pipeline for mobile leaf-disease diagnosis.',
    details: [
      'Built a binary Leaf vs. Not-Leaf classifier followed by a 31-class disease classifier using a pruned and fine-tuned ResNet18.',
      'Deployed low-latency PyTorch + FastAPI inference APIs processing leaf images in under 200ms for real-time mobile use.',
      'Applied structured model pruning to reduce ResNet18 size by 40% without significant accuracy loss.',
      'Developed a cross-platform React Native (Expo) client with camera integration and live inference feedback.',
    ],
    pipeline: ['Leaf / not-leaf', '31-class disease model', 'FastAPI inference', 'Expo mobile client'],
    facts: ['<200 ms inference', '40% smaller model', '31 disease classes'],
    githubUrl: '',
  },
  {
    number: '02',
    title: 'AI Research Agent',
    stack: 'Python · FastAPI · LangGraph · React · TypeScript · Exa',
    summary: 'An agentic research platform that gathers evidence and answers with citations.',
    details: [
      'Built an agent that decides when to invoke web-search tools, iteratively gathers evidence, and generates citation-backed answers.',
      'Engineered tool orchestration, controlled loops, parallel search, token safeguards, and structured observability logs.',
      'Developed a React + TypeScript UI with Markdown responses, source citations, copy/export-to-PDF, and a design ready for memory, evaluation, and more tools.',
    ],
    pipeline: ['Query', 'Tool decision', 'Parallel search', 'Cited answer'],
    facts: ['Citation-backed output', 'Controlled agent loops', 'Structured logs'],
    githubUrl: '',
  },
  {
    number: '03',
    title: 'ResumeForge',
    stack: 'LangGraph · FastAPI · Docker · Tectonic',
    summary: 'A multi-agent pipeline that turns job descriptions and profiles into ATS documents.',
    details: [
      'Architected a multi-agent ML pipeline that ingests job descriptions and candidate profiles to generate ATS-optimized documents.',
      'Implemented a self-healing workflow where an LLM agent detects and fixes build errors until a valid output is produced.',
      'Containerized the build pipeline for reproducible, isolated, portable execution.',
      'Designed a modular plugin architecture supporting multiple OpenAI-compatible LLM providers.',
    ],
    pipeline: ['Job + profile', 'Agent orchestration', 'Document build', 'Self-healing retry'],
    facts: ['Docker isolated', 'Multi-provider', 'Self-healing build'],
    githubUrl: '',
  },
  {
    number: '04',
    title: 'Medical Q&A LLM',
    stack: 'PyTorch · QLoRA · Unsloth · Hugging Face',
    summary: 'A fine-tuned Phi-3-mini conversational agent for medical questions.',
    details: [
      'Fine-tuned Phi-3-mini on the MedQuAD dataset using QLoRA/PEFT, taking the model from research to a deployable checkpoint.',
      'Reduced GPU memory footprint by 70% with 4-bit quantization and Unsloth optimizations.',
      'Published the model on Hugging Face, reaching 73+ downloads.',
    ],
    pipeline: ['MedQuAD', '4-bit QLoRA', 'Unsloth training', 'Published checkpoint'],
    facts: ['70% lower GPU memory', '73+ downloads', 'Phi-3-mini'],
    githubUrl: '',
  },
  {
    number: '05',
    title: 'MedInsight',
    stack: 'React Native · React · Node.js · MongoDB · AWS S3',
    summary: 'A medical data platform spanning mobile, web, and API surfaces.',
    details: [
      'Developed a medical data management system with a mobile app, web app, and Node.js backend API using MongoDB and AWS S3 storage.',
      'Incorporated an AI chatbot that synthesizes key patient information and OCR-based document analysis for unstructured data.',
      'Built end to end with a focus on data integrity and quality control.',
    ],
    images: [medinsightOne, medinsightTwo],
    imageAlt: 'MedInsight interface screenshots',
    pipeline: ['Mobile + web clients', 'Node.js API', 'MongoDB records', 'OCR + S3 documents'],
    facts: ['Mobile + web + API', 'OCR document analysis', 'AWS S3 storage'],
    githubUrl: '',
  },
  {
    number: '06',
    title: 'Dr.AI',
    stack: 'Flask · Speech recognition · TTS · LLM',
    summary: 'A 36-hour hackathon build for real-time medical simulation and evaluation.',
    details: [
      'Designed and built the Flask backend for a real-time medical simulation platform, handling concurrent voice sessions and transcript processing.',
      'Integrated speech recognition and TTS with a modular LLM evaluation pipeline that scores conversation quality and produces trainee feedback.',
      'Guided full-stack integration and delivery under a tight deadline.',
    ],
    image: draiImage,
    imageAlt: 'Dr.AI application screenshot',
    pipeline: ['Voice input', 'Speech recognition', 'LLM patient + evaluation', 'TTS response'],
    externalLink: 'https://www.youtube.com/watch?v=YCKaKhuZ_RM',
    externalLabel: 'Watch demo',
    facts: ['36-hour build', 'Voice sessions', 'Transcript evaluation'],
    githubUrl: '',
  },
]

export const papers = [
  {
    number: 'P/01',
    title: 'Meta-Learning Guided Pruning for Few-Shot Plant Pathology on Edge Devices',
    identifier: 'arXiv:2601.02353',
    year: '2026',
    url: 'https://arxiv.org/abs/2601.02353',
    summary: 'A pruning strategy that optimizes few-shot generalization and edge deployment together.',
    approach: [
      'Proposed a meta-learning guided pruning strategy jointly optimizing few-shot generalization and edge-deployment constraints.',
      'Evaluated on 10-shot plant disease benchmarks with resource-limited hardware in view.',
    ],
    results: [
      '2× model compression while retaining over 85% of baseline accuracy.',
      'Real-time inference demonstrated on ARM-based edge devices.',
    ],
  },
  {
    number: 'P/02',
    title: 'DriftGuard: A Hierarchical Framework for Concept Drift Detection and Remediation in Supply Chain Forecasting',
    identifier: 'arXiv:2601.08928',
    year: '2026',
    url: 'https://arxiv.org/abs/2601.08928',
    summary: 'A five-module framework that detects, diagnoses, and remediates drift in deployed forecasting models.',
    approach: [
      'Co-authored a hierarchical framework for production ML systems monitoring supply chain forecasts.',
      'Addresses model degradation from evolving data patterns, a core MLOps maintenance problem.',
    ],
    results: [
      'Five modules spanning drift detection, root-cause diagnosis, and automated remediation.',
    ],
  },
]

export const experience = [
  {
    role: 'Software Engineering Intern',
    organization: 'Synectiks',
    period: 'Jul 2022 — Nov 2022',
    details: [
      'Developed and deployed RESTful APIs in Go for procurement automation microservices handling large-scale vendor datasets.',
      'Contributed to API architecture discussions, error handling, and separation of concerns across services.',
      'Optimized database queries and third-party integrations to reduce response latency.',
    ],
  },
  {
    role: 'Lead, Development Team',
    organization: 'AWS Cloud Club, MJCET',
    period: 'Oct 2024 — Jun 2026',
    details: [
      'Architected and maintained production web infrastructure on AWS EC2, S3, Route 53, and CloudFront.',
      'Automated deployment pipelines, domain registration, SSL/TLS, and CDN integration.',
    ],
  },
  {
    role: 'Lead, Data Science Team',
    organization: 'Technology Special Interest Group (TSIG), MJCET',
    period: 'Aug 2025 — Jun 2026',
    details: [
      'Mentored 30+ members in data science and applied ML from foundations to deployed full-stack applications.',
      'Designed and led hands-on workshops translating ML theory into production-grade project work.',
    ],
  },
]

export const education = [
  {
    institution: 'Muffakham Jah College of Engineering and Technology',
    qualification: 'M.Tech. in Computer Science and Engineering · Pursuing',
    period: '2026 — 2028',
  },
  {
    institution: 'Muffakham Jah College of Engineering and Technology — Osmania University',
    qualification: 'B.E. in Computer Science Engineering · CGPA 7.6',
    period: '2026',
  },
  {
    institution: 'Quli Qutub Shah Govt Polytechnic',
    qualification: 'Diploma in Computer Science Engineering · CGPA 8.36',
    period: '2023',
  },
]

export const activity = [
  {
    number: 'A/01',
    title: 'Data science team lead · TSIG',
    period: 'Aug 2025 — Jun 2026',
    detail: 'Mentored 30+ members and led workshops that moved participants from ML fundamentals to deployed full-stack applications.',
  },
  {
    number: 'A/02',
    title: 'Development team lead · AWS Cloud Club',
    period: 'Oct 2024 — Jun 2026',
    detail: 'Maintained production web infrastructure and automated deployment, TLS, and CDN workflows across club projects.',
  },
  {
    number: 'A/03',
    title: '36-hour medical AI hackathon',
    period: 'Dr.AI',
    detail: 'Built and integrated a voice-based clinical simulation with speech recognition, TTS, and automated transcript evaluation.',
  },
]
