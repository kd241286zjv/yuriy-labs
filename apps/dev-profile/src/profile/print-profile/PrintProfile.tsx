import type { DeveloperProfileModel } from '@/profile/developer-profile';

import { PrintHeader } from './PrintHeader';
import { PrintSection } from '@/profile/print-profile/PrintSection.tsx';

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
      <PrintHeader personal={profile.personal} />

      <PrintSection title="Summary">
        <p className="text-sm leading-relaxed text-slate-800">{profile.summary}</p>
      </PrintSection>
    </main>
  );
}
