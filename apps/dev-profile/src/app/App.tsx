import { AppLayout } from './AppLayout';
import { Navigation } from '../navigation';
import { navigationItems } from '../navigation';

export function App() {
  return <AppLayout navigation={<Navigation items={navigationItems} />}></AppLayout>;
}
