import type { DeveloperProfileModel } from '@/profile/developer-profile';
import { PrintHeader } from './PrintHeader';
import { PrintSection } from './PrintSection';
import { PrintSummary } from './PrintSummary';
import { PrintExperience } from './PrintExperience';
import { experiences } from '@/profile/experience';

interface PrintProfileProps {
  profile: DeveloperProfileModel;
}

export function PrintProfile({ profile }: PrintProfileProps) {
  return (
    <main
      className="
        mx-auto
        flex
        w-full
        max-w-[210mm]
        flex-col
        gap-6
        bg-white
        px-[16mm]
        py-[12mm]
      "
    >
      <PrintHeader personal={profile.personal} languages={profile.languages} />

      <PrintSection title="Summary">
        <PrintSummary summary={profile.summary} />
      </PrintSection>

      <PrintSection title="Experience">
        <PrintExperience experiences={experiences} />
      </PrintSection>

      <PrintSection title="Core Technologies">
        <p className="max-w-[100mm] text-sm leading-6 text-slate-700">
          {profile.skills.map(({ name }) => name).join(' • ')}
        </p>
      </PrintSection>
    </main>
  );
}
