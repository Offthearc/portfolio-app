export const profile = {
  name: 'David Parrar',
  title: 'Software Engineer',
  tagline: 'Building clean, performant web experiences.',
  email: 'davidc.parrar@gmail.com',
  github: 'https://github.com/Offthearc',
  linkedin: 'https://linkedin.com/in/davidparrar',
  bio: `I'm a software engineer who loves crafting elegant solutions to complex problems.
I specialize in full-stack web development with a passion for clean code, great UX, and shipping things that matter.`,
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  url?: string
  repo?: string
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Portfolio App',
    description: 'This very site — built with React, TypeScript, and Vite. Deployed to Vercel.',
    tags: ['React', 'TypeScript', 'Vite'],
    repo: 'https://github.com/Offthearc/portfolio-app',
  },
  {
    id: 'p2',
    title: 'Open Source Contributions',
    description: 'Contributed bug fixes and features to various open-source projects.',
    tags: ['Open Source', 'Collaboration'],
  },
  {
    id: 'p3',
    title: 'CLI Tooling',
    description: 'Internal developer tooling to automate repetitive tasks and streamline CI/CD workflows.',
    tags: ['Node.js', 'Bash', 'DevOps'],
  },
]

export interface Skill {
  category: string
  items: string[]
}

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Bash'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Vite', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'REST APIs', 'SQL', 'PostgreSQL'],
  },
  {
    category: 'Tools & Infra',
    items: ['Git', 'GitHub Actions', 'Vercel', 'Docker'],
  },
]
