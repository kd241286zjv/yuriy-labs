import type { Skill, SkillCategory } from '@/shared/skill';
import { categoryTitles } from '@/shared/skill';

import { SkillCategory as SkillCategoryComponent } from './SkillCategory';
import { groupSkills } from '@/shared/skill/utils.ts';

interface SkillsProps {
  skills: Skill[];
}

const categoryOrder: SkillCategory[] = [
  'frontend',
  'backend',
  'database',
  'testing',
  'architecture',
  'tooling',
  'devops',
  'ai',
];

export function Skills({ skills }: SkillsProps) {
  const groupedSkills = groupSkills(skills);

  Object.values(groupedSkills).forEach((skills) => {
    skills.sort((a, b) => a.priority - b.priority);
  });

  return (
    <div className="space-y-6">
      {categoryOrder.map((category) => {
        const categorySkills = groupedSkills[category];

        if (!categorySkills?.length) {
          return null;
        }

        return (
          <SkillCategoryComponent
            key={category}
            title={categoryTitles[category]}
            skills={categorySkills}
          />
        );
      })}
    </div>
  );
}
