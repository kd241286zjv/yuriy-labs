import type { ExperienceModel } from '@/profile/experience';
import { formatEmploymentPeriod } from '@/shared/lib/date';

interface PrintExperienceItemProps {
  experience: ExperienceModel;
}

export function PrintExperienceItem({ experience }: PrintExperienceItemProps) {
  return (
    <article
      className="
        break-inside-avoid
        border-b
        border-slate-100
        pb-5
        last:border-b-0
        last:pb-0
      "
    >
      <header className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-slate-950">{experience.role}</h3>

          <p className="text-sm text-slate-500">{experience.company.name}</p>
        </div>

        <p className="whitespace-nowrap text-sm text-slate-500">
          {formatEmploymentPeriod(experience.period)}
        </p>
      </header>

      <p className="mt-3 text-sm leading-relaxed text-slate-700">{experience.summary}</p>

      <ul className="mt-3 list-disc space-y-0.5 pl-5 text-sm text-slate-700 leading-6">
        {experience.achievements.map((achievement) => (
          <li key={achievement.id}>{achievement.text}</li>
        ))}
      </ul>
    </article>
  );
}
