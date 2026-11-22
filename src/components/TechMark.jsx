import {
  SiAmazons3,
  SiAmazonec2,
  SiAmazonroute53,
  SiAmazonwebservices,
  SiClaude,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiGo,
  SiJavascript,
  SiLangchain,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiOpenjdk,
  SiPython,
  SiPytorch,
  SiReact,
  SiTypescript,
} from 'react-icons/si'

const marks = {
  Python: SiPython,
  JavaScript: SiJavascript,
  Go: SiGo,
  'C/C++': SiCplusplus,
  Java: SiOpenjdk,
  PyTorch: SiPytorch,
  LangChain: SiLangchain,
  Flask: SiFlask,
  Django: SiDjango,
  FastAPI: SiFastapi,
  ExpressJS: SiExpress,
  ReactJS: SiReact,
  React: SiReact,
  'React Native': SiReact,
  'React Native (Expo)': SiExpo,
  Expo: SiExpo,
  AWS: SiAmazonwebservices,
  'AWS EC2': SiAmazonec2,
  S3: SiAmazons3,
  'Route 53': SiAmazonroute53,
  CloudFront: SiAmazonwebservices,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  'Git / GitHub': SiGit,
  Docker: SiDocker,
  Linux: SiLinux,
  'Claude Code': SiClaude,
  'GitHub Copilot': SiGithubcopilot,
  TypeScript: SiTypescript,
}

function TechMark({ name }) {
  const Icon = marks[name]

  if (!Icon) return null

  return (
    <span className="tech-mark" title={name} aria-hidden="true">
      <Icon />
    </span>
  )
}

export default TechMark
