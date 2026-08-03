import type { DeveloperProfile } from './types';
import { ProfileHeader } from './ProfileHeader';
import { Summary } from '@/profile/Summary';
import { experiences, WorkExperience } from '@/profile/experience';
import { Section } from '@/shared/ui/Section';
import { Skills } from '@/profile/skills';
import { Languages } from '@/profile/Languages';

interface DeveloperProfileProps {
  profile: DeveloperProfile;
}

export function DeveloperProfile({ profile }: DeveloperProfileProps) {
  return (
    <div className="space-y-8">
      <ProfileHeader personal={profile.personal} />

      <Section id="overview" title="Summary">
        <Summary summary={profile.summary} />
      </Section>

      <Section id="experience" title="Experience">
        <WorkExperience experiences={experiences} />
      </Section>

      <Section id="skills" title="Skills">
        <Skills skills={profile.skills} />
      </Section>

      <Section id="languages" title="Languages">
        <Languages languages={profile.languages} />
      </Section>
    </div>
  );
}
