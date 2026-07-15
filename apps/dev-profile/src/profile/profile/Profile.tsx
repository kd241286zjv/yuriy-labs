import type { Profile } from './types';
import { Section } from '@/shared/ui/Section';
import { ProfileHeader } from '../ProfileHeader';
import { Summary } from '../Summary';
import { Skills } from '@/profile/skills';
import { Languages } from '../Languages';
import { WorkExperience } from '@/profile/experience/WorkExperience';
import { experiences } from '@/profile/experience';

interface ProfileProps {
  profile: Profile;
}

export function Profile({ profile }: ProfileProps) {
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
