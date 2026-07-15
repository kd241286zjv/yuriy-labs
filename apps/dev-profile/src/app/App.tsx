import { AppLayout } from '@/app/AppLayout';
import { Navigation, navigationItems } from '@/navigation';
import { Profile, profile } from '@/profile/profile';

export function App() {
  return (
    <AppLayout navigation={<Navigation items={navigationItems} />}>
      <Profile profile={profile} />
    </AppLayout>
  );
}
