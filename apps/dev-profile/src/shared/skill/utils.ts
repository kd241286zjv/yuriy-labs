import type { Skill, SkillCategory } from '@/shared/skill/index.ts';

export const groupSkills = (skills: Skill[]) => {
  return skills.reduce(
    (groups, skill) => {
      if (!groups[skill.category]) {
        groups[skill.category] = [];
      }

      groups[skill.category].push(skill);

      return groups;
    },
    {} as Record<SkillCategory, Skill[]>,
  );
};
