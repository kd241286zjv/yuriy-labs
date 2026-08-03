import type { SkillCategory } from '@/shared/skill';

export const categoryTitles: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Databases',
  testing: 'Testing',
  architecture: 'Architecture',
  tooling: 'Tooling',
  devops: 'DevOps',
  ai: 'AI',
};

export const categoryOrder = [
  'frontend',
  'backend',
  'database',
  'testing',
  'architecture',
  'tooling',
  'devops',
  'ai',
] as const;
