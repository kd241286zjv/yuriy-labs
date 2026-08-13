import { categoryTitles, groupSkills, type Skill } from '@/shared/skill';

interface PrintSkillsProps {
  skills: Skill[];
}

export function PrintSkills({ skills }: PrintSkillsProps) {
  const groupedSkills = groupSkills(skills);

  const visibleCategories = ['frontend', 'backend', 'testing', 'tooling'] as const;

  return (
    <div className="space-y-3">
      {visibleCategories.map((category) => {
        const skillsList = groupedSkills[category];

        if (!skillsList?.length) {
          return null;
        }

        return (
          <div key={category} className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              {categoryTitles[category]}
            </h3>

            <p className="text-sm leading-relaxed text-slate-700">
              {skillsList.map(({ name }) => name).join(' • ')}
            </p>
          </div>
        );
      })}
    </div>
  );
}
