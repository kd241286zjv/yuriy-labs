import type { ExperienceModel } from '@/profile/experience';
import { PrintExperienceItem } from './PrintExperienceItem';

interface PrintExperienceProps {
  experiences: ExperienceModel[];
}

export function PrintExperience({ experiences }: PrintExperienceProps) {
  return (
    <div className="space-y-6">
      {experiences.map((experience) => (
        <PrintExperienceItem key={experience.id} experience={experience} />
      ))}
    </div>
  );
}
