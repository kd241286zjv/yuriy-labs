import { AppLayout } from '@/app/AppLayout';
import { Navigation, navigationItems } from '@/navigation';
import { DeveloperProfile, profileData } from '../profile/developer-profile';
import { PrintProfile } from '@/profile/print-profile';

export function App() {
  return (
    <>
      <div className="print:hidden">
        <AppLayout navigation={<Navigation items={navigationItems} />}>
          <DeveloperProfile profile={profileData} />
        </AppLayout>
      </div>
      <div className="hidden print:block">
        <PrintProfile profile={profileData} />
      </div>
    </>
  );
}
