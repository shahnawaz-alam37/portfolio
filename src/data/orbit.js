export const orbitSkills = [
  { label: 'PyTorch', ring: 1, angle: 0, category: 'ai' },
  { label: 'LLMs', ring: 1, angle: 120, category: 'ai' },
  { label: 'LangGraph', ring: 1, angle: 240, category: 'ai' },
  { label: 'React', ring: 2, angle: 30, category: 'swe' },
  { label: 'FastAPI', ring: 2, angle: 100, category: 'swe' },
  { label: 'TypeScript', ring: 2, angle: 170, category: 'swe' },
  { label: 'QLoRA', ring: 2, angle: 250, category: 'ai' },
  { label: 'Docker', ring: 2, angle: 320, category: 'tools' },
  { label: 'AWS', ring: 3, angle: 15, category: 'tools' },
  { label: 'Go', ring: 3, angle: 80, category: 'swe' },
  { label: 'HuggingFace', ring: 3, angle: 150, category: 'ai' },
  { label: 'Python', ring: 3, angle: 210, category: 'swe' },
  { label: 'Qdrant', ring: 3, angle: 285, category: 'tools' },
]

export function orderedOrbitSkills(role) {
  if (role === 'ai') {
    const order = { ai: 0, swe: 1, tools: 2 }
    return [...orbitSkills].sort((a, b) => order[a.category] - order[b.category])
  }
  if (role === 'swe') {
    const order = { swe: 0, ai: 1, tools: 2 }
    return [...orbitSkills].sort((a, b) => order[a.category] - order[b.category])
  }
  return orbitSkills
}

export const marqueeItems = [
  'PyTorch', 'LangGraph', 'FastAPI', 'React', 'TypeScript', 'QLoRA',
  'HuggingFace', 'Docker', 'AWS', 'Python', 'Go', 'Unsloth', 'Qdrant',
  'LangChain', 'React Native', 'Flask',
]

export const stats = [
  { value: 12, suffix: '+', label: 'Projects shipped' },
  { value: 3, suffix: '', label: 'Research papers' },
  { value: 5, suffix: '', label: 'Hackathons' },
  { value: 99, suffix: '.9%', label: 'Infra uptime' },
]
