import type { skillRegistry } from '@/shared/skill/constants';

export interface Skill {
  id: SkillId;
  name: string;
  category: SkillCategory;
  priority: number;
}

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'testing'
  | 'architecture'
  | 'tooling'
  | 'devops'
  | 'ai';

export type SkillId = keyof typeof skillRegistry;
