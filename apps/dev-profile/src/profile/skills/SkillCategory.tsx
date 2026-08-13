import type { Skill } from '@/shared/skill';
import { Badge } from '@/shared/ui/Badge';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold tracking-wide text-slate-500">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill.id}>{skill.name}</Badge>
        ))}
      </div>
    </div>
  );
}
