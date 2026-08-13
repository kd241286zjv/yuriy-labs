import type { skillRegistry } from '@/shared/skill/constants';

export interface Skill {
  id: SkillId;
  name: string;
  category: SkillCategory;
  priority: number;
  visibleInPDF?: boolean;
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

export { skillRegistry, categoryTitles, categoryOrder } from './constants';

export { groupSkills } from './utils';
