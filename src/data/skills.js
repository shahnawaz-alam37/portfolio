export const skillGroups = [
  {
    label: 'AI / ML',
    category: 'ai',
    items: [
      { name: 'PyTorch', level: '3 yrs' },
      { name: 'LLM Fine-tuning', level: '2 yrs' },
      { name: 'QLoRA / PEFT', level: '2 yrs' },
      { name: 'Classification & Regression', level: '3 yrs' },
      { name: 'LangChain', level: '2 yrs' },
      { name: 'LangGraph', level: '2 yrs' },
      { name: 'Model Pruning', level: '1 yr' },
      { name: 'Vector Databases (Qdrant)', level: '1 yr' },
    ],
  },
  {
    label: 'Software Engineering',
    category: 'swe',
    items: [
      { name: 'Python', level: '4 yrs' },
      { name: 'JavaScript / TypeScript', level: '3 yrs' },
      { name: 'Go', level: '1 yr' },
      { name: 'C / C++ / Java', level: '3 yrs' },
      { name: 'FastAPI', level: '2 yrs' },
      { name: 'Flask / Django', level: '2 yrs' },
      { name: 'React / React Native', level: '2 yrs' },
      { name: 'ExpressJS', level: '1 yr' },
    ],
  },
  {
    label: 'Tools / Infra',
    category: 'tools',
    items: [
      { name: 'AWS (EC2, S3, Route 53, CloudFront)', level: '2 yrs' },
      { name: 'Docker', level: '2 yrs' },
      { name: 'Git / GitHub', level: '4 yrs' },
      { name: 'Linux', level: '3 yrs' },
      { name: 'MySQL / MongoDB', level: '2 yrs' },
      { name: 'AI-Assisted Dev (Cursor, Claude Code)', level: '2 yrs' },
    ],
  },
]

export function orderedSkillGroups(role) {
  if (role === 'ai') {
    const order = { ai: 0, swe: 1, tools: 2 }
    return [...skillGroups].sort((a, b) => order[a.category] - order[b.category])
  }
  if (role === 'swe') {
    const order = { swe: 0, ai: 1, tools: 2 }
    return [...skillGroups].sort((a, b) => order[a.category] - order[b.category])
  }
  return skillGroups
}
