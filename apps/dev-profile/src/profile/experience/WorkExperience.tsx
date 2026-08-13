import type { Experience } from './types';
import { WorkExperienceCard } from './WorkExperienceCard';

interface WorkExperienceProps {
  experiences: Experience[];
}

export function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section>
      {experiences.map((experience, index) => (
        <WorkExperienceCard
          key={experience.id}
          experience={experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </section>
  );
}
