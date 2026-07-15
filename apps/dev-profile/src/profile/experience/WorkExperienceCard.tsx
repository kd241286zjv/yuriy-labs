import type { Experience } from './types';
import { Badge } from '@/shared/ui/Badge';
import { formatEmploymentPeriod } from '@/shared/lib/date';

interface ExperienceItemProps {
  experience: Experience;
  isLast: boolean;
}

export function WorkExperienceCard({ experience, isLast }: ExperienceItemProps) {
  return (
    <article className={`border-slate-200 pb-8 mb-8 ${!isLast && 'border-b border-dashed'}`}>
      <header className="mb-4">
        <div className="flex items-start gap-6">
          <div>
            <h3 className="text-xl font-semibold">{experience.role}</h3>

            <a
              href={experience.company.website}
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-slate-900"
            >
              {experience.company.name}
            </a>

            <span className="text-slate-500">
              {' · '}
              {experience.company.location}
            </span>
          </div>

          <p className="shrink-0 text-sm text-slate-500 leading-[32px]">
            {formatEmploymentPeriod(experience.period)}
          </p>
        </div>
      </header>

      <p className="mb-4 text-slate-700">{experience.summary}</p>

      <ul className="mb-4 list-disc space-y-2 pl-5">
        {experience.achievements.map((achievement) => (
          <li key={achievement.id}>{achievement.text}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <Badge key={skill.id}>{skill.name}</Badge>
        ))}
      </div>
    </article>
  );
}
