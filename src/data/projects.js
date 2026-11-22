const GITHUB = 'https://github.com/shahnawaz-alam37'

export const projects = [
  {
    slug: 'plant-pathology',
    title: 'Plant Pathology',
    category: 'ai',
    tagline: 'Two-stage production ML pipeline for 31-class crop disease detection.',
    year: '2025',
    featured: true,
    tech: ['PyTorch', 'FastAPI', 'React Native', 'AWS'],
    links: [{ label: 'GitHub', href: GITHUB }],
    impact: '200ms inference on mobile with a 40% smaller model.',
    metrics: [
      { label: 'Model size reduction', value: '40%' },
      { label: 'Inference latency', value: '<200ms' },
      { label: 'Disease classes', value: '31' },
    ],
    caseStudy: {
      problem:
        'Farmers need rapid, on-device identification of crop diseases, but full-size models are too heavy for edge deployment and too slow for real-time mobile use.',
      approach:
        'Built a two-stage pipeline: a binary Leaf vs. Not-Leaf gate, then a 31-class disease classifier on a pruned and fine-tuned ResNet18. Structured pruning cut the model size while preserving accuracy, and a FastAPI inference service kept latency low for the React Native client.',
      results: [
        'Reduced ResNet18 size by 40% with negligible accuracy loss via structured pruning.',
        'Sub-200ms leaf-image inference through a PyTorch + FastAPI service.',
        'Cross-platform React Native (Expo) client with live camera feedback.',
      ],
      stack: ['PyTorch', 'FastAPI', 'React Native', 'Expo', 'AWS'],
    },
  },
  {
    slug: 'resumeforge',
    title: 'ResumeForge',
    category: 'ai',
    tagline: 'Multi-agent LangGraph pipeline that generates ATS-optimized resumes.',
    year: '2025',
    featured: true,
    tech: ['LangGraph', 'FastAPI', 'Docker', 'Tectonic'],
    links: [{ label: 'GitHub', href: GITHUB }],
    impact: 'Self-healing agents retry until a valid build is produced.',
    metrics: [
      { label: 'Agents', value: '4' },
      { label: 'Providers', value: 'Multi' },
      { label: 'Containerized', value: 'Yes' },
    ],
    caseStudy: {
      problem:
        'Tailoring a resume to each job description is slow and error-prone, and generated LaTeX builds frequently fail to compile.',
      approach:
        'Architected a LangGraph multi-agent pipeline that ingests a job description and candidate profile, drafts an ATS-optimized LaTeX document, and self-heals: an LLM agent inspects build errors and iteratively retries until compilation succeeds. The whole pipeline runs in a lightweight Docker service for reproducible execution.',
      results: [
        'End-to-end autonomous resume generation orchestrated with LangGraph.',
        'Self-healing loop detects and fixes LaTeX build errors automatically.',
        'Modular plugin architecture supports any OpenAI-compatible provider.',
      ],
      stack: ['LangGraph', 'FastAPI', 'Docker', 'Tectonic', 'Python'],
    },
  },
  {
    slug: 'ai-research-agent',
    title: 'AI Research Agent',
    category: 'ai',
    tagline: 'Autonomous LLM agent that decides when to search the web and cites sources.',
    year: '2025',
    featured: true,
    tech: ['Python', 'FastAPI', 'LangGraph', 'React', 'TypeScript', 'Exa'],
    links: [{ label: 'GitHub', href: GITHUB }],
    impact: 'Citation-backed answers from an agent that reasons about when to search.',
    metrics: [
      { label: 'Tool calls', value: 'Autonomous' },
      { label: 'Citations', value: 'Per-claim' },
      { label: 'UI', value: 'React+TS' },
    ],
    caseStudy: {
      problem:
        'LLM answers are only as trustworthy as their sources. A naive chatbot hallucinates; researchers need evidence-backed answers with visible citations.',
      approach:
        'Built an agentic loop where the LLM decides when to invoke web-search tools, runs searches in parallel, and assembles citation-backed answers. Added token/context safeguards, structured observability logs, and a React + TypeScript UI with Markdown rendering, copy, and export-to-PDF.',
      results: [
        'Agent autonomously invokes web search only when needed.',
        'Parallel search execution with context and token safeguards.',
        'React + TypeScript UI with Markdown, citations, and PDF export.',
      ],
      stack: ['Python', 'FastAPI', 'LangGraph', 'React', 'TypeScript', 'Exa'],
    },
  },
  {
    slug: 'medical-qa-llm',
    title: 'Medical Q&A LLM',
    category: 'ai',
    tagline: 'QLoRA fine-tuned Phi-3-mini medical conversational agent.',
    year: '2025',
    featured: true,
    tech: ['PyTorch', 'QLoRA', 'Unsloth', 'HuggingFace'],
    links: [
      { label: 'HuggingFace', href: 'https://huggingface.co' },
      { label: 'GitHub', href: GITHUB },
    ],
    impact: '70% GPU memory reduction enabled fine-tuning on consumer hardware.',
    metrics: [
      { label: 'Memory reduction', value: '70%' },
      { label: 'Downloads', value: '73+' },
      { label: 'Method', value: 'QLoRA' },
    ],
    caseStudy: {
      problem:
        'General-purpose LLMs underperform on medical dialogue, and fine-tuning large models is infeasible on consumer-grade GPUs.',
      approach:
        'Fine-tuned Phi-3-mini on the MedQuAD dataset using QLoRA/PEFT, applying 4-bit quantization and Unsloth optimizations to bring fine-tuning within reach of resource-constrained hardware. Published the checkpoint to Hugging Face for community reuse.',
      results: [
        'Reduced GPU memory footprint by 70% via 4-bit quantization + Unsloth.',
        'Fine-tuning feasible on consumer-grade hardware.',
        'Published to Hugging Face with 73+ downloads and positive adoption.',
      ],
      stack: ['PyTorch', 'QLoRA', 'Unsloth', 'HuggingFace', 'PEFT'],
    },
  },
  {
    slug: 'dr-ai',
    title: 'Dr.AI',
    category: 'swe',
    tagline: 'Real-time medical simulation backend for a 36-hour hackathon.',
    year: '2024',
    featured: true,
    tech: ['Flask', 'Speech Recognition', 'TTS', 'LLM'],
    links: [{ label: 'GitHub', href: GITHUB }],
    impact: 'Concurrent voice sessions with LLM-driven evaluation feedback.',
    metrics: [
      { label: 'Built in', value: '36h' },
      { label: 'Sessions', value: 'Concurrent' },
      { label: 'Feedback', value: 'Automated' },
    ],
    caseStudy: {
      problem:
        'Medical trainees need realistic practice with instant, structured feedback — but human evaluation doesn’t scale.',
      approach:
        'Designed a full-stack Flask backend for a real-time medical simulation platform, handling concurrent voice sessions and transcript processing. Integrated speech recognition and TTS with a modular, LLM-driven evaluation pipeline that analyzes conversation quality and returns actionable feedback.',
      results: [
        'Concurrent voice session handling on Flask.',
        'Speech recognition + TTS integrated with an LLM evaluation pipeline.',
        'Actionable, automated feedback for trainees.',
      ],
      stack: ['Flask', 'Speech Recognition', 'TTS', 'LLM', 'Python'],
    },
  },
  {
    slug: 'go-procurement-api',
    title: 'Procurement Automation API',
    category: 'swe',
    tagline: 'RESTful Go microservices for large-scale vendor data processing.',
    year: '2022',
    featured: true,
    tech: ['Go', 'REST', 'Microservices'],
    links: [{ label: 'GitHub', href: GITHUB }],
    impact: 'Optimized queries and clean service boundaries in production.',
    metrics: [
      { label: 'Language', value: 'Go' },
      { label: 'Scale', value: 'Production' },
      { label: 'Architecture', value: 'Microservices' },
    ],
    caseStudy: {
      problem:
        'Procurement workflows involved large, noisy vendor datasets and brittle manual processes that didn’t scale.',
      approach:
        'Developed and deployed RESTful APIs in Go for procurement automation microservices, collaborating on API architecture for scalability, robust error handling, and clean separation of concerns. Optimimized database queries and integrated third-party services.',
      results: [
        'Production Go microservices processing large-scale vendor data.',
        'Reduced API response latency via query optimization.',
        'Clean service boundaries with robust error handling.',
      ],
      stack: ['Go', 'REST', 'Microservices', 'PostgreSQL'],
    },
  },
]

export const getFeaturedProjects = () => projects.filter((project) => project.featured)

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug)

export const filterProjects = (role) =>
  role === 'all' ? projects : projects.filter((project) => project.category === role)
